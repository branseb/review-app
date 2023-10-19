type CounterProps = {
    value: number,
    onClick: () => void
};

export const ControlledCounter = (props: CounterProps) => {
    const { value, onClick } = props;

    return (
        <div style={{ border: '1px red solid', gap: 30, height: '50px', alignItems: 'center', padding: 15, display: 'flex', justifyContent: 'space-between' }}>
            Controlled: {value}
            <button onClick={() => onClick()}>Click</button>
        </div>
    )
}