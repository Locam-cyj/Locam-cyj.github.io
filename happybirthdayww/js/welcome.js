$(function(){
    var txt2 = $(".txt2");
    var txt3 = $(".txt3");
    var txt4 = $(".txt4");
    var video = $("#video");
    txt2.hide();
    txt3.hide();
    txt4.hide();
    video.hide();
    $(".btn2").click(function(){
        txt2.slideToggle(2000);
    });
    $(".btn3").click(function(){
        txt3.slideToggle(2000);
    });
    $(".btn4").click(function(){
        txt4.slideToggle(2000);
    });
    $(".btn5").click(function(){
        video.slideToggle(2000);
    });
    $(".btn6").click(() => {
        window.open("tree.html","_blank");
    });
});