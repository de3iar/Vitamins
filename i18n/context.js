import { createContext, useContext } from 'solid-js';
import { createStore } from "solid-js/store";
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