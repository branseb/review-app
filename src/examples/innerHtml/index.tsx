import { TextField } from "@mui/material"
import { Tooltip } from "./tooltip"
import { useState } from "react"

export const InnerHtmlTest = () => {
    const [value, setValue] = useState<string>('')

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 15, justifyContent: 'center', alignItems: 'center' }}>
            <Tooltip value="this its only text" />
            <Tooltip value="<div style='background:red'>this its html</div><a href='google.com'>google</a>" />
            <div style={{ display: 'flex', flexDirection: 'column', padding: 15, gap: 15, alignItems: 'center', border: '1px black solid' }}>
                <span>Try me:</span>
                <TextField helperText={'Write your code or text'} onChange={e => setValue(e.target.value)}></TextField>
                <Tooltip value={value} />
            </div>
        </div>
    )
}