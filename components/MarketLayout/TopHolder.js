import { Icon } from "@iconify/react";
import React from "react";
import Image from "next/image";
import Test from "../../asset/Image/test.jpg";
import {
  HolderContainer,
  HolderDataPart,
  HolderDesc,
  HolderDropDown,
  HolderHedPart,
  HolderHedShares,
  HolderHedSharesTitle,
  HolderHedTitle,
  HolderImage,
  HolderLeft,
  HolderListing,
  HolderName,
  HolderRight,
} from "@/StyledComponents/MarketsStyled";
import { Hr } from "@/StyledComponents/CommonStyled";

const TopHolder = () => {
  return (
    <HolderContainer>
      <HolderDropDown>
        Pope Frances <Icon icon="mingcute:down-fill" className="icons"/>
      </HolderDropDown>

      <HolderListing>
        <HolderLeft>
          <HolderHedPart>
            <HolderHedTitle>Yes Holders</HolderHedTitle>
            <HolderHedSharesTitle>Shares</HolderHedSharesTitle>
          </HolderHedPart>
          <Hr />
          <HolderDataPart>
            <HolderDesc>
              <HolderImage>
                {" "}
                <Image src={Test} className="image" />
              </HolderImage>
              <HolderName>Imagginne</HolderName>
            </HolderDesc>
            <HolderHedShares className="yes">1,804,095</HolderHedShares>
          </HolderDataPart>
             <Hr />
           <HolderDataPart>
            <HolderDesc>
              <HolderImage>
                {" "}
                <Image src={Test} className="image" />
              </HolderImage>
              <HolderName>Imagginne</HolderName>
            </HolderDesc>
            <HolderHedShares className="yes">1,804,095</HolderHedShares>
          </HolderDataPart>
             <Hr />
           <HolderDataPart>
            <HolderDesc>
              <HolderImage>
                {" "}
                <Image src={Test} className="image" />
              </HolderImage>
              <HolderName>Imagginne</HolderName>
            </HolderDesc>
            <HolderHedShares className="yes">1,804,095</HolderHedShares>
          </HolderDataPart>
           <Hr/>
        </HolderLeft>


        <HolderRight>
          <HolderHedPart>
            <HolderHedTitle>No Holders</HolderHedTitle>
            <HolderHedSharesTitle>Shares</HolderHedSharesTitle>
          </HolderHedPart>
          <Hr />
          <HolderDataPart>
            <HolderDesc>
              <HolderImage>
                {" "}
                <Image src={Test} className="image" />
              </HolderImage>
              <HolderName>Imagginne</HolderName>
            </HolderDesc>
            <HolderHedShares className="no">1,804,095</HolderHedShares>
          </HolderDataPart>
           <Hr/>
          <HolderDataPart>
            <HolderDesc>
              <HolderImage>
                {" "}
                <Image src={Test} className="image" />
              </HolderImage>
              <HolderName>Imagginne</HolderName>
            </HolderDesc>
            <HolderHedShares className="no">1,804,095</HolderHedShares>
          </HolderDataPart>
          <Hr />
        </HolderRight>
      </HolderListing>
    </HolderContainer>
  );
};

export default TopHolder;
