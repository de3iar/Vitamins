import { useI18n } from "/i18n/context";
import Headings from '../../components/content/headings';
import { getLoactionPath } from '../../js/getLocationPath.js';
import { WikiPage } from "../../components/content/page";
export default function GetStarted() {
    const i18n = useI18n()
    const name1 = 1
    const imgPath = getLoactionPath() + "/assets/images/ascoder/"
    const videoPath = getLoactionPath() + "/assets/videos/ascoder/"
    const lp = "ascoder_quickstart:"
    return <WikiPage>

        <Headings h="1" id="" class="" text={i18n.t(lp + 'title')}></Headings>

        <Headings h="2" id="expression" class="" text={i18n.t(lp + 't_exp')}></Headings>
        <p>{i18n.t(lp + 'p_inexp')}</p>
        <img src={imgPath + "start_ppap.png"} alt="" />
        <Headings h="3" id="warm" class="" text={i18n.t(lp + 't_warmip')}></Headings>
        <p>{i18n.t(lp + 'p_simcase')}</p>
        <img src={imgPath + "start_funnel.png"} alt="" />
        <Headings h="3" id="deep" class="" text={i18n.t(lp + 't_deeper')}></Headings>
        <p>{i18n.t(lp + 'p_usecase')}</p>
        <p>{i18n.t(lp + 'p_browrange')}</p>
        <p>{i18n.t(lp + 'p_undire')}</p>
        <img src={imgPath + "start_blend_borws.png"} alt="" />
        <p>{i18n.t(lp + 'p_posit')}</p>
        <p>{i18n.t(lp + 'p_nega')}</p>
        <p>{i18n.t(lp + 'p_alwaypos')}</p>
        <img src={imgPath + "start_browExam1.png"} alt="" />
        <p>{i18n.t(lp + 'p_findrange')}</p>
        <p>{i18n.t(lp + 'p_01')}</p>
        <p>{i18n.t(lp + 'p_rangebecome')}</p>
        <br />
        <b>{i18n.t(lp + 'b_further')}</b>
        <p>{i18n.t(lp + 'p_invts')}</p>
        <p>{i18n.t(lp + 'P_perform')}</p>
        <img src={imgPath + "start_browExam2.png"} alt="" />
        <b>{i18n.t(lp + 'b_evenfur')}</b>
        <video src={videoPath + "start_browMouthx_x264.mp4"} loop autoPlay muted className="w-3/6" ></video>
        <p>{i18n.t(lp + 'p_mxbrow')}</p>
        <p>{i18n.t(lp + 'p_mx')}</p>
        <img src={imgPath + "start_browExam3.png"} alt="" />
        <p>{i18n.t(lp + 'p_dontchange')}</p>

        <Headings h="2" id="program" class="" text={i18n.t(lp + 't_prog')}></Headings>
        <p>{i18n.t(lp + 'p_surper')}</p>
        <img src={imgPath + "start_browprog.png"} alt="" />
        <p>{i18n.t(lp + 'p_allow')}</p>
        <blockquote>{i18n.t(lp + 'bq_needreturn')}</blockquote>
        <img src={imgPath + "start_retrunError.png"} alt="" />
        <img src={imgPath + "start_retrun1.png"} alt="" />
        <p>{i18n.t(lp + 'p_want')}</p>

        <li>     <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables">{i18n.t(lp + 'li_var')}</a></li>
        <li><a href="https: //developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math">{i18n.t(lp + 'li_Math')}</a></li>
        <li><a href="https: //developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals">{i18n.t(lp + 'li_condi')}</a></li>
        <li><a href="https: //developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions">{i18n.t(lp + 'li_func')}</a></li>
        <li><a href="https: //developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values">{i18n.t(lp + 'li_return')} </a></li>


    </WikiPage >
} 