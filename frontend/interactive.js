$(document).ready(function() {

    $('img.avatarsm').mouseenter(function(){
        $(this).animate({width: '110px' ,height:'520px'},'1000');
    });

    $('img.avatarsm').mouseleave(function(){
        $(this).animate({width: '100px' ,height:'500px'},'1000');
    });

     $('img.avatarsf').mouseenter(function(){
        $(this).animate({width: '130px' ,height:'540px'},'1000');
    });

    $('img.avatarsf').mouseleave(function(){
        $(this).animate({width: '120px' ,height:'540px'},'1000');
    });

    $('img.avatarsm').click(function(){
        $('img').removeClass("light");
        $(this).addClass("light");
    });

    $('img.avatarsf').click(function(){
        $('img').removeClass("light");
        $(this).addClass("light");
    });

    $('img#level1').mouseenter(function(){
        $(this).attr("src","images/Level-1.png");
    });

    $('img#level1').mouseleave(function(){
        $(this).attr("src","images/Level1.png");
    });

    $('img#level2').mouseenter(function(){
        $(this).attr("src","images/Level-2.png");
    });

    $('img#level2').mouseleave(function(){
        $(this).attr("src","images/Level2.png");
    });

     $('img#level3').mouseenter(function(){
        $(this).attr("src","images/Level-3.png");
    });

    $('img#level3').mouseleave(function(){
        $(this).attr("src","images/Level3.png");
    });

     $('img#level4').mouseenter(function(){
        $(this).attr("src","images/Level-4.png");
    });

    $('img#level4').mouseleave(function(){
        $(this).attr("src","images/Level4.png");
    });

    $('img#chest').mouseenter(function(){
        $(this).attr("src","images/chest_open.png");
    });

    $('img#chest').mouseleave(function(){
        $(this).attr("src","images/chest_closed.png");
    });

    $('#chestbutton').mouseenter(function(){
        $('img#chest').attr("src","images/chest_open.png");
    });

    $('#chestbutton').mouseleave(function(){
        $('img#chest').attr("src","images/chest_closed.png");
    });

    $('#pipe').mouseenter(function(){
        $(this).attr("src","images/pipe_on.png");
    });

    $('#pipe').mouseleave(function(){
        $(this).attr("src","images/pipe_off.png");
    });

    $('#diamond').mouseenter(function(){
        $(this).attr("src","images/diamond_open.png");
    });

    $('#diamond').mouseleave(function(){
        $(this).attr("src","images/diamond_closed.png");
    });
});