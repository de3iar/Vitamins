import { useI18n } from "/i18n/context";
import Headings from '../..//components/content/headings';
import { getLoactionPath } from '../../js/getLocationPath.js';
export default function GetStarted() {
    const i18n = useI18n()
    const name1 = 1
    const imgPath = getLoactionPath() + "/assets/images/asvtb/"
    const lp = "asvtb_knowledge:"
    return <article className="prose bg-base-100 m-20 h-fit">

        <Headings h="1" id="knowledge" class="" text={i18n.t(lp + 'title')}></Headings>
        <Headings h="2" id="system_tray" class="" text={i18n.t(lp + 'system_tray.title')}></Headings>
        <p>{i18n.t(lp + 'system_tray.p_mainly')}</p>
        <p>{i18n.t(lp + 'system_tray.p_shortcut')}</p>
        <img src={imgPath + "know_tray.png"} alt="" />
        <blockquote>{i18n.t(lp + 'system_tray.bq_attemp')}</blockquote>
        <Headings h="2" id="Settings" class="" text={i18n.t(lp + 'settings.title')}></Headings>
        <img src={imgPath + "know_setting.png"} alt="" />
        <p>{i18n.t(lp + 'settings.p_autoconn')}</p>
        <p>{i18n.t(lp + 'settings.p_fetch')}</p>
    </article>

}