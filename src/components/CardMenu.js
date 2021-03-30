import React from 'react';

import {Card, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles( (theme) => ({
  coverImage: {
    position: 'absolute',
    top: '0px'
  },
  cardContent: {
    position: 'relative',
    height: '140px',
    width: '90vw',
    margin: '10px',
    borderRadius: '10px',
    backgroundColor: 'black',
    mixBlendMode: 'multiply',
    background: 'linear-gradient(270.13deg, #232323 -5.49%, rgba(35, 35, 35, 0) 50.02%)',
  },
  cardShadow: {
    backgroundColor: 'black',
    opacity: '0.6'
  },
  cardText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '120px',
  },
  cardTitle: {
    position: 'relative',
    zIndex: '10'
  },
  cardSubtitle: {
    position: 'relative',
    color: theme.palette.grey[50],
    letterSpacing: '2px',
    zIndex: '10'
  }
}));

function CardMenu({src, title, subtitle}){
  const classes = useStyles();
  return(
      <Card className={classes.cardContent} elevation={8}>
        <div className={classes.cardShadow}>
          <img src={src} alt={title} className={classes.coverImage}/>
        </div>
        <div className={classes.cardText}>
          <Typography variant='h5' className={classes.cardTitle}>{title}</Typography>
          <Typography variant='body1' className={classes.cardSubtitle}>{subtitle}</Typography>
        </div>
      </Card>
   )
}

export default CardMenu;