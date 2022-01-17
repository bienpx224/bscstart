
// @mui material components
import { Divider } from "@mui/material";
import Card from "@mui/material/Card";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Billing page components
import Bill from "layouts/billing/components/Bill";

function BillingInformation() {
  return (
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
              <VuiTypography color="white">
                <Divider light />
              </VuiTypography>
              <VuiTypography color="white">
                Cooming Soon ....
              </VuiTypography>
            </VuiTypography>
          </VuiBox>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default BillingInformation;
