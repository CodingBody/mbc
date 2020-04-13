import React from "react";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import VideocamIcon from "@material-ui/icons/Videocam";
import LanguageIcon from "@material-ui/icons/Language";
import ControlCameraIcon from "@material-ui/icons/ControlCamera";
import CategoryIcon from "@material-ui/icons/Category";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";
import DateRangeIcon from "@material-ui/icons/DateRange";
import { v4 as uuidv4 } from "uuid";

export const navbarItem = [
  {
    link: "Home",
    icon: <HomeOutlinedIcon />,
    id: uuidv4(),
  },
  {
    link: "CP",
    icon: <VideocamIcon />,
    id: uuidv4(),
    subLink: ["CP Present Condition"],
  },
  {
    link: "Store",
    icon: <LanguageIcon />,
    id: uuidv4(),
    subLink: ["Store Present Condition"],
  },
  { link: "Machine", icon: <ControlCameraIcon />, id: uuidv4(), subLink: null },
  { link: "Category", icon: <CategoryIcon />, id: uuidv4(), subLink: null },
  { link: "Content", icon: <MovieFilterIcon />, id: uuidv4(), subLink: null },
  {
    link: "Program Table",
    icon: <DateRangeIcon />,
    id: uuidv4(),
    subLink: null,
  },
  { link: "App User", icon: <DateRangeIcon />, id: uuidv4(), subLink: null },
  {
    link: "App Manage",
    icon: <DateRangeIcon />,
    id: uuidv4(),
    subLink: ["Event Banner", "Notice", "Artist"],
  },
  {
    link: "Asset Upload",
    icon: <DateRangeIcon />,
    id: uuidv4(),
    subLink: ["Asset VOD", "Asset Image", "Asset File"],
  },
  {
    link: "Statistics",
    icon: <DateRangeIcon />,
    id: uuidv4(),

    subLink: ["Rack", "Login Statistics", "Content Statistics"],
  },
  { link: "Log Manage", icon: <DateRangeIcon />, id: uuidv4(), subLink: null },
  {
    link: "Administration",
    icon: <DateRangeIcon />,
    id: uuidv4(),
    subLink: null,
  },
];
