import React, { useEffect } from "react";
import axios from "axios";
import { APP_KEY, REDIRECT_URI } from "";
import { useNavigate } from "react-router-dom";
function Auth() {

    const KAKAO_KEY = process.env.REACT_APP_KAKAO_KEY
    const KAKAO_REDIRECT_URL= process.env.REACT_APP_KAKAO_REDIRECT_URL

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_KEY}&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code`
    const navigate = useNavigate();
    const getToken = async () => {
    const token = new URL(window.location.href).searchParams.get("code");
    const res = axios.post(
      "https://kauth.kakao.com/oauth/token",
      {
        grant_type: "authorization_code",
        client_id: APP_KEY,
        redirect_uri: REDIRECT_URI,
        code: token,
      },
      {
        headers: {
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      }
    );
    return res;
  };

  useEffect(() => {
    getToken()
      .then((res) => {
        if (res) {
          localStorage.setItem("token", JSON.stringify(res.data.access_token));
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return <></>;
}

export default Auth;
