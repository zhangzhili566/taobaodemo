// 我的淘宝  延迟脚本
function navlist(index){
    let listarry = document.getElementsByClassName("listarry")[index-1];
    let lista = document.getElementsByClassName("list-a")[index-1]
    listarry.onmouseover = function(){
        listarry.classList.add('divactive');
        lista.classList.add('dispin');
    }
    listarry.onmouseout = function(){
        listarry.classList.remove("divactive");
        lista.classList.remove('dispin');
    }
    lista.onmouseover = function(){
        listarry.classList.add('divactive');
        lista.classList.add('dispin');
    }
    lista.onmouseout = function(){
        listarry.classList.remove("divactive");
        lista.classList.remove('dispin');
    }
}