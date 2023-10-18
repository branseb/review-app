import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { App } from './components/app.tsx'
import { ControlledComponentTest } from './examples/ControlledComponent/index.tsx'
import { ErrorBoundaryTest } from './examples/errorBoundaries/index.tsx'
import { InnerHtmlTest } from './examples/innerHtml/index.tsx'
import { RefTest } from './examples/ref/index.tsx'
import { SwitchComponentTest } from './examples/switchComponent/index.tsx'
import { UncontrolledComponentTest } from './examples/uncontrolledComponent/index.tsx'

export const examples = [{
  path: '/error-boundaries',
  element: <ErrorBoundaryTest />,
  text: 'Error Boundaries'
},
{
  path: '/innerHTML',
  element: <InnerHtmlTest />,
  text: 'InnerHTML'
},
{
  path: '/ref',
  element: <RefTest />,
  text: 'Using ref'
},
{
  path: '/switch-component',
  element: <SwitchComponentTest />,
  text: 'Switch Component'
},
{
  path: '/controlled-component',
  element: <ControlledComponentTest />,
  text: 'Controlled Component'
},
{
  path: '/uncontrolled-component',
  element: <UncontrolledComponentTest />,
  text: 'Uncontrolled Component'
}]


const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: examples
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
