import styled from "styled-components";

export const FlowContainer = styled.div`
  width: 88px;
  height: 446px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 680px) {
    width: fit-content;
    height: fit-content;
    margin: 10px auto 0 auto;
    flex-direction: row;
    padding: 0 20px;
    gap: 20px;
  }
`;

export const SidebarTextIconWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 680px) {
    height: 88px;
  }
`;

export const SidebarText = styled.div`
  font-family: "Manrope-Medium";
  font-size: 10px;
  line-height: 148%;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 8px;
`;
