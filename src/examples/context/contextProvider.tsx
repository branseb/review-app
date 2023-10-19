import { createContext, useMemo, useState } from "react";

type User = {
    name: string,
    id: string,
    email: string
}

const defaultValue = { name: '', id: '', email: '' }

export const LoginContext = createContext({
    user: defaultValue,
    setUser: (user: User) => {}
})

type LoginProviderProps = {
    children: React.ReactNode
}

export const LoginProvider = (props: LoginProviderProps) => {
    const [user, setUser] = useState(defaultValue);
    return (
        <LoginContext.Provider value={{ user, setUser }}>
            {props.children}
        </LoginContext.Provider>
    )
}