import { Show, createSignal } from "solid-js"
import { Portal } from "solid-js/web"
import { Dragable } from "../dnd/dragable"

export function VitaImg(props = {
    class: "",
    style: "",
    src: ""
}) {
    const [show, setShow] = createSignal(true)
    const [fullScreenShow, setFullScreenShow] = createSignal(false)


    const FullscreenImg = () => {
        let dragContainer
        const [imgScale, setImgScale] = createSignal(1)
        return <Portal>

            <div ref={dragContainer}
                class="fixed top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-50 animate__animated animate__faster animate__fadeIn flex justify-center items-center "
                onclick={(e) => {
                    e.target === dragContainer &&
                        setFullScreenShow(false)
                }}
            >
                <Dragable

                    dragContainerRef={() => dragContainer}
                >
                    <div class="pointer-events-auto cursor-move transition-transform"
                        style={
                            `transform:scale(${imgScale()})`

                        }
                        onwheel={(e) => {
                            e.preventDefault()
                            let targetScale = imgScale() - e.deltaY / 500
                            if (targetScale < 0.2) {
                                targetScale = 0.2
                            }
                            if (targetScale > 5) {
                                targetScale = 5
                            }
                            setImgScale(targetScale)
                        }}
                    >
                        <img class=" select-none pointer-events-none "
                            style={{
                                "max-width": "80vw",
                                "max-height": "80vh"
                            }}

                            src={props.src}

                        />

                    </div>

                </Dragable>

            </div>
        </Portal>
    }

    return <Show when={show()}>
        <div class=" cursor-pointer w-fit h-fit"
            onclick={() => setFullScreenShow(true)}>
            <img class={props.class + ' pointer-events-none'} style={props.style} src={props.src} />
            <Show when={fullScreenShow()}>
                <FullscreenImg></FullscreenImg>
            </Show>
        </div>
    </Show>
}