import * as Styles from "./styles";
import { Header, Projects } from "./components";

const ProjectForm = () => {
  return (
    <Styles.ProjectInfoContainer>
      <Header />
      <Projects />
    </Styles.ProjectInfoContainer>
  );
};

export default ProjectForm;
