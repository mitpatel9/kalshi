import { Hr } from "@/StyledComponents/CommonStyled";
import {
  TimeLineContainer,
  TimeLineDesc,
  TimeLineDot,
  TimeLineHedContainer,
  TimeLineHedText,
  TimeLineItem,
  TimeLineLeft,
  TimeLineRight,
  TimeLineSubTitle,
  TimeLineText,
  TimeLineTitle,
  TimeLineVerticle,
} from "@/StyledComponents/MarketsStyled";
import { Icon } from "@iconify/react";
import React, { useState } from "react";

const TimelineAndPayout = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Hr />
      <TimeLineContainer>
        <TimeLineHedContainer onClick={() => setShow(!show)}>
          <TimeLineLeft>
            <Icon icon="uil:calender" className="icons" />
            <TimeLineHedText>Timeline and payout</TimeLineHedText>
          </TimeLineLeft>
          <TimeLineRight>
            {show ? (
              <Icon icon="mingcute:down-fill" className="icons" />
            ) : (
              <Icon icon="mingcute:up-fill" className="icons" />
            )}
          </TimeLineRight>
        </TimeLineHedContainer>

        {show && (
          <TimeLineDesc>
            <TimeLineVerticle>
              <TimeLineItem>
                <TimeLineDot active></TimeLineDot>
                <TimeLineTitle>Market open</TimeLineTitle>
                <TimeLineSubTitle>Feb 12, 2025 · 10:00am EST</TimeLineSubTitle>
              </TimeLineItem>
              <TimeLineItem>
                <TimeLineDot></TimeLineDot>
                <TimeLineTitle>Market closes</TimeLineTitle>
                <TimeLineSubTitle>After the outcome occurs</TimeLineSubTitle>
              </TimeLineItem>
              <TimeLineItem>
                <TimeLineDot></TimeLineDot>
                <TimeLineTitle>rojected payout</TimeLineTitle>
                <TimeLineSubTitle>5 minutes after closing</TimeLineSubTitle>
              </TimeLineItem>
            </TimeLineVerticle>
            <TimeLineText>
              This market will close and expire after a title holder is
              declared. Otherwise, it closes by Feb 8, 2028 at 10:00am EST.
            </TimeLineText>
            <TimeLineText>
              Series KXSB Event KXSB-26 Market KXSB-26-LAR
            </TimeLineText>
          </TimeLineDesc>
        )}
      </TimeLineContainer>
      <Hr />
    </>
  );
};

export default TimelineAndPayout;
