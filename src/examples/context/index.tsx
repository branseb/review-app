import { LoginProvider } from "./contextProvider"
import { Login } from "./login"

export const ContextComponentTest = () => {
    return(
        <LoginProvider>
            <Login/>
        </LoginProvider>
    )
}