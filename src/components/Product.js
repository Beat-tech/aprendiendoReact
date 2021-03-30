import React from 'react';

import {Box, makeStyles} from '@material-ui/core';
import { Typography, SvgIcon } from '@material-ui/core';

import AltImage from "./icons/AltImage";

const useStyles = makeStyles( (theme) => ({
  imageProduct: {
    width: '163px',
    height: '163px',
    backgroundColor: '#c4c4c4',
    borderRadius: '10px 10px 0px 0px',
    position: 'relative'
  },
  imageIcon: {
    position:'relative',
    top:'65px',
    left:'55px'
  },
  productTextContent: {
    margin: '10 px 15px',
  },
  productDescription: {
    color: theme.palette.grey[300]
  },
  productOffer: {
    color: theme.palette.primary.main,
    lineHeight: '32px',
    fontWeight: '700'
  },
  productPrice: {
    color: theme.palette.grey[300],
    textDecoration: 'line-through'
  }
}));

function Product({icon, product, description, offer, price}){
  const classes = useStyles();
  return(
      <div style={{width: '170px'}}>
        <Box className={classes.imageProduct}>
          <div className={classes.imageIcon}>
            <AltImage />
          </div>
        </Box>
        <Box className={classes.productTextContent}>
          <Typography variant='subtitle1'>Product</Typography>
          <Typography variant='body1' className={classes.productDescription}>Brief description</Typography>
          <Typography variant='body1' className={classes.productOffer}>$300.98</Typography>
          <Typography variant='caption' className={classes.productPrice}>$350.99</Typography>
        </Box>
      </div>
   )
}

export default Product;