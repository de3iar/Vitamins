import { useI18n } from "/i18n/context";
import Headings from '../../components/content/headings';
import { getLoactionPath } from '../../js/getLocationPath.js';
import { WikiPage } from "../../components/content/page";
import { A } from "@solidjs/router";
import { VitaImg } from "../../components/media/VitaImg";
import use_leftSignal from '@assets/images/asvtb/use_leftSignal.png';
import use_inputConnection from '@assets/images/asvtb/use_inputConnection.png';
import use_vtsConnection from '@assets/images/asvtb/use_vtsConnection.png';
import use_bottomHelper from '@assets/images/asvtb/use_bottomHelper.png';
import use_scriptManager from '@assets/images/asvtb/use_scriptManager.png';

import use_importBtn from '@assets/images/asvtb/use_importBtn.png';
import { useI18nWithNS } from "../../../i18n/context";

export default function Use() {
    const i18n = useI18n()
    const trans = useI18nWithNS("asvtb_use")

    const lg = "asvtb_use:"
    return <WikiPage>
        <Headings h="1" id="title" class="content_title pb-8 " text={trans('title')} />

        <Headings h="2" class="" text={trans("connection")} />
        <div class="flex items-end">
            <VitaImg src={use_leftSignal} class="" />
            <p className="pb-4">{trans("connect_device_vts")}</p>
        </div>
        <Headings h="3" class="" text={trans("connect_capture_device")} />
        <VitaImg src={use_inputConnection} />
        <p class="">{trans("click_first_indicator")}</p>
        <p class="">{trans("select_capture_device")}</p>

        <p class="">{trans("indicator_green_after_connection")}</p>
        <Headings h="3" class="" text={trans("connect_vts")} />
        <VitaImg src={use_vtsConnection} />

        <p class="">{trans("click_second_indicator")}</p>
        <p class="">{trans("show_vts_connection_card")}</p>
        <p class="">{trans("indicator_green_after_connection")}</p>
        <Headings h="2" class="" text={trans("preprocessing_calibration")} />
        <p class="">{trans("preprocessing_improves_accuracy")}</p>

        <p class="">
            {trans("learn_how_to_preprocess")}{" "}
            <A
                href={
                    getLoactionPath() +
                    "/asvtb_prefix" +
                    "?lang=" +
                    i18n.language
                }
            >
                <b>{trans("a_prefix")}</b>
            </A>
        </p>

        <VitaImg src={use_bottomHelper} />

        <p class="">{trans("click_question_button_after_device_connection")}</p>
        <Headings h="2" class="" text={trans("import_use_archive")} />
        <p class="">{trans("each_script_archive_drives_model")}</p>
        <p class="">{trans("import_archive_click_right_side")}</p>
        <VitaImg src={use_scriptManager} />
        <p class="">{trans("open_script_archive_manager")}</p>
        <VitaImg src={use_importBtn} />

        <p class="">{trans("click_import_icon")}</p>

        <p class="">{trans("find_imported_archive_in_list")}</p>

        <p class="">{trans("reconfigure_model_in_vts")}</p>
    </WikiPage>

}