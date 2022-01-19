
import { useState, useEffect } from "react";


// @mui material components
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// @mui icons
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import { FaMediumM } from "react-icons/fa";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";

// Custom styles for the Configurator
import ConfiguratorRoot from "examples/Configurator/ConfiguratorRoot";

// Vision UI Dashboard React context
import {
  useVisionUIController,
  setOpenConfigurator,
  setTransparentSidenav,
  setFixedNavbar,
  setSidenavColor,
} from "context";

function Configurator() {
  const [controller, dispatch] = useVisionUIController();
  const { openConfigurator, transparentSidenav, fixedNavbar, sidenavColor } = controller;
  const [disabled, setDisabled] = useState(false);
  const sidenavColors = ["primary", "info", "success", "warning", "error"];

  // Use the useEffect hook to change the button state for the sidenav type based on window size.
  useEffect(() => {
    // A function that sets the disabled state of the buttons for the sidenav type.
    function handleDisabled() {
      return window.innerWidth > 1200 ? setDisabled(false) : setDisabled(true);
    }

    // The event listener that's calling the handleDisabled function when resizing the window.
    window.addEventListener("resize", handleDisabled);

    // Call the handleDisabled function to set the state with the initial value.
    handleDisabled();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleDisabled);
  }, []);

  const handleCloseConfigurator = () => setOpenConfigurator(dispatch, false);
  const handleTransparentSidenav = () => setTransparentSidenav(dispatch, true);
  const handleWhiteSidenav = () => setTransparentSidenav(dispatch, false);

  // sidenav type buttons styles
  const sidenavTypeButtonsStyles = ({
    functions: { pxToRem },
    boxShadows: { buttonBoxShadow },
  }) => ({
    height: pxToRem(42),
    boxShadow: buttonBoxShadow.main,

    "&:hover, &:focus": {
      opacity: 1,
    },
  });

  return (
    <ConfiguratorRoot variant="permanent" ownerState={{ openConfigurator }}>
      <VuiBox
        backgroundColor="black"
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        pt={3}
        pb={0.8}
        px={3}
      >
        <VuiBox>
          <VuiTypography color="white" variant="h5" fontWeight="bold">
            About Us
          </VuiTypography>
          <VuiTypography variant="body2" color="white" fontWeight="bold">
            See our team
          </VuiTypography>
        </VuiBox>

        <Icon
          sx={({ typography: { size, fontWeightBold }, palette: { white, dark } }) => ({
            fontSize: `${size.md} !important`,
            fontWeight: `${fontWeightBold} !important`,
            stroke: `${white.main} !important`,
            strokeWidth: "2px",
            cursor: "pointer",
            mt: 2,
          })}
          onClick={handleCloseConfigurator}
        >
          close
        </Icon>
      </VuiBox>

      <Divider light />
      <VuiBox pt={1.25} pb={3} px={3} textAlign="center">
        <VuiTypography variant="h6" color="white">
          Our Team
        </VuiTypography>

        <Divider light />

        <VuiBox mt={3} mb={2}>
          <VuiButton
            component={Link}
            href=""
            target="_blank"
            rel="noreferrer"
            color="info"
            variant="outlined"
            fullWidth
          >
            VIEW DOCUMENTATION
          </VuiButton>
        </VuiBox>
        <VuiBox mt={3} textAlign="center">
          <VuiBox mb={0.5}>
            <VuiTypography variant="h6" color="white">
              Thank you for sharing!
            </VuiTypography>
          </VuiBox>

          <VuiBox display="flex" justifyContent="center">
            <VuiBox mr={1.5} width="8rem">
              <VuiButton
                fullWidth
                component={Link}
                href="https://twitter.com/BscStart"
                target="_blank"
                rel="noreferrer"
                color="dark"
              >
                <TwitterIcon />
                &nbsp; Tweet
              </VuiButton>
            </VuiBox>
            <VuiBox mr={1.5} width="8rem">
              <VuiButton
                fullWidth
                component={Link}
                href="https://www.facebook.com/BscStart"
                target="_blank"
                rel="noreferrer"
                color="dark"
              >
                <FacebookIcon />
                &nbsp; Facebook
              </VuiButton>
            </VuiBox>
          </VuiBox>
          <VuiBox display="flex" justifyContent="center" mt={3}>
            <VuiBox mr={1.5} width="8rem">
              <VuiButton
                fullWidth
                component={Link}
                href="https://t.me/BscStart"
                target="_blank"
                rel="noreferrer"
                color="dark"
              >
                <TelegramIcon />
                &nbsp; Telegram
              </VuiButton>
            </VuiBox>

            <VuiBox mr={1.5} width="8rem">
              <VuiButton
                fullWidth
                component={Link}
                href="https://www.youtube.com/channel/UCRKCRp_ttGoPCpjid_LTgsQ"
                target="_blank"
                rel="noreferrer"
                color="dark"
              >
                <YouTubeIcon />
                &nbsp; Youtube
              </VuiButton>
            </VuiBox>
          </VuiBox>
          <VuiBox display="flex" justifyContent="center" mt={3}>
            <VuiBox mr={1.5} width="8rem">
              <VuiButton
                fullWidth
                component={Link}
                href="https://medium.com/@BscStart"
                target="_blank"
                rel="noreferrer"
                color="dark"
              >
                <FaMediumM size="15px" />,
                &nbsp; Medium
              </VuiButton>
            </VuiBox>
          </VuiBox>
        </VuiBox>
      </VuiBox>
    </ConfiguratorRoot>
  );
}

export default Configurator;
