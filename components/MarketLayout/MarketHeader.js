import {
  MarketEndDate,
  MarketTopContainer,
  MarketTopDesc,
  MarketTopHedding,
  MarketTopHedText,
  MarketTopIcon,
  MarketTopImg,
  MarketVol,
} from "@/StyledComponents/MarketsStyled";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";
import Test from "../../asset/Image/test.jpg";

const MarketHeader = () => {
  return (
    <MarketTopContainer>
      <MarketTopHedding>
        <MarketTopImg>
          <Image src={Test} className="image" />
          <MarketTopHedText>Time 2025 Person of the Year</MarketTopHedText>
        </MarketTopImg>

        <MarketTopIcon>
          <Icon icon="line-md:link" className="icons" />
          <Icon icon="material-symbols:download" className="icons" />
          <Icon icon="tabler:bookmark" className="icons" />
        </MarketTopIcon>
      </MarketTopHedding>

      <MarketTopDesc>
        <MarketVol>
          {" "}
          <Icon icon="ix:trophy-filled" className="icons" />
          $35,780,325 Vol.
        </MarketVol>
        <MarketEndDate>
          {" "}
          <Icon icon="stash:data-date-solid" className="icons" />
          Dec 31, 2025
        </MarketEndDate>
      </MarketTopDesc>
    </MarketTopContainer>
  );
};

export default MarketHeader;
