import {useEffect, useState} from "react";
import GeneralTable from "../../components/GeneralTable";
import TooltipItem from "../../components/TooltipItem";
import {useLocation, useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import axios from "axios";
import {columnsDoctor, columnsPatient, config} from "../../utils/const";

const MedicalVisitHistory = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const location = useLocation();
    const [rows, setRows] = useState([]);
    const handleClickNew = () => {
        setOpen(true)
    }
    const [userType, setUserType] = useState({})

    const getMe = async () => {
        await axios.get('http://localhost:3333/users/me', config)
            .then((res) => {
                console.log('res', res.data)
                setUserType(res.data)
            })
    }


    // const columnsDoctor = [
    //     {id: 'appointment_day', label: 'Data visita', align: 'left'},
    //     {id: 'patient_id', label: 'Nome Paziente', align: 'left'},
    //     // TODO enum --> crea variabili
    //     {id: 'appointment_type', label: 'Tipologia', align: 'left'},
    //     {id: 'details', label: 'Dettagli', align: 'left'},
    // ]
    //
    // const columnsPatient = [
    //     {id: 'edit', label: 'Modifica', align: 'left'},
    //     {id: 'appointment_day', label: 'Data visita', align: 'left'},
    //     {id: 'appointment_type', label: 'Tipologia', align: 'left'},
    //     {id: 'status', label: 'Stato', align: 'left'},
    //     {id: 'details', label: 'Dettagli', align: 'left'},
    // ]

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
        // setUserType(location.state.user)
        getMe()
    }, [])
    console.log(userType)
    return (<>
        {/*<Button onClick={handleClickNew}>New</Button>*/}
        {/*<Form open={open} inputData={inputData} />*/}
        <TooltipItem/>
        {userType === "paziente" ?
            <Button onClick={() => {
                goToForm()
            }}>AGGIUNGI UNA PRENOTAZIONE</Button>
            : ''
        }
        {userType === 'dottore' ?
            <GeneralTable columns={columnsDoctor} rows={rows}/>
            :
            <GeneralTable columns={columnsPatient} rows={rows}/>
        }
    </>)
}
export default MedicalVisitHistory
