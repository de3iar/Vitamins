export function changeURLArg(arg, arg_val) {
    let url = window.location.href
    let pattern = arg + '=([^&]*)';
    let replaceText = arg + '=' + arg_val;
    if (url.match(pattern)) {
        let tmp = '/(' + arg + '=)([^&]*)/gi';
        tmp = url.replace(eval(tmp), replaceText);
        history.replaceState(0, document.title, tmp)
    } else {
        if (url.match('[\?]')) {

            history.replaceState(0, document.title, url + '&' + replaceText)
        } else {
            history.replaceState(0, document.title, url + '?' + replaceText)
        }
    }
}