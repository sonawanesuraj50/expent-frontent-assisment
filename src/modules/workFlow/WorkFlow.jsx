import { Flow, FlowSideBar, Header } from "./components";
import * as Styles from "./styles";

const WorkFlow = () => {
  return (
    <Styles.WorkFlowContainer>
      <Header />
      <Styles.SidebarWrap>
        <FlowSideBar />
        <Flow />
      </Styles.SidebarWrap>
    </Styles.WorkFlowContainer>
  );
};

export default WorkFlow;
