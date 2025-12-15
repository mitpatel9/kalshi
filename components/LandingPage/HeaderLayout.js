import {
  HeaderDiv,
  HeaderMenuIcon,
  LeftDiv,
  Logo,
  RightDiv,
  SButton,
  SearchBar,
} from "@/StyledComponents/LayoutStyled";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Input } from "reactstrap";
import JoiningModal from "../Models/JoiningModal";
import { useRouter } from "next/router";
import { Hr } from "@/StyledComponents/CommonStyled";
import ProfileMenuView from "./ProfileMenuView";
import DepositModal from "../Models/DepositModal";
import Notification from "./Notification";

const HeaderLayout = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [notify, setNotify] = useState(false);

  const [isJoin, setIsJoin] = useState(false);
  const toggle = () => setIsJoin(!isJoin);

  const [isDeposit, setIsDeposit] = useState(false);
  const toggleDeposit = () => setIsDeposit(!isDeposit);
  return (
    <>
      <HeaderDiv>
        <LeftDiv>
          <Logo onClick={() => router.push("/")}>Klashi</Logo>
        </LeftDiv>
        <RightDiv>
          <SearchBar>
            <Icon icon="iconamoon:search-thin" />
            <Input
              type="Search markets or profiles..."
              placeholder="Search markets or profiles..."
            />
          </SearchBar>
          <SButton>
            <span onClick={() => toggle()}>Get Started</span>
          </SButton>
          <SButton>
            <span onClick={() => toggleDeposit()}>Deposit cash</span>
          </SButton>
          <HeaderMenuIcon>
            <Icon
              icon="ix:trophy-filled"
              className="menuIcon"
              color="goldenrod"
              onClick={() => router.push("/leaderboard")}
            />
            <Icon
              icon="zondicons:notification"
              className="menuIcon"
              onClick={() => setNotify(!notify)}
            />

            <Icon
              icon="material-symbols:menu-rounded"
              className="menuIcon"
              onClick={() => setOpen(!open)}
            />
          </HeaderMenuIcon>
        </RightDiv>
      </HeaderDiv>{" "}
      <Hr />
      <ProfileMenuView open={open} setOpen={setOpen} />
      <Notification notify={notify} setNotify={setNotify} />
      <JoiningModal toggle={toggle} isJoin={isJoin} />
      <DepositModal isDeposit={isDeposit} toggleDeposit={toggleDeposit} />
    </>
  );
};

export default HeaderLayout;
