import {DateTime} from "luxon";

export const DATE_FORMAT = 'dd/MM/yyyy'

export const fromISOToFormat = (date, format = DATE_FORMAT) => {
    // console.log('yes')
    return date ? DateTime.fromISO(date).toFormat(format) : null
}

const token = sessionStorage.getItem('token')
export const config = {headers: {Authorization: `Bearer ${token}`}}
