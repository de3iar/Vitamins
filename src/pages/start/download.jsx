import { useI18n } from "/i18n/context";
import Headings from '../../components/content/headings';
import { getLoactionPath } from '../../js/getLocationPath.js';
import { SideActionBtn } from '../../components/btn/sideActionsBtn';
import { WikiPage } from "../../components/content/page";
export default function downloadandinstall() {

    const i18n = useI18n()
    const imgPath = getLoactionPath() + "/assets/images/getting_started/"
    const lg = "start:"
    return <WikiPage>
        <Headings h="1" id="title" class="content_title pb-8 " text={i18n.t(lg + 't_download')} />

        <Headings h="2" id="down" class="" text={i18n.t(lg + 'instal.t_down')}></Headings>
        <p >{i18n.t(lg + 'instal.p_down')} <SideActionBtn
            class=""
            tip="Steam"
            onclick={() => {
                open('steam://store/2187210', '_blank')
            }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="w-5 h-5 fill-current">
                <path d="M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.79 52.79 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3.1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z" /></svg>
        </SideActionBtn>

            <SideActionBtn
                class=""
                tip="In Browser"
                onclick={() => {
                    open('https://store.steampowered.com/app/2187210/Vitamins/', '_blank')
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current">
                    <path d="M0 256C0 209.4 12.47 165.6 34.27 127.1L144.1 318.3C166 357.5 207.9 384 256 384C270.3 384 283.1 381.7 296.8 377.4L220.5 509.6C95.9 492.3 0 385.3 0 256zM365.1 321.6C377.4 302.4 384 279.1 384 256C384 217.8 367.2 183.5 340.7 160H493.4C505.4 189.6 512 222.1 512 256C512 397.4 397.4 511.1 256 512L365.1 321.6zM477.8 128H256C193.1 128 142.3 172.1 130.5 230.7L54.19 98.47C101 38.53 174 0 256 0C350.8 0 433.5 51.48 477.8 128V128zM168 256C168 207.4 207.4 168 256 168C304.6 168 344 207.4 344 256C344 304.6 304.6 344 256 344C207.4 344 168 304.6 168 256z" /></svg>

            </SideActionBtn> </p>





    </WikiPage >

}