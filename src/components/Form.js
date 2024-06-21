import React, {useEffect, useState} from "react";
import {Box, Button, MenuItem, TextField, Typography} from "@mui/material";
import TooltipItem from "./TooltipItem";
import {fromFormatToISO, fromISOToFormat, REVERT_DATE_FORMAT} from "../utils/const";
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";
import {useSnackbar} from "./SnackbarContext.js";

const Form = () => {
    const {showSnackbar} = useSnackbar();

    const [formData, setFormData] = useState({});
    const [user, setUser] = useState({})
    // const [users, setUsers] = useState([]);
    const location = useLocation();
    const [edit, setEdit] = useState(false);

    // //TODO fai get doctors
    // const getUsers = async () => {
    //     await axios.get('http://localhost:3333/users')
    //         .then((res) => {
    //             console.log(res.data)
    //             setUsers(res.data)
    //         })
    // }


    const navigate = useNavigate();
    const goToHomepage = () => {
        console.log('FORM - GOTOHOMEPAGE - gay ultimo', formData)
        navigate("/profile");
        // history.replace("/book-appointment");
    };

    const handleSubmit = async (e) => {
        const token = sessionStorage.getItem('token')
        const config = {headers: {Authorization: `Bearer ${token}`}}
        if (edit === true) {
            e.preventDefault();
            await axios.put(`http://localhost:3333/booking/${formData.id}`, normalizeItemBeforeUpdate(formData), config)
                .then((res) => {
                    showSnackbar("Visita modificata con successo", "success");
                    goToHomepage()
                })
                .catch((err) => {
                    showSnackbar("Errore durante la modifica della visita", "error");
                });
            setFormData({});

        } else {
            e.preventDefault();
            await axios.post('http://localhost:3333/booking/', formData, config)
                .then((res) => {
                    showSnackbar("Visita prenotata con successo", "success");
                    goToHomepage()
                })
                .catch((err) => {
                    showSnackbar("Errore durante la prenotazione della visita", "error");
                });
            setFormData({});
        }
    };
    const deleteBookAppointment = async () => {
        const token = sessionStorage.getItem('token')
        const config = {headers: {Authorization: `Bearer ${token}`}}
        await axios.delete(`http://localhost:3333/booking/${formData.id}`, config)
            .then((res) => {
                showSnackbar("Prenotazione cancellata con successo", "success");
                goToHomepage();
            })
            .catch((err) => {
                showSnackbar("Errore durante la cancellazione della prenotazione", "error");
            });
    };

    const normalizeItemBeforeUpdate = (item) => {
        return {
            ...item,
            appointmentDay: item.appointment_day ? fromFormatToISO(item.appointment_day, REVERT_DATE_FORMAT) : undefined,
            appointmentType: item.appointment_type ? item.appointment_type : item.appointment_type
        }
    }

    const purposeOptions = ["In corso", "Terminata"];
    const appointmentTypeOptions = ["Su richiesta", "Periodica", "Di controllo"];

    // const doctorOptions = ["Dr. Smith", "Dr. Johnson", "Dr. Williams"];
    const normalizeItem = (item) => {
        return {
            ...item,
            birth_date: item.birth_date ? fromISOToFormat(item.birth_date, REVERT_DATE_FORMAT) : '29/23/2344'
        }
    }

    useEffect(() => {
        const cache = sessionStorage.getItem("user")
        const cacheParsed = JSON.parse(cache)
        setUser(normalizeItem(cacheParsed))
        if (location.state.row) {
            console.log('FORM- USEFFECT - location', location.state.row)
            setFormData(location.state.row)
            setEdit(true)
        } else {
            setEdit(false)
        }
    }, [])

    return (
        <>
            <TooltipItem/>
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: "100%",
                    maxWidth: '80%',
                    margin: 'auto',
                    padding: 2,
                    borderRadius: 2,
                    boxShadow: 3,
                    backgroundColor: 'background.paper',
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <Typography variant="h6" component="div" sx={{mb: 2}}>
                    Informazioni personali
                </Typography>
                <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                    <TextField
                        disabled
                        name="name"
                        required
                        label="Nome"
                        value={user.name || ""}
                        sx={{m: 1, width: '25ch'}}
                    />
                    <TextField
                        disabled
                        name="surname"
                        required
                        label="Cognome"
                        value={user.surname || ""}
                        sx={{m: 1, width: '25ch'}}
                    />
                    <TextField
                        disabled
                        name="telephone_number"
                        required
                        label="Numero di telefono"
                        value={user.telephone_number || ""}
                        sx={{m: 1, width: '25ch'}}
                    />
                    <TextField
                        disabled
                        name="fiscalCode"
                        required
                        label="Codice fiscale"
                        value={user.tax_id_code || ""}
                        sx={{m: 1, width: '25ch'}}
                    />
                    <TextField
                        disabled
                        name="birth_date"
                        required
                        label="Data di nascita"
                        type="date"
                        value={user.birth_date || ""}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        sx={{m: 1, width: '25ch'}}
                    />
                    <TextField
                        disabled
                        name="email"
                        required
                        label="Email"
                        type="email"
                        value={user.email || ""}
                        sx={{m: 1, width: '25ch'}}
                    />
                </Box>
                <Typography variant="h6" component="div" sx={{mt: 3, mb: 2}}>
                    Appointment Details
                </Typography>
                <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                    <TextField
                        select
                        name="status"
                        required
                        label="Stato"
                        value={formData.status || ""}
                        onChange={(e) => setFormData({...formData, status: e.target.value})}
                        sx={{m: 1, width: '25ch'}}
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
                        sx={{m: 1, width: '25ch'}}>
                        {appointmentTypeOptions.map((option, index) => (
                            <MenuItem key={index} value={option}>{option}</MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        name="appointment_day"
                        required
                        label="Data appuntamento"
                        type="date"
                        value={formData.appointment_day || "2024-06-14T11:12:15.000+02:00"}
                        onChange={(e) => setFormData({...formData, appointment_day: e.target.value})}
                        InputLabelProps={{
                            shrink: true,
                        }} sx={{m: 1, width: '25ch'}}
                    />
                    {/*<LocalizationProvider dateAdapter={AdapterDayjs}>*/}
                    {/*    <DatePicker*/}
                    {/*        name="appointmentDay"*/}
                    {/*        label="Controlled picker"*/}
                    {/*        value={formData.appointment_day ? dayjs(formData.appointment_day) : null}*/}
                    {/*        onChange={(newValue) => setFormData({*/}
                    {/*            ...formData,*/}
                    {/*            appointment_day: newValue ? newValue : null*/}
                    {/*        })}*/}
                    {/*        renderInput={(params) => <TextField {...params} />}*/}
                    {/*    />*/}
                    {/*</LocalizationProvider>*/}
                    {/*<TextField*/}
                    {/*    disabled*/}
                    {/*    name="appointment_day"*/}
                    {/*    required*/}
                    {/*    label="hh"*/}
                    {/*    type="string"*/}
                    {/*    value={formData.appointment_day || "niente"}*/}
                    {/*/>*/}
                    {/*<LocalizationProvider dateAdapter={AdapterDayjs}>*/}
                    {/*    <DemoItem label="Static variant">*/}
                    {/*        <StaticDatePicker/>*/}
                    {/*    </DemoItem>*/}
                    {/*</LocalizationProvider>*/}
                    {/*<TextField*/}
                    {/*    select*/}
                    {/*    name="doctor"*/}
                    {/*    required*/}
                    {/*    label="Dottore"*/}
                    {/*    value={formData.doctor || ""}*/}
                    {/*    onChange={(e) => setFormData({...formData, appointment_day: e.target.value})}*/}

                    {/*>*/}
                    {/*    {doctorOptions.map((option, index) => (*/}
                    {/*        <MenuItem key={index} value={option}>{option}</MenuItem>*/}
                    {/*    ))}*/}
                    {/*</TextField>*/}
                    <TextField
                        name="details"
                        required
                        label="Dettagli"
                        multiline
                        rows={4}
                        value={formData.details || ""}
                        onChange={(e) => setFormData({...formData, details: e.target.value})}
                        sx={{m: 1, width: '25ch'}}
                    />
                    <TextField
                        name="doctor_id"
                        required
                        label="ID del dottore"
                        multiline
                        rows={4}
                        value={formData.doctor_id || ""}
                        onChange={(e) => setFormData({...formData, doctor_id: e.target.value})}
                        sx={{m: 1, width: '25ch'}}
                    />
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <Button type="submit" variant="contained" color="primary" sx={{m: 1}}>
                        Submit
                    </Button>
                    {edit && (
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={deleteBookAppointment}
                            sx={{m: 1}}
                        >
                            Cancella prenotazione
                        </Button>
                    )}
                </Box>
            </Box>
        </>
    );
};

export default Form;
