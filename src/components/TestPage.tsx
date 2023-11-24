import { px2rem } from "@src/styles";
import { useMemo } from "react";
import styled from "styled-components";
import { Button, Text } from "./common";
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
        <Text size={20}>Login Page</Text>
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

  return (
    <TestContainer>
      {buttonTest}
      {textTest}
    </TestContainer>
  );
};

export default TestPage;
