
const numbers = [
    '09546466541',
    '09548646846',
    '09204543198',
    '09011233211'
];

export const MobileList = () => {

    return (
        <div>
            <span>MobileList</span>
            {numbers.map((numb, i) => <div key={i}>{numb}</div>)}
        </div>
    )
}