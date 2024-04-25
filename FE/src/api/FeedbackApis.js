import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE_URL = 'https://k10a101.p.ssafy.io/api/v1';

export const getFeedbackDetail = async (feedbackId) => {
    try {
        const accessToken = await AsyncStorage.getItem('accessToken');
        const response = await axios.get(`${API_BASE_URL}/feedbacks/${feedbackId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (error){
        console.log('Error fetching feedback detail:', error);
        throw error;
    }
};

export const deleteFeedback = async (feedbackId) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/feedbacks/${feedbackId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (error) {
        console.log('Error deleting feedback:', error);
        throw error;
    }
};