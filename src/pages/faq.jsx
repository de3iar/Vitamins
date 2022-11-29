import { useI18n } from "/src/i18n/context";
import Headings from '/src/components/content/headings';

export default function GetStarted() {
    const i18n = useI18n()
    const name1 = 1
    const imgPath = "/src/assets/images/faq/"
    const videoPath = "/src/assets/videos/faq/"
    const lp = "faq:"
    return <article className="prose bg-base-100 m-20 h-fit">

        <Headings h="1" id="" class="" text={i18n.t(lp + 'title')}></Headings>
        <Headings h="2" id="vtslag" class="" text={i18n.t(lp + 't_vtslag')}></Headings>
        <li>VBridger v1.07(30/11/2022)
            <video src={videoPath + "faq_jitter_vb.mp4"} controls muted className="w-3/6"></video>
        </li>
        <li>Vitamins
            <video src={videoPath + "faq_jitter_vita.mp4"} controls muted className="w-3/6"></video>
        </li>
        <p>{i18n.t(lp + 'p_mech')}</p>
        <li>{i18n.t(lp + 'li_conti')}</li>
        <li>{i18n.t(lp + 'li_block')}</li>
        <li>{i18n.t(lp + 'li_render')}</li>
        <li>{i18n.t(lp + 'li_comone')}</li>
        <li>{i18n.t(lp + 'li_renderrec')}</li>
        <li>{i18n.t(lp + 'li_still')}</li>
        <li>{i18n.t(lp + 'li_render')}</li>
        <p>...</p>
        <p>{i18n.t(lp + 'p_occurs')}</p>
        <p>{i18n.t(lp + 'p_nodef')}</p>
        <p>{i18n.t(lp + 'p_tored')}</p>
        <p>{i18n.t(lp + 'p_vtscould')}</p>
        <blockquote>{i18n.t(lp + 'bq_monitor')}</blockquote>
        <strong>{i18n.t(lp + 'st_above')}  <a href="http://github.com/DenchiSoft/VTubeStudio/wiki/Lag-Troubleshooting" target="_blank" rel="">{i18n.t(lp + 'a_lag')}</a></strong>


    </article >

}