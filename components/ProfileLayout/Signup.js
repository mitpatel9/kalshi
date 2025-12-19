import { TimeLineContainer } from "@/StyledComponents/MarketsStyled";
import {
  ComProcesBack,
  ComProcesBtn,
  ComProcesInput,
  ComProcesInputAddress,
  ComProcesInputFlex,
  ComProcesInputPostal,
  ComProcessContainer,
  ComProcessInner,
  ComProcessLable,
  ComProcessSubHedText,
  ComProcesSubText,
  ReviewIcons,
  TimeLineContainerSignUp,
  VerifyDocContainer,
  VerifyIconsInner,
  VerifySubText,
  VerifyText,
} from "@/StyledComponents/ProfileStyled";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Input, Progress } from "reactstrap";
import BirthDay from "./BirthDay";
import Phone from "./Phone";
import Info from "./Info";
import Address from "./Address";
import Verify from "./Verify";
import Review from "./Review";
import { Hr } from "@/StyledComponents/CommonStyled";

const Signup = (props) => {
  const [isTab, setIsTab] = useState("birth");
  const [progress, setProgress] = useState(10);
  return (
    <ComProcessContainer>
      <ComProcessInner>
        <ComProcesBack onClick={() => props.setSwitchTab("account")}>
          <Icon icon="ic:baseline-arrow-back" width={22} height={22} />
          <TimeLineContainerSignUp>
            <Progress
              value={progress}
              color="success"
              style={{ height: "3px" }}
            />
          </TimeLineContainerSignUp>
          Back
        </ComProcesBack>
     
      </ComProcessInner>

      {isTab === "birth" && <BirthDay setIsTab={setIsTab} setProgress={setProgress}/>}
      {isTab === "phone" && <Phone setIsTab={setIsTab} setProgress={setProgress}/>}
      {isTab === "info" && <Info setIsTab={setIsTab} setProgress={setProgress}/>}
      {isTab === "address" && <Address setIsTab={setIsTab} setProgress={setProgress}/>}
      {isTab === "verify" && <Verify setIsTab={setIsTab} setProgress={setProgress}/>}
      {isTab === "review" && <Review setIsTab={setIsTab} setProgress={setProgress}/>}
    </ComProcessContainer>
  );
};

export default Signup;
