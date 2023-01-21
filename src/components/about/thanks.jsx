
function ThanksLi(props) {


    return (
        <div className=" flex flex-wrap my-4">
            <div className="w-1 h-1 m-2 bg-base-content align-middle text-center self-center rounded-full"></div>
            <strong className="mx-2"> {props.name} </strong>
            {props.desc}
            {props.dom}
        </div>
    )
}
export default ThanksLi;