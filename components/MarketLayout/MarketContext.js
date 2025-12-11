import {
  ContectContainer,
  ContextHed,
  ContextIcon,
  MarketContextDesc,
  MarketContextHeading,
} from "@/StyledComponents/MarketsStyled";
import { Icon } from "@iconify/react";
import React, { useState } from "react";

const MarketContext = () => {
  const [show, setShow] = useState(false);
  return (
    <ContectContainer>
      <MarketContextHeading>
        <ContextHed>Market Context</ContextHed>
        <ContextIcon onClick={() => setShow(!show)}>Generate</ContextIcon>
      </MarketContextHeading>
      {show && (
        <MarketContextDesc>
          In the past week, significant developments have emerged regarding the
          2025 TIME Person of the Year, with the "Architects of AI" officially
          named as the recipient, as reported by multiple sources including TIME
          itself on December 11, 2025. This group, which includes key figures
          like Jensen Huang, Sam Altman, Elon Musk, and others, was recognized
          for the transformative impact of artificial intelligence over the past
          year. This announcement aligns with the overwhelming 100.0%
          probability on the prediction market for "Architects of AI / Other,"
          effectively resolving the market outcome to "Yes" for this category
          based on the cover announcement. Meanwhile, probabilities for Donald
          Trump and Elon Musk remain negligible at 0.1% each, reflecting no
          recent news or developments boosting their chances. The focus on AI's
          unprecedented influence has overshadowed individual candidacies,
          cementing the group award as the defining story of 2025.
        </MarketContextDesc>
      )}
    </ContectContainer>
  );
};

export default MarketContext;
