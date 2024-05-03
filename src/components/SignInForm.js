import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {Box, Card, CardContent, CardHeader, CardMedia, Divider, Typography} from "@mui/material";
import { Padding } from '@mui/icons-material';

export default function SignInForm(){
    const [type, setType] = React.useState('');
    const[sex, setSex] =React.useState('')

    const changeHandel = (event) =>{
        setSex(event.target.value)
    };

  const handleChange = (event) => {
    setType(event.target.value);
  };
    return (
        
            <Card sx={{margin:'auto',  width:'550px'}}>
                <CardHeader sx={{backgroundColor:'#32de84'}} title='DATI PERSONALI'>
                    <Typography variant="h1">Inserimento dati utente</Typography>
                </CardHeader>
                <Divider variant='middle'/>
                <Box sx={{disaply:'flex', flexDirection:'column', width:'500px',marginX:'auto'}}>
                    
                    <CardMedia sx={{display:'flex',flexDirection:'row', justifyContent:'space-between',marginTop:'20px'}}>
                        <TextField required  id="nome" label="Nome" variant='outlined'/>
                        <TextField required id="cognome" label="Cognome" variant='outlined'/>
                    </CardMedia>

                    <CardMedia sx={{display:'flex',flexDirection:'row', justifyContent:'space-between',marginTop:'20px'}}>
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
                    
                    <CardMedia sx={{display:'flex',flexDirection:'row', justifyContent:'space-between', marginTop:'20px'}}>
                        <TextField required id="taxIdCode" label="Codice Fiscale" variant='outlined'/>
                        <TextField required id="telephoneNumber" label="Numero di telefono" variant='outlined'/>
                    </CardMedia>

                    <CardMedia sx={{display:'flex', flexDirection:'row',justifyContent:'space-between', marginTop:'20px'}}>
                        <TextField  required id="birthDate" label="Data di Nascita" type='date'InputLabelProps={{
                            shrink: true,
                        }}/>
                        <TextField  required id="birthPlace" label="Luogo di Nascita" variant='outlined'/>
                    </CardMedia>
                    
                    <CardMedia sx={{display:'flex', flexDirection:'row',justifyContent:'space-between', marginTop:'20px'}}>
                        <TextField required id="nationality" label="Nazionalità" variant='outlined'/>
                        <TextField required id="address" label="Indirizzo" variant='outlined'/>
                    </CardMedia>   

                    <CardMedia sx={{display:'flex', flexDirection:'row',justifyContent:'space-between', marginTop:'20px'}}>
                        <TextField required id="email" label="Email" type='email' variant='outlined'/>
                        <TextField required id="password" label="Password" type='password' variant='outlined' />
                    </CardMedia> 

                    <CardMedia sx={{display:'flex', flexDirection:'row',justifyContent:'space-between', marginTop:'20px', marginBottom:'20px'}}>
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


