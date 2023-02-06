import { For, createSelector } from "solid-js";
import { useI18n } from "@i18n/context";
import langs from '../../../i18n/en/langs.json';
function getLangList() {
    let list = []
    for (const key in langs) {

        const title = langs[key];
        const code = key
        list.push({
            title, code
        })
    }
    return list
}
function switcher() {
    const i18n = useI18n()
    const isSelected = createSelector(() => i18n.language);
    const availableLocales = () => getLangList();
    return <ul tabindex="0" class="dropdown-content menu  p-2 shadow bg-base-200 bg-opacity-80 rounded-box w-52">
        <For each={availableLocales()}>
            {(item) => <li>

                <button className="btn btn-sm btn-ghost justify-start content-center active:bg-primary"
                    value={item.code}
                    onClick={() => { window.langchange(item.code) }}
                >
                    {item.title}

                </button>
            </li>}
        </For>
    </ul>

}
export default switcher