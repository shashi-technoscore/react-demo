import * as React from "react";
import { memo, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Link } from "react-router-dom";

import  InvertedBorderRadius  from "../utils/InvertedBorderRadius";
import UserDetailPlaceholder from "./UserDetailPlaceholder";
import { openSpring, closeSpring } from "./animations";
import UserListScreen from "./UserListScreen";
  

export const UserCard = memo(
  ({
    isSelected,
    id,
  }) => {
    const y = useMotionValue(0);
    const zIndex = useMotionValue(isSelected ? 2 : 0);
    // Maintain the visual border radius when we perform the layoutTransition by inverting its scaleX/Y
    const inverted = InvertedBorderRadius(20);

    // We'll use the opened card element to calculate the scroll constraints
    const cardRef = useRef(null);
    function checkZIndex(latest) {
      if (isSelected) {
        zIndex.set(2);
      } else if (!isSelected && latest.scaleX < 1.01) {
        zIndex.set(0);
      }
    }

    // When this card is selected, attach a wheel event listener
    const containerRef = useRef(null);
   
    return (
      <li ref={containerRef} className={`card`}>
        <Overlay isSelected={isSelected} />
        <div className={`card-content-container ${isSelected && "open"}`}>
          <motion.div
            ref={cardRef}
            className="card-content"
            style={{ ...inverted, zIndex, y }}
            layoutTransition={isSelected ? openSpring : closeSpring}
            onUpdate={checkZIndex}
          >
           
           {!isSelected &&  <UserListScreen  id = {id}/>} 
            
           {isSelected && <UserDetailPlaceholder/>}
          </motion.div>
        </div>
        
      </li>
    );
  },
  (prev, next) => prev.isSelected === next.isSelected
);

const Overlay = ({ isSelected }) => (
  <motion.div
    initial={false}
    animate={{ opacity: isSelected ? 1 : 0 }}
    transition={{ duration: 0.1 }}
    style={{ pointerEvents: isSelected ? "auto" : "none" }}
    className="overlay"
  >
    <Link to="./" />
  </motion.div>
);
