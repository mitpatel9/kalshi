import {
  HeaderDiv,
  LButton,
  LeftDiv,
  Logo,
  MenuContainer,
  MenuItem,
  RightDiv,
  SButton,
  SearchBar,
  SiteLayout,
} from "@/StyledComponents/LayoutStyled";
import { Icon } from "@iconify/react";
import React from "react";
import { Input } from "reactstrap";

const Header = () => {
  return (
    <SiteLayout>
      <HeaderDiv>
        <LeftDiv>
          <Logo>Klashi</Logo>
        </LeftDiv>
        <RightDiv>
          <SearchBar>
            <Icon icon="iconamoon:search-thin" />
            <Input
              type="Search markets or profiles..."
              placeholder="Search markets or profiles..."
            />
          </SearchBar>
          <LButton>
            <span>Log in</span>
          </LButton>
          <SButton>
            <span>Sign up</span>
          </SButton>
        </RightDiv>
      </HeaderDiv>
      <MenuContainer>
        <MenuItem>Trending</MenuItem>
        <MenuItem>New</MenuItem>
        <MenuItem>All Politics</MenuItem>
        <MenuItem>Sports Culture</MenuItem>
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
    </SiteLayout>
  );
};

export default Header;
