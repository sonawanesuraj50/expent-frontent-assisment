import styled from "styled-components";

export const WorkFlowContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #003b4d;
`;

export const SidebarWrap = styled.div`
  display: grid;
  grid-template-columns: 88px 1fr;
  align-items: center;
  width: 95%;
  margin: 0 auto;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;
