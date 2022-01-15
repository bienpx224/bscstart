
// @mui material components
// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
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
import VuiTypography from "components/VuiTypography";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import Footer from "examples/Footer";
// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";
import Welcome from "../profile/components/Welcome/index";
import CarInformations from "./components/CarInformations";

function Overview() {
  return (
    <DashboardLayout>
      <Header />
      <Grid container spacing={3} mb="30px" mt="30px">
        <Grid item xs={12} xl={12}>
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
              <Grid container mt={1} spacing={3}>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultProjectCard
                    image={profile1}
                    label="NFT art #1"
                    title="NFT 1"
                    description="Description in Here"
                    action={{
                      type: "internal",
                      route: "/",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team1, name: "Elena Morison" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultProjectCard
                    image={profile2}
                    label="NFT art #2"
                    title="NFT 2"
                    description="Description in Here"
                    action={{
                      type: "internal",
                      route: "/",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team2, name: "Ryan Milly" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultProjectCard
                    image={profile3}
                    label="NFT art #3"
                    title="NFT 3"
                    description="Description in Here"
                    action={{
                      type: "internal",
                      route: "/",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team3, name: "Nick Daniel" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultProjectCard
                    image={profile3}
                    label="NFT art #4"
                    title="NFT 4"
                    description="Description in Here"
                    action={{
                      type: "internal",
                      route: "/",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team4, name: "Peterson" },
                    ]}
                  />
                </Grid>
              </Grid>
              <Grid container mt={1} spacing={3}>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultProjectCard
                    image={profile1}
                    label="NFT art #1"
                    title="NFT 1"
                    description="Description in Here"
                    action={{
                      type: "internal",
                      route: "/",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team1, name: "Elena Morison" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultProjectCard
                    image={profile2}
                    label="NFT art #2"
                    title="NFT 2"
                    description="Description in Here"
                    action={{
                      type: "internal",
                      route: "/",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team2, name: "Ryan Milly" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultProjectCard
                    image={profile3}
                    label="NFT art #3"
                    title="NFT 3"
                    description="Description in Here"
                    action={{
                      type: "internal",
                      route: "/",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team3, name: "Nick Daniel" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultProjectCard
                    image={profile3}
                    label="NFT art #4"
                    title="NFT 4"
                    description="Description in Here"
                    action={{
                      type: "internal",
                      route: "/",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team4, name: "Peterson" },
                    ]}
                  />
                </Grid>
              </Grid>
              <Grid container mt={1} spacing={3}>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultProjectCard
                    image={profile1}
                    label="NFT art #1"
                    title="NFT 1"
                    description="Description in Here"
                    action={{
                      type: "internal",
                      route: "/",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team1, name: "Elena Morison" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultProjectCard
                    image={profile2}
                    label="NFT art #2"
                    title="NFT 2"
                    description="Description in Here"
                    action={{
                      type: "internal",
                      route: "/",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team2, name: "Ryan Milly" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultProjectCard
                    image={profile3}
                    label="NFT art #3"
                    title="NFT 3"
                    description="Description in Here"
                    action={{
                      type: "internal",
                      route: "/",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team3, name: "Nick Daniel" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultProjectCard
                    image={profile3}
                    label="NFT art #4"
                    title="NFT 4"
                    description="Description in Here"
                    action={{
                      type: "internal",
                      route: "/",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team4, name: "Peterson" },
                    ]}
                  />
                </Grid>
              </Grid>

              <Grid container mt={1} spacing={3}>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultProjectCard
                    image={profile1}
                    label="NFT art #1"
                    title="NFT 1"
                    description="Description in Here"
                    action={{
                      type: "internal",
                      route: "/",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team1, name: "Elena Morison" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultProjectCard
                    image={profile2}
                    label="NFT art #2"
                    title="NFT 2"
                    description="Description in Here"
                    action={{
                      type: "internal",
                      route: "/",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team2, name: "Ryan Milly" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultProjectCard
                    image={profile3}
                    label="NFT art #3"
                    title="NFT 3"
                    description="Description in Here"
                    action={{
                      type: "internal",
                      route: "/",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team3, name: "Nick Daniel" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultProjectCard
                    image={profile3}
                    label="NFT art #4"
                    title="NFT 4"
                    description="Description in Here"
                    action={{
                      type: "internal",
                      route: "/",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team4, name: "Peterson" },
                    ]}
                  />
                </Grid>
              </Grid>

              <Grid container mt={1} spacing={3}>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultProjectCard
                    image={profile1}
                    label="NFT art #1"
                    title="NFT 1"
                    description="Description in Here"
                    action={{
                      type: "internal",
                      route: "/",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team1, name: "Elena Morison" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultProjectCard
                    image={profile2}
                    label="NFT art #2"
                    title="NFT 2"
                    description="Description in Here"
                    action={{
                      type: "internal",
                      route: "/",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team2, name: "Ryan Milly" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultProjectCard
                    image={profile3}
                    label="NFT art #3"
                    title="NFT 3"
                    description="Description in Here"
                    action={{
                      type: "internal",
                      route: "/",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team3, name: "Nick Daniel" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultProjectCard
                    image={profile3}
                    label="NFT art #4"
                    title="NFT 4"
                    description="Description in Here"
                    action={{
                      type: "internal",
                      route: "/",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team4, name: "Peterson" },
                    ]}
                  />
                </Grid>
              </Grid>

              <Grid container mt={1} spacing={3}>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultProjectCard
                    image={profile1}
                    label="NFT art #1"
                    title="NFT 1"
                    description="Description in Here"
                    action={{
                      type: "internal",
                      route: "/",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team1, name: "Elena Morison" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultProjectCard
                    image={profile2}
                    label="NFT art #2"
                    title="NFT 2"
                    description="Description in Here"
                    action={{
                      type: "internal",
                      route: "/",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team2, name: "Ryan Milly" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultProjectCard
                    image={profile3}
                    label="NFT art #3"
                    title="NFT 3"
                    description="Description in Here"
                    action={{
                      type: "internal",
                      route: "/",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team3, name: "Nick Daniel" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultProjectCard
                    image={profile3}
                    label="NFT art #4"
                    title="NFT 4"
                    description="Description in Here"
                    action={{
                      type: "internal",
                      route: "/",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team4, name: "Peterson" },
                    ]}
                  />
                </Grid>
              </Grid>

              <Grid container mt={1} spacing={3}>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultProjectCard
                    image={profile1}
                    label="NFT art #1"
                    title="NFT 1"
                    description="Description in Here"
                    action={{
                      type: "internal",
                      route: "/",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team1, name: "Elena Morison" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultProjectCard
                    image={profile2}
                    label="NFT art #2"
                    title="NFT 2"
                    description="Description in Here"
                    action={{
                      type: "internal",
                      route: "/",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team2, name: "Ryan Milly" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultProjectCard
                    image={profile3}
                    label="NFT art #3"
                    title="NFT 3"
                    description="Description in Here"
                    action={{
                      type: "internal",
                      route: "/",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team3, name: "Nick Daniel" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultProjectCard
                    image={profile3}
                    label="NFT art #4"
                    title="NFT 4"
                    description="Description in Here"
                    action={{
                      type: "internal",
                      route: "/",
                      color: "white",
                      label: "VIEW ALL",
                    }}
                    authors={[
                      { image: team4, name: "Peterson" },
                    ]}
                  />
                </Grid>
              </Grid>


            </VuiBox>
          </Card>
        </Grid>
      </Grid>

      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
