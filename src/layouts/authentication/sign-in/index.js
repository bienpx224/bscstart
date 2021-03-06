
// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgSignIn from "assets/images/signInImage.png";
import { LinearProgress } from "@mui/material";
import VuiBox from "components/VuiBox";

function SignIn() {

  return (
    <CoverLayout
      title="Coming Soon..."
      color="white"
      description="coming soon ..."
      premotto="BscStart:"
      motto="LAUNCHPAD FOR EVERYONE"
      image={bgSignIn}
    >
      <VuiBox width="400px">
        <LinearProgress color="secondary" />
      </VuiBox>
    </CoverLayout>
  );
}

export default SignIn;
