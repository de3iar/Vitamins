import { useI18n } from "/src/i18n/context";

function Nbar() {
    const i18n = useI18n()

    return <div className=" h-20 w-full bg-base-200 flex shadow-sm">
        <span className=" text text-2xl font-bold self-center ml-16 btn btn-ghost normal-case hover:bg-transparent select-none cursor-default">Vitamins</span>
    </div>
}
export default Nbar