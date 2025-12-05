import {
  PostChances,
  PostFistSection,
  PostImage,
  PostSecondSection,
  PostSecondSectionContainer,
  PostThirdSection,
  PostTitle,
  TradeButton,
  TradeButton2,
  TradeButtonNo,
  TradeButtonNo2,
  TradeButtonYes,
  TradeButtonYes2,
  TradeContainer,
  TradeIcone,
  TradeListing,
  TradeListingName,
  TradePrencentage,
  TradeTypes,
  TradeVolume,
} from "@/StyledComponents/LayoutStyled";
import Image from "next/image";
import React from "react";
import Test from "../../asset/Image/test.jpeg";
import { Icon } from "@iconify/react";
import { Col, Row } from "reactstrap";

const TradeList = () => {
  return (
    <TradeContainer>
      <Row>
        <Col xl={3}>
          <TradeListing>
            <PostFistSection>
              <PostImage>
                <Image
                  className="image"
                  src={Test}
                  alt="userProfile"
                  height={52}
                  width={52}
                />
                <PostTitle> Next US Presidential Election Winner?</PostTitle>
              </PostImage>
              <PostChances>34%</PostChances>
            </PostFistSection>
            <PostSecondSectionContainer>
              <PostSecondSection>
                <TradeListingName>J.D. Vance</TradeListingName>
                <TradeButton>
                  <TradeButtonYes>Yes</TradeButtonYes>
                  <TradeButtonNo>No</TradeButtonNo>
                </TradeButton>
              </PostSecondSection>
              <PostSecondSection>
                <TradeListingName>J Gavin Newsom</TradeListingName>
                <TradeButton>
                    <TradePrencentage>36%</TradePrencentage>
                  <TradeButtonYes>Yes</TradeButtonYes>
                  <TradeButtonNo>No</TradeButtonNo>
                </TradeButton>
              </PostSecondSection>
              <PostSecondSection>
                <TradeListingName>Donald J. Trump</TradeListingName>
                <TradeButton>
                  <TradeButtonYes>Yes</TradeButtonYes>
                  <TradeButtonNo>No</TradeButtonNo>
                </TradeButton>
              </PostSecondSection>
            </PostSecondSectionContainer>
            <PostThirdSection>
              <TradeVolume>$4,51,258</TradeVolume>
              <TradeTypes>Annually</TradeTypes>
              <TradeIcone>
                {" "}
                <Icon icon="fa7-solid:gift" width={16} height={16} />
                <Icon
                  icon="material-symbols:bookmarks-rounded"
                  width={16}
                  height={16}
                />
              </TradeIcone>
            </PostThirdSection>
          </TradeListing>
        </Col>
        <Col xl={3}>
          <TradeListing>
            <PostFistSection>
              <PostImage>
                {" "}
                <Image
                  className="image"
                  src={Test}
                  alt="userProfile"
                  height={52}
                  width={52}
                />
              </PostImage>
              <PostTitle>Next US Presidential Election Winner?</PostTitle>
              <PostChances>
                <div className="circle">
                  <div className="mask full yes"></div>
                  <div className="mask half no"></div>
                  <div className="center"></div>
                </div>
              </PostChances>
            </PostFistSection>
            <PostSecondSection>
              <TradeButton2>
                <TradeButtonYes2>Yes</TradeButtonYes2>
                <TradeButtonNo2>No</TradeButtonNo2>
              </TradeButton2>
            </PostSecondSection>
            <PostThirdSection>
              <TradeVolume>$4,51,258</TradeVolume>
              <TradeTypes>Annually</TradeTypes>
              <TradeIcone>
                <Icon icon="fa7-solid:gift" width={38} height={28} />
                <Icon
                  icon="material-symbols:bookmarks-rounded"
                  width={38}
                  height={28}
                />
              </TradeIcone>
            </PostThirdSection>
          </TradeListing>
        </Col>
      </Row>
    </TradeContainer>
  );
};

export default TradeList;
