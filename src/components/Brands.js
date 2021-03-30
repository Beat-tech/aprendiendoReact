import React from 'react';

import {makeStyles} from "@material-ui/core";
import { Box } from "@material-ui/core";

import pentel from "../assets/Mask Group.png";
import vessel from "../assets/descarga 1.png";
import olfa from "../assets/logo 2.png";
import anex from "../assets/logo (1) 1.png";
import mitutoyo from "../assets/Mitutoyo_company_logo 1.png";
import tone from "../assets/hdr_logo 1.png";
import TitleSection from "./TitleSection";

const useStyles = makeStyles( (theme) => ({
  brandContent: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  brandImage: {
    height: '30px',
    margin: '15px 20px',
  },
  brandColumn: {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  }
}));

function Brands(){
  const classes = useStyles();
  return(
    <>
      <TitleSection title='Our Brands'/>
      <Box className={classes.brandContent}>
        <Box className={classes.brandColumn} >
          <img src={pentel} alt='pentel' className={classes.brandImage}/>
          <img src={olfa} alt='olfa' className={classes.brandImage}/>
          <img src={mitutoyo} alt='mitutoyo' className={classes.brandImage}/>
        </Box>
        <Box className={classes.brandColumn} >
          <img src={vessel} alt='vessel' className={classes.brandImage}/>
          <img src={anex} alt='anex' className={classes.brandImage}/>
          <img src={tone} alt='tone' className={classes.brandImage}/>
        </Box>
      </Box>
    </>
   )
};

export default Brands;