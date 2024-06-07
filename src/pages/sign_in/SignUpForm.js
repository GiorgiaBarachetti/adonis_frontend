import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from "react"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {DATE_FORMAT, fromISOToFormat} from "../../utils/const";
import {Box, Button, Card, CardHeader, CardMedia, Divider, Typography} from "@mui/material";

export default function SignInForm() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name:'',
        surname:'', 
        sex:'',
        height:'',
        taxIdCode:'',
        telephoneNumber:'',
        birthDate:'',
        birthPlace:'', 
        nationality:'', 
        address:'', 
        type:'', 
        email:'', 
        password:'',
        picture:'',
        specalization:'',
        clinic_number:''
    })
    
    const goToHomepage = () => {
        navigate("/");
        // history.replace("/book-appointment");
    };
    
    const addPost = () =>{
        axios.post("http://localhost:3333/registration", {
            name: values.name,
            surname: values.surname,
            sex: values.sex,
            height: values.height,
            taxIdCode: values.taxIdCode,
            telephoneNumber: values.telephoneNumber,
            birthDate: values.birthDate,
            birthPlace: values.birthPlace,
            nationality: values.nationality,
            address: values.address,
            type: values.type,
            email: values.email,
            password: values.password,
            picture: values.picture,
            specalization: values.specalization,
            clinic_number: values.clinic_number

        })
        .then((res) => {
          goToHomepage()
        })
        .catch((err) => {
          console.log(err)
        })
      }
      useEffect(() => {
      })

    return (

        <Card sx={{margin: 'auto', width: '550px'}}>
            <CardHeader sx={{backgroundColor: '#32de84'}} title='DATI PERSONALI'>
                <Typography variant="h1">Inserimento dati utente</Typography>
            </CardHeader>
            <Divider variant='middle'/>

            <Box sx={{disaply: 'flex', flexDirection: 'column', width: '500px', marginX: 'auto'}}>
                <CardMedia
                    sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '20px'}}>
                    <TextField required id="nome" label="Nome" variant='outlined' onChange={(e)=>{setValues({...values, name: e.target.value})}} value={values.name}/>
                    <TextField required id="surname" label="Cognome" variant='outlined' onChange={(e)=>{setValues({...values, surname: e.target.value})}} value={values.surname}/>
                </CardMedia>

                <CardMedia
                    sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '20px'}}>
                    <div>
                        <InputLabel id="sex_label">Sesso</InputLabel>
                        <Select labelId='sex_label'  label="Sesso" onChange={(e)=>{setValues({...values, sex: e.target.value})}} value={values.sex}>
                            <MenuItem value={'maschio'}>Maschio</MenuItem>
                            <MenuItem value={'femmina'}>Femmina</MenuItem>
                        </Select>
                    </div>

                    <TextField required id="height" label="Altezza(cm)" type="number" variant='outlined' onChange={(e)=>{setValues({...values, height: e.target.value})}} value={values.height}/>

                    <div>
                        <InputLabel id="type_label">Tipo di utente</InputLabel>
                        <Select labelId='type_label' label="Tipo di utente" onChange={(e) => { setValues({ ...values, type: e.target.value }) }} value={values.type}>
                            <MenuItem value={'dottore'}>Dottore</MenuItem>
                            <MenuItem value={'paziente'}>Paziente</MenuItem>
                        </Select>
                    </div>
                </CardMedia>

                <CardMedia
                    sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '20px'}}>
                    <TextField required id="taxIdCode" label="Codice Fiscale" variant='outlined' onChange={(e)=>{setValues({...values, taxIdCode: e.target.value})}} value={values.taxIdCode}/>
                    <TextField required id="telephoneNumber" label="Numero di telefono" variant='outlined' onChange={(e)=>{setValues({...values, telephoneNumber: e.target.value})}} value={values.telephoneNumber}/>
                </CardMedia>

                <CardMedia
                    sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '20px'}}>
                    <TextField required id="birthDate" label="Data di Nascita" type='date' InputLabelProps={{
                        shrink: true,
                    }} onChange={(e)=>{setValues({...values, birthDate: e.target.value})}} value={values.birthDate}/>
                    <TextField required id="birthPlace" label="Luogo di Nascita" variant='outlined' onChange={(e)=>{setValues({...values, birthPlace: e.target.value})}} value={values.birthPlace}/>
                </CardMedia>

                <CardMedia
                    sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '20px'}}>
                    <TextField required id="nationality" label="Nazionalità" variant='outlined' onChange={(e)=>{setValues({...values, nationality: e.target.value})}} value={values.nationality}/>
                    <TextField required id="address" label="Indirizzo" variant='outlined' onChange={(e)=>{setValues({...values, address: e.target.value})}} value={values.address}/>
                </CardMedia>

                <CardMedia
                    sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '20px'}}>
                    <TextField required id="email" label="Email" type='email' variant='outlined' onChange={(e)=>{setValues({...values, email: e.target.value})}} value={values.email}/>
                    <TextField required id="password" label="Password" type='password' variant='outlined' onChange={(e)=>{setValues({...values, password: e.target.value})}} value={values.password}/>
                </CardMedia>

                <CardMedia
                    sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '20px'}}>
                    <TextField required id="picture" label="Picture" type='file' variant='outlined'  InputLabelProps={{
                        shrink: true,
                    }} onChange={(e)=>{setValues({...values, picture: e.target.value})}} value={values.picture}/>
                </CardMedia>

                <CardMedia sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: '20px',
                    marginBottom: '20px'
                }}>
                    {values.type === 'dottore' && (
                        <>
                            <TextField id="specalization" label="Specializzazione" variant='outlined' onChange={(e)=>{setValues({...values, specalization: e.target.value})}} value={values.specalization}/>
                            <TextField id="clinicNumber" label="Numero Clinica" type="number" variant='outlined' onChange={(e)=>{setValues({...values, clinic_number: e.target.value})}} value={values.clinic_number}/>
                        </>
                    )}
                </CardMedia>

                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Button 
                        onClick={addPost}
                        sx={{
                            backgroundColor: '#93b6ef',
                        }}
                        variant="contained"
                    >
                        Submit
                    </Button>
                </Box>
                
            </Box>


        </Card>


    );
}


