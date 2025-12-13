import {
  ImpotentNoticeContainer,
  ImpotentText,
} from "@/StyledComponents/MarketsStyled";
import React from "react";

const ImpotantNotice = () => {
  return (
    <ImpotentNoticeContainer>
      <ImpotentText>
        <span>Important information:</span> Not all weather data is the same.
        see the rules for more details.
      </ImpotentText>
    </ImpotentNoticeContainer>
  );
};

export default ImpotantNotice;
