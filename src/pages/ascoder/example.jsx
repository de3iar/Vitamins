import { useI18n } from "/i18n/context";
import Headings from '/src/components/content/headings';

export default function GetStarted() {
    const i18n = useI18n()
    const name1 = 1
    const imgPath = "/assets/images/ascoder/"
    const videoPath = "/assets/videos/ascoder/"
    const lp = "ascoder_example:"
    return <article className="prose bg-base-100 m-20 h-fit prose-li:py-4 prose-li:font-bold">

        <Headings h="1" id="" class="" text={i18n.t(lp + 'title')}></Headings>
        <Headings h="2" id="" class="time" text={i18n.t(lp + 't_time')}></Headings>

        <p>{i18n.t(lp + 'p_dateobj')}</p>
        <p>{i18n.t(lp + 'p_date')}</p>
        <img src={imgPath + "exam_Date.png"} alt="" />
        <Headings h="2" id="" class="mouthvoice" text={i18n.t(lp + 't_mv')}></Headings>
        <li>{i18n.t(lp + 'li_add')}</li>
        <p>{i18n.t(lp + 'p_create')}</p>
        <p>{i18n.t(lp + 'p_ref')}</p>
        <img src={imgPath + "exam_volume1.png"} alt="" />
        <p>{i18n.t(lp + 'p_actual')}</p>
        <p>{i18n.t(lp + 'p_note')}</p>
        <img src={imgPath + "exam_volume2.png"} alt="" />
        <p>{i18n.t(lp + 'p_morange')}</p>
        <p>{i18n.t(lp + 'p_ratio')}</p>
        <img src={imgPath + "exam_vmixmAddmethod.png"} alt="" />
        <li>{i18n.t(lp + 'li_vtsparam')}</li>
        <p>{i18n.t(lp + 'p_fetch')}</p>
        <p>{i18n.t(lp + 'p_just')}</p>
        <img src={imgPath + "exam_voiceMixMouth.png"} alt="" />
        <blockquote>{i18n.t(lp + 'bq_twomode')}</blockquote>
        <Headings h="2" id="sods" class="" text={i18n.t(lp + 't_sods')}></Headings>
        <p>{i18n.t(lp + 'p_cratesods')}</p>
        <img src={imgPath + "exam_sods_create.png"} alt="" />
        <b>{i18n.t(lp + 'b_once')}</b>
        <img src={imgPath + "exam_sods_this.png"} alt="" />
        <p>{i18n.t(lp + 'p_calc')}</p>
        <img src={imgPath + "exam_sods.png"} alt="" />
        <li>{i18n.t(lp + 'li_freq')}</li>
        <video src={videoPath + "sods_freq_x264.mp4"} controls muted className="w-3/6"></video>
        <li>{i18n.t(lp + 'li_zeta')}</li>
        <video src={videoPath + "sods_z_batch.mp4"} controls muted className="w-3/6"></video>
        <p>{i18n.t(lp + 'p_z0')}</p>
        <p>{i18n.t(lp + 'p_z01')}</p>
        <p>{i18n.t(lp + 'p_z1')}</p>
        <p>{i18n.t(lp + 'p_zbest')}</p>
        <li>{i18n.t(lp + 'li_res')}</li>
        <video src={videoPath + "sods_r_batch.mp4"} controls muted className="w-3/6"></video>
        <p>{i18n.t(lp + 'p_r01')}</p>

        <p>{i18n.t(lp + 'p_r1')}</p>
        <p>{i18n.t(lp + 'p_r0')}</p>
        <br />



    </article >

}