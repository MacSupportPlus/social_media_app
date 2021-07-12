import { useState } from "react";
import "./login.css";
import { loginCall } from "../../actions/userActions";
import {useSelector , useDispatch } from "react-redux"
import { CircularProgress } from "@material-ui/core";

export default function Login() {
  const user = useSelector(state => state.users.user)
  const [email, setEmail] = useState('')
  const [passWord, setPassWord] = useState('')
  const isFetching = useSelector(state => state.users.isFetching)

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(loginCall({email, passWord}));
    console.log(`email : ${email} , password : ${passWord}, user : ${user}`)
  } 

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Macsocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on MacSocai.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              handleChange={e => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              handleChange={e => setPassWord(e.target.value)}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );


}