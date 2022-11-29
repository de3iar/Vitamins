import { useI18n } from "/src/i18n/context";
import Headings from '/src/components/content/headings';

export default function GetStarted() {
    const i18n = useI18n()
    const name1 = 1
    const imgPath = "/src/assets/images/ascoder/"
    const lp = "ascoder_quickstart:"
    return <article className="prose bg-base-100 m-20 h-fit">

        <Headings h="1" id="" class="" text={i18n.t(lp + 'title')}></Headings>
        <Headings h="2" id="expression" class="" text={i18n.t(lp + 't_exp')}></Headings>
        <p>{i18n.t(lp + 'p_inexp')}</p>

        <Headings h="3" id="warm" class="" text={i18n.t(lp + 't_warmip')}></Headings>
        <p>{i18n.t(lp + 'p_simcase')}</p>
        <Headings h="3" id="deep" class="" text={i18n.t(lp + 't_deeper')}></Headings>
        <p>{i18n.t(lp + 'p_usecase')}</p>
        <p>{i18n.t(lp + 'p_browrange')}</p>
        <p>{i18n.t(lp + 'p_undire')}</p>
        <p>{i18n.t(lp + 'p_posit')}</p>
        <p>{i18n.t(lp + 'p_nega')}</p>
        <p>{i18n.t(lp + 'p_alwaypos')}</p>
        <p>{i18n.t(lp + 'p_findrange')}</p>
        <p>{i18n.t(lp + 'p_01')}</p>
        <p>{i18n.t(lp + 'p_rangebecome')}</p>
        <b>{i18n.t(lp + 'b_further')}</b>
        <p>{i18n.t(lp + 'p_invts')}</p>
        <p>{i18n.t(lp + 'P_perform')}</p>
        <b>{i18n.t(lp + 'b_evenfur')}</b>
        <p>{i18n.t(lp + 'p_mxbrow')}</p>
        <p>{i18n.t(lp + 'p_mx')}</p>
        <p>{i18n.t(lp + 'p_dontchange')}</p>

        <Headings h="2" id="program" class="" text={i18n.t(lp + 't_prog')}></Headings>
        <p>{i18n.t(lp + 'p_surper')}</p>
        <p>{i18n.t(lp + 'p_allow')}</p>
        <blockquote>{i18n.t(lp + 'bq_needreturn')}</blockquote>
        <p>{i18n.t(lp + 'p_want')}</p>

        <li>     <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables">{i18n.t(lp + 'li_var')}</a></li>
        <li><a href="https: //developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math">{i18n.t(lp + 'li_Math')}</a></li>
        <li><a href="https: //developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals">{i18n.t(lp + 'li_condi')}</a></li>
        <li><a href="https: //developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions">{i18n.t(lp + 'li_func')}</a></li>
        <li><a href="https: //developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values">{i18n.t(lp + 'li_return')} </a></li>

        <blockquote>{i18n.t(lp + 'bq_needreturn')}</blockquote>
        <img src={imgPath + ""} alt="" />pics⭐ return
    </article >
} 