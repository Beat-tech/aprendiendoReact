import React from 'react';

import {Box, Card, makeStyles, Typography} from '@material-ui/core';

import hightlightimage from "../assets/301703 2.png";

const useStyles = makeStyles( (theme) => ({
   hightlightImage: {
    position: 'absolute',
    top: '0px'
  },
  hightlightContent: {
    position: 'relative',
    top: '120px',
    height: '230px',
    width: '90vw',
    borderRadius: '10px',
    backgroundColor: 'white',
    mixBlendMode: 'multiply',
    background: 'linear-gradient(270.13deg, #232323 -5.49%, rgba(35, 35, 35, 0) 50.02%)',
  },
  hightlightShadow: {
    backgroundColor: 'white',
    opacity: '0.6'
  },
  hightlightText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '120px',
  },
  hightlightTitle: {
    padding: '0px 23px',
    position: 'relative',
    zIndex: '10',
    color: theme.palette.primary.main,
    fontWeight: '900',
    top: '55px'
  },
  hightlightSubtitle: {
    padding: '0px 23px',
    position: 'relative',
    zIndex: '10',
    top: '55px'
  },
  hightlightParagraph: {
    padding: '0px 23px',
    position: 'relative',
    zIndex: '10',
    color: theme.palette.grey[500],
    top: '55px'
  }
}));

function HightlightProduct(){
  const classes = useStyles();
  return(
    <>
      <Card className={classes.hightlightContent} elevation={8}>
        <div className={classes.hightlightShadow}>
          <img src={hightlightimage} alt='hightlightimage' className={classes.hightlightImage}/>
        </div>
        <div className={classes.cardText}>
          <Typography variant='body1' className={classes.hightlightTitle}>MOST VIEWED CATEGORY</Typography>
          <Typography variant='h4' className={classes.hightlightSubtitle}>Hightlighted Product Category</Typography>
          <Typography variant='body2' className={classes.hightlightParagraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ejusmod
          </Typography>
        </div>
      </Card>
    </>
   )
}

export default HightlightProduct;