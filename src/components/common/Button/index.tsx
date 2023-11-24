import { PropsWithChildren, ButtonHTMLAttributes, useCallback } from "react";
import styled, { css } from "styled-components";

import { px2rem } from "@src/styles";
import { primaryButton, primaryEmbedded } from "@src/styles/elementColors";
import { ButtonColorType } from "@src/styles/types";

import Text from "../Text";

type Props = {
  disabled?: boolean;
  loading?: boolean; //TODO
  colorType?: ButtonColorType;
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Container = styled.div<{
  disabled: boolean;
  colorType: ButtonColorType;
}>`
  width: fit-content;
  padding: ${px2rem(8)};
  border-radius: ${px2rem(4)};
  border-width: ${px2rem(2)};
  border-style: solid;
  ${({ disabled, colorType }) =>
    disabled
      ? css`
          cursor: default;
          pointer-events: none;
          background-color: ${colorType.component.disabled};
          border-color: ${colorType.border.disabled};

          color: ${colorType.text.disabled};
        `
      : css`
          cursor: pointer;
          pointer-events: all;
          background-color: ${colorType.component.default};
          border-color: ${colorType.border.default};

          &:hover {
            background-color: ${colorType.component.hover};
            border-color: ${colorType.border.hover};
            color: ${colorType.text.hover};
          }

          &:active {
            background-color: ${colorType.component.active};
            border-color: ${colorType.border.active};
            color: ${colorType.text.active};
          }
        `};
`;

const EmbeddedText = styled(Text)`
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none;
`;

const Button: React.FC<PropsWithChildren<Props>> = ({
  disabled = false,
  colorType = primaryButton,
  children,
  onClick,
}) => {
  const wrapText = useCallback((text: string) => {
    return <EmbeddedText colorType={primaryEmbedded}>{text}</EmbeddedText>;
  }, []);

  const text = children as string;

  return (
    <Container disabled={disabled} colorType={colorType} onClick={onClick}>
      {text ? wrapText(text) : children}
    </Container>
  );
};

export default Button;
