import colors from "./colors";
import { ButtonColorType, ElementColorType } from "./types";

export const elementColors = {
  backgroundColor: colors.gray1,
  backgroundHeaderColor: colors.gray7,
};

export const primaryComponent: ElementColorType = {
  default: colors.blue5,
  hover: colors.blue3,
  active: colors.blue7,
  disabled: colors.gray4,
};

export const primaryBorder: ElementColorType = {
  default: colors.blue7,
  hover: colors.blue5,
  active: colors.blue9,
  disabled: colors.gray6,
};

export const primaryText: ElementColorType = {
  default: colors.blue7,
  hover: colors.blue7,
  active: colors.blue7,
  disabled: colors.gray3,
};

export const primaryEmbedded: ElementColorType = {
  default: colors.white,
  hover: colors.gray4,
  active: colors.gray6,
  disabled: colors.gray1,
};

export const primaryButton: ButtonColorType = {
  component: primaryComponent,
  border: primaryBorder,
  text: primaryEmbedded,
  icon: primaryEmbedded,
};
