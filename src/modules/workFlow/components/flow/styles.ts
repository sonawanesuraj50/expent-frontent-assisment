import styled from "styled-components";

export const FlowContainer = styled.div`
  width: 500px;
  height: 500px;
  margin: 50px auto 0 auto;

  @media (max-width: 680px) {
    width: 100vw;
    min-height: calc(120px - 100vh);
  }
`;
