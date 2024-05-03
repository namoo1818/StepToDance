import React from "react";
import { Link } from "react-router-dom";
import Hot5Guides from "../components/guide/Hot5Guides";
import GuideList from "../components/guide/GuideList";
import styles from "../styles/Home.module.css";

function Home(){
    return (
        <div className={styles.homeContainer}>
            <Hot5Guides/>
            <GuideList/>
        </div>
    );
}

export default Home;