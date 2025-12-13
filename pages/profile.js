import HeaderLayout from "@/components/LandingPage/HeaderLayout";
import { SiteLayout } from "@/StyledComponents/LayoutStyled";
import {
  ProfileContainer,
  ProfileLeft,
  ProfileMenuContainer,
  ProfileMenuItem,
  ProfileRight,
} from "@/StyledComponents/ProfileStyled";
import { Icon } from "@iconify/react";
import React from "react";

const profile = () => {
  return (
    <SiteLayout>
      <HeaderLayout />
      <ProfileContainer>
        <ProfileLeft>
          <ProfileMenuContainer>
            <ProfileMenuItem className="active">
              <Icon icon="gg:profile" className="icons" />
              Account & security
            </ProfileMenuItem>
            <ProfileMenuItem>
              <Icon icon="hugeicons:dashboard-speed-01" className="icons" />
              Your activity
            </ProfileMenuItem>
            <ProfileMenuItem>
              <Icon
                icon="hugeicons:circle-arrow-data-transfer-horizontal"
                className="icons"
              />
              Transfers
            </ProfileMenuItem>
            <ProfileMenuItem>
              <Icon icon="proicons:document" className="icons" />
              Documents
            </ProfileMenuItem>
            <ProfileMenuItem>
              <Icon icon="uil:setting" className="icons" />
              Settings
            </ProfileMenuItem>
          </ProfileMenuContainer>
        </ProfileLeft>
        <ProfileRight></ProfileRight>
      </ProfileContainer>
    </SiteLayout>
  );
};

export default profile;
