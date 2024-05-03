import { useState } from "react";
import Form from "../../components/Form";
import GeneralTable from "../../components/GeneralTable";
import { Button } from "@mui/material";

const MedicalVisitHistory = () => {
    const [open, setOpen] = useState(false)
    
    const handleClickNew = ()=>{
        setOpen(true)
    }

    const columnsDoctor = [
        {id: 'patient', label: 'Nome Paziente', align: 'left'},
        {id: 'appointmentDay', label: 'Data visita', align: 'left'},
        // TODO enum --> crea variabili
        {id: 'appointmentType', label: 'Tipologia', align: 'left'},
        {id: 'details', label: 'Dettagli', align: 'left'},
        // TODO enum --> crea variabili
        {id: 'status', label: 'Stato', align: 'left'}
    ]

    const rowsDoctor = [
        {
            patient: 'John Doe',
            appointmentDay: '2024-04-15',
            appointmentType: 'Controllo generale',
            details: 'Nessun problema riscontrato.',
            status: 'Confermato'
        },
        {
            patient: 'Jane Smith',
            appointmentDay: '2024-04-20',
            appointmentType: 'Esame del sangue',
            details: 'Esito positivo, nessun problema rilevato.',
            status: 'Confermato'
        },
        {
            patient: 'Michael Johnson',
            appointmentDay: '2024-04-25',
            appointmentType: 'Visita oculistica',
            details: 'Prescrizione per occhiali da vista.',
            status: 'Confermato'
        },
    ];
//if user role = doctor show doctor else patient
const inputData = [
    {
      title: "DATI UTENTE",
      fields: [
        { label: "Name", required: true },
        { label: "Surname", required: true },
        { label: "Age", required: true },
      ],
    },
  ];
    return (<>
    <Button onClick={handleClickNew}>New</Button>
    <Form open={open} inputData={inputData} />
        <GeneralTable columns={columnsDoctor} rows={rowsDoctor}/></>)
}
export default MedicalVisitHistory