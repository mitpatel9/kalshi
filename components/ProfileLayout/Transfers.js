import {
  TransfersButton,
  TransfersContainer,
  TransfersHedText,
  TransfersPortFolio,
  TransfersPortFolioText,
  TransfersTextDesc,
} from "@/StyledComponents/ProfileStyled";
import { Icon } from "@iconify/react";
import React from "react";

const Transfers = () => {
  return (
    <TransfersContainer>
      <TransfersHedText>Transfers</TransfersHedText>
      <TransfersPortFolio>
        <TransfersPortFolioText>
          Portfolio <span>$0.00</span>
        </TransfersPortFolioText>
        <TransfersPortFolioText>
          Cash <span>$0.00</span>
        </TransfersPortFolioText>
      </TransfersPortFolio>
      <TransfersTextDesc>
        <Icon icon="dashicons:yes" className="icons" />
        Your funds are held and accessible in a federally regulated
        clearinghouse.{" "}
        <Icon icon="zondicons:exclamation-outline" className="iconsSec" />
      </TransfersTextDesc>
      <TransfersTextDesc>
        <Icon icon="dashicons:yes" className="icons" />
        Kalshi is currently accepting deposits in USDC on Solana, Ethereum,
        Base, Arbitrum, and Optimism. You may need to bridge or swap funds to a
        compatible chain + USDC before depositing.
        
      </TransfersTextDesc>
      <TransfersButton>
        <Icon icon="uil:down-arrow" className="icons" />
        Deposit to Kalshi
      </TransfersButton>
    </TransfersContainer>
  );
};

export default Transfers;
