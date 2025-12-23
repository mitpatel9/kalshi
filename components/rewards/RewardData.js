import {
  Hr,
  ItemDropbox,
  MenuDropbox,
  ToggleDropbox,
} from "@/StyledComponents/CommonStyled";
import {
  ListingContainer,
  ListingContainerHed,
  ListingContainerSubText,
  RewardDataListing,
  RewardDataListingHed,
  RewardEnd,
  RewardHedding,
  RewardIncentive,
  RewardListingEnd,
  RewardListingImg,
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
  StartHedding,
  StartHeddingSub,
} from "@/StyledComponents/LayoutStyled";
import { Icon } from "@iconify/react";
import Test from "../../asset/Image/test.jpg";
import React, { useState } from "react";
import Image from "next/image";
import { Dropdown, Input } from "reactstrap";

const RewardData = () => {
  const [statusDropDown, setStatusDropDown] = useState(false);
  const statusToggle = () => setStatusDropDown(!statusDropDown);
  const [rewardsDropDown, setRewardsDropDown] = useState(false);
  const rewardsToggle = () => setRewardsDropDown(!rewardsDropDown);
  const loopData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 10, 11, 12, 13];
  return (
    <RewardsContainer>
      <RewardHedding>Rewards</RewardHedding>

      <RewardsDropboxContainer>
        <RewardsDropbox>
          <Dropdown isOpen={statusDropDown} toggle={statusToggle}>
            <ToggleDropbox>
              Status <Icon icon="mingcute:down-fill" width={18} height={18} />
            </ToggleDropbox>
            <MenuDropbox>
              <ItemDropbox>
                <Input type="radio" checked={true} />
                Active
              </ItemDropbox>
              <ItemDropbox>
                <Input type="radio" />
                Upcoming
              </ItemDropbox>
              <ItemDropbox>
                <Input type="radio" />
                Closed
              </ItemDropbox>
            </MenuDropbox>
          </Dropdown>
        </RewardsDropbox>
        <RewardsDropbox>
          <Dropdown isOpen={rewardsDropDown} toggle={rewardsToggle}>
            <ToggleDropbox>
              Rewards <Icon icon="mingcute:down-fill" width={18} height={18} />
            </ToggleDropbox>
            <MenuDropbox>
              <ItemDropbox>
                <Input type="radio" checked={true} />
                All
              </ItemDropbox>
              <ItemDropbox>
                <Input type="radio" />
                Liquidity
              </ItemDropbox>
              <ItemDropbox>
                <Input type="radio" />
                Volume
              </ItemDropbox>
            </MenuDropbox>
          </Dropdown>
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
      {loopData.length > 0 &&
        loopData.map(() => (
          <RewardDataListing>
            <RewardListingMarket>
              <RewardListingImg>
                {" "}
                <Image src={Test} className="image" />
              </RewardListingImg>
              <ListingContainer>
                <ListingContainerHed>Republican Party</ListingContainerHed>
                <ListingContainerSubText>
                  Which party will win the U.S. Senate next year?
                </ListingContainerSubText>
              </ListingContainer>
            </RewardListingMarket>
            <RewardListingStart>
              <StartHedding>Nov 12 2025</StartHedding>
              <StartHeddingSub>8:48 AM GMT 5:30</StartHeddingSub>
            </RewardListingStart>
            <RewardListingEnd>
              <StartHedding>Nov 12 2025</StartHedding>
              <StartHeddingSub>8:48 AM GMT 5:30</StartHeddingSub>
            </RewardListingEnd>
            <RewardListingProgram>Liquidity</RewardListingProgram>
            <RewardListingIncentive>
              $200 <Icon icon="icons8:plus" width={18} height={18} />
            </RewardListingIncentive>
          </RewardDataListing>
        ))}
    </RewardsContainer>
  );
};

export default RewardData;
