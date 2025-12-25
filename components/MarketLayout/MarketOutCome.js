import { CommonDiv, Hr } from "@/StyledComponents/CommonStyled";
import { NBtn, YBtn } from "@/StyledComponents/LayoutStyled";
import {
  GraphDataChart,
  GraphDataChartBottom,
  GraphDataChartCenter,
  GraphDataChartContainer,
  GraphDataChartTop,
  GraphHedding,
  GraphTitlePrice,
  GraphTitleShare,
  GraphTitleTotal,
  GraphTitleYes,
  HrGraph,
  LiquidityChart,
  LiquidityChartMenu,
  LiquidityChartMenuItem,
  LiquidityFooter,
  MarketOutcomeHedText,
  MarketOutcomeHedTextSub,
  OutcomeContainer,
  OutcomeHedTitle,
  OutcomeHedTitleCenter,
  OutcomeHedTitleLeft,
  OutcomeHedTitleRight,
  OutcomeMarketIconReward,
  OutcomeMarketLiquidity,
  OutcomeMarketListing,
  OutcomeMarketListingCenter,
  OutcomeMarketListingLeft,
  OutcomeMarketListingRight,
  OutcomeMarketNoBtn,
  OutcomeMarketYesBtn,
  OutcomePrecentage,
  RewardBoxContainer,
  RewardHedText,
  RewardHedTextsub,
  RewardIHed,
  RewardInner,
  RewardLernMore,
  RewardtimeHed,
  RewardtimeSub,
  RewardTiming,
} from "@/StyledComponents/MarketsStyled";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import YesGraph from "./graph/YesGraph";
import NoGraph from "./graph/NoGraph";
import SingleGraph from "./graph/SingleGraph";
import { Popover } from "reactstrap";
import { useRouter } from "next/router";

