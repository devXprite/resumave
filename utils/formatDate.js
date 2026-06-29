const formatDate = date => {
    if (!date) return '';
    if (date === 'Present') return 'Present';
    const d = new Date(date);

    return d.toLocaleDateString(undefined, {
        month: 'long',
        year: 'numeric',
    });
};

export default formatDate;