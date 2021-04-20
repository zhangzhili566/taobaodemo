window.onload= function(){
    carousela();
    carouselb();
}
// 上轮播图
var img1 =['../src/img/carousel-top/1.jpg','../src/img/carousel-top/2.jpg','../src/img/carousel-top/3.jpg','../src/img/carousel-top/4.jpg',];
var i=0;
var timer;
var carbtnlist = document.getElementsByClassName('carbtnlist');
var cartopimg = document.getElementById('cartopimg');
carousela = function(index){
    if(index){
        i=index-1;
        clearTimeout(timer);
    }
    cartopimg.src=img1[i];
    i++;
    if(i>3){
        i=0
    }
    timer=setTimeout(carousela, 2000);    
}

// 下轮播图
var img2 =['../src/img/carousel-bottom/1.jpg','../src/img/carousel-bottom/2.jpg','../src/img/carousel-bottom/3.jpg','../src/img/carousel-bottom/4.jpg',];
var k=0;
var timer;
var carbtnlist = document.getElementsByClassName('carbtnlist');
var carbomimg1 = document.getElementById('carbomimg1');
var carbomimg2 = document.getElementById('carbomimg2');
carouselb = function(index){
    if(index){
        k=index-1;
        clearTimeout(timer);
    }
    carbomimg1.src=img2[k];
    carbomimg2.src=img2[k+1];
    k++;
    k++;
    if(k>3){
        k=0
    }
    timer=setTimeout(carouselb, 4000);    
}

