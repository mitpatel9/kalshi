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

const MarketOutCome = () => {
  const [isTab, setIsTab] = useState(false);
  const loopData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
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
        <OutcomeMarketListingLeft onClick={() => setIsTab(!isTab)}>
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
      {isTab && (
        <OutcomeMarketLiquidity>
          {/* LiquidityChart menu */}
          <LiquidityChartMenu>
            <LiquidityChartMenuItem className="active">
              Yes Orders
            </LiquidityChartMenuItem>
            <LiquidityChartMenuItem>No Orders</LiquidityChartMenuItem>
            <LiquidityChartMenuItem>Graph</LiquidityChartMenuItem>
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

          {/* graph data section */}
          <LiquidityChart>
            {loopData.length > 0 &&
              loopData.map((item) => (
                <GraphDataChartTop>
                  <GraphTitleYes></GraphTitleYes>
                  <GraphTitlePrice className="no">48¢</GraphTitlePrice>
                  <GraphTitleShare>563</GraphTitleShare>
                  <GraphTitleTotal>$45638</GraphTitleTotal>
                  {/* <span className="nobids">No bids</span> */}
                </GraphDataChartTop>
              ))}
            <HrGraph />
            <GraphDataChartCenter>
              <span className="yes">Trade Yes</span> Last 74¢
            </GraphDataChartCenter>{" "}
            <HrGraph />
            {loopData.length > 0 &&
              loopData.map((item) => (
                <GraphDataChartBottom>
                  <GraphTitleYes></GraphTitleYes>
                  <GraphTitlePrice className="yes">48¢</GraphTitlePrice>
                  <GraphTitleShare>563</GraphTitleShare>
                  <GraphTitleTotal>$45638</GraphTitleTotal>
                </GraphDataChartBottom>
              ))}
          </LiquidityChart>
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
