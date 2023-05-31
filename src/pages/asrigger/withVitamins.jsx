import { useI18n } from "/i18n/context";
import Headings from '../../components/content/headings';
import { getLoactionPath } from '../../js/getLocationPath.js';
import { WikiPage } from "../../components/content/page";
export default function GetStarted() {
    const i18n = useI18n()
    const name1 = 1
    const imgPath = getLoactionPath() + "/assets/images/asrigger/"
    const videoPath = getLoactionPath() + "/assets/videos/asrigger/"
    const lp = "asrigger_withVitamins:"
    return <WikiPage>

        <Headings h="1" id="withVitamins" class="" text={i18n.t(lp + 'title')}></Headings>
        <strong>{i18n.t(lp + 's_this')} </strong>
        <p>{i18n.t(lp + 'p_complete')} </p>
        <Headings h="2" id="arkit" class="" text={i18n.t(lp + 't_arkit')}></Headings>
        <p>{i18n.t(lp + 'p_arkit')} <a href="https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation">Arkit</a></p>
        <p>{i18n.t(lp + 'p_observe')} </p>

        <img className=" blur-lg hover:blur-none transition-all" src={imgPath + "prefix_exam_slider.png"} alt="" />

        <p>{i18n.t(lp + 'generally')} </p>
        <p>{i18n.t(lp + 'p_whenRig')} </p>


        <p>{i18n.t(lp + 'orGroup')} </p>

        <li>{i18n.t(lp + 'li_changetoge')}<img src={imgPath + "with_squint.png"} alt="" />        <img src={imgPath + "with_mouthup.png"} alt="" /></li>
        <li>{i18n.t(lp + 'li_diff')}<img src={imgPath + "with_jawx.png"} alt="" /> </li>

        <Headings h="2" id="creative" class="" text={i18n.t(lp + 't_creative')}></Headings>
        <p>{i18n.t(lp + 'p_above')} </p>
        <p>{i18n.t(lp + 'p_other')} </p>
        <p>{i18n.t(lp + 'p_ears')} </p>
        <p>{i18n.t(lp + 'p_nekoear')} </p>
        <img src={imgPath + "with_nekoEars.png"} alt="" />
        <video className="w-4/6" controls src={videoPath + "nekoEarSample_x264.mp4"} ></video>

        <strong>{i18n.t(lp + 's_dontwant')} </strong>

    </WikiPage>

}