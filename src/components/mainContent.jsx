import { useI18n } from "/src/i18n/context";
import { useRoutes } from "@solidjs/router"
import { routesList } from '/src/router/config.jsx';
function MainContent() {
    const i18n = useI18n()
    const Routes = useRoutes(routesList)
    return <div className="bg-base-100 flex w-full max-h-screen overflow-auto">
        <Routes />
    </div>
}
export default MainContent