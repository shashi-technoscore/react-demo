import React from 'react';
import { Link } from "react-router-dom";

export default class UserListScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isFollowing: false};
      this.handleFollowAction = this.handleFollowAction.bind(this);

    }
    handleFollowAction(){
        this.setState({
            isFollowing: !this.state.isFollowing
        });
    }

    render() {
        return (
            <div>
            <div className="cardBox">
            <img src={require('../images/Brand_Main_Image@2x.png')} alt=""/>
                <div className="userPhoto">
                    <img src={require('../images/Brand_Image_1@2x.png')} alt=""/>
                    </div>
                <div className="userid">
                    <a href="#" className="userhash" >@usernamegoeshere</a>  
                    <Link to={this.props.id} className="quickView">View</Link>
                </div>
                
                <Link to={''+this.props.id} className={`overBox`} >
                    <div className="userInfo">
                        <img src={require('../images/Brand_Image_1_bs.png')} alt=""/>
                        <h4>Sarah Fromme</h4>
                        <p>Certified Design Expert</p>
                    </div>
                    <ul className="followCount">
                        <li className="follw_c">35K Followers</li>
                        <li className="review_c">149 Reviews</li>
                    </ul>
                </Link>
            </div>
                <button className= {this.state.isFollowing ? 'f_btn active_f' : 'f_btn'}  onClick={this.handleFollowAction}>{this.state.isFollowing ? 'Following' : 'Follow'}</button>
            </div>  
            
        
           
        );

    }
  }