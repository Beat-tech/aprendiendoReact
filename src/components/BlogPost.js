import React from 'react';

import { makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import post from '../assets/SBsVi4kmkY 1.png';

const useStyles = makeStyles( (theme) => ({
  postImage: {
    width: '336px',
  },
}));

function BlogPost(){
  const classes = useStyles();
  return(
    <div style={{width: '350px'}}>
        <img src={post} alt='post' className={classes.postImage}/>
        <Typography variant='subtitle1'>Blog post publication 1</Typography>
        <Typography variant='caption' className={classes.productDescription}>Author</Typography>
    </div>
   )
}

export default BlogPost;