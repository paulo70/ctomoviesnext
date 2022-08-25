import axios from "axios";
import API from '../services/api'

const params = {
  api_key: process.env.NEXT_PUBLIC_API_KEY,
  language: "pt-BR",
}


export const getMoviesPerDay = async () => {
  try {
    const response = await API.get(`day`, { params: { ...params } })
    return response
  } catch (error) {
    throw error.response;
  }
};

export const getMoviesPerWeek = async () => {
  try {
    const response = await API.get(`week`, { params: { ...params } })
    return response
  } catch (error) {
    throw error.response;
  }
}
