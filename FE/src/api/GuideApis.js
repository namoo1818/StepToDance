import axios from 'axios';
import { getCookie } from '../cookie';
const API_BASE_URL = 'https://k10a101.p.ssafy.io/api/v1';

const accessToken = getCookie('accessToken');

export const getGuideList = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/guides?limit=10&offset=1`, {
        // headers: {
        //     'Authorization': `Bearer ${accessToken}`,
        // },
    });
    console.log('accessToken', accessToken);
    return response.data;
  } catch (error) {
    console.error('Error fetching guide list:', error);
    throw error; 
  }
};

export const searchTitle = async (title) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/guides?limit=10&offset=1&title=${title}`, {
        // headers: {
        //     'Authorization': `Bearer ${accessToken}`,
        // },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching guide list:', error);
    throw error; 
  }
};

export const searchTitle = async (title) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/guides?limit=10&offset=1&title=${title}`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching guide list:', error);
    throw error; 
  }
};

export const getGuideDetail = async (guideId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/guides/${guideId}`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching guide detail:', error);
    throw error;
  }
};

export const postFeedback = async (guideId, feedbackData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/guides/${guideId}/feedback`, feedbackData);
    return response.data;
  } catch (error) {
    console.error('Error posting feedback:', error);
    throw error;
  }
};
