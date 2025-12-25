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
  padding-top: 10px;
  /* Mobile */
  @media (max-width: 600px) {
    padding-top: 8px;
  }
`;
export const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export const RightDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.15rem;

  /* Tablet */
  @media (max-width: 1024px) {
    gap: 0.75rem;
  }

  /* Mobile */
  @media (max-width: 600px) {
    gap: 0.5rem;
  }
`;
export const Logo = styled.div`
  cursor: pointer;
  font-weight: 1000;
  font-size: 32px;
  color: #fd7979;

  /* Tablet */
  @media (max-width: 1024px) {
    font-size: 28px;
  }

  /* Mobile */
  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

export const Motto = styled.div`
  cursor: pointer;
  font-weight: 600;
  font-size: 10px;
  color: #fd7979;
  margin-top: -9px;
  /* Mobile */
  @media (max-width: 600px) {
    font-size: 9px;
    margin-top: -6px;
  }
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
    color: var(--primary--black) !important;
    font-size: 18px;
  }

  input {
    width: 100%;
    padding: 10px 12px 10px 40px;
    border-radius: 12px;
    border: 1px solid var(--primary--color);
    background-color: #ffcdc98f;
    color: var(--primary--black);
    font-size: 12px;
    transition: all 0.2s ease;

    &:focus {
      background-color: var(--primary--white);
      border-color: var(--primary--color);
      outline: none;
      box-shadow: 0 0 0 2px rgba(253, 121, 121, 0.2);
    }
  }

  /* Tablet */
  @media (max-width: 1024px) {
    width: 220px;
  }

  /* Mobile */
  @media (max-width: 600px) {
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
  /* Mobile */
  @media (max-width: 600px) {
    margin-left: 0.5rem;

    .menuIcon {
      width: 20px;
      height: 20px;
    }
  }
`;
export const SButton = styled.div`
  background: var(--primary--color);
  color: var(--primary--white);
  font-weight: 600;
  padding: 8px 16px;
  border: 2px solid var(--primary--color);
  border-radius: 10px;
  cursor: pointer;
  font-size: 12px;
  transition: 0.25s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  /* Tablet */

  @media (max-width: 1024px) {
    padding: 7px 14px;
  }

  /* Mobile */
  @media (max-width: 600px) {
    display: none;
  }
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
    z-index: 9999;
  }
  @media (min-width: 1025px) {
    &.active {
      background: transparent;
    }
  }
`;

export const ProfileSidebarInner = styled.div`
  position: absolute;
  top: 60px;
  right: 20px;
  background: var(--primary--white);
  border-radius: 8px;
  padding: 16px;
  min-width: 180px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  z-index: 10000;

  /* Tablet */
  @media (max-width: 1024px) {
    top: 70px;
    right: 16px;
    min-width: 200px;
  }

  /* Mobile */
  @media (max-width: 600px) {
    top: 0;
    right: 0;
    height: 100vh;
    width: 85%;
    max-width: 300px;
    border-radius: 0;
    padding: 20px;
    background: var(--primary--white);
  }
`;

export const ProfileLeaderBoardContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  /* Mobile */
  @media (max-width: 600px) {
    justify-content: space-around;
    margin-bottom: 1rem;
  }
`;
export const LeaderBoardInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;
export const ProfilemenuIcons = styled.div`
  border: 1px solid var(--primary--color);
  border-radius: 50%;
  padding: 10px;
  background: var(--primary--color);
  color: var(--primary--white);

  /* Mobile */
  @media (max-width: 600px) {
    padding: 12px;
  }
`;
export const ProfilemenuIconsName = styled.div`
  font-weight: 600;
  font-size: 12px;
  color: #8c8c8c;

  /* Mobile */
  @media (max-width: 600px) {
    font-size: 11px;
  }
`;
export const SidebarMenuItem = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #8c8c8c;
  cursor: pointer;
  margin: 0.5rem 0rem;

  /* Tablet */
  @media (max-width: 1024px) {
    font-size: 13px;
  }

  /* Mobile */
  @media (max-width: 600px) {
    font-size: 14px;
    padding: 5px 0;
  }
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
    z-index: 9999;
  }
`;

export const NotificationInner = styled.div`
  width: 30vw;
  height: 85vh;
  position: absolute;
  top: 80px;
  right: 20px;
  background-color: var(--primary--white);
  border-radius: 8px;
  padding: 16px;
  min-width: 180px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  /* Tablet */
  @media (max-width: 1024px) {
    width: 45vw;
    height: 85vh;
    right: 16px;
  }

  /* Mobile */
  @media (max-width: 600px) {
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    border-radius: 0;
    padding: 20px;
  }
