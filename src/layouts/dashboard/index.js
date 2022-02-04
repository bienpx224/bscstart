
// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import { Card, CircularProgress, Divider, LinearProgress, Stack } from "@mui/material";
import TokenEconomic from '../../assets/images/tokeneconomic.png'
import roadMap from '../../assets/images/roadmap.png'

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

  const [timerDays2, setTimerDays2] = useState('00');
  const [timerHours2, setTimerHours2] = useState('00');
  const [timerMinutes2, setTimerMinutes2] = useState('00');
  const [timerSeconds2, setTimerSeconds2] = useState('00');

  let interval2 = useRef();

  const startTimer2 = () => {
    const countdownDate = new Date('Feb 15, 2022 08:00:00').getTime();

    interval2 = setInterval(() => {
      const now = new Date().getTime();
      const distance2 = countdownDate - now;


      const days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
      const hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
      const seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);

      if (distance2 < 0) {
        // stop our time
        clearInterval(interval2.current)
      } else {
        // update time
        setTimerDays2(days2)
        setTimerHours2(hours2)
        setTimerMinutes2(minutes2)
        setTimerSeconds2(seconds2)
      }

    }, 1000);

  }

  useEffect(() => {
    startTimer2();
    return () => {
      clearInterval(interval2.current);
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
                  is coming...<br />
                </VuiTypography>
              </VuiTypography>
            </VuiBox>
          </VuiBox>
          <Grid container spacing={3} pt={5} pb={5} direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={10} md={5} xl={3}>
              <VuiButton
                size="large"
                color="warning"
                variant="gradient"
                fullWidth
              >
                Stage 1 (10 days) <br />
                1 BNB = 100000 BS
              </VuiButton>
            </Grid>
          </Grid>

          <Grid container alignItems="center" justifyContent="center" direction="row">
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

          <Grid container pt={5} direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={10} md={5} xl={3}>
              <VuiButton
                size="large"
                color="success"
                variant="contained"
                fullWidth
                onClick={connect}
              >
                Buy BS Token
              </VuiButton>
            </Grid>
          </Grid>

          <Grid container pt={5} pb={5} direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={10} md={5} xl={3}>
              <VuiButton
                size="large"
                color="primary"
                variant="gradient"
                fullWidth
              >
                Stage 2 (10 days) <br />
                1 BNB = 85000 BS
              </VuiButton>
            </Grid>
          </Grid>

          <Grid container alignItems="center" justifyContent="center" direction="row">
            <Grid item xs={2} md={2} xl={2} alignItems="center" justifyContent="center">
              <VuiButton color="primary" variant="gradient" size="20px" fullWidth>
                <VuiTypography color="secondary" variant="h7">
                  {timerDays2} {' '}
                  Days
                </VuiTypography>
              </VuiButton>
            </Grid>
            <Grid item xs={2} md={2} xl={2} alignItems="center" justifyContent="center">
              <VuiButton color="primary" variant="gradient" size="20px" fullWidth>
                <VuiTypography color="secondary" variant="h7">
                  {timerHours2} {' '}
                  Hours
                </VuiTypography>
              </VuiButton>
            </Grid>
            <Grid item xs={2} md={2} xl={2} alignItems="center" justifyContent="center">
              <VuiButton color="primary" variant="gradient" size="20px" fullWidth>
                <VuiTypography color="secondary" variant="h7">
                  {timerMinutes2} {' '}
                  Minutes
                </VuiTypography>
              </VuiButton>
            </Grid>
            <Grid item xs={2} md={2} xl={2} alignItems="center" justifyContent="center">
              <VuiButton color="primary" variant="gradient" size="20px" fullWidth>
                <VuiTypography color="secondary" variant="h7">
                  {timerSeconds2} {' '}
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
                    <VuiBox sx={{ height: "100%" }} py={2}>
                      <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                        BS Tokenomics
                      </VuiTypography>
                      <VuiBox display="flex" alignItems="center" mb="40px">
                        <VuiTypography variant="button" color="success" fontWeight="bold">
                          Total Supply:{" "}
                          <VuiTypography variant="button" color="text" fontWeight="regular">
                            800000000
                          </VuiTypography>
                        </VuiTypography>
                      </VuiBox>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <VuiTypography color="text" variant="lg" fontWeight="medium">
                          Private Sale: {' '}
                          <VuiTypography color="white" variant="lg" fontWeight="bold">
                            80M
                          </VuiTypography>
                        </VuiTypography>

                      </Stack>
                      <VuiProgress value={10} color="info" sx={{ background: "#2D2E5F" }} />


                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <VuiTypography color="text" variant="lg" fontWeight="medium">
                          Launchpad: {' '}
                          <VuiTypography color="white" variant="lg" fontWeight="bold" mb="2px">
                            160M
                          </VuiTypography>
                        </VuiTypography>
                      </Stack>
                      <VuiProgress value={20} color="info" sx={{ background: "#2D2E5F" }} />

                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <VuiTypography color="text" variant="lg" fontWeight="medium">
                          Team: {' '}
                          <VuiTypography color="white" variant="lg" fontWeight="bold" mb="2px">
                            80M
                          </VuiTypography>
                        </VuiTypography>

                      </Stack>
                      <VuiProgress value={10} color="info" sx={{ background: "#2D2E5F" }} />

                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <VuiTypography color="text" variant="lg" fontWeight="medium">
                          BS Ecosystem: {' '}
                          <VuiTypography color="white" variant="lg" fontWeight="bold" mb="2px">
                            480M
                          </VuiTypography>
                        </VuiTypography>

                      </Stack>
                      <VuiProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
                    </VuiBox>
                  </Card>
                </Grid>

                {/* {Token Economic} */}
                <Grid item xs={12} md={6} xl={6} alignItems="center" justifyContent="center">
                  <Card alignItems="center" justifyContent="center">
                    <img alt="tokeneconomic" src={TokenEconomic} width="100%" />
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </VuiBox>
        {/* {BS Economics} */}

        {/* {BS Roadmap} */}
        <Grid container alignItems="center" justifyContent="center" direction="row">
          <Grid item xs={12} md={6} xl={6} alignItems="center" justifyContent="center">
            <VuiBox py={8}>
              <img alt="roadmap" src={roadMap} width="100%" />
            </VuiBox>
          </Grid>
        </Grid>
        {/* {BS Roadmap} */}

      </VuiBox>

    </DashboardLayout >
  );
}

export default Dashboard;
