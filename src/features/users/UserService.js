/* eslint-disable no-undef */
import axios from 'axios';

const register = async (userData) => {
  const reponse = await axios.postz('', userData);
  if (reponse.data) {
    return reponse.data;
  }
};

export const authService = {
  register,
};
