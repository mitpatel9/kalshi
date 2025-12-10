import styled from "styled-components";

// login sign up modal css
export const JoinningContainer = styled.div`
  display: flex;
  padding: 1rem;
`;
export const LeftJoining = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 1.5rem;
`;
export const WelcomeContainer = styled.div``;
export const RightJoining = styled.div`
  width: 50%;
`;
export const WelcomeText = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #fd7979;
  text-align: center;
`;
export const WelcomeSubText = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #b5b5b5;
  text-align: center;
`;
export const JoinToggle = styled.div`
  display: flex;
  align-items: center;
`;
export const LoginName = styled.div`
  text-align: center;
  background: #fff;
  color: #fd7979;
  font-weight: 600;
  padding: 8px 16px;
  border: 2px solid #fd7979;
  width: 50%;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
  &.active {
    background: #fd7979;
    color: #fff;
  }
`;
export const SignUpName = styled.div`
  font-weight: 600;
  padding: 8px 16px;
  border: 2px solid #fd7979;
  width: 50%;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
  background: #fff;
  color: #fd7979;
  &.active {
    background: #fd7979;
    color: #fff;
  }
`;
export const JoinContainer = styled.div``;
export const LoginContainer = styled.div`
  padding: 1rem 0rem;
`;
export const RegisterContainer = styled.div`
  padding: 1rem 0rem;
`;
export const JoinningButton = styled.div`
  background: #fd7979;
  color: #fff;
  font-weight: 600;
  padding: 8px 16px;
  border: 2px solid #fd7979;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
`;
export const TermsandCondition = styled.div`
  color: #b5b5b5;
  font-size: 12px;
  font-weight: 400;
  span {
    font-weight: 600;
    color: #fd7979;
    cursor: pointer;
  }
`;
