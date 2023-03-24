import { IMAGES } from "shared";
import * as Styles from "./styles";

const FlowSideBar = () => {
  return (
    <Styles.FlowContainer>
      <Styles.SidebarTextIconWrap>
        <img src={IMAGES.formsIcon.default} alt="forms" />
        <Styles.SidebarText>Forms</Styles.SidebarText>
      </Styles.SidebarTextIconWrap>

      <Styles.SidebarTextIconWrap>
        <img src={IMAGES.descriptionIcon.default} alt="forms" />
        <Styles.SidebarText>Questionnaire</Styles.SidebarText>
      </Styles.SidebarTextIconWrap>

      <Styles.SidebarTextIconWrap>
        <img src={IMAGES.workFlowIcon.default} alt="forms" />
        <Styles.SidebarText>Workflow</Styles.SidebarText>
      </Styles.SidebarTextIconWrap>

      <Styles.SidebarTextIconWrap>
        <img src={IMAGES.descriptionIcon.default} alt="forms" />
        <Styles.SidebarText>Summary</Styles.SidebarText>
      </Styles.SidebarTextIconWrap>

      <Styles.SidebarTextIconWrap>
        <img src={IMAGES.descriptionIcon.default} alt="forms" />
        <Styles.SidebarText>Summary</Styles.SidebarText>
      </Styles.SidebarTextIconWrap>

      <Styles.SidebarTextIconWrap>
        <img src={IMAGES.approvalIcon.default} alt="forms" />
        <Styles.SidebarText>Approval</Styles.SidebarText>
      </Styles.SidebarTextIconWrap>

      <Styles.SidebarTextIconWrap>
        <img src={IMAGES.moreIcon.default} alt="forms" />
        <Styles.SidebarText>More</Styles.SidebarText>
      </Styles.SidebarTextIconWrap>
    </Styles.FlowContainer>
  );
};

export default FlowSideBar;
