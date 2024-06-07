import {useEffect, useState} from "react";
import GeneralTable from "../../components/GeneralTable";
import TooltipItem from "../../components/TooltipItem";
import {useLocation, useNavigate} from "react-router-dom";

const MedicalVisitHistory = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const location = useLocation();
    const [rows, setRows] = useState([]);
    const handleClickNew = () => {
        setOpen(true)
    }
    const [userType, setUserType] = useState('')
    //
    // const getBooking = async () => {
    //     await axios.get('http://localhost:3333/booking/me', config)
    //         .then((res) => {
    //             console.log('res', res.data.data)
    //             setRows(res.data.data)
    //
    //         })
    // }
    console.log('medicalhistory', rows)

    const columnsDoctor = [
        {id: 'patient_id', label: 'Nome Paziente', align: 'left'},
        {id: 'appointment_day', label: 'Data visita', align: 'left'},
        // TODO enum --> crea variabili
        {id: 'appointment_type', label: 'Tipologia', align: 'left'},
        {id: 'details', label: 'Dettagli', align: 'left'},
        // TODO enum --> crea variabili
        {id: 'status', label: 'Stato', align: 'left'}
    ]

    const rowsDoctor = [
        {
            patient: 'John Doe',
            appointmentDay: '2024-04-15',
            appointmentType: 'Controllo generale',
            details: 'Nessun problema riscontrato.',
            status: 'Confermato'
        },
        {
            patient: 'Jane Smith',
            appointmentDay: '2024-04-20',
            appointmentType: 'Esame del sangue',
            details: 'Esito positivo, nessun problema rilevato.',
            status: 'Confermato'
        },
        {
            patient: 'Michael Johnson',
            appointmentDay: '2024-04-25',
            appointmentType: 'Visita oculistica',
            details: 'Prescrizione per occhiali da vista.',
            status: 'Confermato'
        },
    ];
//if user role = doctor show doctor else patient
    const inputData = [
        {
            title: "DATI UTENTE",
            fields: [
                {label: "Name", required: true},
                {label: "Surname", required: true},
                {label: "Age", required: true},
            ],
        },
    ];

    const goToForm = () => {
        navigate("/book-appointment");
    };

    useEffect(() => {
        setRows(location.state.rows)
        setUserType(sessionStorage.getItem('user'))
    })


    return (<>
        {/*<Button onClick={handleClickNew}>New</Button>*/}
        {/*<Form open={open} inputData={inputData} />*/}
        <TooltipItem/>
        {/*{ userType === "Admin" ?*/}
        {/*    <Button onClick={() => {*/}
        {/*        goToForm()*/}
        {/*    }}>AGGIUNGI UNA PRENOTAZIONE</Button>*/}
        {/*    : */}
        {/*}*/}
        <GeneralTable columns={columnsDoctor} rows={rows}/></>)
}
export default MedicalVisitHistory
