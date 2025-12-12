import styled from "styled-components";

export const MarketsLayout = styled.div`
  display: flex;
`;
export const MarketLeftLayout = styled.div`
  width: 70%;
  padding-right: 0.5rem;
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
  font-size: 24px;
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
    max-height: 42px;
    max-width: 42px;
    border-radius: 10px;
  }
`;
export const AlsoBuyPercentage = styled.div`
  font-weight: 600;
  font-size: 14px;
`;
export const AlsoBuyHedText = styled.div`
  font-weight: 600;
  font-size: 14px;
`;

//Rules summary
export const RulesContainer = styled.div``;
export const RulesHedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const RulesHeding = styled.div`
  font-weight: 600;
  font-size: 24px;
`;
export const RulesIcon = styled.div`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
export const RulesOutcomeDropDown = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #fd7979;
  cursor: pointer;
  span {
    width: 18px;
    height: 18px;
  }
`;
export const RulesDesc = styled.div`
  font-weight: 400;
  font-size: 16px;
  padding: 1rem 0rem;
`;
export const RulesButton = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const FullRulesBtn = styled.div`
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  justify-content: center;
  background: #ffff;
  color: #fd7979;
  border: 1px solid #fd7979;
`;
export const HelpCenterBtn = styled.div`
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  justify-content: center;
  background: #fff;
  color: #fd7979;
  border: 1px solid #fd7979;
`;

//Market Context section
export const ContectContainer = styled.div`
  margin: 1rem 0rem;
  border: 1px solid #fd7979;
  border-radius: 5px;
`;
export const MarketContextHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;
export const ContextHed = styled.div`
  font-weight: 600;
  font-size: 18px;
`;
export const ContextIcon = styled.div`
  font-weight: 600;
  font-size: 12px;
  color: #fd7979;
`;
export const MarketContextDesc = styled.div`
  padding: 0rem 1rem;
  padding-bottom: 1rem;
  text-align: justify;
  font-weight: 400;
  font-size: 14px;
`;

//Timeline and payout
export const TimeLineContainer = styled.div``;
export const TimeLineHedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const TimeLineLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .icons {
    width: 18px;
    height: 18px;
  }
`;

export const TimeLineHedText = styled.div`
  font-weight: 600;
  font-size: 14px;
  text-align: center;
`;
export const TimeLineRight = styled.div`
  .icons {
    width: 18px;
    height: 18px;
  }
`;
export const TimeLineDesc = styled.div`
  margin: 1rem 0rem;
`;
export const TimeLineVerticle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-left: 3px;
  position: relative;

  /* vertical line */
  &::before {
    content: "";
    position: absolute;
    left: 8px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #e0e0e0;
  }
`;
export const TimeLineItem = styled.div`
  position: relative;
  padding-left: 24px;
  color: ${({ active }) => (active ? "#000" : "#888")};
`;
export const TimeLineDot = styled.div`
  position: absolute;
  left: -2px;
  top: 4px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${({ active }) => (active ? "#21c36f" : "#ccc")};
  border: ${({ active }) => (active ? "3px solid #21c36f" : "3px solid #ccc")};
`;
export const TimeLineTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
`;
export const TimeLineSubTitle = styled.div`
  font-size: 12px;
  color: #777;
  margin-top: 2px;
`;

export const TimeLineText = styled.div`
  font-size: 12px;
  color: #777;
  margin: 1rem 0rem;
`;

//Trading prohibitions
export const ProhibitionContainer = styled.div``;
export const ProhibitionHedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ProhibitionLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .icons {
    width: 18px;
    height: 18px;
  }
`;
export const ProhibitionHedText = styled.div`
  font-weight: 600;
  font-size: 14px;
  text-align: center;
`;
export const ProhibitionRight = styled.div`
  .icons {
    width: 18px;
    height: 18px;
  }
`;
export const ProhibitionDesc = styled.div`
  margin: 1rem 0rem;
`;
export const ProhibitionText = styled.div`
  padding-left: 1.5rem;
  font-size: 12px;
  color: #777;
  margin: 1rem 0rem;
`;

//comment section
export const CommentContainer = styled.div`
  margin-top: 1rem;
`;
export const CommentMenu = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;
export const CommentMenuItem = styled.div`
  font-weight: 600;
  font-size: 22px;
  color: #cccccc;
  cursor: pointer;

  &.active {
    color: #000;
  }
`;
export const CommetntBox = styled.div`
  padding: 8px 8px;
  border: 1px solid #000;
  border-radius: 5px;
`;
export const CommentTextArea = styled.div`
  textarea {
    outline: none;
    box-shadow: none;
    border: none;
    font-size: 16px;
    font-weight: 400;

    &::placeholder {
      color: #828282;
      opacity: 0.7;
      font-size: 16px;
      font-weight: 400;
    }

    &:focus {
      outline: none;
      border: 0;
      box-shadow: none;
      font-size: 16px;
      font-weight: 400;
    }
  }
`;
export const CommentBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CommentLeft = styled.div``;
export const CommentRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`;
export const CommentCount = styled.div`
  font-weight: 600;
  font-size: 10px;
  color: #cccccc;
`;
export const CommentBtn = styled.div`
  padding: 8px 16px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  display: flex;
  justify-content: center;
  color: #fff;
  background-color: #000;
  border: none;
`;
export const CommentArea = styled.div``;

//Ideas
//Activity
export const ActivityConatainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ActivityLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const ActivityImage = styled.div`
  .image {
    max-height: 32px;
    max-width: 32px;
    border-radius: 10px;
  }
`;
export const ActivityDesc = styled.div``;
export const ActivityUserName = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #000;
`;
export const ActivityTractions = styled.div`
  font-weight: 600;
  font-size: 10px;
  color: #000;

  .yes {
    font-weight: 600;
    font-size: 11px;
    color: #30a159;
  }
  .no {
    font-weight: 600;
    font-size: 11px;
    color: #e33939;
  }

  .contracts {
    font-weight: 600;
    font-size: 10px;
    color: #cccccc;
  }
`;
export const ActivityRight = styled.div`
  font-weight: 600;
  font-size: 12px;
  color: #cccccc;
`;

//TopHolder
export const HolderContainer = styled.div``;
export const HolderDropDown = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0.5rem;
      width: fit-content;
      font-weight: 600;
  font-size: 16px;
`;
export const HolderListing = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top:1rem;
`;
export const HolderLeft = styled.div`
  width: 50%;
  margin-right: 0.5rem;
`;
export const HolderHedPart = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const HolderHedTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #000;
`;
export const HolderHedSharesTitle = styled.div`
  font-weight: 600;
  font-size: 12px;
  color: #000;
`;
export const HolderDataPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const HolderDesc = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const HolderImage = styled.div`
  .image {
    max-height: 32px;
    max-width: 32px;
    border-radius: 10px;
  }
`;
export const HolderName = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #000;
`;
export const HolderHedShares = styled.div`
  font-weight: 600;
  font-size: 14px;
  &.yes {
    color: #30a159;
  }
  &.no {
    color: #e33939;
  }
`;
export const HolderRight = styled.div`
  width: 50%;
`;
