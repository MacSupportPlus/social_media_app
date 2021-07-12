import React from 'react'
import "./share.css"
import {PermMedia, Label, Room, EmojiEmotions} from "@material-ui/icons"

const Share = () => {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImg" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80" alt="" />
                <input className="shareInput" placeholder="whats on your mind?" />
            </div>
            <hr className="shareHr"/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor="indigo" className="shareIcon" />
                        <span className="shareOptionText"> Photo or Video </span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor="indigo" className="shareIcon" />
                        <span className="shareOptionText"> Tag </span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor="indigo" className="shareIcon" />
                        <span className="shareOptionText"> Location </span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor="indigo" className="shareIcon" />
                        <span className="shareOptionText"> Emojiesssss </span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
     
    </div>
  )
}

export default Share
