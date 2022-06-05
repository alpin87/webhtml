$(document).ready(function(){

//메뉴
    $(".navi_box > ul > li").mouseover(function(){
        $(this).children(".sub").stop().slideDown();
    });

    $(".navi_box > ul > li").mouseout(function(){
        $(this).children(".sub").stop().slideUp();
    });

});

