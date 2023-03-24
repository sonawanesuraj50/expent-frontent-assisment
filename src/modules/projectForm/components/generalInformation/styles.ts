import { ErrorMessage, Field } from "formik";
import { isActive } from "shared/types";
import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const QuestionsTextWrap = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 59, 77, 0.05);
  border-radius: 12px;
  padding: 16px;
`;

export const QuestionHeader = styled.div`
  font-family: "Manrope-SemiBold";
  font-size: 16px;
  line-height: 148%;
  color: #003b4d;
`;

export const QuestionsWrap = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const RadioButtonWrap = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 690px) {
    flex-direction: column;
  }
`;

export const RadioContainer = styled.div<isActive>`
  width: 248px;
  height: 44px;
  border: 1px solid rgba(0, 59, 77, 0.15);
  border-radius: 10px;
  font-family: "Manrope-Medium";
  font-size: 14px;
  line-height: 140%;
  color: #003b4d;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;

  .radioBg {
    width: 44px;
    height: 100%;
    background: rgba(0, 59, 77, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .radioContainer {
    width: 16px;
    height: 16px;
    outline: 1.25px solid rgba(0, 59, 77, 0.6);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: ${({ active }) =>
        active ? "rgb(100, 103, 222)" : "transparent"};
    }
  }

  @media (max-width: 690px) {
    width: 100%;
  }
`;

export const SelectDropdown = styled(Field)`
  width: 306px;
  height: 44px;
  background: rgba(0, 59, 77, 0.05);
  border: 1px solid rgba(0, 59, 77, 0.15);
  border-radius: 10px;
  padding: 12px;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Error = styled(ErrorMessage)`
  margin-top: 5px;
  color: red;
`;

export const UploadContainer = styled.div`
  width: 100%;
  height: 124px;
  background: rgba(0, 59, 77, 0.05);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
`;

export const UploadText = styled.div`
  font-family: "Manrope-SemiBold";
  font-size: 14px;
  line-height: 140%;
  color: #003b4d;
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 4px;

  span {
    color: #17bebb;
    img {
      margin-right: 4px;
    }
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  margin-left: auto;
  gap: 20px;

  @media (max-width: 510px) {
    flex-direction: column;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
`;

export const SaveButton = styled.button`
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
`;

export const NextButton = styled(SaveButton)`
  background: #17bebb;
  color: #003b4d;
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    width: 15px;
    height: 15px;
  }
`;
