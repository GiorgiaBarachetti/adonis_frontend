import {Box, Card, CardContent, CardHeader, CardMedia, Divider, Typography} from "@mui/material";

const IdentityCard = ({fields}) => {
    return (
        <Box>
            <Card sx={{display: 'flex', flexDirection: 'column', width: '550px'}}>
                <CardHeader
                    style={{backgroundColor: "#f5f5f5"}}
                    title={fields.type === 'dottore' ? "DATI PERSONALI DOTTORE" : "DATI PERSONALI PAZIENTE"}
                />
                <Divider />
                <Box sx={{display: 'flex', flexDirection: 'row'}}>
                    {fields.picture && (
                        <CardMedia
                            component="img"
                            sx={{height: 140}}
                            image={fields.picture} // Ensure this is a URL accessible via HTTP/HTTPS
                            title="identity"
                        />
                    )}
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
                            <Box sx={{display: 'flex', flexDirection: 'column', marginRight: '10px'}}>
                                <Typography sx={{color: 'grey'}}>Cittadinanza</Typography>
                                <Typography>{fields.nationality}</Typography>
                            </Box>
                            <Box sx={{display: 'flex', flexDirection: 'column', marginRight: '10px'}}>
                                <Typography sx={{color: 'grey'}}>Indirizzo</Typography>
                                <Typography>{fields.address}</Typography>
                            </Box>
                            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                <Typography sx={{color: 'grey'}}>Telefono</Typography>
                                <Typography>{fields.telephone_number}</Typography>
                            </Box>
                        </Box>
                        {fields.type === 'dottore' && (
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                margin: '5px'
                            }}>
                                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                    <Typography sx={{color: 'grey'}}>Specializzazione</Typography>
                                    <Typography>{fields.dataDoctor?.specialization}</Typography>
                                </Box>
                                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                    <Typography sx={{color: 'grey'}}>Ambulatorio</Typography>
                                    <Typography>{fields.dataDoctor?.clinic_number}</Typography>
                                </Box>
                            </Box>
                        )}
                    </CardContent>
                </Box>
            </Card>
        </Box>
    );
}

export default IdentityCard;
