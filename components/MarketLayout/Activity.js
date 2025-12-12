import {
  ActivityConatainer,
  ActivityDesc,
  ActivityImage,
  ActivityLeft,
  ActivityRight,
  ActivityTractions,
  ActivityUserName,
} from "@/StyledComponents/MarketsStyled";
import React from "react";
import Image from "next/image";
import Test from "../../asset/Image/test.jpg";
import { Hr } from "@/StyledComponents/CommonStyled";

const Activity = () => {
  return (
    <>
      <ActivityConatainer>
        <ActivityLeft>
          <ActivityImage>
            <Image src={Test} className="image" />
          </ActivityImage>
          <ActivityDesc>
            <ActivityUserName>meiyoua</ActivityUserName>
            <ActivityTractions>
              <span className="yes">Bought Yes</span> · Detroit{" "}
              <span className="contracts ">100 contracts at (4¢)</span>
            </ActivityTractions>
          </ActivityDesc>
        </ActivityLeft>
        <ActivityRight>Now</ActivityRight>
      </ActivityConatainer>
      <Hr />
      <ActivityConatainer>
        <ActivityLeft>
          <ActivityImage>
            <Image src={Test} className="image" />
          </ActivityImage>
          <ActivityDesc>
            <ActivityUserName>meiyoua</ActivityUserName>
            <ActivityTractions>
              <span className="no">Sell No</span> · Detroit{" "}
              <span className="contracts ">100 contracts at (4¢)</span>
            </ActivityTractions>
          </ActivityDesc>
        </ActivityLeft>
        <ActivityRight>Now</ActivityRight>
      </ActivityConatainer>
      <Hr />
    </>
  );
};

export default Activity;
