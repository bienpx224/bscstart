// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiAvatar from "components/VuiAvatar";
import VuiProgress from "components/VuiProgress";

// Images
import AdobeXD from "examples/Icons/AdobeXD";
import Atlassian from "examples/Icons/Atlassian";
import Slack from "examples/Icons/Slack";
import Spotify from "examples/Icons/Spotify";
import Jira from "examples/Icons/Jira";
import Invision from "examples/Icons/Invision";
import avatar1 from "assets/images/avatar1.png";
import avatar2 from "assets/images/avatar2.png";
import avatar3 from "assets/images/avatar3.png";
import avatar4 from "assets/images/avatar4.png";

export default function data() {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <VuiAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { dark } }) =>
              `${borderWidth[2]} solid ${dark.focus}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  return {
    columns: [
      { name: "Name", align: "left" },
      { name: "Logo", align: "left" },
      { name: "Liquidity", align: "center" },
      { name: "Sell", align: "center" },
    ],

    rows: [
      {
        Name: (
          <VuiBox display="flex" alignItems="center">
            <AdobeXD size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Project 1
            </VuiTypography>
          </VuiBox>
        ),
        Logo: (
          <VuiBox display="flex" py={1}>
            {avatars([
              [avatar1, "Ryan Tompson"],
            ])}
          </VuiBox>
        ),
        Liquidity: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            $14,000
          </VuiTypography>
        ),
        Sell: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              70%
            </VuiTypography>
            <VuiProgress value={60} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        Name: (
          <VuiBox display="flex" alignItems="center">
            <Atlassian size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Project 2
            </VuiTypography>
          </VuiBox>
        ),
        Logo: (
          <VuiBox display="flex" py={1}>
            {avatars([
              [avatar2, "Romina Hadid"],
            ])}
          </VuiBox>
        ),
        Liquidity: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            $3,000
          </VuiTypography>
        ),
        Sell: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              100%
            </VuiTypography>
            <VuiProgress value={10} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        Name: (
          <VuiBox display="flex" alignItems="center">
            <Slack size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Project 3
            </VuiTypography>
          </VuiBox>
        ),
        Logo: (
          <VuiBox display="flex" py={1}>
            {avatars([
              [avatar3, "Alexander Smith"],
            ])}
          </VuiBox>
        ),
        Liquidity: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            $1,000
          </VuiTypography>
        ),
        Sell: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              100%
            </VuiTypography>
            <VuiProgress value={100} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        Name: (
          <VuiBox display="flex" alignItems="center">
            <Spotify size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Project 4
            </VuiTypography>
          </VuiBox>
        ),
        Logo: (
          <VuiBox display="flex" py={1}>
            {avatars([
              [avatar4, "Jessica Doe"],
            ])}
          </VuiBox>
        ),
        Liquidity: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            $20,500
          </VuiTypography>
        ),
        Sell: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              100%
            </VuiTypography>
            <VuiProgress value={100} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        Name: (
          <VuiBox display="flex" alignItems="center">
            <Jira size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Project 5
            </VuiTypography>
          </VuiBox>
        ),
        Logo: (
          <VuiBox display="flex" py={1}>
            {avatars([[avatar4, "Jessica Doe"]])}
          </VuiBox>
        ),
        Liquidity: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            $500
          </VuiTypography>
        ),
        Sell: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              100%
            </VuiTypography>
            <VuiProgress value={25} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        Name: (
          <VuiBox display="flex" alignItems="center">
            <Invision size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Project 6
            </VuiTypography>
          </VuiBox>
        ),
        Logo: (
          <VuiBox display="flex" py={1}>
            {avatars([
              [avatar1, "Ryan Tompson"],
            ])}
          </VuiBox>
        ),
        Liquidity: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            $2,000
          </VuiTypography>
        ),
        Sell: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              100%
            </VuiTypography>
            <VuiProgress value={40} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
    ],
  };
}
