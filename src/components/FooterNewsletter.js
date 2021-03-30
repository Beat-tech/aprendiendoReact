import React from 'react';

import {InputBase, makeStyles} from '@material-ui/core';
import { Typography, Button } from '@material-ui/core';

import envelope from '../assets/Vector.png';


const useStyles = makeStyles( (theme) => ({
  newsletterImage: {
    height: '56px',
    marginBottom: '15px'
  },
  newsletterColor: {
    width: '100vw',
    height: '363px',
    marginTop: '-5px',
    backgroundColor: theme.palette.primary.main,
  },
  newsletterContent: {
    padding: '15px',
  },
  newsletterTitle: {
    marginBottom: '16px'
  },
  newsletterParagraph: {
    color: theme.palette.secondary.main,
    marginBottom: '16px',
    lineHeight: '26px',
    letterSpacing: '1px'
  },
  newsletterInput: {
    backgroundColor: theme.palette.secondary.main,
    height: '56px',
    borderRadius: '10px',
    marginBottom: '16px'
  },
  newsletterSubscribe: {
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.secondary.main,
    letterSpacing: '0.2em',
    borderRadius: '8px'
  }
}));

function FooterNewsletter({icon, label, text}){
  const classes = useStyles();
  return(
    <div className={classes.newsletterColor}>
      <div className={classes.newsletterContent}>
          <img src={envelope} alt='newsletter' className={classes.newsletterImage}/>
          <Typography variant='h5' className={classes.newsletterTitle}>Sign Up for Newsletter</Typography>
          <Typography variant='body1' className={classes.newsletterParagraph} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
          <InputBase className={classes.newsletterInput} fullWidth/>
          <div style={{display: 'flex', justifyContent:'flex-end'}}>
            <Button variant='contained' size='large' color='secondary' className={classes.newsletterSubscribe}>SUBSCRIBE</Button>
          </div>
      </div>
    </div>
   )

}

export default FooterNewsletter;