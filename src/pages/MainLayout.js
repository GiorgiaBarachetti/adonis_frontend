import {Outlet} from 'react-router-dom';
import {Box} from "@mui/material";

// interface Props{
//     title: string
// }
const MainLayout = () => {
    return (<>

        <Box sx={{mt: '90px'}}>
            <Outlet/>
        </Box>
    </>)
}

export default MainLayout