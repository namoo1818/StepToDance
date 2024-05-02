import React from "react";
import { Link } from "react-router-dom";
import Hot5Guides from "../components/guide/Hot5Guides";
import GuideList from "../components/guide/GuideList";

function Home(){
    return (
        <div>
            <Hot5Guides/>
            <GuideList/>
        </div>
    );
}

export default Home;