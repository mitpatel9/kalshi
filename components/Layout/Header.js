import { Hr } from "@/StyledComponents/CommonStyled";
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
  SubMenuContainer,
  SubMenuItem,
} from "@/StyledComponents/LayoutStyled";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Input } from "reactstrap";
import JoiningModal from "../Models/JoiningModal";

const Header = () => {
  const [isJoin, setIsJoin] = useState(false);
  const toggle = () => setIsJoin(!isJoin);
  return (
    <>
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
            <SButton>
              <span onClick={() => toggle()}>Get Started</span>
            </SButton>
          </RightDiv>
        </HeaderDiv>
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
      <JoiningModal toggle={toggle} isJoin={isJoin} />
    </>
  );
};

export default Header;
