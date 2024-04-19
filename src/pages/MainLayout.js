import {Outlet} from 'react-router-dom';
import {Box} from "@mui/material";
import TooltipItem from "../components/TooltipItem";

// interface Props{
//     title: string
// }
const MainLayout = () => {
    return (<>
        <TooltipItem/>
        <Box sx={{mt: '90px'}}>
            <Outlet/>
        </Box>
    </>)
}

export default MainLayout