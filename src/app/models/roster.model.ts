export interface Roster {
  title: string;
  detachments: Detachment[];
}

export interface Detachment {
  title: string;
  units: Unit[];
}

export interface Costs {
  powerLevel: number;
  points: number;
  commandPoints: number;
}

export interface Unit {
  title: string;
  models: Model[];
}

export interface Model {
  title: string;
  amount: number;
  profiles: Profile[];
  weapons: Weapon[];
  abilities: Ability[];
}

export interface Profile {
  title: string;
  movement: string;
  weaponSkill: string;
  ballisticSkill: string;
  strength: string;
  toughness: string;
  wounds: string;
  attacks: string;
  leadership: string;
  save: string;
}

export interface Weapon {
  title: string;
  amount: number;
  abilities: string[];
  profiles: WeaponProfile[];
}

export interface WeaponProfile {
  title: string;
  range: string;
  type: string;
  strength: string;
  armourPenetration: string;
  damage: string;
  abilities: string;
}

export interface Ability {
  title: string;
  description: string;
}
