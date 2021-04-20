var imgactive = document.getElementsByClassName('img-active');
function dispimg(i){
    imgactive[i-1].classList.add('adactive');
    imgactive[i-1].onmouseout = function(){
        imgactive[i-1].classList.remove('adactive');
    }
}
