import { useI18n } from "/i18n/context";
import Headings from '../../components/content/headings';
import { getLoactionPath } from '../../js/getLocationPath.js';
import { WikiPage } from "../../components/content/page";
export default function GetStarted() {
    const i18n = useI18n()
    const name1 = 1
    const imgPath = getLoactionPath() + "/assets/images/ascoder/"
    const lp = "ascoder_intro:"
    return <WikiPage>

        <Headings h="1" id="" class="" text={i18n.t(lp + 'title')}></Headings>
        <p>{i18n.t(lp + 'p_before')}</p>

        <Headings h="2" id="failiarity" class="" text={i18n.t(lp + 't_fami')}></Headings>
        <img src={imgPath + "fameditor.png"} alt="" />
        <li>1. {i18n.t(lp + 'li_1')}</li>
        <li>2. {i18n.t(lp + 'li_2')}</li>
        <li>3. {i18n.t(lp + 'li_3')}</li>
        <li>4. {i18n.t(lp + 'li_4')}</li>
        <li>5. {i18n.t(lp + 'li_5')}</li>
        <li>6. {i18n.t(lp + 'li_6')}
            <blockquote>{i18n.t(lp + 'bq_fusion')}</blockquote></li>
        <li>7. {i18n.t(lp + 'li_7')}</li>

        <Headings h="2" id="languages" class="" text={i18n.t(lp + 't_lang')}></Headings>
        <p>{i18n.t(lp + 'p_editorlang')}</p>
        <p>{i18n.t(lp + 'p_both')}</p>
        <img src={imgPath + "intro_random.png"} alt="" />
        <p>{i18n.t(lp + 'p_diff')}</p>
    </WikiPage >

}