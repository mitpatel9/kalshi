import styled from "styled-components";

//profile section
export const ProfileContainer = styled.div`
  margin-top: 2rem;
  display: flex;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
export const ProfileLeft = styled.div`
  width: 20%;

  /* Tablet */
  @media (max-width: 1024px) {
    width: 100%;
  }

  /* Mobile */
  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const ProfileRight = styled.div`
  width: 80%;
  padding-left: 1rem;

  /* Tablet & Mobile */
  @media (max-width: 1024px) {
    width: 100%;
    padding-left: 0;
  }
`;
export const ProfileMenuContainer = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 5px;
  margin-bottom: 2rem;
  padding: 0.3rem;
  max-width: fit-content;

  @media (max-width: 1024px) {
    width: 100%;
    overflow-x: auto;
  }
`;
export const ProfileMenuItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 12px 16px 12px 12px;
  font-weight: 600;
  color: #000;
  font-size: 14px;
  cursor: pointer;

  .icons {
    width: 24px;
    height: 24px;
  }

  &.active {
    border-radius: 5px;
    background-color: #ededed;
  }
  /* Tablet */
  @media (max-width: 1024px) {
    font-size: 13px;
    padding: 10px 12px;
  }

  /* Mobile */
  @media (max-width: 600px) {
    font-size: 12px;
    padding: 8px 10px;
  }
`;
//Profile
export const ProfilesContainer = styled.div`
  display: flex;
  gap: 1rem;

  /* Tablet: stack vertically */
  @media (max-width: 1024px) {
    flex-direction: column;
  }

  /* Mobile: stack vertically */
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;
export const ProfilesLeft = styled.div`
  width: 50%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* Tablet & Mobile: full width */
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    width: 100%;
    padding: 0.8rem;
  }
`;
export const ProfileHed = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    width: 100%;
    padding: 0.8rem;
  }
`;
export const ProfileImg = styled.div`
  display: flex;
  .image {
    border: 1px solid black;
    border-radius: 50%;
    margin-right: 10px;
  }

  /* Mobile */
`;
export const ProfileAccount = styled.div``;
export const ProfileName = styled.div`
  font-weight: 600;
  color: #000;
  font-size: 18px;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
export const ProfileJOiningDate = styled.div`
  font-weight: 400;
  color: #8c8c8c;
  font-size: 12px;

  @media (max-width: 600px) {
    font-size: 11px;
  }
`;
export const ProfileSecretKey = styled.div`
  cursor: pointer;
`;
export const ProfileLeftBottom = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const YourPosition = styled.div`
  text-align: center;
`;

export const BorderRight = styled.div`
  border-right: 1px solid #8c8c8c;
`;
export const YourTitle = styled.div`
  font-weight: 500;
  color: #8c8c8c;
  font-size: 16px;
`;
export const YourAmount = styled.div`
  font-weight: 600;
  color: #000;
  font-size: 16px;
`;
export const YourBiggestWin = styled.div`
  text-align: center;
`;
export const YourPredictions = styled.div`
  text-align: center;
`;
export const ProfilesRight = styled.div`
  width: 50%;
  padding: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  /* Tablet & Mobile: full width */
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    width: 100%;
    padding: 0.8rem;
  }
`;
export const ProfilesRightHed = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const RightProfLoss = styled.div`
  font-weight: 500;
  color: #8c8c8c;
  font-size: 14px;
  .red {
    color: #e33939;
  }

  .green {
    color: #30a159;
  }
`;
export const RightTimeLine = styled.div`
  display: flex;
`;
export const TimelineItem = styled.div`
  font-weight: 600;
  color: #8c8c8c;
  font-size: 16px;
  text-align: center;
  padding: 5px 8px;

  &.active {
    color: #fff;
    padding: 5px 8px;
    border: 1px solid 8c8c8c;
    border-radius: 5px;
    background-color: #8c8c8c;
  }

  /* Tablet */
  @media (max-width: 1024px) {
    font-size: 14px;
    padding: 4px 6px;
  }

  /* Mobile */
  @media (max-width: 600px) {
    font-size: 12px;
    padding: 3px 5px;
  }
