import { useI18n } from "/i18n/context";
import Headings from '../../components/content/headings';

export default function GetStarted() {
    const i18n = useI18n()
    const lp = "start"
    const imgPath = "./assets/images/getting_started/"
    return <article className="prose bg-base-100 m-20 h-fit">

        <Headings h="1" id="intro" class="" text={i18n.t(lp + ':intro.title')}></Headings>
        <img class="scale-75" src={imgPath + "intro1.png"} alt="" />

        <Headings h="2" id="intro_why" class="" text={i18n.t(lp + ':intro.t_why')}></Headings>
        <Headings h="3" id="overview" class="" text={i18n.t(lp + ':intro.t_overview')}></Headings>

        <p> {i18n.t(lp + ':intro.vitaIs')}</p>
        <p> {i18n.t(lp + ':intro.withVitamins')}</p>


        <Headings h="3" id="advanofvita" class="" text={i18n.t(lp + ':intro.t_advanofVita')}></Headings>
        <Headings h="4" id="standareised" class="" text={i18n.t(lp + ':intro.t_stand')}></Headings>



        <img class="shadow-xl hover:shadow-2xl transition-shadow " src={imgPath + "intro_cali.png"} alt="" />
        <p>{i18n.t(lp + ':intro.t_advan')}</p>

        <div className=" py-4">
            <li>{i18n.t(lp + ':intro.li_lowhigh')}</li>
            <p> {i18n.t(lp + ':intro.p_lowhigh')}</p>
            <p> {i18n.t(lp + ':intro.fastway')}</p>
        </div>
        <div className=" py-4">
            <li>{i18n.t(lp + ':intro.li_stand')}</li>
            <p> {i18n.t(lp + ':intro.usearkit')}</p>
            <p> {i18n.t(lp + ':intro.compares')}</p>
            <p> {i18n.t(lp + ':intro.sharethesame')}</p>
        </div>
        <div className=" py-4">
            <li>{i18n.t(lp + ':intro.li_reuse')}</li>
            <p> {i18n.t(lp + ':intro.notneedRecali')}</p>
            <p> {i18n.t(lp + ':intro.afterfirst')}</p>
        </div>





        <Headings h="4" id="editor" class="" text={i18n.t(lp + ':intro.powerfulEditor')}></Headings>
        <p> {i18n.t(lp + ':intro.vitaminsEditor')}</p>
        <p> {i18n.t(lp + ':intro.expOrCode')}</p>
        <br></br>

        <img src={imgPath + "intro_process1.png"} alt="" />
        <img src={imgPath + "intro_nekoear.png"} alt="" />

        <div className="">
            <img src={imgPath + "intro_drinkwithStraw.png"} alt="" />
            <a className=" text-center" target={"_blank"} href="https://www.bilibili.com/video/BV1pG4y1Z742">{i18n.t(lp + ':intro.link_drink_straw')}</a>
        </div>
        <Headings h="4" id="demos" class="" text={i18n.t(lp + ':intro.t_demo')}></Headings>
        <img src={imgPath + "facialDemo.png"} alt="" />
        <p> {i18n.t(lp + ':intro.showDemo')}</p>
        <p> {i18n.t(lp + ':intro.clientsCanLearn')}</p>
    </article >

}