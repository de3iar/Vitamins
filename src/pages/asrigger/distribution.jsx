import { useI18n } from "/src/i18n/context";
import Headings from '/src/components/content/headings';

export default function GetStarted() {
    const i18n = useI18n()
    const name1 = 1
    const imgPath = "/src/assets/images/asrigger/"
    const lp = "asrigger_Distribution:"
    return <article className="prose bg-base-100 m-20 h-fit">

        <Headings h="1" id="withVitamins" class="" text={i18n.t(lp + 'title')}></Headings>
        <Headings h="2" id="vts" class="" text={i18n.t(lp + 't_VTS')}></Headings>
        <p>{i18n.t(lp + 'p_when')}</p>
        <img src={imgPath + "distru_bind.png"} alt="" />
        <p>{i18n.t(lp + 'p_model')}</p>
        <img src={imgPath + "distru_folder.png"} alt="" />
        <img src={imgPath + "distru_vtsconfig.png"} alt="" />
        <p>{i18n.t(lp + 'p_save')}</p>
        <p>{i18n.t(lp + 'p_zip')}</p>
        <img src={imgPath + "distru_save.png"} alt="" />
    </article >

}