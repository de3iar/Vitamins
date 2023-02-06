import { useI18n } from "/i18n/context";
import Headings from '../components/content/headings';
import MatLi from '../components/about/material.jsx';
import ThanksLi from '../components/about/thanks.jsx';

import BiliA from '../components/about/biliA.jsx';
import TwitterA from '../components/about/twitterA.jsx';
export default function about() {
    const i18n = useI18n()
    const name1 = 1
    const imgPath = window.location.pathname + "/assets/images/about/"
    const videoPath = window.location.pathname + "/assets/videos/about/"
    const lp = "about:"
    return <article className="prose bg-base-100 m-20 h-fit ">

        <Headings h="1" id="" class="" text={i18n.t(lp + 'title')}></Headings>



        <div className=" my-4 flex">
            <div className="w-48">
                <img className="w-48 rounded-full animate__animated animate__fadeInLeft animate__faster" src={imgPath + 'me.jpg'} alt="" />
            </div>
            <div className="ml-12 self-center max-w-lg animate__animated animate__fadeInRight ">
                <div className="flex flex-wrap self-start py-4 ">
                    <strong className="text-xl self-center">-菂-  </strong>

                    <span className="text-sm text-center  self-center mx-2 ">{i18n.t(lp + 'aka')}  <strong>de3iar</strong>, {i18n.t(lp + 'meCredit')}</span>
                    <BiliA href="https://space.bilibili.com/1483693028" />
                    <TwitterA href="https://twitter.com/de3iar" />
                </div>
                <div >
                    <p>{i18n.t(lp + 'p_me')}</p>
                    <p>{i18n.t(lp + 'contact_me')}</p>
                </div>

            </div>
        </div>
        <div className="animate__animated animate__fadeInUp animate__delay-05s">
            <Headings h="2" id="" class="" text={i18n.t(lp + 't_thanks')}></Headings>

            <ThanksLi name="不烦" desc={i18n.t(lp + 'li_mymodel')}
                dom={< >
                    <BiliA href="https://space.bilibili.com/607096" />
                    <TwitterA href="https://twitter.com/Bufan41" />
                </>} />
            <ThanksLi name="Denchi" desc={i18n.t(lp + 'li_denchi')} dom={< >

                <TwitterA href="https://twitter.com/DenchiSoft" />
            </>} />
        </div>

        <div className="animate__animated animate__fadeInUp animate__delay-1s">
            <Headings h="2" id="" class="" text={i18n.t(lp + 'p_materials')}></Headings>

            <MatLi title="Akari" sHref="https://store.steampowered.com/app/1325860/VTube_Studio/" sTitle="VtubeStudio" author="Denchi" aHref="https://twitter.com/DenchiSoft" />
            <MatLi title={i18n.t(lp + 'li_facemodel')}
                sHref="https://sketchfab.com/3d-models/blender-sushi-virtual-journal-16th-april-2020-634af2ae983f4fb8a9295e6b1b3d5c74"
                sTitle="Blender Sushi Virtual Journal"
                author="Jimmy Gunawan"
                aHref="https://sketchfab.com/jimmygunawan" />

        </div>
    </article >

}