import { useI18n } from "/i18n/context";
import Headings from '../../components/content/headings';
import { getLoactionPath } from '../../js/getLocationPath.js';
import { WikiPage } from "../../components/content/page";
import { useI18nWithNS } from "../../../i18n/context";
export default function WithVitamins() {
    const trans = useI18nWithNS("asrigger_withVitamins")

    return <WikiPage>
        <Headings h="1" class="" text={trans("integratingVitaminsIntoWorkflow")}></Headings>
        <Headings h="2" class="" text={trans("duringDevelopment")}></Headings>
        <Headings h="3" class="" text={trans("preModelingRequirements")}></Headings>

        <li class="">{trans("learnVtuberContent")}</li>
        <li class="">{trans("completePreProcessingCalibration")}</li>
        <Headings h="3" class="" text={trans("differencesDuringModeling")}></Headings>

        <p class="">{trans("vitaminsNotChangeModeling")}</p>
        <p class="">{trans("rangeOfMotionInLive2D")}</p>
        <p class="">{trans("modelingUsingFamiliarMethods")}</p>
        <p class="">{trans("additionalParameterDrivenModels")}</p>
        <p class="">{trans("learningParameterDevelopment")}</p>
        <Headings h="3" class="" text={trans("preProcessingCalibrationAdvantages")}></Headings>

        <p class="">{trans("ensureModelTestingEffectiveness")}</p>
        <p class="">{trans("convenienceOfPreProcessingCalibration")}</p>
        <p class="">{trans("summaryForClientHandover")}</p>
        <Headings h="3" class="" text={trans("knowingParameterCorrespondingAction")}></Headings>

        <p class="">{trans("builtInArchiveParameters")}</p>
        <p class="">{trans("nonMatchingParameters")}</p>
        <p class="">{trans("playingActionDemoAnimation")}</p>
        <p class="">{trans("nonBuiltInArchive")}</p>
        <Headings h="3" class="" text={trans("needToLearnParameterDevelopment")}></Headings>

        <p class="">{trans("parameterDevelopmentInVitamins")}</p>
        <p class="">{trans("benefitsOfPreProcessingDesign")}</p>
        <Headings h="3" class="" text={trans("howToPresentRequirementsToParameterScriptDevelopers")}></Headings>

        <p class="">{trans("mainConcernsOfParameterDevelopers")}</p>
        <p class="">{trans("parameterLogic")}</p>
        <p class="">{trans("effectsOfCorrespondingLive2DParameter")}</p>
        <p class="">{trans("minMaxDefaultValueOfCorrespondingLive2DParameter")}</p>
        <br />
        <p class="">{trans("requirementsExample1")}</p>
        <p class="">{trans("surpriseAnimationWithStars")}</p>
        <p class="">{trans("progressParameterForStarAnimation")}</p>
        <p class="">{trans("defaultValueMinMax")}</p>
        <p class="">{trans("logicDescription")}</p>
        <p class="">{trans("increaseToMaxValueWhenEyesOpen")}</p>
        <p class="">{trans("returnToMinValueWhenEyesClosed")}</p>
        <br />
        <p class="">{trans("requirementsExample2")}</p>
        <p class="">{trans("noFrowningWhenSmiling")}</p>
        <p class="">{trans("controlBrowHeightParameters")}</p>
        <Headings h="2" class="" text={trans("deliveringToClient")}></Headings>
        <Headings h="3" class="" text={trans("deliveryContents")}></Headings>

        <p class="">{trans("modelFolder")}</p>
        <p class="">{trans("modelFiles")}</p>
        <p class="">{trans("yourConfiguredVTSFile")}</p>
        <br />
        <p class="">{trans("vitaminsFiles")}</p>
        <p class="">{trans("yourUsedVitaminsScript")}</p>

        <Headings h="3" class="" text={trans("assistingInDebugging")}></Headings>

        <p class="">{trans("preProcessing")}</p>
        <p class="">{trans("althoughNotNecessary")}</p>
        <p class="">{trans("VTSDebugging")}</p>
        <p class="">{trans("ifYouDeliveredVTSFile")}</p>
    </WikiPage>

}