import {
  ComProcesBack,
  ComProcesBtn,
  ComProcesInput,
  ComProcesInputAddress,
  ComProcesInputFlex,
  ComProcesInputPostal,
  ComProcessContainer,
  ComProcessHedText,
  ComProcessInner,
  ComProcessLable,
  ComProcessSubHedText,
  ComProcesSubText,
  ReviewIcons,
  VerifyDocContainer,
  VerifyIconsInner,
  VerifySubText,
  VerifyText,
} from "@/StyledComponents/ProfileStyled";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import OTPInput from "react-otp-input";
import { Input } from "reactstrap";

const Signup = () => {
  const [otp, setOtp] = useState("");
  return (
    <ComProcessContainer>
      <ComProcessInner>
        <ComProcesBack>
          <Icon
            icon="ic:baseline-arrow-back"
            width={16}
            height={16}
          />
          {"  "}Back
        </ComProcesBack>
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
        <ComProcesBtn>Continue</ComProcesBtn>
      </ComProcessInner>

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
        <ComProcesBtn>Verify</ComProcesBtn>
        <ComProcesBtn>Resend Code</ComProcesBtn>
      </ComProcessInner>

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
        <ComProcesBtn>Continue</ComProcesBtn>
      </ComProcessInner>

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

        <ComProcesBtn>Continue</ComProcesBtn>
      </ComProcessInner>

      <ComProcessInner>
        <ReviewIcons>
          <Icon icon="material-symbols:history-edu" width={24} height={24} />
        </ReviewIcons>
        <ComProcessSubHedText>Application submitted</ComProcessSubHedText>
        <ComProcesSubText>
          We will review your application shortly. If it has been more than 24
          hours since you have submitted, please reach out to support@kalshi.com
        </ComProcesSubText>
        <ComProcesBtn>Expolre More</ComProcesBtn>
      </ComProcessInner>

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
        <ComProcesBtn>Get started</ComProcesBtn>
      </ComProcessInner>
    </ComProcessContainer>
  );
};

export default Signup;
