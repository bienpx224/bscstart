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
    collapedSize: "10px",
    children: [
      {
        title: "Create Launchpad",
        path: '/launchpad/create-lauchpad'
      },
      {
        title: "Create Swap",
        path: '/launchpad/create-swap'
      },
      {
        title: "Create Token",
        path: '/launchpad/create-token'
      },
      {
        title: "Launchpad List",
        path: '/launchpad/launchpad-list'
      },
      {
        title: "Leaderboard",
        path: '/launchpad/loaderboard'
      }
    ]
  },
  {
    type: "collapse",
    name: "Trade",
    key: "trade",
    route: "/trade",
    icon: <BsCreditCardFill size="15px" color="inherit" />,
    component: Swap,
    noCollapse: false,
    children: [
      {
        title: "Exchange",
        path: '/trade/exchange'
      },
      {
        title: "Liquidity",
        path: '/trade/liquidity'
      },

    ]
  },
  {
    type: "collapse",
    name: "Staking",
    key: "staking",
    route: "/staking",
    icon: <IoBuild size="15px" color="inherit" />,
    component: Staking,
    noCollapse: false,
    children: [
      {
        title: "Stake Bs",
        path: '/staking/stake-bs'
      },
    ]

  },
  {
    type: "title",
    title: "Comming Soon Project",
    key: "account-pages"
  },
  {
    type: "collapse",
    name: "NFT Marketplace",
    key: "nftmarketplace",
    route: "/nftmarketplace",
    icon: <BsFillPersonFill size="15px" color="inherit" />,
    component: NFT,
    noCollapse: false,
    children: [
      {
        title: "Create NFT",
        path: '/nftmarketplace/create-nft'
      },
      {
        title: "Marketplace",
        path: '/nftmarketplace'
      },

    ]
  },
  {
    type: "collapse",
    name: "Game",
    key: "game",
    route: "/game",
    icon: <IoRocketSharp size="15px" color="inherit" />,
    component: Game,
    noCollapse: false,
    children: [
      {
        title: "Metaverse",
        path: '/game/metaverse'
      },
      {
        title: "Lottery",
        path: '/game/lottery'
      },
      {
        title: "Prediction",
        path: '/game/prediction'
      }
    ]
  },
  {
    type: "collapse",
    name: "Chart",
    key: "chart",
    icon: <IoIosDocument size="15px" color="inherit" />,
    route: "/chart",
    component: Faucet,
    noCollapse: false,
    children: [
      {
        title: "BSC Chart",
        path: '/chart/bsc-chart'
      },
    ]
  },
];

export default routes;
