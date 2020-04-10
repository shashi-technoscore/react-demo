import * as React from "react";

export const UserProfileInfo = () => {
    return(
        <div
        className="col-5"
         >

        <div className="profileArea">
            <div className="proPic">
                <img src={require('../images/Brand_Main_Image@2x.png')} alt=""/>
                <span className="ageBox"> <label>Age</label> 32 </span>
                <span className="cuntyBox"> <label>COUNTRY</label> US </span>
                <span className="follow_st">Following</span>
            </div>
        </div>
        <div className="profileDespArea">
            <h3>CERTIFIED DESIGN EXPERT</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi.</p>
            <a href="#" className="rewCount">149 Reviews</a>
        </div>
        </div>

    
    );
};



