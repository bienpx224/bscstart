// Vision UI Dashboard React layouts
import Home from "layouts/dashboard";
import Launchpad from "layouts/tables";
import Swap from "layouts/billing";
import Staking from "layouts/rtl";
import NFT from "layouts/profile";
import Game from "layouts/authentication/sign-in";
import Faucet from "layouts/authentication/sign-in";

// Vision UI Dashboard React icons
import { IoRocketSharp } from "react-icons/io5";
import { IoIosDocument } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { IoBuild } from "react-icons/io5";
import { BsCreditCardFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { IoHome } from "react-icons/io5";

const routes = [
  {
    type: "collapse",
    name: "Home",
    key: "home",
    route: "/home",
    icon: <IoHome size="15px" color="inherit" />,
    component: Home,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Launchpad",
    key: "launchpad",
    route: "/launchpad",
    icon: <IoStatsChart size="15px" color="inherit" />,
    component: Launchpad,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Swap",
    key: "swap",
    route: "/swap",
    icon: <BsCreditCardFill size="15px" color="inherit" />,
    component: Swap,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Staking",
    key: "staking",
    route: "/staking",
    icon: <IoBuild size="15px" color="inherit" />,
    component: Staking,
    noCollapse: true,
  },
  { type: "title", title: "Comming Soon Project", key: "account-pages" },
  {
    type: "collapse",
    name: "NFT Marketplace",
    key: "nftmarketplace",
    route: "/nftmarketplace",
    icon: <BsFillPersonFill size="15px" color="inherit" />,
    component: NFT,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Game",
    key: "game",
    route: "/game",
    icon: <IoRocketSharp size="15px" color="inherit" />,
    component: Game,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Chart",
    key: "chart",
    icon: <IoIosDocument size="15px" color="inherit" />,
    route: "/chart",
    component: Faucet,
    noCollapse: true,
  },
];

export default routes;
