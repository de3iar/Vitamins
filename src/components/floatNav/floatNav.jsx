import { For, createSignal, onMount, useContext } from "solid-js"
import { floatNavContext } from "./floatNavContext"

export function FloatNav(props) {
    const { floatNavStore, setFloatNavStore } = useContext(floatNavContext)
    const [opacity, setopacity] = createSignal(0.2)
    onMount(() => {

    })
    return <div class="fixed right-8 top-8 p-4 bg-base-200 bg-opacity-20 shadow-lg  rounded-lg transition-opacity"
        style={{
            opacity: opacity()
        }}
        onMouseEnter={() => { setopacity(1) }}
        onMouseLeave={() => { setopacity(0.2) }}
    >   <div class='space-y-1'>
            <For each={floatNavStore.headings}>
                {(item) => {
                    return <li class="flex flex-col cursor-pointer text-secondary hover:underline hover:underline-offset-1 hover:translate-x-1 transition"
                        onclick={() => {
                            item.ref.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }}
                    >{item.heading}</li>
                }}
            </For>
        </div>

    </div>

}