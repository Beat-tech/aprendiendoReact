import React from 'react';

import { makeStyles} from '@material-ui/core';
import { Typography, Button } from '@material-ui/core';

import banner from "../assets/banner.png";

const useStyles = makeStyles( (theme) => ({
  postImage: {
    width: '100vw',
    fontWeight: '700'
  },
  offerText: {
    position: 'absolute',
    top: '120px',
    left: '20px',
    zIndex: 10,
    color: theme.palette.secondary.main,
  },
  offerButton: {
    position: 'absolute',
    top: '160px',
    left: '20px',
    zIndex: 10,
    width: '120px',
    borderRadius: '10px'
  }
}));

function FooterOffers({icon, label, text}){
  const classes = useStyles();
  return(
    <div style={{position:'relative'}}>
        <img src={banner} alt='banner' className={classes.postImage}/>
        <Typography variant='h3' className={classes.offerText}>70% off</Typography>
        <Button variant='contained' color='secondary' className={classes.offerButton}>SUSCRIBE</Button>
    </div>
   )

}

export default FooterOffers;