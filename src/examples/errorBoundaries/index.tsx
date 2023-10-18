import { ErrorBoundary } from "./errorBoundary"
import { SimulateError } from "./simulateError"

export const ErrorBoundaryTest = () => {
    return (
        <ErrorBoundary>
            <SimulateError />
        </ErrorBoundary>
    )
}