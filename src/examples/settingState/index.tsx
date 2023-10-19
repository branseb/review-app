import { Button } from "@mui/material";
import { useState } from "react";

export const SettingState = () => {
    const [firstCounter, setFirtstCounter] = useState<number>(0);
    let [secondCounter, setSecondCounter] = useState<number>(0);

    const firstButtonClick = () => {
        setFirtstCounter(prev => prev + 1)
    };

    const secondButtonClick = () => {
        secondCounter = secondCounter + 1
    };

    return (
        <div style={{display:'flex',flexDirection:'column', padding:20,gap:10, border:'1px black solid'}}>
            <div style={{display:'flex',alignItems:'center',gap:10}}>
                <span>{firstCounter}</span>
                <Button onClick={firstButtonClick} variant="contained">{'setState(prev=>prev+1)'}</Button>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:10}}>
                <span>{secondCounter}</span>
                <Button onClick={secondButtonClick} variant="contained">state=state+1</Button>
            </div>
        </div >
    )
}