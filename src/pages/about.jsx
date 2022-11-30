import { useI18n } from "/src/i18n/context";
import Headings from '/src/components/content/headings';

export default function about() {
    const i18n = useI18n()
    const name1 = 1
    const imgPath = "/src/assets/images/about/"
    const videoPath = "/src/assets/videos/about/"
    const lp = "about:"
    return <article className="prose bg-base-100 m-20 h-fit">

        <Headings h="1" id="" class="" text={i18n.t(lp + 'title')}></Headings>


    </article >

}