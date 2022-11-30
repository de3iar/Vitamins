import { useMatch } from "@solidjs/router";
import { useI18n } from "/src/i18n/context";
import { A } from "@solidjs/router"
export default function SidebarLi(props) {
    const i18n = useI18n()

    const match = useMatch(() => props.href);
    return <li>
        <A
            className={"  active:text-primary-content " + (match() ? 'active' : 'hover:text-primary')}
            href={props.href + "?lang=" + i18n.language} onClick={() => { setCurrent(this.href) }}>

            <b>{i18n.t(props.text)}</b>
        </A>
    </li>
}