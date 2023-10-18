import React from 'react'
import ReactDOM from 'react-dom/client'
import { ErrorBoundaryTest } from './examples/errorBoundaries/index.tsx'
import { InnerHtmlTest } from './examples/innerHtml/index.tsx'
import { SwitchComponentTest } from './examples/switchComponent/index.tsx'
import { RefTest } from './examples/ref/index.tsx'
import { UncontrolledComponentTest } from './examples/uncontrolledComponent/index.tsx'
import { ControlledComponentTest } from './examples/ControlledComponent/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundaryTest />
    <InnerHtmlTest/>
    <SwitchComponentTest/>
    <UncontrolledComponentTest/>
    <ControlledComponentTest/>
    <RefTest/>
  </React.StrictMode>,
)
