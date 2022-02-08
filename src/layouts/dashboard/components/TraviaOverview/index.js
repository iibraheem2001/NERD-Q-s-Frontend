// @mui material components
import Card from "@mui/material/Card";

// NERDQ React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function TraviaOverview() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Travia overview
        </MDTypography>
      </MDBox>
    </Card>
  );
}

export default TraviaOverview;
