import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './LoginPage.module.css';

const LoginPage = () => {

    const KAKAO_KEY = import.meta.env.REACT_APP_KAKAO_KEY; // If using Vite
    const KAKAO_REDIRECT_URL = import.meta.env.REACT_APP_KAKAO_REDIRECT_URL; // Adjust based on your build tool
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_KEY}&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code`;
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        checkLoginStatus();
    }, []);

    const checkLoginStatus = async () => {
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token);
    };

    const handleKakaoLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
    };

    return (
        <div className={styles.mainView}>
        <div className={styles.gradientView}>
            <h1 className={styles.appTitle}>STEP</h1>
        </div>
        <div className={styles.middleView}>
            <h2 className={styles.appSubtitle}>TO</h2>
        </div>
        <div className={styles.gradientView}>
            <h1 className={styles.appTitle}>DANCE</h1>
        </div>
        <div className={styles.bottomView}>
        {isLoggedIn ? (
            <div>
                <h1 className={styles.heading}>Welcome!</h1>
                <button className={styles.button} onClick={() => navigate("/home")}>
                Enter Home
                </button>
            </div>
            ) : (
            <div className={styles.formView}>
                <p className={styles.infoText}>Please log in.</p>
                <button className={styles.button} onClick={handleKakaoLogin}>
                Log in with Kakao
                </button>
            </div>
            )}
        </div>
    </div>
  );
};

export default LoginPage;

