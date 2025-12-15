import { Hr } from "@/StyledComponents/CommonStyled";
import {
  PrefName,
  SettingsContainer,
  SettingsHeading,
  SettingsHeadingSub,
  SettingsPrefContainer,
  StyledSwitch,
} from "@/StyledComponents/ProfileStyled";
import React from "react";

const Settings = () => {
  return (
    <SettingsContainer>
      <SettingsHeading>Settings</SettingsHeading>
      <SettingsHeadingSub>Marketing Preferences</SettingsHeadingSub>
      <Hr />
      <SettingsPrefContainer>
        <PrefName>Email</PrefName>
        <StyledSwitch>
          <input type="checkbox" checked={true} />{" "}
          <span className="slider"></span>
        </StyledSwitch>
      </SettingsPrefContainer>{" "}
      <Hr />
      <SettingsPrefContainer>
        <PrefName>SMS</PrefName>
        <StyledSwitch>
          <input type="checkbox" checked={true} />{" "}
          <span className="slider"></span>
        </StyledSwitch>
      </SettingsPrefContainer>{" "}
      <Hr />
      <SettingsPrefContainer>
        <PrefName>Push Notifications</PrefName>
        <StyledSwitch>
          <input type="checkbox" checked={true} />{" "}
          <span className="slider"></span>
        </StyledSwitch>
      </SettingsPrefContainer>{" "}
      <Hr />
      <SettingsPrefContainer>
        <PrefName> Notifications on the Sites</PrefName>
        <StyledSwitch>
          <input type="checkbox" checked={false} />{" "}
          <span className="slider"></span>
        </StyledSwitch>
      </SettingsPrefContainer>{" "}
      <Hr />
    </SettingsContainer>
  );
};

export default Settings;
