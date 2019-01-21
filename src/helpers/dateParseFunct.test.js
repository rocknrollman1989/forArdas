import { formatDate, formatDateToISOSString } from './dateParseFunct';


    it(' человекоподобный формат', () => {
        expect(formatDate('2015-04-21T06:50:21')).toEqual('21.04.2015, 6:50:21');
    });

    it('Время для сервера', () => {
        expect(formatDateToISOSString('21.04.2015, 6:50:21')).toEqual('2015-04-21T06:50:21');
    });


