import { QuestionProps } from "shared";
import * as Styles from "./styles";

const Questions = (props: QuestionProps) => {
  const { children, question, questionNumber } = props;
  return (
    <Styles.QuestionContainer>
      <Styles.QuestionMiddleBorder />
      <Styles.QuestionText>{questionNumber}</Styles.QuestionText>
      <Styles.QuestionMainBorder />
      <Styles.Question>
        {question}
        <span>*</span>
      </Styles.Question>
      {children}
    </Styles.QuestionContainer>
  );
};

export default Questions;
