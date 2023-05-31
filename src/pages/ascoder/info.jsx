import { useI18n } from "/i18n/context";
import Headings from '../../components/content/headings';
import { getLoactionPath } from '../../js/getLocationPath.js';
import { WikiPage } from "../../components/content/page";
export default function GetStarted() {
    const i18n = useI18n()
    const name1 = 1
    const imgPath = getLoactionPath() + "/assets/images/ascoder/"
    const lp = "ascoder_Infomations:"
    return <WikiPage>

        <Headings h="1" id="" class="" text={i18n.t(lp + 'title')}></Headings>

        <Headings h="2" id="copy" class="" text={i18n.t(lp + 't_copy')}></Headings>
        <p>{i18n.t(lp + 'p_dbcl')}</p>
        <Headings h="2" id="codecomplete" class="" text={i18n.t(lp + 't_codecom')}></Headings>
        <p>{i18n.t(lp + 'p_autocom')}</p>
        <img src={imgPath + "info_autocom.png"} alt="" />
        <Headings h="2" id="symbol" class="" text={i18n.t(lp + 't_symbol')}></Headings>
        <p>{i18n.t(lp + 'p_jssyms')}</p>
        <img src={imgPath + "info_calc_exam1.png"} alt="" />
        <img src={imgPath + "info_calc_exam2.png"} alt="" />
        <blockquote>{i18n.t(lp + 'bq_pow')}</blockquote>
        <img src={imgPath + "info_calc_exam3.png"} alt="" />
        <Headings h="2" id="mathlib" class="" text={i18n.t(lp + 't_math')}></Headings>
        <p>{i18n.t(lp + 'p_mathlib')}</p>
        <img src={imgPath + "info_math.png"} alt="" />
        <p>{i18n.t(lp + 'p_checkMath')}</p>
        <a target={'_blank'} href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math">Math</a>

    </WikiPage >

}