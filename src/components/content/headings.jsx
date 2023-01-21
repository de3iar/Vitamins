import { useI18n } from "@i18n/context";

function Headings(props) {
    const i18n = useI18n()

    return (<Switch fallback={<div>tt</div>}>
        <Match when={props.h == 1}>

            <h1 className={props.class + " text-primary"}>

                {props.text}
            </h1>
        </Match>
        <Match when={props.h == 2}>
            <h2 id={props.id} className={props.class + " text-secondary"}>
                <Inner id={props.id} />
                {props.text}
            </h2>
        </Match>
        <Match when={props.h == 3}>
            <h3 id={props.id} className={props.class + "py-8"}>
                <Inner id={props.id} />
                {props.text}
            </h3>
        </Match>
        <Match when={props.h == 4}>
            <h4 className={props.class + "py-4"}>

                {props.text}
            </h4>
        </Match>
        <Match when={props.h == 5}>
            <h5 className={props.class}>

                {props.text}
            </h5>
        </Match>
    </Switch>)
}

function Inner(props) {
    return <a href={"#" + props.id} >
        <span className="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">
            #
        </span>
    </a>
}


export default Headings