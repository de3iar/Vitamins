import { useI18n } from "/i18n/context";
import Headings from '/src/components/content/headings';

export default function GetStarted() {
    const i18n = useI18n()
    const imgPath = "/assets/images/getting_started/"
    const lg = "start:"
    return <article className="prose bg-base-100 m-20 h-fit">
        <Headings h="1" id="title" class="content_title pb-8 " text={i18n.t(lg + 't_use')} />


        <Headings h="2" id="requirements" class="" text={i18n.t(lg + 'req.title')}></Headings>
        <Headings h="3" id="req_hardware" text={i18n.t(lg + "req.hardware.title")}></Headings>
        <p>{i18n.t(lg + 'req.hardware.p1_follow_types')}</p>
        <ul>
            <li>
                <p>IOS:</p>
                <ul>
                    <li>
                        <a href="https://apps.apple.com/app/vtube-studio/id1511435444" target={"_blank"}>Vtube Studio</a>
                    </li>
                </ul>
            </li>

            <blockquote>
                {i18n.t(lg + 'req.hardware.bq1_onios')}
            </blockquote>
            {i18n.t(lg + 'req.hardware.p2_ios_tech')}
            <li>
                <p>PC + WebCam</p>
                <ul>
                    <li>Nvidia Broadcast</li>
                </ul>
            </li>
            <blockquote>
                {i18n.t(lg + 'req.hardware.bq2_rtx')}<a target={"_blank"} href="https://www.nvidia.com/en-us/geforce/broadcasting/broadcast-sdk/resources/"> Nvidia Broadcast AR SDK</a>

            </blockquote>
            <img src={imgPath + "req_nvsdk.png"} alt="" />
        </ul>


        <Headings h="3" id="req_software" text={i18n.t(lg + "req.software.title")}></Headings>
        <p> {i18n.t(lg + 'req.software.p1_render')} <a target={"_blank"} href="https://store.steampowered.com/app/1325860/VTube_Studio/">Vtube Studio</a></p>
        <blockquote> {i18n.t(lg + 'req.software.p2_firewall')}</blockquote>


        <Headings h="2" id="Example" class="" text={i18n.t(lg + 'example.title')}></Headings>
        <Headings h="3" id="exa_withVTS" text={i18n.t(lg + "example.t1_withVTS")}></Headings>
        <Headings h="4" text={i18n.t(lg + "example.t2_connectios")}></Headings>
        <ul>
            <li>
                <p>{i18n.t(lg + "example.li_samelan")}</p>
            </li>
            <li>
                <p>{i18n.t(lg + "example.li_startios")}</p>
                <img src={imgPath + "getStart_example_connectIos_ios.png"} alt="" />
            </li>
            <li>
                <p>{i18n.t(lg + "example.li_firstIndi")}</p>
                <img src={imgPath + "getStart_example_connectIos_vita.png"} alt="" />
            </li>
            <li>
                <p>{i18n.t(lg + "example.li_connected")}</p>
            </li>

        </ul>
        <Headings h="4" text={i18n.t(lg + "example.t_connectpcVTS")}></Headings>

        <ul>
            <li>
                <p>{i18n.t(lg + "example.li_start")}</p>
                <img src={imgPath + "getStart_example_pcvts_plg.png"} alt="" />
            </li>
            <li>
                <p>{i18n.t(lg + "example.li_secIndi")}</p>

            </li>
            <li>
                <p>{i18n.t(lg + "example.li_clickallow")}</p>
                <img src={imgPath + "getStart_example_pcvts_allow.png"} alt="" />
            </li>
            <li>
                <p>{i18n.t(lg + "example.li_connsecc")}</p>
                <img src={imgPath + "getStart_example_pcvts_mana.png"} alt="" />

            </li>

        </ul>

        <p>{i18n.t(lg + "example.p_prefix")} <a href={"/asvtb_prefix" + "?lang=" + i18n.language}>{i18n.t(lg + "example.a_prefix")}</a>.</p>
    </article >

}