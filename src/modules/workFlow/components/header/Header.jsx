import { useNavigate } from "react-router-dom";
import { IMAGES } from "shared";
import * as Styles from "./styles";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Styles.HeaderContainer>
      <Styles.IconTextWrap>
        <Styles.BackArrow
          src={IMAGES.backArrow.default}
          alt="arrow"
          onClick={() => navigate(-1)}
        />
        <Styles.TextBorder />
        <div>
          <Styles.HeaderText>Procurement Workflow</Styles.HeaderText>
          <Styles.SubHeaderText>Step 2: Workflow Creation</Styles.SubHeaderText>
        </div>
      </Styles.IconTextWrap>

      <Styles.ButtonWrap>
        <Styles.CancelButton>Cancel</Styles.CancelButton>
        <Styles.CancelButton>Save Draft</Styles.CancelButton>
        <Styles.FinishButton>Finish</Styles.FinishButton>
      </Styles.ButtonWrap>
    </Styles.HeaderContainer>
  );
};

export default Header;
