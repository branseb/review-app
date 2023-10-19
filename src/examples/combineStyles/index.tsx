import { CustomButton } from "./CustomButton"

export const CombineSTylesTest = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
            <CustomButton>
                Primary
            </CustomButton>
            <CustomButton variant="primary">
                Primary
            </CustomButton>
            <CustomButton variant="secondary">
                Secondary
            </CustomButton>
        </div>
    )
}