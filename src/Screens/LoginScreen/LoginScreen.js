import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../redux/actions/auth.action";
import "./_loginScreen.scss";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.accessToken);
  const handleLogin = () => {
    dispatch(login());
  };
  const history = useHistory();
  useEffect(() => {
    if (accessToken) {
      history.push("/");
    }
  }, [accessToken, history]);
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
          alt="Yt"
        />
        <button onClick={handleLogin}>Login With Google</button>
        <p>A project with YT API.</p>
      </div>
    </div>
  );
};

export default LoginScreen;
