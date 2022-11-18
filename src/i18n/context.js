import { createContext, useContext } from 'solid-js';
export const I18nContext = createContext();
export function useI18n() {
    const context = useContext(I18nContext);
    if (!context) throw new ReferenceError('I18nContext');
    return context;
}