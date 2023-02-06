import { useI18n } from "/i18n/context";
import Headings from '../components/content/headings';

export default function GetStarted() {
    const i18n = useI18n()
    const name1 = 1

    const lp = "comm:"
    return <article className="prose bg-base-100 m-20 h-fit">

        <Headings h="1" id="" class="" text={i18n.t(lp + 'title')}></Headings>
        <Headings h="2" id="vtslag" class="" text="Kook"></Headings>
        <li>
            Vitamins on Kook: <a href="https://kook.top/aQn4aE">https://kook.top/aQn4aE</a>
        </li>


    </article >

}
