import { useState, useEffect } from "react";

// react-router components
import { useLocation, Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @material-ui core components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Icon from "@mui/material/Icon";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiInput from "components/VuiInput";

// Vision UI Dashboard React example components
import Breadcrumbs from "examples/Breadcrumbs";
import NotificationItem from "examples/Items/NotificationItem";

// Custom styles for DashboardNavbar
import {
  navbar,
  navbarContainer,
  navbarRow,
  navbarIconButton,
  navbarMobileMenu,
} from "examples/Navbars/DashboardNavbar/styles";

// Vision UI Dashboard React context
import {
  useVisionUIController,
  setTransparentNavbar,
  setMiniSidenav,
  setOpenConfigurator,
} from "context";

// Images
import team2 from "assets/images/team-2.jpg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import { useWeb3 } from 'providers'
import VuiButton from "components/VuiButton";
import { useAccount } from "hooks/web3/useAccount";


function DashboardNavbar({ absolute, light, isMini }) {
  const [navbarType, setNavbarType] = useState();
  const [controller, dispatch] = useVisionUIController();
  const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator } = controller;
  const [openMenu, setOpenMenu] = useState(false);
  const route = useLocation().pathname.split("/").slice(1);
  const { connect, isLoading, isWeb3Loaded } = useWeb3()
  const { account } = useAccount()

  useEffect(() => {
    // Setting the navbar type
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }

    // A function that sets the transparent state of the navbar.
    function handleTransparentNavbar() {
      setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
    }

    /**
     The event listener that's calling the handleTransparentNavbar function when
     scrolling the window.
    */
    window.addEventListener("scroll", handleTransparentNavbar);

    // Call the handleTransparentNavbar function to set the state with the initial value.
    handleTransparentNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);
  const handleCloseMenu = () => setOpenMenu(false);

  // Render the notifications menu
  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      sx={{ mt: 2 }}
    >
      <NotificationItem
        image={<img src={team2} alt="person" />}
        title={["New message", "from Laur"]}
        date="13 minutes ago"
        onClick={handleCloseMenu}
      />
      <NotificationItem
        image={<img src={logoSpotify} alt="person" />}
        title={["New album", "by Travis Scott"]}
        date="1 day"
        onClick={handleCloseMenu}
      />
      <NotificationItem
        color="text"
        image={
          <Icon fontSize="small" sx={{ color: ({ palette: { white } }) => white.main }}>
            payment
          </Icon>
        }
        title={["", "Payment successfully completed"]}
        date="2 days"
        onClick={handleCloseMenu}
      />
    </Menu>
  );

  return (
    <AppBar
      position={absolute ? "absolute" : navbarType}
      color="inherit"
      sx={(theme) => navbar(theme, { transparentNavbar, absolute, light })}
    >
      <Toolbar sx={(theme) => navbarContainer(theme)}>
        <VuiBox color="inherit" mb={{ xs: 1, md: 0 }} sx={(theme) => navbarRow(theme, { isMini })}>
          <Breadcrumbs icon="home" title={route[route.length - 1]} route={route} light={light} />
        </VuiBox>
        {isMini ? null : (
          <VuiBox sx={(theme) => navbarRow(theme, { isMini })}>
            <VuiBox pr={1}>
              <VuiInput
                placeholder="Type here..."
                icon={{ component: "search", direction: "left" }}
                sx={({ breakpoints }) => ({
                  [breakpoints.down("sm")]: {
                    maxWidth: "80px",
                  },
                  [breakpoints.only("sm")]: {
                    maxWidth: "80px",
                  },
                  backgroundColor: "info.main !important",
                })}
              />
            </VuiBox>
            {account.isAdmin && "Admin" ?
              <IconButton sx={navbarIconButton} size="medium" onClick={connect}>
                {/* {Button} */}
                <VuiTypography
                  variant="button"
                  fontWeight="medium"
                  color={light ? "dark" : "white"}
                >
                  <VuiButton
                    color="secondary"
                  >
                    Hi Admin V??
                  </VuiButton>
                </VuiTypography>
              </IconButton> : ""
            }
            <VuiBox color={light ? "white" : "inherit"}>
              {isLoading ?
                <IconButton sx={navbarIconButton} size="small" >
                  {/* {Button} */}
                  <VuiButton color="warning">
                    <VuiTypography
                      variant="button"
                      fontWeight="medium"
                      color={light ? "white" : "dark"}
                    >
                      Connecting...
                    </VuiTypography>
                  </VuiButton>
                </IconButton>
                : isWeb3Loaded ?
                  account.data ?
                    <IconButton sx={navbarIconButton} size="medium">

                      {/* {Button} */}
                      <VuiTypography
                        variant="button"
                        fontWeight="medium"
                        color={light ? "dark" : "white"}
                      >
                        <VuiButton
                          color="success"
                        >
                          {(account.data).slice(0, 4)}...{(account.data).slice(-4)}
                        </VuiButton>
                      </VuiTypography>
                    </IconButton>
                    :
                    <IconButton sx={navbarIconButton} size="medium" onClick={connect}>
                      {/* {Button} */}
                      <VuiTypography
                        variant="button"
                        fontWeight="medium"
                        color={light ? "dark" : "white"}
                      >
                        <VuiButton
                          color="success"
                        >
                          Connect
                        </VuiButton>
                      </VuiTypography>
                    </IconButton>
                  :
                  <IconButton sx={navbarIconButton} size="small" onClick={() => window.open("https://metamask.io/download.html", "_blank")}>
                    {/* {Button} */}
                    <VuiButton color="warning">
                      <VuiTypography
                        variant="button"
                        fontWeight="medium"
                        color={light ? "white" : "dark"}
                      >
                        Install Metamask
                      </VuiTypography>
                    </VuiButton>
                  </IconButton>
              }
              <IconButton
                size="small"
                color="inherit"
                sx={navbarMobileMenu}
                onClick={handleMiniSidenav}
              >
                <Icon className={"text-white"}>{miniSidenav ? "menu_open" : "menu"}</Icon>
              </IconButton>
              <IconButton
                size="small"
                color="inherit"
                sx={navbarIconButton}
                onClick={handleConfiguratorOpen}
              >
                <Icon>settings</Icon>
              </IconButton>
              {renderMenu()}
            </VuiBox>
          </VuiBox>
        )}
      </Toolbar>
    </AppBar>
  );
}

// Setting default values for the props of DashboardNavbar
DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

// Typechecking props for the DashboardNavbar
DashboardNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};

export default DashboardNavbar;
