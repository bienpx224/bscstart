
import { useEffect, useState } from "react";

// react-router-dom components
import { useLocation, NavLink } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";

// Vision UI Dashboard React example components
import SidenavCollapse from "examples/Sidenav/SidenavCollapse";
import SidenavCard from "examples/Sidenav/SidenavCard";

// Custom styles for the Sidenav
import SidenavRoot from "examples/Sidenav/SidenavRoot";
import sidenavLogoLabel from "examples/Sidenav/styles/sidenav";

// Vision UI Dashboard React context
import { useVisionUIController, setMiniSidenav, setTransparentSidenav } from "context";

// Vision UI Dashboard React icons
import SimmmpleLogo from "examples/Icons/SimmmpleLogo";
import { useWeb3 } from "providers"



// function Sidenav({ color, brand, brandName, routes, ...rest }) {
function Sidenav({ color, brandName, routes, ...rest }) {
  const [controller, dispatch] = useVisionUIController();
  const { miniSidenav, transparentSidenav } = controller;
  const location = useLocation();
  const { pathname } = location;
  const collapseName = pathname.split("/").slice(1)[0];
  const { connect } = useWeb3()

  const [anchorEl, setAnchorEl] = useState(null);
  const expand = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const closeSidenav = () => setMiniSidenav(dispatch, true);

  useEffect(() => {

    // A function that sets the mini state of the sidenav.
    function handleMiniSidenav() {
      setMiniSidenav(dispatch, window.innerWidth < 1300);
    }

    /**
     The event listener that's calling the handleMiniSidenav function when resizing the window.
    */
    window.addEventListener("resize", handleMiniSidenav);

    // Call the handleMiniSidenav function to set the state with the initial value.
    handleMiniSidenav();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleMiniSidenav);
  }, [dispatch, location]);

  useEffect(() => {
    if (window.innerWidth < 1440) {
      setTransparentSidenav(dispatch, false);
    }
  }, []);

  // Render all the routes from the routes.js (All the visible items on the Sidenav)
  const renderRoutes = routes.map(({ type, name, icon, title, noCollapse, key, route, href }) => {
    let returnValue;

    if (type === "collapse") {
      returnValue = href ? (
        <Link
          href={href}
          key={key}
          target="_blank"
          rel="noreferrer"
          sx={{ textDecoration: "none" }}
        >
          <SidenavCollapse
            color={color}
            name={name}
            icon={icon}
            active={key === collapseName}
            noCollapse={noCollapse}
          />
        </Link>
      ) : (
        <NavLink to={route} key={key}>
          <SidenavCollapse
            color={color}
            key={key}
            name={name}
            icon={icon}
            active={key === collapseName}
            noCollapse={noCollapse}
          />
        </NavLink>
      );
    } else if (type === "title") {
      returnValue = (
        <VuiTypography
          key={key}
          color="white"
          display="block"
          variant="caption"
          fontWeight="bold"
          textTransform="uppercase"
          pl={3}
          mt={2}
          mb={1}
          ml={1}
        >
          {title}
        </VuiTypography>
      );
    } else if (type === "divider") {
      returnValue = <Divider light key={key} />;
    }

    return returnValue;
  });

  return (
    <SidenavRoot {...rest} variant="permanent" ownerState={{ transparentSidenav, miniSidenav }}>
      <VuiBox
        pt={3.5}
        pb={0.5}
        px={4}
        textAlign="center"
        sx={{
          overflow: "unset !important",
        }}
      >
        <VuiBox
          display={{ xs: "block", xl: "none" }}
          position="absolute"
          top={0}
          right={0}
          p={1.625}
          onClick={closeSidenav}
          sx={{ cursor: "pointer" }}
        >
          <VuiTypography variant="h6" color="text">
            <Icon sx={{ fontWeight: "bold" }}>close</Icon>
          </VuiTypography>
        </VuiBox>
        <VuiBox component={NavLink} to="/" display="flex" alignItems="center">
          <VuiBox
            sx={
              ((theme) => sidenavLogoLabel(theme, { miniSidenav }),
              {
                display: "flex",
                alignItems: "center",
                margin: "0 auto",
              })
            }
          >
            <VuiBox
              display="flex"
              sx={
                ((theme) => sidenavLogoLabel(theme, { miniSidenav, transparentSidenav }),
                {
                  mr: miniSidenav || (miniSidenav && transparentSidenav) ? 0 : 1,
                })
              }
            >
              <SimmmpleLogo size="30px" />
            </VuiBox>
            <VuiTypography
              variant="button"
              textGradient={false}
              color="info"
              fontSize={14}
              letterSpacing={3}
              fontWeight="bold"
              sx={
                ((theme) => sidenavLogoLabel(theme, { miniSidenav, transparentSidenav }),
                {
                  opacity: miniSidenav || (miniSidenav && transparentSidenav) ? 0 : 1,
                  maxWidth: miniSidenav || (miniSidenav && transparentSidenav) ? 0 : "100%",
                  margin: "0 auto",
                })
              }
            >
              {brandName}
            </VuiTypography>
          </VuiBox>
        </VuiBox>
      </VuiBox>
      <Divider light />
      <List>
        {renderRoutes}
      </List>
      <VuiBox
        my={2}
        mx={2}
        mt="auto"
        sx={({ breakpoints }) => ({
          [breakpoints.up("xl")]: {
            pt: 2,
          },
          [breakpoints.only("xl")]: {
            pt: 1,
          },
          [breakpoints.down("xl")]: {
            pt: 2,
          },
        })}
      >
        <SidenavCard color={color} />
        <VuiBox mt={2}>
          <VuiButton
            rel="noreferrer"
            color="success"
            fullWidth
            href="/"
          >
            <VuiTypography
              color="white"
              variant="h6"
            >
              Buy BS
            </VuiTypography>
          </VuiButton>
        </VuiBox>

        <VuiBox mt={2}>
          <VuiButton
            rel="noreferrer"
            color="warning"
            fullWidth
            onClick={() => window.open("https://bscscan.com/address/0xefde80eefdf1938672fcc42793d81c4bfa3f4ebb", "_blank")}
          >
            <VuiTypography
              color="white"
              variant="h6"
            >
              View on BscScan
            </VuiTypography>
          </VuiButton>
        </VuiBox>

      </VuiBox>
    </SidenavRoot >
  );
}

// Setting default values for the props of Sidenav
Sidenav.defaultProps = {
  color: "info",
  // brand: "",
};

// Typechecking props for the Sidenav
Sidenav.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  // brand: PropTypes.string,
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidenav;
