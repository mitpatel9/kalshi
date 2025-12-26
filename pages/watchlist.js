import HeaderLayout from "@/components/LandingPage/HeaderLayout";
import { Hr } from "@/StyledComponents/CommonStyled";
import {
  SiteLayout,
  WatchalistHed,
  WatchListConatainer,
  WatchListLeft,
  WatchlistLeftHedSubText,
  WatchlistLeftHedText,
  WatchListListing,
  WatchListRate,
  WatchListRight,
} from "@/StyledComponents/LayoutStyled";
import { Icon } from "@iconify/react";
import React from "react";

const watchlist = () => {
  const loop = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <SiteLayout>
      <HeaderLayout />
      <WatchListConatainer>
        <WatchalistHed>Watchlist</WatchalistHed>
        <Hr />

        <WatchListListing>
          <WatchListLeft>
            <WatchlistLeftHedText>
              Central Michigan at Northwestern
            </WatchlistLeftHedText>
            <WatchlistLeftHedSubText>Northwestern</WatchlistLeftHedSubText>
          </WatchListLeft>
          <WatchListRight>
            <WatchListRate>
              50¢{" "}
              <span>
                <Icon
                  icon="prime:sort-up-fill"
                  className="green"
                  
                />{" "}
                10%
              </span>
            </WatchListRate>
          </WatchListRight>
        </WatchListListing>
        <Hr />
        <WatchListListing>
          <WatchListLeft>
            <WatchlistLeftHedText>
              Central Michigan at Northwestern
            </WatchlistLeftHedText>
            <WatchlistLeftHedSubText>Northwestern</WatchlistLeftHedSubText>
          </WatchListLeft>
          <WatchListRight>
            <WatchListRate>
              80¢{" "}
              <span>
                <Icon
                  icon="prime:sort-down-fill"
                  className="red"
                 
                />{" "}
                8%
              </span>
            </WatchListRate>
          </WatchListRight>
        </WatchListListing>
        <Hr />
      </WatchListConatainer>
    </SiteLayout>
  );
};

export default watchlist;
