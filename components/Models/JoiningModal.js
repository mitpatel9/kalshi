import { ErrorMessage } from "@/StyledComponents/CommonStyled";
import {
  JoinContainer,
  JoinningButton,
  JoinningContainer,
  JoinToggle,
  LeftJoining,
  LoginContainer,
  LoginName,
  RegisterContainer,
  RightJoining,
  SignUpName,
  TermsandCondition,
  WelcomeContainer,
  WelcomeSubText,
  WelcomeText,
} from "@/StyledComponents/ModalStyled";
import React, { useState } from "react";
import { FormGroup, Input, Label, Modal, ModalBody } from "reactstrap";

const JoiningModal = (props) => {
  const [switchTab, setSwitchTab] = useState("login");
  return (
    <Modal isOpen={props.isJoin} toggle={props.toggle} size="xl">
      <JoinningContainer>
        {/* left section */}
        <LeftJoining>
          <WelcomeContainer>
            <WelcomeText>Welcome to Kalshi</WelcomeText>
            <WelcomeSubText>dasdasdasdas</WelcomeSubText>
          </WelcomeContainer>
        </LeftJoining>
        {/* right section */}
        <RightJoining>
          <JoinToggle>
            <LoginName
              className={switchTab === "login" ? "active" : ""}
              onClick={() => setSwitchTab("login")}
            >
              Log In
            </LoginName>
            <SignUpName
              className={switchTab === "sign" ? "active" : ""}
              onClick={() => setSwitchTab("sign")}
            >
              Sign Up
            </SignUpName>
          </JoinToggle>
          <JoinContainer>
            {/* login part */}
            {switchTab == "login" && (
              <LoginContainer>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Enter Your Email."
                    type="email"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Password</Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Enter Your Password."
                    type="password"
                  />
                </FormGroup>
                <JoinningButton>Log In</JoinningButton>
                <ErrorMessage>sadadasd</ErrorMessage>
              </LoginContainer>
            )}
            {/* register part */}
            {switchTab == "sign" && (
              <RegisterContainer>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Enter Your Email."
                    type="email"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Password</Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Enter Your Password."
                    type="password"
                  />
                </FormGroup>
                <JoinningButton>Sign Up</JoinningButton>
                <ErrorMessage>sadadasd</ErrorMessage>
              </RegisterContainer>
            )}
            <TermsandCondition>
              By continuing, you acknowledge and agree to{" "}
              <span>Kalshi’s legal terms</span> , which we recommend reviewing
            </TermsandCondition>
          </JoinContainer>
        </RightJoining>
      </JoinningContainer>
    </Modal>
  );
};

export default JoiningModal;
