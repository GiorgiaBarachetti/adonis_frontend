import IdentityCard from "../../components/IdentityCard";
import GeneralTable from "../../components/GeneralTable";
import {Box, Button} from "@mui/material";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import {config} from "../../utils/const";
import {useEffect, useState} from "react";

const Profile = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const [user, setUser] = useState({})
    const [rows, setRows] = useState([]);

    // console.log('location.state.item', location.state.item.patient)

    const bookingCache = sessionStorage.getItem("booking")
    const getBooking = async () => {
        if (bookingCache) {
            setRows(JSON.parse(bookingCache))
        } else {
            await axios.get('http://localhost:3333/booking/me', config)
                .then((res) => {
                    sessionStorage.setItem("booking", JSON.stringify(res.data.data))
                    // console.log('res', res.data.data)
                    setRows(res.data.data)

                })
        }
    }
    //TODO foreach data for object in array
    const normalizeItem = (item) => {
        console.log('item', item)
        return {
            // ...user,
            patient: {
                ...item.patient,
                // birth_date: fromISOToFormat(item.patient.birth_date, DATE_FORMAT)
            },
            // token:{}
        }
    }

    useEffect(() => {
        // getItem()
        setUser(location.state.item.patient)
        getBooking()
        // const gay = sessionStorage.getItem('user')
        // console.log('gay', gay)
    }, [])


    const columnsDoctor = [
        {id: 'appointment_day', label: 'Data visita', align: 'left'},
        {id: 'patient_id', label: 'Nome Paziente', align: 'left'},
        // TODO enum --> crea variabili
        {id: 'appointment_type', label: 'Tipologia', align: 'left'},
        {id: 'details', label: 'Dettagli', align: 'left'},
    ]

    // const rowsDoctor = [
    //     {
    //         appointmentDay: '2024-04-15',
    //         patient: 'John Doe',
    //         appointmentType: 'Controllo generale',
    //         details: 'Nessun problema riscontrato.',
    //     },
    //     {
    //         appointmentDay: '2024-04-20',
    //         patient: 'Jane Smith',
    //         appointmentType: 'Esame del sangue',
    //         details: 'Esito positivo, nessun problema rilevato.'
    //     },
    //     {
    //         appointmentDay: '2024-04-25',
    //         patient: 'Michael Johnson',
    //         appointmentType: 'Visita oculistica',
    //         details: 'Prescrizione per occhiali da vista.'
    //     },
    // ];
    //
    // const doctorData = {
    //     picture: 'https://randomuser.me/api/portraits/men/1.jpg',
    //     name: 'John',
    //     surname: 'Doe',
    //     sex: 'Male',
    //     birthDate: '1978-05-15',
    //     birthPlace: 'New York',
    //     height: '180 cm',
    //     taxIdCode: 'ABC123456789',
    //     nationality: 'American',
    //     address: '123 Main Street, New York, NY',
    //     telephoneNumber: '+1 123 456 7890',
    // }

    // const inputData = [{label: 'name', required: true}, {label: 'surname', required: true}]
    const goToMedicalHistoryVisits = () => {
        navigate("/medical-visit-history", {state: {rows}});
        // console.log('rows', rows)
    };
    const goToBookingAppointment = () => {
        navigate("/book-appointment", {state: {rows}});
        // console.log('rows', rows)
    };

    // https://codesandbox.io/p/sandbox/64331095cant-add-a-button-to-every-row-in-material-ui-table-vmnd9?file=%2Fdemo.tsx%3A7%2C17

    return (<>
        {/*<TooltipItem*/}
        {/*    title={'Benvenuto dottore ' + user?.name + ' ' + user?.surname}*/}
        {/*    buttonTitle1={'Visite mediche'}*/}
        {/*    route1={'/medical-visit-history'}*/}
        {/*    buttonTitle2={'Prenota visita medica'}*/}
        {/*    route2={'/book-appointment'}*/}
        {/*/>*/}
        <Button onClick={() => goToMedicalHistoryVisits()}>vai alle visite mediche</Button>
        <Button onClick={() => goToBookingAppointment()}>vai alla prenotazione</Button>
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
            <IdentityCard fields={location.state.item.patient}/>
            <GeneralTable columns={columnsDoctor} rows={rows}/>
        </Box>
        {/*<Button onClick={() => getItem()}>get</Button>*/}
        {/*<Button onClick={() => navigate('/book-appointment')}>book appointment</Button>*/}
        {/*<Button onClick={() => navigate('/medical-visit-history')}>medical-visit-history</Button>*/}
        {/* <Button onClick={handleButtonClick}>Go to Form</Button> */}
        <Outlet/>
    </>)
}

export default Profile;
