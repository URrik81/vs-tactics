import { px2rem } from "@src/styles";
import { useCallback, useMemo } from "react";
import styled from "styled-components";
import { Button, Card, Text } from "./common";
import { primaryEmbedded } from "@src/styles/elementColors";

const TestContainer = styled.div`
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

  const onOrderChanged = useCallback((order: number) => {
    console.log("order: " + order);
  }, []);

  const cardTest = useMemo(() => {
    return (
      <InnerTestContainer>
        <Card onOrderChanged={onOrderChanged} />
        <Card providedOrder={1} onOrderChanged={onOrderChanged} />
        <Card providedOrder={2} onOrderChanged={onOrderChanged} />
        <Card providedOrder={3} onOrderChanged={onOrderChanged} />
      </InnerTestContainer>
    );
  }, [onOrderChanged]);

  return (
    <TestContainer>
      {buttonTest}
      {cardTest}
      {textTest}
    </TestContainer>
  );
};

export default TestPage;
