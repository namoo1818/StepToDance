import { useEffect } from "react";
import axios from "axios";

const GudieApiRequest = () => {

    useEffect(()=>{
        getGuideList();
        getGuideDetail();
        postFeedback();
    },[]);

    const getGuideList = async()=> {
        try{
            const response = await axios.get('http://k10a101.p.ssafy.io/api/v1/guides');
            console.log(response.data);
        } catch (error){
            console.log(error);
        }
    }

    const getGuideDetail = async(guideId)=>{
        try{
            const response = await axios.get(`http://k10a101.p.ssafy.io/api/v1/guides/${guideId}`);
            console.log(response.data);
        } catch (error){
            console.log(error);
        }
    }

    const postFeedback = async(guideId)=>{
        const data = {
            startAt: '',
            endAt: '',
            videoUrl: '',
        };

        try {
            const response = await axios.post(`http://k10a101.p.ssafy.io/api/v1/guides/${guideId}`);
            console.log(response.data);
        } catch(error){
            console.log(error);
        }
    }
}

export default GudieApiRequest;