`;

export const NotificationTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: var(--primary--black);

  /* Mobile */
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;
export const NotificationArea = styled.div`
  margin-top: 1rem;
  height: calc(100% - 30px);
  overflow-y: auto;
`;

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

  /* Tablet */
  @media (max-width: 1024px) {
    gap: 14px;
    padding: 8px 0;
  }

  /* Mobile */
  @media (max-width: 600px) {
    gap: 12px;
    padding: 6px 0;
  }
`;
export const MenuItem = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #8c8c8c;
  cursor: pointer;

  &:hover {
    color: var(--primary--black);
  }

  &.active {
    color: var(--primary--black);
  }

  /* Tablet */
  @media (max-width: 1024px) {
    font-size: 13px;
  }

  /* Mobile */
  @media (max-width: 600px) {
    font-size: 12px;
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
  /* Tablet */
  @media (max-width: 1024px) {
    gap: 10px;
    padding: 8px 0;
  }

  /* Mobile */
  @media (max-width: 600px) {
    gap: 8px;
    padding: 6px 0;
  }
`;
export const SubMenuItem = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: var(--primary--black);
  cursor: pointer;
  border-radius: 50px;
  padding: 0.5rem;

  border: 1px solid #8c8c8c;

  &:hover {
    color: var(--primary--color);
    background-color: #ffcdc98f;
    border: 1px solid var(--primary--color);
  }

  &.active {
    color: var(--primary--color);
    background-color: #ffcdc98f;
    border: 1px solid var(--primary--color);
  }

  /* Tablet */
  @media (max-width: 1024px) {
    font-size: 11px;
    padding: 0.45rem 0.7rem;
  }

  /* Mobile */
  @media (max-width: 600px) {
    font-size: 11px;
    padding: 0.4rem 0.65rem;
  }
`;

//information section
export const TradeMainContainer = styled.div``;
export const InfoMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0rem;

  /* Tablet */
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem 0;
  }

  /* Mobile */
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
  }
`;
export const TabSection = styled.div`
  /* Tablet & Mobile */
  @media (max-width: 1024px) {
    display: none;
  }
`;
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const IconInfo = styled.div`
  color: var(--primary--color);
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
  color: var(--primary--color);
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
  width: auto;
  height: 190px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
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
  &:hover {
    text-decoration: underline;
  }
`;
export const TradeChanceChart = styled.div``;

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Svg = styled.svg`
  width: 50px;
  height: 40px;
`;

export const BackgroundArc = styled.path`
  fill: none;
  stroke: #e5e7eb;
  stroke-width: 8;
`;

export const ProgressArc = styled.path`
  fill: none;
  stroke: #3ba55c;
  stroke-width: 8;
  stroke-linecap: round;
  stroke-dasharray: 130;
  stroke-dashoffset: ${({ percent }) => 130 - (130 * percent) / 100};
  transition: stroke-dashoffset 1s ease;
`;

export const PercentageText = styled.div`
  font-size: 8px;
  font-weight: 700;
  color: var(--primary--black);
  margin-top: -20px;
`;

export const StatusText = styled.div`
  font-size: 10px;
  color: #6b7280;
`;

export const TradeMiddleOne = styled.div`
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

export const TradeMiddleTwo = styled.div`
  width: 100%;
  padding: 0.5rem 0rem;
  margin: 0.5rem 0rem;
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
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 12px;
  background-color: #e4f7ea;
  color: #30a159;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    color: var(--primary--white);
    background-color: #30a159;
  }
`;

export const Ycontainer = styled.div`
  width: 100%;
`;
export const YText = styled.div`
  font-weight: 600;
  font-size: 12px;
  text-align: center;
  margin-top: 10px;

  span {
    color: #30a159;
  }
`;

export const NBtn = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-weight: 600;
  font-size: 12px;
  background-color: #fceded;
  color: #e33939;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    color: var(--primary--white);
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
  cursor: pointer;
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
    color: var(--primary--black);
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

  /* Tablet */
  @media (max-width: 1024px) {
    display: none;
  }
