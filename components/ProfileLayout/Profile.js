import {
  BorderRight,
  ProfileAccount,
  ProfileHed,
  ProfileImg,
  ProfileJOiningDate,
  ProfileLeftBottom,
  ProfileName,
  ProfileRightLogo,
  ProfileRightMiddle,
  ProfileRightMiddleIndicator,
  ProfilesContainer,
  ProfileSecretKey,
  ProfilesLeft,
  ProfilesRight,
  ProfilesRightHed,
  RightDataIndicator,
  RightProfileCharts,
  RightProfLoss,
  RightTimeLine,
  TimelineItem,
  YourAmount,
  YourBiggestWin,
  YourPosition,
  YourPredictions,
  YourTitle,
} from "@/StyledComponents/ProfileStyled";
import { Icon } from "@iconify/react";
import React from "react";
import Test from "../../asset/Image/test.jpg";
import Image from "next/image";

const Profile = () => {
  return (
    <ProfilesContainer>
      <ProfilesLeft>
        <ProfileHed>
          <ProfileImg>
            <Image src={Test} className="image" width={50} height={50} />
            <ProfileAccount>
              <ProfileName>Patel Mit</ProfileName>
              <ProfileJOiningDate>Joined Dec 2025</ProfileJOiningDate>
            </ProfileAccount>
          </ProfileImg>
          <ProfileSecretKey>
            <Icon
              icon="streamline:user-profile-focus-solid"
              width={18}
              height={18}
            />
          </ProfileSecretKey>
        </ProfileHed>
        <ProfileLeftBottom>
          <YourPosition>
            <YourTitle>Positions Value</YourTitle>
            <YourAmount>$200</YourAmount>
          </YourPosition>
          <BorderRight/>
          <YourBiggestWin>
            <YourTitle>Biggest Win</YourTitle>
            <YourAmount>-</YourAmount>
          </YourBiggestWin>
          <BorderRight/>
          <YourPredictions>
            <YourTitle>Predictions</YourTitle>
            <YourAmount>0</YourAmount>
          </YourPredictions>
        </ProfileLeftBottom>
      </ProfilesLeft>
      <ProfilesRight>
        <ProfilesRightHed>
          <RightProfLoss>
            <Icon
              icon="prime:sort-up-fill"
              className="green"
              width={16}
              height={36}
            />
            Profit/Loss
          </RightProfLoss>
          <RightTimeLine>
            <TimelineItem className="active">1D</TimelineItem>
            <TimelineItem>1W</TimelineItem>
            <TimelineItem>1M</TimelineItem>
            <TimelineItem >All</TimelineItem>
          </RightTimeLine>
        </ProfilesRightHed>
        <ProfileRightMiddle>
          <ProfileRightMiddleIndicator>
            $ 0.00{" "}
            <Icon
              icon="zondicons:exclamation-outline"
              className="icon"
              width={12}
              height={12}
            />
          </ProfileRightMiddleIndicator>
          <ProfileRightLogo>Kalshi</ProfileRightLogo>
        </ProfileRightMiddle>
          <RightDataIndicator>past Day</RightDataIndicator>
        <RightProfileCharts></RightProfileCharts>
      </ProfilesRight>
    </ProfilesContainer>
  );
};

export default Profile;
