import {
  FullRulesBtn,
  HelpCenterBtn,
  RulesButton,
  RulesContainer,
  RulesDesc,
  RulesHedContainer,
  RulesHeding,
  RulesIcon,
  RulesOutcomeDropDown,
} from "@/StyledComponents/MarketsStyled";
import { Icon } from "@iconify/react";
import React from "react";

const RulesSummary = () => {
  return (
    <RulesContainer>
      <RulesHedContainer>
        <RulesHeding>Rules summary</RulesHeding>
        <RulesIcon>
          <Icon icon="zondicons:exclamation-outline" className="icons" />
        </RulesIcon>
      </RulesHedContainer>
      <RulesOutcomeDropDown>
        Los Angeles R{" "}
        <span>
          <Icon icon="mingcute:down-fill" className="icons" />
        </span>
      </RulesOutcomeDropDown>
      <RulesDesc>
        If Los Angeles R wins the 2026 Pro Football Championship, then the
        market resolves to Yes. Sources from AP, Fox Sports, and ESPN.
      </RulesDesc>
      <RulesButton>
        <FullRulesBtn>View full rules</FullRulesBtn>
        <HelpCenterBtn>Help center</HelpCenterBtn>
      </RulesButton>
    </RulesContainer>
  );
};

export default RulesSummary;
