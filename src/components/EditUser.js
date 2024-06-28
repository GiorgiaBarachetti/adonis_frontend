import React, {useEffect, useState} from "react";
import {Box, Button, IconButton, MenuItem, TextField, Typography} from "@mui/material";
import TooltipItem from "./TooltipItem";
import {fromFormatToISO, fromISOToFormat, REVERT_DATE_FORMAT} from "../utils/const";
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";
import {useSnackbar} from "./SnackbarContext.js";
import {ArrowBack} from "@mui/icons-material";


const Form = () => {
    const {showSnackbar} = useSnackbar();

    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const goToHomepage = () => {
        navigate("/profile");
    };

    const getME = async () => {
        const token = sessionStorage.getItem('token')
        const config = {headers: {Authorization: `Bearer ${token}`}}
        const res = await axios.get('http://localhost:3333/users/me', config);
        setFormData(normalizeItem(res.data))
    }

    const handleSubmit = async (e) => {
        const token = sessionStorage.getItem('token')
        const config = {headers: {Authorization: `Bearer ${token}`}}
            e.preventDefault();
            await axios.put(`http://localhost:3333/users/${formData.id}`, normalizeItemBeforeUpdate(formData), config)
                .then((res) => {
                    sessionStorage.removeItem('user')
                    sessionStorage.setItem('user', JSON.stringify(res.data))
                    showSnackbar("Utente modificato con successo", "success");
                })
                .catch((err) => {
                    showSnackbar("Errore durante la modifica dell'utente", "error");
                });
        goToHomepage()
    };

    const normalizeItemBeforeUpdate = (item) => {
        return {
            ...item,
            birthDate: item.birthDate ? fromFormatToISO(item.birthDate, REVERT_DATE_FORMAT) : undefined,
            telephoneNumber: item.telephone_number ? item.telephone_number : undefined,
            taxIdCode: item.tax_id_code ? item.tax_id_code : undefined
        }
    }

    const normalizeItem = (item) => {
        return {
            ...item,
            birthDate: item.birth_date ? fromISOToFormat(item.birth_date, REVERT_DATE_FORMAT) : '29/23/2344'
        }
    }

    useEffect(() => {
        getME()
    }, [])

    const goBack = () => {
        navigate("/profile");
    };

    const backButtons = (
        <>
            <IconButton style={{color : "white"}} onClick={goBack}>
                <ArrowBack />
            </IconButton>
        </>);

    return (
        <>
            <TooltipItem back={backButtons} title="Modifica utente"/>
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
                        name="name"
                        required
                        label="Nome"
                        value={formData.name || ""}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        sx={{m: 1, width: '25ch'}}
                    />
                    <TextField
                        name="surname"
                        required
                        label="Cognome"
                        value={formData.surname || ""}
                        onChange={(e) => setFormData({...formData, surname: e.target.value})}

                        sx={{m: 1, width: '25ch'}}
                    />
                    <TextField
                        name="telephone_number"
                        required
                        label="Numero di telefono"
                        value={formData.telephone_number || ""}
                        onChange={(e) => setFormData({...formData, telephone_number: e.target.value})}

                        sx={{m: 1, width: '25ch'}}
                    />
                    <TextField
                        name="fiscalCode"
                        required
                        label="Codice fiscale"
                        value={formData.tax_id_code || ""}
                        onChange={(e) => setFormData({...formData, tax_id_code: e.target.value})}
                        sx={{m: 1, width: '25ch'}}
                    />
                    <TextField
                        name="birthDate"
                        required
                        label="Data di nascita"
                        type="date"
                        value={formData.birthDate || ""}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e) => setFormData({...formData, birthDate: e.target.value})}
                        sx={{m: 1, width: '25ch'}}
                    />
                </Box>

                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <Button type="submit" variant="contained" color="primary" sx={{m: 1}}>
                        SALVA
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default Form;
