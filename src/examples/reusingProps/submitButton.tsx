import { Button, ButtonProps } from "@mui/material";

type SubmitButtonProps = ButtonProps & {
    children?: React.ReactNode
}


export const SubmitButton = (props: SubmitButtonProps) => {
    const { children, ...other } = props;
    return (
        <Button color="primary" variant="contained" {...other}>
            {children ? children : 'Submit'}
        </Button>

    )
}