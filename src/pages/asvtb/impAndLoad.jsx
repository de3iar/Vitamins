import { useI18n } from "/src/i18n/context";
import Headings from '/src/components/content/headings';

export default function GetStarted() {
    const i18n = useI18n()
    const name1 = 1
    const imgPath = "/src/assets/images/asvtb/"
    const lp = "asvtb_impAndLoad:"
    return <article className="prose bg-base-100 m-20 h-fit">

        <Headings h="1" id="impAndLoad" class="" text={i18n.t(lp + 'title')}></Headings>
        <p>{i18n.t(lp + 'p_load')}</p>
        <img src={imgPath + "imp_load.png"} alt="" />
        <p>{i18n.t(lp + 'p_imp')}</p>
        <img src={imgPath + "imp_import.png"} alt="" />
    </article >

}