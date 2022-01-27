
// @mui material components
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";

// Vision UI Dashboard React components
import VuiButton from "components/VuiButton";
import VuiBox from "components/VuiBox";

// Custom styles for the SidenavCard
import { card, cardContent } from "examples/Sidenav/styles/sidenavCard";

// Vision UI Dashboard React context
import { useVisionUIController } from "context";

function SidenavCard({ color, ...rest }) {
  const [controller] = useVisionUIController();
  const { miniSidenav, sidenavColor } = controller;

  return (
    <Card sx={(theme) => card(theme, { miniSidenav })}>
      <CardContent sx={(theme) => cardContent(theme, { sidenavColor })}>
        <VuiBox lineHeight={1} height="9rem" mt="7rem">
          <VuiButton
            component={Link}
            href="https://t.me/crypto_niceguy"
            target="_blank"
            rel="noreferrer"
            size="small"
            /* sx={{ color: "white !important", background: "red" }} */
            sx={({ palette: { gradients, white }, functions: { linearGradient } }) => ({
              color: `${white.main} !important`,
              background: linearGradient(
                gradients.cardDark.main,
                gradients.cardDark.state,
                gradients.cardDark.deg
              ),
              "&:hover": {
                background: linearGradient(
                  gradients.cardDark.main,
                  gradients.cardDark.state,
                  gradients.cardDark.deg
                ),
              },
            })}
            fullWidth
          >
            Looking For A Developer!<br />
            Contact Us!
          </VuiButton>
        </VuiBox>
      </CardContent>
    </Card>
  );
}

export default SidenavCard;
