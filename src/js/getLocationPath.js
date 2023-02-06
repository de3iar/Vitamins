export function getLoactionPath() {
    let a = window.location.pathname
    let b = a.substring(0, a.indexOf('/', 2) + 1)
    return b
}