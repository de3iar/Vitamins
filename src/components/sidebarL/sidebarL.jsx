import { useI18n } from "@i18n/context";

import Nbar from '../nav/nav';

import SidebarLi from './li/sidebarLi.jsx';
function SidebarL() {
    const i18n = useI18n()

    return <div className="w-80 bg-base-300 " >
        <Nbar />
        <div id="sidebarl" className="flex flex-col overflow-auto">
            <ul className="menu w-full p-2 rounded-box space-x-2 space-y-2 last:mb-8">


                <li class="menu-title">
                    <span>{i18n.t("sidebarL:menu-start.title")}</span>
                </li>
                <li></li>
                <SidebarLi href="intro" text="sidebarL:menu-start.intro" />
                <SidebarLi href="download" text="sidebarL:menu-start.download" />
                <SidebarLi href="req" text="sidebarL:menu-start.req" />

                <li class="menu-title">
                    <span>{i18n.t('sidebarL:menu_as_actor.title')}</span>
                </li>
                <li></li>
                <SidebarLi href="use" text="sidebarL:menu_as_actor.use" />
                <SidebarLi href="asvtb_prefix" text="sidebarL:menu_as_actor.prefix" />

                <li class="menu-title">
                    <span>{i18n.t('sidebarL:as_rigger.title')}</span>

                </li>
                <li></li>
                <SidebarLi href="rigger_withVitamins" text="sidebarL:as_rigger.withVitamins" />
                <li class="menu-title">
                    <span>{i18n.t('sidebarL:as_coder.title')}</span>
                </li>
                <li></li>
                <SidebarLi href="coder_intro" text="sidebarL:as_coder.intro" />
                <SidebarLi href="coder_quickstart" text="sidebarL:as_coder.quickstart" />
                <SidebarLi href="coder_Infomations" text="sidebarL:as_coder.info" />
                <SidebarLi href="coder_advanced" text="sidebarL:as_coder.advanced" />
                <SidebarLi href="coder_example" text="sidebarL:as_coder.examples" />
                <li class="menu-title">
                    <span>{i18n.t('sidebarL:misc')}</span>

                </li>
                <li></li>
                <SidebarLi href="prefixAdvan" text="sidebarL:menu-start.prefixAdvan" />

                <SidebarLi href="faq" text="sidebarL:faq" />
                <SidebarLi href="comm" text="sidebarL:comm" />
                <SidebarLi href="about" text="sidebarL:about" />

            </ul>
        </div>


    </div>
}
export default SidebarL