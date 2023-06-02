import { createEffect, onCleanup, onMount, useContext } from "solid-js"
import { floatNavContext } from "../floatNav/floatNavContext"
import { useI18n } from "../../../i18n/context"

export function WikiPage(props) {
    const { floatNavStore, setFloatNavStore } = useContext(floatNavContext)
    const i18n = useI18n()
    onCleanup(() => {
        setFloatNavStore("headings", [])
    })

    return <article className="prose bg-base-100 m-20 h-fit ">
        {props.children}
    </article>
}