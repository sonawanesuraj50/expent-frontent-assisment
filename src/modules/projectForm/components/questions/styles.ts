import styled from "styled-components";

export const QuestionContainer = styled.div`
  width: 100%;
  height: fit-content;
  background: #ffffff;
  border-radius: 12px;
  padding: 4px 16px 16px 16px;
`;

export const QuestionMiddleBorder = styled.div`
  width: 64px;
  height: 4px;
  background: rgba(0, 59, 77, 0.15);
  border-radius: 4px;
  margin: 0 auto;
`;

export const QuestionText = styled.div`
  font-family: "Manrope-Medium";
  font-size: 14px;
  line-height: 140%;
  color: rgba(0, 59, 77, 0.6);
  margin-top: 8px;
`;

export const QuestionMainBorder = styled.div`
  width: 100%;
  height: 1px;
  background: #ced9dd;
  border-radius: 4px;
  margin: 8px 0 16px 0;
`;

export const Question = styled.div`
  font-family: "Manrope-SemiBold";
  font-size: 14px;
  line-height: 140%;
  color: #003b4d;
  margin-bottom: 12px;

  span {
    color: red;
  }
`;
