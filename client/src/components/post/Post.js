import {useState, useEffect} from 'react'
import "./post.css"
import {MoreVert} from "@material-ui/icons"
import axios from "axios"
import {format} from "timeago.js"
import {Link} from "react-router-dom"


const Post = ({post}) => {
  const [like, setLike] = useState(post.likes.length)
  const [user, setUser] = useState({})
  const[isLiked, setIsLiked] = useState(false)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
      const fetchUser = async () => {
      const response = await axios.get(`/users?userId=${post.userId}`); 
      setUser(response.data) 
    };
    
    fetchUser()
  },[post.userId])

  const likeHandler = () => {
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <Link to={`profile/${user.userName}`}>
                    <img className="postProfileImg" src={user.profilePicture || PF+"noAvatar.png"}  alt="" />
                    </Link>
                    <span className="postUsername">
                    {user.userName}
                      </span>
                    <span className="postDate"> {format(post.createdAt)} </span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImg" src={PF+post.img} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src={`${PF}/like.png`} onClick={likeHandler} alt="" />
                    <img className="likeIcon" src={`${PF}/heart.png`} onClick={likeHandler} alt="" />
                    <span className="postLikeCounter">{like} the post </span>
                </div>
                <div className="postBottomRight"></div>
                <span className="postCommentText">{post.comment} comments </span>
            </div>
      </div>
    </div>
  )
}

export default Post
