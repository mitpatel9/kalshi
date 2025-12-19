import {
  ComProcesBtn,
  ComProcesInput,
  ComProcesInputFlex,
  ComProcessInner,
  ComProcessSubHedText,
  ComProcesSubText,
} from "@/StyledComponents/ProfileStyled";
import React from "react";
import { Input } from "reactstrap";

const Phone = (props) => {
  const handleSubmit = () => {
    props.setIsTab("info");
      props.setProgress(40);
  };
  return (
    <>
      <ComProcessInner>
        <ComProcessSubHedText>Enter Your phone number</ComProcessSubHedText>
        <ComProcesInput>
          <Input id="exampleDate" name="number" placeholder="" type="number" />
        </ComProcesInput>
        <ComProcesBtn>Continue</ComProcesBtn>
      </ComProcessInner>

      <ComProcessInner>
        <ComProcessSubHedText>Six digit code</ComProcessSubHedText>
        <ComProcesInputFlex>
          <Input
            id="exampleDate"
            name="number"
            placeholder=""
            type="number"
            className="inputotpDiv"
          />
          <Input
            id="exampleDate"
            name="number"
            placeholder=""
            type="number"
            className="inputotpDiv"
          />

          <Input
            id="exampleDate"
            name="number"
            placeholder=""
            type="number"
            className="inputotpDiv"
          />
          <Input
            id="exampleDate"
            name="number"
            placeholder=""
            type="number"
            className="inputotpDiv"
          />
          <Input
            id="exampleDate"
            name="number"
            placeholder=""
            type="number"
            className="inputotpDiv"
          />
          <Input
            id="exampleDate"
            name="number"
            placeholder=""
            type="number"
            className="inputotpDiv"
          />
        </ComProcesInputFlex>
        <ComProcesSubText>We've send a code to +91 9601052291</ComProcesSubText>
        <ComProcesBtn onClick={() => handleSubmit()}>Verify</ComProcesBtn>
        <ComProcesBtn>Resend Code</ComProcesBtn>
      </ComProcessInner>
    </>
  );
};

export default Phone;
