import React, { useMemo } from "react";
import styled from "styled-components";

import { EnsignDto } from "@src/services/models/api/ensign.api";
import { Size, px2rem } from "@src/styles";

//TODO not finished
interface Props {
  ensignData: EnsignDto;
  size: Size;
}

const EnsignContainer = styled.div<{ size: Size; mainColor: string }>`
  display: flex;
  width: ${({ size }) =>
    px2rem(size === Size.Small ? 40 : size === Size.Medium ? 80 : 160)};
  height: ${({ size }) =>
    px2rem(size === Size.Small ? 16 : size === Size.Medium ? 32 : 64)};
  background-color: ${({ mainColor }) => mainColor};
`;

const Ensign: React.FC<Props> = ({ ensignData, size }) => {
  const mainColor = useMemo(() => {
    return ensignData.seniorEnsign.mainColor;
  }, [ensignData.seniorEnsign.mainColor]);

  return <EnsignContainer size={size} mainColor={mainColor}></EnsignContainer>;
};

export default Ensign;
