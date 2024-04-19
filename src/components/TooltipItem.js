import {AppBar, Button, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const TooltipItem = () => {
    return (<>
        <AppBar positionn='static'>
            <Toolbar>

                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    titolo TODO ADD PROPS
                </Typography>
                <Button color="inherit">Login</Button>
                <Button color="inherit">Login</Button>
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