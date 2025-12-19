import { ComProcesBtn, ComProcesInputFlex, ComProcessInner, ComProcessSubHedText, ComProcesSubText } from '@/StyledComponents/ProfileStyled'
import { Icon } from '@iconify/react'
import React from 'react'
import { Input } from 'reactstrap'

const BirthDay = (props) => {
    const handleSubmit = () => {
    props.setIsTab("phone");
    props.setProgress(20);
  };
  return (
    <ComProcessInner>
        <ComProcessSubHedText>Enter Your birthday</ComProcessSubHedText>
        <ComProcesInputFlex>
          <Input
            id="exampleDate"
            name="Day"
            placeholder="Day"
            className="inputDiv"
            type="number"
          />
          <Input
            id="exampleDate"
            name="Month"
            placeholder="Month"
            type="number"
            className="inputDiv"
          />
          <Input
            id="exampleDate"
            name="Year"
            placeholder="Year"
            type="number"
          />
        </ComProcesInputFlex>
        <ComProcesSubText>
          You must be 18 years or older to open an account.{" "}
          <Icon icon="zondicons:exclamation-outline" className="icons" />
        </ComProcesSubText>
        <ComProcesBtn onClick={() => handleSubmit()}>Continue</ComProcesBtn>
      </ComProcessInner>
  )
}

export default BirthDay
