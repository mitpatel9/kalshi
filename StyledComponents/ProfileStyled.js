import styled from "styled-components";

//profile section
export const ProfileContainer = styled.div`
  margin-top: 2rem;
  display: flex;
`;
export const ProfileLeft = styled.div`
  width: 20%;
`;
export const ProfileRight = styled.div`
  width: 80%;
  padding-left: 2rem;
 
`;
export const ProfileMenuContainer = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 5px;
  margin-bottom: 2rem;
  padding: 0.3rem;
  max-width: fit-content;
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
`;

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
export const ActivityContainer = styled.div``;
export const ActivityHedText = styled.div`
  font-weight: 600;
  color: #000;
  font-size: 24px;
`;
export const ActivityMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0rem;
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
