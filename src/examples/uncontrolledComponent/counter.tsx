import { useState } from "react";

export const Counter = () => {
    const [counter,setCounter] = useState<number>(0);
    const buttonClick = () => {
        setCounter(prev=>prev+1);
    }

    return(
        <div style={{border:'1px black solid', width:170 , display:'flex', justifyContent:'space-between'}}>
            Uncontrolled: {counter}
            <button onClick={buttonClick}>Click</button>
        </div>
    )
}