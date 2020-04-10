import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const slideData = [
  {
    title: "Video title goes here. It's 16pt and bold. Ideally we would keep it short.But if it's too long add",
    videoUrl: ""
  },
  {
    title: "Video title goes here. It's 16pt and bold. Ideally we would keep it short.But if it's too long add",
    videoUrl: ""
  },
  {
    title: "Sample Video title",
    videoUrl: ""
  },

]
export const AccordionMotionSection = () => {
  function showMoreTitle(itemIndex){
      setExpanded(expanded == itemIndex ? -1 : itemIndex);
      console.log(itemIndex);
  }
  const [expanded, setExpanded] = useState(-1);
  return (
    <motion.div
      variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
      transition={{ duration: 0.8 }}
      className="content-placeholder"
    >
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
        visibleSlides={1.5}
      >
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
        <DotGroup />
        <Slider>
          {
            slideData.map((item, i) => (
              <Slide index={i} 
              key={"slide"+i}
              >
                <div className="tabContant" >
                  <div className="contBox">
                    <p>
                      {
                        expanded == i ?
                        <span className="titleFull">{item.title + " "}</span>  
                        :<span className="titleShort">{item.title.substring(0, 25)}</span>
                      }
                    {
                      item.title.length > 60 && <strong class = "seeMore" onClick = {()=>showMoreTitle(i)} > {expanded == i ? " See less" : "... See more"}</strong>
                    }
                      </p>
                    <div className="video"></div>
                  </div>
                </div>

              </Slide>

            ))
          }
        </Slider>

      </CarouselProvider>
    </motion.div>
  );

};
