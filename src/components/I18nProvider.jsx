import { I18nContext } from '../../i18n/context';
export function I18nProvider(props) {
    return (
        <I18nContext.Provider value={props.i18n}>
            {props.children}
        </I18nContext.Provider>
    );
}