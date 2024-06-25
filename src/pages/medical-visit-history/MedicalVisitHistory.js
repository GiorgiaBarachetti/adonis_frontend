import { useEffect, useState } from "react";
import GeneralTable from "../../components/GeneralTable";
import TooltipItem from "../../components/TooltipItem";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import axios from "axios";
import {columnsDoctor, columnsPatient, fromISOToFormat, REVERT_DATE_FORMAT} from "../../utils/const";
import { ArrowBack } from "@mui/icons-material";

const MedicalVisitHistory = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [rows, setRows] = useState([]);
    const [userType, setUserType] = useState( ''); // Initialize userType as an object

    const getMe = () => {
        try {
            const cache = sessionStorage.getItem('user');
            const user = JSON.parse(cache);
            setUserType(user.type); // Set userType as an object containing type
        } catch (error) {
            console.error('Error fetching userType:', error);
        }
    };
    const getBooking = async () => {
        const token = sessionStorage.getItem('token')
        const config = {headers: {Authorization: `Bearer ${token}`}}
        await axios.get('http://localhost:3333/booking/me', config)
            .then((res) => {
                setRows(normalizeItem(res.data.data))
            })
    }

    const normalizeItem = (item) => {
        return item.map(it => ({
            ...it,
            appointment_day: it.appointment_day ? fromISOToFormat(it.appointment_day, REVERT_DATE_FORMAT) : undefined
        }));
    }

    const goToForm = () => {
        navigate("/book-appointment");
    };

    const goBack = () => {
        navigate("/profile");
    };

    useEffect(() => {
        if (location.state && location.state.rows) {
            setRows(location.state.rows);
        }else{
            getBooking()
        }
        getMe();
    }, [location.state]); // Include location.state in dependency array

    const buttons = (
        <>
        {userType === 'paziente' ?
            <Button style={{color: 'white'}} onClick={() => goToForm()}>aggiungi una prenotazione</Button>
            : <></>}
        </>)

    const backButtons = (
        <>
        <IconButton style={{color : "white"}} onClick={goBack}>
            <ArrowBack />
        </IconButton>
        </>);

    return (
        <>
            <TooltipItem back={backButtons} title="Visite mediche" children={buttons} />
            <div style={{ width: '90%', alqignSelf: 'center', margin: 'auto' }}>
                {userType === 'dottore' ?
                    <GeneralTable columns={columnsDoctor} rows={rows} />
                    :
                    <GeneralTable columns={columnsPatient} rows={rows} />
                }
            </div>
        </>
    );
};

export default MedicalVisitHistory;
