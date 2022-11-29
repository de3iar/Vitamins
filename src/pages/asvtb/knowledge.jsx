import { useI18n } from "/src/i18n/context";
import Headings from '/src/components/content/headings';

export default function GetStarted() {
    const i18n = useI18n()
    const name1 = 1
    const imgPath = "/src/assets/images/asvtb/"
    const lp = "asvtb_knowledge:"
    return <article className="prose bg-base-100 m-20 h-fit">

        <Headings h="1" id="knowledge" class="" text={i18n.t(lp + 'title')}></Headings>
        <Headings h="2" id="system_tray" class="" text={i18n.t(lp + 'system_tray.title')}></Headings>
        <p>{i18n.t(lp + 'system_tray.p_mainly')}</p>
        <p>{i18n.t(lp + 'system_tray.p_shortcut')}</p>
        <img src={imgPath + ""} alt="" />pics⭐ 系统托盘截图
        <blockquote>{i18n.t(lp + 'system_tray.bq_attemp')}</blockquote>
        <Headings h="2" id="Settings" class="" text={i18n.t(lp + 'settings.title')}></Headings>
        <img src={imgPath + ""} alt="" />pics⭐ 设置面板截图
        <p>{i18n.t(lp + 'settings.p_autoconn')}</p>
        <p>{i18n.t(lp + 'settings.p_fetch')}</p>
    </article>

}