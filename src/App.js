import React from "react";
import AppRoutes from "./utils/routes/appRoutes";
import {Box} from "@mui/material";
import {SnackbarProvider} from "./components/SnackbarContext.js";

function App() {
    return (<>
        {/*<TooltipItem/>*/}
        <Box sx={{mt: '90px'}}>
            {/*<Outlet/>*/}
            <SnackbarProvider>
                <AppRoutes/>
            </SnackbarProvider>
        </Box>

    </>)
}

export default App;
