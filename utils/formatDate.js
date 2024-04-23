const formatDate = date => {
    if (!date) return '';
    const d = new Date(date);

    return d.toLocaleDateString(undefined, {
        month: 'long',
        year: 'numeric',
    });
};

export default formatDate;