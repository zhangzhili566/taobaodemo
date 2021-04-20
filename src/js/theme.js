// 浮动菜单
function show(index){
    var themeli = document.getElementsByClassName('theme-li')[index-1];
    var themefloat = document.getElementsByClassName('theme-float')[0];
    themeli.onmouseover = function(){
        themeli.classList.add('theme-li-color');
        themefloat.classList.add('theme-float-yes');
    }
    themeli.onmouseout = function(){
        themeli.classList.remove('theme-li-color');
        themefloat.classList.remove("theme-float-yes");
    }
    themefloat.onmouseover = function(){
        themeli.classList.add('theme-li-color');
        themefloat.classList.add('theme-float-yes');
    }
    themefloat.onmouseout = function(){
        themeli.classList.remove('theme-li-color');
        themefloat.classList.remove("theme-float-yes");
    }

}
