import { Paper } from "@mui/material"

type MenuProps = {
    children: React.ReactNode
}

export const Menu = (props: MenuProps) => {
    const { children } = props;

    return (
        <Paper elevation={5} style={{ display:'flex',flexDirection:'column',height:'100%', padding:10 , gap:5}}>
            {children}
        </Paper>
    )
}