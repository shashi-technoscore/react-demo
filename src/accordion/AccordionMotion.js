import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useTransform, useMotionValue, useSpring, useAnimation  } from "framer-motion";
import { AccordionMotionSection } from "./AccordionMotionSection";
import { UserBadges } from "../UserCard/UserBadges";

const Accordion = ({ i, expanded, setExpanded, scrollParent}) => {
  const isOpen = i === expanded;
  

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  
  //const motion = useMotionValue(scrollParent.current.scrollTop);
  //const spring = useSpring(motion)
  /*
  useEffect(() => {
    spring.onChange(value => scrollParent.scrollTop = value)
    motion.set(scrollParent)
  }, [])
  */

 function scrollParentToChild(parent, child) {

  // Where is the parent on page
  var parentRect = parent.getBoundingClientRect();
  // What can you see?
  var parentViewableArea = {
    height: parent.clientHeight,
    width: parent.clientWidth
  };

  // Where is the child
  var childRect = child.getBoundingClientRect();
  // Is the child viewable?
  var isViewable = (childRect.top >= parentRect.top) && (childRect.top <= parentRect.top + parentViewableArea.height);

  // if you can't see the child try to scroll parent
  if (!isViewable) {
    // scroll by offset relative to parent
    parent.scrollTop = (childRect.top + parent.scrollTop) - parentRect.top
  }


}

  useEffect(() => {
    const childElement = document.getElementById('headerElm'+i);
    const parentElement = document.getElementById('tabSectionScroll');
    scrollParentToChild(parentElement, childElement)   
   
    
  });
  return (
    <>
      <motion.header
        initial={false}
        key={'header'+i}
        id={'headerElm'+i}
        onClick={() => setExpanded(isOpen ? false : i)} 
        >
        <h5>Tab Header {i+1}</h5>
        </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key={"content"+i}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <AccordionMotionSection />
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export const TabbedSection = () => {
  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.
  const [expanded, setExpanded] = useState(false);
  
  const scrollParent = useRef(null);

  const UserTabs = accordionIds.map(i => (
        <Accordion key={"accord"+i} i={i} expanded={expanded} setExpanded={setExpanded} scrollParent={scrollParent} 
        />
  ));
     return(
        <motion.div
          ref={scrollParent}
          id = "tabSectionScroll" className={expanded ? "tabSection extended style-3" : "tabSection style-3 extended" }>
         <div className={expanded ? "tabContentArea extended" : "tabContentArea extended" }>  
             <UserBadges expanded={0, expanded} setExpanded={setExpanded}  />
              {UserTabs}
         </div>
         </motion.div>
     );

};

const accordionIds = [0, 1, 2, 3];
