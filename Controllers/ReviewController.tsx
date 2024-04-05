import axiosInstance from '../axiosConfig';

export const getReviewsByGameId = async (id: string) => {
    try {
        const response = await axiosInstance.get(`/reviews?game=${id}`);
        return response.data;
    } catch (error: any) {
        throw new Error('Erreur lors de la récupération des avis :', error.code);
    }
}

export const addReview = async (gameId: number, userId: number, rating: number, comment: string) => {
    try {
        const data = {
            "gameId": '/api/games/' + gameId,
            "userId": '/api/users/' + userId,
            "note": rating,
            "comment": comment,
            "submitAt": new Date().toISOString()
        };
        console.log('Data:', data);
        const response = await axiosInstance.post('/reviews', data, {
            headers: {
                'Content-Type': 'application/ld+json'
            }

        });
        return response.data;
    } catch (error: any) {
        throw new Error('Erreur lors de l\'ajout de l\'avis :', error.title);
    }
}