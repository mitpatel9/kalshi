import styled from "styled-components";

//DeleteAccount

export const DeleteAcContainer = styled.div`
  padding: 1rem;
`;
export const DeleteAcHedTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  color: #000;
`;
export const DeleteAcHedSub = styled.div`
  padding: 0.5rem 0rem;
  font-size: 14px;
  font-weight: 400;
  color: #000;
`;
export const DeleteAcMiddle = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1rem;
`;
export const MiddleLeft = styled.div`
  padding: 0rem 0.5rem;
  &.red {
    color: #e33939;
  }

  &.green {
    color: #30a159;
  }
`;
export const MiddleRight = styled.div``;
export const ConfirmPositionHed = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #000;
`;
export const ConfirmPositionSub = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #b5b5b5;
`;
export const DeleteAcButton = styled.div`
  width: 100%;
  padding: 8px 16px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  display: flex;
  justify-content: center;
  border: 2px solid var(--primary--color);
  background: var(--primary--color);
  color: #fff;
`;
export const DeleteBottonText = styled.div`
padding: 0.5rem 0rem;
text-align: center;
  font-size: 13px;
  font-weight: 600;
  color: #b5b5b5;
`;
