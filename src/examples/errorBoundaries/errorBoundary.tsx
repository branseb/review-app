import React, { ReactNode } from "react";

type ErrorBoundaryProps = {
    children :ReactNode
}

type ErrorBoundaryState = {
    hasError:boolean
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps,ErrorBoundaryState> {
    
    public state:ErrorBoundaryState = {
        hasError:false
    };

    static getDerivedStateFromError(_:Error):ErrorBoundaryState{
        return {hasError:true}
    }
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error(error,errorInfo)
    }
    render() {
        if(this.state.hasError){
            return <h1>Something it wrong...</h1>;
        }
        return this.props.children;
    }
}