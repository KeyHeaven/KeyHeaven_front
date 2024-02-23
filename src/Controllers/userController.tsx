import axiosInstance from '../../axiosConfig';

export const getUserById = async (id: string) => {
    try {
        const response = await axiosInstance.get(`/users/${id}`);
        return response.data;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export const updateUser = async (id: string, data: any) => {
    try {
        const response = await axiosInstance.patch(`/users/${id}`, data, {
            headers: {
                'Content-Type': 'application/merge-patch+json'
            }
        });
        return response.data;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

