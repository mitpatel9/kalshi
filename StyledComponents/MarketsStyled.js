import styled from "styled-components";

export const MarketsLayout = styled.div`
  display: flex;
  margin: 1.5rem 0rem;

  /* Tablet */
  @media (max-width: 1024px) {
    flex-direction: column;
  }

  /* Mobile */
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export const MarketLeftLayout = styled.div`
  width: 70%;
  padding-right: 0.5rem;
  /* Tablet */
  @media (max-width: 1024px) {
    width: 100%;
    padding-right: 0;
    margin-bottom: 1rem; /* space between left and right */
  }

  /* Mobile */
  @media (max-width: 600px) {
    width: 100%;
    padding-right: 0;
    margin-bottom: 0.8rem;
  }
`;
export const MarketRightLayout = styled.div`
  width: 30%;

  /* Tablet */
  @media (max-width: 1024px) {
    display: none;
  }

  /* Mobile */
  @media (max-width: 600px) {
    display: none;
  }
`;

export const AlsoBuyMobileView = styled.div`
  @media (min-width: 1025px) {
    display: none;
  }
`;

//market header section
export const MarketTopContainer = styled.div`
  width: 100%;
  padding: 0.5rem 0;

  /* Tablet */
  @media (max-width: 1024px) {
    padding: 0.5rem;
  }

  /* Mobile */
  @media (max-width: 600px) {
    padding: 0.3rem;
  }
`;
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

    @media (max-width: 1024px) {
      max-height: 50px;
      max-width: 50px;
    }

    @media (max-width: 600px) {
      max-height: 40px;
      max-width: 40px;
    }
  }
`;
export const MarketTopHedText = styled.div`
  font-weight: 600;
  font-size: 18px;
  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
export const MarketTopIcon = styled.div`
  display: flex;
  gap: 0.5rem;

  .icons {
    width: 18px;
    height: 18px;

    @media (max-width: 1024px) {
      width: 16px;
      height: 16px;
    }

    @media (max-width: 600px) {
      width: 14px;
      height: 14px;
    }
  }
`;
export const MarketTopDesc = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;

  @media (max-width: 1024px) {
    gap: 0.8rem;
  }

  @media (max-width: 600px) {
    gap: 0.5rem;
  }
`;
export const MarketVol = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #b5b5b5;
  .icons {
    width: 18px;
    height: 18px;
    margin-right: 0.5rem;

    @media (max-width: 1024px) {
      width: 16px;
      height: 16px;
      margin-right: 0.3rem;
    }

    @media (max-width: 600px) {
      width: 14px;
      height: 14px;
      margin-right: 0.2rem;
    }
  }

  @media (max-width: 1024px) {
    font-size: 14px;
  }

  @media (max-width: 600px) {
    font-size: 12px;
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
    @media (max-width: 1024px) {
      width: 16px;
      height: 16px;
      margin-right: 0.3rem;
    }

    @media (max-width: 600px) {
      width: 14px;
      height: 14px;
      margin-right: 0.2rem;
    }
  }
  @media (max-width: 1024px) {
    font-size: 14px;
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

//oder buy sell section
export const OrderContaier = styled.div`
  padding: 1rem;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
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

export const TermsandConditionOrderBook = styled.div`
  color: #8c8c8c;
  font-size: 12px;
  font-weight: 600;
  margin-top: 0.5rem;
  text-align: center;
  span {
    font-weight: 600;
    color: #fd7979;
    cursor: pointer;
  }
`;

//also buying peopel section
export const AlsoBuyContainer = styled.div`
  margin: 0.5rem 0rem;
  border-radius: 10px;
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none;
  height: 470px;
  border: none;
  padding: 0.5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
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
  font-size: 14px;
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
  font-size: 18px;
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
  margin-top: 1rem;
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

//Impotant Notice
export const ImpotentNoticeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #e4f7ea;
  border: 1px solid #30a159;
  border-radius: 5px;
`;
export const ImpotentText = styled.div`
  color: #000;
  font-size: 14px;
  span {
    font-weight: 600;
    font-size: 15px;
  }
`;

// Ideas comment
export const IdeaContainer = styled.div`
  margin-top: 1rem;
`;

export const IdeaCommentContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;
export const IdeaSubComment = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;
export const IdeaImage = styled.div`
  .image {
    max-height: 32px;
    max-width: 32px;
    border-radius: 10px;
  }
`;
export const IdeaContent = styled.div``;
export const IdeaUserName = styled.div`
  font-weight: 600;
  color: #000;
  font-size: 14px;
  span {
    margin-left: 0.5rem;
    font-weight: 600;
    color: #c4c0c0ff;
    font-size: 10px;
  }
`;
export const UserComment = styled.div`
  font-weight: 400;
  color: #000;
  font-size: 12px;
`;
export const IdeaIcons = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 0.2rem;
  align-items: center;
  font-weight: 600;
  color: #c4c0c0ff;
  font-size: 14px;
  cursor: pointer;
`;
//reward box
export const RewardBoxContainer = styled.div`
  padding: 1rem;
`;
export const RewardIHed = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #265cff;
`;
export const RewardHedText = styled.div`
  color: #000;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;
export const RewardHedTextsub = styled.div`
  color: #000;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;
export const RewardTiming = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;
export const RewardtimeHed = styled.div`
  color: #000;
  font-size: 14px;
  font-weight: 500;
`;
export const RewardtimeSub = styled.div`
  color: #8c8c8c;
  font-size: 12px;
  font-weight: 500;
`;
export const RewardLernMore = styled.div`
  color: #8c8c8c;
  font-size: 12px;
  font-weight: 500;
  margin-top: 0.5rem;
  span {
    cursor: pointer;
  }
`;
//out come section
export const HrGraph = styled.div`
  border-bottom: 1px solid #dbdbdb;
`;

export const OutcomeContainer = styled.div`
  margin: 1rem 0rem;
`;
export const OutcomeHedTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0rem;
`;
export const OutcomeHedTitleLeft = styled.div`
  font-weight: 500;
  color: #8c8c8c;
  font-size: 12px;
  width: 40%;

  @media (max-width: 1024px) {
    font-size: 10px;
  }

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
export const OutcomeHedTitleCenter = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 500;
  color: #8c8c8c;
  font-size: 12px;

  .icons {
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    font-size: 10px;
  }

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
export const OutcomeHedTitleRight = styled.div`
  width: 40%;
`;
export const OutcomeMarketListing = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0.2rem;
  border-top: 1px solid #e6e8ea;

  &:hover {
    background-color: #e6e8ea;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0.1rem;
  }
`;
export const OutcomeMarketListingLeft = styled.div`
  cursor: pointer;
  width: 40%;
`;
export const MarketOutcomeHedText = styled.div`
  font-weight: 500;
  color: #000;
  font-size: 16px;
  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export const MarketOutcomeHedTextSub = styled.div`
  font-weight: 500;
  color: #8c8c8c;
  font-size: 12px;

  @media (max-width: 768px) {
    font-size: 8px;
  }
`;
export const OutcomeMarketListingCenter = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  color: #000;
  font-size: 24px;

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const OutcomePrecentage = styled.div`
  font-weight: 500;
  color: #000;
  font-size: 12px;
  margin-left: 0.6rem;

  .red {
    color: #e33939;
    width: 18px;
    height: 18px;

    @media (max-width: 768px) {
      width: 8px;
      height: 8px;
    }
  }

  .green {
    color: #30a159;
    width: 18px;
    height: 18px;

    @media (max-width: 768px) {
      width: 8px;
      height: 8px;
    }
  }

  @media (max-width: 768px) {
    font-size: 8px;
    margin-left: 0.2rem;
  }
`;
export const OutcomeMarketListingRight = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 40%;
  align-items: center;
`;
export const OutcomeMarketIconReward = styled.div`
  cursor: pointer;
  margin-right: 0.5rem;

  .icons {
    color: #000;
    width: 18px;
    height: 18px;

    @media (max-width: 768px) {
      width: 8px;
      height: 8px;
    }
  }
`;
export const OutcomeMarketYesBtn = styled.div`
  font-weight: 600;
  font-size: 16px;
  background-color: #30a159;
  color: #fff;
  border-radius: 3px;
  padding: 8px 36px;
  margin-right: 0.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 2px 12px;
    font-size: 8px;
    margin-right: 0.3rem;
  }

  @media (max-width: 400px) {
    padding: 2px 8px;
    font-size: 6px;
    margin-right: 0.1rem;
  }
`;
export const OutcomeMarketNoBtn = styled.div`
  font-weight: 600;
  font-size: 16px;
  background-color: #e33939;
  color: #fff;
  border-radius: 3px;
  padding: 8px 36px;
  cursor: pointer;
  margin-right: 0.5rem;

  @media (max-width: 768px) {
    padding: 2px 12px;
    font-size: 8px;
    margin-right: 0.3rem;
  }
  @media (max-width: 400px) {
    padding: 2px 8px;
    font-size: 6px;
    margin-right: 0.1rem;
  }
`;

export const OutcomeMarketLiquidity = styled.div`
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    margin-top: 0.3rem;
  }
`;
export const LiquidityChartMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 0.3rem;
  }
