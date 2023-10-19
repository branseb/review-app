import { ItemsList } from "./List"

export const brands = [
    'Audi',
    'BMW',
    'Citroen',
    'Dacia',
    'Ford',
    'GMC',
    'Honda',
    'Infinty',
    'Jaguar'
]

export const CloneElementTest = () => {
    return (
        <ItemsList>
            {brands.map(x => <div key={x}>{x}</div>)}
        </ItemsList>
    )
}