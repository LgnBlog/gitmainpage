window.onload = function () {

    if (document.body.classList[0] == "started") {
        var div1 = document.querySelector(".started main div.container:nth-child(2)>div")
        div1.onclick = function () {
            div1.classList.toggle("active")
        }
    }



}

/* 全局常量配置  */
const GLOBAL_DATA = {
	'appCode': './images/newCodeApp.png',//app下载的二维码
	'publicCode': './images/code-public.jpg',//公众号二维码
    'subscribeCode': './images/subscribeCode.jpg', //訂閱號二維碼
}

const GLOBAL_DATA2 = {
    'appCode': '../images/newCodeApp.png',//app下载的二维码
    'publicCode': '../images/code-public.jpg',//公众号二维码
    'subscribeCode': '../images/subscribeCode.jpg', //訂閱號二維碼
}
