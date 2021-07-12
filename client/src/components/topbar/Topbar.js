import React from 'react'
import "./topbar.css"
import {Search, Person, Chat, Notifications} from '@material-ui/icons'
import {Link} from "react-router-dom"

const TopBar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
          <Link to="/" style={{textDecoration :"none"}}>
            <span className="logo">Mac Social Network</span>
          </Link>
      </div>
      <div className="topbarCenter">
          <div className="searchbar">
            <Search className="searchIcon" />
            <input placeholder="Searh for friend, post or video" className="searchInput" />
          </div>
      </div>
      <div className="topbarRight">
          <div className="topbarLinks">
              <span className="topBarLinks">Home Page</span>
              <span className="topBarLinks">TimeLine</span>
          </div>
          <div className="topbarIcons">
              <div className="topbarIconItem">
                  <Person />
                  <span className="topbarIconBadge">1</span>
              </div>
          </div>
          <div className="topbarIcons">
              <div className="topbarIconItem">
                  <Chat />
                  <span className="topbarIconBadge">2</span>
              </div>
          </div>
          <div className="topbarIcons">
              <div className="topbarIconItem">
                  <Notifications />
                  <span className="topbarIconBadge">3</span>
              </div>
          </div>
          <img src="https://images.unsplash.com/photo-1611774119019-461b5dbd3ae8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2775&q=80" alt="" className="topbarimg" />
      </div>
    </div>
  )
}

export default TopBar
