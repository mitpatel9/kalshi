import styled from "styled-components";

export const MarketSection = styled.div``;
export const SiteLayout = styled.div`
  width: 100%;
  padding: 0px 2rem;
`;

//header section

export const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;
export const LeftDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const RightDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.15rem;
`;
export const Logo = styled.div``;
export const SearchBar = styled.div`
  position: relative;
  width: 280px;
  max-width: 100%;
  margin-right: 0.5rem;

  svg {
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
    color: #000 !important;
    font-size: 18px;
  }

  input {
    width: 100%;
    padding: 10px 12px 10px 40px;
    border-radius: 12px;
    border: 1px solid #fd7979;
    background-color: #ffcdc98f;
    color: #000;
    font-size: 12px;
    transition: all 0.2s ease;

    &:focus {
      background-color: #fff;
      border-color: #fd7979;
      outline: none;
      box-shadow: 0 0 0 2px rgba(253, 121, 121, 0.2);
    }
  }

  @media (max-width: 769px) {
    display: none;
  }
`;
export const LButton = styled.div`
  background: transparent;
  color: #fd7979;
  font-weight: 600;
  padding: 8px 14px;
  border: 2px solid #fd7979;
  border-radius: 10px;
  cursor: pointer;
  font-size: 12px;
  transition: 0.25s ease;
  display: flex;
  align-items: center;
  gap: 6px;
`;
export const SButton = styled.div`
  background: #fd7979;
  color: #fff;
  font-weight: 600;
  padding: 8px 16px;
  border: 2px solid #fd7979;
  border-radius: 10px;
  cursor: pointer;
  font-size: 12px;
  transition: 0.25s ease;
  display: flex;
  align-items: center;
  gap: 6px;
`;

//menu item

export const MenuContainer = styled.div`
  display: flex;
  gap: 16px;
  padding: 10px 0;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const MenuItem = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #8c8c8c;
  cursor: pointer;

  &:hover {
    color: #000;
  }

  &.active {
    color: #000;
  }
`;

export const SubMenuContainer = styled.div`
  display: flex;
  gap: 12px;
  padding: 10px 0;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const SubMenuItem = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: #000;
  cursor: pointer;
  border-radius: 50px;
  padding: 0.5rem;

  border: 1px solid #8c8c8c;

  &:hover {
    color: #fd7979;
    background-color: #ffcdc98f;
    border: 1px solid #fd7979;
  }

  &.active {
    color: #fd7979;
    background-color: #ffcdc98f;
    border: 1px solid #fd7979;
  }
`;

//information section
export const TradeMainContainer = styled.div``;
export const InfoMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0rem;
`;
export const TabSection = styled.div``;
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const IconInfo = styled.div`
  color: #fd7979;
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffcdc98f;
  border-radius: 0.5rem;
  margin-right: 10px;
`;
export const MainTitle = styled.div`
  color: #fd7979;
  font-weight: 600;
  font-size: 16px;
`;
export const SubTitle = styled.div`
  font-weight: 600;
  font-size: 12px;
`;

//trade posting section
export const TradeContainer = styled.div``;
export const TradeListing = styled.div`
  border: 1px solid #e6e8eb;
  border-radius: 10px;
  padding: 0.5rem;
`;
export const PostFistSection = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0px;
  justify-content: space-between;
`;
export const PostImage = styled.div`
  display: flex;

  .image {
    border-radius: 8px;
    margin-right: 0.5rem;
  }
`;
export const PostTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
`;
export const PostChances = styled.div`
  .circle {
    width: 80px;
    height: 40px;
    border-radius: 120px 120px 0 0;
    background: conic-gradient(green 0deg 180deg, red 180deg 360deg);
    overflow: hidden;
    position: relative;
  }

  .center {
    text-align: center;
    padding-top: 20px;
    font-size: 18px;
    font-weight: bold;
  }
`;
export const PostSecondSectionContainer = styled.div``;
export const PostSecondSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0px;
`;
export const TradeListingName = styled.div`
  font-weight: 600;
  font-size: 12px;
`;
export const TradeButton = styled.div`
  display: flex;
`;

export const TradePrencentage = styled.div`
 font-weight: 600;
  font-size: 12px;
`;
export const TradeButtonYes = styled.div`
  background: #e4f7ea;
  padding: 0.5rem 0.5rem;
  border-radius: 5px;
  color: #30a159;
  font-weight: 600;
  margin-right: 2px;
`;
export const TradeButtonNo = styled.div`
  background: #fceded;
  padding: 10px 15px;
  border-radius: 5px;
  color: #e35969;
  font-weight: 600;
`;
export const PostThirdSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const TradeVolume = styled.div`
  font-weight: 600;
  font-size: 12px;
`;
export const TradeTypes = styled.div`
  font-weight: 600;
  font-size: 12px;
`;
export const TradeIcone = styled.div``;
export const TradeButton2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around !impotant;
`;
export const TradeButtonYes2 = styled.div`
  background: #e4f7ea;
  padding: 5rem;
  border-radius: 5px;
  color: #30a159;
  font-weight: 600;
  margin-right: 2px;
`;
export const TradeButtonNo2 = styled.div`
  background: #fceded;
  padding: 10px 15px;
  border-radius: 5px;
  color: #e35969;
  font-weight: 600;
`;
