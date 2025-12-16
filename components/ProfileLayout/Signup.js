import {
  ComProcesBtn,
  ComProcesInput,
  ComProcessContainer,
  ComProcessHedText,
  ComProcessLable,
  ComProcessSubHedText,
  ComProcesSubText,
} from "@/StyledComponents/ProfileStyled";
import React from "react";
import { Input } from "reactstrap";

const Signup = () => {
  return (
    <ComProcessContainer>
      <ComProcessSubHedText>Enter Your birthday</ComProcessSubHedText>
      <ComProcesInput>
        <Input
          id="exampleDate"
          name="date"
          placeholder="date placeholder"
          type="date"
        />
      </ComProcesInput>
      <ComProcesSubText>
        You must be 18 years or older to open an account.
      </ComProcesSubText>
      <ComProcessSubHedText>Enter Your phone number</ComProcessSubHedText>
      <ComProcesInput>
        <Input id="exampleDate" name="number" placeholder="" type="number" />
      </ComProcesInput>
      <ComProcessSubHedText>Four digit code</ComProcessSubHedText>
      <ComProcesInput>
        <Input id="exampleDate" name="number" placeholder="" type="number" />
        <Input id="exampleDate" name="number" placeholder="" type="number" />
        <Input id="exampleDate" name="number" placeholder="" type="number" />
        <Input id="exampleDate" name="number" placeholder="" type="number" />
      </ComProcesInput>
      <ComProcesBtn>Verify</ComProcesBtn>
      <ComProcesBtn>Resend Code</ComProcesBtn>
      <ComProcesSubText>We've send a code to +91 9601052291</ComProcesSubText>
      <ComProcessSubHedText>Enter your info</ComProcessSubHedText>
      <ComProcesSubText>
        As a federally-regulated financial exchange, Kalshi collects your info
        to comply with applicable laws.
      </ComProcesSubText>
       <ComProcesInput>
        <ComProcessLable>Legal first name</ComProcessLable>
        <Input id="exampleDate" name="number" placeholder="" type="number" />
      
      </ComProcesInput>
         <ComProcesInput>
                 <ComProcessLable>Legal last name</ComProcessLable>
        <Input id="exampleDate" name="number" placeholder="" type="number" />
      
      </ComProcesInput>
      <ComProcessSubHedText>Enter your address</ComProcessSubHedText>
      <ComProcesSubText>
        This address typically matches your driver's license or state ID and
        cannot be a PO box.
      </ComProcesSubText>
      <ComProcessSubHedText>Application submitted</ComProcessSubHedText>
      <ComProcesSubText>
        We will review your application shortly. If it has been more than 24
        hours since you have submitted, please reach out to support@kalshi.com
      </ComProcesSubText>
    </ComProcessContainer>
  );
};

export default Signup;
