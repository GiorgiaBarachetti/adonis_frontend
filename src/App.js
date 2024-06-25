import React from "react";
import AppRoutes from "./utils/routes/appRoutes";
import {Box} from "@mui/material";
import {SnackbarProvider} from "./components/SnackbarContext.js";
import AuthProvider from "./pages/auth/AuthProvider";

function App() {
    return (<>
        <AuthProvider>
            {/*<TooltipItem/>*/}
            <Box sx={{mt: '90px'}}>
                {/*<Outlet/>*/}
                <SnackbarProvider>
                    <AppRoutes/>
                </SnackbarProvider>
            </Box>
        </AuthProvider>
    </>)
}

export default App;
