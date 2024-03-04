import { px2rem } from "@src/styles";
import { useCallback, useMemo } from "react";
import styled from "styled-components";
import { Button, Card, Text } from "./common";
import { primaryEmbedded } from "@src/styles/elementColors";
import {
  ArmyOrder,
  heavyInfantry,
  knights,
  saaremInfantry,
  saaremKnight,
  saaremMilitia,
} from "@src/services/models/api/army.api";
import BattleUnit from "./complex/BattleUnit";
import { BattleOrder } from "./complex";

const TestContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${px2rem(25)};
`;

const InnerTestContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${px2rem(20)};
  gap: ${px2rem(10)};
`;

const BattleUnitContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${px2rem(700)};
  padding: ${px2rem(20)};
  gap: ${px2rem(10)};
`;

const TestPage: React.FC = () => {
  const buttonTest = useMemo(() => {
    return (
      <InnerTestContainer>
        <Button>Login</Button>
        <Button>
          <Text size={20} colorType={primaryEmbedded}>
            Login Page
          </Text>
        </Button>
        <Button disabled>
          <Text size={20} colorType={primaryEmbedded}>
            Login Page
          </Text>
        </Button>
      </InnerTestContainer>
    );
  }, []);

  const textTest = useMemo(() => {
    return (
      <InnerTestContainer>
        <Text size={20}>Login Page</Text>
        <Text size={10}>Login Page</Text>
        <Text size={20} disabled>
          Login Page
        </Text>
      </InnerTestContainer>
    );
  }, []);

  const onOrderChanged = useCallback((order: ArmyOrder) => {
    console.log("order: " + order);
  }, []);

  const cardTest = useMemo(() => {
    return (
      <>
        {false && (
          <InnerTestContainer>
            <Card onOrderChanged={onOrderChanged} />
            <Card
              providedOrder={ArmyOrder.Arrows}
              onOrderChanged={onOrderChanged}
            />
            <Card
              providedOrder={ArmyOrder.Swords}
              onOrderChanged={onOrderChanged}
            />
            <Card
              providedOrder={ArmyOrder.Shield}
              onOrderChanged={onOrderChanged}
            />
          </InnerTestContainer>
        )}

        {true && (
          <BattleUnitContainer>
            <BattleUnit
              army={heavyInfantry}
              ordersUpdated={(orders: ArmyOrder[]) => console.log({ orders })}
              isStraight={false}
              startPosition={0}
              frontWidth={3}
              isManaged={false}
            />

            <BattleUnit
              army={heavyInfantry}
              startPosition={0}
              frontWidth={2}
              ordersUpdated={(orders: ArmyOrder[]) => console.log({ orders })}
              isManaged={true}
            />
            <BattleUnit
              army={knights}
              startPosition={1}
              frontWidth={2}
              ordersUpdated={(orders: ArmyOrder[]) => console.log({ orders })}
              isManaged={true}
            />
          </BattleUnitContainer>
        )}

        {false && (
          <BattleUnitContainer>
            <BattleOrder armies={[saaremKnight]} />
            <BattleOrder armies={[saaremInfantry]} />
            <BattleOrder armies={[saaremMilitia]} />
          </BattleUnitContainer>
        )}
      </>
    );
  }, [onOrderChanged]); //saaremKnight

  return <TestContainer>{cardTest}</TestContainer>;
};

export default TestPage;
