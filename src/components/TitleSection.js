import React from 'react';

import {Typography, makeStyles} from '@material-ui/core';

const useStyles = makeStyles( (theme) => ({
  titleBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  titleSection: {
    fontSize: '18px',
    color: '#C4C4C4',
    margin: '20px 0px'
  },
}));

function TitleSection({title}){
  const classes = useStyles();
  return(
    <div className={classes.titleBox}>
      <Typography className={classes.titleSection}>{title}</Typography>
    </div>
   )
}

export default TitleSection;
