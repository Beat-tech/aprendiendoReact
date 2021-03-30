import React from 'react';
import {IconButton, InputBase, Toolbar, AppBar, makeStyles} from "@material-ui/core";

import Menu from "./icons/Menu";
import Search from "./icons/Search";
import User from "./icons/User";
import Cart from "./icons/Cart";

import logo from "../assets/DAITOOL_LOGO-07 1.png";

const useStyles = makeStyles( (theme) => ({
  navBar: {
    height: '150px',
    padding: '16px 16px 8px 8px',

  },
  navBarImage: {
    width: '125px',
    marginLeft: '8px',
  },
  search: {
    backgroundColor: 'white',
    height: '44px',
    borderRadius: '20px',
    marginRight: '10px'
  },
  iconSearch: {
    display: 'absolute',
    right: '120px',
    outline: '2px solid red',
  },
}));

function NavBar(){
  const classes = useStyles();
  return(
      <AppBar className={classes.navBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu/>
          </IconButton>
          <img src={logo} alt='cover' className={classes.navBarImage}/>
          <IconButton edge="end" color="inherit" aria-label="menu">
            <User/>
            <Cart/>
          </IconButton>
        </Toolbar>
        <Toolbar>
          <InputBase className={classes.search} fullWidth/>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Search/>
          </IconButton>
        </Toolbar>
      </AppBar>
   )
}

export default NavBar;