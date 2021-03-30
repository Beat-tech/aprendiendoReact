import React from 'react';
import CompanyValues from './CompanyValues';



export default {
  title: 'CompanyValues',
  component: 'CompanyValues',
};

const Template = (args) => <CompanyValues {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon:'<EfficientIcon/>',
  label:'Efficient',
  text:'International Shipping'
}