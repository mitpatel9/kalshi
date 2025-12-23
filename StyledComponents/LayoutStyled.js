import styled from "styled-components";

export const MarketSection = styled.div``;
export const SiteLayout = styled.div`
  width: 100%;
  padding: 0px 2rem;

  @media (max-width: 820px) {
    padding: 5px;
  }
  @media (max-width: 600px) {
    padding: 5px;
  }
`;

//header section
export const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;
export const LeftDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const RightDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.15rem;
`;
export const Logo = styled.div`
  cursor: pointer;
`;
export const SearchBar = styled.div`
  position: relative;
  width: 280px;
  max-width: 100%;
  margin-right: 0.5rem;

  svg {
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
    color: #000 !important;
    font-size: 18px;
  }

  input {
    width: 100%;
    padding: 10px 12px 10px 40px;
    border-radius: 12px;
    border: 1px solid #fd7979;
    background-color: #ffcdc98f;
    color: #000;
    font-size: 12px;
    transition: all 0.2s ease;

    &:focus {
      background-color: #fff;
      border-color: #fd7979;
      outline: none;
      box-shadow: 0 0 0 2px rgba(253, 121, 121, 0.2);
    }
  }

  @media (max-width: 769px) {
    display: none;
  }
`;
export const HeaderMenuIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 1rem;
  .menuIcon {
    width: 22px;
    height: 22px;
    cursor: pointer;
  }
`;
export const SButton = styled.div`
  background: #fd7979;
  color: #fff;
  font-weight: 600;
  padding: 8px 16px;
  border: 2px solid #fd7979;
  border-radius: 10px;
  cursor: pointer;
  font-size: 12px;
  transition: 0.25s ease;
  display: flex;
  align-items: center;
  gap: 6px;
`;

// profile sidebar on header
export const ProfileSideBar = styled.div`
  display: none;

  &.active {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }
`;

export const ProfileSidebarInner = styled.div`
  position: absolute;
  top: 60px;
  right: 20px;
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  min-width: 180px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

export const ProfileLeaderBoardContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;
export const LeaderBoardInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;
export const ProfilemenuIcons = styled.div`
  border: 1px solid #fd7979;
  border-radius: 50%;
  padding: 10px;
  background: #fd7979;
  color: #fff;
`;
export const ProfilemenuIconsName = styled.div`
  font-weight: 600;
  font-size: 12px;
  color: #8c8c8c;
`;
export const SidebarMenuItem = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #8c8c8c;
  cursor: pointer;
  margin: 0.5rem 0rem;
`;

// Notifiaction on header
export const NotificationSideBar = styled.div`
  display: none;

  &.active {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }
`;

export const NotificationInner = styled.div`
  width: 30vw;
  height: 85vh;
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  min-width: 180px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

export const NotificationTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #000;
`;
export const NotificationArea = styled.div``;

//menu item
export const MenuContainer = styled.div`
  display: flex;
  gap: 16px;
  padding: 10px 0;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const MenuItem = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #8c8c8c;
  cursor: pointer;

  &:hover {
    color: #000;
  }

  &.active {
    color: #000;
  }
`;

export const SubMenuContainer = styled.div`
  display: flex;
  gap: 12px;
  padding: 10px 0;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const SubMenuItem = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: #000;
  cursor: pointer;
  border-radius: 50px;
  padding: 0.5rem;

  border: 1px solid #8c8c8c;

  &:hover {
    color: #fd7979;
    background-color: #ffcdc98f;
    border: 1px solid #fd7979;
  }

  &.active {
    color: #fd7979;
    background-color: #ffcdc98f;
    border: 1px solid #fd7979;
  }
`;

//information section
export const TradeMainContainer = styled.div``;
export const InfoMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0rem;

  @media (max-width: 820px) {
    display: flex;
    flex-direction: column;
    padding: 1rem 0rem;
  }
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding: 1rem 0rem;
  }
