import React, { useRef } from "react";


export const RefTest = () => {
    const ref = useRef<HTMLDivElement>(null);
    const onScrollButtonClick = () => { 
    ref.current?.scrollIntoView({behavior:'auto'})
}
return (
    <div>
        <button onClick={onScrollButtonClick} >Scroll</button>
        <div style={{ width: '200px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aperiam quod rem voluptatibus.
            Enim reprehenderit excepturi, explicabo iure nesciunt assumenda animi,
            iste rerum doloribus consectetur inventore maiores
            harum incidunt quibusdam alias!
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aperiam quod rem voluptatibus.
            Enim reprehenderit excepturi, explicabo iure nesciunt assumenda animi,
            iste rerum doloribus consectetur inventore maiores
            harum incidunt quibusdam alias!
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aperiam quod rem voluptatibus.
            Enim reprehenderit excepturi, explicabo iure nesciunt assumenda animi,
            iste rerum doloribus consectetur inventore maiores
            harum incidunt quibusdam alias!
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aperiam quod rem voluptatibus.
            Enim reprehenderit excepturi, explicabo iure nesciunt assumenda animi,
            iste rerum doloribus consectetur inventore maiores
            harum incidunt quibusdam alias!
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aperiam quod rem voluptatibus.
            Enim reprehenderit excepturi, explicabo iure nesciunt assumenda animi,
            iste rerum doloribus consectetur inventore maiores
            harum incidunt quibusdam alias!</div>
        <div ref={ref} style={{ backgroundColor: 'skyblue' }}>Element With ref</div>
    </div>
)
}