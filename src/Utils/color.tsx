export const getStatusColor = (status) => {
    switch (status) {
        case 'Livré':
            return '#4caf50';
        case 'En cours':
            return '#ffeb3b';
        default:
            return '#9e9e9e';
    }
};
