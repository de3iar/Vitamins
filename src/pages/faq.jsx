import { useI18n } from "/i18n/context";
import Headings from '../components/content/headings';
import { getLoactionPath } from '../js/getLocationPath.js';
import { WikiPage } from "../components/content/page";
export default function GetStarted() {
    const i18n = useI18n()
    const name1 = 1
    const imgPath = getLoactionPath() + "/assets/images/faq/"
    const videoPath = getLoactionPath() + "/assets/videos/faq/"
    const lp = "faq:"
    return <WikiPage>

        <Headings h="1" id="" class="" text={i18n.t(lp + 'title')}></Headings>
        <Headings h="2" id="wifiConn" class="" text={i18n.t(lp + 't_wifiConn')}></Headings>
        <Headings h="3" id="wireLessConn" class="" text={i18n.t(lp + 't_wireLessConn')}></Headings>
        <div className=" space-y-8">
            <ul><span className="text-lg font-bold text-accent ">{i18n.t(lp + 'ul_phoneShowsConnected')}:</span>
                <li>{i18n.t(lp + 'li_runInAdmin')}</li>
                <li>{i18n.t(lp + 'li_iosLocalNet')}</li>
            </ul>

            <ul><span className="text-lg font-bold text-accent">{i18n.t(lp + 'ul_phoneNotConnected')}:</span>
                <li>{i18n.t(lp + 'li_connToSameRouter')}</li>

                <p>{i18n.t(lp + 'p_traDirectConn')}</p>
                <li>{i18n.t(lp + 'li_showIp')}</li>

                <img src={imgPath + "faq_compareIp.png"} className="max-w-2xl" alt="" />
                <p>{i18n.t(lp + 'p_compareIP')}</p>
                <p>{i18n.t(lp + 'p_traDirectConn')}</p>

                <li className=" font-bold">{i18n.t(lp + 'li_settingNotSame')}:</li>
                <img src={imgPath + "faq_iosIP.PNG"} className=" max-w-sm" alt="" />
                <p>{i18n.t(lp + 'p_useSetting')}</p>
            </ul>
        </div>






        <Headings h="2" id="vtslag" class="" text={i18n.t(lp + 't_vtslag')}></Headings>
        <li>VBridger v1.07(30/11/2022)
            <video src={videoPath + "faq_jitter_vb_x264.mp4"} controls muted className="w-3/6"></video>
        </li>
        <li>Vitamins
            <video src={videoPath + "faq_jitter_vita_x264.mp4"} controls muted className="w-3/6"></video>
        </li>
        <strong>{i18n.t(lp + 'p_mech')}</strong>
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


    </WikiPage>

}