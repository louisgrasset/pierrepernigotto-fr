export const getPeriodDuration = (start: Date, end: Date | undefined) => {
    const duration = new Date((end ? end.getTime() : Date.now()) - start.getTime());
    const years = duration.getFullYear() - 1970;
    const months = duration.getMonth();
    return `${years} ${years > 1 ? 'ans': 'an'}${months > 0 ? ", "+ months + " mois" : ""}`;
};
