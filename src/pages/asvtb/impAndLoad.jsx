import { useI18n } from "/i18n/context";
import Headings from '../..//components/content/headings';
import { getLoactionPath } from '../../js/getLocationPath.js';
import { WikiPage } from "../../components/content/page";
export default function GetStarted() {
    const i18n = useI18n()
    const name1 = 1
    const imgPath = getLoactionPath() + "/assets/images/asvtb/"
    const lp = "asvtb_impAndLoad:"
    return <WikiPage>

        <Headings h="1" id="impAndLoad" class="" text={i18n.t(lp + 'title')}></Headings>
        <p>{i18n.t(lp + 'p_load')}</p>
        <img src={imgPath + "imp_load.png"} alt="" />
        <p>{i18n.t(lp + 'p_imp')}</p>
        <img src={imgPath + "imp_import.png"} alt="" />
    </WikiPage >

}