import { Injectable } from '@angular/core';
import {
  AbilityProfile,
  Force as BsForce,
  PsychicPowerProfile,
  Roster as BSRoster,
  Selection as BsSelection,
  TypeName,
  UnitProfile,
  WeaponProfile,
} from '../libs/rosz2js/types';
import {
  Model,
  Profile,
  PsychicPower,
  Roster,
  Rule,
  Unit,
  Weapon,
} from '../models/roster.model';

@Injectable({ providedIn: 'root' })
export class RosterAdapterService {
  public toRoster(bsRoster: BSRoster): Roster {
    return {
      title: bsRoster.name,
      detachments: bsRoster.forces.map(bsForce => ({
        title: bsForce.name,
        units: this.getUnits(bsForce),
      })),
    };
  }

  private getUnits(detachment: BsForce): Unit[] {
    return detachment.selections
      .filter(selection => ['unit', 'model'].includes(selection.type))
      .map(selection => ({
        title: selection.name,
        models: this.getModels(selection),
        rules: this.getUnitRules(detachment, selection),
      }));
  }

  private getModels(unit: BsSelection): Model[] {
    if (unit.type === 'model') {
      return [
        {
          title: unit.name,
          amount: 1,
          profiles: this.getProfiles(unit),
          weapons: this.getWeapons(unit),
          psychicPowers: this.getPsychicPowers(unit),
        },
      ];
    }

    const unitProfiles = this.getProfiles(unit);

    const models = unit.selections
      .filter(selection => ['unit', 'model'].includes(selection.type))
      .map(selection => {
        const modelProfiles = this.getProfiles(selection);
        const profiles =
          modelProfiles.length > 0 ? modelProfiles : unitProfiles;
        return {
          title: selection.name,
          amount: selection.number,
          profiles: profiles,
          weapons: this.getWeapons(selection),
          psychicPowers: this.getPsychicPowers(selection),
        };
      });

    return this.deduplicateModels(models);
  }

  private getProfiles(unit: BsSelection): Profile[] {
    return unit.profiles
      .filter(
        (profile): profile is UnitProfile => profile.typeName === TypeName.UNIT
      )
      .map(profile => ({
        title: profile.name,
        movement: profile.movement,
        weaponSkill: profile.weaponSkill,
        ballisticSkill: profile.ballisticSkill,
        strength: profile.strength,
        toughness: profile.toughness,
        wounds: profile.wounds,
        attacks: profile.attacks,
        leadership: profile.leadership,
        save: profile.save,
      }));
  }

  private getWeapons(unit: BsSelection): Weapon[] {
    return unit.selections
      .filter(
        selection =>
          selection.type === 'upgrade' &&
          selection.profiles.filter(
            (profile): profile is WeaponProfile =>
              profile.typeName === TypeName.WEAPON
          ).length > 0
      )
      .map(selection => ({
        title: selection.name,
        amount: selection.number,
        abilities: selection.profiles
          .filter(
            (profile): profile is AbilityProfile =>
              profile.typeName === TypeName.ABILITY
          )
          .map(a => a.description),
        profiles: selection.profiles
          .filter(
            (profile): profile is WeaponProfile =>
              profile.typeName === TypeName.WEAPON
          )
          .map(profile => ({
            title: profile.name,
            range: profile.range,
            type: profile.type,
            strength: profile.strength,
            armourPenetration: profile.armourPenetration,
            damage: profile.damage,
            abilities: profile.abilities,
          })),
      }));
  }

  private getPsychicPowers(unit: BsSelection): PsychicPower[] {
    return unit.selections
      .filter(
        selection =>
          selection.type === 'upgrade' &&
          selection.profiles.filter(
            (profile): profile is PsychicPowerProfile =>
              profile.typeName === TypeName.PSYCHIC_POWER
          ).length > 0
      )
      .map(selection => ({
        title: selection.name,
        profiles: selection.profiles
          .filter(
            (profile): profile is PsychicPowerProfile =>
              profile.typeName === TypeName.PSYCHIC_POWER
          )
          .map(profile => ({
            title: profile.name,
            range: profile.range,
            warpCharge: profile.warpCharge,
            description: profile.details,
          })),
      }));
  }

  private getUnitRules(detachment: BsForce, unit: BsSelection): Rule[] {
    const mergedProfiles = (<AbilityProfile[]>[]).concat(
      this.getAbilityProfiles(detachment),
      this.getAbilityProfiles(unit)
    );

    return mergedProfiles
      .map(profile => ({
        title: profile.name,
        description: profile.description,
      }))
      .concat(
        unit.rules.map(rule => ({
          title: rule.name,
          description: rule.description,
        }))
      );
  }

  private getAbilityProfiles(
    selection: BsSelection | BsForce
  ): AbilityProfile[] {
    let profiles: AbilityProfile[] = [];

    selection.selections
      .filter(
        s =>
          s.type === 'upgrade' &&
          s.profiles.filter(
            (profile): profile is WeaponProfile =>
              profile.typeName === TypeName.WEAPON
          ).length === 0
      )
      .forEach(
        subSelection =>
          (profiles = this.getAbilityProfiles(subSelection).concat(profiles))
      );

    if (!isBsForce(selection)) {
      profiles = profiles.concat(
        selection.profiles.filter(
          (p): p is AbilityProfile => p.typeName === TypeName.ABILITY
        )
      );
    }

    return profiles;
  }

  private deduplicateModels(models: Model[]): Model[] {
    const deduplicated: Record<string, Model> = {};
    models.forEach(model => {
      const modelWithoutWeapons: Model = { ...model, weapons: [] };
      const hash = JSON.stringify(modelWithoutWeapons);
      if (!deduplicated[hash]) {
        deduplicated[hash] = model;
        return;
      }
      deduplicated[hash].amount++;
      model.weapons.forEach(weapon => {
        const indexInDeduplicated = deduplicated[hash].weapons.findIndex(
          w => weapon.title === w.title
        );
        if (indexInDeduplicated === -1) {
          deduplicated[hash].weapons.push(weapon);
          return;
        }

        deduplicated[hash].weapons[indexInDeduplicated].amount++;
      });
    });
    return Object.values(deduplicated);
  }
}

function isBsForce(selection: BsForce | BsSelection): selection is BsForce {
  // eslint-disable-next-line no-prototype-builtins
  return !selection.hasOwnProperty('profiles');
}
