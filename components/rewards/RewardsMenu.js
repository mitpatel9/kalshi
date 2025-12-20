import {
  IncentivesMenuContainer,
  IncentivesMenuItem,
} from "@/StyledComponents/LayoutStyled";
import React from "react";

const RewardsMenu = () => {
  return (
    <IncentivesMenuContainer>
      <IncentivesMenuItem className="active">All</IncentivesMenuItem>
      <IncentivesMenuItem>Economics</IncentivesMenuItem>
      <IncentivesMenuItem>Financials</IncentivesMenuItem>
      <IncentivesMenuItem>Crypto</IncentivesMenuItem>
      <IncentivesMenuItem>Climate and Weather</IncentivesMenuItem>
      <IncentivesMenuItem>Entertainment</IncentivesMenuItem>
      <IncentivesMenuItem>Science and Technology</IncentivesMenuItem>
      <IncentivesMenuItem>Health</IncentivesMenuItem>
    </IncentivesMenuContainer>
  );
};

export default RewardsMenu;
