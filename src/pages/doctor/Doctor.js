import IdentityCard from "../../components/IdentityCard";
import GeneralTable from "../../components/GeneralTable";
import {Box, Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Doctor = () => {
    const navigate = useNavigate()

    const columnsDoctor = [
        {id: 'appointmentDay', label: 'Data visita', align: 'left'},
        {id: 'patient', label: 'Nome Paziente', align: 'left'},
        // TODO enum --> crea variabili
        {id: 'appointmentType', label: 'Tipologia', align: 'left'},
        {id: 'details', label: 'Dettagli', align: 'left'},
    ]

    const rowsDoctor = [
        {
            appointmentDay: '2024-04-15',
            patient: 'John Doe',
            appointmentType: 'Controllo generale',
            details: 'Nessun problema riscontrato.',
        },
        {
            appointmentDay: '2024-04-20',
            patient: 'Jane Smith',
            appointmentType: 'Esame del sangue',
            details: 'Esito positivo, nessun problema rilevato.'
        },
        {
            appointmentDay: '2024-04-25',
            patient: 'Michael Johnson',
            appointmentType: 'Visita oculistica',
            details: 'Prescrizione per occhiali da vista.'
        },
    ];

    const doctorData = {
        picture: 'https://randomuser.me/api/portraits/men/1.jpg',
        name: 'John',
        surname: 'Doe',
        sex: 'Male',
        birthDate: '1978-05-15',
        birthPlace: 'New York',
        height: '180 cm',
        taxIdCode: 'ABC123456789',
        nationality: 'American',
        address: '123 Main Street, New York, NY',
        telephoneNumber: '+1 123 456 7890',
    }

    // https://codesandbox.io/p/sandbox/64331095cant-add-a-button-to-every-row-in-material-ui-table-vmnd9?file=%2Fdemo.tsx%3A7%2C17
    return (<>
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
            <IdentityCard fields={doctorData}/>
            <GeneralTable columns={columnsDoctor} rows={rowsDoctor}/>
        </Box>
        {/*<Button onClick={() => getItem()}>get</Button>*/}
        <Button onClick={() => navigate('/book-appointment')}>book appointment</Button>
        <Button onClick={() => navigate('/medical-visit-history')}>medical-visit-history</Button>
    </>)
}

export default Doctor;