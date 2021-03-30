import React, {useState} from 'react';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import TitleSection from "./TitleSection";
import BlogPost from "./BlogPost";

const items = [
  <BlogPost/>,
  <BlogPost/>,
  <BlogPost/>,
  <BlogPost/>,
  <BlogPost/>,
  <BlogPost/>,
];

function BlogPosts(){
  return(
    <>
      <TitleSection title='Blog Post'/>
      <AliceCarousel
        disableButtonsControls
        autoWidth
        mouseTracking
        disableDotsControls
        items={items}
      />
    </>
   )
}

export default BlogPosts;