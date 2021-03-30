import React from 'react';

import { makeStyles} from '@material-ui/core';
import { Typography, Button } from '@material-ui/core';

import logo from "../assets/DAITOOL_LOGO-11 2.png";
import quickLinks from "../data/QuickLinksData";
import customerArea from "../data/CustomerAreaData";

const useStyles = makeStyles( (theme) => ({
  footerImage: {
    width: '160px',
    marginBottom: '15px'
  },
  footerParagraph: {
    lineHeight: '24px',
    color: theme.palette.grey[900]
  },
  footerQuestions: {
    lineHeight: '28px',
    color: theme.palette.text.primary
  },
  footerLinks: {
    lineHeight: '36px',
    color: theme.palette.grey[700]
  },
  footerTelephone: {
    lineHeight: '28px',
    color: theme.palette.primary.main
  },
  contactButton: {
    color: '#92d2d9'
  }
}));

function FooterLast({icon, label, text}){
  const classes = useStyles();
  return(
    <>
      <img src={logo} alt='logo' className={classes.footerImage}/>
      <Typography variant='body2' className={classes.footerParagraph} gutterBottom>Daitool si the global reference site for high-quality, Japanese brand, industrial tools and supplies. We empower clientes to buid better, anywhere in the world.</Typography>
      <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-start'}}>
          <Typography variant='subtitle1' className={classes.footerQuestions} gutterBottom>QUICK LINKS</Typography>
          {
            quickLinks.map((link) => <Typography variant='body1' className={classes.footerLinks} gutterBottom>{link}</Typography>)
          }
         </div>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-start'}}>
          <Typography variant='subtitle1' className={classes.footerQuestions} gutterBottom>CUSTOMER AREA</Typography>
          {
            customerArea.map((link) => <Typography variant='body1' className={classes.footerLinks} gutterBottom>{link}</Typography>)
          }
        </div>
      </div>

      <Typography variant='body1' className={classes.footerQuestions} gutterBottom>Have any questions?</Typography>
      <Typography variant='body1' className={classes.footerTelephone} gutterBottom>+ 123 456 789</Typography>
      <Button className={classes.contactButton}variant='outlined' color='secondary'>CONTACT</Button>
</>
   )

}

export default FooterLast;