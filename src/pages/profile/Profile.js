import IdentityCard from "../../components/IdentityCard";
import GeneralTable from "../../components/GeneralTable";
import {Box, Button, Grid} from "@mui/material";
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
import {useSnackbar} from "../../components/SnackbarContext.js";

const Profile = () => {
    const {showSnackbar} = useSnackbar();

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
            showSnackbar("Logout effettuato con successo", "success");
            deleteStorage()
            goToLogin();

        } catch (error) {
            showSnackbar("Errore nel logout", "error");

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

    const buttons = (
        <>
            {user.type === 'paziente' ?
                <Button style={{color: 'white'}} onClick={() => goToBookingAppointment()}>vai alla prenotazione</Button>
                : <></>}
        <Button style={{color: 'white'}} onClick={() => goToMedicalHistoryVisits()}>vai alle visite mediche</Button>
    </>)
    const logout = (
        <Button style={{color: 'white', fontSize: 'bold'}} onClick={() => onLogout()}>LOGOUT</Button>)


    return (<>
        <TooltipItem title="Profilo" children={buttons} logout={logout}/>
        {/*<Button onClick={() => goToMedicalHistoryVisits()}>vai alle visite mediche</Button>*/}
        {/*<Button onClick={() => onLogout()}>LOGOUT</Button>*/}

            <Box sx={{p:'0 40px 0 40px'}}>
            <Grid container spacing={3} justifyContent="center" alignItems="center">
                <Grid item xs={12} md={6} container justifyContent="center">
                    <IdentityCard fields={user} />
                </Grid>
                <Grid item xs={12} lg={6} container justifyContent="center">
                    <GeneralTable
                        columns={user.type === 'dottore' ? columnsDoctor : columnsPatient}
                        rows={user.type === 'dottore' ? rows : rows}
                    />
                </Grid>
            </Grid>
            </Box>
        <Outlet/>
    </>
)
}

export default Profile;
