import {AppBar, IconButton, Toolbar, Tooltip, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {useNavigate} from "react-router-dom";
import Avatar from "@mui/material/Avatar";

const TooltipItem = (props) => {
    const cache = sessionStorage.getItem("user")
    const user = JSON.parse(cache)
    const initials = user ? `${user.name.charAt(0)}${user.surname.charAt(0)}` : '';
    return (<>
        <AppBar positionn='static'>
            <Toolbar>
                {props.back
                    ?
                    <div style={{marginRight:'10px'}}>{props.back}</div>
                : <></>}
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    {props.title}
                </Typography>
                {props.children}
                <Tooltip title={`${user.name} ${user.surname}`}>
                    <Avatar sx={{ marginLeft: '20px',bgcolor: 'purple' }}>{initials}</Avatar>
                </Tooltip>
                {props.logout}
            </Toolbar>
        </AppBar>
    </>)
}
export default TooltipItem;
