
// Vision UI Dashboard React components
import { Card, Grid } from "@mui/material";
import VuiBox from "components/VuiBox";
import VuiButton from "components/VuiButton";
import VuiTypography from "components/VuiTypography";
import SimmmpleLogo from "examples/Icons/SimmmpleLogo";

function Footer() {
  return (
    <Card>
      <Grid container spacing={1}>
        <Grid item xs={0} md={0} xl={3} fullWidth>
        </Grid>
        <Grid item xs={12} md={12} xl={2} fullWidth>
          <VuiBox
            display="flex"
            alignItems="center"
            margin="0 auto"
          >
            <VuiBox
              display="flex"
            >
              <SimmmpleLogo size="34px" />
            </VuiBox>
            <VuiTypography
              variant="button"
              textGradient={true}
              color="logo"
              fontSize={30}
              letterSpacing={5}
              fontWeight="bold"
              ml="10px"
            >
              BscStart
            </VuiTypography>
          </VuiBox>
          <VuiBox>
            <VuiTypography
              variant="caption"
              color="text"
              paragraph={true}
            >
              BscStart is a protocol aiming to provide users with the capabilities to launch <br />
              their own token and create their own initial token sale.
              <br />
              <VuiTypography
                variant="caption"
                color="white"
                paragraph={true}
              >
                Join us!
              </VuiTypography>
            </VuiTypography>
          </VuiBox>
        </Grid>
        <Grid item xs={0} md={0} xl={1} fullWidth>
        </Grid>
        <Grid item xs={12} md={5} xl={3}>
          <VuiTypography
            variant="h5"
            color="white"
            fullWidth
          >
            PRODUCTS
          </VuiTypography>
          <VuiTypography
            variant="h6"
            color="text"
            fullWidth
            fontWeight="light"
          >
            Lauchpad
          </VuiTypography>
          <VuiTypography
            variant="h6"
            color="text"
            fullWidth
            fontWeight="light"
          >
            Stake
          </VuiTypography>
          <VuiTypography
            variant="h6"
            color="text"
            fullWidth
            fontWeight="light"
          >
            NFT
          </VuiTypography>
          <VuiTypography
            variant="h6"
            color="text"
            fullWidth
            fontWeight="light"
          >
            Game
          </VuiTypography>
        </Grid>
        <Grid item xs={12} md={5} xl={3}>
          <VuiTypography
            variant="h4"
            color="white"
            fullWidth
          >
            SUPPORTS
          </VuiTypography>
          <VuiTypography
            variant="h6"
            color="text"
            fullWidth
            fontWeight="light"
          >
            Tutorials
          </VuiTypography>
          <VuiTypography
            variant="h6"
            color="text"
            fullWidth
            fontWeight="light"
          >
            Documentation
          </VuiTypography>
          <VuiTypography
            variant="h6"
            color="text"
            fullWidth
            fontWeight="light"
          >
            Twitter
          </VuiTypography>
          <VuiTypography
            variant="h6"
            color="text"
            fullWidth
            fontWeight="light"
          >
            Telegram
          </VuiTypography>
        </Grid>
      </Grid>
    </Card >
  );
}

export default Footer;
