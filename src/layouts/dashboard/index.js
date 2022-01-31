
// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import { Card, CircularProgress, Divider, LinearProgress, Stack } from "@mui/material";
import TokenEconomic from '../../assets/images/tokeneconomic.png'

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import linearGradient from "assets/theme/functions/linearGradient";

// Vision UI Dashboard React base styles
import colors from "assets/theme/base/colors";

// React icons
import { IoIosRocket } from "react-icons/io";
import { IoWallet } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

// Data
import LineChart from "examples/Charts/LineCharts/LineChart";
import BarChart from "examples/Charts/BarCharts/BarChart";
import { lineChartDataDashboard } from "layouts/dashboard/data/lineChartData";
import { lineChartOptionsDashboard } from "layouts/dashboard/data/lineChartOptions";
import { barChartDataDashboard } from "layouts/dashboard/data/barChartData";
import { barChartOptionsDashboard } from "layouts/dashboard/data/barChartOptions";
import VuiButton from "components/VuiButton";
import { useWeb3 } from 'providers'
import { useEffect, useRef, useState } from "react";



function Dashboard() {
  const { gradients } = colors;
  const { cardContent } = gradients;
  const { connect } = useWeb3();

  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('Feb 05, 2022 08:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;


      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // stop our time
        clearInterval(interval.current)
      } else {
        // update time
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }

    }, 1000);
  }

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    }
  });


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        {/* {Infomation Bar} */}
        <VuiBox mt={2} mb={4}>
          <VuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
            <VuiBox display="flex" margin="auto" pt="0" height="100%" pb="10px">
              <VuiTypography fontWeight="extrabold" color="white" align="center">
                <VuiTypography
                  fontWeight="bold"
                  color="info"
                  variant="h1"
                >
                  Private Sale
                </VuiTypography>
                <VuiTypography
                  fontWeight="medium"
                  color="white"
                  variant="h4"
                >
                  is coming...
                </VuiTypography>

              </VuiTypography>
            </VuiBox>
          </VuiBox>
          <Grid container spacing={4} alignItems="center" justifyContent="center" direction="row">
            <Grid item xs={2} md={2} xl={2} alignItems="center" justifyContent="center">
              <VuiButton color="warning" size="20px" fullWidth>
                <VuiTypography color="secondary" variant="h7">
                  {timerDays}{' '}
                  Days
                </VuiTypography>
              </VuiButton>
            </Grid>
            <Grid item xs={2} md={2} xl={2} alignItems="center" justifyContent="center">
              <VuiButton color="warning" size="20px" fullWidth>
                <VuiTypography color="secondary" variant="h7">
                  {timerHours} {' '}
                  Hours
                </VuiTypography>
              </VuiButton>
            </Grid>
            <Grid item xs={2} md={2} xl={2} alignItems="center" justifyContent="center">
              <VuiButton color="warning" size="20px" fullWidth>
                <VuiTypography color="secondary" variant="h7">
                  {timerMinutes} {' '}
                  Minutes
                </VuiTypography>
              </VuiButton>
            </Grid>
            <Grid item xs={2} md={2} xl={2} alignItems="center" justifyContent="center">
              <VuiButton color="warning" size="20px" fullWidth>
                <VuiTypography color="secondary" variant="h7">
                  {timerSeconds} {' '}
                  Seconds
                </VuiTypography>
              </VuiButton>
            </Grid>
          </Grid>

          {/* {Old} */}
          {/* <Grid container spacing={3}> */}
          {/*   <Grid item xs={12} md={6} xl={2}> */}
          {/*     <MiniStatisticsCard */}
          {/*       title={{ text: "BNB Price", fontWeight: "regular" }} */}
          {/*       count="" */}
          {/*       /\* percentage={{ color: "success", text: "+15%" }} *\/ */}
          {/*       icon={{ color: "secondary", component: <IoWallet size="22px" color="white" /> }} */}
          {/*     /> */}
          {/*     <CircularProgress size="15px" thickness={5} /> */}
          {/*   </Grid> */}
          {/*   <Grid item xs={12} md={6} xl={3}> */}
          {/*     <MiniStatisticsCard */}
          {/*       title={{ text: "BS Token Price" }} */}
          {/*       count="" */}
          {/*       /\* percentage={{ color: "success", text: "+3%" }} *\/ */}
          {/*       icon={{ color: "info", component: <IoGlobe size="22px" color="white" /> }} */}
          {/*     /> */}
          {/*     <CircularProgress size="15px" thickness={5} /> */}
          {/*   </Grid> */}
          {/*   <Grid item xs={12} md={6} xl={3}> */}
          {/*     <MiniStatisticsCard */}
          {/*       title={{ text: "Total Liquidity Raised" }} */}
          {/*       count="" */}
          {/*       /\* percentage={{ color: "success", text: "+5%" }} *\/ */}
          {/*       icon={{ color: "info", component: <IoWallet size="20px" color="white" /> }} */}
          {/*     /> */}
          {/*     <CircularProgress size="15px" thickness={5} /> */}
          {/*   </Grid> */}
          {/*   <Grid item xs={12} md={6} xl={3}> */}
          {/*     <MiniStatisticsCard */}
          {/*       title={{ text: "Total Projects" }} */}
          {/*       count="" */}
          {/*       /\* percentage={{ color: "success", text: "+104" }} *\/ */}
          {/*       icon={{ color: "info", component: <IoDocumentText size="20px" color="white" /> }} */}
          {/*     /> */}
          {/*     <CircularProgress size="15px" thickness={5} /> */}
          {/*   </Grid> */}
          {/* </Grid> */}

          {/*   <Grid container spacing={3} alignItems="center" justifyContent="center"> */}
          {/*     <Grid item xs={12} md={6} xl={3}> */}
          {/*       <VuiTypography color="white"> */}
          {/*         Countdown */}
          {/*       </VuiTypography> */}
          {/*     </Grid> */}
          {/*   </Grid> */}
        </VuiBox>
      </VuiBox>
      {/* {Infomation Bar} */}

      {/* {Hero Infomation} */}
      <VuiBox>
        <VuiBox>
          <VuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
            <VuiBox display="flex" margin="auto" pt="0" height="100%" pb="10px">
              <VuiTypography fontWeight="extrabold" color="white" align="center">
                <VuiTypography
                  fontWeight="bold"
                  color="info"
                  variant="h1"
                >
                  BscStart
                </VuiTypography>

                <VuiTypography
                  fontWeight="bold"
                  color="white"
                  variant="h1"
                >
                  BSC Launchpad Protocol
                </VuiTypography>
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
        </VuiBox>
        <VuiBox mb={6}>
          <Grid container spacing={3} direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={8} md={5} xl={3}>
              <VuiButton
                size="large"
                color="lightblue"
                variant="contained"
                fullWidth
                href="/launchpad"
              >
                Create Launchpad
              </VuiButton>
            </Grid>
          </Grid>
        </VuiBox>

        {/* {Hero Infomation} */}
        <Divider light />
        {/* {Project Active} */}
        <VuiBox mb={3} mt={10}>
          <Divider light />
          <VuiBox component="ul" display="flex" flexDirection="column" p={0} m={0} width="100%">
            <VuiBox display="flex" margin="auto" height="100%">
              <VuiTypography fontWeight="extrabold" color="white" align="center">
                <VuiTypography color="white" fontWeight="bold" variant="h2">
                  Active Projects
                </VuiTypography>
              </VuiTypography>
            </VuiBox>
          </VuiBox>
          <Divider light />
          <Grid container spacing="18px" alignItems="center" justifyContent="center">
            <Grid item xs={12} lg={12} xl={10}>
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
                  <VuiTypography variant="h4" color="white" fontWeight="bold" mb="5px">
                    Active Projects
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
                        NA
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
                          Traffic
                        </VuiTypography>
                      </Stack>
                      <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        NA
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
                        NA
                      </VuiTypography>
                      <VuiProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
                    </Grid>
                  </Grid>
                </VuiBox>
              </Card>
              {/* {Project Active} */}

              {/* {BscStart Price Chart} */}
              <Grid item xs={12} lg={12} xl={12} pt={15} pb={10} >
                <Divider light />
                <VuiBox component="ul" display="flex" flexDirection="column" p={0} m={0} width="100%">
                  <VuiBox display="flex" margin="auto" height="100%" >
                    <VuiTypography fontWeight="extrabold" color="white" align="center">
                      <VuiTypography variant="h2" color="white" fontWeight="bold">
                        BS Chart
                      </VuiTypography>
                    </VuiTypography>
                  </VuiBox>
                </VuiBox>
                <Divider light />
                <Card>
                  <VuiBox sx={{ height: "100%" }}>
                    <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                      BS Price
                    </VuiTypography>
                    <VuiBox display="flex" alignItems="center" mb="40px">
                      <VuiTypography variant="button" color="success" fontWeight="bold">
                        +24,3% more{" "}
                        <VuiTypography variant="button" color="text" fontWeight="regular">
                          in 2022
                        </VuiTypography>
                      </VuiTypography>
                    </VuiBox>
                    <VuiBox sx={{ height: "450px" }}>
                      <LineChart
                        lineChartData={lineChartDataDashboard}
                        lineChartOptions={lineChartOptionsDashboard}
                      />
                    </VuiBox>
                  </VuiBox>
                </Card>
              </Grid>
              {/* {BscStart Price Chart} */}

              {/* {BS Economics} */}
              <Grid container spacing={4} alignItems="center" justifyContent="center" direction="row">
                <Grid item xs={12} md={6} xl={6} alignItems="center" justifyContent="center">
                  <Card>
                    <VuiBox sx={{ height: "100%" }}>
                      <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                        BS Tokenomics
                      </VuiTypography>
                      <VuiBox display="flex" alignItems="center" mb="40px">
                        <VuiTypography variant="button" color="success" fontWeight="bold">
                          Total Supply:{" "}
                          <VuiTypography variant="button" color="text" fontWeight="regular">
                            800.000.000
                          </VuiTypography>
                        </VuiTypography>
                      </VuiBox>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <VuiBox
                          bgColor="secondary"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <IoWallet color="#fff" size="12px" />
                        </VuiBox>
                        <VuiTypography color="text" variant="button" fontWeight="medium">
                          Private Sale
                        </VuiTypography>
                      </Stack>
                      <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        80.000.000
                      </VuiTypography>
                      <VuiProgress value={10} color="info" sx={{ background: "#2D2E5F" }} />
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <VuiBox
                          bgColor="secondary"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <IoWallet color="#fff" size="12px" />
                        </VuiBox>
                        <VuiTypography color="text" variant="button" fontWeight="medium">
                          Launchpad
                        </VuiTypography>
                      </Stack>
                      <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        160.000.000
                      </VuiTypography>
                      <VuiProgress value={20} color="info" sx={{ background: "#2D2E5F" }} />
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <VuiBox
                          bgColor="secondary"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <IoWallet color="#fff" size="12px" />
                        </VuiBox>
                        <VuiTypography color="text" variant="button" fontWeight="medium">
                          Team
                        </VuiTypography>
                      </Stack>
                      <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        80.000.000
                      </VuiTypography>
                      <VuiProgress value={10} color="info" sx={{ background: "#2D2E5F" }} />
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <VuiBox
                          bgColor="secondary"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <IoWallet color="#fff" size="12px" />
                        </VuiBox>
                        <VuiTypography color="text" variant="button" fontWeight="medium">
                          BS Ecosystem
                        </VuiTypography>
                      </Stack>
                      <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        480.000.000
                      </VuiTypography>
                      <VuiProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />

                    </VuiBox>
                  </Card>

                </Grid>
                <Grid item xs={12} md={6} xl={6} alignItems="center" justifyContent="center">
                  <Card alignItems="center" justifyContent="center">
                    <VuiBox py={4}>
                      <img alt="tokeneconomic" src={TokenEconomic} width="100%" />
                    </VuiBox>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </VuiBox>
        {/* {BS Economics} */}
      </VuiBox>

    </DashboardLayout >
  );
}

export default Dashboard;
