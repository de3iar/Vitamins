import { useI18n } from "/src/i18n/context";
import { createSignal } from "solid-js";
import Nbar from '/src/components/nav/nav';
import SidebarLi from '/src/components/sidebarL/sidebarLi.jsx';
function SidebarL() {
    const i18n = useI18n()
    const [current, setCurrent] = createSignal("hero");
    return <div>
        <Nbar />
        <div id="sidebarl" className="flex w-80 bg-base-300 flex-col overflow-auto">

            <ul className="menu w-full p-2 rounded-box space-x-2 space-y-2">

                <li class="menu-title">
                    <span>{i18n.t("sidebarL:menu-start.title")}</span>
                </li>
                <li></li>
                <SidebarLi href="/intro" text="sidebarL:menu-start.intro" />
                <SidebarLi href="/getstarted" text="sidebarL:menu-start.getstarted" />


                <li class="menu-title">
                    <span>{i18n.t('sidebarL:menu_as_actor.title')}</span>
                </li>
                <li></li>
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
            </ul>
        </div>

    </div>
}
export default SidebarL