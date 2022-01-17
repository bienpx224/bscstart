
import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BsCheckCircleFill } from "react-icons/bs";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Data
import data from "layouts/rtl/components/Projects/data";
import { Divider } from "@mui/material";

function Projects() {
  const { columns, rows } = data();
  const [menu, setMenu] = useState(null);

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);

  const renderMenu = (
    <Menu
      id="simple-menu"
      anchorEl={menu}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(menu)}
      onClose={closeMenu}
    >
      <MenuItem onClick={closeMenu}>Menu 1</MenuItem>
      <MenuItem onClick={closeMenu}>Menu 2 </MenuItem>
      <MenuItem onClick={closeMenu}>Menu 3</MenuItem>
    </Menu>
  );

  return (
    <VuiBox height="100vh">
      <Card>
        <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="32px">
          <VuiBox>
            <VuiTypography color="white" variant="lg" mb="6px" gutterBottom>
              Leaderboard Projects
            </VuiTypography>
            <VuiBox display="flex" alignItems="center" lineHeight={0}>
              <BsCheckCircleFill color="green" size="15px" />
              <VuiTypography variant="button" fontWeight="regular" color="text" ml="5px">
                &nbsp;<strong>Top 10</strong> Trending Projects
              </VuiTypography>
            </VuiBox>
          </VuiBox>
          <VuiBox color="text" px={2}>
            <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small" onClick={openMenu}>
              more_vert
            </Icon>
          </VuiBox>
          {renderMenu}
        </VuiBox>
        <VuiBox
          sx={{
            "& th": {
              borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                `${borderWidth[1]} solid ${borderColor.grey}`,
            },
            "& .MuiTableRow-root:not(:last-child)": {
              "& td": {
                borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                  `${borderWidth[1]} solid ${borderColor.grey}`,
              },
            },
          }}
        >

          {/* <Table columns={columns} rows={rows} /> */}
          <VuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
            <VuiBox display="flex" margin="auto" pt="100px" height="100%" pb="150px">
              <VuiTypography fontWeight="bold" color="white" align="center">
                BscStart - BSC Launchpad Protocol
                <VuiTypography color="white">
                  <Divider light />
                </VuiTypography>
                <VuiTypography color="white">
                  Cooming Soon
                </VuiTypography>
              </VuiTypography>
            </VuiBox>
          </VuiBox>

        </VuiBox>
      </Card>
    </VuiBox>
  );
}

export default Projects;
