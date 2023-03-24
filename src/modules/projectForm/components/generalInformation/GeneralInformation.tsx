import { Formik, Form } from "formik";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { FormInitialValues, IMAGES } from "shared";
import * as Yup from "yup";
import Questions from "../questions";
import * as Styles from "./styles";
import { useNavigate } from "react-router-dom";

const initialValues: FormInitialValues = {
  sourcing: "",
  user: "",
  expense: "",
  piiType: "",
  sharingPii: "",
  accessAws: "",
};

const schema = Yup.object().shape({
  sourcing: Yup.string().required("Select sourcing"),
  user: Yup.string().required("Select user"),
  expense: Yup.string().required("Select expense"),
  piiType: Yup.string().required("Select pii type"),
  sharingPii: Yup.string().required("Choose valid option"),
  accessAws: Yup.string().required("Choose valid option"),
});

const GeneralInformation = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("form submit");
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => {
        console.log(values);
        return (
          <Form>
            <Styles.PageContainer>
              <Styles.QuestionsTextWrap>
                <Styles.QuestionHeader>
                  General Information
                </Styles.QuestionHeader>
                <Styles.QuestionsWrap>
                  <Questions
                    questionNumber="Question 1"
                    question="Please select your sourcing option"
                  >
                    <div>
                      <Styles.SelectDropdown
                        as="select"
                        name="sourcing"
                        onChange={(e) =>
                          setFieldValue("sourcing", e.target.value)
                        }
                      >
                        <option value="">Choose sourcing</option>
                        <option value="sourcing1">sourcing1</option>
                        <option value="sourcing2">sourcing2</option>
                      </Styles.SelectDropdown>
                      <Styles.Error component="div" name="sourcing" />
                    </div>
                  </Questions>
                </Styles.QuestionsWrap>

                <Styles.QuestionsWrap>
                  <Questions
                    questionNumber="Question 2"
                    question="Number range of users who will use the product"
                  >
                    <div>
                      <Styles.SelectDropdown
                        as="select"
                        name="user"
                        onChange={(e) => setFieldValue("user", e.target.value)}
                      >
                        <option value="">Choose users range</option>
                        <option value="user1">user1</option>
                        <option value="user2">user2</option>
                      </Styles.SelectDropdown>
                      <Styles.Error component="div" name="user" />
                    </div>
                  </Questions>
                </Styles.QuestionsWrap>

                <Styles.QuestionsWrap>
                  <Questions
                    questionNumber="Question 3"
                    question="Provide an expected spend"
                  >
                    <div>
                      <Styles.SelectDropdown
                        as="select"
                        name="expense"
                        onChange={(e) =>
                          setFieldValue("expense", e.target.value)
                        }
                      >
                        <option value="">Choose expense range</option>
                        <option value="range1">range1</option>
                        <option value="range1">range1</option>
                      </Styles.SelectDropdown>
                      <Styles.Error component="div" name="expense" />
                    </div>
                  </Questions>
                </Styles.QuestionsWrap>
              </Styles.QuestionsTextWrap>

              <Styles.QuestionsTextWrap>
                <Styles.QuestionHeader>Product Feedback</Styles.QuestionHeader>
                <Styles.QuestionsWrap>
                  <Questions
                    questionNumber="Question 4"
                    question="Will you be sharing PII with the vendor?"
                  >
                    <Styles.RadioButtonWrap>
                      <Styles.RadioContainer
                        active={values.sharingPii === "Yes"}
                        onClick={() => setFieldValue("sharingPii", "Yes")}
                      >
                        <div className="radioBg">
                          <div className="radioContainer">
                            <div />
                          </div>
                        </div>
                        Yes
                      </Styles.RadioContainer>
                      <Styles.RadioContainer
                        active={values.sharingPii === "No"}
                        onClick={() => setFieldValue("sharingPii", "No")}
                      >
                        <div className="radioBg">
                          <div className="radioContainer">
                            <div />
                          </div>
                        </div>
                        No
                      </Styles.RadioContainer>
                    </Styles.RadioButtonWrap>
                    <Styles.Error component="div" name="sharingPii" />
                  </Questions>
                </Styles.QuestionsWrap>

                <Styles.QuestionsWrap>
                  <Questions
                    questionNumber="Question 5"
                    question="What typeof PII will the vendor have access to?"
                  >
                    <div>
                      <Styles.SelectDropdown
                        as="select"
                        name="piiType"
                        onChange={(e) =>
                          setFieldValue("piiType", e.target.value)
                        }
                      >
                        <option value="">Choose one or more PII type</option>
                        <option value="piiType1">piiType1</option>
                        <option value="piiType2">piiType2</option>
                      </Styles.SelectDropdown>
                      <Styles.Error component="div" name="piiType" />
                    </div>
                  </Questions>
                </Styles.QuestionsWrap>

                <Styles.QuestionsWrap>
                  <Questions
                    questionNumber="Question 6"
                    question="Will the vendor have access to AWS Account?*"
                  >
                    <Styles.RadioButtonWrap>
                      <Styles.RadioContainer
                        active={values.accessAws === "Yes"}
                        onClick={() => setFieldValue("accessAws", "Yes")}
                      >
                        <div className="radioBg">
                          <div className="radioContainer">
                            <div />
                          </div>
                        </div>
                        Yes
                      </Styles.RadioContainer>
                      <Styles.RadioContainer
                        active={values.accessAws === "No"}
                        onClick={() => setFieldValue("accessAws", "No")}
                      >
                        <div className="radioBg">
                          <div className="radioContainer">
                            <div />
                          </div>
                        </div>
                        No
                      </Styles.RadioContainer>
                    </Styles.RadioButtonWrap>
                    <Styles.Error component="div" name="accessAws" />
                  </Questions>
                </Styles.QuestionsWrap>
              </Styles.QuestionsTextWrap>

              <Styles.QuestionsTextWrap>
                <Styles.QuestionHeader>Upload Documents</Styles.QuestionHeader>
                <Styles.QuestionsWrap>
                  <Questions
                    questionNumber="Question 7"
                    question="Please attach any relevant contracts or documents"
                  >
                    <Styles.UploadContainer>
                      <img src={IMAGES.fileIcon.default} alt="fileIcon" />
                      <Styles.UploadText>
                        Drag and Drop file or
                        <span>
                          <img src={IMAGES.searchIcon.default} alt="search" />
                          Browse
                        </span>
                      </Styles.UploadText>
                    </Styles.UploadContainer>
                  </Questions>
                </Styles.QuestionsWrap>
              </Styles.QuestionsTextWrap>

              <Styles.ButtonWrap>
                <Styles.SaveButton type="submit">
                  Save and Continue later
                </Styles.SaveButton>

                <Styles.NextButton type="button" onClick={() => navigate(-1)}>
                  Next <ArrowForwardIcon />
                </Styles.NextButton>
              </Styles.ButtonWrap>
            </Styles.PageContainer>
          </Form>
        );
      }}
    </Formik>
  );
};

export default GeneralInformation;