`;
export const TabSection = styled.div`
  @media (max-width: 820px) {
    display: none;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const IconInfo = styled.div`
  color: #fd7979;
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffcdc98f;
  border-radius: 0.5rem;
  margin-right: 10px;
`;
export const MainTitle = styled.div`
  color: #fd7979;
  font-weight: 600;
  font-size: 16px;
`;
export const SubTitle = styled.div`
  font-weight: 600;
  font-size: 12px;
`;

//trade posting section
export const TradeContainer = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 8px;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
`;
export const TradeHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const TradeImage = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 80%;

  .image {
    max-height: 38px;
    max-width: 38px;
    border-radius: 10px;
  }
`;
export const TradeHeaderText = styled.div`
  font-weight: 600;
  font-size: 12px;
  cursor: pointer;
`;
export const TradeChanceChart = styled.div``;

export const TradeMiddle = styled.div`
  padding: 0.5rem 0rem;
  margin: 0.5rem 0rem;
  height: 92px;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const TradeSubGrp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 0rem;
`;
export const TradeSecHeding = styled.div`
  font-weight: 500;
  font-size: 14px;
`;
export const TradeBtn = styled.div`
  display: flex;
  gap: 5px;
`;
export const YBtn = styled.div`
  font-weight: 600;
  font-size: 12px;
  background-color: #e4f7ea;
  color: #30a159;
  border-radius: 3px;
  padding: 0.5rem;

  &:hover {
    color: #fff;
    background-color: #30a159;
  }
`;
export const NBtn = styled.div`
  font-weight: 600;
  font-size: 12px;
  background-color: #fceded;
  color: #e33939;
  border-radius: 3px;
  padding: 0.5rem;
  &:hover {
    color: #fff;
    background-color: #e33939;
  }
`;

export const TradeFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TradeVolume = styled.div`
  font-weight: 600;
  font-size: 12px;
  color: #b5b5b5;
`;
export const TradeTypes = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-weight: 600;
  font-size: 12px;
  color: #b5b5b5;
`;
export const TradeIcon = styled.div`
  display: flex;
  gap: 0.5rem;
  .icons {
    width: 16px;
    height: 16px;
  }
`;

//footer section
export const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 2rem;
  background-color: #ededed;
`;
export const FooterHeading = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #b5b5b5;
`;
export const FooterText = styled.div`
  font-weight: 400;
  font-size: 10px;
  color: #b5b5b5;
`;
export const FooterMenu = styled.div`
  display: flex;
  gap: 1rem;
`;
export const MenuItemFooter = styled.div`
  font-weight: 600;
  font-size: 12px;
  color: #b5b5b5;
  &:hover {
    color: #000;
  }
`;

export const FooterCopyWrite = styled.div`
  display: flex;
  justify-content: space-between;
  .icons {
    margin: 0rem 0.2rem;
    width: 22px;
    height: 22px;
  }
`;

//Rewards section
export const IncentivesContainer = styled.div`
  display: flex;
  margin-top: 2rem;
`;
export const IncentivesLeft = styled.div`
  width: 20%;
`;
export const IncentivesRight = styled.div`
  width: 80%;
`;
export const IncentivesMenuContainer = styled.div``;
export const IncentivesMenuItem = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #000;
  padding: 0.5rem 0rem;
  cursor: pointer;

  &.active {
    color: #e33939;
  }
`;

export const RewardsContainer = styled.div``;
export const RewardHedding = styled.div`
  font-weight: 600;
  font-size: 24px;
  color: #000;
`;
export const RewardsDropboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0rem;
`;
export const RewardsDropbox = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #000;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  padding: 5px 16px;
  position: relative;
  display: inline-block;
`;

export const RewardDataListingHed = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  color: #b5b5b5;
`;
export const RewardMarket = styled.div`
  width: 50%;
`;
export const RewardStart = styled.div`
  width: 15%;
  text-align: center;
`;
export const RewardEnd = styled.div`
  width: 15%;
  text-align: center;
`;
export const RewardProgram = styled.div`
  width: 10%;
  text-align: center;
`;
export const RewardIncentive = styled.div`
  width: 10%;
  text-align: center;
`;
export const RewardDataListing = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0rem;
`;
export const RewardListingMarket = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const RewardListingImg = styled.div`
  .image {
    max-height: 38px;
    max-width: 38px;
    border-radius: 10px;
  }
`;
export const ListingContainer = styled.div``;
export const ListingContainerHed = styled.div`
  font-weight: 500;
  font-size: 13px;
  color: #000;
`;
export const ListingContainerSubText = styled.div`
  color: #000;
  font-weight: 600;
  font-size: 12px;
`;
export const RewardListingStart = styled.div`
  width: 15%;
  text-align: center;
`;
export const StartHedding = styled.div`
  font-weight: 600;
  font-size: 13px;
  color: #000;
`;
export const StartHeddingSub = styled.div`
  font-weight: 500;
  font-size: 13px;
  color: #b5b5b5;
`;
export const RewardListingEnd = styled.div`
  width: 15%;
  text-align: center;
`;
export const RewardListingProgram = styled.div`
  width: 10%;
  text-align: center;
  font-weight: 600;
  font-size: 13px;
  color: #e33939;
`;
export const RewardListingIncentive = styled.div`
  display: flex;
  align-items: center;
  width: 10%;
  justify-content: center;
  font-weight: 600;
  font-size: 13px;
  color: #000;
  gap: 5px;
  cursor: pointer;
`;