`;
export const IncentivesRight = styled.div`
  width: 80%;

  /* Tablet & Mobile */
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
export const IncentivesMenuContainer = styled.div``;
export const IncentivesMenuItem = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: var(--primary--black);
  padding: 0.5rem 0rem;
  cursor: pointer;

  &.active {
    color: #e33939;
  }
  /* Mobile */
  @media (max-width: 600px) {
    font-size: 13px;
  }
`;

export const RewardsContainer = styled.div``;
export const RewardHedding = styled.div`
  font-weight: 600;
  font-size: 24px;
  color: var(--primary--black);
  /* Mobile */
  @media (max-width: 600px) {
    font-size: 20px;
  }
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
  color: var(--primary--black);
  border: 1px solid #b5b5b5;
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

  /* Mobile */
  @media (max-width: 600px) {
    font-size: 10px;
  }
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
  margin: 0.5rem 0rem;
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
  color: var(--primary--black);
`;
export const ListingContainerSubText = styled.div`
  color: var(--primary--black);
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
  color: var(--primary--black);
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
  color: var(--primary--black);
  gap: 5px;
  cursor: pointer;
`;

// login sign up modal css
export const AuthMainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const JoinningContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  margin: 2rem 0rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;
export const LeftJoining = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45%;
  padding: 1.5rem;
`;
export const WelcomeContainer = styled.div``;
export const RightJoining = styled.div`
  width: 45%;
`;
export const WelcomeText = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: var(--primary--color);
  text-align: center;
`;
export const WelcomeSubText = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #b5b5b5;
  text-align: center;
`;
export const JoinToggle = styled.div`
  display: flex;
  align-items: center;
`;
export const LoginName = styled.div`
  text-align: center;
  background: var(--primary--white);
  color: var(--primary--color);
  font-weight: 600;
  padding: 8px 16px;
  border: 2px solid var(--primary--color);
  width: 50%;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
  &.active {
    background: var(--primary--color);
    color: var(--primary--white);
  }
`;
export const SignUpName = styled.div`
  font-weight: 600;
  padding: 8px 16px;
  border: 2px solid var(--primary--color);
  width: 50%;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
  background: var(--primary--white);
  color: var(--primary--color);
  &.active {
    background: var(--primary--color);
    color: var(--primary--white);
  }
`;
export const JoinContainer = styled.div``;
export const LoginContainer = styled.div`
  padding: 1rem 0rem;
`;
export const RegisterContainer = styled.div`
  padding: 1rem 0rem;
`;
export const JoinningButton = styled.div`
  background: var(--primary--color);
  color: var(--primary--white);
  font-weight: 600;
  padding: 8px 16px;
  border: 2px solid var(--primary--color);
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
`;
export const TermsandCondition = styled.div`
  color: #b5b5b5;
  font-size: 12px;
  font-weight: 400;
  span {
    font-weight: 600;
    color: var(--primary--color);
    cursor: pointer;
  }
`;

// deposite modal
export const DepositMainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const DepositContainer = styled.div`
  width: 70%;
  padding: 1rem;
  margin: 2rem 0rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;
export const DepositHedding = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const DepositSecureContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;
export const DepositIcon = styled.div``;
export const DepositIconHed = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: var(--primary--black);
`;
export const DepositIconSubText = styled.div`
  font-size: 10px;
  font-weight: 600;
  color: #b5b5b5;
`;
export const DepositLogo = styled.div`
  font-size: 24px;
  font-weight: 1000;
  color: var(--primary--color);
`;
export const DepositMethodContainer = styled.div`
  border: 0.1px solid #b5b5b5;
  border-radius: 5px;
  padding: 1rem;
  margin-top: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #cccccc;
  }
`;

export const DepositMethodName = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: var(--primary--black);
`;

//PageNotFound
export const PageNotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 20px;
`;
export const PageFoundWrapper = styled.div`
  text-align: center;
  max-width: 500px;
  padding: 40px 30px;
`;
export const PageNotFoundImg = styled.div`
  margin-bottom: 2rem;
  .image {
    width: 200px;
    height: 200px;
  }
`;
export const PageNotFoundHed = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 12px;
`;
export const PageNotFoundText = styled.div`
  font-size: 16px;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 30px;
`;
export const PageNotFoundBtn = styled.div`
  display: inline-block;
  padding: 12px 24px;
  font-size: 15px;
  font-weight: 600;
  color: var(--primary--white);
  background-color: var(--primary--black);
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

