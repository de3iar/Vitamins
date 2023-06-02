const path = require('path');
const fs = require('fs');
const version = require('../package.json').version;
function _copy(src, dist) {
    var paths = fs.readdirSync(src)
    paths.forEach(function (p) {
        var _src = src + '/' + p;
        var _dist = dist + '/' + p;
        var stat = fs.statSync(_src)
        if (stat.isFile()) {// 判断是文件还是目录
            fs.writeFileSync(_dist, fs.readFileSync(_src));
        } else if (stat.isDirectory()) {
            copyDir(_src, _dist)// 当是目录是，递归复制
        }
    })
}
//递归创建目录 同步方法  
function mkdirsSync(dirname) {
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (mkdirsSync(path.dirname(dirname))) {
            console.log("mkdirsSync = " + dirname);
            fs.mkdirSync(dirname);
            return true;
        }
    }
}

/*
 * 复制目录、子目录，及其中的文件
 * @param src {String} 要复制的目录
 * @param dist {String} 复制到目标目录
 */
function copyDir(src, dist) {
    var b = fs.existsSync(dist)
    console.log("dist = " + dist)
    if (!b) {
        console.log("mk dist = ", dist)
        mkdirsSync(dist);//创建目录
    }
    console.log("_copy start")
    _copy(src, dist);
}

copyDir("./assets/", "./docs/assets");
const langPath = `./docs/lang/${version}/`
copyDir("./i18n/", langPath);
fs.rmSync(langPath + 'config.js')
fs.rmSync(langPath + 'context.js')

let a = fs.readFileSync('./docs/index.html')
let b = a.toString()
b = b.replace('src="/assets', 'src="./assets')
b = b.replace('href="/static', 'href="./static')

fs.writeFileSync('./docs/index.html', b)

fs.copyFileSync('./docs/index.html', './docs/404.html')