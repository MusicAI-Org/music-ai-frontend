import { FiHome } from "react-icons/fi";
import { BiCast } from "react-icons/bi";
import { MdGroups } from "react-icons/md";
import { ImMusic } from "react-icons/im";
import { FaRobot, FaGlobe, FaUserFriends } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { IoAnalyticsSharp } from "react-icons/io5";
import { RiSecurePaymentFill } from "react-icons/ri";

export const NavLinks = [
  {
    id: "1",
    navSize: "small",
    icon: FiHome,
    title: "Dashboard",
    description: "Playlists, Tracks, Albums",
    active: true,
    route: "/",
  },
  {
    id: "2",
    navSize: "small",
    icon: BiCast,
    title: "Streaming",
    description: "Watch Live Stream and Live Music",
    active: false,
    route: "/streaming",
  },
  {
    id: "3",
    navSize: "small",
    icon: MdGroups,
    title: "Showcase your music to the community",
    description: "Music Groups",
    active: false,
    route: "/join-communities",
  },
  {
    id: "4",
    navSize: "small",
    icon: FaUserFriends,
    title: "Friends",
    description: "Chat with your friends",
    active: false,
    route: "/friends",
  },
  {
    id: "5",
    navSize: "small",
    icon: ImMusic,
    title: "Music Creation",
    description: "Create/Upload Personalized Music",
    active: false,
    route: "/create-music",
  },
  {
    id: "6",
    navSize: "small",
    icon: IoAnalyticsSharp,
    title: "Analytics",
    description: "Analyse your music with our advanced graphs",
    active: false,
    route: "/analytics",
  },
  {
    id: "7",
    navSize: "small",
    icon: FaGlobe,
    title: "Community",
    description: "See people all over the globe",
    active: false,
    route: "/globe",
  },
  {
    id: "8",
    navSize: "small",
    icon: FaRobot,
    title: "Learn Music",
    description: "AI Teaching Assistant and Google Search",
    active: false,
    route: "/learn-music",
  },
  {
    id: "9",
    navSize: "small",
    icon: BsYoutube,
    title: "Youtube Music Search",
    description: "Explore music from youtube",
    active: false,
    route: "/search-music",
  },
  {
    id: "10",
    navSize: "small",
    icon: RiSecurePaymentFill,
    title: "Payments",
    description: "Buy our premium services",
    active: false,
    route: "/premium",
  },
];
