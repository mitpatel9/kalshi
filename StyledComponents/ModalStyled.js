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

// deposite modal
export const DepositContainer = styled.div`
  padding: 1rem;
`;
export const DepositHedding = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const DepositSecureContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;
export const DepositIcon = styled.div``;
export const DepositIconHed = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #000;
`;
export const DepositIconSubText = styled.div`
  font-size: 10px;
  font-weight: 600;
  color: #b5b5b5;
`;
export const DepositLogo = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #fd7979;
`;
export const DepositMethodContainer = styled.div`
  border: 0.1px solid #b5b5b5;
  border-radius: 5px;
  padding: 1rem;
  margin-top: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #cccccc;
  }
`;

export const DepositMethodName = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #000;
`;
