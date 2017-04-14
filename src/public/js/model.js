function remToPxFun() {
    ! function() {
        function a() {
            var widthWindow = document.documentElement.clientWidth;
            var fontNumber = 27;
            document.documentElement.style.fontSize = document.documentElement.clientWidth / fontNumber + "px";
        }
        var b = null;
        window.addEventListener("resize", function() {
            clearTimeout(b), b = setTimeout(a, 100)
        }, !1), a()

    }(window);
}

function setWechatTitleFun(title) {
    document.title = title
    var mobile = navigator.userAgent.toLowerCase()
    if (/iphone|ipad|ipod/.test(mobile)) {
        var iframe = document.createElement('iframe')
        iframe.style.display = 'none'
            // 替换成站标favicon路径或者任意存在的较小的图片即可
        // iframe.setAttribute('src', '/favicon.ico')
        var iframeCallback = function() {
            setTimeout(function() {
                iframe.removeEventListener('load', iframeCallback)
                document.body.removeChild(iframe)
            }, 0)
        }
        iframe.addEventListener('load', iframeCallback)
        document.body.appendChild(iframe)
    }
}


module.exports = {
    remToPxFun: remToPxFun,
    setWechatTitleFun: setWechatTitleFun
}
