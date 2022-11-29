import { useI18n } from "/src/i18n/context";
import Headings from '/src/components/content/headings';

export default function GetStarted() {
    const i18n = useI18n()
    const name1 = 1
    const imgPath = "/src/assets/images/asrigger/"
    const videoPath = "/src/assets/videos/asrigger/"
    const lp = "asrigger_withVitamins:"
    return <article className="prose bg-base-100 m-20 h-fit">

        <Headings h="1" id="withVitamins" class="" text={i18n.t(lp + 'title')}></Headings>
        <strong>{i18n.t(lp + 's_this')} </strong>
        <Headings h="2" id="arkit" class="" text={i18n.t(lp + 't_arkit')}></Headings>
        <p>{i18n.t(lp + 'p_arkit')} <a href="https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation">Arkit</a></p>
        <p>{i18n.t(lp + 'p_observe')} </p>

        <img className=" blur-lg hover:blur-none transition-all" src={"/src/assets/images/asvtb/prefix_exam_slider.png"} alt="" />


        <p>{i18n.t(lp + 'p_complete')} </p>
        <p>{i18n.t(lp + 'p_whenRig')} </p>
        <li>{i18n.t(lp + 'li_changetoge')}<img src={imgPath + "with_squint.png"} alt="" /></li>
        <li>{i18n.t(lp + 'li_diff')}<img src={imgPath + "with_jawx.png"} alt="" /> </li>
        <Headings h="2" id="creative" class="" text={i18n.t(lp + 't_creative')}></Headings>
        <p>{i18n.t(lp + 'p_above')} </p>
        <p>{i18n.t(lp + 'p_other')} </p>
        <p>{i18n.t(lp + 'p_ears')} </p>
        <p>{i18n.t(lp + 'p_nekoear')} </p>
        <img src={imgPath + "with_nekoEars.png"} alt="" />
        <video className="w-4/6" controls src={videoPath + "nekoEarSample_x264.mp4"} ></video>

        <strong>{i18n.t(lp + 's_dontwant')} </strong>

    </article >

}