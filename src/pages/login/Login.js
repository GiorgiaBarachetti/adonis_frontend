import * as React from 'react';
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import {Button, Card, CardActions, CardContent, CardHeader, Divider, Snackbar, Typography} from "@mui/material";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {normalizeUserForSessionStorage} from "../../utils/const";
import {useSnackbar} from "../../components/SnackbarContext.js";

export default function Login() {
    const {showSnackbar} = useSnackbar();
    const [user, setUser] = useState({email: "", password: ""});
    const navigate = useNavigate();

    const goToHomepage = (item) => {
        navigate("/profile", {state: {item: item}});
        // history.replace("/book-appointment");
    };


    const getLogin = async () => {
        try {
            const res = await axios.post('http://localhost:3333/login',
                {email: user.email, password: user.password})
            // .then(response => response.json())
            // .then(data => {
            //const accessToken = data.accessToken;
            // Save the access token in a React state or state management system
            // })
            // normalizeUser(res.data)
            // const data = await res.json();
            // console.log(res.data)
            sessionStorage.setItem('user', JSON.stringify(res.data.patient))
            sessionStorage.setItem('token', res.data.token.token)
            showSnackbar("Login effettuato con successo", "success");

            // sessionStorage.getItem('token', res.data.token.token)
            // setSnackbar({open: true, message: "Login success", key: "ciao"})
            goToHomepage(normalizeUserForSessionStorage(res.data))
            // console.log('normale', normalizeUser(res.data))
        } catch (e) {
            showSnackbar("Errore nella login, ritenta", "error");

            /*SNACKBAR
            * if (!err?.response) {
            setErrMsg('No Server Response');
        } else if (err.response?.status === 400) {
            setErrMsg('Missing Username or Password');
        } else if (err.response?.status === 401) {
            setErrMsg('Unauthorized');
        } else {
            setErrMsg('Login Failed');
        }*/
            console.log(e)
        }

    }

    const goToRegister = () => {
        navigate("/SignIn");
    }

    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                PAZIENTE
                luigiverdi@gmail.com
                Lu1g1V3rd1.
                DOTTORE
                giorgiabara@gmail.com
                Gio5gio.'
                <Card sx={{margin: 'auto', width: '550px'}}>
                    <CardHeader sx={{backgroundColor: "#f5f5f5",textAlign: 'center'}} title='LOGIN'/>
                    <Divider variant='middle'/>
                    <CardContent
                        sx={{display: 'flex', flexDirection: 'column'}}>
                        <TextField
                            sx={{marginTop: '10px'}} required id="email" label="Email"
                            type='email' variant='outlined'
                            placeholder={"marco@gmail.com"}
                            onChange={(e) => setUser({...user, email: e.target.value})}
                        />
                        <TextField
                            required id="password"
                            sx={{marginTop: '10px'}}
                            label="Password" type='password' variant='outlined'
                            placeholder={"333"}
                            onChange={(e) => setUser({...user, password: e.target.value})}
                        />
                    </CardContent>
                    <CardActions style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Button onClick={() => {
                            getLogin()
                        }} size="small">LOGIN</Button>
                    </CardActions>
                </Card>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '20px'
                }}>
                    <Typography>Non hai ancora un account? Registrati qui sotto</Typography>
                    <Button onClick={() => {
                        goToRegister()
                    }}>CREA UN ACCOUNT</Button>
                </div>
            </div>
        </>
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
    "profile": {
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
        * password 333
        "picture": "",
        "created_at": "2024-05-03T12:20:31.000+02:00",
        "updated_at": "2024-05-03T12:20:31.000+02:00"
    }
}*/


///////////////////////////////////////////////////////////////////////////////////
//PAZIENTE
// {
//     "name": "Nicolò",
//     "surname": "Mignani",
//     "sex": "maschio",
//     "height": 175,
//     "taxIdCode": "LGVRD50FC8305199",
//     "telephoneNumber": "+39 322 576 5928",
//     "birthDate": "2002/08/22",
//     "birthPlace": "Gandino",
//     "nationality": "Italia",
//     "address": "Via Formigli, 3",
//     "type": "paziente",
//     "email": "nico.mignani@gmail.com",
//     "password": "Lu1g1V3rd1"
// }
