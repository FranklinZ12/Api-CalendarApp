import moment from 'moment';

const isDate = (date) => {
    if (!date) {
        return false;
    }

    const fecha = moment(date);
    if (fecha.isValid()) {
        return true;
    } else {
        return false;
    }
}
export default isDate;