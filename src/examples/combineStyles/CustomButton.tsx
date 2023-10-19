import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles({ name: 'custom-button' })(() => ({
    button: {
        border: '1px black solid',
        borderRadius: '25px',
        padding:10
    },
    buttonPrimary: {
        color: 'red'
    },
    buttonSecondary: {
        color: 'blue'
    }
}))

type CustomButtonProps = {
    children?: React.ReactNode,
    variant?: 'primary' | 'secondary'
}

export const CustomButton = (props: CustomButtonProps) => {
    const { children, variant } = props;
    const { classes, cx } = useStyles();


    return (
        <button className={cx(classes.button, variant === 'secondary' ? classes.buttonSecondary : classes.buttonPrimary)}>
            {children}
        </button >

    )
}