import { useI18n } from "/i18n/context";
import Headings from '../..//components/content/headings';
import { getLoactionPath } from '../../js/getLocationPath.js';
import { WikiPage } from "../../components/content/page";
export default function GetStarted() {
    const i18n = useI18n()
    const imgPath = getLoactionPath() + "/assets/images/getting_started/"
    const lg = "req:"
    return <WikiPage>
        <Headings h="1" id="title" class="content_title pb-8 " text={i18n.t(lg + 'title')} />
        <Headings h="2" id="req_hardware" text={i18n.t(lg + "hardware.title")}></Headings>
        <p>{i18n.t(lg + 'hardware.p1_follow_types')}</p>
        <ul>
            <li>
                <p>IOS:</p>
                <ul>
                    <li>
                        <a href="https://apps.apple.com/app/vtube-studio/id1511435444" target={"_blank"}>Vtube Studio</a>
                    </li>
                    <li>
                        <a href="https://apps.apple.com/app/shiori/id1547458369" target={"_blank"}>Shiori</a>
                    </li>
                </ul>
            </li>

            <blockquote>
                {i18n.t(lg + 'hardware.bq1_onios')}
            </blockquote>
            {i18n.t(lg + 'hardware.p2_ios_tech')}

            <li>
                <p>Android:</p>
                <ul>
                    <li>
                        <a href="https://play.google.com/store/apps/details?id=com.denchi.vtubestudio" target={"_blank"}>Vtube Studio</a>
                    </li>
                </ul>
            </li>

            <blockquote>
                {i18n.t(lg + 'hardware.bq_androidIssue')}
            </blockquote>

            <li>
                <p>PC + WebCam</p>
                <ul>
                    <li>Nvidia Broadcast</li>
                </ul>
            </li>
            <blockquote>
                {i18n.t(lg + 'hardware.bq2_rtx')}<a target={"_blank"} href="steam://openurl/https://store.steampowered.com/app/2178540/VTube_Studio__NVIDIA_Broadcast_Tracker/?curator_clanid=39552646"> Steam</a>

            </blockquote>

        </ul>


        <Headings h="2" id="req_software" text={i18n.t(lg + "software.title")}></Headings>
        <p> {i18n.t(lg + 'software.p1_render')} <a target={"_blank"} href="https://store.steampowered.com/app/1325860/VTube_Studio/">Vtube Studio</a></p>
        <blockquote> {i18n.t(lg + 'software.p2_firewall')}</blockquote>


    </WikiPage >

}