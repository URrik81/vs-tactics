export const DEFAULT_TEXT_SIZE = 16;

export type ColorType = {
  warning: string;
  white: string;
  black: string;

  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
  gray6: string;
  gray7: string;
  gray8: string;
  gray9: string;
  gray10: string;

  blue1: string;
  blue2: string;
  blue3: string;
  blue4: string;
  blue5: string;
  blue6: string;
  blue7: string;
  blue8: string;
  blue9: string;
  blue10: string;

  green1: string;
  green2: string;
  green3: string;
  green4: string;
  green5: string;
  green6: string;
  green7: string;
  green8: string;
  green9: string;
  green10: string;
};

export type ElementColorType = {
  default: string;
  hover: string;
  active: string;
  disabled: string;
};

export type ButtonColorType = {
  component: ElementColorType;
  border: ElementColorType;
  text: ElementColorType;
  icon: ElementColorType;
};
