import HeaderLayout from "@/components/LandingPage/HeaderLayout";
import { ErrorMessage } from "@/StyledComponents/CommonStyled";
import { AuthMainContainer, SiteLayout } from "@/StyledComponents/LayoutStyled";
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
} from "@/StyledComponents/LayoutStyled";
import { BorderRight } from "@/StyledComponents/ProfileStyled";
import { webSiteName } from "@/utils/enums";
import React, { useState } from "react";
import { FormGroup, Input, Label } from "reactstrap";

const auth = () => {
  const [switchTab, setSwitchTab] = useState("login");
  return (
    <SiteLayout>
      <HeaderLayout />
      <AuthMainContainer>
      <JoinningContainer>
        {/* left section */}
        <LeftJoining>
          {switchTab == "login" && (
            <WelcomeContainer>
              <WelcomeText>Welcome to {webSiteName.domain}</WelcomeText>
              <WelcomeSubText>
               We’re pleased to have you back. Sign in to access your account, manage your information, and continue right where you left off.
              </WelcomeSubText>
            </WelcomeContainer>
          )}
          {switchTab == "sign" && (
            <WelcomeContainer>
              <WelcomeText>Welcome Back!</WelcomeText>
              <WelcomeSubText>
                Create your account to get started. Join us and enjoy quick
                access to your dashboard, personalized features, and more.
              </WelcomeSubText>
            </WelcomeContainer>
          )}
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
              <span>{webSiteName.domain}’s legal terms</span> , which we recommend reviewing
            </TermsandCondition>
          </JoinContainer>
        </RightJoining>
      </JoinningContainer></AuthMainContainer>
    </SiteLayout>
  );
};

export default auth;
