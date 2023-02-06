import { useI18n } from "/i18n/context";
import Headings from '../../components/content/headings';

export default function GetStarted() {
    const i18n = useI18n()
    const name1 = 1
    const imgPath = "./assets/images/asvtb/"
    const lp = "asvtb_prefix:"
    return <article className="prose bg-base-100 m-20 h-fit">

        <Headings h="1" id="prefix" class="" text={i18n.t('asvtb_prefix:title')}></Headings>
        <p>{i18n.t(lp + 'p_principle')}</p>
        <p>{i18n.t(lp + 'p_toAch')}</p>
        <Headings h="2" id="howto" class="" text={i18n.t(lp + 't_howto')}></Headings>

        <Headings h="3" id="blendshapes" class="" text={i18n.t(lp + 't_blendshapes')}></Headings>
        <li>{i18n.t(lp + 'clicktoquick')}</li>
        <img src={imgPath + "prefix_quickCali.png"} alt="" />


        <li>{i18n.t(lp + 'openPrefix')}</li>
        <img src={imgPath + "prefix_brow.png"} alt="" />
        <blockquote>{i18n.t(lp + 'bq_valuetop')}</blockquote>
        <li>{i18n.t(lp + 'keephead')}</li>
        <img src={imgPath + "prefix_browmax.png"} alt="" />
        <p>{i18n.t(lp + 'p_atthispoint')}</p>
        <blockquote>{i18n.t(lp + 'bq_dk')}</blockquote>
        <img src={imgPath + "prefix_exam_ani.png"} alt="" />
        <img src={imgPath + "prefix_exam_slider.png"} alt="" />
        <p>{i18n.t(lp + 'p_finetune')}</p>

        <Headings h="3" id="posrot" class="" text={i18n.t(lp + 't_posrot')}></Headings>
        <p>{i18n.t(lp + 'simToBlend')}</p>

        <li>{i18n.t(lp + 'quickCali')}</li>
        <img src={imgPath + "prefix_quickCali.png"} alt="" />
        <li>{i18n.t(lp + 'takeHeadrotY')}</li>
        <img src={imgPath + "prefix_rotmax.png"} alt="" />
        <img src={imgPath + "prefix_rotmin.png"} alt="" />
        <blockquote>{i18n.t(lp + 'bq_lefthand')}</blockquote>

        <Headings h="2" id="reprefix" class="" text={i18n.t(lp + 't_rePrefix')}></Headings>
        <strong>{i18n.t(lp + 's_beforesteam')}</strong>
        <blockquote>{i18n.t(lp + 'bq_skip')}</blockquote>
        <p>{i18n.t(lp + 's_Note')}</p>
        <ul>
            <li>{i18n.t(lp + 'li_newdev')}</li>
            <li>{i18n.t(lp + 'li_diffSolu')}</li>
            <li>{i18n.t(lp + 'li_campos')}</li>
            <li>{i18n.t(lp + 'li_growup')}</li>
        </ul>
    </article >

}