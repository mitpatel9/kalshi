import { Hr } from "@/StyledComponents/CommonStyled";
import {
  AccountAuthSubText,
  AccountContainer,
  AccountData,
  AccountDataHed,
  AccountDataSub,
  AccountDeactive,
  AccountHedTitle,
  AccountProfileDetails,
  AuthRadioButton,
  ComplateSetupData,
} from "@/StyledComponents/ProfileStyled";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Input } from "reactstrap";
import DeleteAccount from "../Models/DeleteAccount";

const AccountSecurity = (props) => {
  const [isDelete, setIsDelete] = useState(false);
  const toggleDelete = () => setIsDelete(!isDelete);

  return (
    <AccountContainer>
      <AccountHedTitle>Account & security</AccountHedTitle>
      <AccountProfileDetails>
        <AccountData>
          <AccountDataHed>Name</AccountDataHed>
          <AccountDataSub>Mit patel</AccountDataSub>
        </AccountData>
        <Hr />
        <AccountData>
          <AccountDataHed>Email</AccountDataHed>
          <AccountDataSub>patelmit2014@gmail.com</AccountDataSub>
        </AccountData>
        <Hr />
        <AccountDeactive onClick={() => toggleDelete()}>
          <Icon icon="basil:user-block-solid" className="icons" />
          Deactivate your account
        </AccountDeactive>
      </AccountProfileDetails>
      <ComplateSetupData onClick={() => props.setSwitchTab("Signup")}>
        Complete sign up process
      </ComplateSetupData>
      <AccountHedTitle>Two-factor Authentication</AccountHedTitle>
      <AccountAuthSubText>
        Help keep your Kalshi account safe. This helps prevent anyone from
        accessing your account, even if they know your password.
        <span>How would you like to receive this code?</span>
      </AccountAuthSubText>
      <Hr />
      <AuthRadioButton>
        {" "}
        <Input type="radio" />
        Text message (SMS)
      </AuthRadioButton>
      <Hr />
      <AuthRadioButton>
        <Input type="radio" />
        Email only
      </AuthRadioButton>{" "}
      <Hr />
      <DeleteAccount isDelete={isDelete} toggleDelete={toggleDelete} />
    </AccountContainer>
  );
};

export default AccountSecurity;
