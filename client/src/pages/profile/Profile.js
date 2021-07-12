import {useState, useEffect} from 'react'
import "./profile.css"
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'
import axios from "axios"
import {useParams} from "react-router"

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const userName = useParams().userName
  
 
  useEffect(() => {
    const fetchUser = async () => {
    const response = await axios.get(`/users?userName=${userName}`); 
    setUser(response.data) 
  };
  
  fetchUser()
},[userName])
  return (
    <>
    
      <Topbar />
      <div className="profile">
      <Sidebar />
      <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img className="profileCoverImg" src={user.coverPicture || PF + "noCover.png"} alt="" />
                <img className="profileUserImg" src={user.profilePicture || PF + "noAvatar.png"} alt="" />
                
             </div>
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName"> {user.userName} </h4>
                <span className="profileInfoDescription">{user.description}</span>
            </div>
            <div className="profileRightBottom">
            <Feed userName={userName}/>
            <Rightbar user={user}/>
            </div>
            
      </div>  
      </div>
 

    </>
  )
}

export default Profile
