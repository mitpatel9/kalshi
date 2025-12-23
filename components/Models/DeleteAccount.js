import {
  ConfirmPositionHed,
  ConfirmPositionSub,
  DeleteAcButton,
  DeleteAcContainer,
  DeleteAcHedSub,
  DeleteAcHedTitle,
  DeleteAcMiddle,
  DeleteBottonText,
  MiddleLeft,
  MiddleRight,
} from "@/StyledComponents/ModalStyled";
import { Icon } from "@iconify/react";
import React from "react";
import { Modal } from "reactstrap";

const DeleteAccount = (props) => {
  return (
    <Modal isOpen={props.isDelete} toggle={props.toggleDelete}>
      <DeleteAcContainer>
        <DeleteAcHedTitle>Deactivate account</DeleteAcHedTitle>
        <DeleteAcHedSub>
          Please make sure you've met the following requirements before closing
          your account.
        </DeleteAcHedSub>
        <DeleteAcMiddle>
          <MiddleLeft className="green">
            <Icon icon="dashicons:yes-alt" width={28} height={28} />
          </MiddleLeft>
          <MiddleRight>
            <ConfirmPositionHed>Sell any position</ConfirmPositionHed>
            <ConfirmPositionSub>You have 0 positions</ConfirmPositionSub>
          </MiddleRight>
        </DeleteAcMiddle>
        <DeleteAcMiddle>
          <MiddleLeft>
            <Icon icon="dashicons:yes-alt" width={28} height={28} />
          </MiddleLeft>
          <MiddleRight>
            <ConfirmPositionHed>Cancel any resting order</ConfirmPositionHed>
            <ConfirmPositionSub>You have 0 resting orders</ConfirmPositionSub>
          </MiddleRight>
        </DeleteAcMiddle>
        <DeleteAcMiddle>
          <MiddleLeft className="red">
            <Icon icon="healthicons:no-24px" width={28} height={28} />
          </MiddleLeft>
          <MiddleRight>
            <ConfirmPositionHed>Withdraw Kalshi funds</ConfirmPositionHed>
            <ConfirmPositionSub>You have $0.00</ConfirmPositionSub>
          </MiddleRight>
        </DeleteAcMiddle>
        <DeleteAcButton>Confirm</DeleteAcButton>
        <DeleteBottonText>
          Need help? Please contact support@kalshi.com
        </DeleteBottonText>
      </DeleteAcContainer>
    </Modal>
  );
};

export default DeleteAccount;
