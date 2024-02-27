import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled, { css } from "styled-components";

import { Army, ArmyOrder } from "@src/services/models/api/army.api";
import { px2rem } from "@src/styles";
import { Card } from "@src/components/common";

interface Props {
  army: Army;
  isManaged?: boolean;
  isStraight?: boolean;
  startPosition?: number;
  frontWidth?: number;
  ordersUpdated: (orders: ArmyOrder[]) => void;
}

const BattleContainer = styled.div<{ frontWidth: number; count: number }>`
  display: grid;
  width: 100%;
  ${({ frontWidth, count }) => css`
    grid-template-columns: repeat(${frontWidth}, 1fr);
    grid-template-rows: repeat(${count / frontWidth + 1}, 1fr);
  `};
  grid-column-gap: ${px2rem(16)};
  grid-row-gap: ${px2rem(16)};
`;

const BattleUnit: React.FC<Props> = ({
  army,
  isManaged = true,
  isStraight = true,
  startPosition = 0,
  frontWidth = 3,
  ordersUpdated,
}) => {
  const [length, setLength] = useState(army.strength);

  useEffect(() => {
    setLength(
      frontWidth *
        Math.floor(
          (startPosition + army.strength) / frontWidth +
            ((startPosition + army.strength) % frontWidth > 0 ? 1 : 0)
        )
    );
  }, [army.strength, frontWidth, startPosition]);

  const orders: ArmyOrder[] = useMemo(() => {
    return [];
  }, []);

  const onOrderChange = useCallback(
    (index: number, order: ArmyOrder) => {
      if (index > orders.length) return;
      orders[index] = order;
      ordersUpdated(orders);
    },
    [orders, ordersUpdated]
  );

  const cards = useMemo(() => {
    const providedOrder = isManaged ? ArmyOrder.None : ArmyOrder.Unknown;
    const cards = [];
    console.log("Card length: " + length);
    for (let i = 0; i < length; i++) {
      if (i < startPosition || i >= startPosition + army.strength) {
        cards.push(<Card key={i} providedOrder={ArmyOrder.Empty} />);
      } else {
        orders[i] = providedOrder;
        cards.push(
          <Card
            key={i}
            providedOrder={providedOrder}
            onOrderChanged={(order) => onOrderChange(i, order)}
          />
        );
      }
    }

    return cards;
  }, [army.strength, isManaged, length, onOrderChange, orders, startPosition]);

  return (
    <BattleContainer frontWidth={frontWidth} count={length}>
      {cards}
    </BattleContainer>
  );
};

export default BattleUnit;
