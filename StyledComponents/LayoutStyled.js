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
    background-color: #ffcdc9;
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
 
`;
export const MenuItem = styled.div`
  font-weight: 600;
  font-size: 14px;
`;
