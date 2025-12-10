import { CommonDiv, Hr } from "@/StyledComponents/CommonStyled";
import {
  FooterContainer,
  FooterCopyWrite,
  FooterHeading,
  FooterMenu,
  FooterText,
  MenuItemFooter,
} from "@/StyledComponents/LayoutStyled";
import { Icon } from "@iconify/react";
import React from "react";
import { Row } from "reactstrap";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterMenu>
        <MenuItemFooter>Privacy</MenuItemFooter>
        <MenuItemFooter> Terms of Use</MenuItemFooter>
        <MenuItemFooter> Learn</MenuItemFooter>
        <MenuItemFooter> Careers</MenuItemFooter>
        <MenuItemFooter> Press</MenuItemFooter>
      </FooterMenu>
      <Hr />
      <FooterCopyWrite>
        <FooterHeading> © 2025 Kalshi Inc.</FooterHeading>
        <CommonDiv>
          <Icon icon="fluent:mail-12-filled" className="icons" />
          <Icon icon="fa7-brands:x-twitter" className="icons" />
          <Icon icon="ant-design:instagram-filled" className="icons" />
        </CommonDiv>
      </FooterCopyWrite>
      <Hr />
      <FooterText>
        Trading on Kalshi involves risk and may not be appropriate for all.
        Members risk losing their cost to enter any transaction, including fees.
        You should carefully consider whether trading on Kalshi is appropriate
        for you in light of your investment experience and financial resources.
        Any trading decisions you make are solely your responsibility and at
        your own risk. Information is provided for convenience only on an "AS
        IS" basis. Past performance is not necessarily indicative of future
        results. Kalshi is subject to U.S. regulatory oversight by the CFTC.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
