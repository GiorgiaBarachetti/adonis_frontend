import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {Box, Card, CardHeader, CardMedia, Divider, Typography} from "@mui/material";

export default function SignInForm() {
    const [type, setType] = React.useState('');
    const [sex, setSex] = React.useState('')

    const changeHandel = (event) => {
        setSex(event.target.value)
    };

    const handleChange = (event) => {
        setType(event.target.value);
    };
    return (

        <Card sx={{margin: 'auto', width: '550px'}}>
            <CardHeader sx={{backgroundColor: '#32de84'}} title='DATI PERSONALI'>
                <Typography variant="h1">Inserimento dati utente</Typography>
            </CardHeader>
            <Divider variant='middle'/>
            <Box sx={{disaply: 'flex', flexDirection: 'column', width: '500px', marginX: 'auto'}}>

                <CardMedia
                    sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '20px'}}>
                    <TextField required id="nome" label="Nome" variant='outlined'/>
                    <TextField required id="cognome" label="Cognome" variant='outlined'/>
                </CardMedia>

                <CardMedia
                    sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '20px'}}>
                    <div>
                        <InputLabel id="sex_label">Sesso</InputLabel>
                        <Select labelId='sex_label' value={sex} label="Sesso" onChange={changeHandel}>
                            <MenuItem value={'Maschio'}>Maschio</MenuItem>
                            <MenuItem value={'Femmina'}>Femmina</MenuItem>
                        </Select>
                    </div>

                    <TextField required id="height" label="Altezza(cm)" type="number" variant='outlined'/>

                    <div>
                        <InputLabel id="type_label">Tipo di utente</InputLabel>
                        <Select labelId='type_label' value={type} label="Tipo di utente" onChange={handleChange}>
                            <MenuItem value={'Dottore'}>Dottore</MenuItem>
                            <MenuItem value={'Paziente'}>Paziente</MenuItem>
                        </Select>
                    </div>
                </CardMedia>

                <CardMedia
                    sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '20px'}}>
                    <TextField required id="taxIdCode" label="Codice Fiscale" variant='outlined'/>
                    <TextField required id="telephoneNumber" label="Numero di telefono" variant='outlined'/>
                </CardMedia>

                <CardMedia
                    sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '20px'}}>
                    <TextField required id="birthDate" label="Data di Nascita" type='date' InputLabelProps={{
                        shrink: true,
                    }}/>
                    <TextField required id="birthPlace" label="Luogo di Nascita" variant='outlined'/>
                </CardMedia>

                <CardMedia
                    sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '20px'}}>
                    <TextField required id="nationality" label="Nazionalità" variant='outlined'/>
                    <TextField required id="address" label="Indirizzo" variant='outlined'/>
                </CardMedia>

                <CardMedia
                    sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '20px'}}>
                    <TextField required id="email" label="Email" type='email' variant='outlined'/>
                    <TextField required id="password" label="Password" type='password' variant='outlined'/>
                </CardMedia>

                <CardMedia sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: '20px',
                    marginBottom: '20px'
                }}>
                    {type === "Dottore" && (
                        <>
                            <TextField id="specalization" label="Specializzazione" variant='outlined'/>
                            <TextField id="clinicNumber" label="Numero Clinica" type="number" variant='outlined'/>
                        </>
                    )}
                </CardMedia>
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