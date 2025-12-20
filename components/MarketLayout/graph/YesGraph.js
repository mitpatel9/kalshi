import {
  GraphDataChartBottom,
  GraphDataChartCenter,
  GraphDataChartTop,
  GraphNoContainer,
  GraphTitlePrice,
  GraphTitleShare,
  GraphTitleTotal,
  GraphTitleYes,
  GrapTopTooltip,
  HrGraph,
  LiquidityChart,
} from "@/StyledComponents/MarketsStyled";
import React from "react";

const YesGraph = () => {
  const loopData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return (
    <>
      {/* graph data section */}
      <LiquidityChart>
        <GraphNoContainer>
          {loopData.length > 0 &&
            loopData.map((item) => (
              <GraphDataChartTop>
                <GraphTitleYes></GraphTitleYes>
                <GraphTitlePrice className="no">48¢</GraphTitlePrice>
                <GraphTitleShare>563</GraphTitleShare>
                <GraphTitleTotal>$45638</GraphTitleTotal>
                {/* <span className="nobids">No bids</span> */}
              </GraphDataChartTop>
            ))}
          <GrapTopTooltip className="no">Asks</GrapTopTooltip>
        </GraphNoContainer>
        <HrGraph />
        <GraphDataChartCenter>
          <span className="yes">Trade Yes</span> Last 74¢
        </GraphDataChartCenter>{" "}
        <HrGraph />
        <GraphNoContainer>
          {loopData.length > 0 &&
            loopData.map((item) => (
              <GraphDataChartBottom>
                <GraphTitleYes></GraphTitleYes>
                <GraphTitlePrice className="yes">48¢</GraphTitlePrice>
                <GraphTitleShare>563</GraphTitleShare>
                <GraphTitleTotal>$45638</GraphTitleTotal>
              </GraphDataChartBottom>
            ))}
          <GrapTopTooltip className="yes">Bids</GrapTopTooltip>
        </GraphNoContainer>
      </LiquidityChart>
    </>
  );
};

export default YesGraph;
