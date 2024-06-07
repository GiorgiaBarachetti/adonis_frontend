import React, {useEffect, useState} from "react";
import {Box, Button, MenuItem, TextField} from "@mui/material";
import TooltipItem from "./TooltipItem";
import {config, DATE_FORMAT} from "../utils/const";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Form = () => {
    const [formData, setFormData] = useState({});
    const [user, setUser] = useState({})
    const [users, setUsers] = useState([]);
    //TODO fai get doctors
    const getUsers = async () => {
        await axios.get('http://localhost:3333/users')
            .then((res) => {
                console.log(res.data)
                setUsers(res.data)
            })
    }


    const navigate = useNavigate();
    const goToHomepage = () => {
        navigate("/profile");
        // history.replace("/book-appointment");
    };

    // const getUser = async () => {
    // const cache = sessionStorage.getItem("user")
    // //     if (cache) {
    // setUser(JSON.parse(cache))
    //     } else {
    //         const response = await axios.get("http://localhost:5000/user");
    //         const data = await response.json();
    //         setApiCarosello(data);
    //         sessionStorage.setItem('carosello_api', JSON.stringify(data))
    //
    //     }
    // }


    // Handler function to update form data
    const handleChange = (e) => {
        //     const {name, value} = e.target;
        //     // setFormData((prevData) => ({
        //     //     ...prevData,
        //     //     [name]: value,
        //     // }));
        //     // console.log(e)
    };

    // Handler function to submit form data
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3333/booking/', formData, config)
            .then((res) => {
                console.log(res.data)
                // setUsers(res.data)
                goToHomepage()
            })
        console.log("Form data:", formData);
        // Reset form data if needed
        setFormData({});
    };

    // Options for select fields
    const purposeOptions = ["In corso", "Terminata"];
    const appointmentTypeOptions = ["Su richiesta", "Periodica", "Di controllo"];

    const doctorOptions = ["Dr. Smith", "Dr. Johnson", "Dr. Williams"];
    const normalizeItem = (item) => {
        return {
            ...item,
            birth_date: item.birth_date ? (item.birth_date, DATE_FORMAT) : '29/23/2344'
        }
    }

    useEffect(() => {
        const cache = sessionStorage.getItem("user")
        const cacheParsed = JSON.parse(cache)
        setUser(normalizeItem(cacheParsed))
    }, [])

    return (
        <>
            <TooltipItem/>
            <Box
                component="form"
                sx={{
                    "& .MuiTextField-root": {m: 1, width: "25ch"},
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                {/* First inputData */}
                <Box>
                    <Box>Informazioni personali</Box>
                    <Box>

                        <TextField
                            disabled
                            name="name"
                            required
                            label="Nome"
                            value={user.name || ""}
                        />
                        <TextField
                            disabled
                            name="surname"
                            required
                            label="Cognome"
                            value={user.surname || ""}
                        />
                        <TextField
                            disabled
                            name="phoneNumber"
                            required
                            label="Numero di telefono"
                            value={user.phone_number || ""}
                        />
                        <TextField
                            disabled
                            name="fiscalCode"
                            required
                            label="Codice fiscale"
                            value={user.tax_id_code || ""}
                        />
                        <TextField
                            disabled
                            name="dateOfBirth"
                            required
                            label="Data di nascita"
                            type="date"
                            value={user.birth_date || ""}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            disabled
                            name="email"
                            required
                            label="Email"
                            type="email"
                            value={user.email || ""}
                        />
                    </Box>
                </Box>

                {/* Second inputData */}
                <Box>
                    <Box>Appointment Details</Box>
                    <Box>
                        <TextField
                            select
                            name="status"
                            required
                            label="Stato"
                            value={formData.status || ""}
                            onChange={(e) => setFormData({...formData, status: e.target.value})}
                        >
                            {purposeOptions.map((option, index) => (
                                <MenuItem key={index} value={option}>{option}</MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            select
                            name="appointment_type"
                            required
                            label="Tipologia"
                            value={formData.appointment_type || ""}
                            onChange={(e) => setFormData({...formData, appointment_type: e.target.value})}
                        >
                            {appointmentTypeOptions.map((option, index) => (
                                <MenuItem key={index} value={option}>{option}</MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            name="appointmentDate"
                            required
                            label="Data appuntamento"
                            type="date"
                            value={formData.appointment_day || ""}
                            onChange={(e) => setFormData({...formData, appointment_day: e.target.value})}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            select
                            name="doctor"
                            required
                            label="Dottore"
                            value={formData.doctor || ""}
                            onChange={(e) => setFormData({...formData, appointment_day: e.target.value})}

                        >
                            {doctorOptions.map((option, index) => (
                                <MenuItem key={index} value={option}>{option}</MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            name="details"
                            required
                            label="Dettagli"
                            multiline
                            rows={4}
                            value={formData.details || ""}
                            onChange={(e) => setFormData({...formData, details: e.target.value})}
                        />
                    </Box>
                </Box>

                <Button type="submit">Submit</Button>
            </Box>
        </>
    );
};

export default Form;
