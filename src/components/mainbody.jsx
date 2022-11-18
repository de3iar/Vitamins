import { useI18n } from "/src/i18n/context";
import SidebarL from './sidebarL/sidebarL';
import MainContent from './mainContent';

function Mainbody() {
    const i18n = useI18n()

    return <div className=" flex bg-base-100 ">
        <SidebarL />
        <MainContent />
    </div>

}
export default Mainbody