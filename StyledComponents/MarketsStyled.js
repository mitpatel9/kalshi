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
