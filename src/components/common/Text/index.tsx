import { PropsWithChildren, HTMLAttributes } from "react";
import styled, { css } from "styled-components";

import { px2rem } from "@src/styles";
import { primaryText } from "@src/styles/elementColors";
import { DEFAULT_TEXT_SIZE, ElementColorType } from "@src/styles/types";

type Props = {
  disabled?: boolean;
  colorType?: ElementColorType;
  size?: number;
} & HTMLAttributes<HTMLElement>;

const Container = styled.div<{
  disabled?: boolean;
  colorType: ElementColorType;
  size: number;
}>`
  width: 100%;
  font-size: ${({ size }) => px2rem(size)};
  ${({ disabled, colorType }) =>
    disabled
      ? css`
          cursor: pointer;
          pointer-events: none;
          color: ${colorType.disabled};
        `
      : css`
          pointer-events: all;
          color: ${colorType.default};
        `};
`;

const Text: React.FC<PropsWithChildren<Props>> = ({
  children,
  disabled,
  colorType = primaryText,
  size = DEFAULT_TEXT_SIZE,
}) => {
  return (
    <Container size={size} disabled={disabled} colorType={colorType}>
      {children}
    </Container>
  );
};

export default Text;
