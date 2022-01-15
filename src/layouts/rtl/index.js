import { Card, Stack } from "@mui/material";
// @mui material components
import Grid from "@mui/material/Grid";
import colors from "assets/theme/base/colors";

// Vision UI Dashboard React base styles
import linearGradient from "assets/theme/functions/linearGradient";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiProgress from "components/VuiProgress";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard React contexts
import { setDirection, useVisionUIController } from "context";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import BarChart from "examples/Charts/BarCharts/BarChart";

// Data
import LineChart from "examples/Charts/LineCharts/LineChart";
import Footer from "examples/Footer";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Projects from "layouts/rtl/components/Projects";

// Dashboard layout components
import WelcomeMark from "layouts/rtl/components/WelcomeMark";
import { barChartDataDashboard } from "layouts/rtl/data/barChartData";
import { barChartOptionsDashboard } from "layouts/rtl/data/barChartOptions";
import { lineChartDataDashboard } from "layouts/rtl/data/lineChartData";
import { lineChartOptionsDashboard } from "layouts/rtl/data/lineChartOptions";
import { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";

// React icons
import { IoIosRocket } from "react-icons/io";
import { IoBuild, IoDocumentText, IoGlobe, IoWallet } from "react-icons/io5";

function RTL() {
  const { gradients } = colors;
  const { cardContent } = gradients;
  const [, dispatch] = useVisionUIController();

  // Changing the direction to rtl
  useEffect(() => {
    setDirection(dispatch, "rtl");

    return () => setDirection(dispatch, "ltr");
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        <VuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Total Liquidity Raised" }}
                count="$103,4M"
                percentage={{ color: "success", text: "+3%" }}
                icon={{ color: "info", component: <IoGlobe size="22px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Total Projects" }}
                count="+512"
                percentage={{ color: "success", text: "+104" }}
                icon={{ color: "info", component: <IoDocumentText size="22px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Total Participants" }}
                count="103,430"
                percentage={{ color: "success", text: "+5,4%" }}
                icon={{ color: "info", component: <FaShoppingCart size="20px" color="white" /> }}
              />
            </Grid>
          </Grid>
        </VuiBox>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={12}>
            <Projects />
          </Grid>
        </Grid>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default RTL;
