import { useI18n } from "/src/i18n/context";

export default function Hero() {
    const i18n = useI18n()

    return <div className="bg-base-100 w-full select-none">
        <div class="hero w-full h-screen bg-base-200">
            <div class="hero-content text-center">
                <div class="w-full">
                    <h1 class="text-6xl font-bold text-primary">{i18n.t('hero:title')}</h1>
                    <p class="py-12 text-xl">{i18n.t('hero:disc')}</p>
                    <a href="/intro" class="btn btn-primary">{i18n.t('hero:getStarted')}</a>
                </div>
            </div>
        </div>
    </div>

}