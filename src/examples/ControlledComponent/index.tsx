import { useState } from "react";
import { ControlledCounter } from "./controlledCounter"

export const ControlledComponentTest = () => {
    const [counter,setCounter] = useState<number>(0);

    const onClick = () => {
        setCounter(prev=>prev+1)
    }
    return(
        <ControlledCounter value={counter} onClick={onClick}/>
    )
}