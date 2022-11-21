import { useI18n } from "/src/i18n/context";
import Headings from '/src/components/content/headings';

export default function GetStarted() {
    const i18n = useI18n()
    const name1 = 1

    const imgPath = "/src/assets/images/getting_started/"
    return <article className="prose bg-base-100 m-20 h-fit">

        <Headings h="1" id="intro" class="" text={i18n.t('start_getting_started:intro.title')}></Headings>
        <img class="scale-75" src={imgPath + "intro1.png"} alt="" />
        <p class="text">
            {i18n.t('start_getting_started:intro.p1_middleware')}
        </p>
        <Headings h="3" id="intro_why" class="" text={i18n.t('start_getting_started:intro.why')}></Headings>

        <p> {i18n.t('start_getting_started:intro.p2_rendering')}
        </p>


        <p> {i18n.t('start_getting_started:intro.p4_stand')}</p>


        <img class="shadow-xl hover:shadow-2xl transition-shadow " src={imgPath + "intro_cali.png"} alt="" />
        <b> {i18n.t('start_getting_started:intro.p5_benefit')}</b>
        <p> {i18n.t('start_getting_started:intro.p6_For_Actor')}</p>
        <blockquote> {i18n.t('start_getting_started:intro.p7_which_means')}</blockquote>

        <br></br>

        <p> {i18n.t('start_getting_started:intro.p8_editor')}
        </p>
        <p> {i18n.t('start_getting_started:intro.p9_calcu')}</p>
        <img src={imgPath + "intro_process1.png"} alt="" />
        <div className="">
            <img src={imgPath + "intro_drinkwithStraw.png"} alt="" />
            <a className=" text-center" target={"_blank"} href="https://www.bilibili.com/video/BV1pG4y1Z742">{i18n.t('start_getting_started:intro.link_drink_straw')}</a>
        </div>


    </article >

}