import { Hr } from "@/StyledComponents/CommonStyled";
import {
  LeaderBoardInner,
  ProfileLeaderBoardContainer,
  ProfilemenuIcons,
  ProfilemenuIconsName,
  ProfileSideBar,
  ProfileSidebarInner,
  SidebarMenuItem,
} from "@/StyledComponents/LayoutStyled";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import React from "react";

const ProfileMenuView = (props) => {
  const router = useRouter();
  return (
    <ProfileSideBar
      className={props.open ? "active" : ""}
      onClick={() => props.setOpen(!props.open)}
    >
      <ProfileSidebarInner>
        <ProfileLeaderBoardContainer>
          <LeaderBoardInner onClick={() => router.push("/leaderboard")}>
            <ProfilemenuIcons>
              <Icon
                icon="ix:trophy-filled"
                className="icons"
                width={22}
                height={22}
              />
            </ProfilemenuIcons>
            <ProfilemenuIconsName>Leaderboard</ProfilemenuIconsName>
          </LeaderBoardInner>
          <LeaderBoardInner onClick={() => router.push("/payment")}>
            <ProfilemenuIcons>
              <Icon
                icon="typcn:plus"
                className="menuIcon"
                width={22}
                height={22}
              />
            </ProfilemenuIcons>
            <ProfilemenuIconsName>Add funds</ProfilemenuIconsName>
          </LeaderBoardInner>
        </ProfileLeaderBoardContainer>
        <Hr />
        <SidebarMenuItem onClick={() => router.push("/profile")}>
          Profile
        </SidebarMenuItem>
        <SidebarMenuItem onClick={() => router.push("/rewards")}>Rewards</SidebarMenuItem>
        <SidebarMenuItem onClick={() => router.push("/watchlist")}>Watchlist</SidebarMenuItem>
        <SidebarMenuItem>Support</SidebarMenuItem>
        <SidebarMenuItem>Log Out</SidebarMenuItem>
      </ProfileSidebarInner>
    </ProfileSideBar>
  );
};

export default ProfileMenuView;
