import { isActive } from "shared";
import styled from "styled-components";

export const ProjectContainer = styled.div`
  width: 100%;
  height: calc(100% - 84px);
  padding: 0 28px;
`;

export const ProjectPage = styled.div`
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  border-radius: 20px;
`;

export const ProjectPageHeaderContent = styled.div`
  padding: 28px 32px 0 32px;
`;

export const TextButtonWrap = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 660px) {
    flex-direction: column;
  }
`;

export const ProjectPageUrlText = styled.div`
  font-family: "Manrope-Medium";
  font-size: 14px;
  line-height: 140%;
  color: rgba(0, 59, 77, 0.6);
`;

export const ProjectPageHeader = styled.div`
  font-family: "Manrope-SemiBold";
  font-size: 26px;
  line-height: 140%;
  color: #003b4d;

  @media (max-width: 450px) {
    font-size: 20px;
  }
`;

export const ProjectOverviewButton = styled.button`
  width: fit-content;
  height: 44px;
  padding: 11px 35px;
  border: 1px solid rgba(0, 59, 77, 0.15);
  border-radius: 10px;
  background: transparent;
  font-family: "Manrope-SemiBold";
  font-size: 14px;
  line-height: 140%;
  color: #003b4d;
  cursor: pointer;
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: 660px) {
    margin: 0 auto;
    margin-top: 20px;
  }
`;

export const DateIconWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

export const Dot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #003b4d99;
  margin: 0 10px;
`;

export const UserNameIconWrap = styled.div`
  display: flex;
  position: relative;

  @media (max-width: 450px) {
    width: 60px;
  }
`;

export const UserNameIconPrimary = styled.div`
  width: 24px;
  height: 24px;
  background: #fcaf58;
  border-radius: 50%;
  font-family: "Manrope-SemiBold";
  font-size: 10px;
  line-height: 144%;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserNameIconSecondary = styled(UserNameIconPrimary)`
  background: #907dce;
  position: absolute;
  margin-left: 19px;
`;

export const UserNameIconTertiary = styled(UserNameIconPrimary)`
  background: #90a955;
  position: absolute;
  margin-left: 39px;
`;

export const ProjectTextInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;

  @media (max-width: 660px) {
    flex-direction: column;
    margin-top: 24px;
  }
`;

export const ProjectTextInfoWrap = styled.div`
  width: 220px;
  margin-top: 25px;
  text-align: center;

  @media (max-width: 660px) {
    margin: 0 auto;
  }
`;

export const ProjectTextHeader = styled.div`
  font-family: "Manrope-SemiBold";
  font-size: 16px;
  line-height: 148%;
  color: #003b4d;
`;

export const ProjectTextSubHeader = styled.div`
  font-family: "Manrope-Medium";
  font-size: 12px;
  line-height: 148%;
  color: rgba(0, 59, 77, 0.6);
`;

export const ProjectTextBorder = styled.div`
  width: 100%;
  height: 4px;
  background: #17bebb;
  margin-top: 12px;
`;

export const ProjectTextBorderSecondary = styled(ProjectTextBorder)`
  background: hsla(179, 78%, 20%, 0.1);

  div {
    width: 50%;
    height: 4px;
    background: #17bebb;
  }
`;

export const PageBorder = styled.div`
  width: 100%;
  height: 1px;
  background: #ced9dd;
  margin: 28px 0 24px 0;
`;

export const ProjectPageMainContent = styled.div`
  display: grid;
  grid-template-columns: 298px 1fr;
  gap: 24px;
  padding: 0 32px 32px 32px;

  @media (max-width: 990px) {
    grid-template-columns: 1fr;
  }
`;

export const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TabWrap = styled.div<isActive>`
  width: 100%;
  height: 48px;
  border: ${({ active }) => (active ? "1px solid #003b4d" : "none")};
  background-color: ${({ active }) => (active ? "#FFFFFF" : "#003b4d0d")};
  border-radius: 10px;
  font-family: "Manrope-SemiBold";
  font-size: 14px;
  line-height: 140%;
  color: #003b4d;
  display: flex;
  align-items: center;
  padding: 0 16px;
  cursor: pointer;
`;
