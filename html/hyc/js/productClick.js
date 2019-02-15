
var productActive = document.getElementsByClassName('product-active');
var backgroundWrap = document.getElementsByClassName('backgroundWrap')[0];
var wrapBox = backgroundWrap.getElementsByClassName('clear');
console.log(wrapBox.length);
var i=null;
var lastClick = 0;
// 循环给产品中心加点击事件
for(i = 0; i < productActive.length; i ++) {
    productActive[i].index = i;
    wrapBox[i].index = i;
    productActive[i].onclick = function () {
        if(lastClick === this.index) {
            return
        }
        productActive[lastClick].style.top = productActive[lastClick].offsetTop + 40 + "px";
        wrapBox[lastClick].style.display = 'none';
        this.style.top = this.offsetTop - 40 +  "px";
        console.log(this.index);
        wrapBox[this.index].style.display = 'block';
        lastClick = this.index;
    }
}
function getStyle(obj, attr) {
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, null)[attr];
};
