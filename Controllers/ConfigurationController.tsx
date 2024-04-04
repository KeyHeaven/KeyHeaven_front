import axiosInstance from '../axiosConfig';

export const getConfigurationById = async (id: string) => {
    const response = await axiosInstance.get(`/configurations/${id.split('/')[3]}`);
    return response.data;
}