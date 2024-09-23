export const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };
    return date.toLocaleDateString("es", options);
}