export function SideActionBtn(props = {
    tipClass: "",
    tip: "",
    class: ""

}) {
    return <div class={`tooltip ${props.tipClass}`}

        data-tip={props.tip}>
        <button
            {...props}
            class={` btn btn-sm btn-circle btn-ghost hover:bg-transparent hover:text-primary disabled:bg-opacity-0 ${props.class}}`}

        >
            {props.children}


        </button>
    </div >
}