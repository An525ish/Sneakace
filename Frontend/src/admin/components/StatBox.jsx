import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="20px" p={".2rem"}>
      <Box display="flex" justifyContent="space-between">
        <Box marginTop={"6px"}>
          {icon}
          {/* <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          > */}
          <h1 style={{
            fontSize: "25px",
            fontWeight: "bold",
            color: colors.grey[100],
            marginTop:"2px"
          }}>
            {title}</h1>
          {/* </Typography> */}
        </Box>
        {/* <Box> */}
        {/* <ProgressCircle progress={progress} /> */}
        {/* </Box> */}
      </Box>
      <Box display="flex" justifyContent="space-between">
        {/*       
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}> */}
        <h2 style={{
          fontSize: "23px",
        fontWeight:"bold",
          color: colors.greenAccent[600]
        }}>{subtitle}</h2>
        {/* </Typography> */}
        {/* <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography> */}
      </Box>
    </Box>
  );
};

export default StatBox;
