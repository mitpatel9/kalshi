import HeaderLayout from "@/components/LandingPage/HeaderLayout";
import AccountSecurity from "@/components/ProfileLayout/AccountSecurity";
import Activity from "@/components/ProfileLayout/Activity";
import Documents from "@/components/ProfileLayout/Documents";
import Settings from "@/components/ProfileLayout/Settings";
import Transfers from "@/components/ProfileLayout/Transfers";
import { SiteLayout } from "@/StyledComponents/LayoutStyled";
import {
  ProfileContainer,
  ProfileLeft,
  ProfileMenuContainer,
  ProfileMenuItem,
  ProfileRight,
} from "@/StyledComponents/ProfileStyled";
import { Icon } from "@iconify/react";
import React, { useState } from "react";

const profile = () => {
  const [switchTab, setSwitchTab] = useState("account");
  return (
    <SiteLayout>
      <HeaderLayout />
      <ProfileContainer>
        <ProfileLeft>
          <ProfileMenuContainer>
            <ProfileMenuItem
              className={switchTab === "account" ? "active" : ""}
              onClick={() => setSwitchTab("account")}
            >
              <Icon icon="gg:profile" className="icons" />
              Account & security
            </ProfileMenuItem>
            <ProfileMenuItem
              className={switchTab === "activity" ? "active" : ""}
              onClick={() => setSwitchTab("activity")}
            >
              <Icon icon="hugeicons:dashboard-speed-01" className="icons" />
              Your activity
            </ProfileMenuItem>
            <ProfileMenuItem
              className={switchTab === "transfers" ? "active" : ""}
              onClick={() => setSwitchTab("transfers")}
            >
              <Icon
                icon="hugeicons:circle-arrow-data-transfer-horizontal"
                className="icons"
              />
              Transfers
            </ProfileMenuItem>
            <ProfileMenuItem
              className={switchTab === "documents" ? "active" : ""}
              onClick={() => setSwitchTab("documents")}
            >
              <Icon icon="proicons:document" className="icons" />
              Documents
            </ProfileMenuItem>
            <ProfileMenuItem
              className={switchTab === "settings" ? "active" : ""}
              onClick={() => setSwitchTab("settings")}
            >
              <Icon icon="uil:setting" className="icons" />
              Settings
            </ProfileMenuItem>
          </ProfileMenuContainer>
        </ProfileLeft>
        <ProfileRight>
          {switchTab === "account" && <AccountSecurity />}
          {switchTab === "activity" && <Activity />}
          {switchTab === "transfers" && <Transfers />}
          {switchTab === "documents" && <Documents />}
          {switchTab === "settings" && <Settings />}
        </ProfileRight>
      </ProfileContainer>
    </SiteLayout>
  );
};

export default profile;
