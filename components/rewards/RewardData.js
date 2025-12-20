import { Hr } from "@/StyledComponents/CommonStyled";
import {
  RewardDataListing,
  RewardDataListingHed,
  RewardEnd,
  RewardHedding,
  RewardIncentive,
  RewardListingEnd,
  RewardListingIncentive,
  RewardListingMarket,
  RewardListingProgram,
  RewardListingStart,
  RewardMarket,
  RewardProgram,
  RewardsContainer,
  RewardsDropbox,
  RewardsDropboxContainer,
  RewardStart,
} from "@/StyledComponents/LayoutStyled";
import { Icon } from "@iconify/react";
import React from "react";

const RewardData = () => {
  return (
    <RewardsContainer>
      <RewardHedding>Rewards</RewardHedding>

      <RewardsDropboxContainer>
        <RewardsDropbox>
          Status <Icon icon="mingcute:down-fill" width={18} height={18} />
        </RewardsDropbox>
        <RewardsDropbox>
          Rewards <Icon icon="mingcute:down-fill" width={18} height={18} />
        </RewardsDropbox>
      </RewardsDropboxContainer>

      {/* Data listing heding */}
      <Hr />
      <RewardDataListingHed>
        <RewardMarket>Market</RewardMarket>
        <RewardStart>Start</RewardStart>
        <RewardEnd>End</RewardEnd>
        <RewardProgram>Program</RewardProgram>
        <RewardIncentive>Reward</RewardIncentive>
      </RewardDataListingHed>
      <Hr />
      {/* Data listing  */}
      <RewardDataListing>
        <RewardListingMarket>Market</RewardListingMarket>
        <RewardListingStart>Start</RewardListingStart>
        <RewardListingEnd>End</RewardListingEnd>
        <RewardListingProgram>Program</RewardListingProgram>
        <RewardListingIncentive>Reward</RewardListingIncentive>
      </RewardDataListing>
    </RewardsContainer>
  );
};

export default RewardData;
