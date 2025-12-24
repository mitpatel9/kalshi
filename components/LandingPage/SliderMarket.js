import {
  NBtn,
  SliderContainer,
  SliderMarketBtn,
  SliderMarketContainer,
  SliderMarketHed,
  SliderMarketHedding,
  SliderMarketHedText,
  SliderMarketLeft,
  SliderMarketMiddle,
  SliderMarketNBtn,
  SliderMarketNews,
  SliderMarketRight,
  SliderMarketScrore,
  SliderMarketSubGrp,
  SliderMarketVolume,
  SliderMarketYBtn,
} from "@/StyledComponents/LayoutStyled";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import Test from "../../asset/Image/test.jpg";
import { CommonDiv } from "@/StyledComponents/CommonStyled";
import { Icon } from "@iconify/react";
import OutcomeGraph from "../Graph/OutcomeGraph";
import { useRouter } from "next/router";

const SliderMarket = () => {
  const router = useRouter();
  const loop = [1, 2, 3, 4, 5, 6];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <SliderMarketContainer>
      <Slider {...settings}>
        {loop.length > 0 &&
          loop.map(() => (
            <SliderContainer>
              <SliderMarketLeft>
                <SliderMarketHed onClick={() => router.push("markets/12")}>
                  <CommonDiv>
                    <Image src={Test} className="image" />
                  </CommonDiv>
                  <SliderMarketHedText>
                    Top global Spotify song on Christmas Day?
                  </SliderMarketHedText>
                </SliderMarketHed>
                <SliderMarketMiddle>
                  <SliderMarketSubGrp>
                    <SliderMarketHedding>Last Christmas</SliderMarketHedding>
                    <SliderMarketScrore>52%</SliderMarketScrore>
                    <SliderMarketBtn>
                      <SliderMarketYBtn>Yes</SliderMarketYBtn>
                      <SliderMarketNBtn>No</SliderMarketNBtn>
                    </SliderMarketBtn>
                  </SliderMarketSubGrp>
                  <SliderMarketSubGrp>
                    <SliderMarketHedding>
                      All I Want for Christmas Is You
                    </SliderMarketHedding>
                    <SliderMarketScrore>52%</SliderMarketScrore>
                    <SliderMarketBtn>
                      <SliderMarketYBtn>Yes</SliderMarketYBtn>
                      <SliderMarketNBtn>No</SliderMarketNBtn>
                    </SliderMarketBtn>
                  </SliderMarketSubGrp>
                </SliderMarketMiddle>
                <SliderMarketNews>
                  <span>News - </span>
                  Mariah Carey's perennial hit 'All I Want for Christmas Is You'
                  has officially crossed 2 billion strea Mariah Carey's
                  perennial hit 'All I Want for Christmas Is You' has officially
                  crossed 2 billion strea
                </SliderMarketNews>
                <SliderMarketVolume>
                  $1,00,000{" "}
                  <Icon icon="gridicons:add-outline" className="icons" />
                </SliderMarketVolume>
              </SliderMarketLeft>
              <SliderMarketRight>
                <OutcomeGraph height={"300px"} />
              </SliderMarketRight>
            </SliderContainer>
          ))}
      </Slider>
    </SliderMarketContainer>
  );
};

export default SliderMarket;
