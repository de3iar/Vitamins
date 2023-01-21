import { useI18n } from "/i18n/context";
function matLi(props) {

    const i18n = useI18n()

    const lp = "about:"
    return (
        <div className=" flex flex-wrap my-4">
            <div className="w-1 h-1 m-2 bg-base-content align-middle text-center self-center rounded-full"></div>
            <strong>{props.title}</strong> : {i18n.t(lp + 'source')} : <a href={props.sHref}>{props.sTitle}</a>, {i18n.t(lp + 'author')} : <a href={props.aHref}>{props.author}</a>
        </div>


    )
}
export default matLi;

