import { useI18n } from "/src/i18n/context";
import Headings from '/src/components/content/headings';

export default function GetStarted() {
    const i18n = useI18n()


    return <article className="prose bg-base-100 m-12">
        <Headings h="1" id="title" class="content_title pb-8 " text={i18n.t('start_getting_started:title')} />


        <Headings h="2" id="requirements" class="" text={i18n.t('start_getting_started:req.title')}></Headings>
        <Headings h="3" id="req_hardware" text={i18n.t("start_getting_started:req.hardware.title")}></Headings>
        <p>{i18n.t('start_getting_started:req.hardware.p1_follow_types')}</p>
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
                {i18n.t('start_getting_started:req.hardware.bq1_onios')}
            </blockquote>

            <li>
                <p>PC + WebCam</p>
                <ul>
                    <li>Nvidia Broadcast</li>
                </ul>
            </li>
            <blockquote>
                {i18n.t('start_getting_started:req.hardware.bq2_rtx')}<a target={"_blank"} href="https://www.nvidia.com/en-us/geforce/broadcasting/broadcast-sdk/resources/"> Nvidia Broadcast AR SDK</a> Installed.
            </blockquote>
        </ul>


        <Headings h="3" id="req_software" text={i18n.t("start_getting_started:req.software.title")}></Headings>
        <p> {i18n.t('start_getting_started:req.software.p1_render')} <a href="https://store.steampowered.com/app/1325860/VTube_Studio/">Vtube Studio</a></p>


        <Headings h="2" id="instal" class="" text={i18n.t('start_getting_started:instal.title')}></Headings>
        <p>{i18n.t('start_getting_started:instal.p1_down')} <a href="">Github</a></p>
        <p>{i18n.t('start_getting_started:instal.p2_run')}</p>
    </article >

}