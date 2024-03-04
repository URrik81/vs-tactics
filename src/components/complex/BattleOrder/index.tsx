import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import { ArmyDto, ArmyOrder } from "@src/services/models/api/army.api";
import { Size, px2rem } from "@src/styles";
import { BattleUnit } from "@src/components/complex";
import { Ensign, Text } from "@src/components/common";

interface Props {
  armies: ArmyDto[];
}

const BattleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${px2rem(16)};
`;

const UnitContainer = styled.div`
  display: flex;
  gap: ${px2rem(16)};
`;

const UnitInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${px2rem(8)};
`;

const UnitLine = styled.div`
  display: flex;
  gap: ${px2rem(8)};
`;

const BattleOrder: React.FC<Props> = ({ armies }) => {
  const [order, setOrder] = useState<ArmyDto[]>(armies);

  useEffect(() => {
    setOrder(armies);
  }, [armies]);

  const getUnitInfo = useCallback((army: ArmyDto) => {
    return (
      <UnitInfoContainer>
        <UnitLine>
          <Ensign size={Size.Small} ensignData={army.lord.ensign} />
          <Text>{army.lord.country.name}</Text>
        </UnitLine>
      </UnitInfoContainer>
    );
  }, []);

  const getUnit = useCallback(
    (army: ArmyDto) => {
      return (
        <UnitContainer>
          <BattleUnit
            army={army.army}
            ordersUpdated={function (orders: ArmyOrder[]): void {
              throw new Error("Function not implemented.");
            }}
          />
          {getUnitInfo(army)}
        </UnitContainer>
      );
    },
    [getUnitInfo]
  );

  return (
    <BattleContainer>{order.map((army) => getUnit(army))}</BattleContainer>
  );
};

export default BattleOrder;
