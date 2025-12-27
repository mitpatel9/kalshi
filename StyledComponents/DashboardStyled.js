import styled from "styled-components";

//main
export const MainChildren = styled.main`
  width: calc(100% - 15.625rem);
  float: right;
  padding: calc(95px + 1.5rem) 1rem 1rem;
  min-height: 100vh;
  background: var(--primary--white);

  @media (max-width: 820px) {
    padding-top: 125px;
    width: 100%;
    &.active {
      transition: all 1s ease 0s;
    }
  }
  @media (max-width: 600px) {
    padding-top: 160px;
  }
`;

export const GratingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const GratingTitle = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: #67748e;
`;
export const GratingText = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #67748e;
`;

export const CenterSpinner = styled.div`
  height: 100vh;
  display: flex;
  width: 100%;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

//Header
export const HeaderMain = styled.div`
  position: fixed;
  max-width: calc(100% - 15.625rem);
  width: 100%;
  right: 0;
  top: 0;
  padding: 1.5rem 1rem;
  background: var(--primary--white);
  z-index: 2;

  &.active {
    max-width: 100%;
    z-index: 9;
    left: 0;
    transition: all 0.7s ease;
  }

  @media (max-width: 769px) {
    max-width: 100%;
  }
`;

export const HeaderInner = styled.div`
  padding: 1rem;
  min-height: 75px;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: hsla(0, 0%, 100%, 0.8);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  .mobileView {
    display: none;

    @media (max-width: 769px) {
      display: flex;

      svg {
        height: 22px;
        width: 22px;
      }
    }
  }
`;
export const LeftSideItem = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 12px;
    left: 10px;
    color: #000 !important;
  }

  Input {
    padding-left: 2rem;
  }
  @media (max-width: 769px) {
    display: none;
  }
`;
export const RightSideItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
`;
export const UserName = styled.div`
  cursor: pointer;
`;

export const UserNameField = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

//Sidebar
export const SidebarMain = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  max-width: 15.625rem;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: #fff;
  transition: all 0.7s ease;
  z-index: 9;

  &.active {
    max-width: 100%;
    z-index: 9;
    left: 0;
    transition: all 0.7s ease;
  }

  @media (max-width: 769px) {
    left: 800px;
  }
`;
export const SideBarLogo = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1.5rem;
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  .innerAdmin {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--primary--color);
  }

  svg {
    display: none;
  }

  @media (max-width: 769px) {
    justify-content: space-between;

    svg {
      display: flex;
    }
  }
`;

export const SidebarInnerList = styled.div``;

export const SidebarItems = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--primary--color);
  padding: 0.675rem 1rem;
  margin: 0.5rem 1rem;

  &.active {
    background-color: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 0.5rem;

    .innerIcon {
      color: #fff;
      background: var(--primary--color);
    }
  }
`;
export const SidebarItemsIcon = styled.div`
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
   box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 0.5rem;

  .active {
    color: #fff;
    background: var(--primary--color);
  }
`;
export const SidebarMenuItems = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

export const SubmitBtn = styled.button`
  background: #000;
  color: rgb(255, 255, 255);
  border-radius: 6px;
  border: 0px;
  font-size: 16px;
  word-spacing: 5px;
  color: #fff;
  padding: 1rem;

  &.active {
    background: #ff0101;
  }
`;

//Breadcrumb css

export const BreadcrumbMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem 0;
  background-color: hsla(0, 0%, 100%, 0.8);
   box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  min-height: 70px;
  padding: 1rem;
  border-radius: 0.5rem;
`;

export const BreadcrumbLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const BreadcrumbIcon = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 0.5rem;
  color: #fff;
  background: var(--primary--color);
`;
export const BreadcrumbText = styled.div``;
export const BreadcrumbTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #344767;
`;
export const BreadcrumbOl = styled.ol``;
export const BreadcrumbLI = styled.li`
  font-size: 14px;
  font-weight: 500;

  &.active {
    font-weight: 500;
  }
`;
export const BreadcrumbRight = styled.div``;
export const AddButton = styled.button`
  border: 0;
  background: var(--primary--color);
  padding: 0.4rem 1rem;
  color: #fff;
  font-size: 14px;
  border-radius: 0.5rem;
  font-weight: 600;
`;

//admin dashboad

export const AdminCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem 0;
  background-color: #ffb200;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  min-height: 70px;
  padding: 1rem;
  border-radius: 0.5rem;

  Label {
    font-size: 16px;
    font-weight: 600;
    color: #000;
  }

  select,
  Input {
    padding: 8px 12px;
    border: none;
    border-radius: 6px;
    font-size: 15px;
    font-weight: 500;
    background-color: rgb(246, 203, 103);
    color: #000;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    outline: none;
    min-width: 150px;
  }

  select:focus,
  input:focus {
    border: 2px solid #333;
    background-color: rgb(246, 203, 103);
    outline: none;
    border: none;
  }
`;

export const SitesetingMenu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
  /* Smooth horizontal scroll */
  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ffb200;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;
export const SitebarMenuContainer = styled.div`
  display: flex;
  align-items: center;
  color: #ffb200;
  padding: 0.675rem 1rem;
  margin: 0.5rem 0rem;
  gap: 5px;

  &.active {
    color: #000;
    background-color: #ffb200;
    border-radius: 0.5rem;
  }
  @media (max-width: 768px) {
    margin: 0; /* Remove top-bottom margin in scrollable view */
    flex-shrink: 0;
    padding: 0.5rem 0.75rem;
  }
`;
export const SitebarMenuIcon = styled.div`
  font-size: 16px;
  font-weight: 600;
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
export const SitebarMenuItem = styled.div`
  font-size: 16px;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    display: none; /* Hide text if needed on very small screens */
  }
`;
