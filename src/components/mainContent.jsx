import { useI18n } from "@i18n/context";
import { useRoutes, useLocation } from "@solidjs/router"
import { routesList } from '/src/router/config.jsx';
import { createSignal, createMemo, createEffect } from "solid-js";
import { FloatNav } from "./floatNav/floatNav";
import { FloatNavContextProvider } from "./floatNav/floatNavContext";
function MainContent() {
    const i18n = useI18n()
    const Routes = useRoutes(routesList)

    return <div id="content_container" className="bg-base-100 flex w-full max-h-screen overflow-auto"  >
        <FloatNavContextProvider>
            <Routes ></Routes >
            <FloatNav></FloatNav>
        </FloatNavContextProvider>
    </div >
}
export default MainContent