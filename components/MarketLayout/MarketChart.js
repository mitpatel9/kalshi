import React from "react";
import ReactECharts from "echarts-for-react";

const MarketChart = () => {
    const option = {
    backgroundColor: "#ffffff",

    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "line",
        lineStyle: {
          color: "#ccc",
          type: "doted"
        }
      },
      formatter: (params) => {
        return params
          .map(
            (p) =>
              `<div>
                <span style="color:${p.color}">●</span>
                ${p.seriesName}: <b>${p.value}%</b>
              </div>`
          )
          .join("");
      }
    },

    legend: {
      top: 10,
      left: 0,
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        fontSize: 12
      }
    },

    grid: {
      left: "3%",
      right: "3%",
      bottom: "8%",
      top: "15%",
      containLabel: false
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["jan","Feb","Mar","Apr","June","July","Aug","Sep","Oct", "Nov", "Dec"],
      axisLine: { lineStyle: { color: "#ddd" } },
      axisTick: { show: false }
    },

    yAxis: {
      type: "value",
      min: 0,
      max: 100,
      axisLabel: {
        formatter: "{value}%",
        color: "#666"
      },
      splitLine: {
        lineStyle: {
          color: "#eee"
        }
      }
    },

    dataZoom: [
      {
        type: "inside"
      }
    ],

    series: [
      {
        name: "No change",
        type: "line",
        smooth: true,
        data: [6, 60, 78,56, 60, 78,56, 60, 78,56, 60, 78,56, 60, 78,56, 60, 78,56, 60, 78,56, 60, 78],
        symbol: "none",
        lineStyle: {
          width: 1,
          color: "#6aa9ff"
        }
      },
      {
        name: "25 bps decrease",
        type: "line",
        smooth: true,
        data: [36, 30, 20,0.9, 1, 0.5,56],
        symbol: "none",
        lineStyle: {
          width: 1,
          color: "#2f6bff"
        }
      },
      {
        name: "50+ bps decrease",
        type: "line",
        smooth: true,
        data: [0.9, 1, 0.5,56,7.5, 6, 2,0.9, 1, 0.5,56],
        symbol: "none",
        lineStyle: {
          width: 1,
          color: "#f5b400"
        }
      },
      {
        name: "25+ bps increase",
        type: "line",
        smooth: true,
        data: [0.9, 1, 0.5,56, 60, 78,56, 60, 78],
        symbol: "none",
        lineStyle: {
          width: 1,
          color: "#1e40ff"
        }
      }
    ]
  };
  return (
    <ReactECharts option={option} style={{ height: "300px", width: "100%" }} />
  );
};

export default MarketChart;
