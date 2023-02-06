import { useI18n } from "/i18n/context";
import Headings from '../../components/content/headings';
import { getLoactionPath } from '../../js/getLocationPath.js';
export default function GetStarted() {
    const i18n = useI18n()
    const imgPath = getLoactionPath() + "/assets/images/getting_started/"
    const lg = "asvtb_use:"
    return <article className="prose bg-base-100 m-20 h-fit">
        <Headings h="1" id="title" class="content_title pb-8 " text={i18n.t(lg + 'title')} />
        <Headings h="2" id="exa_withVTS" text={i18n.t(lg + "t1_withVTS")}></Headings>
        <Headings h="4" text={i18n.t(lg + "t2_connectios")}></Headings>
        <ul>
            <li>
                <p>{i18n.t(lg + "li_samelan")}</p>
            </li>
            <li>
                <p>{i18n.t(lg + "li_startios")}</p>
                <img src={imgPath + "getStart_example_connectIos_ios.png"} alt="" />
            </li>
            <li>
                <p>{i18n.t(lg + "li_firstIndi")}</p>
                <img src={imgPath + "getStart_example_connectIos_vita.png"} alt="" />
            </li>
            <li>
                <p>{i18n.t(lg + "li_connected")}</p>
            </li>

        </ul>
        <Headings h="4" text={i18n.t(lg + "t_connectpcVTS")}></Headings>

        <ul>
            <li>
                <p>{i18n.t(lg + "li_start")}</p>
                <img src={imgPath + "getStart_example_pcvts_plg.png"} alt="" />
            </li>
            <li>
                <p>{i18n.t(lg + "li_secIndi")}</p>

            </li>
            <li>
                <p>{i18n.t(lg + "li_clickallow")}</p>
                <img src={imgPath + "getStart_example_pcvts_allow.png"} alt="" />
            </li>
            <li>
                <p>{i18n.t(lg + "li_connsecc")}</p>
                <img src={imgPath + "getStart_example_pcvts_mana.png"} alt="" />

            </li>

        </ul>

        <p>{i18n.t(lg + "p_prefix")} <a href={"/asvtb_prefix" + "?lang=" + i18n.language}>{i18n.t(lg + "a_prefix")}</a>.</p>
    </article >

}