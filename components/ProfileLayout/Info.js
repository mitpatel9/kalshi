import {
  ComProcesBtn,
  ComProcesInputAddress,
  ComProcessInner,
  ComProcessLable,
  ComProcessSubHedText,
  ComProcesSubText,
} from "@/StyledComponents/ProfileStyled";
import React from "react";
import { Input } from "reactstrap";

const Info = (props) => {
  const handleSubmit = () => {
    props.setIsTab("address");
      props.setProgress(60);
  };
  return (
    <ComProcessInner>
      <ComProcessSubHedText>Enter your info</ComProcessSubHedText>
      <ComProcesSubText>
        As a federally-regulated financial exchange, Kalshi collects your info
        to comply with applicable laws.
      </ComProcesSubText>
      <ComProcesInputAddress>
        <ComProcessLable>Legal first name</ComProcessLable>
        <Input id="exampleDate" name="text" placeholder="" type="number" />
      </ComProcesInputAddress>
      <ComProcesInputAddress>
        <ComProcessLable>Legal last name</ComProcessLable>
        <Input id="exampleDate" name="text" placeholder="" type="number" />
      </ComProcesInputAddress>
      <ComProcesBtn onClick={() => handleSubmit()}>Continue</ComProcesBtn>
    </ComProcessInner>
  );
};

export default Info;
