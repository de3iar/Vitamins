import { createContext, createEffect, on, onCleanup, onMount } from "solid-js";
import { createStore } from 'solid-js/store';
import i18next from "i18next";

export const floatNavContext = createContext({})

export function FloatNavContextProvider(props) {
    const [floatNavStore, setFloatNavStore] = createStore({
        headings: []
    })

    let c = { floatNavStore, setFloatNavStore }
    function languageChangedHandler() {
        setFloatNavStore('headings', [])

    }
    onMount(() => {
        i18next.on('languageChanged', languageChangedHandler)
    })
    onCleanup(() => {
        i18next.off('languageChanged', languageChangedHandler)
    })
    return <floatNavContext.Provider value={c}>
        {props.children}
    </floatNavContext.Provider>
}