import React from 'react';

import {Grid, makeStyles} from '@material-ui/core';
import { Typography } from '@material-ui/core';

import EfficientIcon from './icons/EfficientIcon';

const useStyles = makeStyles( (theme) => ({
  companyContent: {
    margin: '0px 15px',
    width: '150px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

function CompanyValue({icon, label, text}){
  const classes = useStyles();
  return(
    <div>
      <Grid container xs={12} >
        <section className={classes.companyContent}>
          <EfficientIcon color='primary' className={classes.companyIcon}/>
          <Typography variant='subtitle1' >{label}</Typography>
          <Typography variant='caption' className={classes.companyValuesText}>{text}</Typography>
        </section>
      </Grid>
    </div>
   )
}

export default CompanyValue;