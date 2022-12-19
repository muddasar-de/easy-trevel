import React from "react";
import useStyles from "./styles";
import { Autocomplete } from "@react-google-maps/api";
import { Box, AppBar, Toolbar, Typography, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Easy Trevel
        </Typography>
        <Box className={classes.box}>
          <Typography variant="h6" className={classes.title}>
            Explore New Places
          </Typography>
          {/* <Autocomplete> */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..."
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            />
          </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