//Slider Market
export const SliderMarketContainer = styled.div`
  padding: 2rem 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 5px;
  overflow: hidden;
  .slick-dots {
    bottom: -10px !important;
  }
  .slick-dots li button:before {
    font-size: 10px;
  }
  @media (max-width: 1024px) {
    padding: 1.5rem 1rem;
  }

  /* Mobile */
  @media (max-width: 600px) {
    padding: 1rem 0.75rem;
  }
`;
export const SliderContainer = styled.div`
  display: flex !important;
  justify-content: space-around;
  /* Tablet */
  @media (max-width: 1024px) {
    gap: 1.5rem;
  }

  /* Mobile */
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export const SliderMarketLeft = styled.div`
  width: 40%;

  /* Tablet */
  @media (max-width: 1024px) {
    width: 45%;
  }

  /* Mobile */
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const SliderMarketHed = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  .image {
    max-height: 78px;
    max-width: 78px;
    border-radius: 10px;
  }
  /* Tablet */
  @media (max-width: 1024px) {
    .image {
      max-width: 65px;
      max-height: 65px;
    }
  }

  /* Mobile */
  @media (max-width: 600px) {
    .image {
      max-width: 55px;
      max-height: 55px;
    }
  }
`;
export const SliderMarketHedText = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #000;
  cursor: pointer;

  &:hover {
    color: #b5b5b5;
  }
  /* Tablet */
  @media (max-width: 1024px) {
    font-size: 20px;
  }

  /* Mobile */
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
export const SliderMarketMiddle = styled.div`
  margin: 2rem 0rem;
  margin-bottom: 2rem;
  /* Tablet */
  @media (max-width: 1024px) {
    margin: 1.5rem 0;
  }

  /* Mobile */
  @media (max-width: 600px) {
    margin: 1rem 0;
  }
`;
export const SliderMarketNews = styled.div`
  margin: 1rem 0rem;
  font-size: 15px;
  font-weight: 400;
  color: #b5b5b5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  span {
    font-size: 16px;
    font-weight: 600;
    color: #000;
  }
  /* Tablet */
  @media (max-width: 1024px) {
    font-size: 14px;

    span {
      font-size: 15px;
    }
  }

  /* Mobile */
  @media (max-width: 600px) {
    font-size: 13px;

    span {
      font-size: 14px;
    }
  }
`;
export const SliderMarketVolume = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0rem;
  font-size: 15px;
  font-weight: 400;
  color: #b5b5b5;

  .icons {
    color: #000;
    width: 18px;
    height: 18px;
  }
  /* Mobile */
  @media (max-width: 600px) {
    font-size: 13px;
  }
`;

export const SliderMarketRight = styled.div`
  margin-left: 0.5rem;
  width: 55%;
  /* Tablet */
  @media (max-width: 1024px) {
    width: 50%;
  }

  /* Mobile */
  @media (max-width: 600px) {
    display: none;
  }
`;

export const SliderMarketSubGrp = styled.div`
  display: flex;
  align-items: center;
  padding: 0.2rem 0rem;
`;
export const SliderMarketHedding = styled.div`
  width: 60%;
  font-weight: 500;
  font-size: 14px;
  color: #000;
  /* Mobile */
  @media (max-width: 600px) {
    font-size: 13px;
  }
`;
export const SliderMarketScrore = styled.div`
  width: 20%;
  font-weight: 600;
  font-size: 14px;
  color: #000;
  /* Mobile */
  @media (max-width: 600px) {
    font-size: 13px;
  }
`;
export const SliderMarketBtn = styled.div`
  width: 20%;
  display: flex;
  gap: 5px;
  /* Mobile */
  @media (max-width: 600px) {
    width: 30%;
  }
`;
export const SliderMarketYBtn = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-weight: 600;
  font-size: 12px;
  background-color: #30a159;
  background-image: linear-gradient(310deg, #7928ca, #ff0080);
  color: #fff;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  cursor: pointer;

  /* Mobile */
  @media (max-width: 600px) {
    font-size: 11px;
    padding: 0.4rem;
  }
`;
export const SliderMarketNBtn = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-weight: 600;
  font-size: 12px;
  background-image: linear-gradient(310deg, #4b5563, #1f2933);
  color: #fff;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  @media (max-width: 480px) {
    font-size: 11px;
    padding: 0.4rem;
  }
`;

// Leaderboard
export const LeaderboardMainContainer = styled.div`
  display: flex;
  margin-top: 2rem;

  /* Tablet */
  @media (max-width: 1024px) {
    flex-direction: column;
  }

  /* Mobile */
  @media (max-width: 600px) {
    margin-top: 1.5rem;
  }
`;
export const LeaderboardHedText = styled.div`
  font-weight: 600;
  font-size: 24px;
  color: var(--primary--black);

  /* Tablet */
  @media (max-width: 1024px) {
    font-size: 22px;
  }

  /* Mobile */
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
export const LeaderboardLeft = styled.div`
  width: 70%;
  margin-right: 1rem;

  /* Tablet & Mobile */
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
export const LeaderboardRight = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  width: 30%;
  padding: 1rem;
  border-radius: 5px;
  height: 500px;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
  /* Tablet */
  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    max-height: 400px;
    margin: 1rem 0rem;
  }

  /* Mobile */
  @media (max-width: 600px) {
    max-height: 350px;
    margin: 1rem 0rem;
  }
