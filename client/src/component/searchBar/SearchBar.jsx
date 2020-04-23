import React from "react";
import { Button } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    boxShadow: "none",
    border: "1px solid #cecece73",
    background: "#eee",
    marginBottom: "-2px",
  },
  menuButton: {
    backgroundColor: "#eee",
    border: "1px solid #cecece73",
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    border: "1px solid #cecece73",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.6),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.9),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  action: {
    margin: "0 10px",
    backgroundColor: "#eee",
    border: "1px solid #cecece73",
  },
}));

const SearchBar = ({ input, handleSearchSubmit, handleSeachbarChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Toolbar>
        <Button className={classes.menuButton} variant="contained">
          <SettingsIcon />
        </Button>

        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            value={input}
            onChange={handleSeachbarChange}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <Button
          onClick={handleSearchSubmit}
          className={classes.menuButton}
          variant="contained"
        >
          Go
        </Button>
        <Button
          className={classes.action}
          variant="contained"
          endIcon={<ArrowDownwardIcon />}
        >
          Action
        </Button>
      </Toolbar>
    </div>
  );
};

export default SearchBar;
