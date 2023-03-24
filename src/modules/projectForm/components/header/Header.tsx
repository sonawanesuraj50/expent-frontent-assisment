import { useState } from "react";
import { IMAGES } from "shared";
import * as Styles from "./styles";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const ResponsiveSidebar = () => {
    return (
      <Styles.ResponsiveSidebarContainer active={showSidebar}>
        <Styles.CloseSidebarIcon onClick={() => setShowSidebar(!showSidebar)} />
        <Styles.ResponsiveNav>
          <Styles.NavText active={false}>Home</Styles.NavText>
          <Styles.NavText active={false}>DAShboard</Styles.NavText>
          <Styles.NavText active={false}>Vendors</Styles.NavText>
          <Styles.NavText active={true}>Projects</Styles.NavText>
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
        <Styles.NavText active={false}>Home</Styles.NavText>
        <Styles.NavText active={false}>DAShboard</Styles.NavText>
        <Styles.NavText active={false}>Vendors</Styles.NavText>
        <Styles.NavText active={true}>Projects</Styles.NavText>
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
