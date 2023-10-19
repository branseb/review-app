import { useState } from "react";
import { SubmitButton } from "./submitButton"

export const ReusingComponentTest = () => {
    const [counter, setCounter] = useState<number>(0);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: '20px', gap: 20 }}>
            <SubmitButton />
            <SubmitButton disabled onClick={() => { }}>
                reusing button
            </SubmitButton>
            <SubmitButton onClick={() => { setCounter(prev => prev + 1) }}>
                counter : {counter}
            </SubmitButton>
        </div>
    )
}