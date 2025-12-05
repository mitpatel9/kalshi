import {
  IconContainer,
  IconInfo,
  InfoMainContainer,
  MainTitle,
  SiteLayout,
  SubTitle,
  TabSection,
} from "@/StyledComponents/LayoutStyled";
import { Icon } from "@iconify/react";
import React from "react";

const InfoSec = () => {
  return (
    <SiteLayout>
      <InfoMainContainer>
        <TabSection>
          <IconContainer>
            <IconInfo>
              <Icon icon="mingcute:bank-line" width={28} height={28} />
            </IconInfo>
            <div>
              <MainTitle>Legal & regulated in the US</MainTitle>
              <SubTitle>
                Trade on the election, Oscars, Bitcoin, and more
              </SubTitle>
            </div>
          </IconContainer>
        </TabSection>
        <TabSection>
          <IconContainer>
            <IconInfo>
              {" "}
              <Icon
                icon="material-symbols:multiline-chart-rounded"
                width={28}
                height={28}
              />
            </IconInfo>
            <div>
              <MainTitle>Grow your entire portfolio</MainTitle>
              <SubTitle>3.5% APY on all your cash and positions</SubTitle>
            </div>
          </IconContainer>
        </TabSection>
        <TabSection>
          <IconContainer>
            <IconInfo>
              {" "}
              <Icon icon="mingcute:transfer-fill" width={28} height={28} />
            </IconInfo>
            <div>
              <MainTitle>Fund your account freely</MainTitle>
              <SubTitle>Bank transfer, debit card, crypto, or wire</SubTitle>
            </div>
          </IconContainer>
        </TabSection>
      </InfoMainContainer>
    </SiteLayout>
  );
};

export default InfoSec;
