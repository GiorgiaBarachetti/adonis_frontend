import {AppBar, Button, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {useNavigate} from "react-router-dom";

const TooltipItem = ({title, buttonTitle1, route1, buttonTitle2, route2}) => {
    const navigate = useNavigate()
    return (<>
        <AppBar positionn='static'>
            <Toolbar>

                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    {title}
                </Typography>
                <Button onClick={route1} color="inherit">{buttonTitle1}</Button>
                <Button onClick={() => navigate(`${route2}`)} color="inherit">{buttonTitle2}</Button>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ml: 2}}
                >
                    <MenuIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
    </>)
}
export default TooltipItem;