import React from 'react';

import CardMenu from "./CardMenu";

import safety from "../assets/safety-security 2.png";
import janitorial from "../assets/tools-sockets 1.png";
import tools from "../assets/tools1 1.png";
import woodworking from "../assets/woodworking3 1.png";
import gardening from "../assets/gardening2 1.png";
import office from "../assets/cutting-tools 1.png";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles( (theme) => ({
  cardLayout: {
    marginTop: '150px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

function CardMenus(){
  const classes = useStyles();
  return(
    <section className={classes.cardLayout}>
        <CardMenu src={safety} title='Safety' subtitle='Subtítulo'/>
        <CardMenu src={janitorial} title='Janitorial' subtitle='Subtítulo'/>
        <CardMenu src={tools} title='Tools' subtitle='Subtítulo'/>
        <CardMenu src={woodworking} title='Woodworking' subtitle='Subtítulo'/>
        <CardMenu src={gardening} title='Gardening' subtitle='Subtítulo'/>
        <CardMenu src={office} title='Office Supplies' subtitle='Subtítulo'/>
    </section>
   )
}

export default CardMenus;