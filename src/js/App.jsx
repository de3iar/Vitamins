import i18n from '../i18n/config';
import { onMount, createSignal } from "solid-js";
import { Show } from "solid-js";
import { I18nProvider } from "../components/I18nProvider";
import i18next from "i18next";
import Nbar from '/src/components/nav/nav';
import Mainbody from '../components/mainbody';



function App() {
  const [loaded, setLoaded] = createSignal(false);
  onMount(async () => {
    await i18n;
    setLoaded(true);
  });
  return (
    <Show
      when={loaded()}
    >
      <I18nProvider i18n={i18next}>
        <div className='w-full'>

          <Mainbody />
        </div>

      </I18nProvider>
    </Show>
  );
}
export default App