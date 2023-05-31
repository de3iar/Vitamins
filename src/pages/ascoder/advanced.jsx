import { useI18n } from "/i18n/context";
import Headings from '../..//components/content/headings';
import { getLoactionPath } from '../../js/getLocationPath.js';
import { WikiPage } from "../../components/content/page";
export default function GetStarted() {
    const i18n = useI18n()
    const name1 = 1
    const imgPath = getLoactionPath() + "/assets/images/ascoder/"
    const videoPath = getLoactionPath() + "/assets/videos/ascoder/"
    const lp = "ascoder_advanced:"
    return <WikiPage>

        <Headings h="1" id="" class="" text={i18n.t(lp + 'title')}></Headings>
        <Headings h="2" id="" class="" text={i18n.t(lp + 't_storage')}></Headings>
        <p>{i18n.t(lp + 'p_class')}</p>
        <p>{i18n.t(lp + 'p_count')}</p>
        <img src={imgPath + "advan_storage.png"} alt="" />
        <Headings h="2" id="" class="" text={i18n.t(lp + 't_order')}></Headings>

        <p>{i18n.t(lp + 'p_toptobot')}</p>
        <p>{i18n.t(lp + 'p_adjust')}</p>
        <video src={videoPath + "advan_sort_x264.mp4"} loop autoPlay muted className="w-3/6"></video>
        <Headings h="2" id="" class="" text={i18n.t(lp + 't_ref')}></Headings>
        <p>{i18n.t(lp + 'p_objref')}</p>
        <img src={imgPath + "advan_ref1.png"} alt="" />
        <strong>{i18n.t(lp + 'p_note')}</strong>
        <img src={imgPath + "advan_ref2.png"} alt="" />
        <p>{i18n.t(lp + 'p_however')}</p>
        <p>{i18n.t(lp + 'p_119')}</p>
        <img src={imgPath + "advan_refExam1.png"} alt="" />
        <video src={videoPath + "refExam1_x264.mp4"} loop autoPlay muted className="w-3/6"></video>


        <Headings h="2" id="" class="" text={i18n.t(lp + 't_vplugin')}></Headings>
        <p>{i18n.t(lp + 'p_builtin')}</p>
        <li>{i18n.t(lp + 'li_vts')}</li>
        <li>{i18n.t(lp + 'li_sods')}</li>
        <p>{i18n.t(lp + 'p_next')}</p>
        <Headings h="2" id="" class="" text={i18n.t(lp + 't_usevts')}></Headings>
        <p>{i18n.t(lp + 'p_fetch')}</p>
        <p>{i18n.t(lp + 'p_access')}</p>
        <img src={imgPath + "exam_voiceMixMouth.png"} alt="" />
    </WikiPage >

}