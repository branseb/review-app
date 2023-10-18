import { IconButton, Paper } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';


type HeaderProps = {
    onMenuIconClick: () => void;
}

export const Header = (props: HeaderProps) => {
    const { onMenuIconClick } = props;
    return (
        <Paper elevation={5}>
            <IconButton onClick={() => onMenuIconClick()}>
                <MenuIcon />
            </IconButton>
        </Paper>
    )
}