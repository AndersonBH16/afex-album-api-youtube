import axios from './axios';

export const getVideosRequest = async () => axios.get(`/videos`);
export const getVideoRequest = async (id) => axios.get(`/video/${id}`);
export const saveVideoRequest = async (videoLink) => axios.post("/video", videoLink);
// export const verifyVideoRequest = (link) => axios.post(`/videos`, link);
export const deleteVideoRequest = async (videoId) => axios.delete(`/video/${videoId}`);