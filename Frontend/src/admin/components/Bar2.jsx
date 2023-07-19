import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { mockBarData2 as data } from "../data/mockData";

const Bar2 = ({ isDashboard = false }) => {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveBar
      data={data}
      theme={{
        // added
        axis: {
          domain: {
            line: {
              stroke: "black",
            },
          },
          legend: {
            text: {
              fill: "black",
            },
          },
          ticks: {
            line: {
              stroke: "black",
              strokeWidth: 1,
            },
            text: {
              fill: "black",
            },
          },
        },
        legends: {
          text: {
            fill: "black",
          },
        },
      }}
      keys={["revenue"]}
      indexBy="Category"
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "dark2" }}
      
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "black",
          color: "black",
          size: 5,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "black",
          rotation: -45,
          lineWidth: 9,
          spacing: 10,
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", "2"]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? "Category revenue(in thousand)" : "revenue1 ", // changed
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Rupees", // changed
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enableLabel={true}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "revenueColor",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.75,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in Month: " + e.indexValue;
      }}
    />
  );
};

export default Bar2;
