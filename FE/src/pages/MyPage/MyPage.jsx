import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../stores/UserSlice';
import { removeCookie } from '../../cookie';
import styles from './MyPage.module.css'; // Import CSS module
import axios from 'axios';
import { getCookie } from '../../cookie';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/LOGO.png'

const MyPage = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOut = async () => {
    try {
      const accessToken = getCookie('accessToken');
      const response = await axios.post("https://k10a101.p.ssafy.io/api/v1/auth/logout", {}, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        }
      });
      if (response.status === 204) {
        console.log("Logout successful:");
        removeCookie('accessToken', { path: '/' });
        removeCookie('refreshToken', { path: '/' });
        dispatch(logout());
      }
    } catch (error) {
      console.error("Error logging out:", error.response ? error.response.data.message : error.message);
    }
  };

  return (
    <div className={styles.safeArea}>
        <img
        src={logo}
        className={styles.logoimg}
        />
        <div className={styles.title}>
          MYPAGE
        </div>
      <div className={styles.mainView}>
        <img
          alt="Profile"
          src={user.profileImgUrl}
          className={styles.profileImage}
        />
        <button onClick={signOut} className={styles.logoutButton}>
          로그아웃
        </button>
        <div className={styles.headerView}>
          <h1 className={styles.username}>{user.nickname || "No Name"}</h1>
          <p className={styles.rankAndPoints}>RANK 9999{'\n'}1 point</p>
        </div>
        {/* Additional content here */}
      </div>
    </div>
  );
};

export default MyPage;
