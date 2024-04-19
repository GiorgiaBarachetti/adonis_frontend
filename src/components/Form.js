import {Box, TextField} from "@mui/material";

const Form = ({item}) => {

    return (<>
        <Box component="form"
             sx={{
                 '& .MuiTextField-root': {m: 1, width: '25ch'},
             }}
             noValidate
             autoComplete="off">

            <Box>
                DATI UTENTE
                <Box>
                    {/*{item.map(it => <p>{{it}}</p>)}*/}
                    <TextField required label="Filled"/>
                    <TextField required label="Filled"/>
                    <TextField required label="Filled"/>
                </Box>

                <Box>
                    <TextField required label="Filled"/>
                    <TextField required label="Filled"/>
                    <TextField required label="Filled"/>
                </Box>
            </Box>
            <Box>
                DATI VISITA
                <Box>
                    <TextField required label="Filled"/>
                    <TextField required label="Filled"/>
                    <TextField required label="Filled"/>
                    <TextField required label="Filled"/>
                </Box>
            </Box>
        </Box>
    </>)
}
export default Form;