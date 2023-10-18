import { Tooltip } from "./tooltip"

export const InnerHtmlTest = () => {


    return(
        <div>
            <Tooltip value="this its only text"/>
            <Tooltip value="<div style='background:red'>this its html</div><a href='google.com'>google</a>"/>
        </div>
    )
}