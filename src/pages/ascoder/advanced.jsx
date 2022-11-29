import { useI18n } from "/src/i18n/context";
import Headings from '/src/components/content/headings';

export default function GetStarted() {
    const i18n = useI18n()
    const name1 = 1
    const imgPath = "/src/assets/images/asvtb/"
    const lp = "ascoder_advanced:"
    return <article className="prose bg-base-100 m-20 h-fit">

        <Headings h="1" id="" class="" text={i18n.t(lp + 'title')}></Headings>
        <Headings h="2" id="" class="" text={i18n.t(lp + 't_order')}></Headings>

        <p>{i18n.t(lp + 'p_toptobot')}</p>
        <p>{i18n.t(lp + 'p_adjust')}</p>
        <Headings h="2" id="" class="" text={i18n.t(lp + 't_ref')}></Headings>
        <p>{i18n.t(lp + 'p_objref')}</p>
        <p>{i18n.t(lp + 'p_note')}</p>
        <p>{i18n.t(lp + 'p_however')}</p>
        <p>{i18n.t(lp + 'p_119')}</p>
        <Headings h="2" id="" class="" text={i18n.t(lp + 't_storage')}></Headings>
        <p>{i18n.t(lp + 'p_class')}</p>
        <p>{i18n.t(lp + 'p_count')}</p>
        <Headings h="2" id="" class="" text={i18n.t(lp + 't_vplugin')}></Headings>
        <p>{i18n.t(lp + 'p_builtin')}</p>
        <li>{i18n.t(lp + 'li_vts')}</li>
        <li>{i18n.t(lp + 'li_sods')}</li>
        <p>{i18n.t(lp + 'p_next')}</p>
        <Headings h="2" id="" class="" text={i18n.t(lp + 't_usevts')}></Headings>
        <p>{i18n.t(lp + 'p_fetch')}</p>
        <p>{i18n.t(lp + 'p_access')}</p>
    </article >

}