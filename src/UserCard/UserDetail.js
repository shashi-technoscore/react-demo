import React from "react";
import {useRef} from "react"


import { motion, useInvertedScale} from "framer-motion";

import {TabbedSection} from "../accordion/AccordionMotion";
import {UserSavedLists} from "./UserSavedList";
import {UserInterests} from "./UserInterests";
import {UserGallery} from "./UserGallery";
import {UserProfileInfo} from "./UserProfileInfo";



const UserDetail = React.memo(() => {
    const inverted = useInvertedScale();    
    const userDetailBoxRef = useRef();

    function handleFlipkAction() {
        if(userDetailBoxRef.current.classList.contains('flip-card')){
            userDetailBoxRef.current.classList.remove('flip-card'); 
        }else{
            userDetailBoxRef.current.classList.add('flip-card'); 
        }
        
      }
      function checkZIndex(latest) {
        if(latest.scaleX < 1)
         userDetailBoxRef.current.classList.remove('flip-card'); 
      }

    return (

        <motion.div
            className="content-container"
            style={{ ...inverted, originY: 0, originX: 0 }}
            onUpdate={checkZIndex}
        >
            <div className ='quickBox-lg' ref = {userDetailBoxRef}>
            <div className="blkHead">
                <div className="col-5"> <a href="#" className="uId">@usersarahthedesignexpert</a> </div>
                <div className="col-5">
                    <a href="#" className="qualty">Quality Category</a>
                    <span className="follo_ck">35K FOLLOWERS</span>
                    <button 
                    className="flipBox"
                     onClick={handleFlipkAction}
                    >Flip</button>
                </div>
            </div>
            <div className="flip-card-inner">
                <div className="userInfoBox flip-card-front">
                    <UserProfileInfo/>
                    <div className="col-5">
                        <UserSavedLists />
                       <UserInterests/>

                        <div className="btmBtns">
                            <a href="#" className="vProfile">Visit Profile</a>
                            <a href="#" className="msg">Message</a>
                        </div>
                    </div>
                </div>

                <div className="userInfoBox flip-card-back">
                    <div className="col-5">
                        <div className="phGallery">
                            <div className="userPhoto_p">
                                <span className="uPhoto"> <img src={require('../images/u_photo.png')} alt=""/> </span>
                                <h3>SARAH FROMME</h3>
                                <p>19 Photos</p>
                            </div>
                            <UserGallery/>
                            <div className="review_c_b">
                                <a href="#" className="rewCount">149 Reviews</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="topRightSection">
                              <TabbedSection />
                         </div>
                        <div className="badges_btn btmBtns">
                            <a href="#" className="vProfile">Visit Profile</a>
                            <a href="#" className="msg">Message</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </motion.div>
    );
});

export default UserDetail;


