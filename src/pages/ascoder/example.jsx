import { useI18n } from "/src/i18n/context";
import Headings from '/src/components/content/headings';

export default function GetStarted() {
    const i18n = useI18n()
    const name1 = 1
    const imgPath = "/src/assets/images/ascoder/"
    const lp = "ascoder_example:"
    return <article className="prose bg-base-100 m-20 h-fit prose-li:py-4 prose-li:font-bold">

        <Headings h="1" id="" class="" text={i18n.t(lp + 'title')}></Headings>
        <Headings h="2" id="" class="time" text={i18n.t(lp + 't_time')}></Headings>

        <p>{i18n.t(lp + 'p_dateobj')}</p>
        <p>{i18n.t(lp + 'p_date')}</p>

        <Headings h="2" id="" class="mouthvoice" text={i18n.t(lp + 't_mv')}></Headings>
        <li>{i18n.t(lp + 'li_add')}</li>
        <p>{i18n.t(lp + 'p_create')}</p>
        <p>{i18n.t(lp + 'p_ref')}</p>
        <p>{i18n.t(lp + 'p_actual')}</p>
        <p>{i18n.t(lp + 'p_note')}</p>

        <p>{i18n.t(lp + 'p_morange')}</p>
        <p>{i18n.t(lp + 'p_ratio')}</p>
        <li>{i18n.t(lp + 'li_vtsparam')}</li>
        <p>{i18n.t(lp + 'p_fetch')}</p>
        <p>{i18n.t(lp + 'p_just')}</p>
        <blockquote>{i18n.t(lp + 'bq_twomode')}</blockquote>
        <Headings h="2" id="" class="sods" text={i18n.t(lp + 't_sods')}></Headings>
        <p>{i18n.t(lp + 'p_cratesods')}</p>
        <li>{i18n.t(lp + 'li_freq')}</li>
        <li>{i18n.t(lp + 'li_zeta')}</li>
        <p>{i18n.t(lp + 'p_z0')}</p>
        <p>{i18n.t(lp + 'p_z01')}</p>
        <p>{i18n.t(lp + 'p_z1')}</p>
        <p>{i18n.t(lp + 'p_zbest')}</p>
        <li>{i18n.t(lp + 'li_res')}</li>
        <p>{i18n.t(lp + 'p_r01')}</p>
        <p>{i18n.t(lp + 'p_r1')}</p>
        <p>{i18n.t(lp + 'p_r0')}</p>
        <b>{i18n.t(lp + 'b_once')}</b>
        <p>{i18n.t(lp + 'p_calc')}</p>
        <p>f:</p>
        <p>z:</p>
        <p>r:</p>
    </article >

}