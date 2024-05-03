import React from "react";
import AppRoutes from "./utils/routes/appRoutes";
import {Box} from "@mui/material";

function App() {
    return (<>
        {/*<TooltipItem/>*/}
        <Box sx={{mt: '90px'}}>
            {/*<Outlet/>*/}
            <AppRoutes/>
        </Box>

    </>)
}

export default App;
