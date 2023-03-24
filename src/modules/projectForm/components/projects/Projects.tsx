import { IMAGES } from "shared";
import GeneralInformation from "../generalInformation";
import * as Styles from "./styles";

const Projects = () => {
  return (
    <Styles.ProjectContainer>
      <Styles.ProjectPage>
        <Styles.ProjectPageHeaderContent>
          <Styles.TextButtonWrap>
            <div>
              <Styles.ProjectPageUrlText>
                Projects {">"} ... {">"} Project Information
              </Styles.ProjectPageUrlText>
              <Styles.ProjectPageHeader>
                Request for Software
              </Styles.ProjectPageHeader>

              <Styles.DateIconWrap>
                <img src={IMAGES.calenderIcon.default} alt="arrow" />

                <Styles.ProjectPageUrlText>
                  12 October - 26 October, 2022
                </Styles.ProjectPageUrlText>
                <Styles.Dot />
                <Styles.UserNameIconWrap>
                  <Styles.UserNameIconPrimary>DG</Styles.UserNameIconPrimary>
                  <Styles.UserNameIconSecondary>
                    SJ
                  </Styles.UserNameIconSecondary>
                  <Styles.UserNameIconTertiary>AG</Styles.UserNameIconTertiary>
                </Styles.UserNameIconWrap>
              </Styles.DateIconWrap>
            </div>
            <Styles.ProjectOverviewButton>
              Project Overview
              <img src={IMAGES.rightArrow.default} alt="arrow" />
            </Styles.ProjectOverviewButton>
          </Styles.TextButtonWrap>

          <Styles.ProjectTextInfoContainer>
            <Styles.ProjectTextInfoWrap>
              <Styles.ProjectTextHeader>
                Pre-Evaluation Feedback
              </Styles.ProjectTextHeader>
              <Styles.ProjectTextSubHeader>
                12 October, 2022
              </Styles.ProjectTextSubHeader>
              <Styles.ProjectTextBorder />
            </Styles.ProjectTextInfoWrap>

            <Styles.ProjectTextInfoWrap>
              <Styles.ProjectTextHeader>Intake form</Styles.ProjectTextHeader>
              <Styles.ProjectTextSubHeader>
                16 October, 2022
              </Styles.ProjectTextSubHeader>
              <Styles.ProjectTextBorderSecondary>
                <div />
              </Styles.ProjectTextBorderSecondary>
            </Styles.ProjectTextInfoWrap>
          </Styles.ProjectTextInfoContainer>
        </Styles.ProjectPageHeaderContent>
        <Styles.PageBorder />

        <Styles.ProjectPageMainContent>
          <Styles.TabContainer>
            <Styles.TabWrap active={true}>General Information</Styles.TabWrap>

            <Styles.TabWrap active={false}>Security & Privacy</Styles.TabWrap>

            <Styles.TabWrap active={false}>Upload Documents </Styles.TabWrap>
          </Styles.TabContainer>
          <div>
            <GeneralInformation />
          </div>
        </Styles.ProjectPageMainContent>
      </Styles.ProjectPage>
    </Styles.ProjectContainer>
  );
};

export default Projects;
