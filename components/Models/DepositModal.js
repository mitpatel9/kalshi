import { CommonDiv } from "@/StyledComponents/CommonStyled";
import {
  DepositContainer,
  DepositHedding,
  DepositIcon,
  DepositIconHed,
  DepositIconSubText,
  DepositLogo,
  DepositMethodContainer,
  DepositMethodIcon,
  DepositMethodName,
  DepositSecureContainer,
} from "@/StyledComponents/ModalStyled";
import { Icon } from "@iconify/react";
import React from "react";
import { Modal } from "reactstrap";

const DepositModal = (props) => {
  return (
    <Modal isOpen={props.isDeposit} toggle={props.toggleDeposit} size="xl">
      <DepositContainer>
        <DepositHedding>
          <DepositSecureContainer>
            <DepositIcon>
              {" "}
              <Icon icon="bxs:lock" width={28} height={28} />
            </DepositIcon>
            <CommonDiv>
              <DepositIconHed>Secure payment by</DepositIconHed>
              <DepositIconSubText>Kalsi</DepositIconSubText>
            </CommonDiv>
          </DepositSecureContainer>
          <DepositLogo>Kalsi</DepositLogo>
        </DepositHedding>
        <DepositMethodContainer>
          <Icon icon="logos:google-pay" width={38} height={38} />
          <DepositMethodName>Google Pay</DepositMethodName>
        </DepositMethodContainer>
        <DepositMethodContainer>
          <Icon icon="solar:card-bold" width={28} height={28} />

          <DepositMethodName>Debit card</DepositMethodName>
        </DepositMethodContainer>
      </DepositContainer>
    </Modal>
  );
};

export default DepositModal;
