import {Box, Card, CardContent, CardHeader, CardMedia, Divider, Typography} from "@mui/material";

const IdentityCard = ({fields}) => {

    // const item = {
    //     picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3PNNRDmwDV_an6mG4zJJyuV3ixJDdEDnIeq_jgXR_RmGHc4qGFI8Fkg2dPq3qcoD_ir0&usqp=CAU',
    //     name: undefined,
    //     surname: undefined,
    //     sex: undefined,
    //     birthDate: undefined,
    //     birthPlace: undefined,
    //     height: undefined,
    //     taxIdCode: undefined,
    //     nationality: undefined,
    //     address: undefined,
    //     telephoneNumber: undefined,
    // }
    console.log(fields)

    return (
        <>
            <Box>
                <Card sx={{display: 'flex', flexDirection: 'column', width: '550px'}}>
                    {fields.type === 'dottore' ?
                        <CardHeader title="DATI PERSONALI DOTTORE"/>
                        :
                        <CardHeader title="DATI PERSONALI PAZIENTE"/>
                    }
                    <Divider variant="middle"/>
                    <Box sx={{display: 'flex', flexDirection: 'row'}}>

                        {/*TODO*/}
                        <CardMedia
                            sx={{height: 140}}
                            image="{{item.image}}"
                            title="identity"/>
                        <CardContent>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                margin: '5px'
                            }}>
                                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                    <Typography sx={{color: 'grey'}}>Nome</Typography>
                                    <Typography>{fields.name}</Typography>
                                </Box>
                                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                    <Typography sx={{color: 'grey'}}>Cognome</Typography>
                                    <Typography>{fields.surname}</Typography>
                                </Box>
                                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                    <Typography sx={{color: 'grey'}}>Sesso</Typography>
                                    <Typography>{fields.sex}</Typography>
                                </Box>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                margin: '5px'
                            }}>
                                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                    <Typography sx={{color: 'grey'}}>Luogo e data di nascita</Typography>
                                    <Typography>{fields.birth_place}, {fields.birth_date}</Typography>
                                </Box>
                                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                    <Typography sx={{color: 'grey'}}>Statura</Typography>
                                    <Typography>{fields.height}</Typography>
                                </Box>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                margin: '5px'
                            }}>
                                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                    <Typography sx={{color: 'grey'}}>Codice fiscale</Typography>
                                    <Typography>{fields.tax_id_code}</Typography>
                                </Box>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                margin: '5px'
                            }}>
                                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                    <Typography sx={{color: 'grey'}}>Cittadinanza</Typography>
                                    <Typography>{fields.nationality}</Typography>
                                </Box>
                                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                    <Typography sx={{color: 'grey'}}>Indirizzo</Typography>
                                    <Typography>{fields.address}</Typography>
                                </Box>
                                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                    <Typography sx={{color: 'grey'}}>Telefono</Typography>
                                    <Typography>{fields.telephoneNumber}</Typography>
                                </Box>
                            </Box>
                            {/*TODO show only if is medico*/}
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                margin: '5px'
                            }}>
                                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                    <Typography sx={{color: 'grey'}}>Specializzazione</Typography>
                                    <Typography>{fields.name}</Typography>
                                </Box>
                                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                    <Typography sx={{color: 'grey'}}>Ambulatorio</Typography>
                                    <Typography>{fields.name}</Typography>
                                </Box>
                            </Box>

                        </CardContent>
                    </Box>
                </Card>
            </Box>
        </>

    )
}

export default IdentityCard;
