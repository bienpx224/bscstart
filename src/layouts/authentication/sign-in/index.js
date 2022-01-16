
// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgSignIn from "assets/images/signInImage.png";

function SignIn() {

  return (
    <CoverLayout
      title="Cooming Soon..."
      color="white"
      description="cooming soon ..."
      premotto="BSC START:"
      motto="LAUCHPAD FOR EVERYONE"
      image={bgSignIn}
    >
    </CoverLayout>
  );
}

export default SignIn;
