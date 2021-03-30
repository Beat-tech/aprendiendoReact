import React from 'react';

import {Box, makeStyles} from '@material-ui/core';
import CompanyValue from "./CompanyValue";
import TitleSection from "./TitleSection";

const useStyles = makeStyles( (theme) => ({
  companyIcon: {
    position: 'relative',
    top:'-40px',
  },
}));

function CompanyValues({icon, label, text}){
  const classes = useStyles();
  return(
    <>
      <TitleSection title='Daitool Promise'/>
        <Box style={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'center', alignItems: 'space-around'}}>
          <CompanyValue icon={''} label={'Hight-Quality'} text={'Guranteed'}/>
          <CompanyValue icon={''} label={'Hight-Quality'} text={'Guranteed'}/>
          <CompanyValue icon={''} label={'Hight-Quality'} text={'Guranteed'}/>
          <CompanyValue icon={''} label={'Hight-Quality'} text={'Guranteed'}/>
          <CompanyValue icon={''} label={'Hight-Quality'} text={'Guranteed'}/>
      </Box>
    </>
   )
}

export default CompanyValues;
