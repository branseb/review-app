import { MobileList } from './mobileList';
import { DesktopList } from './desktopList';

const COMPONENTS = {
    mobile: MobileList,
    desktop: DesktopList
}

type SwitchComponentProps = {
    mode:'mobile'|'desktop',
}

export const SwitchComponent = (props: SwitchComponentProps) => {
    const Handler = COMPONENTS[props.mode]
    return <Handler/>
    
}