import React, {useState} from "react";
import {Box, Button, MenuItem, TextField} from "@mui/material";

const Form = () => {
    const [formData, setFormData] = useState({});

    // Handler function to update form data
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handler function to submit form data
    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with formData, e.g., submit to server
        console.log("Form data:", formData);
        // Reset form data if needed
        setFormData({});
    };

    // Options for select fields
    const purposeOptions = ["Checkup", "Treatment", "Consultation"];
    const doctorOptions = ["Dr. Smith", "Dr. Johnson", "Dr. Williams"];

    return (
        <Box
            component="form"
            sx={{
                "& .MuiTextField-root": {m: 1, width: "25ch"},
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            {/* First inputData */}
            <Box>
                <Box>Informazioni personali</Box>
                <Box>
                    <TextField
                        name="name"
                        required
                        label="Nome"
                        value={formData.name || ""}
                        onChange={handleChange}
                    />
                    <TextField
                        name="surname"
                        required
                        label="Cognome"
                        value={formData.surname || ""}
                        onChange={handleChange}
                    />
                    <TextField
                        name="phoneNumber"
                        required
                        label="Numero di telefono"
                        value={formData.phoneNumber || ""}
                        onChange={handleChange}
                    />
                    <TextField
                        name="fiscalCode"
                        required
                        label="Fiscal Code"
                        value={formData.fiscalCode || ""}
                        onChange={handleChange}
                    />
                    <TextField
                        name="dateOfBirth"
                        required
                        label="Date of Birth"
                        type="date"
                        value={formData.dateOfBirth || ""}
                        onChange={handleChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        name="email"
                        required
                        label="Email"
                        type="email"
                        value={formData.email || ""}
                        onChange={handleChange}
                    />
                </Box>
            </Box>

            {/* Second inputData */}
            <Box>
                <Box>Appointment Details</Box>
                <Box>
                    <TextField
                        select
                        name="purpose"
                        required
                        label="Purpose"
                        value={formData.purpose || ""}
                        onChange={handleChange}
                    >
                        {purposeOptions.map((option, index) => (
                            <MenuItem key={index} value={option}>{option}</MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        name="appointmentDate"
                        required
                        label="Appointment Date"
                        type="date"
                        value={formData.appointmentDate || ""}
                        onChange={handleChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        select
                        name="doctor"
                        required
                        label="Doctor"
                        value={formData.doctor || ""}
                        onChange={handleChange}
                    >
                        {doctorOptions.map((option, index) => (
                            <MenuItem key={index} value={option}>{option}</MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        name="details"
                        required
                        label="Details"
                        multiline
                        rows={4}
                        value={formData.details || ""}
                        onChange={handleChange}
                    />
                </Box>
            </Box>

            <Button type="submit">Submit</Button>
        </Box>
    );
};

export default Form;
