var lglist = document.querySelectorAll("div.lg-list");
var similartxt = document.querySelectorAll("div.similar-txt");

// for(var i=0;i<lglist.length;i++){
//     lglist[i].onmouseover = function(){
//         console.log(lglist[i]);
//     }
// }

function dplglist(i){
    similartxt[i-1].classList.add('simtxt');
    lglist[i-1].onmouseout = function(){
        similartxt[i-1].classList.remove('simtxt');
    }
}