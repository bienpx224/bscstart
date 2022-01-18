// @mui icons
import { CircularProgress, Divider } from "@mui/material";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import team1 from "assets/images/avatar1.png";
import team2 from "assets/images/avatar2.png";
import team3 from "assets/images/avatar3.png";
import team4 from "assets/images/avatar4.png";
// Images
import profile1 from "assets/images/profile-1.png";
import profile2 from "assets/images/profile-2.png";
import profile3 from "assets/images/profile-3.png";
// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiButton from "components/VuiButton";
import VuiTypography from "components/VuiTypography";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import Footer from "examples/Footer";
// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// Overview page components
import Header from "layouts/profile/components/Header";

function Overview() {
  return (
    <DashboardLayout>
      <Header />
      <VuiBox pt={3}>
        <Grid container spacing={4} alignItems="center" justifyContent="center" direction="row">
          <Grid item xs={12} md={6} xl={3}>
            <VuiButton color="dark" size="20px" fullWidth disabled>
              Create NFT
              <CircularProgress size="15px" thickness={5} />
            </VuiButton>
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <VuiButton color="dark" size="20px" fullWidth disabled>
              Marketplace
              <CircularProgress size="15px" thickness={5} />
            </VuiButton>
          </Grid>
        </Grid>
      </VuiBox>
      <Grid container spacing={3} mb="30px" mt="10px">
        <Grid item xs={12} xl={12}>
          <VuiBox height="100vh">
            <Card>
              <VuiBox display="flex" flexDirection="column" height="100%">
                <VuiBox display="flex" flexDirection="column" mb="24px">
                  <VuiTypography color="white" variant="lg" fontWeight="bold" mb="6px">
                    Marketplace
                  </VuiTypography>
                  <VuiTypography color="text" variant="button" fontWeight="regular">
                    NFT Collections
                  </VuiTypography>
                </VuiBox>
                <VuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
                  <VuiBox display="flex" margin="auto" pt="70px" height="100%" pb="120px">
                    <VuiTypography fontWeight="bold" color="white" align="center">
                      BscStart - BSC NFT Marketplace
                      <VuiTypography color="white">
                        <Divider light />
                      </VuiTypography>
                      <VuiTypography color="white">
                        Cooming soon ...
                      </VuiTypography>
                    </VuiTypography>
                  </VuiBox>
                </VuiBox>

              </VuiBox>
            </Card>
          </VuiBox>
        </Grid>
      </Grid>
    </DashboardLayout >
  );
}

export default Overview;
