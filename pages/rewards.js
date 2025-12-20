import HeaderLayout from "@/components/LandingPage/HeaderLayout";
import RewardData from "@/components/rewards/RewardData";
import RewardsMenu from "@/components/rewards/RewardsMenu";
import {
  IncentivesContainer,
  IncentivesLeft,
  IncentivesRight,
  SiteLayout,
} from "@/StyledComponents/LayoutStyled";
import React from "react";

const rewards = () => {
  return (
    <SiteLayout>
      <HeaderLayout />
      <IncentivesContainer>
        <IncentivesLeft>
          <RewardsMenu />
        </IncentivesLeft>
        <IncentivesRight>
          <RewardData />
        </IncentivesRight>
      </IncentivesContainer>
    </SiteLayout>
  );
};

export default rewards;
