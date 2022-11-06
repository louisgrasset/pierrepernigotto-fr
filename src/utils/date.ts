export const getPeriodDuration = (start: Date, end: Date | undefined) => {
    const duration = new Date((end ? end.getTime() : Date.now()) - start.getTime());
    const years = duration.getFullYear() - 1970;
    const months = duration.getMonth();

    let y ="";
    let m = "";
    if (years > 1) {
        y = `${years} an${years > 1 ? "s" : ""}`;
        if (months >= 1) {
            y+= ", ";
        }
    }

    if (years === 1) {
        y = `${years} an`;
        if (months >= 1) {
            y+= ", ";
        }
    }

    if (months >= 1) {
        m = `${months} mois`;
    }
    return y + m;
};