`;
export const LeaderBoardMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.5rem 0rem;
  /* Mobile */
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;
export const LeaderBoardMenu = styled.div`
  display: inline-flex;
  border: 1px solid #b5b5b5;
  border-radius: 5px;
  padding: 4px;
  gap: 4px;

  /* Mobile */
  @media (max-width: 600px) {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;
export const LeaderBoardItem = styled.div`
  border: none;
  background: transparent;
  padding: 8px 18px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  color: #6b7280; /* gray text */
  cursor: pointer;
  transition: all 0.2s ease;
  cursor: pointer;

  &.active {
    background-color: #6b7280;
    color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  }

  /* Mobile */
  @media (max-width: 600px) {
    padding: 6px 14px;
    font-size: 13px;
  }
`;
export const LeaderBoardCategory = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 14px;
  color: var(--primary--black);
  border: 1px solid #b5b5b5;
  border-radius: 5px;
  padding: 5px 16px;
  gap: 0.5rem;

  /* Mobile */
  @media (max-width: 600px) {
    font-size: 13px;
    padding: 5px 12px;
    align-self: flex-start;
  }
`;
export const LeaderBoardTableHed = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 13px;
  color: #b5b5b5;

  /* Mobile */
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
export const LeaderBoardTableNo = styled.div`
  width: 5%;
`;
export const LeaderBoardTableName = styled.div`
  width: 65%;
`;
export const LeaderBoardTableProfitLoss = styled.div`
  width: 15%;
  text-align: center;
`;
export const LeaderBoardTableVolume = styled.div`
  width: 15%;
  text-align: center;
`;
export const LeaderBoardListing = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0rem;
`;
export const LeaderboardListingTableNo = styled.div`
  width: 5%;
  color: #b5b5b5;
  font-weight: 600;
  font-size: 12px;
`;
export const LeaderboardListingleftContainer = styled.div`
  width: 65%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const LeaderboardListingleftImg = styled.div`
  .image {
    max-height: 38px;
    max-width: 38px;
    border-radius: 50%;
  }
`;
export const LeaderboardListingTableName = styled.div`
  color: var(--primary--black);
  font-weight: 600;
  font-size: 12px;
`;
export const LeaderBoardListingTableProfitLoss = styled.div`
  width: 15%;
  text-align: center;
  color: var(--primary--black);
  font-weight: 600;
  font-size: 12px;
`;
export const LeaderBoardListingTableVolume = styled.div`
  width: 15%;
  text-align: center;
  color: var(--primary--black);
  font-weight: 600;
  font-size: 12px;
`;
export const LeaderboardRightTextRight = styled.div`
  font-weight: 600;
  font-size: 24px;
  color: var(--primary--black);
  margin-bottom: 1rem;

  /* Mobile */
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
export const LeaderboardRightListing = styled.div`
  display: flex;
  align-items: center;
`;
export const RightListingTableNo = styled.div`
  width: 10%;
  color: #b5b5b5;
  font-weight: 600;
  font-size: 12px;
  display: flex;
  justify-content: center;
`;
export const RightListingContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const RightListingTableImg = styled.div`
  .image {
    max-height: 38px;
    max-width: 38px;
    border-radius: 5px;
  }
`;
export const RightListingTableName = styled.div`
  color: var(--primary--black);
  font-weight: 600;
  font-size: 12px;
  span {
    font-weight: 500;
    color: #b5b5b5;
  }
`;
export const RightListingTableSubName = styled.div`
  color: var(--primary--black);
  font-weight: 400;
  font-size: 12px;
  span {
  }
`;
