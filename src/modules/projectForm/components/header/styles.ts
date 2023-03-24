import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { isActive } from "shared/types";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 84px;
  display: flex;
  align-items: center;
  padding: 0 62px;
`;

export const LogoTextWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ExpentText = styled.div`
  font-family: "Manrope-SemiBold";
  font-size: 22px;
  line-height: 140%;
  color: #ffffff;
`;

export const NavigationWrap = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  margin-left: 97px;

  @media (max-width: 1030px) {
    margin-left: 10px;
  }

  @media (max-width: 950px) {
    display: none;
  }
`;

export const NavText = styled.div<isActive>`
  width: fit-content;
  height: 100%;
  padding: 0 20px;
  font-family: "Manrope-SemiBold";
  font-size: 14px;
  line-height: 140%;
  color: #ffffff;
  opacity: 0.6;
  cursor: pointer;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: ${({ active }) => (active ? "4px solid #17bebb" : "none")};
  background: ${({ active }) =>
    active
      ? "linear-gradient(180deg, rgba(0, 39, 51, 0) 0%, #002733 100%)"
      : "none"};

  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const UserInfoIconWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;

  img {
    cursor: pointer;
  }

  @media (max-width: 560px) {
    display: none;
  }
`;

export const IconsWrap = styled.div`
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const UserIconsWrap = styled(IconsWrap)`
  background: #ffffff;
`;

export const UserText = styled.div`
  font-family: "Manrope-SemiBold";
  font-size: 14px;
  line-height: 140%;
  color: #ffffff;
`;

export const SidebarIcon = styled(MenuIcon)`
  color: #ffffff;
  margin-left: auto;
`;

export const CloseSidebarIcon = styled(CloseIcon)`
  margin-left: auto;
  color: #ffffff;
`;

export const ResponsiveSidebarContainer = styled.div<isActive>`
  width: 100%;
  display: none;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 11;
  padding: 26px 16px;
  background-color: rgb(0, 59, 77);
  transform: ${({ active }) => (active ? "translateX(0)" : "translateX(100%)")};
  opacity: ${({ active }) => (active ? "1" : "0")};
  transition: 300ms all;
  overflow-y: scroll;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ResponsiveNav = styled.div``;
