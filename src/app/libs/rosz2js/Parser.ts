/* eslint-disable no-useless-catch */
import {
  isBSCategory,
  isBSCost,
  isBSCostLimit,
  isBSForce,
  isBSProfile,
  isBSPublication,
  isBSRule,
  isBSSelection,
} from './guards';
import FileRosterLoader from './loader/FileRosterLoader';
import ProfileFactory from './profile/ProfileFactory';
import {
  BSCategory,
  BSCharacteristic,
  BSCost,
  BSCostType,
  BSForce,
  BSProfile,
  BSRoster,
  BSRule,
  BSSelection,
  CalculatedCosts,
  Category,
  Cost,
  CostType,
  Force,
  Profile,
  Roster,
  Rule,
  Selection,
  TypeName,
} from './types';

class Parser {
  async parse(file: File): Promise<Roster> {
    let bsRoster: BSRoster;

    try {
      bsRoster = await FileRosterLoader.load(file);
    } catch (error) {
      throw error;
    }

    const {
      $,
      costs: bsCosts,
      costLimits: bsCostLimits,
      forces: bsForces,
    } = bsRoster;

    const roster: Partial<Roster> = {
      gameSystemName: $.gameSystemName,
      name: $.name,
    };

    roster.costs = this.toCostArray(bsCosts);
    roster.costLimits = this.toCostArray(bsCostLimits);
    roster.forces = this.toForceArray(bsForces);

    return roster as Roster;
  }

  private calculateCosts(selections: Selection[]): CalculatedCosts {
    const costs = {
      [CostType.PTS]: 0,
      [CostType.PL]: 0,
      [CostType.CP]: 0,
    };

    const getCost = (selection: Selection, costType: CostType): number =>
      selection.costs.find(cost => cost.name === costType)?.value || 0;

    selections.forEach(selection => {
      costs.pts += getCost(selection, CostType.PTS);
      costs.PL += getCost(selection, CostType.PL);
      costs.CP += getCost(selection, CostType.CP);
    });

    return costs;
  }

  private toCostArray(
    bsCosts:
      | Array<{ cost: BSCost[] } | { costLimit: BSCost[] } | string>
      | undefined,
    additionalCosts: CalculatedCosts = {
      [CostType.PTS]: 0,
      [CostType.PL]: 0,
      [CostType.CP]: 0,
    }
  ): Cost[] {
    const costs: Cost[] = [];

    if (bsCosts) {
      bsCosts.forEach(bsCosts => {
        (isBSCost(bsCosts)
          ? bsCosts.cost
          : isBSCostLimit(bsCosts)
          ? bsCosts.costLimit
          : []
        ).forEach(bsCost => {
          let name: CostType;
          switch (bsCost.$.name) {
            case BSCostType.PTS:
              name = CostType.PTS;
              break;
            case BSCostType.CP:
              name = CostType.CP;
              break;
            case BSCostType.PL:
            default:
              name = CostType.PL;
          }

          costs.push({
            value: +bsCost.$.value + additionalCosts[name],
            name,
          });
        });
      });
    }

    return costs;
  }

  private toForceArray(
    bsForces: Array<{ force: BSForce[] } | string> | undefined
  ): Force[] {
    const forces: Force[] = [];

    if (!bsForces) {
      return [];
    }

    bsForces.forEach(bsForces => {
      if (isBSForce(bsForces)) {
        bsForces.force.forEach(bsForce => {
          const force: Partial<Force> = {
            name: bsForce.$.name,
            catalogueName: bsForce.$.catalogueName,
          };

          force.publications = this.toPublicationArray(bsForce.publications);
          force.categories = this.toCategoryArray(bsForce.categories);
          force.forces = this.toForceArray(bsForce.forces);
          force.rules = this.toRuleArray(bsForce.rules);
          force.selections = this.toSelectionArray(bsForce.selections);

          forces.push(force as Force);
        });
      }
    });

    return forces;
  }

  private toPublicationArray(
    bsPublications: Array<
      { publication: Array<{ $: { name: string } }> } | string
    >
  ): string[] {
    const publications: string[] = [];
    bsPublications.forEach(bsPublications => {
      if (isBSPublication(bsPublications)) {
        bsPublications.publication.forEach(bsPublication => {
          publications.push(bsPublication.$.name);
        });
      }
    });

    return publications;
  }

  private toCategoryArray(
    bsCategories: Array<{ category: BSCategory[] } | string> | undefined
  ): Category[] {
    if (!bsCategories) {
      return [];
    }

    const categories: Category[] = [];
    bsCategories.forEach(bsCategories => {
      if (isBSCategory(bsCategories)) {
        bsCategories.category.forEach(bsCategory => {
          categories.push({
            primary: bsCategory.$.primary === 'true',
            name: bsCategory.$.name,
          });
        });
      }
    });

    return categories;
  }

  private toRuleArray(
    bsRules: Array<{ rule: BSRule[] } | string> | undefined
  ): Rule[] {
    const rules: Rule[] = [];

    if (!bsRules) {
      return [];
    }

    bsRules.forEach(bsRules => {
      if (isBSRule(bsRules)) {
        bsRules.rule.forEach(bsRule => {
          rules.push({
            name: bsRule.$.name,
            description: bsRule.description[0] || '-',
          });
        });
      }
    });

    return rules;
  }

  private toSelectionArray(
    bsSelections: Array<{ selection: BSSelection[] } | string> | undefined
  ): Selection[] {
    if (!bsSelections) {
      return [];
    }

    const selections: Selection[] = [];
    bsSelections.forEach(bsSelections => {
      if (isBSSelection(bsSelections)) {
        bsSelections.selection.forEach(bsSelection => {
          const selection: Partial<Selection> = {
            number: +bsSelection.$.number,
            type: bsSelection.$.type,
            name: bsSelection.$.name,
            customName: bsSelection.$.customName,
            customNotes: bsSelection.$.customNotes,
          };

          selection.categories = this.toCategoryArray(bsSelection.categories);
          selection.rules = this.toRuleArray(bsSelection.rules);
          selection.profiles = this.toProfileArray(bsSelection.profiles);
          selection.selections = this.toSelectionArray(bsSelection.selections);
          selection.costs = this.toCostArray(
            bsSelection.costs,
            this.calculateCosts(selection.selections)
          );

          selections.push(selection as Selection);
        });
      }
    });
    return selections;
  }

  private toProfileArray(
    bsProfiles:
      | Array<{ profile: BSProfile<BSCharacteristic>[] } | string>
      | undefined
  ): Profile<TypeName>[] {
    if (!bsProfiles) {
      return [];
    }

    const profiles: Profile<TypeName>[] = [];
    bsProfiles.forEach(bsProfiles => {
      if (isBSProfile(bsProfiles)) {
        bsProfiles.profile.forEach(bsProfile => {
          profiles.push(ProfileFactory.getProfile(bsProfile));
        });
      }
    });

    return profiles;
  }
}

export default new Parser();
