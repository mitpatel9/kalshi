import { Hr } from "@/StyledComponents/CommonStyled";
import {
  MenuContainer,
  MenuItem,
  SiteLayout,
  SubMenuContainer,
  SubMenuItem,
} from "@/StyledComponents/LayoutStyled";
import React, { useState } from "react";
import HeaderLayout from "../LandingPage/HeaderLayout";

const Header = () => {
  return (
    <SiteLayout>
      <HeaderLayout />
     
      <MenuContainer>
        <MenuItem className="active">Trending</MenuItem>
        <MenuItem>New</MenuItem>
        <MenuItem>All</MenuItem>
        <MenuItem>Politics</MenuItem>
        <MenuItem>Sports</MenuItem>
        <MenuItem>Culture</MenuItem>
        <MenuItem>Crypto</MenuItem>
        <MenuItem>Climate</MenuItem>
        <MenuItem>Economics</MenuItem>
        <MenuItem>Mentions</MenuItem>
        <MenuItem>Companies</MenuItem>
        <MenuItem>Financials</MenuItem>
        <MenuItem>Tech & Science</MenuItem>
        <MenuItem>Health World</MenuItem>
        <MenuItem>Climate</MenuItem>
        <MenuItem>Economics</MenuItem>
        <MenuItem>Mentions</MenuItem>
        <MenuItem>Companies</MenuItem>
        <MenuItem>Financials</MenuItem>
        <MenuItem>Tech & Science</MenuItem>
        <MenuItem>Health World</MenuItem>
      </MenuContainer>
      <SubMenuContainer>
        <SubMenuItem className="active">Trending</SubMenuItem>
        <SubMenuItem>New</SubMenuItem>
        <SubMenuItem>All</SubMenuItem>
        <SubMenuItem>Politics</SubMenuItem>
        <SubMenuItem>Sports</SubMenuItem>
        <SubMenuItem>Culture</SubMenuItem>
        <SubMenuItem>Crypto</SubMenuItem>
        <SubMenuItem>Climate</SubMenuItem>
        <SubMenuItem>Economics</SubMenuItem>
        <SubMenuItem>Mentions</SubMenuItem>
        <SubMenuItem>Companies</SubMenuItem>
        <SubMenuItem>Financials</SubMenuItem>
        <SubMenuItem>Tech & Science</SubMenuItem>
        <SubMenuItem>Health World</SubMenuItem>
        <SubMenuItem>Climate</SubMenuItem>
        <SubMenuItem>Economics</SubMenuItem>
        <SubMenuItem>Mentions</SubMenuItem>
        <SubMenuItem>Companies</SubMenuItem>
        <SubMenuItem>Financials</SubMenuItem>
        <SubMenuItem>Tech & Science</SubMenuItem>
        <SubMenuItem>Health World</SubMenuItem>
      </SubMenuContainer>
      <Hr />
    </SiteLayout>
  );
};

export default Header;
