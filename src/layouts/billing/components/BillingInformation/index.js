
// @mui material components
import { CircularProgress, Grid, LinearProgress } from "@mui/material";
import Card from "@mui/material/Card";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiButton from "components/VuiButton";
import VuiTypography from "components/VuiTypography";


function BillingInformation() {
  return (
    <div>
      <VuiBox mb={3} pt={3}>
        <Grid container spacing={4} alignItems="center" justifyContent="center" direction="row">
          <Grid item xs={12} md={6} xl={4}>
            <VuiButton color="dark" size="20px" fullWidth disabled>
              Exchange
              <CircularProgress size="15px" thickness={5} />
            </VuiButton>
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <VuiButton color="dark" size="20px" fullWidth disabled>
              Liquidity
              <CircularProgress size="15px" thickness={5} />
            </VuiButton>
          </Grid>
        </Grid>
      </VuiBox>
      <Card id="delete-account">
        <VuiBox>
          <VuiTypography variant="lg" color="white" fontWeight="bold">
            Swap
          </VuiTypography>
        </VuiBox>
        <VuiBox>
          <VuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
            <VuiBox display="flex" margin="auto" pt="100px" height="100%" pb="150px">
              <VuiTypography fontWeight="bold" color="white" align="center">
                BscStart - BSC Swap Protocol
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
    </div>
  );
}

export default BillingInformation;
