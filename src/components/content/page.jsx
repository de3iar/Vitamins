import { onCleanup, useContext } from "solid-js"
import { floatNavContext } from "../floatNav/floatNavContext"

export function WikiPage(props) {
    const { floatNavStore, setFloatNavStore } = useContext(floatNavContext)
    onCleanup(() => {
        setFloatNavStore("headings", [])
    })
    return <article className="prose bg-base-100 m-20 h-fit ">
        {props.children}
    </article>
}