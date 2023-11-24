import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { primaryComponent, primaryBorder } from "@src/styles/elementColors";
//import { staticAsset } from "@src/styles/utils";

interface OrderType {
  order: number;
  imagePath: string;
}

const orderArray: OrderType[] = [
  {
    order: 0,
    imagePath: "static/img/unknown.png",
  },
  {
    order: 1,
    imagePath: "static/img/arrows.png",
  },
  {
    order: 2,
    imagePath: "static/img/swords.png",
  },
  {
    order: 3,
    imagePath: "static/img/shield.png",
  },
];

const CardContainer = styled.div<{ order: OrderType }>`
  height: 200px;
  width: 150px;
  border: 2px solid ${primaryBorder.default};
  border-radius: 0.5em;
  background: ${primaryComponent.default};
  background-image: url(${({ order }) => order.imagePath});
  background-repeat: no-repeat;
  background-size: auto auto;
`;

//  background-image: url(${({ order }) => staticAsset(order.imagePath)});

interface CardProps {
  providedOrder?: number;
  onOrderChanged: (order: number) => void;
}

const Card: React.FC<CardProps> = ({ providedOrder = 0, onOrderChanged }) => {
  const [order, setOrder] = useState<OrderType>(orderArray[providedOrder || 0]);

  useEffect(() => {
    if (!providedOrder) return;

    console.log("providedOrder : " + providedOrder);
    setOrder(orderArray[providedOrder]);
  }, [providedOrder]);

  const onChangeOrder = useCallback(() => {
    let newOrder = order.order + 1 > 3 ? 1 : order.order + 1;
    setOrder(orderArray[newOrder]);
    onOrderChanged(orderArray[newOrder].order);
  }, [onOrderChanged, order.order]);

  return (
    <CardContainer
      order={order}
      onClick={() => onChangeOrder()}
    ></CardContainer>
  );
};

export default Card;
