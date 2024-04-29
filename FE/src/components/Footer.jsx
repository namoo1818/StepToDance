import React from "react";
import {Link, useLocation} from 'react-router-dom';
import HomeIcon from '@mui/icons-material/home';
import UploadIcon from '@mui/icons-material/upload';
// import PersonIcon from '@/mui/icons-material/Person';
import { styled, useTheme } from '@mui/material/styles';

function Footer(){
    const theme = useTheme();
    const location = useLocation();

    // 현재 경로에 따라 색상 변경을 위한 로직
    const getIconColor = (path) => {
        return location.pathname === path ? theme.palette.primary.main : theme.palette.primary.contrastText;
    };

    // 현재 경로에 따른 텍스트 색상 결정
    const getTextStyle = (path) => ({
        color: location.pathname === path ? theme.palette.primary.main : theme.palette.primary.contrastText,
    });

    const icons = {
        Home: styled(HomeIcon)({
            color: getIconColor('/home'),
            fontSize: '28px',
          }),
          Upload: styled(UploadIcon)({
            color: getIconColor('/upload'),
            fontSize: '28px',
          }),
        };

    return (
        <footer className="footer">
            <Link to="/home" className="icon-container">
                <icons.Home/>
                <span className="icon-description" style={getTextStyle('/home')}>
                    홈
                </span>
            </Link>
            <Link to="/guideUpload" className="icon-container">
                <icons.Upload/>
                <span className="icon-description" style={getTextStyle('/guideUpload')}>
                    업로드
                </span>
            </Link>
        </footer>
    );
}

export default Footer;