import {DateTime} from "luxon";

export const DATE_FORMAT = 'dd/MM/yyyy'

export const fromISOToFormat = (date, format = DATE_FORMAT) => {
    // console.log('yes')
    return date ? DateTime.fromISO(date).toFormat(format) : null
}

const token = sessionStorage.getItem('token')
export const config = {headers: {Authorization: `Bearer ${token}`}}

export const columnsDoctor = [
    {id: 'appointment_day', label: 'Data visita', align: 'left'},
    {id: 'patient_id', label: 'Nome Paziente', align: 'left'},
    // TODO enum --> crea variabili
    {id: 'appointment_type', label: 'Tipologia', align: 'left'},
    {id: 'details', label: 'Dettagli', align: 'left'},
]

export const columnsPatient = [
    {id: 'edit', label: 'Modifica', align: 'left'},
    {id: 'appointment_day', label: 'Data visita', align: 'left'},
    {id: 'appointment_type', label: 'Tipologia', align: 'left'},
    {id: 'status', label: 'Stato', align: 'left'},
    {id: 'details', label: 'Dettagli', align: 'left'},
]