`;
export const ProfileRightMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ProfileRightMiddleIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  font-weight: 600;
  color: #000;
  font-size: 32px;
  .icon {
    color: #8c8c8c;
  }

  @media (max-width: 1024px) {
    font-size: 28px;
  }
  @media (max-width: 600px) {
    font-size: 24px;
  }
`;
export const ProfileRightLogo = styled.div``;
export const RightDataIndicator = styled.div`
  font-weight: 600;
  color: #8c8c8c;
  font-size: 14px;
`;
export const RightProfileCharts = styled.div``;

//Account & security
export const AccountContainer = styled.div``;
export const AccountHedTitle = styled.div`
  font-weight: 600;
  color: #000;
  font-size: 24px;
`;
export const AccountProfileDetails = styled.div`
  border-radius: 5px;
  border: 1px solid #dbdbdb;
  padding: 12px 16px 12px 12px;
`;
export const AccountData = styled.div``;
export const AccountDataHed = styled.div`
  font-weight: 600;
  color: #000;
  font-size: 12px;
`;
export const AccountDeactive = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-weight: 600;
  color: red;
  font-size: 14px;
  cursor: pointer;
  .icons {
    width: 24px;
    height: 24px;
  }
`;
export const AccountDataSub = styled.div`
  font-weight: 400;
  color: #8c8c8c;
  font-size: 12px;
`;
export const ComplateSetupData = styled.div`
  background: #30a159;
  color: #fff;
  font-weight: 600;
  padding: 8px 16px;
  border: 2px solid #30a159;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  transition: 0.25s ease;
  display: flex;
  align-items: center;
  margin: 1rem 0rem;
  max-width: fit-content;
`;
export const AccountAuthSubText = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  color: #000;
  font-size: 14px;

  span {
    margin-top: 1rem;
    font-weight: 600;
    color: #000;
    font-size: 10px;
  }
`;
export const AuthRadioButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: #000;
  font-size: 14px;
`;

//activity
export const ActivityContainer = styled.div`

`;
export const ActivityHedText = styled.div`
  font-weight: 600;
  color: #000;
  font-size: 24px;\
    @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
export const ActivityMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0rem;

    @media (max-width: 1024px) {
    gap: 0.4rem;
  }

  @media (max-width: 600px) {
    gap: 0.3rem;
    margin: 0.5rem 0rem;
  }
`;
export const ActivityMenuItem = styled.div`
  background: #30a159;
  color: #000;
  background: #ededed;
  border: 2px solid #ededed;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  transition: 0.25s ease;
  display: flex;
  align-items: center;
  max-width: fit-content;

  &.active {
    color: #fff;
    background: #000;
    border: 2px solid #000;
  }

    @media (max-width: 1024px) {
    padding: 6px 12px;
    font-size: 11px;
  }

  @media (max-width: 600px) {
    padding: 5px 10px;
    font-size: 10px;
  }
`;
export const ActivityData = styled.div`
  margin: 1rem 0rem;
`;

//Transfers
export const TransfersContainer = styled.div``;
export const TransfersHedText = styled.div`
  font-weight: 600;
  color: #000;
  font-size: 24px;
`;
export const TransfersPortFolio = styled.div`
  display: flex;
  gap: 1rem;
`;
export const TransfersPortFolioText = styled.div`
  font-weight: 400;
  color: #8c8c8c;
  font-size: 12px;
  margin-top: 1rem;

  span {
    color: #000;
  }
`;
export const TransfersTextDesc = styled.div`
  font-weight: 400;
  color: #000;
  font-size: 14px;
  margin-top: 0.5rem;

  .icons {
    width: 34px;
    height: 34px;
    color: #30a159;
  }

  .iconsSec {
    width: 14px;
    height: 14px;
    color: #8c8c8c;
    margin-left: 0.2rem;
    cursor: pointer;
  }
`;
export const TransfersButton = styled.div`
  background: #30a159;
  color: #fff;
  font-weight: 600;
  padding: 8px 16px;
  border: 2px solid #30a159;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  transition: 0.25s ease;
  display: flex;
  align-items: center;
  margin: 1rem 0rem;
  max-width: fit-content;
  gap: 0.5rem;

  .icons {
    width: 14px;
    height: 14px;
    font-weight: 600;
  }
