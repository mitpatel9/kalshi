import {
  HeaderDiv,
  HeaderMenuIcon,
  LeftDiv,
  Logo,
  Motto,
  RightDiv,
  SButton,
  SearchBar,
} from "@/StyledComponents/LayoutStyled";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Input } from "reactstrap";
import { useRouter } from "next/router";
import { Hr } from "@/StyledComponents/CommonStyled";
import ProfileMenuView from "./ProfileMenuView";
import Notification from "./Notification";
import { webSiteName } from "@/utils/enums";

const HeaderLayout = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [notify, setNotify] = useState(false);

  return (
    <>
      <HeaderDiv>
        <LeftDiv>
          <Logo onClick={() => router.push("/")}>{webSiteName.domain}</Logo>
          {/* <Motto>Knowledge Is The New currency.</Motto> */}
        </LeftDiv>
        <RightDiv>
          <SearchBar>
            <Icon icon="iconamoon:search-thin" />
            <Input
              type="Search markets or profiles..."
              placeholder="Search markets or profiles..."
            />
          </SearchBar>
          <SButton onClick={() => router.push("/auth")}>
            <span>Get Started</span>
          </SButton>
          {/* <SButton onClick={() => router.push("/payment")}>
            <span>Deposit cash</span>
          </SButton> */}
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
    </>
  );
};

export default HeaderLayout;
