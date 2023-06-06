import { useI18n } from "/i18n/context";
import Headings from '../../components/content/headings';
import { getLoactionPath } from '../../js/getLocationPath.js';
import { WikiPage } from "../../components/content/page";
import { useI18nWithNS } from "../../../i18n/context";
import { VitaImg } from "../../components/media/VitaImg";
import prefixAdvan_vtsremap from '@assets/images/getting_started/prefixAdvan_vtsremap.png';
import intor_mouthCompare_x264 from '@assets/videos/intro/intor_mouthCompare_x264.mp4';
export default function PrefixAdvan() {
    const i18n = useI18n()
    const trans = useI18nWithNS("prefixAdvan")
    return <WikiPage>

        <Headings h="1" class="" text={trans('preProcessingCalibrationAdvantages')}></Headings>

        <Headings h="2" class="" text={trans('calibrationLimitationsInTraditionalSoftware')}></Headings>

        <p class="">{trans('inCurrentLive2dMotionCaptureApplications')}</p>

        <p class="">{trans('inCommonLive2dRenderingSoftware')}</p>
        <br />
        <p class="">{trans('inThisModeUsersAreProvidedWithCalibrationOptions')}:</p>

        <ul>
            <li>{trans('zeroPointCalibration')}</li>
        </ul>
        <p class="">{trans('inVariousSoftwareThisIsOftenReferredToAsCalibration')}</p>
        <p class="">{trans('thisTypeOfCalibrationProvidesTheAbility')}.</p>

        <ul>
            <li>{trans('controlParameterRemapping')}</li>
        </ul>
        <p class="">{trans('thisTypeOfCalibrationAllowsUsersToRemapTheRange')}.</p>
        <br />
        <p class="">{trans('itIsEvidentThatInSuchCalibration')}.</p>

        <p class="">{trans('thisLeadsToTheFactThatTheActualRangeOf')}.</p>
        <br />
        <p class="">{trans('considerASimpleExampleForTheParameter')}</p>

        <p class="">{trans('letUsAssumeThatForAnIndividual')}</p>

        <p class="">{trans('thusTheActualBrowLeftYRangeFor')}</p>
        <br />
        <p class="">{trans('ifThisIndividualWishesToUseRemapping')}</p>

        <VitaImg src={prefixAdvan_vtsremap}></VitaImg>
        <p class="">{trans('forExampleInVTSIfOnlyTheMaximum')}</p>

        <p class="">{trans('moreComplexControlParameters')}</p>

        <Headings h="2" class="" text={trans('advantagesOfPreProcessingCalibration')}></Headings>


        <p class="">{trans('preProcessingProvidesBothZeroPointCalibrationAndRemapping')}.</p>

        <b class="">{trans('oneCouldSayThatEveryIndividual')}</b>

        <p class="">{trans('itIsEvidentThatStandardizing')}</p>
        <video class="max-w-lg" src={intor_mouthCompare_x264} muted controls></video>

        <Headings h="3" class="" text={trans('regardingModelHandover')}></Headings>

        <p class="">{trans('whenAModelArtistConfigures')}</p>

        <blockquote class="">
            {trans('noteThatForMouthOpen')}</blockquote>
        <Headings h="3" class="" text={trans('regardingParameterScriptDevelopment')}></Headings>

        <p class="">{trans('duringTheScriptDevelopment')}</p>

    </WikiPage>

}