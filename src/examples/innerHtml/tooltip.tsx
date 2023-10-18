type TooltipeProps = {
    value:string

}
export const Tooltip = (props:TooltipeProps) => {
    const{value} = props
    return(
        <div style={{width:'100px',height:'50px',backgroundColor:'silver',borderRadius:'5px',padding:'10px'}}>
            <div dangerouslySetInnerHTML={{__html:value}}></div>
        </div>
    )
}