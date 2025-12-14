import {
  ActivityContainer,
  ActivityData,
  ActivityHedText,
  ActivityMenu,
  ActivityMenuItem,
} from "@/StyledComponents/ProfileStyled";
import React from "react";

const Activity = () => {
  return (
    <ActivityContainer>
      <ActivityHedText>Activity</ActivityHedText>
      <ActivityMenu>
        <ActivityMenuItem className="active">All</ActivityMenuItem>
        <ActivityMenuItem>Deposit</ActivityMenuItem>
        <ActivityMenuItem>Withdrawal</ActivityMenuItem>
        <ActivityMenuItem>Order</ActivityMenuItem>
        <ActivityMenuItem>Trade</ActivityMenuItem>
        <ActivityMenuItem>Settlement</ActivityMenuItem>
        <ActivityMenuItem>Reward</ActivityMenuItem>
      </ActivityMenu>
      <ActivityData>No activity with these filters</ActivityData>
    </ActivityContainer>
  );
};

export default Activity;
