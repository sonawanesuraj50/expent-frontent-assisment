import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 95%;
  height: 84px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 0 0 25px 25px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 0 20px;

  @media (max-width: 795px) {
    flex-direction: column;
    height: 120px;
    gap: 10px;
  }
`;

export const IconTextWrap = styled.div`
  display: flex;
  align-self: start;
`;

export const BackArrow = styled.img`
  cursor: pointer;
`;

export const TextBorder = styled.div`
  height: 40px;
  border-right: 1px solid rgba(255, 255, 255, 0.15);
  margin: 0 24px 0 16px;
`;

export const HeaderText = styled.div`
  font-family: "Manrope-SemiBold";
  font-size: 20px;
  line-height: 148%;
  color: #ffffff;
`;

export const SubHeaderText = styled.div`
  font-family: "Manrope-Medium";
  font-size: 12px;
  line-height: 148%;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 4px;
`;

export const ButtonWrap = styled.div`
  margin-left: auto;
  display: flex;
  gap: 12px;

  @media (max-width: 795px) {
    margin: 0 auto;
  }
`;

export const CancelButton = styled.button`
  width: fit-content;
  height: 44px;
  padding: 11px 35px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  background: transparent;
  font-family: "Manrope-SemiBold";
  font-size: 14px;
  line-height: 140%;
  color: #ffffff;
  cursor: pointer;
`;

export const FinishButton = styled(CancelButton)`
  background: #17bebb;
  color: #003b4d;
`;
