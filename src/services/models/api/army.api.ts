import { LordDto, voguromTanHartag } from "./lord.api";

export enum ArmyOrder {
  Unknown = "unknown",
  Empty = "empty",
  None = "none",
  Arrows = "arrows",
  Swords = "swords",
  Shield = "shield",
}

export const ArmyOrderSequence: ArmyOrder[] = [
  ArmyOrder.None,
  ArmyOrder.Arrows,
  ArmyOrder.Swords,
  ArmyOrder.Shield,
];

export enum ArmyTerranType {
  Any = "any",
  //TODO movement and battle bonuses
}

export enum ArmyMovementType {
  Infantry = "infantry",
  Cavalry = "cavalry",
  CargoFleet = "cargo_fleet",
  Fleet = "fleet",
  Magic = "magic",
  Dragon = "dragon",
}

export type BattleAdvantage = -1 | 0 | 1;

export interface Army {
  terran: ArmyTerranType;
  movement: ArmyMovementType;
  advantage: BattleAdvantage;
  strength: number;
}

export interface ArmyDto {
  id: number;
  army: Army;
  lord: LordDto;
}

export const ranger: Army = {
  terran: ArmyTerranType.Any,
  movement: ArmyMovementType.Infantry,
  advantage: 0,
  strength: 1,
};

export const militia: Army = {
  terran: ArmyTerranType.Any,
  movement: ArmyMovementType.Infantry,
  advantage: 0,
  strength: 2,
};

export const heavyInfantry: Army = {
  terran: ArmyTerranType.Any,
  movement: ArmyMovementType.Infantry,
  advantage: 0,
  strength: 3,
};

export const knights: Army = {
  terran: ArmyTerranType.Any,
  movement: ArmyMovementType.Cavalry,
  advantage: 0,
  strength: 4,
};

export const saaremKnight: ArmyDto = {
  id: 1,
  army: knights,
  lord: voguromTanHartag,
};

export const saaremInfantry: ArmyDto = {
  id: 1,
  army: heavyInfantry,
  lord: voguromTanHartag,
};

export const saaremMilitia: ArmyDto = {
  id: 1,
  army: militia,
  lord: voguromTanHartag,
};