const MarketOutCome = () => {
  const router =useRouter();
  const [rewardPop, setRewardPop] = useState(false);
  const toggle = () => setRewardPop(!rewardPop);
  const [isDrop, setIsDrop] = useState(false);
  const [isTab, setIsTab] = useState("yesgraph");

  return (
    <OutcomeContainer>
      <OutcomeHedTitle>
        <OutcomeHedTitleLeft>OUTCOME</OutcomeHedTitleLeft>
        <OutcomeHedTitleCenter>
          <Icon icon="fa-solid:percentage" width={12} height={12} /> CHANCE{" "}
          <Icon icon="bx:refresh" className="icons" width={16} height={16} />
        </OutcomeHedTitleCenter>
        <OutcomeHedTitleRight></OutcomeHedTitleRight>
      </OutcomeHedTitle>

      <OutcomeMarketListing>
        <OutcomeMarketListingLeft onClick={() => setIsDrop(!isDrop)}>
          <MarketOutcomeHedText>Before July</MarketOutcomeHedText>
          <MarketOutcomeHedTextSub>$11,385,227 Vol.</MarketOutcomeHedTextSub>
        </OutcomeMarketListingLeft>
        <OutcomeMarketListingCenter>
          2%
          <OutcomePrecentage>
            <Icon
              icon="prime:sort-up-fill"
              className="green"
              width={16}
              height={36}
            />{" "}
            8%
          </OutcomePrecentage>
        </OutcomeMarketListingCenter>
        <OutcomeMarketListingRight>
          <OutcomeMarketIconReward id="reward">
            <Icon
              icon="lets-icons:dimond-alt"
           
              color="#265cff"
              className="icons"
              onClick={() => toggle()}
            />
          </OutcomeMarketIconReward>{" "}
          <OutcomeMarketYesBtn>Yes 21$</OutcomeMarketYesBtn>
          <OutcomeMarketNoBtn>No 80%</OutcomeMarketNoBtn>
        </OutcomeMarketListingRight>
      </OutcomeMarketListing>

      {isDrop && (
        <OutcomeMarketLiquidity>
          {/* LiquidityChart menu */}
          <LiquidityChartMenu>
            <LiquidityChartMenuItem
              className={isTab == "yesgraph" ? "active" : ""}
              onClick={() => setIsTab("yesgraph")}
            >
              Yes Orders
            </LiquidityChartMenuItem>
            <LiquidityChartMenuItem
              className={isTab == "nograph" ? "active" : ""}
              onClick={() => setIsTab("nograph")}
            >
              No Orders
            </LiquidityChartMenuItem>
            <LiquidityChartMenuItem
              className={isTab == "singlegraph" ? "active" : ""}
              onClick={() => setIsTab("singlegraph")}
            >
              Graph
            </LiquidityChartMenuItem>
          </LiquidityChartMenu>
          <Hr />
          {/* Liquidity  graph */}
          <GraphHedding>
            <GraphTitleYes>Yes Orders</GraphTitleYes>
            <GraphTitlePrice>Price</GraphTitlePrice>
            <GraphTitleShare>Shares</GraphTitleShare>
            <GraphTitleTotal>Total</GraphTitleTotal>
          </GraphHedding>
          <HrGraph />
          {isTab === "yesgraph" && <YesGraph />}
          {isTab === "nograph" && <NoGraph />}
          {isTab === "singlegraph" && <SingleGraph />}
          <HrGraph />
          {/* Liquidity  footer icon */}
          <LiquidityFooter>
            <Icon icon="mingcute:question-line" width={16} height={36} />{" "}
            <Icon icon="uil:setting" width={16} height={36} />{" "}
            <Icon icon="ooui:align-center" width={16} height={36} />{" "}
          </LiquidityFooter>
        </OutcomeMarketLiquidity>
      )}

      <OutcomeMarketListing>
        <OutcomeMarketListingLeft>
          <MarketOutcomeHedText>Before Aug</MarketOutcomeHedText>
          <MarketOutcomeHedTextSub>$11,385,227 Vol.</MarketOutcomeHedTextSub>
        </OutcomeMarketListingLeft>
        <OutcomeMarketListingCenter>
          52%
          <OutcomePrecentage>
            <Icon
              icon="prime:sort-down-fill"
              className="red"
              width={16}
              height={36}
            />{" "}
            8%
          </OutcomePrecentage>
        </OutcomeMarketListingCenter>
        <OutcomeMarketListingRight>
          <OutcomeMarketYesBtn>Yes 21$</OutcomeMarketYesBtn>
          <OutcomeMarketNoBtn>No 80%</OutcomeMarketNoBtn>
        </OutcomeMarketListingRight>
      </OutcomeMarketListing>
      {/* reward box */}
      <Popover
        placement="bottom"
        isOpen={rewardPop}
        target="reward"
        toggle={toggle}
      >
        <RewardBoxContainer>
          <RewardIHed>
            <Icon
              icon="eos-icons:hourglass"
              width={14}
              height={14}
              color="#265cff"
              className="ml-2"
            />
            Liquidity rewards pool
            <Icon
              icon="icons8:right-round"
              width={18}
              height={18}
              color="#265cff"
              onClick={()=> router.push("/rewards")}
            />
          </RewardIHed>
          <RewardHedText>$20</RewardHedText>
          <RewardHedTextsub>Discount factor: 0.5</RewardHedTextsub>
          <RewardTiming>
            <CommonDiv>
              <RewardtimeHed>Dec 20, 2025</RewardtimeHed>
              <RewardtimeSub>9:32 PM GMT+5:30</RewardtimeSub>
            </CommonDiv>
            <CommonDiv>
              <RewardtimeHed>Dec 21, 2025</RewardtimeHed>
              <RewardtimeSub>5:29 AM GMT+5:30</RewardtimeSub>
            </CommonDiv>
          </RewardTiming>
          <RewardLernMore>
            Earn rewards when your bids rank in the top 300 shares.{" "}
            <span>Learn more</span>
          </RewardLernMore>
        </RewardBoxContainer>
      </Popover>
    </OutcomeContainer>
  );
};

export default MarketOutCome;
