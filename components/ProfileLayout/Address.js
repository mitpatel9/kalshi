import {
  ComProcesBtn,
  ComProcesInputAddress,
  ComProcesInputPostal,
  ComProcessInner,
  ComProcessLable,
  ComProcessSubHedText,
  ComProcesSubText,
} from "@/StyledComponents/ProfileStyled";
import React from "react";
import { Input } from "reactstrap";

const Address = (props) => {
  const handleSubmit = () => {
    props.setIsTab("verify");
      props.setProgress(80);
  };
  return (
    <ComProcessInner>
      <ComProcessSubHedText>Enter your address</ComProcessSubHedText>
      <ComProcesSubText>
        This address typically matches your driver's license or state ID and
        cannot be a PO box.
      </ComProcesSubText>
      <ComProcesInputAddress>
        <ComProcessLable>Country</ComProcessLable>
        <Input id="exampleDate" name="text" placeholder="" type="number" />
      </ComProcesInputAddress>
      <ComProcesInputAddress>
        <ComProcessLable>Residential address</ComProcessLable>
        <Input id="exampleDate" name="text" placeholder="" type="number" />
      </ComProcesInputAddress>
      <ComProcesInputAddress>
        <ComProcessLable>Apt, suite, other</ComProcessLable>
        <Input id="exampleDate" name="text" placeholder="" type="number" />
      </ComProcesInputAddress>
      <ComProcesInputAddress>
        <ComProcessLable>City</ComProcessLable>
        <Input id="exampleDate" name="text" placeholder="" type="number" />
      </ComProcesInputAddress>

      <ComProcesInputPostal>
        <ComProcesInputAddress>
          <ComProcessLable>State/Province/Region</ComProcessLable>
          <Input id="exampleDate" name="text" placeholder="" type="number" />
        </ComProcesInputAddress>
        <ComProcesInputAddress>
          <ComProcessLable>Postal code</ComProcessLable>
          <Input id="exampleDate" name="text" placeholder="" type="number" />
        </ComProcesInputAddress>
      </ComProcesInputPostal>

      <ComProcesBtn onClick={() => handleSubmit()}>Continue</ComProcesBtn>
    </ComProcessInner>
  );
};

export default Address;
