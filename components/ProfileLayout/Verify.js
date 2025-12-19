import { ComProcesBtn, ComProcessInner, ComProcessSubHedText, VerifyDocContainer, VerifyIconsInner, VerifySubText, VerifyText } from '@/StyledComponents/ProfileStyled'
import { Icon } from '@iconify/react'
import React from 'react'

const Verify = (props) => {
     const handleSubmit = () => {
    props.setIsTab("review");
      props.setProgress(100);
  };
  return (
  <ComProcessInner>
        <ComProcessSubHedText>Let's get you verified</ComProcessSubHedText>
        <VerifySubText>Complete in 2 minute </VerifySubText>
        <VerifySubText className="verifyHedding">
          What you will need{" "}
        </VerifySubText>
        <VerifyDocContainer>
          <VerifyIconsInner>
            <Icon icon="teenyicons:id-outline" width={55} height={55} />
            <VerifyText>Government issued ID</VerifyText>
          </VerifyIconsInner>
          <VerifyIconsInner>
            <Icon icon="mynaui:mobile" width={55} height={55} />
            <VerifyText>Smartphone</VerifyText>
          </VerifyIconsInner>
        </VerifyDocContainer>
        <ComProcesBtn onClick={() => handleSubmit()}>Get started</ComProcesBtn>
      </ComProcessInner>
  )
}

export default Verify
