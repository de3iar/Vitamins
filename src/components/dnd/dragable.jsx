import { createEffect, onCleanup, onMount, useContext } from "solid-js"
import { createStore } from "solid-js/store"


export function Dragable(props = {
    onDragStart: () => { },
    onDragEnd: () => { },
    dragContainerRef: () => { },
    handleRef: () => { },
    lockInRange: false
}) {
    let dragableRef

    const [state, setState] = createStore({
        isDragging: false,
        isMouseDown: false,
        initLayout: {},
        movedLayout: {
            left: 0,
            top: 0,
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        containerLayout: {

        }
    })
    onCleanup(() => {
        unRegListeners()
        document.body.classList.remove('select-none')
        window.removeEventListener('resize', windowResizeHandler)

    })
    createEffect(() => {
        if (state.isDragging) {
            //设置html不可选中
            document.body.classList.add('select-none')
        } else {
            document.body.classList.remove('select-none')
        }
    })
    let isInited = false
    onMount(() => {

        dragableRef.addEventListener('mousedown', (e) => {
            //如果e.target是输入组件，不触发拖拽

            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT' || e.target.tagName === 'BUTTON') {
                return
            }
            //从e.target开始向上找到sortItem,期间如果有元素的class包含notDraggable,标记为不可拖拽
            let isNotDraggable = false
            let rtarget = e.target
            while (rtarget !== dragableRef) {
                if (rtarget.classList.contains('notDraggable')) {
                    isNotDraggable = true
                    break
                }
                rtarget = rtarget.parentElement
            }
            if (isNotDraggable) {
                return
            }
            //如果包含handleRef,则只有点击handleRef才能触发拖拽
            if (props.handleRef && props.handleRef() && e.target !== props.handleRef()) {
                return
            }
            if (props.dragContainerRef && props.dragContainerRef() && props.lockInRange) {

                //取容器位置和大小
                let containerLayout = props.dragContainerRef().getBoundingClientRect()
                setState('containerLayout', containerLayout)
            }
            //设置拖拽状态
            setState('isMouseDown', true)

            let layout = dragableRef.getBoundingClientRect()
            setState('initLayout', {

                x: e.x - state.movedLayout.x, y: e.y - state.movedLayout.y
            })
            if (!isInited) {
                setState('initLayout', {

                    x: e.x - state.movedLayout.x, y: e.y - state.movedLayout.y, top: layout.top - state.movedLayout.y, left: layout.left - state.movedLayout.x, width: layout.width, height: layout.height
                })
            }

            isInited = true
            regDragListeners()
            setStartDrag()

        })
        window.addEventListener('resize', windowResizeHandler)
    })
    function windowResizeHandler(e) {
        if (isInited) {
            isInited = false
            mouseMoveHandler({ x: state.initLayout.x, y: state.initLayout.y })
        }


    }
    function mouseMoveHandler(e) {

        //取鼠标位置
        let { x, y } = e

        let { initLayout } = state
        let initX = initLayout.x
        let initY = initLayout.y
        let movedX = x - initX //X偏移值
        let movedY = y - initY //Y偏移值


        if (props.dragContainerRef() && props.lockInRange) {
            let { initLayout, containerLayout } = state
            let containerX = containerLayout.x
            let containerY = containerLayout.y
            let containerWidth = containerLayout.width
            let containerHeight = containerLayout.height


            //如果超出容器范围80%，不再移动
            if (movedX < containerX - initLayout.left - 0.8 * initLayout.width) {
                movedX = containerX - initLayout.left - 0.8 * initLayout.width
            }
            if (movedY < containerY - initLayout.top - 0.8 * initLayout.height) {
                movedY = containerY - initLayout.top - 0.8 * initLayout.height
            }
            if (movedX > containerX + containerWidth - initLayout.left - initLayout.width + 0.8 * initLayout.width) {
                movedX = containerX + containerWidth - initLayout.left - initLayout.width + 0.8 * initLayout.width
            }
            if (movedY > containerY + containerHeight - initLayout.top - initLayout.height + 0.8 * initLayout.height) {
                movedY = containerY + containerHeight - initLayout.top - initLayout.height + 0.8 * initLayout.height
            }
            setState('movedLayout', {
                x: movedX,
                y: movedY,
            })
        }
        else {
            setState('movedLayout', {
                x: movedX,
                y: movedY,
            })
        }

    }
    function regDragListeners() {


        //设置对取消isMouseDown的事件监听
        window.addEventListener('mouseup', mouseUpHandler)
        window.addEventListener('mousemove', mouseMoveHandler)
    }
    function unRegListeners(e) {

        setState('isMouseDown', false)
        setState('isDragging', false)


        window.removeEventListener('mouseup', mouseUpHandler)
        window.removeEventListener('mousemove', mouseMoveHandler)

    }
    function mouseUpHandler(e) {
        unRegListeners()
        try { props.onDragEnd() } catch (e) { }
    }
    function setStartDrag() {
        setState('isDragging', true)
        try { props.onDragStart() } catch (e) { }
    }

    return <div ref={dragableRef}
        style={
            {
                transform: `translate(${state.movedLayout.x + 'px'},${state.movedLayout.y + 'px'})`,
            }
        }
    >
        {props.children}

    </div>
}