import React, {createContext, useContext, useState} from 'react';
import {Alert, Snackbar} from '@mui/material';

const SnackbarContext = createContext();

export const useSnackbar = () => useContext(SnackbarContext);

export const SnackbarProvider = ({children}) => {
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success',
    });

    const showSnackbar = (message, severity = 'success') => {
        setSnackbar({open: true, message, severity});
    };

    const hideSnackbar = () => {
        setSnackbar({...snackbar, open: false});
    };

    return (
        <SnackbarContext.Provider value={{showSnackbar, hideSnackbar}}>
            {children}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={hideSnackbar}
            >
                <Alert onClose={hideSnackbar} severity={snackbar.severity} sx={{width: '100%'}}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </SnackbarContext.Provider>
    );
};
