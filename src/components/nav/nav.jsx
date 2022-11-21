import { useI18n } from "/src/i18n/context";

function Nbar() {
    const i18n = useI18n()

    return <div className=" h-20 w-full bg-base-300 flex shadow-sm justify-center">
        <a href="/" className=" text text-3xl font-bold self-center btn btn-ghost normal-case hover:bg-transparent hover:text-primary select-none mt-4">Vitamins</a>
    </div>
}
export default Nbar