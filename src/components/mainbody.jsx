import { useI18n } from "@i18n/context";
import SidebarL from './sidebarL/sidebarL';
import MainContent from './mainContent';

function Mainbody() {
    const i18n = useI18n()

    return <div className="  bg-base-100 ">
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <MainContent />
                <label for="my-drawer-2" class="btn btn-primary btn-ghost btn-circle drawer-button fixed left-0 top-1/2 -translate-x-2 hover:translate-x-0 hover:bg-transparent lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                    </svg>

                </label>

            </div>
            <div class="drawer-side overflow-hidden">
                <label for="my-drawer-2" class="drawer-overlay"></label>

                <SidebarL />

            </div>
        </div>


    </div>

}
export default Mainbody