export function getLoactionPath() {
    let a = window.location.pathname
    return a.substring(0, a.indexOf('/', 2) + 1)
}