import { useState } from "react";
import { HeaderProps, IMAGES, ProjectTabs } from "shared";
import * as Styles from "./styles";

const Header = (props: HeaderProps) => {
  const { currentTab, setCurrentTab } = props;
  const [showSidebar, setShowSidebar] = useState(false);

  const handleTabs = (tab: ProjectTabs) => {
    setCurrentTab(tab);
  };

  const ResponsiveSidebar = () => {
    return (
      <Styles.ResponsiveSidebarContainer active={showSidebar}>
        <Styles.CloseSidebarIcon onClick={() => setShowSidebar(!showSidebar)} />
        <Styles.ResponsiveNav>
          <Styles.NavText
            active={currentTab === ProjectTabs.Home}
            onClick={() => handleTabs(ProjectTabs.Home)}
          >
            Home
          </Styles.NavText>
          <Styles.NavText
            active={currentTab === ProjectTabs.DASHBOARD}
            onClick={() => handleTabs(ProjectTabs.DASHBOARD)}
          >
            DAShboard
          </Styles.NavText>
          <Styles.NavText
            active={currentTab === ProjectTabs.VENDORS}
            onClick={() => handleTabs(ProjectTabs.VENDORS)}
          >
            Vendors
          </Styles.NavText>
          <Styles.NavText
            active={currentTab === ProjectTabs.PROJECTS}
            onClick={() => handleTabs(ProjectTabs.PROJECTS)}
          >
            Projects
          </Styles.NavText>
        </Styles.ResponsiveNav>
      </Styles.ResponsiveSidebarContainer>
    );
  };

  return (
    <Styles.HeaderContainer>
      <Styles.LogoTextWrap>
        <img src={IMAGES.expentLogo.default} alt="logo" />
        <Styles.ExpentText>Expent</Styles.ExpentText>
      </Styles.LogoTextWrap>

      <Styles.NavigationWrap>
        <Styles.NavText
          active={currentTab === ProjectTabs.Home}
          onClick={() => handleTabs(ProjectTabs.Home)}
        >
          Home
        </Styles.NavText>
        <Styles.NavText
          active={currentTab === ProjectTabs.DASHBOARD}
          onClick={() => handleTabs(ProjectTabs.DASHBOARD)}
        >
          DAShboard
        </Styles.NavText>
        <Styles.NavText
          active={currentTab === ProjectTabs.VENDORS}
          onClick={() => handleTabs(ProjectTabs.VENDORS)}
        >
          Vendors
        </Styles.NavText>
        <Styles.NavText
          active={currentTab === ProjectTabs.PROJECTS}
          onClick={() => handleTabs(ProjectTabs.PROJECTS)}
        >
          Projects
        </Styles.NavText>
      </Styles.NavigationWrap>

      <Styles.UserInfoIconWrap>
        <Styles.IconsWrap>
          <img src={IMAGES.bookmarkLogo.default} alt="bookmark" />
        </Styles.IconsWrap>
        <Styles.IconsWrap>
          <img src={IMAGES.notificationLogo.default} alt="bookmark" />
        </Styles.IconsWrap>
        <Styles.UserIconsWrap>
          <img src={IMAGES.userLogo.default} alt="user" />
        </Styles.UserIconsWrap>

        <Styles.UserText>Smith Jones</Styles.UserText>

        <img src={IMAGES.downArrow.default} alt="arrow" />
      </Styles.UserInfoIconWrap>
      <Styles.SidebarIcon onClick={() => setShowSidebar(!showSidebar)} />
      {ResponsiveSidebar()}
    </Styles.HeaderContainer>
  );
};

export default Header;
