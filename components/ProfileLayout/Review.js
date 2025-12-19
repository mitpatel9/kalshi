import {
  ComProcesBtn,
  ComProcessInner,
  ComProcessSubHedText,
  ComProcesSubText,
  ReviewIcons,
} from "@/StyledComponents/ProfileStyled";
import { Icon } from "@iconify/react";
import React from "react";

const Review = () => {
  return (
    <ComProcessInner>
      <ReviewIcons>
        <Icon icon="material-symbols:history-edu" width={24} height={24} />
      </ReviewIcons>
      <ComProcessSubHedText>Application submitted</ComProcessSubHedText>
      <ComProcesSubText>
        We will review your application shortly. If it has been more than 24
        hours since you have submitted, please reach out to support@kalshi.com
      </ComProcesSubText>
      <ComProcesBtn>Expolre More</ComProcesBtn>
    </ComProcessInner>
  );
};

export default Review;
