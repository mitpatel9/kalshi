import { Hr } from "@/StyledComponents/CommonStyled";
import {
  ProhibitionContainer,
  ProhibitionDesc,
  ProhibitionHedContainer,
  ProhibitionHedText,
  ProhibitionLeft,
  ProhibitionRight,
  ProhibitionText,
} from "@/StyledComponents/MarketsStyled";
import { Icon } from "@iconify/react";
import React, { useState } from "react";

const TradingProhibitions = () => {
  const [show, setShow] = useState(false);
  return (
    <ProhibitionContainer>
      <ProhibitionHedContainer onClick={() => setShow(!show)}>
        <ProhibitionLeft>
          <Icon icon="nonicons:not-found-16" className="icons" />
          <ProhibitionHedText>Trading prohibitions</ProhibitionHedText>
        </ProhibitionLeft>
        <ProhibitionRight>
          {show ? (
            <Icon icon="mingcute:down-fill" className="icons" />
          ) : (
            <Icon icon="mingcute:up-fill" className="icons" />
          )}
        </ProhibitionRight>
      </ProhibitionHedContainer>
      {show && (
        <ProhibitionDesc>
          <ProhibitionText>
            The following are prohibited from trading this contract: Current and
            former players, coaches, and staff of the league, association, or
            organization governing the event. For college leagues/associations
            specifically, or where otherwise appropriate as identified by the
            Exchange, this applies to current and former players/coaches/staff
            of the specific teams in rather than the league/association as a
            whole (e.g., if the Division I Gonzaga Men’s Basketball Team is
            playing in , this prohibition will restrict trades by current/former
            players of that team, rather than all current/former
            players/coaches/staff in any NCAA sport. Paid employees of the
            league and league participants Owners of teams and the league and
            household members and immediate family of all above
          </ProhibitionText>
        </ProhibitionDesc>
      )}
      <Hr />
    </ProhibitionContainer>
  );
};

export default TradingProhibitions;
