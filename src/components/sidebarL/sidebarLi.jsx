import { useMatch } from "@solidjs/router";
import { useI18n } from "/src/i18n/context";

export default function SidebarLi(props) {
    const i18n = useI18n()
    const match = useMatch(() => props.href);
    return <li>
        <a
            className={match() ? 'active' : ''}
            href={props.href} onClick={() => { setCurrent(this.href) }}>

            {i18n.t(props.text)}
        </a>
    </li>
}