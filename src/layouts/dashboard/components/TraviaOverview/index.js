// @mui material components
import Card from "@mui/material/Card";

// NERD Q's React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import ComboBox from "./AutoComplete/ButtonGroup";
import Trivia from "../../../../Trivia";

function TraviaOverview() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Travia overview
        </MDTypography>
        <MDTypography variant="h6" fontWeight="medium">
          Click to start session.
        </MDTypography>
        <MDBox p={2}>
          <ComboBox />
          <Trivia />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default TraviaOverview;
