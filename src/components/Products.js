import React, {useState} from 'react';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import Product from "./Product";
import TitleSection from "./TitleSection";

const itemsProducts = [
  <Product product='Product' description='Brief description' offer='$300.98' price='$350.98'/>,
  <Product product='Product' description='Brief description' offer='$300.98' price='$350.98'/>,
  <Product product='Product' description='Brief description' offer='$300.98' price='$350.98'/>,
  <Product product='Product' description='Brief description' offer='$300.98' price='$350.98'/>,
  <Product product='Product' description='Brief description' offer='$300.98' price='$350.98'/>,
]

function Products(){
  return(
    <>
      <TitleSection title='Top 10 Products'/>
      <AliceCarousel
        autoPlay
        animationDuration={1500}
        animationType="fadeout"
        infinite
        autoWidth
        mouseTracking
        disableDotsControls
        disableButtonsControls
        items={itemsProducts}
      />
    </>
   )
}

export default Products;