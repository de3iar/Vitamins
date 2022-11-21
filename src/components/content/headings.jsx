import { useI18n } from "/src/i18n/context";

function Headings(props) {
    const i18n = useI18n()

    return (<Switch fallback={<div>tt</div>}>
        <Match when={props.h == 1}>

            <h1 className={props.class + " text-primary"}>

                {i18n.t(props.text)}
            </h1>
        </Match>
        <Match when={props.h == 2}>
            <h2 className={props.class + " text-secondary"}>
                <Inner id={props.id} />
                {i18n.t(props.text)}
            </h2>
        </Match>
        <Match when={props.h == 3}>
            <h3 className={props.class}>

                {i18n.t(props.text)}
            </h3>
        </Match>
        <Match when={props.h == 4}>
            <h4 className={props.class}>

                {i18n.t(props.text)}
            </h4>
        </Match>
        <Match when={props.h == 5}>
            <h5 className={props.class}>

                {i18n.t(props.text)}
            </h5>
        </Match>
    </Switch>)
}

function Inner(props) {
    return <a href={"#" + props.id}>
        <span className="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">
            #
        </span>
    </a>
}


export default Headings