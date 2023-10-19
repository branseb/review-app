import { ListItem } from "@mui/material"
import { Children, ReactElement, ReactNode, cloneElement, useState } from "react"

type ItemsListProps = {
    children: ReactElement[];
}

export const ItemsList = (props: ItemsListProps) => {
    const [activeItem, setActiveItem] = useState(0)
    return (
        <div style={{ background: 'white', padding: 20, display: 'flex', flexDirection: 'column', gap: 20 }}>
            {Children.map(props.children, (child, index) =>
                cloneElement(child, {
                    style: { color: 'white', background: activeItem === index ? 'red' : 'black' },
                    onClick: () => setActiveItem(index)
                })
            )}
        </div>
    )
}
