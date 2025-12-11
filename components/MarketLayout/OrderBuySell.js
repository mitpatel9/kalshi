import {
  BuySellMenu,
  ContracContainer,
  ContracHedText,
  ContracInput,
  ContracIntrest,
  LeftText,
  OderTradeButton,
  OderYesBtn,
  OrderButton,
  OrderContaier,
  OrderContract,
  OrderEstimated,
  OrderEstimatedValue,
  OrderMenu,
  OrderMenuLeft,
  OrderMenuOption,
  OrderMenuRight,
  OrderNoBtn,
  OrderOption,
  OrderTopHedding,
  OrderTopHedText,
  OrderTopIcon,
  OrderTopImg,
  OrderTopSubText,
  OrderTopTitle,
  RightValue,
} from "@/StyledComponents/MarketsStyled";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";
import Test from "../../asset/Image/test.jpg";
import { Input } from "reactstrap";
import { CommonDiv, Hr } from "@/StyledComponents/CommonStyled";

const OrderBuySell = () => {
  return (
    <OrderContaier>
      <OrderTopHedding>
        <Image src={Test} className="image" />
        <CommonDiv>
          <OrderTopHedText>Time 2025 Person of the Year</OrderTopHedText>
          <OrderTopSubText>
            <span>Buy Yes</span> · Los Angeles R
          </OrderTopSubText>
        </CommonDiv>
      </OrderTopHedding>

      <OrderMenu>
        <OrderMenuOption>
          <BuySellMenu className="active">Buy</BuySellMenu>
          <BuySellMenu>Sell</BuySellMenu>
        </OrderMenuOption>
        <OrderOption>
          Limit <Icon icon="mingcute:down-fill" className="icons" />
        </OrderOption>
      </OrderMenu>

      <OrderButton>
        <OderYesBtn className="active">Yes 19¢</OderYesBtn>
        <OrderNoBtn>No 19¢</OrderNoBtn>
      </OrderButton>

      {/* order Contrac section */}
      <OrderContract>
        <ContracContainer>
          <ContracHedText>Contracts</ContracHedText>
          <ContracIntrest>Earn 3.5% Interest</ContracIntrest>
        </ContracContainer>
        <ContracInput>
          <Input placeholder="0" />
        </ContracInput>
      </OrderContract>

      <OrderEstimated>
        <OrderEstimatedValue>
          <LeftText>Average price</LeftText>
          <RightValue>19¢</RightValue>
        </OrderEstimatedValue>
        <OrderEstimatedValue>
          <LeftText>Estimated cost</LeftText>
          <RightValue>$19</RightValue>
        </OrderEstimatedValue>
        <OrderEstimatedValue>
          <LeftText>
            Payout If Yes <Icon icon="line-md:link" className="icons" />
          </LeftText>
          <RightValue>
            $100 <span> (+$81) </span>
          </RightValue>
        </OrderEstimatedValue>
      </OrderEstimated>

      <OderTradeButton>Trade</OderTradeButton>
    </OrderContaier>
  );
};

export default OrderBuySell;
