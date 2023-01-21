const path = require('path');
const fs = require('fs');

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

copyDir("./assets/", "./dist/assets");

copyDir("./i18n/", "./dist/i18n");
fs.rmSync('./dist/i18n/config.js')
fs.rmSync('./dist/i18n/context.js')