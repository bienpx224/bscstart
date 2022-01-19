
// Vision UI Dashboard React components
import { Card, Grid } from "@mui/material";
import VuiBox from "components/VuiBox";
import VuiButton from "components/VuiButton";
import VuiTypography from "components/VuiTypography";
import SimmmpleLogo from "examples/Icons/SimmmpleLogo";

// @mui icons
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import { FaMediumM } from "react-icons/fa";


function Footer() {
  return (
    <Card>
      <Grid container spacing={1}>
        <Grid item xs={0} md={0} xl={2} fullWidth>
        </Grid>
        <Grid item xs={12} md={12} xl={3} fullWidth mb={4}>
          <VuiBox
            display="flex"
            alignItems="center"
            margin="0 auto"
          >
            <VuiBox
              display="flex"
            >
              <SimmmpleLogo size="34px" />
            </VuiBox>
            <VuiTypography
              variant="button"
              textGradient={false}
              color="info"
              fontSize={30}
              letterSpacing={6}
              fontWeight="bold"
              ml="10px"
            >
              BscStart
            </VuiTypography>
          </VuiBox>
          <VuiBox>
            <VuiTypography
              variant="body2"
              color="text"
              paragraph={true}
            >
              BscStart is a protocol aiming to provide users with the capabilities to launch
              their own token and create their own initial token sale.
            </VuiTypography>
          </VuiBox>
          <VuiBox display="flex" overflow="auto">
            <VuiBox display="flex">
              <VuiBox mr="1rem">
                <VuiButton
                  href="https://twitter.com/BscStart"
                  color="dark"
                  width={10}
                >
                  <TwitterIcon />
                </VuiButton>
              </VuiBox>
              <VuiBox mr="1rem">
                <VuiButton
                  href="https://t.me/BscStart"
                  color="dark"
                >
                  <TelegramIcon />
                </VuiButton>
              </VuiBox>
              <VuiBox mr="1rem">
                <VuiButton
                  href="https://www.facebook.com/BscStart"
                  color="dark"
                >
                  <FacebookIcon />
                </VuiButton>
              </VuiBox>

              <VuiBox mr="1rem">
                <VuiButton
                  href="https://medium.com/@BscStart"
                  color="dark"
                >
                  <FaMediumM />
                </VuiButton>
              </VuiBox>

              <VuiBox>
                <VuiButton
                  href="https://www.youtube.com/channel/UCRKCRp_ttGoPCpjid_LTgsQ"
                  color="dark"
                >
                  <YouTubeIcon />
                </VuiButton>
              </VuiBox>
            </VuiBox>
          </VuiBox>
        </Grid>
        <Grid item xs={0} md={0} xl={1} fullWidth>
        </Grid>
        <Grid item xs={12} md={5} xl={3}>
          <VuiTypography
            variant="body2"
            color="white"
            fullWidth
          >
            Products
          </VuiTypography>
          <VuiTypography
            variant="body2"
            color="text"
            fullWidth
            fontWeight="light"
          >
            Launchpad
          </VuiTypography>
          <VuiTypography
            variant="body2"
            color="text"
            fullWidth
            fontWeight="light"
          >
            Stake
          </VuiTypography>
          <VuiTypography
            variant="body2"
            color="text"
            fullWidth
            fontWeight="light"
          >
            NFT
          </VuiTypography>
          <VuiTypography
            variant="body2"
            color="text"
            fullWidth
            fontWeight="light"
          >
            Game
          </VuiTypography>
          <VuiTypography
            variant="body2"
            color="text"
            fullWidth
            fontWeight="light"
          >
            Chart
          </VuiTypography>
        </Grid>
        <Grid item xs={12} md={5} xl={3}>
          <VuiTypography
            variant="body2"
            color="white"
            fullWidth
          >
            Support
          </VuiTypography>
          <VuiTypography
            variant="body2"
            color="text"
            fullWidth
            fontWeight="light"
          >
            Tutorials
          </VuiTypography>
          <VuiTypography
            variant="body2"
            color="text"
            fullWidth
            fontWeight="light"
          >
            Documentation
          </VuiTypography>
        </Grid>
      </Grid>
    </Card >
  );
}

export default Footer;
