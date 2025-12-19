import { Hr } from "@/StyledComponents/CommonStyled";
import { NBtn, YBtn } from "@/StyledComponents/LayoutStyled";
import {
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
import React from "react";

const MarketOutCome = () => {
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
        <OutcomeMarketListingLeft>
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

      <OutcomeMarketLiquidity>
        dsds
      </OutcomeMarketLiquidity>

      <OutcomeMarketListing>
        <OutcomeMarketListingLeft>
          <MarketOutcomeHedText>Before July</MarketOutcomeHedText>
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
