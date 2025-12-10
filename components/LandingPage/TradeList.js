import {
  NBtn,
  TradeBtn,
  TradeChanceChart,
  TradeContainer,
  TradeFooter,
  TradeHeader,
  TradeHeaderText,
  TradeIcon,
  TradeImage,
  TradeMiddle,
  TradeSecHeding,
  TradeSubGrp,
  TradeTypes,
  TradeVolume,
  YBtn,
} from "@/StyledComponents/LayoutStyled";
import Image from "next/image";
import React from "react";
import Test from "../../asset/Image/test.jpeg";
import { Icon } from "@iconify/react";
import { Col, Row } from "reactstrap";
import { CommonDiv } from "@/StyledComponents/CommonStyled";

const TradeList = () => {
  return (
    <Row>
      <Col xl={3}>
        <TradeContainer>
          {/* First part of trades post */}
          <TradeHeader>
            <TradeImage>
              <Image src={Test} className="image" />
              <TradeHeaderText>
                Who will be elected President of Honduras?
              </TradeHeaderText>
            </TradeImage>
            <TradeChanceChart></TradeChanceChart>
          </TradeHeader>
          {/* Middle part of trades post */}
          <TradeMiddle>
            <TradeSubGrp>
              <TradeSecHeding>J D vance</TradeSecHeding>
              <TradeBtn>
                <YBtn>Yes</YBtn>
                <NBtn>No</NBtn>
              </TradeBtn>
            </TradeSubGrp>
            <TradeSubGrp>
              <TradeSecHeding>J D vance</TradeSecHeding>
              <TradeBtn>
                <YBtn>Yes</YBtn>
                <NBtn>No</NBtn>
              </TradeBtn>
            </TradeSubGrp>
            <TradeSubGrp>
              <TradeSecHeding>J D vance</TradeSecHeding>
              <TradeBtn>
                <YBtn>Yes</YBtn>
                <NBtn>No</NBtn>
              </TradeBtn>
            </TradeSubGrp>
            <TradeSubGrp>
              <TradeSecHeding>J D vance</TradeSecHeding>
              <TradeBtn>
                <YBtn>Yes</YBtn>
                <NBtn>No</NBtn>
              </TradeBtn>
            </TradeSubGrp>
          </TradeMiddle>
          {/* Third part of trades post */}
          <TradeFooter>
            <TradeVolume>$ 4,52,356</TradeVolume>
            <TradeTypes>
              {" "}
              <Icon icon="octicon:sync-16" className="icons" />
              Annually
            </TradeTypes>
            <TradeIcon>
              <Icon icon="fa7-solid:gift" className="icons" />
              <Icon
                icon="material-symbols:bookmarks-rounded"
                className="icons"
              />
            </TradeIcon>
          </TradeFooter>
        </TradeContainer>
      </Col>
      <Col xl={3}>
        <TradeContainer>
          {/* First part of trades post */}
          <TradeHeader>
            <TradeImage>
              <Image src={Test} className="image" />
              <TradeHeaderText>
                Who will be elected President of Honduras?
              </TradeHeaderText>
            </TradeImage>
            <TradeChanceChart  >
             
            </TradeChanceChart>
          </TradeHeader>
          {/* Middle part of trades post */}
          <TradeMiddle>
            <TradeSubGrp>
              <TradeSecHeding>J D vance</TradeSecHeding>
              <TradeBtn>
                <YBtn>Yes</YBtn>
                <NBtn>No</NBtn>
              </TradeBtn>
            </TradeSubGrp>
            <TradeSubGrp>
              <TradeSecHeding>J D vance</TradeSecHeding>
              <TradeBtn>
                <YBtn>Yes</YBtn>
                <NBtn>No</NBtn>
              </TradeBtn>
            </TradeSubGrp>
            <TradeSubGrp>
              <TradeSecHeding>J D vance</TradeSecHeding>
              <TradeBtn>
                <YBtn>Yes</YBtn>
                <NBtn>No</NBtn>
              </TradeBtn>
            </TradeSubGrp>
            <TradeSubGrp>
              <TradeSecHeding>J D vance</TradeSecHeding>
              <TradeBtn>
                <YBtn>Yes</YBtn>
                <NBtn>No</NBtn>
              </TradeBtn>
            </TradeSubGrp>
          </TradeMiddle>
          {/* Third part of trades post */}
          <TradeFooter>
            <TradeVolume>$ 4,52,356</TradeVolume>
            <TradeTypes>
              {" "}
              <Icon icon="octicon:sync-16" className="icons" />
              Annually
            </TradeTypes>
            <TradeIcon>
              <Icon icon="fa7-solid:gift" className="icons" />
              <Icon
                icon="material-symbols:bookmarks-rounded"
                className="icons"
              />
            </TradeIcon>
          </TradeFooter>
        </TradeContainer>
      </Col>
       <Col xl={3}>
        <TradeContainer>
          {/* First part of trades post */}
          <TradeHeader>
            <TradeImage>
              <Image src={Test} className="image" />
              <TradeHeaderText>
                Who will be elected President of Honduras?
              </TradeHeaderText>
            </TradeImage>
            <TradeChanceChart  >
             
            </TradeChanceChart>
          </TradeHeader>
          {/* Middle part of trades post */}
          <TradeMiddle>
            <TradeSubGrp>
              <TradeSecHeding>J D vance</TradeSecHeding>
              <TradeBtn>
                <YBtn>Yes</YBtn>
                <NBtn>No</NBtn>
              </TradeBtn>
            </TradeSubGrp>
            <TradeSubGrp>
              <TradeSecHeding>J D vance</TradeSecHeding>
              <TradeBtn>
                <YBtn>Yes</YBtn>
                <NBtn>No</NBtn>
              </TradeBtn>
            </TradeSubGrp>
            <TradeSubGrp>
              <TradeSecHeding>J D vance</TradeSecHeding>
              <TradeBtn>
                <YBtn>Yes</YBtn>
                <NBtn>No</NBtn>
              </TradeBtn>
            </TradeSubGrp>
            <TradeSubGrp>
              <TradeSecHeding>J D vance</TradeSecHeding>
              <TradeBtn>
                <YBtn>Yes</YBtn>
                <NBtn>No</NBtn>
              </TradeBtn>
            </TradeSubGrp>
          </TradeMiddle>
          {/* Third part of trades post */}
          <TradeFooter>
            <TradeVolume>$ 4,52,356</TradeVolume>
            <TradeTypes>
              {" "}
              <Icon icon="octicon:sync-16" className="icons" />
              Annually
            </TradeTypes>
            <TradeIcon>
              <Icon icon="fa7-solid:gift" className="icons" />
              <Icon
                icon="material-symbols:bookmarks-rounded"
                className="icons"
              />
            </TradeIcon>
          </TradeFooter>
        </TradeContainer>
      </Col>
       <Col xl={3}>
        <TradeContainer>
          {/* First part of trades post */}
          <TradeHeader>
            <TradeImage>
              <Image src={Test} className="image" />
              <TradeHeaderText>
                Who will be elected President of Honduras?
              </TradeHeaderText>
            </TradeImage>
            <TradeChanceChart  >
             
            </TradeChanceChart>
          </TradeHeader>
          {/* Middle part of trades post */}
          <TradeMiddle>
            <TradeSubGrp>
              <TradeSecHeding>J D vance</TradeSecHeding>
              <TradeBtn>
                <YBtn>Yes</YBtn>
                <NBtn>No</NBtn>
              </TradeBtn>
            </TradeSubGrp>
            <TradeSubGrp>
              <TradeSecHeding>J D vance</TradeSecHeding>
              <TradeBtn>
                <YBtn>Yes</YBtn>
                <NBtn>No</NBtn>
              </TradeBtn>
            </TradeSubGrp>
            <TradeSubGrp>
              <TradeSecHeding>J D vance</TradeSecHeding>
              <TradeBtn>
                <YBtn>Yes</YBtn>
                <NBtn>No</NBtn>
              </TradeBtn>
            </TradeSubGrp>
            <TradeSubGrp>
              <TradeSecHeding>J D vance</TradeSecHeding>
              <TradeBtn>
                <YBtn>Yes</YBtn>
                <NBtn>No</NBtn>
              </TradeBtn>
            </TradeSubGrp>
          </TradeMiddle>
          {/* Third part of trades post */}
          <TradeFooter>
            <TradeVolume>$ 4,52,356</TradeVolume>
            <TradeTypes>
              {" "}
              <Icon icon="octicon:sync-16" className="icons" />
              Annually
            </TradeTypes>
            <TradeIcon>
              <Icon icon="fa7-solid:gift" className="icons" />
              <Icon
                icon="material-symbols:bookmarks-rounded"
                className="icons"
              />
            </TradeIcon>
          </TradeFooter>
        </TradeContainer>
      </Col>
    </Row>
  );
};

export default TradeList;
