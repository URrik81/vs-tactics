import colors from "@src/styles/colors";

export enum EnsignOrientation {
  Horizontal = "horizontal",
  Vertical = "vertical",
  Diagonal = "diagonal",
}

export interface OwnerEnsign {
  mainColor: string;
  symbolColor: string;
  symbol: string;
}

export interface EnsignDto {
  seniorEnsign: OwnerEnsign;
  vassalEnsign: OwnerEnsign;
  orientation: EnsignOrientation;
}

export const axeEnsign: OwnerEnsign = {
  mainColor: colors.gray6,
  symbolColor: colors.blue4,
  symbol: "axe",
};

export const saaremEnsign: EnsignDto = {
  seniorEnsign: axeEnsign,
  vassalEnsign: axeEnsign,
  orientation: EnsignOrientation.Diagonal,
};