`;

//Documents
export const DocumentsContainer = styled.div``;
export const DocumentsHedText = styled.div`
  font-weight: 600;
  color: #000;
  font-size: 24px;
`;
export const DocumentsTextDesc = styled.div`
  font-weight: 400;
  color: #000;
  font-size: 14px;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
`;

//setting prefrence
export const SettingsContainer = styled.div``;
export const SettingsHeading = styled.div`
  font-weight: 600;
  color: #000;
  font-size: 24px;
`;
export const SettingsHeadingSub = styled.div`
  font-weight: 600;
  color: #000;
  font-size: 14px;
`;
export const SettingsPrefContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const PrefName = styled.div`
  font-weight: 500;
  color: #000;
  font-size: 14px;
`;
export const StyledSwitch = styled.div`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 34px;
  }

  .slider:before {
    content: "";
    position: absolute;
    height: 14px;
    width: 14px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: #30a159;
  }

  input:checked + .slider:before {
    transform: translateX(20px);
  }
`;

// sign up process
export const ComProcessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 1rem 2rem;
  }

  @media (max-width: 600px) {
    padding: 0.8rem 1rem;
  }
`;

export const ComProcessInner = styled.div`
  width: 60%;
  /* Tablet: increase width to 80% */
  @media (max-width: 1024px) {
    width: 80%;
  }

  /* Mobile: full width */
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const ComProcesBack = styled.div`
  display: flex;
  font-weight: 600;
  color: #000;
  font-size: 14px;
  margin-top: 1rem;
  margin-bottom: 2rem;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  /* Tablet */
  @media (max-width: 1024px) {
    font-size: 13px;
    gap: 0.8rem;
  }

  /* Mobile */
  @media (max-width: 600px) {
    font-size: 12px;
    gap: 0.5rem;
  }
`;
export const TimeLineContainerSignUp = styled.div`
  width: 100%;
`;

export const ComProcessSubHedText = styled.div`
  font-weight: 600;
  color: #000;
  font-size: 28px;
  margin-bottom: 1rem;
  text-align: center;
`;
export const ComProcesSubText = styled.div`
  font-weight: 400;
  color: #8c8c8c;
  font-size: 14px;
  margin: 0.5rem 0rem;
`;

export const ComProcesInput = styled.div`
  font-weight: 400;
  color: #8c8c8c;
  font-size: 12px;
`;
export const ComProcesInputFlex = styled.div`
  display: flex;
  justify-content: center;

  .inputDiv {
    margin-right: 0.5rem;
  }

  .inputotpDiv {
    width: 50px;
    height: 50px;
    margin-right: 0.5rem;
  }
`;

export const ComProcesInputAddress = styled.div`
  width: 100%;
  border: 1px solid #b5b5b5;
  padding: 0.5rem;
  border-radius: 5px;
  margin: 0.5rem 0rem;
`;

export const ComProcesInputPostal = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;
export const ComProcesBtn = styled.div`
  display: flex;
  justify-content: center;
  background: #30a159;
  color: #fff;
  font-weight: 600;
  padding: 8px 16px;
  border: 2px solid #30a159;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  transition: 0.25s ease;
  margin: 1rem 0rem;
  gap: 0.5rem;
`;
export const ComProcessLable = styled.div`
  font-weight: 500;
  color: #8c8c8c;
  font-size: 12px;
  margin: 0.2rem 0rem;
`;
export const VerifyDocContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 2rem 0rem;
`;

export const VerifyIconsInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VerifySubText = styled.div`
  font-weight: 500;
  color: #8c8c8c;
  font-size: 12px;
  margin: 1rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  &.verifyHedding {
    font-weight: 500;
    color: #000;
    font-size: 18px;
  }
`;
export const VerifyText = styled.div`
  font-weight: 500;
  color: #8c8c8c;
  font-size: 12px;
`;

export const ReviewIcons = styled.div``;
