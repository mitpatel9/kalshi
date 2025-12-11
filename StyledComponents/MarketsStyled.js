import styled from "styled-components";

export const MarketsLayout = styled.div`
  display: flex;
`;
export const MarketLeftLayout = styled.div`
  width: 70%;
`;
export const MarketRightLayout = styled.div`
  width: 30%;
`;

//market header section
export const MarketTopContainer = styled.div``;
export const MarketTopHedding = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const MarketTopImg = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  .image {
    max-height: 58px;
    max-width: 58px;
    border-radius: 10px;
  }
`;
export const MarketTopHedText = styled.div`
  font-weight: 600;
  font-size: 18px;
`;
export const MarketTopIcon = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-right: 0.5rem;
  .icons {
    width: 18px;
    height: 18px;
  }
`;
export const MarketTopDesc = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
`;
export const MarketVol = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #b5b5b5;
  .icons {
    width: 18px;
    height: 18px;
    margin-right: 0.5rem;
  }
`;
export const MarketEndDate = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #b5b5b5;
  .icons {
    width: 18px;
    height: 18px;
    margin-right: 0.5rem;
  }
`;

//oder buy sell section
export const OrderContaier = styled.div`
  padding: 1rem;
  border: 1px solid #fd7979;
  border-radius: 10px;
`;
export const OrderTopHedding = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .image {
    max-height: 58px;
    max-width: 58px;
    border-radius: 10px;
  }
`;
export const OrderTopHedText = styled.div`
  font-weight: 600;
  font-size: 16px;
`;
export const OrderTopSubText = styled.div`
  font-weight: 600;
  font-size: 12px;
  span {
    font-size: 14px;
    color: #fd7979;
  }
`;
export const OrderMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  border-bottom: 1px solid #dbdbdb;
`;
export const OrderMenuOption = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const BuySellMenu = styled.div`
  font-weight: 600;
  font-size: 16px;

  &.active {
    color: #fd7979;
  }
`;
export const OrderOption = styled.div`
  font-weight: 600;
  font-size: 16px;
`;
export const OrderButton = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  gap: 0.5rem;
`;
export const OderYesBtn = styled.div`
  width: 50%;
  padding: 8px 16px;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  font-size: 12px;
  display: flex;
  justify-content: center;
  border: 2px solid #fd7979;

  &.active {
    background: #fd7979;
    color: #fff;
  }
`;
export const OrderNoBtn = styled.div`
  width: 50%;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 12px;
  display: flex;
  justify-content: center;
  border: 2px solid #fd7979;

  &.active {
    background: #fd7979;
    color: #fff;
  }
`;
export const OrderContract = styled.div`
  border: 2px solid #fd7979;
  border-radius: 10px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContracContainer = styled.div`
  width: 70%;
  padding: 1rem;
`;
export const ContracHedText = styled.div`
  font-weight: 600;
  font-size: 14px;
`;
export const ContracIntrest = styled.div`
  font-weight: 600;
  font-size: 12px;
  color: #fd7979;
`;
export const ContracInput = styled.div`
  width: 30%;

  input {
    outline: none;
    box-shadow: none;
    border: none;

    &::placeholder {
      color: #828282;
      opacity: 0.7;
      font-size: 28px;
      font-weight: 600;
    }

    &:focus {
      outline: none;
      border: 0;
      box-shadow: none;
      font-size: 28px;
      font-weight: 600;
    }
  }
`;

export const OrderEstimated = styled.div``;
export const OrderEstimatedValue = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 0rem;
`;
export const LeftText = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #828282;
`;
export const RightValue = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #828282;

  span {
    color: #0ec286;
  }
`;
export const OderTradeButton = styled.div`
  width: 100%;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  background: #fd7979;
  color: #fff;
`;

//also buying peopel section
export const AlsoBuyContainer = styled.div`
  margin: 0.5rem 0rem;
  border-radius: 10px;
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none;
  height: 500px;
  border: 1px solid #fd7979;
   padding: 0.5rem;
`;
export const AlsoBuyTopHeading = styled.div`
  font-weight: 600;
  font-size: 28px;
  margin: 0.5rem 0rem;
`;
export const AlsoBuyTradeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AlsoBuyContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0.5rem 0rem;
  cursor: pointer;

  .image {
    max-height: 48px;
    max-width: 48px;
    border-radius: 10px;
  }
`;
export const AlsoBuyPercentage = styled.div`
  font-weight: 600;
  font-size: 16px;
`;
export const AlsoBuyHedText = styled.div`
  font-weight: 600;
  font-size: 16px;
`;
