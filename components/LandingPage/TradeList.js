import {
  BackgroundArc,
  NBtn,
  PercentageText,
  ProgressArc,
  ProgressContainer,
  StatusText,
  Svg,
  TimeLineChance,
  TradeBtn,
  TradeChanceChart,
  TradeContainer,
  TradeFooter,
  TradeHeader,
  TradeHeaderText,
  TradeIcon,
  TradeImage,
  TradeMiddle,
  TradeMiddleOne,
  TradeMiddleTwo,
  TradeSecHeding,
  TradeSubGrp,
  TradeTypes,
  TradeVolume,
  YBtn,
  Ycontainer,
  YText,
} from "@/StyledComponents/LayoutStyled";
import Image from "next/image";
import React from "react";
import Test from "../../asset/Image/test.jpg";
import { Icon } from "@iconify/react";
import { Col, Row } from "reactstrap";
import { useRouter } from "next/router";
import { CommonDiv } from "@/StyledComponents/CommonStyled";

const TradeList = () => {
  const router = useRouter();
  const loopData = [1, 2, 3, 4];
  return (
    <Row>
      {loopData.length > 0 &&
        loopData.map(() => (
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <TradeContainer>
              {/* First part of trades post */}
              <TradeHeader onClick={() => router.push("markets/12")}>
                <TradeImage>
                  <Image src={Test} className="image" />
                  <TradeHeaderText>
                    Who will be elected President of Honduras?
                  </TradeHeaderText>
                </TradeImage>
                <TradeChanceChart>
                  <ProgressContainer>
                    <Svg viewBox="0 0 100 50">
                      <BackgroundArc d="M10 40 A40 40 0 0 1 90 40" />
                      <ProgressArc percent={60} d="M10 40 A40 40 0 0 1 90 40" />
                    </Svg>
                    <PercentageText>
                      {"<"}
                      {60}%
                    </PercentageText>
                    <StatusText>Chance</StatusText>
                  </ProgressContainer>
                </TradeChanceChart>
              </TradeHeader>
              {/* Middle part of trades post */}
              <TradeMiddleOne>
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
              </TradeMiddleOne>
              {/* <TradeMiddleTwo>
                <TradeBtn>
                    <YBtn>Yes</YBtn>
                    <NBtn>No</NBtn>
                  </TradeBtn>
              </TradeMiddleTwo> */}

              {/* Third part of trades post */}
              <TradeFooter>
                <TradeVolume>$ 4,52,356 Vol.</TradeVolume>
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
        ))}
      {loopData.length > 0 &&
        loopData.map(() => (
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <TradeContainer>
              {/* First part of trades post */}
              <TradeHeader onClick={() => router.push("markets/12")}>
                <TradeImage>
                  <Image src={Test} className="image" />
                  <TradeHeaderText>
                    Who will be elected President of Honduras?
                  </TradeHeaderText>
                </TradeImage>
                <TradeChanceChart>
                  <ProgressContainer>
                    <Svg viewBox="0 0 100 50">
                      <BackgroundArc d="M10 40 A40 40 0 0 1 90 40" />
                      <ProgressArc percent={60} d="M10 40 A40 40 0 0 1 90 40" />
                    </Svg>
                    <PercentageText>{60}%</PercentageText>
                    <StatusText>Chance</StatusText>
                  </ProgressContainer>
                </TradeChanceChart>
              </TradeHeader>
              {/* Middle part of trades post */}

              <TradeMiddleTwo>
                <TradeBtn>
                  <Ycontainer>
                    <YBtn>Yes</YBtn>
                    <YText>
                      $100 → <span>$1,045</span>
                    </YText>
                  </Ycontainer>
                  <Ycontainer>
                    <NBtn>No</NBtn>
                    <YText>
                      $100 → <span>$1,045</span>
                    </YText>
                  </Ycontainer>
                </TradeBtn>
              </TradeMiddleTwo>

              {/* Third part of trades post */}
              <TradeFooter>
                <TradeVolume>$ 4,52,356 Vol.</TradeVolume>
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
        ))}
    </Row>
  );
};

export default TradeList;
