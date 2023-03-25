import { useState } from "react";
import * as Styles from "./styles";
import { Header, Projects } from "./components";
import { IMAGES, ProjectTabs } from "shared";

const ProjectForm = () => {
  const [currentTab, setCurrentTab] = useState(ProjectTabs.PROJECTS);

  const renderCurrentTab = () => {
    if (currentTab === ProjectTabs.PROJECTS) {
      return <Projects />;
    }
    return (
      <Styles.ErrorImgContainer>
        <Styles.ErrorImg src={IMAGES.Error404.default} alt="error" />
      </Styles.ErrorImgContainer>
    );
  };

  return (
    <Styles.ProjectInfoContainer>
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {renderCurrentTab()}
    </Styles.ProjectInfoContainer>
  );
};

export default ProjectForm;
