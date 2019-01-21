import { formatDate, formatDateToISOSString } from './dateParseFunct';

discribe('date parse' , () => {
    it(' человекоподобный формат', () => {
        expext(formatDate('2015-04-21T06:50:21')).toBe('21.04.2015, 6:50:21');
    })
})
