import { useI18n } from "/i18n/context";
import Headings from '../components/content/headings';
import { WikiPage } from "../components/content/page";

export default function GetStarted() {
    const i18n = useI18n()
    const name1 = 1

    const lp = "comm:"
    return <WikiPage>

        <Headings h="1" id="" class="" text={i18n.t(lp + 'title')}></Headings>
        <Headings h="2" id="vtslag" class="" text="Kook"></Headings>
        <li>
            Vitamins on Kook: <a href="https://kook.top/aQn4aE">https://kook.top/aQn4aE</a>
        </li>
        <Headings h="2" id="vtslag" class="" text="Discord"></Headings>
        <li>
            Vitamins on Discord: <a href="https://discord.gg/g5qvSbJEsr">https://discord.gg/g5qvSbJEsr</a>
        </li>

    </WikiPage >

}
