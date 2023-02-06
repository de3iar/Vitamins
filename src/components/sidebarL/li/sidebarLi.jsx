import { useMatch } from "@solidjs/router";
import { useI18n } from "@i18n/context";
import { A } from "@solidjs/router"
import { createSignal } from "solid-js";
export default function SidebarLi(props) {
    const i18n = useI18n()

    const match = useMatch(() => props.href);

    return <div >
        <li>
            <A
                className={"  active:text-primary-content " + (match() ? 'active' : 'hover:text-primary')}
                href={window.location.pathname + props.href + "?lang=" + i18n.language}  >

                <b>{i18n.t(props.text)}</b>
            </A>
        </li >



    </div>
}

