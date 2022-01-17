
// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import { Card, Divider, LinearProgress, Stack } from "@mui/material";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import linearGradient from "assets/theme/functions/linearGradient";

// Vision UI Dashboard React base styles
import colors from "assets/theme/base/colors";

// React icons
import { IoIosRocket } from "react-icons/io";
import { IoGlobe } from "react-icons/io5";
import { IoWallet } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

// Data
import LineChart from "examples/Charts/LineCharts/LineChart";
import BarChart from "examples/Charts/BarCharts/BarChart";
import { lineChartDataDashboard } from "layouts/dashboard/data/lineChartData";
import { lineChartOptionsDashboard } from "layouts/dashboard/data/lineChartOptions";
import { barChartDataDashboard } from "layouts/dashboard/data/barChartData";
import { barChartOptionsDashboard } from "layouts/dashboard/data/barChartOptions";
import VuiButton from "components/VuiButton";



function Dashboard() {
  const { gradients } = colors;
  const { cardContent } = gradients;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        {/* {Infomation Bar} */}
        <VuiBox mb={6}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "BNB Price", fontWeight: "regular" }}
                count="$630"
                percentage={{ color: "success", text: "+15%" }}
                icon={{ color: "secondary", component: <IoWallet size="22px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "BSC Token Price" }}
                count="$0,151"
                percentage={{ color: "success", text: "+3%" }}
                icon={{ color: "info", component: <IoGlobe size="22px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Total Liquidity Raised" }}
                count="$103,4M"
                percentage={{ color: "success", text: "+5%" }}
                icon={{ color: "info", component: <IoWallet size="20px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Total Projects" }}
                count="512"
                percentage={{ color: "success", text: "+104" }}
                icon={{ color: "info", component: <IoDocumentText size="20px" color="white" /> }}
              />
            </Grid>
          </Grid>
        </VuiBox>
        {/* {Infomation Bar} */}

        {/* {Hero Infomation} */}
        <VuiBox>
          <VuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
            <VuiBox display="flex" margin="auto" pt="70px" height="100%" pb="10px">
              <VuiTypography fontWeight="bold" color="white" align="center">
                BscStart - BSC Launchpad Protocol
                <VuiTypography color="white">
                  <Divider light />
                </VuiTypography>
                <VuiTypography color="white">
                  Create tokens and token sales in few seconds!
                  <br /> Tokens created will be verified and published on BscScan.
                </VuiTypography>
              </VuiTypography>
            </VuiBox>
          </VuiBox>
          <VuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
            <VuiBox display="flex" margin="auto" height="100%">
              <VuiBox width="18rem">
                <VuiButton
                  size="large"
                  color="light"
                  variant="contained"
                  fullWidth
                >
                  CREATE LAUNCHPAD
                </VuiButton>
              </VuiBox>
              <VuiButton
                variant="text"
                size="small"
              >
              </VuiButton>
              <VuiBox width="18rem">
                <VuiButton
                  size="large"
                  color="dark"
                  variant="contained"
                  fullWidth
                >
                  BscStart Sell
                </VuiButton>
              </VuiBox>
            </VuiBox>
          </VuiBox>
        </VuiBox>
        {/* {Hero Infomation} */}
        <Divider light />
        {/* {Project Active} */}
        <VuiBox mb={3} mt={30}>
          <Grid container spacing="18px">
            <Grid item xs={12} lg={12} xl={12}>
              <Card>
                <VuiBox>
                  <VuiBox
                    mb="24px"
                    height="350px"
                    sx={{
                      background: linearGradient(
                        cardContent.main,
                        cardContent.state,
                        cardContent.deg
                      ),
                      borderRadius: "20px",
                    }}
                  >
                    <BarChart
                      barChartData={barChartDataDashboard}
                      barChartOptions={barChartOptionsDashboard}
                    />
                  </VuiBox>
                  <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    Active Project
                  </VuiTypography>
                  <VuiBox display="flex" alignItems="center" mb="40px">
                    <VuiTypography variant="button" color="success" fontWeight="bold">
                      (+23){" "}
                      <VuiTypography variant="button" color="text" fontWeight="regular">
                        than last month
                      </VuiTypography>
                    </VuiTypography>
                  </VuiBox>
                  <Grid container spacing="50px">
                    <Grid item xs={6} md={4} lg={4}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <VuiBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <IoWallet color="#fff" size="12px" />
                        </VuiBox>
                        <VuiTypography color="text" variant="button" fontWeight="medium">
                          Participants
                        </VuiTypography>
                      </Stack>
                      <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        32,984
                      </VuiTypography>
                      <VuiProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
                    </Grid>
                    <Grid item xs={6} md={4} lg={4}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <VuiBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <IoIosRocket color="#fff" size="12px" />
                        </VuiBox>
                        <VuiTypography color="text" variant="button" fontWeight="medium">
                          Trafic
                        </VuiTypography>
                      </Stack>
                      <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        2,42M
                      </VuiTypography>
                      <VuiProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
                    </Grid>
                    <Grid item xs={6} md={4} lg={4}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <VuiBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <FaShoppingCart color="#fff" size="12px" />
                        </VuiBox>
                        <VuiTypography color="text" variant="button" fontWeight="medium">
                          Projects
                        </VuiTypography>
                      </Stack>
                      <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        2,400
                      </VuiTypography>
                      <VuiProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
                    </Grid>
                  </Grid>
                </VuiBox>
              </Card>
              {/* {Project Active} */}
              <Divider light />
              {/* {BscStart Price Chart} */}
              <Grid item xs={12} lg={12} xl={12} pt={15}>
                <Card>
                  <VuiBox sx={{ height: "100%" }}>
                    <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                      BscStart Price
                    </VuiTypography>
                    <VuiBox display="flex" alignItems="center" mb="40px">
                      <VuiTypography variant="button" color="success" fontWeight="bold">
                        +24,3% more{" "}
                        <VuiTypography variant="button" color="text" fontWeight="regular">
                          in 2022
                        </VuiTypography>
                      </VuiTypography>
                    </VuiBox>
                    <VuiBox sx={{ height: "310px" }}>
                      <LineChart
                        lineChartData={lineChartDataDashboard}
                        lineChartOptions={lineChartOptionsDashboard}
                      />
                    </VuiBox>
                  </VuiBox>
                </Card>
              </Grid>
              {/* {BscStart Price Chart} */}

            </Grid>
          </Grid>
        </VuiBox>
        <VuiBox mb={3}>
          <Grid container spacing={3}>

          </Grid>
        </VuiBox>
        <Grid container spacing={3} direction="row" justifyContent="center" alignItems="stretch">
        </Grid>
      </VuiBox>
      <Footer />
    </DashboardLayout >
  );
}

export default Dashboard;