/*
* {
    "user": {
        "name": "Nicolò",
        "surname": "Mignani",
        "sex": "maschio",
        "height": 165,
        "tax_id_code": "MGNN2103A79P",
        "birth_date": "2003/03/21",
        "birth_place": "bergamo",
        "nationality": "ITA",
        "address": "vicolo trieste 8",
        "type": "dottore",
        "email": "marco.@gmail.com",
        "created_at": "2024-05-03T12:20:31.398+02:00",
        "updated_at": "2024-05-03T12:20:31.398+02:00",
        "id": 1
    },
    "doctor": {
        "doctor_id": 1,
        "specalization": "pediatra",
        "clinic_number": 12,
        "created_at": "2024-05-03T12:20:31.414+02:00",
        "updated_at": "2024-05-03T12:20:31.415+02:00",
        "id": 1
    }
}*/

/*
* {
    "token": {
        "type": "bearer",
        "token": "MQ.3L-xhPThd7r-2joYzjX0awls9M0tpawFfAWN4TdpYBRf5pls9YXEStE0D0iB",
        "expires_at": "2025-05-03T12:29:40.572+02:00"
    },
    "patient": {
        "id": 1,
        "name": "Nicolò",
        "surname": "Mignani",
        "sex": "maschio",
        "height": 165,
        "tax_id_code": "MGNN2103A79P",
        "telephone_number": null,
        "birth_date": "2003-03-20T23:00:00.000Z",
        "birth_place": "bergamo",
        "nationality": "ITA",
        "address": "vicolo trieste 8",
        "type": "dottore",
        "email": "marco.@gmail.com",
        "picture": "",
        "created_at": "2024-05-03T12:20:31.000+02:00",
        "updated_at": "2024-05-03T12:20:31.000+02:00"
    }
}*/