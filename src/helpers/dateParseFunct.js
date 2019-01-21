export const formatDate = (stringDate) => {
    let date = new Date(stringDate);
    let dateForUser = date.toLocaleString();
    return dateForUser;
};

export const formatDateToISOSString = (time) => {
    let time1 = time.split(', ');
    let time2 = time1[0].split('.');
    let oursMinSec = time1[1].split(':');
    let newOursMinSec = oursMinSec.map((i) => { 
        if ( i.length === 1) { i = '0' + i; }
            return i;});
    let newTimeForServer = [time2[2], time2[1], time2[0] ].join('-') + 'T' + newOursMinSec.join(':');
    return newTimeForServer;
};
