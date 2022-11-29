import { useI18n } from "/src/i18n/context";
import Headings from '/src/components/content/headings';

export default function GetStarted() {
    const i18n = useI18n()
    const lp = "start"
    const imgPath = "/src/assets/images/getting_started/"
    return <article className="prose bg-base-100 m-20 h-fit">

        <Headings h="1" id="intro" class="" text={i18n.t(lp + ':intro.title')}></Headings>
        <img class="scale-75" src={imgPath + "intro1.png"} alt="" />

        <Headings h="2" id="intro_why" class="" text={i18n.t(lp + ':intro.t_why')}></Headings>
        <Headings h="3" id="standareised" class="" text={i18n.t(lp + ':intro.t_stand')}></Headings>
        <p> {i18n.t(lp + ':intro.p_typically')}</p>
        <p> {i18n.t(lp + ':intro.p_instead')}</p>
        <p> {i18n.t(lp + ':intro.p_thiscali')}</p>
        <blockquote> {i18n.t(lp + ':intro.bq_indivi')}</blockquote>
        <img class="shadow-xl hover:shadow-2xl transition-shadow " src={imgPath + "intro_cali.png"} alt="" />
        <p> {i18n.t(lp + ':intro.p_oneadvan')}</p>
        <p> {i18n.t(lp + ':intro.p_noneed')}</p>
        <Headings h="3" id="editor" class="" text={i18n.t(lp + ':intro.t_editor')}></Headings>
        <p> {i18n.t(lp + ':intro.p_custom')}</p>
        <p> {i18n.t(lp + ':intro.p_two')}</p>

        <br></br>

        <img src={imgPath + "intro_process1.png"} alt="" />
        <img src={imgPath + "intro_nekoear.png"} alt="" />

        <div className="">
            <img src={imgPath + "intro_drinkwithStraw.png"} alt="" />
            <a className=" text-center" target={"_blank"} href="https://www.bilibili.com/video/BV1pG4y1Z742">{i18n.t(lp + ':intro.link_drink_straw')}</a>
        </div>


    </article >

}