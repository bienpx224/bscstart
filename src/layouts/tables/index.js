

// @mui material components
import Card from "@mui/material/Card";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Data
import projectsTableData from "layouts/tables/data/projectsTableData";
import Grid from "@mui/material/Grid";
import VuiButton from "components/VuiButton";
import { CircularProgress, Divider, LinearProgress } from "@mui/material";

function Tables() {

  return (
    <DashboardLayout>
      <DashboardNavbar />

      {/* {Button} */}
      <VuiBox mb={3} pt={3}>
        <Grid container spacing={4} alignItems="center" justifyContent="center" direction="row">
          <Grid item xs={12} md={6} xl={2}>
            <VuiButton color="lightblue" size="20px" fullWidth>
              Create Launchpad
            </VuiButton>
          </Grid>
          <Grid item xs={12} md={6} xl={2}>
            <VuiButton color="dark" size="20px" fullWidth disabled>
              Create Swap
              <CircularProgress size="15px" thickness={5} />
            </VuiButton>
          </Grid>
          <Grid item xs={12} md={6} xl={2}>
            <VuiButton color="dark" disabled size="20px" fullWidth contained>
              Create Token
              <CircularProgress size="15px" thickness={5} />
            </VuiButton>

          </Grid>
          <Grid item xs={12} md={6} xl={2}>
            <VuiButton color="dark" disabled size="20px" fullWidth>
              Launchpad List
              <CircularProgress size="15px" thickness={5} />
            </VuiButton>

          </Grid>
          <Grid item xs={12} md={6} xl={2}>
            <VuiButton color="dark" disabled size="20px" fullWidth>
              Leaderboard
              <CircularProgress size="15px" thickness={5} />
            </VuiButton>
          </Grid>
        </Grid>
      </VuiBox>
      {/* {Button} */}
      <Divider light />

      <VuiBox py={3} height="100vh">
        <Card>
          <VuiBox display="flex" justifyContent="space-between" alignItems="center">
            <VuiTypography variant="lg" color="white">
              Projects List
            </VuiTypography>
          </VuiBox>
          <VuiBox
            sx={{
              "& th": {
                borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                  `${borderWidth[1]} solid ${grey[700]}`,
              },
              "& .MuiTableRow-root:not(:last-child)": {
                "& td": {
                  borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                    `${borderWidth[1]} solid ${grey[700]}`,
                },
              },
            }}
          >
            {/* <Table columns={prCols} rows={prRows} /> */}
            <VuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
              <VuiBox display="flex" margin="auto" pt="100px" height="100%" pb="150px">
                <VuiTypography fontWeight="bold" color="white" align="center">
                  BscStart - BSC Launchpad Protocol
                  <VuiBox width="400px">
                    <LinearProgress color="secondary" />
                  </VuiBox>
                  <VuiTypography color="white">
                    Cooming Soon ....
                  </VuiTypography>
                </VuiTypography>
              </VuiBox>
            </VuiBox>
          </VuiBox>
        </Card>
      </VuiBox>
    </DashboardLayout >
  );
}

export default Tables;
