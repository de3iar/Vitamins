import { useI18n } from "/src/i18n/context";
import Headings from '/src/components/content/headings';

export default function GetStarted() {
    const i18n = useI18n()
    const name1 = 1

    const imgPath = "/src/assets/images/asvtb/"
    return <article className="prose bg-base-100 m-20 h-fit">

        <Headings h="1" id="prefix" class="" text={i18n.t('asvtb_prefix:prefix.title')}></Headings>



    </article >

}