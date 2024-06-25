import {DateTime} from "luxon";

export const DATE_FORMAT = 'dd/MM/yyyy'
export const REVERT_DATE_FORMAT = 'yyyy-MM-dd'

export const fromISOToFormat = (date, format = DATE_FORMAT) => {
    return date ? DateTime.fromISO(date).toFormat(format) : null
}
export const fromFormatToISO = (date, format = DATE_FORMAT) => {
    console.log(date, format, DateTime.fromFormat(date, format).toISO())
    return date ? DateTime.fromFormat(date, format).toISO() : null
}
console.log('config caricata', sessionStorage.getItem('token'))
const token = sessionStorage.getItem('token')
export const config = {headers: {Authorization: `Bearer ${token}`}}

export const columnsDoctor = [
    {id: 'appointment_day', label: 'Data visita', align: 'left'},
    {id: 'patient_id', label: 'Nome Paziente', align: 'left'},
    {id: 'appointment_type', label: 'Tipologia', align: 'left'},
    {id: 'status', label: 'Stato', align: 'left'},
    {id: 'details', label: 'Dettagli', align: 'left'},
]

export const rowsDoctor = [
    {
        id: 1,
        appointment_day: '2024-06-01',
        patient_id: 'Mario Rossi',
        appointment_type: 'Su richiesta',
        status: 'In corso',
        details: 'Visita per controllo annuale'
    },
    {
        id: 2,
        appointment_day: '2024-06-02',
        patient_id: 'Luigi Bianchi',
        appointment_type: 'Periodica',
        status: 'Terminata',
        details: 'Controllo del diabete'
    },
    {
        id: 3,
        appointment_day: '2024-06-03',
        patient_id: 'Giulia Verdi',
        appointment_type: 'Di controllo',
        status: 'In corso',
        details: 'Visita post-operatoria'
    },
    {
        id: 4,
        appointment_day: '2024-06-04',
        patient_id: 'Sara Neri',
        appointment_type: 'Su richiesta',
        status: 'Terminata',
        details: 'Consulto per mal di testa ricorrente'
    },
    {
        id: 5,
        appointment_day: '2024-06-05',
        patient_id: 'Paolo Gialli',
        appointment_type: 'Periodica',
        status: 'In corso',
        details: 'Esame di routine'
    },
    {
        id: 6,
        appointment_day: '2024-06-06',
        patient_id: 'Anna Azzurri',
        appointment_type: 'Di controllo',
        status: 'Terminata',
        details: 'Verifica post-terapia'
    },
    {
        id: 7,
        appointment_day: '2024-06-07',
        patient_id: 'Carlo Viola',
        appointment_type: 'Su richiesta',
        status: 'In corso',
        details: 'Visita per sintomi influenzali'
    },
    {
        id: 8,
        appointment_day: '2024-06-08',
        patient_id: 'Luca Marrone',
        appointment_type: 'Periodica',
        status: 'Terminata',
        details: 'Check-up annuale'
    },
    {
        id: 9,
        appointment_day: '2024-06-09',
        patient_id: 'Maria Rosa',
        appointment_type: 'Di controllo',
        status: 'In corso',
        details: 'Controllo della pressione'
    },
    {
        id: 10,
        appointment_day: '2024-06-10',
        patient_id: 'Giorgio Nero',
        appointment_type: 'Su richiesta',
        status: 'Terminata',
        details: 'Consulto per dolore al petto'
    },
    {
        id: 11,
        appointment_day: '2024-06-11',
        patient_id: 'Elena Bianca',
        appointment_type: 'Periodica',
        status: 'In corso',
        details: 'Controllo del colesterolo'
    },
    {
        id: 12,
        appointment_day: '2024-06-12',
        patient_id: 'Alessandro Argento',
        appointment_type: 'Di controllo',
        status: 'Terminata',
        details: 'Visita di controllo post-infortunio'
    },
    {
        id: 13,
        appointment_day: '2024-06-13',
        patient_id: 'Francesca Turchese',
        appointment_type: 'Su richiesta',
        status: 'In corso',
        details: 'Visita per allergia'
    },
    {
        id: 14,
        appointment_day: '2024-06-14',
        patient_id: 'Matteo Verde',
        appointment_type: 'Periodica',
        status: 'Terminata',
        details: 'Check-up cardiologico'
    },
    {
        id: 15,
        appointment_day: '2024-06-15',
        patient_id: 'Lara Dorata',
        appointment_type: 'Di controllo',
        status: 'In corso',
        details: 'Verifica dei livelli di ferro'
    },
    {
        id: 16,
        appointment_day: '2024-06-16',
        patient_id: 'Giovanni Rossi',
        appointment_type: 'Su richiesta',
        status: 'Terminata',
        details: 'Consulto per dolori articolari'
    },
    {
        id: 17,
        appointment_day: '2024-06-17',
        patient_id: 'Valeria Neri',
        appointment_type: 'Periodica',
        status: 'In corso',
        details: 'Controllo del peso'
    },
    {
        id: 18,
        appointment_day: '2024-06-18',
        patient_id: 'Fabrizio Azzurro',
        appointment_type: 'Di controllo',
        status: 'Terminata',
        details: 'Visita di follow-up'
    },
    {
        id: 19,
        appointment_day: '2024-06-19',
        patient_id: 'Lucia Viola',
        appointment_type: 'Su richiesta',
        status: 'In corso',
        details: 'Consulto per problemi digestivi'
    },
    {
        id: 20,
        appointment_day: '2024-06-20',
        patient_id: 'Marco Marrone',
        appointment_type: 'Periodica',
        status: 'Terminata',
        details: 'Check-up generale'
    },
];


export const columnsPatient = [
    {id: 'appointment_day', label: 'Data visita', align: 'left'},
    {id: 'appointment_type', label: 'Tipologia', align: 'left'},
    {id: 'doctor_id', label: 'Dottore', align: 'left'},
    {id: 'status', label: 'Stato', align: 'left'},
    {id: 'details', label: 'Dettagli', align: 'left'},
]

export const normalizeUserForSessionStorage = (user) => {
    return {
        patient: {
            ...user.patient,
            birth_date: fromISOToFormat(user.patient.birth_date, REVERT_DATE_FORMAT)
        },
    }
}
export const normalizeUser = (user) => {
    return {
        ...user,
        birth_date: user.birth_date ? fromISOToFormat(user.birth_date, REVERT_DATE_FORMAT) : undefined
    }
}
