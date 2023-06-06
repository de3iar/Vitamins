import { createContext, useContext, createSignal, onCleanup } from 'solid-js';
import { createStore } from "solid-js/store";
import i18next from 'i18next';
export const I18nContext = createContext();
export function useI18n() {
    const context = useContext(I18nContext);
    if (!context) throw new ReferenceError('I18nContext');

    return context;
}
export function createI18n(i18n) {
    const [store, setStore] = createStore({
        ...i18n,
        t: i18n.t.bind({}),
    });
    const updateStore = (i18n) => {
        setStore({
            ...i18n,
            t: i18n.t.bind({}),
        });
    }
    return [store, updateStore];
}
export function useI18nWithNS(ns) {

    return (key, value) => {
        const i18n = useI18n();
        const [text, setText] = createSignal(i18n.t(ns + ':' + key, value))
        function updateText() {
            setText(i18n.t(ns + ':' + key, value))
        }
        //语言更新时，更新文本
        i18next.on('languageChanged', updateText);
        onCleanup(() => {
            i18next.off('languageChanged', updateText);
        });
        return text();
    }
}