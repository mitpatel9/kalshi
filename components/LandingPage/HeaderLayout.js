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

const HeaderLayout = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isJoin, setIsJoin] = useState(false);
  const toggle = () => setIsJoin(!isJoin);
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
            <span onClick={() => toggle()}>Deposit cash</span>
          </SButton>
          <HeaderMenuIcon>
            <Icon
              icon="ix:trophy-filled"
              className="menuIcon"
              color="goldenrod"
              onClick={() => router.push("/leaderboard")}
            />
            <Icon icon="zondicons:notification" className="menuIcon" />

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
      <JoiningModal toggle={toggle} isJoin={isJoin} />
    </>
  );
};

export default HeaderLayout;
