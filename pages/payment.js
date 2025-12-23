import HeaderLayout from "@/components/LandingPage/HeaderLayout";
import { CommonDiv } from "@/StyledComponents/CommonStyled";
import {
  DepositContainer,
  DepositHedding,
  DepositIcon,
  DepositIconHed,
  DepositIconSubText,
  DepositLogo,
  DepositMethodContainer,
  DepositMethodName,
  DepositSecureContainer,
  SiteLayout,
} from "@/StyledComponents/LayoutStyled";
import { Icon } from "@iconify/react";
import React from "react";

const payment = () => {
  return (
    <SiteLayout>
      <HeaderLayout />
      <DepositContainer>
        <DepositHedding>
          <DepositSecureContainer>
            <DepositIcon>
              {" "}
              <Icon icon="bxs:lock" width={28} height={28} />
            </DepositIcon>
            <CommonDiv>
              <DepositIconHed>Secure payment by</DepositIconHed>
              <DepositIconSubText>Kalsi</DepositIconSubText>
            </CommonDiv>
          </DepositSecureContainer>
          <DepositLogo>Kalsi</DepositLogo>
        </DepositHedding>
        <DepositMethodContainer>
          <Icon icon="logos:google-pay" width={38} height={38} />
          <DepositMethodName>Google Pay</DepositMethodName>
        </DepositMethodContainer>
        <DepositMethodContainer>
          <Icon icon="solar:card-bold" width={28} height={28} />

          <DepositMethodName>Debit card</DepositMethodName>
        </DepositMethodContainer>
      </DepositContainer>
    </SiteLayout>
  );
};

export default payment;