`;
export const LiquidityChartMenuItem = styled.div`
  font-weight: 500;
  color: #8c8c8c;
  font-size: 14px;

  &.active {
    font-weight: 600;
    color: #000;
  }

  @media (max-width: 1024px) {
    font-size: 10px;
  }

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
export const GraphHedding = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  color: #8c8c8c;
  font-size: 12px;
  padding-bottom: 0.5rem;

  @media (max-width: 1024px) {
    font-size: 10px;
  }

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
export const LiquidityChart = styled.div`
  width: 100%;
  max-height: 300px;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const GraphDataChartTop = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  color: #8c8c8c;
  font-size: 12px;
  padding: 0.5rem 0rem;
  margin-bottom: 0.1rem;
  background-color: #fceded;
`;
export const GraphNoContainer = styled.div`
  position: relative;
`;

export const GrapTopTooltip = styled.div`
  position: absolute;
  z-index: 99;
  border: none;
  color: #fff;
  border-radius: 5px;
  padding: 2px 6px;
  font-size: 8px;
  font-weight: 600;
  margin: 0.5rem;

  &.yes {
    background-color: #30a159;
    top: 0px;
  }
  &.no {
    background-color: #e33939;
    bottom: 0px;
  }
`;
export const GraphDataChartCenter = styled.div`
  font-weight: 500;
  color: #8c8c8c;
  font-size: 12px;
  text-align: center;
  padding: 0.5rem 0rem;

  .yes {
    font-size: 14px;
    color: #30a159;
  }

  .no {
    font-size: 14px;
    color: #e33939;
  }
`;
export const GraphDataChartBottom = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  color: #8c8c8c;
  font-size: 12px;
  padding: 0.5rem 0rem;
  margin-bottom: 0.1rem;
  background-color: #e4f7ea;
`;
export const GraphTitleYes = styled.div`
  width: 40%;
`;
export const GraphTitlePrice = styled.div`
  width: 20%;
  text-align: center;

  &.yes {
    color: #30a159;
  }
  &.no {
    color: #e33939;
  }
`;
export const GraphTitleShare = styled.div`
  width: 20%;
  text-align: center;
`;
export const GraphTitleTotal = styled.div`
  width: 20%;
  text-align: center;
`;
export const LiquidityFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
