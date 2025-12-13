import styled from "styled-components";

//profile section
export const ProfileContainer = styled.div`
  margin-top: 2rem;
  display: flex;
`;
export const ProfileLeft = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 5px;
  margin-bottom: 2rem;
`;
export const ProfileRight = styled.div``;
export const ProfileMenuContainer = styled.div`
  padding: 0.3rem;
`;
export const ProfileMenuItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 12px 16px 12px 12px;
  font-weight: 600;
  color: #000;
  font-size: 14px;

  .icons {
    width: 24px;
    height: 24px;
  }

  &.active {
    border-radius: 5px;
    background-color: #ededed;
  }
`;
