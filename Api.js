import axios from 'axios';

const API_BASE_URL = 'http://<YOUR_API_URL>'; // Replace with your backend URL

export const calculateExpression = async (expression, sessionId) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/calculate`, {
      expression,
      session_id: sessionId,
    });
    return response.data;
  } catch (error) {
    console.error('Error calculating expression:', error.response?.data || error.message);
    throw error;
  }
};
