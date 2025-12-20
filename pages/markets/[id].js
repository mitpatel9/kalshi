import HeaderLayout from "@/components/LandingPage/HeaderLayout";
import AlsoBuy from "@/components/MarketLayout/AlsoBuy";
import BottomSec from "@/components/MarketLayout/BottomSec";
import ImpotantNotice from "@/components/MarketLayout/ImpotantNotice";
import MarketChart from "@/components/MarketLayout/MarketChart";
import MarketContext from "@/components/MarketLayout/MarketContext";
import MarketHeader from "@/components/MarketLayout/MarketHeader";
import MarketOutCome from "@/components/MarketLayout/MarketOutCome";
import OrderBuySell from "@/components/MarketLayout/OrderBuySell";
import RulesSummary from "@/components/MarketLayout/RulesSummary";
import TimelineAndPayout from "@/components/MarketLayout/TimelineAndPayout";
import TradingProhibitions from "@/components/MarketLayout/TradingProhibitions";
import { SiteLayout } from "@/StyledComponents/LayoutStyled";
import {
  MarketLeftLayout,
  MarketRightLayout,
  MarketsLayout,
  TermsandConditionOrderBook,
} from "@/StyledComponents/MarketsStyled";
import { TermsandCondition } from "@/StyledComponents/ModalStyled";
import React from "react";

const MarketData = () => {
  return (
    <SiteLayout>
      <HeaderLayout />
      <MarketsLayout>
        <MarketLeftLayout>
          <MarketHeader />
          <MarketChart />
          <MarketOutCome />
          <MarketContext />
          <ImpotantNotice />
          <RulesSummary />
          <TimelineAndPayout />
          <TradingProhibitions />
          <BottomSec />
        </MarketLeftLayout>
        <MarketRightLayout>
          <OrderBuySell />
          <TermsandConditionOrderBook>
            By trading, you agree to the <span>Terms of Use</span>.
          </TermsandConditionOrderBook>
          <AlsoBuy />
        </MarketRightLayout>
      </MarketsLayout>
    </SiteLayout>
  );
};

export default MarketData;
