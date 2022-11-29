import { useI18n } from "/src/i18n/context";
import Headings from '/src/components/content/headings';

export default function GetStarted() {
    const i18n = useI18n()
    const name1 = 1
    const imgPath = "/src/assets/images/asvtb/"
    const lp = "asvtb_prefix:"
    return <article className="prose bg-base-100 m-20 h-fit">

        <Headings h="1" id="prefix" class="" text={i18n.t('asvtb_prefix:title')}></Headings>
        <p>{i18n.t(lp + 'p_principle')}</p>
        <Headings h="2" id="howto" class="" text={i18n.t(lp + 't_howto')}></Headings>
        <p>{i18n.t(lp + 'p_toAch')}</p>
        <br />
        <p>{i18n.t(lp + 'p_first')}</p>

        <img src={imgPath + "prefix_exam1.png"} alt="" />
        <blockquote>{i18n.t(lp + 'bq_valuetop')}</blockquote>

        <p>{i18n.t(lp + 'p_relax')}</p>
        <img src={imgPath + "prefix_exam2.png"} alt="" />
        <p>{i18n.t(lp + 'p_tomax')}</p>
        <img src={imgPath + "prefix_exam3.png"} alt="" />
        <blockquote>{i18n.t(lp + 'bq_dk')}</blockquote>
        <img src={imgPath + "prefix_exam_rc.png"} alt="" />
        <img src={imgPath + "prefix_exam_slider.png"} alt="" />
        <p>{i18n.t(lp + 'p_finetune')}</p>
        <img src={imgPath + "prefix_exam4.png"} alt="" />
        <p>{i18n.t(lp + 'p_atthispoint')}</p>

        <p>{i18n.t(lp + 'p_follow')}</p>
        <p>{i18n.t(lp + 'p_myexam')}</p>
        <Headings h="2" id="reprefix" class="" text={i18n.t(lp + 't_rePrefix')}></Headings>
        <strong>{i18n.t(lp + 's_Note')}</strong>
        <ul>
            <li>{i18n.t(lp + 'li_newdev')}</li>
            <li>{i18n.t(lp + 'li_diffSolu')}</li>
            <li>{i18n.t(lp + 'li_campos')}</li>
            <li>{i18n.t(lp + 'li_growup')}</li>
        </ul>
    </article >

}