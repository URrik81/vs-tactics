import styled from "styled-components";

import { elementColors } from "@src/styles/elementColors";
import Button from "./Button";

interface Props {
  children?: React.ReactNode;
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${elementColors.backgroundColor};
`;

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Button>Login</Button>
      {children}
    </Container>
  );
};

export default Layout;
