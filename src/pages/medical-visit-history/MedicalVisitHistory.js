import {useEffect, useState} from "react";
import GeneralTable from "../../components/GeneralTable";
import TooltipItem from "../../components/TooltipItem";
import {useLocation, useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import axios from "axios";
import {columnsDoctor, columnsPatient, rowsDoctor} from "../../utils/const";

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
        const token = sessionStorage.getItem('token')
        const config = {headers: {Authorization: `Bearer ${token}`}}
        await axios.get('http://localhost:3333/users/me', config)
            .then((res) => {
                setUserType(res.data)
            })
    }


    const goToForm = () => {
        navigate("/book-appointment");
    };

    useEffect(() => {
        setRows(location.state.rows)
        // setUserType(location.state.user)
        getMe()
    }, [])

    return (<>
        <TooltipItem/>
        {userType.type === "paziente" ?
            <Button onClick={() => {
                goToForm()
            }}>AGGIUNGI UNA PRENOTAZIONE</Button>
            : ''
        }
        {userType.type === 'dottore' ?
            <GeneralTable columns={columnsDoctor} rows={rowsDoctor}/>
            :
            <GeneralTable columns={columnsPatient} rows={rows}/>
        }
    </>)
}
export default MedicalVisitHistory
