import { Link } from "react-router-dom";
import styled from "styled-components";
import { elementColors, primaryText } from "../../styles/elementColors";

const SidebarContainer = styled.aside`
  float: left;
  width: 15%;
  height: 100vh;
  background-color: ${elementColors.backgroundHeaderColor};
  color: ${primaryText.default};
`;

const SidebarHeader = styled.h3`
  margin: 30px;
`;

const ActionBar = styled.ul`
  margin: 30px;
  list-style: none;
`;

const ActionBarItem = styled.li`
  margin: 30px;
  cursor: pointer;
  color: ${primaryText.default};
`;

export default function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader>To Do List</SidebarHeader>
      <ActionBar>
        <ActionBarItem>
          <Link to="/card">Card</Link>
        </ActionBarItem>
      </ActionBar>
    </SidebarContainer>
  );
}
