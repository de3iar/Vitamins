import { useI18n } from "/src/i18n/context";
import Headings from '/src/components/content/headings';

export default function downloadandinstall() {
    const i18n = useI18n()
    const imgPath = "/src/assets/images/getting_started/"
    const lg = "start:"
    return <article className="prose bg-base-100 m-20 h-fit">
        <Headings h="1" id="title" class="content_title pb-8 " text={i18n.t(lg + 't_download')} />

        <Headings h="2" id="down" class="" text={i18n.t(lg + 'instal.t_down')}></Headings>
        <p>{i18n.t(lg + 'instal.p_down')} <a target={"_blank"} href="https://github.com/bbuunnoo/Vitamins/releases">Github Release.</a></p>


        <Headings h="2" id="instal" class="" text={i18n.t(lg + 'instal.title')}></Headings>

        <p>{i18n.t(lg + 'instal.p2_run')}</p>

    </article >

}