import { useState } from "react";

export const Counter = () => {
    const [counter,setCounter] = useState<number>(0);
    const buttonClick = () => {
        setCounter(prev=>prev+1);
    }

    return(
        <div style={{border: '1px red solid', gap: 30, height: '50px', alignItems: 'center', padding: 15, display: 'flex', justifyContent: 'space-between' }}>
            Uncontrolled: {counter}
            <button onClick={buttonClick}>Click</button>
        </div>
    )
}