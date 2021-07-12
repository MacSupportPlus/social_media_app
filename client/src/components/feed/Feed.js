import {useState, useEffect} from 'react'
import "./feed.css"
import Share from '../share/Share'
import axios from "axios"
import Post from '../post/Post'


const Feed = ({userName}) => {
  const [posts, setPost] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const response = userName ? await axios.get("/post/profile/"+ userName) : await axios.get("post/timeline/60e4a9842fbef62f28f75581"); 
      setPost(response.data) 
    };
    
    fetchPosts()
  },[userName])
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((post)=> (
          <Post key={post._id} post={post} />
          ))}
      </div>
    </div>
  )
}

export default Feed
