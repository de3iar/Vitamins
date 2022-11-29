import i18n from '../i18n/config';
import { onMount, createSignal } from "solid-js";
import { Show } from "solid-js";
import { I18nProvider } from "../components/I18nProvider";
import i18next from "i18next";
import { createI18n } from '/src/i18n/context';

import Mainbody from '../components/mainbody';



function App() {
  const [loaded, setLoaded] = createSignal(false);

  const [i18nState, updatei18nState] = createI18n(i18next);
  onMount(async () => {
    await i18n;
    updatei18nState(i18next);
    setLoaded(true);
  });
  const handleOnChange = (lang) => {
    i18next.changeLanguage(lang).then(() => {
      updatei18nState(i18next);
    })
  }
  window.langchange = handleOnChange
  return (
    <Show
      when={loaded()}
    >
      <I18nProvider i18n={i18nState}>
        <div className='w-full'>

          <Mainbody />
        </div>

      </I18nProvider>
    </Show>
  );
}
export default App