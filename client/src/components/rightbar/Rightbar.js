import {useState} from 'react'
import {Users} from "../../dummyData"
import "./rightbar.css"

import Online from "../online/Online"

const Rightbar = ({user}) => {
  
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightBar = () => {
    return(
      <>
        <div className="birthdayContainer">
            <img className="birthdayImg" src={`${PF}/gift.png`} alt="" />
            <span className="birthdayText">
              <b>Johhny wilks</b> and <b>3 other friends</b> have birthdays today.
            </span>
          </div>
          <img className="rightbarAd" src={`${PF}/ad.png`} alt="" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            {Users.map(user=>(
              <Online key={user.id} user={user}/>
            ))}
          </ul>
      </>
    );
    };
    const ProfileRightBar = () => {
      return(
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo"></div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City: </span>
          <span className="rightbarInfoValue">{user.city} </span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From: </span>
          <span className="rightbarInfoValue">C{user.from}</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:  </span>
          <span className="rightbarInfoValue">{user.relationship === 1
           ? "Single"
            : user.relationship === 2
            ? "In Relationship"
            : "-" }</span>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarfollowings">
          <div className="rightbarfollowing">
            <img src={`${PF}/2-unsplash.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Jane Doe</span>
          </div>
       
          <div className="rightbarfollowing">
            <img src={`${PF}/2-unsplash.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Jane Doe</span>
          </div>
      
     
          <div className="rightbarfollowing">
            <img src={`${PF}/2-unsplash.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Jane Doe</span>
          </div>
       
        
          <div className="rightbarfollowing">
            <img src={`${PF}/2-unsplash.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Jane Doe</span>
          </div>
      
          <div className="rightbarfollowing">
            <img src={`${PF}/2-unsplash.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Jane Doe</span>
          </div>
      
          <div className="rightbarfollowing">
            <img src={`${PF}/2-unsplash.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Jane Doe</span>
          </div>

         
        </div>
      </>
      );
    };
  
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightBar/> : <HomeRightBar/> }
    </div>
    </div>
    
  )
}

export default Rightbar
