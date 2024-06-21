import IdentityCard from "../../components/IdentityCard";
import GeneralTable from "../../components/GeneralTable";
import {Box, Button} from "@mui/material";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import {
    columnsDoctor,
    columnsPatient,
    fromISOToFormat,
    normalizeUser,
    REVERT_DATE_FORMAT,
    rowsDoctor
} from "../../utils/const";
import {useEffect, useState} from "react";
import TooltipItem from "../../components/TooltipItem";

const Profile = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const [user, setUser] = useState({})
    const [rows, setRows] = useState([]);

    const getBooking = async () => {
        const token = sessionStorage.getItem('token')
        const config = {headers: {Authorization: `Bearer ${token}`}}
        await axios.get('http://localhost:3333/booking/me', config)
            .then((res) => {
                setRows(normalizeItem(res.data.data))
            })
    }

    //todo manca dati di doctor --> data doctor --> non va neanche get singolo user
    const getDataDoctor = async (id) => {
        const token = sessionStorage.getItem('token')
        const config = {headers: {Authorization: `Bearer ${token}`}}
    }
    const deleteStorage = () => {
        try {
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('user');
        } catch (error) {
            console.error(`Failed to remove item with key from sessionStorage`, error);
        }
    }
    const onLogout = async () => {
        try {
            const token = sessionStorage.getItem('token');
            if (!token) {
                console.error('No token found in sessionStorage');
                return;
            }

            const config = {headers: {Authorization: `Bearer ${token}`}};
            await axios.post('http://localhost:3333/logout', {}, config);
            deleteStorage()
            goToLogin();
        } catch (error) {
            console.error('Logout failed', error.response || error); // Log the error response for debugging
        }
    }

    const normalizeItem = (item) => {
        return item.map(it => ({
            ...it,
            appointment_day: it.appointment_day ? fromISOToFormat(it.appointment_day, REVERT_DATE_FORMAT) : undefined
        }));
    }

    useEffect(() => {
        if (location.state) {
            setUser(location.state.item.patient)
        } else {
            const cache = sessionStorage.getItem('user')
            const parsed = JSON.parse(cache)
            const normalized = normalizeUser(parsed)
            setUser(normalized)
        }
        getBooking()

        if (user) {
            // if (user.type === 'dottore') {
            getDataDoctor(user.id)
        }
        // }
    }, [])

    const goToMedicalHistoryVisits = () => {
        navigate("/medical-visit-history", {state: {rows}});
    };

    const goToBookingAppointment = () => {
        navigate("/book-appointment", {state: {rows}});
    };
    const goToLogin = () => {
        navigate("/");
    };


    return (<>
        <TooltipItem/>
        <Button onClick={() => goToMedicalHistoryVisits()}>vai alle visite mediche</Button>
        <Button onClick={() => onLogout()}>LOGOUT</Button>
        {user.type === 'paziente' ?
            <Button onClick={() => goToBookingAppointment()}>vai alla prenotazione</Button>
            : <div></div>}
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            // '@media (max-width: 1000px)': {
            //     flexDirection: 'column'
            // }
        }}>
            <IdentityCard fields={user}/>
            <GeneralTable columns={user.type === 'dottore' ? columnsDoctor : columnsPatient}
                          rows={user.type === 'dottore' ? rowsDoctor : rows}/>
        </Box>
        <Outlet/>
    </>)
}

export default Profile;
