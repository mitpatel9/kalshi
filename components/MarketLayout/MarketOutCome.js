import { Hr } from "@/StyledComponents/CommonStyled";
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
  OutcomeMarketLiquidity,
  OutcomeMarketListing,
  OutcomeMarketListingCenter,
  OutcomeMarketListingLeft,
  OutcomeMarketListingRight,
  OutcomeMarketNoBtn,
  OutcomeMarketYesBtn,
  OutcomePrecentage,
} from "@/StyledComponents/MarketsStyled";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import YesGraph from "./graph/YesGraph";
import NoGraph from "./graph/NoGraph";
import SingleGraph from "./graph/SingleGraph";

const MarketOutCome = () => {
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
    </OutcomeContainer>
  );
};

export default MarketOutCome;
