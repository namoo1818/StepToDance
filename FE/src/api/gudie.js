import { useEffect } from "react"

const GudieApiRequest = () => {
    useEffect(()=>{
        getGuideList();
        getGuideDetail();
        postFeedback();
    },[]);
}