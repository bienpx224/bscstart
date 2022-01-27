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
import { FaExchangeAlt } from "react-icons/fa";
import { BiPhotoAlbum } from "react-icons/bi";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoHome } from "react-icons/io5";
import { IoGameControllerSharp } from "react-icons/io5";
import { IoBarChart } from "react-icons/io5";



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
    icon: <IoRocketSharp size="15px" color="inherit" />,
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
    icon: <FaExchangeAlt size="15px" color="inherit" />,
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
    name: "Stake",
    key: "stake",
    route: "/stake",
    icon: <GiTakeMyMoney size="15px" color="inherit" />,
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
    type: "collapse",
    name: "NFT",
    key: "nft",
    route: "/nft",
    icon: <BiPhotoAlbum size="15px" color="inherit" />,
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
    icon: <IoGameControllerSharp size="15px" color="inherit" />,
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
    icon: <IoBarChart size="15px" color="info" />,
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
