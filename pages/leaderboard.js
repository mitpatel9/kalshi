import HeaderLayout from "@/components/LandingPage/HeaderLayout";
import { CommonDiv, Hr } from "@/StyledComponents/CommonStyled";
import {
  LeaderBoardCategory,
  LeaderboardHedText,
  LeaderBoardItem,
  LeaderboardLeft,
  LeaderBoardListing,
  LeaderboardListingleftContainer,
  LeaderboardListingleftImg,
  LeaderboardListingTableName,
  LeaderboardListingTableNo,
  LeaderBoardListingTableProfitLoss,
  LeaderboardListingTableSubName,
  LeaderBoardListingTableVolume,
  LeaderboardMainContainer,
  LeaderBoardMenu,
  LeaderBoardMenuContainer,
  LeaderboardRight,
  LeaderboardRightListing,
  LeaderboardRightTextRight,
  LeaderBoardTableHed,
  LeaderBoardTableName,
  LeaderBoardTableNo,
  LeaderBoardTableProfitLoss,
  LeaderBoardTableVolume,
  LeaderBoradListingMaster,
  RightListingContainer,
  RightListingTableImg,
  RightListingTableName,
  RightListingTableNo,
  RightListingTableSubName,
  SiteLayout,
} from "@/StyledComponents/LayoutStyled";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React, { useState } from "react";
import Test from "../asset/Image/test.jpg";

const leaderboard = () => {
  const [leaderboardDropDown, setLeaderboardDropDown] = useState(false);
  const leaderboardToggle = () => setLeaderboardDropDown(!leaderboardDropDown);
  const loop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <SiteLayout>
      <HeaderLayout />
      <LeaderboardMainContainer>
        <LeaderboardLeft>
          <LeaderboardHedText>Leaderboard</LeaderboardHedText>
          <LeaderBoardMenuContainer>
            <LeaderBoardMenu>
              <LeaderBoardItem className="active">All</LeaderBoardItem>
              <LeaderBoardItem>Today</LeaderBoardItem>
              <LeaderBoardItem>Weekly</LeaderBoardItem>
              <LeaderBoardItem>Monthly</LeaderBoardItem>
            </LeaderBoardMenu>
            <LeaderBoardCategory>
              Category
              <Icon icon="mingcute:down-fill" width={18} height={18} />
            </LeaderBoardCategory>
          </LeaderBoardMenuContainer>
          <Hr />
          <LeaderBoardTableHed>
            <LeaderBoardTableNo></LeaderBoardTableNo>
            <LeaderBoardTableName></LeaderBoardTableName>
            <LeaderBoardTableProfitLoss>Profit/Loss</LeaderBoardTableProfitLoss>
            <LeaderBoardTableVolume>Volume</LeaderBoardTableVolume>
          </LeaderBoardTableHed>
          <Hr />
          {loop.length > 0 &&
            loop.map((no) => (
              <>
                <LeaderBoardListing>
                  <LeaderboardListingTableNo>{no}</LeaderboardListingTableNo>
                  <LeaderboardListingleftContainer>
                    <LeaderboardListingleftImg>
                      <Image src={Test} className="image" />
                    </LeaderboardListingleftImg>
                    <LeaderboardListingTableName>
                      Theo4
                    </LeaderboardListingTableName>
                  </LeaderboardListingleftContainer>
                  <LeaderBoardListingTableProfitLoss>
                    +$22,053,934
                  </LeaderBoardListingTableProfitLoss>
                  <LeaderBoardListingTableVolume>
                    $43,251,303
                  </LeaderBoardListingTableVolume>
                </LeaderBoardListing>
                <Hr />
              </>
            ))}
        </LeaderboardLeft>
        <LeaderboardRight>
          <LeaderboardRightTextRight>
            Biggest wins all time
          </LeaderboardRightTextRight>

          {loop.length > 0 &&
            loop.map((no) => (
              <>
                <LeaderboardRightListing>
                  <RightListingTableNo>{no}</RightListingTableNo>
                  <RightListingContainer>
                    <RightListingTableImg>
                      <Image src={Test} className="image" />
                    </RightListingTableImg>
                    <CommonDiv>
                      <RightListingTableName>
                        Theo4 <span>| Popular Vote Winner 2024</span>
                      </RightListingTableName>
                      <RightListingTableSubName>
                        $8,499,002 <span>$22,862,194</span>
                      </RightListingTableSubName>
                    </CommonDiv>
                  </RightListingContainer>
                </LeaderboardRightListing>{" "}
                <Hr />
              </>
            ))}
        </LeaderboardRight>
      </LeaderboardMainContainer>
    </SiteLayout>
  );
};

export default leaderboard;
