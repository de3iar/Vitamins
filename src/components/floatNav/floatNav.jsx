import { For, createSignal, onMount, useContext } from "solid-js"
import { floatNavContext } from "./floatNavContext"

export function FloatNav(props) {
    const { floatNavStore, setFloatNavStore } = useContext(floatNavContext)
    const [opacity, setopacity] = createSignal(0.5)
    onMount(() => {

    })
    function getCss(h) {
        let className = 'flex flex-col cursor-pointer hover:underline hover:underline-offset-1 transition  '
        console.log(h);
        switch (h) {
            case '2':
                className += ' text-secondary hover:translate-x-1 mt-1 first:mt-0 '
                break;
            case '3':
                className += ' translate-x-2 hover:translate-x-3'
                break;
            default:
                break;

        }
        return className
    }
    return <div class="fixed right-8 top-8 p-4 bg-base-200 bg-opacity-20 shadow-lg  rounded-lg transition-opacity"
        style={{
            opacity: opacity()
        }}
        onMouseEnter={() => { setopacity(1) }}
        onMouseLeave={() => { setopacity(0.5) }}
    >   <div class=''>
            <For each={floatNavStore.headings}>
                {(item) => {
                    return <li class={getCss(item.h)}
                        onclick={() => {
                            item.ref.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }}
                    >{item.heading}</li>
                }}
            </For>
        </div>

    </div>

}