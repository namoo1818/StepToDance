import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import UploadIcon from "@mui/icons-material/Upload";
import MypageIcon from "@mui/icons-material/Person";
import { styled } from "@mui/material/styles";
import styles from "../styles/Footer.module.css";

function Footer() {
  const location = useLocation();

  // 현재 경로에 따라 색상 변경을 위한 로직
  const getIconColor = (path) => {
    return location.pathname === path ? "#E07068" : "#F9EAE1";
  };

  // 현재 경로에 따른 텍스트 색상 결정
  const getTextStyle = (path) => ({
    color: location.pathname === path ? "#E07068" : "#F9EAE1",
  });

  const icons = {
    Home: styled(HomeIcon)({
      color: getIconColor("/home"),
      fontSize: "10vw",
    }),
    Upload: styled(UploadIcon)({
      color: getIconColor("/guideUpload"),
      fontSize: "10vw",
    }),
    Mypage: styled(MypageIcon)({
      color: getIconColor("/mypage"),
      fontSize: "10vw",
    }),
  };

  return (
    <footer className={styles.footer}>
      <Link to="/home" className={styles[`icon-container`]}>
        <icons.Home />
        <span className={styles["icon-text"]} style={getTextStyle("/home")}>
          홈
        </span>
      </Link>
      <Link to="/guideUpload" className={styles[`icon-container`]}>
        <icons.Upload />
        <span
          className={styles["icon-text"]}
          style={getTextStyle("/guideUpload")}
        >
          업로드
        </span>
      </Link>
      <Link to="/mypage" className={styles[`icon-container`]}>
        <icons.Mypage />
        <span className={styles["icon-text"]} style={getTextStyle("/mypage")}>
          마이페이지
        </span>
      </Link>
    </footer>
  );
}

export default Footer;
