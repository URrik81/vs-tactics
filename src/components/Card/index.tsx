import React, { useState } from "react";
import styled from "styled-components";
import elementColors from "@src/styles/elementColors";
import { staticAsset } from "@src/styles/utils";

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
  border: 2px solid ${elementColors.itemBorderColor};
  border-radius: 0.5em;
  background: ${elementColors.itemBackground};
  background-image: url(${({ order }) => order.imagePath});
  background-repeat: no-repeat;
  background-size: auto auto;
`;

//  background-image: url(${({ order }) => staticAsset(order.imagePath)});

interface CardProps {
  order: number;
  onOrderChanged: (order: number) => void;
}

const Card = ({ order: number, onOrderChanged }: CardProps) => {
  const [order, setOrder] = useState<OrderType>(orderArray[0]);

  function onChangeOrder() {
    let newOrder = order.order + 1 > 3 ? 1 : order.order + 1;
    setOrder(orderArray[newOrder]);
    onOrderChanged(orderArray[newOrder].order);
  }

  return (
    <CardContainer
      order={order}
      onClick={() => onChangeOrder()}
    ></CardContainer>
  );
};

export default Card;
