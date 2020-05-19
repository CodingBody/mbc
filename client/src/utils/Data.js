import React from "react";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import VideocamIcon from "@material-ui/icons/Videocam";
import LanguageIcon from "@material-ui/icons/Language";
import ControlCameraIcon from "@material-ui/icons/ControlCamera";
import CategoryIcon from "@material-ui/icons/Category";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";
import DateRangeIcon from "@material-ui/icons/DateRange";
import EventNoteIcon from "@material-ui/icons/EventNote";
import { v4 as uuidv4 } from "uuid";

export const navbarItem = [
  {
    link: "Home",
    params: "home",
    icon: <HomeOutlinedIcon />,
    id: uuidv4(),
  },
  {
    link: "CP",
    params: "CP",

    icon: <VideocamIcon />,
    id: uuidv4(),
    subLink: ["CP Present Condition"],
  },
  {
    link: "Store",
    params: "store",

    icon: <LanguageIcon />,
    id: uuidv4(),
    subLink: ["Store Present Condition"],
  },
  {
    link: "Machine",
    params: "machine",

    icon: <ControlCameraIcon />,
    id: uuidv4(),
    subLink: null,
  },
  {
    link: "Category",
    params: "category",

    icon: <CategoryIcon />,
    id: uuidv4(),
    subLink: null,
  },
  {
    link: "Content",
    params: "content",

    icon: <MovieFilterIcon />,
    id: uuidv4(),
    subLink: null,
  },
  {
    link: "Program Table",
    params: "program_table",
    icon: <EventNoteIcon />,
    id: uuidv4(),
    subLink: null,
  },
  {
    link: "App User",
    params: "appuser",

    icon: <DateRangeIcon />,
    id: uuidv4(),
    subLink: null,
  },
  {
    link: "App Manage",
    params: "appmanage",
    icon: <DateRangeIcon />,
    id: uuidv4(),
    subLink: [
      { link: "Event Banner", params: "appmanage.event_banner", id: uuidv4() },
      { link: "Notice", params: "appmanage.notice", id: uuidv4() },
      { link: "Artist", params: "appmanage.artist", id: uuidv4() },
    ],
  },
  {
    link: "Asset Upload",
    params: "asset_upload",

    icon: <DateRangeIcon />,
    id: uuidv4(),
    subLink: ["Asset VOD", "Asset Image", "Asset File"],
  },
  {
    link: "Statistics",
    params: "statistics",

    icon: <DateRangeIcon />,
    id: uuidv4(),

    subLink: ["Rack", "Login Statistics", "Content Statistics"],
  },
  {
    link: "Log Manage",
    params: "logmanage",

    icon: <DateRangeIcon />,
    id: uuidv4(),
    subLink: null,
  },
  {
    link: "Administration",
    params: "administration",

    icon: <DateRangeIcon />,
    id: uuidv4(),
    subLink: null,
  },
];
