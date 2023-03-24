export interface isActive {
  active: boolean;
}

export interface QuestionProps {
  children: React.ReactNode;
  questionNumber: string;
  question: string;
}

export interface FormInitialValues {
  sourcing: string;
  user: string;
  expense: string;
  piiType: string;
  sharingPii: string;
  accessAws: string;
}
