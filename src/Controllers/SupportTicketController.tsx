import axiosInstance from '../../axiosConfig';

export const addSupportTicket = async (userId: string, subject: string, message: string, purchaseDetailId: string | undefined) => {
    try {
        const response = await axiosInstance.post('/support_tickets', {
            user: `/api/users/${userId}`,
            subject,
            message,
            status: 'OPEN',
            purchaseDetail: purchaseDetailId ? `/api/purchase_details/${purchaseDetailId}` : null
        }, {
            headers: {
                'Content-Type': 'application/ld+json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la création du ticket de support :', error);
        throw error;
    }
}

export const getAllSupportTicketsByUser = async (userId: string) => {
    try {
        const response = await axiosInstance.get(`/support_tickets?user=/api/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des tickets de support :', error);
        throw error;
    }
}

export const getTicketDetail = async (ticketId: string) => {
    try {
        const response = await axiosInstance.get(`/support_tickets/${ticketId}`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération du détail du ticket :', error);
        throw error;
    }
}