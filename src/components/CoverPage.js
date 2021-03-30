import React, {Fragment} from 'react';

import { makeStyles} from '@material-ui/core';
import { Typography} from '@material-ui/core';

import covermb from '../assets/covermb.png';


const useStyles = makeStyles( (theme) => ({
  coverImage: {
    position: 'relative',
    top:'120px',
    width: '100vw',
    mixBlendMode: 'multiply',
    background: 'linear-gradient(270.13deg, #232323 -5.49%, rgba(35, 35, 35, 0) 50.02%)'
  },
  coverText: {
    position: 'absolute',
    left: '130px',
    top: '380px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  coverLink: {
    textDecoration: 'underline'
  }
}));

function CoverPages(){
  const classes = useStyles();
  return(
    <Fragment>
      <div style={{position:'relative'}}>
        <img src={covermb} alt='cover' className={classes.coverImage}/>
        <div className={classes.coverText}>
          <Typography variant='h1' className={classes.coverTitle}>New Products</Typography>
          <Typography variant='h2' className={classes.coverSubTitle}>Japan</Typography>
          <Typography variant='subtitle2' className={classes.coverLink}>Discover now</Typography>
        </div>
      </div>

    </Fragment>
   )
}

export default CoverPages;