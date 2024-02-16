import axios from './axios';

export const getVideosRequest = async () => axios.get(`/videos`);
export const getVideoRequest = async (id) => axios.get(`/videos/${id}`);
export const saveVideoRequest = async (videoLink) => axios.post("/video", videoLink);
// export const verifyVideoRequest = (link) => axios.post(`/videos`, link);
export const deleteVideoRequest = async (id) => axios.delete(`/videos/${id}`);