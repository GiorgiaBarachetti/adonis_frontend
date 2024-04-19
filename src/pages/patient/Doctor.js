import IdentityCard from "../../components/IdentityCard";
import GeneralTable from "../../components/GeneralTable";
import {Box, Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Patient = () => {
    const navigate = useNavigate()

    const columns = [
        {id: 'date', label: 'Data visita', align: 'left'},
        {id: 'paziente', label: 'Paziente', align: 'left'},
        {id: 'tipologia', label: 'Tipologia', align: 'left'},
        {id: 'dettagli', label: 'Dettagli', align: 'left'}
    ]

    const rows = [
        {
            date: '2024-04-01',
            medico: 'John Doe',
            tipologia: 'Controllo generale',
            dettagli: 'Nessun problema riscontrato.'
        },
        {
            date: '2024-03-25',
            medico: 'Sarah Smith',
            tipologia: 'Esame del sangue',
            dettagli: 'Esito positivo, nessun problema rilevato.'
        },
        {
            date: '2024-03-18',
            medico: 'Michael Brown',
            tipologia: 'Visita oculistica',
            dettagli: 'Prescrizione per occhiali da vista.'
        },
    ]

    const patientData = {
        picture: 'https://randomuser.me/api/portraits/women/2.jpg',
        name: 'Jane',
        surname: 'Doe',
        sex: 'Female',
        birthDate: '1985-08-20',
        birthPlace: 'Los Angeles',
        height: '165 cm',
        taxIdCode: 'XYZ987654321',
        nationality: 'American',
        address: '456 Elm Street, Los Angeles, CA',
        telephoneNumber: '+1 987 654 3210',
    }

    return (<>
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <IdentityCard fields={patientData}/>
            <GeneralTable columns={columns} rows={rows}/>
        </Box>
        {/*<Button onClick={() => getItem()}>get</Button>*/}
        <Button onClick={() => navigate('/book-appointment')}>book appointment</Button>
        <Button onClick={() => navigate('/medical-visit-history')}>medical visit historu</Button>
    </>)
}

export default Patient;