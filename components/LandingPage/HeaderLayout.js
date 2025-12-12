import {
  HeaderDiv,
  LeftDiv,
  Logo,
  RightDiv,
  SButton,
  SearchBar,
} from "@/StyledComponents/LayoutStyled";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Input } from "reactstrap";
import JoiningModal from "../Models/JoiningModal";
import { useRouter } from "next/router";

const HeaderLayout = () => {
  const router =useRouter();
  const [isJoin, setIsJoin] = useState(false);
  const toggle = () => setIsJoin(!isJoin);
  return (
    <>
      <HeaderDiv>
        <LeftDiv>
          <Logo onClick={()=> router.push("/")}>Klashi</Logo>
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
      </HeaderDiv>{" "}
      <JoiningModal toggle={toggle} isJoin={isJoin} />
    </>
  );
};

export default HeaderLayout;
