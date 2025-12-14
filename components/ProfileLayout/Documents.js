import { Hr } from "@/StyledComponents/CommonStyled";
import {
  DocumentsContainer,
  DocumentsHedText,
  DocumentsTextDesc,
} from "@/StyledComponents/ProfileStyled";
import React from "react";

const Documents = () => {
  return (
    <DocumentsContainer>
      <DocumentsHedText>Documents</DocumentsHedText>
      <Hr />
      <DocumentsTextDesc>
        Here you can find information helpful for you or an advisor on
        evaluating your Kalshi returns. This is not tax advice and not
        endorsement of any action. Your information is split into years you've
        actively traded on the exchange and updated monthly. The PnL number
        displayed includes fees and rebates if you qualify.
      </DocumentsTextDesc>
      <DocumentsTextDesc>
        See more info on the Taxes and Fees Help Center page here.
      </DocumentsTextDesc>
      <DocumentsTextDesc>
        You will see yearly profits and losses here once you make a trade!
      </DocumentsTextDesc>
      <Hr />
      <DocumentsTextDesc>
        Users who hit certain reporting thresholds as defined by the IRS will
        receive the following documentation. Kalshi does not report
        profits/losses to the IRS (the 1099-MISC only contains credit/rewards
        from Kalshi).
      </DocumentsTextDesc>
    </DocumentsContainer>
  );
};

export default Documents;
