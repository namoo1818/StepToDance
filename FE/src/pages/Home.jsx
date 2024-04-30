import React from "react";
import { Link } from "react-router-dom";
import VideoList from "./VideoList";
import Footer from "../components/Footer";

function Home(){
    return (
        <div>
            <div>홈</div>
            <VideoList/>
            <Footer/>
        </div>
    );
}

export default Home;