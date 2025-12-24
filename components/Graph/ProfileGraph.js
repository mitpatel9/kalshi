import React from "react";
import ReactECharts from "echarts-for-react";

const ProfileGraph = () => {
  const option = {
    grid: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      containLabel: false,
    },
    xAxis: {
      type: "category",
      show: false,
      data: ["1", "2", "3", "4", "5", "6", "7"],
    },
    yAxis: {
      type: "value",
      show: false,
    },
    series: [
      {
        data: [20, 40, 30, 60, 50, 70, 60],
        type: "line",
        smooth: true,
        symbol: "none",
        lineStyle: {
          width: 0,
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: "rgba(99, 102, 241, 0.6)" },
              { offset: 1, color: "rgba(99, 102, 241, 0)" },
            ],
          },
        },
      },
    ],
  };
  return (
    <ReactECharts option={option} style={{ height: "100%", width: "100%" }} />
  );
};

export default ProfileGraph;
