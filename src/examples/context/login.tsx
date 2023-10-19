import { useContext, useState } from "react"
import { LoginContext } from "./contextProvider"
import { Button, TextField } from "@mui/material"

export const Login = () => {
    const { user, setUser } = useContext(LoginContext);
    const [name, setName] = useState<string>("");
    const [id, setId] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const onLogin = () => {
        setUser({ name: name, id: id, email: email })
    }

    const onLogout = () => {
        setUser({ name: '', id: '', email: '' })
    }

    return (
        <div>
            {user.name === ''
                ? <div style={{ border: '1px black solid', display: 'flex', flexDirection: 'column', padding: 15, gap: 10 }}>
                    <TextField
                        value={name}
                        label={'Name'}
                        onChange={(e) => setName(e.target.value)} />
                    <TextField
                        value={id} label={'ID'}
                        onChange={(e) => { setId(e.target.value) }} />
                    <TextField
                        value={email}
                        label={'Email'}
                        onChange={(e) => { setEmail(e.target.value) }} />
                    <Button
                        variant="contained"
                        onClick={onLogin}
                        disabled={name === '' || email === '' || id === ''} >
                        Login
                    </Button>
                </div>
                : <div style={{ border: '1px black solid', display: 'flex', flexDirection: 'column', padding: 15, gap: 10 }}>
                    <span>Name: {user.name}</span>
                    <span>ID: {user.id}</span>
                    <span>Email: {user.email}</span>
                    <Button onClick={onLogout}>Logout</Button>
                </div>}
        </div>
    )
}