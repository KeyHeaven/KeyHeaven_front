import axiosInstance from '../../axiosConfig';

const addSupportTicket = async (userId: string, subject: string, message: string) => {
    try {
        const response = await axiosInstance.post('/support_tickets', {
            user: `/api/users/${userId}`,
            subject,
            message,
        });
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la création du ticket de support :', error);
        throw error;
    }
}