// 搜索栏
    var searTab = document.getElementsByClassName('searTab')[0];
    var searli = document.getElementsByClassName('sear-li');
    
    
    searTab.onmouseover = function(){
            item.classList.add("sear-li-yes");
        searTab.onmouseout = function(){
            item.classList.remove("sear-li-yes");
        }
    }
    
    
    searli[1].onclick = function(){
        let seartxt = searli[0].innerHTML;
        searli[0].innerHTML = searli[1].innerHTML;
        searli[1].innerHTML = seartxt;
    }
    searli[2].onclick = function(){
        let seartxt = searli[0].innerHTML;
        searli[0].innerHTML = searli[2].innerHTML;
        searli[2].innerHTML = searli[1].innerHTML
        searli[1].innerHTML = seartxt
    }
