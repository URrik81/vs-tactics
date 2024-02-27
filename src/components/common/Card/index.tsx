import React, { useCallback, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { primaryComponent, primaryBorder } from "@src/styles/elementColors";
import { ArmyOrder } from "@src/services/models/api/army.api";

interface OrderType {
  order: ArmyOrder;
  imagePath: string;
}

const orderArray: OrderType[] = [
  {
    order: ArmyOrder.Unknown,
    imagePath: "static/img/unknown.png",
  },
  {
    order: ArmyOrder.Empty,
    imagePath: "",
  },
  {
    order: ArmyOrder.None,
    imagePath: "static/img/none.png",
  },
  {
    order: ArmyOrder.Arrows,
    imagePath: "static/img/arrows.png",
  },
  {
    order: ArmyOrder.Swords,
    imagePath: "static/img/swords.png",
  },
  {
    order: ArmyOrder.Shield,
    imagePath: "static/img/shield.png",
  },
];

const CardContainer = styled.div<{
  order: OrderType;
  isEmpty: boolean;
  isRunaway: boolean;
}>`
  height: 200px;
  width: 150px;
  border-radius: 0.5em;

  ${({ order, isEmpty, isRunaway }) =>
    isEmpty
      ? css`
          background: ${primaryComponent.disabled};
          border: none;
        `
      : isRunaway
      ? css`
          border: 2px solid ${primaryBorder.default};
          background: ${primaryComponent.default};
          background-image: url("static/img/runaway.png"),
            url(${order.imagePath});
        `
      : css`
          border: 2px solid ${primaryBorder.default};
          background: ${primaryComponent.default};
          background-image: url(${order.imagePath});
        `};
  background-repeat: no-repeat;
  background-size: auto auto;
`;

interface CardProps {
  providedOrder?: ArmyOrder;
  isRunaway?: boolean;
  onOrderChanged?: (order: ArmyOrder) => void;
}

const Card: React.FC<CardProps> = ({
  providedOrder = ArmyOrder.None,
  isRunaway = false,
  onOrderChanged,
}) => {
  const getOrder = useCallback((armyOrder: ArmyOrder): OrderType => {
    return (
      orderArray.find((order) => order.order === armyOrder) || orderArray[1]
    );
  }, []);

  const [order, setOrder] = useState<OrderType>(getOrder(providedOrder));

  useEffect(() => {
    if (!providedOrder) return;

    console.log("providedOrder : " + providedOrder);
    setOrder(getOrder(providedOrder));
  }, [getOrder, providedOrder]);

  const onChangeOrder = useCallback(() => {
    if (
      order.order === ArmyOrder.Unknown ||
      order.order === ArmyOrder.Empty ||
      isRunaway
    )
      return;

    let newOrder = orderArray.indexOf(order) + 1;
    newOrder = newOrder > 5 ? 3 : newOrder;
    setOrder(orderArray[newOrder]);
    onOrderChanged?.(orderArray[newOrder].order);
  }, [isRunaway, onOrderChanged, order]);

  return (
    <CardContainer
      order={order}
      isEmpty={order.order === ArmyOrder.Empty}
      isRunaway={isRunaway}
      onClick={() => onChangeOrder()}
    ></CardContainer>
  );
};

export default Card;
