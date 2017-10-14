
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

    $('.missingclue').mouseenter(function(){
        $(this).css("opacity","0.7");
        $(this).animate({width: '170',height:'170'},'1000');
    });

    $('.missingclue').mouseleave(function(){
        $(this).css("opacity","1");
        $(this).animate({width: '150',height:'150'},'1000');
    });

     /*
    Code for Splash screen 
    */


    $('#arrowslide').click(function(){
        $('.splash').slideUp(2000,"swing");
    });

    /*
    Code for sidebar
    */

    //Opacity toggle for logo

    $('#logosidebar').mouseenter(function(){
        $(this).animate({opacity: '0.5'});
    });

    $('#logosidebar').mouseleave(function(){
        $(this).animate({opacity: '1'});
    });

    // Slide effect for active and inactive sidebar

    var side_bar_status = true;

    $('.activetoggle').click(function(){
        if (side_bar_status == true) {
            $('.sidebar').animate({left:'-21%'});
            side_bar_status = !side_bar_status;
        }else{
            $('.sidebar').animate({left:'0%'});
            side_bar_status = !side_bar_status;
        }
    });

    /*
    Code for Avatar Selection
    */

    //Code to show male or female options

    //$('#femaleoptions').remove();


    // Code for Overlaying images on the empty avatar

    $('img.topoption, img.bottomoption, img.shoeoption').mouseenter(function(){
        $(this).animate({opacity: '0.6'});
    });

    $('img.topoption, img.bottomoption, img.shoeoption').mouseleave(function(){
        $(this).animate({opacity: '1.0'});
    });

    $('img.topoption, img.bottomoption, img.shoeoption').click(function(){
       var current_id = $(this).attr('id');

       //Male Activation

       if(current_id =="topchoice1") {
        $('#topselectionactive').remove();
        $('#topselection').append('<img src="images/male_red_top.png" id="topselectionactive"/>');
       }

       if(current_id =="topchoice2") {
        $('#topselectionactive').remove();
        $('#topselection').append('<img src="images/male_green_top.png" id="topselectionactive"/>');
       }

       if(current_id =="topchoice3") {
        $('#topselectionactive').remove();
        $('#topselection').append('<img src="images/male_silver_top.png" id="topselectionactive"/>');
       }

       if(current_id =="bottomchoice1") {
        $('#bottomselectionactive').remove();
        $('#bottomselection').append('<img src="images/male_red_bottom.png" id="bottomselectionactive"/>');
       }

       if(current_id =="bottomchoice2") {
        $('#bottomselectionactive').remove();
        $('#bottomselection').append('<img src="images/male_green_bottom.png" id="bottomselectionactive"/>');
       }

       if(current_id =="bottomchoice3") {
        console.log('yes')
        $('#bottomselectionactive').remove();
        $('#bottomselection').append('<img src="images/male_silver_bottom.png" id="bottomselectionactive"/>');
       }

       if(current_id =="shoechoice1") {
        $('#shoeselectionactive').remove();
        $('#shoeselection').append('<img src="images/male_red_shoes.png" id="shoeselectionactive"/>');
       }

       if(current_id =="shoechoice2") {
        $('#shoeselectionactive').remove();
        $('#shoeselection').append('<img src="images/male_green_shoes.png" id="shoeselectionactive"/>');
       }

       if(current_id =="shoechoice3") {
        $('#shoeselectionactive').remove();
        $('#shoeselection').append('<img src="images/male_silver_shoes.png" id="shoeselectionactive"/>');
       }

       //Female Activation

       if(current_id =="ftopchoice1") {
        $('#topselectionactive').remove();
        $('#topselection').append('<img src="images/female_silver_top.png" id="topselectionactive"/>');
       }

       if(current_id =="ftopchoice2") {
        $('#topselectionactive').remove();
        $('#topselection').append('<img src="images/female_pink_top.png" id="topselectionactive"/>');
       }

       if(current_id =="ftopchoice3") {
        $('#topselectionactive').remove();
        $('#topselection').append('<img src="images/female_blue_top.png" id="topselectionactive"/>');
       }

       if(current_id =="fbottomchoice1") {
        $('#bottomselectionactive').remove();
        $('#bottomselection').append('<img src="images/female_silver_bottom.png" id="bottomselectionactive"/>');
       }

       if(current_id =="fbottomchoice2") {
        $('#bottomselectionactive').remove();
        $('#bottomselection').append('<img src="images/female_pink_bottom.png" id="bottomselectionactive"/>');
       }

       if(current_id =="fbottomchoice3") {
        $('#bottomselectionactive').remove();
        $('#bottomselection').append('<img src="images/female_blue_bottom.png" id="bottomselectionactive"/>');
       }

       if(current_id =="fshoechoice1") {
        $('#shoeselectionactive').remove();
        $('#shoeselection').append('<img src="images/female_silver_shoes.png" id="shoeselectionactive"/>');
       }

       if(current_id =="fshoechoice2") {
        $('#shoeselectionactive').remove();
        $('#shoeselection').append('<img src="images/female_pink_shoes.png" id="shoeselectionactive"/>');
       }

       if(current_id =="fshoechoice3") {
        $('#shoeselectionactive').remove();
        $('#shoeselection').append('<img src="images/female_blue_shoes.png" id="shoeselectionactive"/>');
       }

    });

    // Code to Save Avatar parts

    $('#savemale').click(function(){
        var topselection = $('#topselection img').attr('src');
        var bottomselection = $('#bottomselection img').attr('src');
        var shoeselection = $('#shoeselection img').attr('src');
        
        if(topselection == "images/male_red_top.png" && bottomselection == "images/male_red_bottom.png" && shoeselection=="images/male_red_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/male_red_top.png" && bottomselection == "images/male_red_bottom.png" && shoeselection=="images/male_green_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/male_red_top.png" && bottomselection == "images/male_red_bottom.png" && shoeselection=="images/male_silver_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/male_red_top.png" && bottomselection == "images/male_green_bottom.png" && shoeselection=="images/male_red_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/male_red_top.png" && bottomselection == "images/male_green_bottom.png" && shoeselection=="images/male_green_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/male_red_top.png" && bottomselection == "images/male_green_bottom.png" && shoeselection=="images/male_silver_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/male_red_top.png" && bottomselection == "images/male_silver_bottom.png" && shoeselection=="images/male_red_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/male_red_top.png" && bottomselection == "images/male_silver_bottom.png" && shoeselection=="images/male_green_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/male_red_top.png" && bottomselection == "images/male_silver_bottom.png" && shoeselection=="images/male_silver_shoes.png"){
            avatar_image_url = "" ;
        };

                if(topselection == "images/male_green_top.png" && bottomselection == "images/male_red_bottom.png" && shoeselection=="images/male_red_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/male_green_top.png" && bottomselection == "images/male_red_bottom.png" && shoeselection=="images/male_green_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/male_green_top.png" && bottomselection == "images/male_red_bottom.png" && shoeselection=="images/male_silver_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/male_green_top.png" && bottomselection == "images/male_green_bottom.png" && shoeselection=="images/male_red_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/male_green_top.png" && bottomselection == "images/male_green_bottom.png" && shoeselection=="images/male_green_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/male_green_top.png" && bottomselection == "images/male_green_bottom.png" && shoeselection=="images/male_silver_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/male_green_top.png" && bottomselection == "images/male_silver_bottom.png" && shoeselection=="images/male_red_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/male_green_top.png" && bottomselection == "images/male_silver_bottom.png" && shoeselection=="images/male_green_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/male_green_top.png" && bottomselection == "images/male_silver_bottom.png" && shoeselection=="images/male_silver_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/male_silver_top.png" && bottomselection == "images/male_red_bottom.png" && shoeselection=="images/male_red_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/male_silver_top.png" && bottomselection == "images/male_red_bottom.png" && shoeselection=="images/male_green_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/male_silver_top.png" && bottomselection == "images/male_red_bottom.png" && shoeselection=="images/male_silver_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/male_silver_top.png" && bottomselection == "images/male_green_bottom.png" && shoeselection=="images/male_red_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/male_silver_top.png" && bottomselection == "images/male_green_bottom.png" && shoeselection=="images/male_green_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/male_silver_top.png" && bottomselection == "images/male_green_bottom.png" && shoeselection=="images/male_silver_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/male_silver_top.png" && bottomselection == "images/male_silver_bottom.png" && shoeselection=="images/male_red_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/male_silver_top.png" && bottomselection == "images/male_silver_bottom.png" && shoeselection=="images/male_green_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/male_silver_top.png" && bottomselection == "images/male_silver_bottom.png" && shoeselection=="images/male_silver_shoes.png"){
            avatar_image_url = "" ;
        };

    });

    $('#savefemale').click(function(){
        var topselection = $('#topselection img').attr('src');
        var bottomselection = $('#bottomselection img').attr('src');
        var shoeselection = $('#shoeselection img').attr('src');
        console.log(topselection);
        console.log(bottomselection);
        console.log(shoeselection);

        if(topselection == "images/female_silver_top.png" && bottomselection == "images/female_silver_bottom.png" && shoeselection=="images/male_silver_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/female_silver_top.png" && bottomselection == "images/female_silver_bottom.png" && shoeselection=="images/male_pink_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/female_silver_top.png" && bottomselection == "images/female_silver_bottom.png" && shoeselection=="images/male_blue_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/female_silver_top.png" && bottomselection == "images/female_pink_bottom.png" && shoeselection=="images/male_silver_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/female_silver_top.png" && bottomselection == "images/female_pink_bottom.png" && shoeselection=="images/male_pink_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/female_silver_top.png" && bottomselection == "images/female_pink_bottom.png" && shoeselection=="images/male_blue_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/female_silver_top.png" && bottomselection == "images/female_blue_bottom.png" && shoeselection=="images/male_silver_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/female_silver_top.png" && bottomselection == "images/female_blue_bottom.png" && shoeselection=="images/male_pink_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/female_silver_top.png" && bottomselection == "images/female_blue_bottom.png" && shoeselection=="images/male_blue_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/female_pink_top.png" && bottomselection == "images/female_silver_bottom.png" && shoeselection=="images/male_silver_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/female_pink_top.png" && bottomselection == "images/female_silver_bottom.png" && shoeselection=="images/male_pink_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/female_pink_top.png" && bottomselection == "images/female_silver_bottom.png" && shoeselection=="images/male_blue_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/female_pink_top.png" && bottomselection == "images/female_pink_bottom.png" && shoeselection=="images/male_silver_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/female_pink_top.png" && bottomselection == "images/female_pink_bottom.png" && shoeselection=="images/male_pink_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/female_pink_top.png" && bottomselection == "images/female_pink_bottom.png" && shoeselection=="images/male_blue_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/female_pink_top.png" && bottomselection == "images/female_blue_bottom.png" && shoeselection=="images/male_silver_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/female_pink_top.png" && bottomselection == "images/female_blue_bottom.png" && shoeselection=="images/male_pink_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/female_pink_top.png" && bottomselection == "images/female_blue_bottom.png" && shoeselection=="images/male_blue_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/female_blue_top.png" && bottomselection == "images/female_silver_bottom.png" && shoeselection=="images/male_silver_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/female_blue_top.png" && bottomselection == "images/female_silver_bottom.png" && shoeselection=="images/male_pink_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/female_blue_top.png" && bottomselection == "images/female_silver_bottom.png" && shoeselection=="images/male_blue_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/female_blue_top.png" && bottomselection == "images/female_pink_bottom.png" && shoeselection=="images/male_silver_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/female_blue_top.png" && bottomselection == "images/female_pink_bottom.png" && shoeselection=="images/male_pink_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/female_blue_top.png" && bottomselection == "images/female_pink_bottom.png" && shoeselection=="images/male_blue_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/female_blue_top.png" && bottomselection == "images/female_blue_bottom.png" && shoeselection=="images/male_silver_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/female_blue_top.png" && bottomselection == "images/female_blue_bottom.png" && shoeselection=="images/male_pink_shoes.png"){
            avatar_image_url = "" ;
        };

        if(topselection == "images/female_blue_top.png" && bottomselection == "images/female_blue_bottom.png" && shoeselection=="images/male_blue_shoes.png"){
            avatar_image_url = "" ;
        };
    });

        
});