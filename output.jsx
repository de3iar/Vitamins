import { useI18n } from "/i18n/context";
import Headings from '../../components/content/headings';
import { getLoactionPath } from '../../js/getLocationPath.js';
import { WikiPage } from "../../components/content/page";
export default function WithVitamins() {
    const i18n = useI18n()

    return <WikiPage>

        <Headings h="1" class="" text={"trans('VitaminsIntegrationIntoWorkflow')"}></Headings>
        <Headings h="2" class="" text={"trans('InDevelopment')"}></Headings>

        <p class="">这一部分默认您熟悉LIve2d建模和VTuber Studio配置。</p>

        <Headings h="3" class="" text={"trans('WhatDoINeedToDoBeforeModeling')"}></Headings>

        <p class="">trans('LearnAsPartOfVTB')。</p>

        <p class="">trans('CompletePreprocessingCalibration')</p>

        <p class="">trans('LearnHowToUnderstandParameterActions')。</p>

        <Headings h="3" class="" text={"trans('WhatAreTheDifferencesDuringModeling')"}></Headings>

        <p class="">trans('VitaminsDoesNotChangeLive2dModeling')。</p>
        <p class="">trans('YouDecideModelActivityInLive2dCubism')。</p>

        <p class="">trans('YouCanModelInYourPreferredWay')。</p>


        <p class="">
            如果你想要使用默认存档中额外的参数驱动模型，阅读<strong>我要如何知道一个参数对应的动作，</strong>会对建模很有帮助。</p>

        <p class="">如果你想要开发参数，或与参数开发者合作，请参阅<strong>trans('DoINeedToLearnParameterDevelopment')</strong>
        </p>

        <Headings h="3" class="" text={"为什么我也需要完成trans('Preprocessing')校准？"}></Headings>

        <p class="">你需要借此保证交付前对模型的测试的有效性。</p>

        <p class="">前处理校准也可以为工作流提供很多便利，详细请参阅，前处理校准在开发中的优势。</p>

        <p class="">
            概况一下，对于与客户交接来讲，完成前处理校准后，你的客户可以直接使用你为自己配置的VTS配置文件，而几乎不需要重新配置。这可以提供极大的便利。</p>

        <Headings h="3" class="" text={"trans('HowDoIKnowTheActionForAParameter')"}></Headings>

        <p class="">trans('Built-inArchiveParameters')。</p>
        <p class="">trans('ParametersWithDifferentNames')。</p>
        <p class="">trans('Right-ClickToPlayActionDemoAnimation')。</p>

        <p class="">如果不是内置的存档，请展开对应参数，参数开发者很有可能会在此留下动作注释。</p>

        <Headings h="3" class="" text={"我需要学习参数开发吗？"}></Headings>

        <p class="">
            trans('ParameterDevelopmentCanBeSeparatedFromModelDevelopment')。trans('CollaborateWithParameterScriptDevelopers')。</p>
        <p class="">得益于前处理的设计，参数脚本开发者可以脱离模型，只与你对接，只需要你提供的需求即可完成开发。</p>
        <Headings h="3" class="" text={"trans('HowDoICommunicateMyRequirementsToParameterScriptDevelopers')"}></Headings>


        <p class="">trans('ParameterDevelopersMainConcerns')：</p>
        <p class="">这个参数的逻辑</p>
        <p class="">对应的Live2d参数的效果。</p>
        <p class="">对应的Live2d参数的最小值，最大值，默认值</p>


        <p class="">trans('RequirementExample1')：</p>
        <p class="">我希望做一个惊讶时，眼睛周围冒出星星的效果，持续一段时间后快速收回。</p>
        <p class="">我希望你写一个参数，这个参数控制星星出现的动画参数的进度。</p>
        <p class="">这个Live2d参数的默认值和最小值是0，最大值(动画最后一帧)是1。</p>
        <p class="">它的逻辑是：</p>
        <p class="">检测到眼睛突然睁大时，在0.5秒内按 。。曲线从最小值增加到最大值，达到最大值后，至少保持0.5秒。</p>
        <p class="">眼睛不再睁大时，在0.5秒内按。。曲线从最大值回到最小值。</p>

        <p class="">trans('RequirementExample2')：</p>
        <p class="">我希望实现，微笑时不会出现皱眉。</p>
        <p class="">
            我希望你写一组控制眉毛高度(BrowLeftY和BrowRightY)的参数，在内置BrowLeftY和BrowRightY参数的基础上，增加逻辑：微笑幅度超过80%时，眉毛高度不会低于50%。</p>


        <Headings h="2" class="" text={"trans('DeliverablesToTheClient')"}></Headings>
        <Headings h="3" class="" text={"trans('DeliveryContents')"}></Headings>


        <p class="">trans('ModelFolder')：</p>
        <p class="">trans('ModelFiles')</p>
        <p class="">trans('YourConfiguredVTSFile')</p>

        <p class="">trans('VitaminsFiles')：</p>
        <p class="">你使用的Vitamins脚本文件（.vps)</p>

        <Headings h="3" class="" text={"trans('AssistingInDebugging')"}></Headings>


        <p class="">前处理：</p>

        <p class="">
            trans('AlthoughNotNecessaryToAssistWith')，但是甲方可能在模拟动画和前处理教程的帮助下仍有疑惑，协助甲方完成前处理会保证模型表现的稳定。</p>

        <p class="">trans('VTSDiagnostics')：</p>
        <p class="">
            trans('IfYouDeliverYourVTSConfigurationFile')。trans('AdjustParametersAffectedByHabits')。trans('DifferentSpeakingHabits')。</p>


    </WikiPage>

}