import axios from 'axios';

const API_BASE_URL = 'https://k10a101.p.ssafy.io/api/v1';

export const getGuideList = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/guides?offset=1`);
    return response.data;
  } catch (error) {
    console.error('Error fetching guide list:', error);
    throw error; 
  }
};

export const getGuideDetail = async (guideId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/guides/${guideId}`);
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
