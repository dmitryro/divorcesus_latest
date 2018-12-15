    function validEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    jQuery(document).ready(function(){
              
           var box = null;
           
           $(function(){
                  $(".ui-chatbox")
                        .draggable()
                        .resizable();

           });
             

            var activate = eval($("#show_activation").val());
            var link_expired = eval($("#link_expired").val());

            if (activate==1) {
                         setTimeout(function() {
                                $('#activation-app').fadeOut('slow');
                         }, 2500);
            }




            if (link_expired==1) {
                alert("this link has expired");
            }

            var counter = 1;
            $("#counter").attr("value",1);
            $("#wizard :nth-child(1)").attr('class','active');
            $("#stepone").css("display","block");
            $("#steptwo").css("display","none");
            $("#stepthree").css("display","none");
            $("#stepfour").css("display","none");
            $("#stepfive").css("display","none");

            $("#resend").bind("click", function() {
                  resend();
            });
            document.getElementById('property_block').style.display='none';
            document.getElementById('protection_block').style.display='none';
            document.getElementById('agreements_block').style.display='none';
            document.getElementById('child_custody_block').style.display='none';
            document.getElementById('child_support_block').style.display='none';
            document.getElementById('spousal_support_block').style.display='none';
            document.getElementById('contested_divorce_block').style.display='none';
            document.getElementById('uncontested_divorce_block').style.display='none';
            document.getElementById('domestic_violence_block').style.display='none';
            document.getElementById('mediation_block').style.display='none';
            document.getElementById('adoption_block').style.display='none';
            document.getElementById('free_consultation_block').style.display='none';
            document.getElementById('blog_block').style.display='none';
            document.getElementById('faq_block').style.display='none';
            document.getElementById('ask_block').style.display='none';
            document.getElementById('consult_block').style.display='none';
            jQuery("#search_block").css('display', 'none');
            jQuery("#qualify_block").css('display', 'none');
            jQuery("#confirm-info").click(confirm_info);

        var jssor_1_SlideshowTransitions = [
              {$Duration:1200,x:0.2,y:-0.1,$Delay:20,$Cols:8,$Rows:4,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:260,$Easing:{$Left:$Jease$.$InWave,$Top:$Jease$.$InWave,$Clip:$Jease$.$OutQuad},$Outside:true,$Round:{$Left:1.3,$Top:2.5}},
              {$Duration:1500,x:0.3,y:-0.3,$Delay:20,$Cols:8,$Rows:4,$Clip:15,$During:{$Left:[0.1,0.9],$Top:[0.1,0.9]},$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:260,$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Clip:$Jease$.$OutQuad},$Outside:true,$Round:{$Left:0.8,$Top:2.5}},
              {$Duration:1500,x:0.2,y:-0.1,$Delay:20,$Cols:8,$Rows:4,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:260,$Easing:{$Left:$Jease$.$InWave,$Top:$Jease$.$InWave,$Clip:$Jease$.$OutQuad},$Outside:true,$Round:{$Left:0.8,$Top:2.5}},
              {$Duration:1500,x:0.3,y:-0.3,$Delay:80,$Cols:8,$Rows:4,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Clip:$Jease$.$OutQuad},$Outside:true,$Round:{$Left:0.8,$Top:2.5}},
              {$Duration:1800,x:1,y:0.2,$Delay:30,$Cols:10,$Rows:5,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$SlideOut:true,$Reverse:true,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:2050,$Easing:{$Left:$Jease$.$InOutSine,$Top:$Jease$.$OutWave,$Clip:$Jease$.$InOutQuad},$Outside:true,$Round:{$Top:1.3}},
              {$Duration:1000,$Delay:30,$Cols:8,$Rows:4,$Clip:15,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:2049,$Easing:$Jease$.$OutQuad},
              {$Duration:1000,$Delay:80,$Cols:8,$Rows:4,$Clip:15,$SlideOut:true,$Easing:$Jease$.$OutQuad},
              {$Duration:1000,y:-1,$Cols:12,$Formation:$JssorSlideshowFormations$.$FormationStraight,$ChessMode:{$Column:12}},
              {$Duration:1000,x:-0.2,$Delay:40,$Cols:12,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Assembly:260,$Easing:{$Left:$Jease$.$InOutExpo,$Opacity:$Jease$.$InOutQuad},$Opacity:2,$Outside:true,$Round:{$Top:0.5}},
              {$Duration:2000,y:-1,$Delay:60,$Cols:15,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Easing:$Jease$.$OutJump,$Round:{$Top:1.5}}
        ];

        var jssor_1_options = {
            $AutoPlay: true,
            $SlideshowOptions: {
                $Class: $JssorSlideshowRunner$,
                $Transitions: jssor_1_SlideshowTransitions,
                $TransitionsOrder: 1
            },
            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
            },
            $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
            }
        };

             

        var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);


            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizing
        function ScaleSlider() {
            var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
               
            if (refSize) {
                    //refSize = Math.min(refSize, 600);
                    refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
                    jssor_1_slider.$ScaleWidth(refSize);
            } else {
                    window.setTimeout(ScaleSlider, 30);
                
            }
            
        }
        
        ScaleSlider();
        $(window).bind("load", ScaleSlider);
        $(window).bind("resize", ScaleSlider);
        $(window).bind("orientationchange", ScaleSlider);

        $('.rd-mobilepanel_title').html("Grinberg & Segal Family Law");

        $('.rd-mobilemenu_ul a').click(function(e) {
                 $(".rd-mobilepanel_toggle").click();
        });

        var box = null;

        $("#chat_with_us").bind('click',function(event, ui) {
              if(box) {
                  box.chatbox("option", "boxManager").toggleBox();
              }
              else {
                  box = $("#chat_div").chatbox({id:"chat_div",
                                                user:{key : "value"},
                                                title:"Chat with us",
                                                messageSent : function(id, user, msg) {
                                                    $("#log").append(id + " said: " + msg + "<br/>");
                                                    $("#chat_div").chatbox("option", "boxManager").addMsg(id, msg);
                                                }});
              }
          });

        $('#submitcomment').bind('click',handlePost);


        $("#qualify_progress_stepone").bind("click",function() {
            counter = 0;
          
            $("#qualify-stepone").css("display","block");
            $("#qualify-steptwo").css("display","none");
            $("#qualify-stepthree").css("display","none");
            $("#qualify-stepfour").css("display","none");
            $("#qualify-stepfive").css("display","none");
            $("#qualify-stepsix").css("display","none");
            $("#qualify-stepseven").css("display","none");
            $("#qualify-stepeight").css("display","none");

            $("#qualify-wizard :nth-child(1)").attr('class','active');
            $("#qualify-wizard :nth-child(2)").removeAttr('class');
            $("#qualify-wizard :nth-child(3)").removeAttr('class');
            $("#qualify-wizard :nth-child(4)").removeAttr('class');
            $("#qualify-wizard :nth-child(5)").removeAttr('class');
            $("#qualify-wizard :nth-child(6)").removeAttr('class');
            $("#qualify-wizard :nth-child(7)").removeAttr('class');
            $("#qualify-wizard :nth-child(8)").removeAttr('class');

        });

        $("#qualify_progress_steptwo").bind("click",function() {

            counter = 1;
            alert('and this'); 
            $("#qualify-stepone").css("display","none");
            $("#qualify-steptwo").css("display","block");
            $("#qualify-stepthree").css("display","none");
            $("#qualify-stepfour").css("display","none");
            $("#qualify-stepfive").css("display","none");
            $("#qualify-stepsix").css("display","none");
            $("#qualify-stepseven").css("display","none");
            $("#qualify-stepeight").css("display","none");

            $("#qualify-wizard :nth-child(1)").removeAttr('class');
            $("#qualify-wizard :nth-child(2)").attr('class','active');
            $("#qualify-wizard :nth-child(3)").removeAttr('class');
            $("#qualify-wizard :nth-child(4)").removeAttr('class');
            $("#qualify-wizard :nth-child(5)").removeAttr('class');
            $("#qualify-wizard :nth-child(6)").removeAttr('class');
            $("#qualify-wizard :nth-child(7)").removeAttr('class');
            $("#qualify-wizard :nth-child(8)").removeAttr('class');
        });

        $("#qualify_progress_stepthree").bind("click",function() {

            counter = 2;

            $("#qualify-stepone").css("display","none");
            $("#qualify-steptwo").css("display","none");
            $("#qualify-stepthree").css("display","block");
            $("#qualify-stepfour").css("display","none");
            $("#qualify-stepfive").css("display","none");
            $("#qualify-stepsix").css("display","none");
            $("#qualify-stepseven").css("display","none");   
            $("#qualify-stepeight").css("display","none");

            $("#qualify-wizard :nth-child(1)").removeAttr('class');
            $("#qualify-wizard :nth-child(2)").removeAttr('class');
            $("#qualify-wizard :nth-child(3)").attr('class','active');
            $("#qualify-wizard :nth-child(4)").removeAttr('class');
            $("#qualify-wizard :nth-child(5)").removeAttr('class');
            $("#qualify-wizard :nth-child(6)").removeAttr('class');
            $("#qualify-wizard :nth-child(7)").removeAttr('class');
            $("#qualify-wizard :nth-child(8)").removeAttr('class');

        });

        $("#qualify_progress_stepfour").bind("click",function() {

            counter = 3;

            $("#qualify-stepone").css("display","none");
            $("#qualify-steptwo").css("display","none");
            $("#qualify-stepthree").css("display","none");
            $("#qualify-stepfour").css("display","block");
            $("#qualify-stepfive").css("display","none");
            $("#qualify-stepsix").css("display","none");
            $("#qualify-stepseven").css("display","none");
            $("#qualify-stepeight").css("display","none");

            $("#qualify-wizard :nth-child(1)").removeAttr('class');
            $("#qualify-wizard :nth-child(2)").removeAttr('class');
            $("#qualify-wizard :nth-child(3)").removeAttr('class');
            $("#qualify-wizard :nth-child(4)").attr('class','active');
            $("#qualify-wizard :nth-child(5)").removeAttr('class');
            $("#qualify-wizard :nth-child(6)").removeAttr('class');
            $("#qualify-wizard :nth-child(7)").removeAttr('class');
            $("#qualify-wizard :nth-child(8)").removeAttr('class');

        });

        $("#qualify_progress_stepfive").bind("click",function() {

            counter = 4;

            $("#qualify-stepone").css("display","none");
            $("#qualify-steptwo").css("display","none");
            $("#qualify-stepthree").css("display","none");
            $("#qualify-stepfour").css("display","none");
            $("#qualify-stepfive").css("display","block");
            $("#qualify-stepsix").css("display","none");
            $("#qualify-stepseven").css("display","none");
            $("#qualify-stepeight").css("display","none");

            $("#qualify-wizard :nth-child(1)").removeAttr('class');
            $("#qualify-wizard :nth-child(2)").removeAttr('class');
            $("#qualify-wizard :nth-child(3)").removeAttr('class');
            $("#qualify-wizard :nth-child(4)").removeAttr('class');
            $("#qualify-wizard :nth-child(5)").attr('class','active');
            $("#qualify-wizard :nth-child(6)").removeAttr('class');
            $("#qualify-wizard :nth-child(7)").removeAttr('class');
            $("#qualify-wizard :nth-child(8)").removeAttr('class');

        });

        $("#qualify_progress_stepsix").bind("click",function() {

            counter = 5;

            $("#qualify-stepone").css("display","none");
            $("#qualify-steptwo").css("display","none");
            $("#qualify-stepthree").css("display","none");
            $("#qualify-stepfour").css("display","none");
            $("#qualify-stepfive").css("display","none");
            $("#qualify-stepsix").css("display","block");
            $("#qualify-stepseven").css("display","none");
            $("#qualify-stepeight").css("display","none");

            $("#qualify-wizard :nth-child(1)").removeAttr('class');
            $("#qualify-wizard :nth-child(2)").removeAttr('class');
            $("#qualify-wizard :nth-child(3)").removeAttr('class');
            $("#qualify-wizard :nth-child(4)").removeAttr('class');
            $("#qualify-wizard :nth-child(5)").removeAttr('class');
            $("#qualify-wizard :nth-child(6)").attr('class','active');
            $("#qualify-wizard :nth-child(7)").removeAttr('class');
            $("#qualify-wizard :nth-child(8)").removeAttr('class');

        });

        $("#qualify_progress_stepseven").bind("click",function() {

            counter = 6;

            $("#qualify-stepone").css("display","none");
            $("#qualify-steptwo").css("display","none");
            $("#qualify-stepthree").css("display","none");
            $("#qualify-stepfour").css("display","none");
            $("#qualify-stepfive").css("display","none");
            $("#qualify-stepsix").css("display","none");
            $("#qualify-stepseven").css("display","block");
            $("#qualify-stepeight").css("display","none");

            $("#qualify-wizard :nth-child(1)").removeAttr('class');
            $("#qualify-wizard :nth-child(2)").removeAttr('class');
            $("#qualify-wizard :nth-child(3)").removeAttr('class');
            $("#qualify-wizard :nth-child(4)").removeAttr('class');
            $("#qualify-wizard :nth-child(5)").removeAttr('class');
            $("#qualify-wizard :nth-child(6)").removeAttr('class');
            $("#qualify-wizard :nth-child(7)").attr('class','active');
            $("#qualify-wizard :nth-child(8)").removeAttr('class');

        });


        $("#qualify_progress_stepeight").bind("click",function() {

            counter = 7;

            $("#qualify-stepone").css("display","none");
            $("#qualify-steptwo").css("display","none");
            $("#qualify-stepthree").css("display","none");
            $("#qualify-stepfour").css("display","none");
            $("#qualify-stepfive").css("display","none");
            $("#qualify-stepsix").css("display","none");
            $("#qualify-stepseven").css("display","none");
            $("#qualify-stepeight").css("display","block");

            $("#qualify-wizard :nth-child(1)").removeAttr('class');
            $("#qualify-wizard :nth-child(2)").removeAttr('class');
            $("#qualify-wizard :nth-child(3)").removeAttr('class');
            $("#qualify-wizard :nth-child(4)").removeAttr('class');
            $("#qualify-wizard :nth-child(5)").removeAttr('class');
            $("#qualify-wizard :nth-child(6)").removeAttr('class');
            $("#qualify-wizard :nth-child(7)").removeAttr('class');
            $("#qualify-wizard :nth-child(8)").attr('class','active');

        });



        $("#progress_stepone").bind("click",function() {
                     
            counter = 0;
            
            $("#stepone").css("display","block");
            $("#steptwo").css("display","none");
            $("#stepthree").css("display","none");
            $("#stepfour").css("display","none");
            $("#stepfive").css("display","none");

            $("#wizard :nth-child(1)").attr('class','active');
            $("#wizard :nth-child(2)").removeAttr('class');
            $("#wizard :nth-child(3)").removeAttr('class');
            $("#wizard :nth-child(4)").removeAttr('class');
            $("#wizard :nth-child(5)").removeAttr('class');

        });

        $("#progress_steptwo").bind("click",function() {
        
            counter = 1;

            $("#stepone").css("display","none");
            $("#steptwo").css("display","block");
            $("#stepthree").css("display","none");
            $("#stepfour").css("display","none");
            $("#stepfive").css("display","none");

            $("#wizard :nth-child(1)").removeAttr('class');
            $("#wizard :nth-child(2)").attr('class','active');
            $("#wizard :nth-child(3)").removeAttr('class');
            $("#wizard :nth-child(4)").removeAttr('class');
            $("#wizard :nth-child(5)").removeAttr('class');
        });

        $("#progress_stepthree").bind("click",function() {
                     
            counter = 2;
            
            $("#stepone").css("display","none");
            $("#steptwo").css("display","none");
            $("#stepthree").css("display","block");
            $("#stepfour").css("display","none");
            $("#stepfive").css("display","none");

            $("#wizard :nth-child(1)").removeAttr('class');
            $("#wizard :nth-child(2)").removeAttr('class');
            $("#wizard :nth-child(3)").attr('class','active');
            $("#wizard :nth-child(4)").removeAttr('class');
            $("#wizard :nth-child(5)").removeAttr('class');
        });

        $("#progress_stepfour").bind("click",function() {
       
            counter = 4;
            
            $("#stepone").css("display","none");
            $("#steptwo").css("display","none");
            $("#stepthree").css("display","none");
            $("#stepfour").css("display","block");
            $("#stepfive").css("display","none");

            $("#wizard :nth-child(1)").removeAttr('class');
            $("#wizard :nth-child(2)").removeAttr('class');
            $("#wizard :nth-child(3)").removeAttr('class');
            $("#wizard :nth-child(4)").attr('class','active');
            $("#wizard :nth-child(5)").removeAttr('class');

        });

        $("#progress_stepfive").bind("click",function() {
   
            counter = 5;
            
            $("#stepone").css("display","none");
            $("#steptwo").css("display","none");
            $("#stepthree").css("display","none");
            $("#stepfour").css("display","none");
            $("#stepfive").css("display","block");

            $("#wizard :nth-child(1)").removeAttr('class');
            $("#wizard :nth-child(2)").removeAttr('class');
            $("#wizard :nth-child(3)").removeAttr('class');
            $("#wizard :nth-child(4)").removeAttr('class');    
            $("#wizard :nth-child(5)").attr('class','active');

        });

        $("#next_one").bind("click",function() {  
 
            var counter = eval($("#counter").val());            

            $("#stepone").css("display","none");
            $("#steptwo").css("display","block");
            $("#stepthree").css("display","none");
            $("#stepfour").css("display","none");
            $("#stepfive").css("display","none"); 

            $("#wizard :nth-child(1)").removeAttr('class');
            $("#wizard :nth-child(2)").attr('class','active');
            $("#wizard :nth-child(3)").removeAttr('class');
            $("#wizard :nth-child(4)").removeAttr('class');
            $("#wizard :nth-child(5)").removeAttr('class');
        });


        $("#next_two").bind("click",function() {

            var counter = eval($("#counter").val());

            $("#stepone").css("display","none");
            $("#steptwo").css("display","none");
            $("#stepthree").css("display","block");
            $("#stepfour").css("display","none");
            $("#stepfive").css("display","none");    

            $("#wizard :nth-child(1)").removeAttr('class');
            $("#wizard :nth-child(2)").removeAttr('class');
            $("#wizard :nth-child(3)").attr('class','active');
            $("#wizard :nth-child(4)").removeAttr('class');
            $("#wizard :nth-child(5)").removeAttr('class');  
        });

        $("#next_three").bind("click",function() {

            var counter = eval($("#counter").val());

            $("#stepone").css("display","none");
            $("#steptwo").css("display","none");
            $("#stepthree").css("display","none");
            $("#stepfour").css("display","block");
            $("#stepfive").css("display","none");

            $("#wizard :nth-child(1)").removeAttr('class');
            $("#wizard :nth-child(2)").removeAttr('class');
            $("#wizard :nth-child(3)").removeAttr('class');
            $("#wizard :nth-child(4)").attr('class','active');
            $("#wizard :nth-child(5)").removeAttr('class');
        });

        $("#next_four").bind("click",function() {

            var counter = eval($("#counter").val());

            $("#stepone").css("display","none");
            $("#steptwo").css("display","none");
            $("#stepthree").css("display","none");
            $("#stepfour").css("display","none");
            $("#stepfive").css("display","block");

            $("#wizard :nth-child(1)").removeAttr('class');
            $("#wizard :nth-child(2)").removeAttr('class');
            $("#wizard :nth-child(3)").removeAttr('class');
            $("#wizard :nth-child(4)").removeAttr('class');
            $("#wizard :nth-child(5)").attr('class','active');
        });


        $("#qualify_next_one").bind("click",function() {

            $("#qualify-stepone").css("display","none");
            $("#qualify-steptwo").css("display","block");
            $("#qualify-stepthree").css("display","none");
            $("#qualify-stepfour").css("display","none");
            $("#qualify-stepfive").css("display","none");
            $("#qualify-stepsix").css("display","none");
            $("#qualify-stepseven").css("display","none");

            $("#qualify-wizard :nth-child(1)").removeAttr('class');
            $("#qualify-wizard :nth-child(2)").attr('class','active');
            $("#qualify-wizard :nth-child(3)").removeAttr('class');
            $("#qualify-wizard :nth-child(4)").removeAttr('class');
            $("#qualify-wizard :nth-child(5)").removeAttr('class');
            $("#qualify-wizard :nth-child(6)").removeAttr('class');
            $("#qualify-wizard :nth-child(7)").removeAttr('class');            
 
        });

        $("#qualify_next_two").bind("click",function() {
            $("#qualify-stepone").css("display","none");
            $("#qualify-steptwo").css("display","none");
            $("#qualify-stepthree").css("display","block");
            $("#qualify-stepfour").css("display","none");
            $("#qualify-stepfive").css("display","none");
            $("#qualify-stepsix").css("display","none");
            $("#qualify-stepseven").css("display","none");

            $("#qualify-wizard :nth-child(1)").removeAttr('class');
            $("#qualify-wizard :nth-child(2)").removeAttr('class');
            $("#qualify-wizard :nth-child(3)").attr('class','active');
            $("#qualify-wizard :nth-child(4)").removeAttr('class');
            $("#qualify-wizard :nth-child(5)").removeAttr('class');
            $("#qualify-wizard :nth-child(6)").removeAttr('class');
            $("#qualify-wizard :nth-child(7)").removeAttr('class');

        });

        $("#qualify_next_three").bind("click",function() {

            $("#qualify-stepone").css("display","none");
            $("#qualify-steptwo").css("display","none");
            $("#qualify-stepthree").css("display","none");
            $("#qualify-stepfour").css("display","block");
            $("#qualify-stepfive").css("display","none");
            $("#qualify-stepsix").css("display","none");
            $("#qualify-stepseven").css("display","none");

            $("#qualify-wizard :nth-child(1)").removeAttr('class');
            $("#qualify-wizard :nth-child(2)").removeAttr('class');
            $("#qualify-wizard :nth-child(3)").removeAttr('class');
            $("#qualify-wizard :nth-child(4)").attr('class','active');
            $("#qualify-wizard :nth-child(5)").removeAttr('class');
            $("#qualify-wizard :nth-child(6)").removeAttr('class');
            $("#qualify-wizard :nth-child(7)").removeAttr('class');

        });

        $("#qualify_next_four").bind("click",function() {

            $("#qualify-stepone").css("display","none");
            $("#qualify-steptwo").css("display","none");
            $("#qualify-stepthree").css("display","none");
            $("#qualify-stepfour").css("display","none");
            $("#qualify-stepfive").css("display","block");
            $("#qualify-stepsix").css("display","none");
            $("#qualify-stepseven").css("display","none");

            $("#qualify-wizard :nth-child(1)").removeAttr('class');
            $("#qualify-wizard :nth-child(2)").removeAttr('class');
            $("#qualify-wizard :nth-child(3)").removeAttr('class');
            $("#qualify-wizard :nth-child(4)").removeAttr('class');
            $("#qualify-wizard :nth-child(5)").attr('class','active');
            $("#qualify-wizard :nth-child(6)").removeAttr('class');
            $("#qualify-wizard :nth-child(7)").removeAttr('class');

        });

        $("#qualify_next_five").bind("click",function() {

            $("#qualify-stepone").css("display","none");
            $("#qualify-steptwo").css("display","none");
            $("#qualify-stepthree").css("display","none");
            $("#qualify-stepfour").css("display","none");
            $("#qualify-stepfive").css("display","none");
            $("#qualify-stepsix").css("display","block");
            $("#qualify-stepseven").css("display","none");

            $("#qualify-wizard :nth-child(1)").removeAttr('class');
            $("#qualify-wizard :nth-child(2)").removeAttr('class');
            $("#qualify-wizard :nth-child(3)").removeAttr('class');
            $("#qualify-wizard :nth-child(4)").removeAttr('class');
            $("#qualify-wizard :nth-child(5)").removeAttr('class');
            $("#qualify-wizard :nth-child(6)").attr('class','active');
            $("#qualify-wizard :nth-child(7)").removeAttr('class');

        });

        $("#qualify_next_six").bind("click",function() {
            $("#qualify-stepone").css("display","none");
            $("#qualify-steptwo").css("display","none");
            $("#qualify-stepthree").css("display","none");
            $("#qualify-stepfour").css("display","none");
            $("#qualify-stepfive").css("display","none");
            $("#qualify-stepsix").css("display","none");
            $("#qualify-stepseven").css("display","block");

            $("#qualify-wizard :nth-child(1)").removeAttr('class');
            $("#qualify-wizard :nth-child(2)").removeAttr('class');
            $("#qualify-wizard :nth-child(3)").removeAttr('class');
            $("#qualify-wizard :nth-child(4)").removeAttr('class');
            $("#qualify-wizard :nth-child(5)").removeAttr('class');
            $("#qualify-wizard :nth-child(6)").removeAttr('class');
            $("#qualify-wizard :nth-child(7)").attr('class','active');

        });




      $( "#about" ).bind( "click", function() {
             console.log("about");
             jQuery("#home_block").css('display', 'none');
             jQuery("#about_block").css('display', 'block');
             jQuery("#services_block").css('display', 'none');
             jQuery("#pricing_block").css('display', 'none');
             jQuery("#contact_block").css('display', 'none');
             jQuery("#payment_block").css('display', 'none');
             jQuery("#property_block").css('display', 'none')
             jQuery("#protection_block").css('display', 'none')
             jQuery("#agreements_block").css('display', 'none')
             jQuery("#child_custody_block").css('display', 'none')
             jQuery("#child_support_block").css('display', 'none')
             jQuery("#spousal_support_block").css('display', 'none')
             jQuery("#contested_divorce_block").css('display', 'none');    
             jQuery("#uncontested_divorce_block").css('display', 'none');
             jQuery("#search_block").css('display', 'none');
             jQuery("#qualify_block").css('display', 'none');

 
       });

      $( "#home" ).bind( "click", function() {
             jQuery("#home_block").css('display', 'block');
             jQuery("#about_block").css('display', 'none');
             jQuery("#services_block").css('display', 'none');
             jQuery("#pricing_block").css('display', 'none');
             jQuery("#contact_block").css('display', 'none');
             jQuery("#payment_block").css('display', 'none');
             jQuery("#property_block").css('display', 'none')
             jQuery("#protection_block").css('display', 'none')
             jQuery("#agreements_block").css('display', 'none')
             jQuery("#child_custody_block").css('display', 'none')
             jQuery("#child_support_block").css('display', 'none')
             jQuery("#spousal_support_block").css('display', 'none')
             jQuery("#contested_divorce_block").css('display', 'none');
             jQuery("#uncontested_divorce_block").css('display', 'none');
             jQuery("#search_block").css('display', 'none');
             jQuery("#qualify_block").css('display', 'none');


       });

      $( "#pricing" ).bind( "click", function() {
             jQuery("#home_block").css('display', 'none');
             jQuery("#about_block").css('display', 'none');
             jQuery("#services_block").css('display', 'none');
             jQuery("#pricing_block").css('display', 'block');
             jQuery("#contact_block").css('display', 'none');
             jQuery("#payment_block").css('display', 'none');
             jQuery("#property_block").css('display', 'none')
             jQuery("#protection_block").css('display', 'none')
             jQuery("#agreements_block").css('display', 'none')
             jQuery("#child_custody_block").css('display', 'none')
             jQuery("#child_support_block").css('display', 'none')
             jQuery("#spousal_support_block").css('display', 'none')
             jQuery("#contested_divorce_block").css('display', 'none');
             jQuery("#uncontested_divorce_block").css('display', 'none');
             jQuery("#search_block").css('display', 'none');
             jQuery("#qualify_block").css('display', 'none');


      });

      $( "#services" ).bind( "click", function() {
             jQuery("#home_block").css('display', 'none');
             jQuery("#about_block").css('display', 'none');
             jQuery("#services_block").css('display', 'block');
             jQuery("#pricing_block").css('display', 'none');
             jQuery("#contact_block").css('display', 'none');
             jQuery("#payment_block").css('display', 'none');
             jQuery("#property_block").css('display', 'none')
             jQuery("#protection_block").css('display', 'none')
             jQuery("#agreements_block").css('display', 'none')
             jQuery("#child_custody_block").css('display', 'none')
             jQuery("#child_support_block").css('display', 'none')
             jQuery("#spousal_support_block").css('display', 'none')
             jQuery("#contested_divorce_block").css('display', 'none');
             jQuery("#uncontested_divorce_block").css('display', 'none');
             jQuery("#search_block").css('display', 'none');
             jQuery("#qualify_block").css('display', 'none');


      });
 

     $( "#contact" ).bind( "click", function() {
             jQuery("#home_block").css('display', 'none');
             jQuery("#about_block").css('display', 'none');
             jQuery("#services_block").css('display', 'none');
             jQuery("#pricing_block").css('display', 'none');
             jQuery("#contact_block").css('display', 'block');
             jQuery("#payment_block").css('display', 'none');
             jQuery("#property_block").css('display', 'none')
             jQuery("#protection_block").css('display', 'none')
             jQuery("#agreements_block").css('display', 'none')
             jQuery("#child_custody_block").css('display', 'none')
             jQuery("#child_support_block").css('display', 'none')
             jQuery("#spousal_support_block").css('display', 'none')
             jQuery("#contested_divorce_block").css('display', 'none');
             jQuery("#uncontested_divorce_block").css('display', 'none');
             jQuery("#search_block").css('display', 'none');
             jQuery("#qualify_block").css('display', 'none');


       });

      $( "#payment" ).bind( "click", function() {
             jQuery("#home_block").css('display', 'none');
             jQuery("#about_block").css('display', 'none');
             jQuery("#services_block").css('display', 'none');
             jQuery("#pricing_block").css('display', 'none');
             jQuery("#contact_block").css('display', 'none');
             jQuery("#payment_block").css('display', 'block');
             jQuery("#property_block").css('display', 'none')
             jQuery("#protection_block").css('display', 'none')
             jQuery("#agreements_block").css('display', 'none')
             jQuery("#child_custody_block").css('display', 'none')
             jQuery("#child_support_block").css('display', 'none')
             jQuery("#spousal_support_block").css('display', 'none')
             jQuery("#contested_divorce_block").css('display', 'none');
             jQuery("#uncontested_divorce_block").css('display', 'none');
             jQuery("#search_block").css('display', 'none');
             jQuery("#qualify_block").css('display', 'none');

 
     });

      $( "#spousal_support" ).bind( "click", function() {
             jQuery("#home_block").css('display', 'none');
             jQuery("#about_block").css('display', 'none');
             jQuery("#services_block").css('display', 'none');
             jQuery("#pricing_block").css('display', 'none');
             jQuery("#contact_block").css('display', 'none');
             jQuery("#payment_block").css('display', 'none');
             jQuery("#property_block").css('display', 'none')
             jQuery("#protection_block").css('display', 'none')
             jQuery("#agreements_block").css('display', 'none')
             jQuery("#child_custody_block").css('display', 'none')
             jQuery("#child_support_block").css('display', 'none')
             jQuery("#spousal_support_block").css('display', 'block')
             jQuery("#contested_divorce_block").css('display', 'none');
             jQuery("#uncontested_divorce_block").css('display', 'none');
             jQuery("#search_block").css('display', 'none');
             jQuery("#qualify_block").css('display', 'none');


      });


      $( "#child_support" ).bind( "click", function() {
             jQuery("#home_block").css('display', 'none');
             jQuery("#about_block").css('display', 'none');
             jQuery("#services_block").css('display', 'none');
             jQuery("#pricing_block").css('display', 'none');
             jQuery("#contact_block").css('display', 'none');
             jQuery("#payment_block").css('display', 'none');
             jQuery("#property_block").css('display', 'none')
             jQuery("#protection_block").css('display', 'none')
             jQuery("#agreements_block").css('display', 'none')
             jQuery("#child_custody_block").css('display', 'none')
             jQuery("#child_support_block").css('display', 'block')
             jQuery("#spousal_support_block").css('display', 'none')
             jQuery("#contested_divorce_block").css('display', 'none');
             jQuery("#uncontested_divorce_block").css('display', 'none');
             jQuery("#search_block").css('display', 'none');
             jQuery("#qualify_block").css('display', 'none');


      });


      $( "#child_custody" ).bind( "click", function() {
             jQuery("#home_block").css('display', 'none');
             jQuery("#about_block").css('display', 'none');
             jQuery("#services_block").css('display', 'none');
             jQuery("#pricing_block").css('display', 'none');
             jQuery("#contact_block").css('display', 'none');
             jQuery("#payment_block").css('display', 'none');
             jQuery("#property_block").css('display', 'none')
             jQuery("#protection_block").css('display', 'none')
             jQuery("#agreements_block").css('display', 'none')
             jQuery("#child_custody_block").css('display', 'block')
             jQuery("#child_support_block").css('display', 'none')
             jQuery("#spousal_support_block").css('display', 'none')
             jQuery("#contested_divorce_block").css('display', 'none');
             jQuery("#uncontested_divorce_block").css('display', 'none');
             jQuery("#search_block").css('display', 'none');
             jQuery("#qualify_block").css('display', 'none');


      });


      $( "#agreements" ).bind( "click", function() {
             jQuery("#home_block").css('display', 'none');
             jQuery("#about_block").css('display', 'none');
             jQuery("#services_block").css('display', 'none');
             jQuery("#pricing_block").css('display', 'none');
             jQuery("#contact_block").css('display', 'none');
             jQuery("#payment_block").css('display', 'none');
             jQuery("#property_block").css('display', 'none')
             jQuery("#protection_block").css('display', 'none')
             jQuery("#agreements_block").css('display', 'block')
             jQuery("#child_custody_block").css('display', 'none')
             jQuery("#child_support_block").css('display', 'none')
             jQuery("#spousal_support_block").css('display', 'none')
             jQuery("#contested_divorce_block").css('display', 'none');
             jQuery("#uncontested_divorce_block").css('display', 'none');
             jQuery("#search_block").css('display', 'none');
             jQuery("#qualify_block").css('display', 'none');


      });


      $( "#protection" ).bind( "click", function() {
             jQuery("#home_block").css('display', 'none');
             jQuery("#about_block").css('display', 'none');
             jQuery("#services_block").css('display', 'none');
             jQuery("#pricing_block").css('display', 'none');
             jQuery("#contact_block").css('display', 'none');
             jQuery("#payment_block").css('display', 'none');
             jQuery("#property_block").css('display', 'none')
             jQuery("#protection_block").css('display', 'block')
             jQuery("#agreements_block").css('display', 'none')
             jQuery("#child_custody_block").css('display', 'none')
             jQuery("#child_support_block").css('display', 'none')
             jQuery("#spousal_support_block").css('display', 'none')
             jQuery("#contested_divorce_block").css('display', 'none');
             jQuery("#uncontested_divorce_block").css('display', 'none');
             jQuery("#search_block").css('display', 'none');
             jQuery("#qualify_block").css('display', 'none');


      });


      $( "#property" ).bind( "click", function() {
             jQuery("#home_block").css('display', 'none');
             jQuery("#about_block").css('display', 'none');
             jQuery("#services_block").css('display', 'none');
             jQuery("#pricing_block").css('display', 'none');
             jQuery("#contact_block").css('display', 'none');
             jQuery("#payment_block").css('display', 'none');
             jQuery("#property_block").css('display', 'block')
             jQuery("#protection_block").css('display', 'none')
             jQuery("#agreements_block").css('display', 'none')
             jQuery("#child_custody_block").css('display', 'none')
             jQuery("#child_support_block").css('display', 'none')
             jQuery("#spousal_support_block").css('display', 'none')
             jQuery("#contested_divorce_block").css('display', 'none');
             jQuery("#uncontested_divorce_block").css('display', 'none');
             jQuery("#search_block").css('display', 'none');
             jQuery("#qualify_block").css('display', 'none');


      });


      $( "#contested" ).bind( "click", function() {
             jQuery("#home_block").css('display', 'none');
             jQuery("#about_block").css('display', 'none');
             jQuery("#services_block").css('display', 'none');
             jQuery("#pricing_block").css('display', 'none');
             jQuery("#contact_block").css('display', 'none');
             jQuery("#payment_block").css('display', 'none');
             jQuery("#property_block").css('display', 'none')
             jQuery("#protection_block").css('display', 'none')
             jQuery("#agreements_block").css('display', 'none')
             jQuery("#child_custody_block").css('display', 'none')
             jQuery("#child_support_block").css('display', 'none')
             jQuery("#spousal_support_block").css('display', 'none')
             jQuery("#contested_divorce_block").css('display', 'block');
             jQuery("#uncontested_divorce_block").css('display', 'none');
             jQuery("#search_block").css('display', 'none');
             jQuery("#qualify_block").css('display', 'none');
 
      });

      $( "#uncontested" ).bind( "click", function() {
             jQuery("#home_block").css('display', 'none');
             jQuery("#about_block").css('display', 'none');
             jQuery("#services_block").css('display', 'none');
             jQuery("#pricing_block").css('display', 'none');
             jQuery("#contact_block").css('display', 'none');
             jQuery("#payment_block").css('display', 'none');
             jQuery("#property_block").css('display', 'none')
             jQuery("#protection_block").css('display', 'none')
             jQuery("#agreements_block").css('display', 'none')
             jQuery("#child_custody_block").css('display', 'none')
             jQuery("#child_support_block").css('display', 'none')
             jQuery("#spousal_support_block").css('display', 'none')
             jQuery("#contested_divorce_block").css('display', 'none');
             jQuery("#uncontested_divorce_block").css('display', 'block');
             jQuery("#search_block").css('display', 'none');
             jQuery("#qualify_block").css('display', 'none');

      });

        $('input').keydown( function(e) {
            var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
   
            if(key == 13) {
                e.preventDefault();
                is_submit_clicked = true;
                search();
            }
        });

        $(".icon").click(function() {
	    var icon = $(this),
            input = icon.parent().find("#search"),
	    submit = icon.parent().find(".submit"),
            is_submit_clicked = false;
	
    	// Animate the input field
	    input.animate({
	   	    "width": "165px",
                    "padding": "10px",
            	    "opacity": 1
            	}, 300, function() {
		input.focus();
	    });
	
   	    submit.mousedown(function() {
	          is_submit_clicked = true;
                  search();
    	    });
	
        	// Now, we need to hide the icon too
   	    icon.fadeOut(300);
	
           	// Looks great, but what about hiding the input when it loses focus and doesnt contain any value? Lets do that too
            input.blur(function() {
	        if (!input.val() && !is_submit_clicked) {
	            input.animate({
				"width": "0",
				"padding": "0",
				"opacity": 0
        	    }, 200);
			
			// Get the icon back
		    icon.fadeIn(200);
		}
	    }); // input.blur ends
        }); // icon click ends

        var areas = document.querySelectorAll('.expandingArea');

        var l = areas.length;while (l--) {
            makeExpandingArea(areas[l]);
        }

          var box = null;
 
          var service = $("#page-service").val();
          $('#comments-section').css('display','none');
   
          $('.comments-link').bind('click',handleComments);


          $('#qualify_next_six').bind('click',processPaymentQualify);

          if  (service=='contact')  {
               on_mobile_contact();
          }


          if  (service=='contact')  {
               on_mobile_contact();
          }

          if (service  == "uncontested-divorce") {
               on_mobile_uncontested();
          }

          if (service  == "agreements") {
               on_mobile_agreements();
          }

          if (service  == "property")  {
               on_mobile_property();
          }

          if (service  == "protection")  {
               on_mobile_protection();
          }

          if (service  == "child-support") {
               on_mobile_child_support();
          }

          if (service  == "adoption") {
               on_mobile_adoption();
          }

          if (service  == "about") {
               on_mobile_about();
          }

          if (service  == "domestic-violence") {
              on_mobile_domestic_violence();
          }

          if (service  == "alimony") {
              on_mobile_spousal_support();
          }

          if (service  == "blog") {
              on_mobile_spousal_support();
          }

          if (service  == "qualify") {
              on_mobile_qualify(0);
          }

          if (service  == "payment") {
              on_mobile_payment();
          }

          if (service  == "pricing") {
              on_mobile_pricing();
          }

          if (service  == "child-custody")  {
              on_mobile_search_service(4);
          }
          if (service  == "spousal-support") {
              on_mobile_spousal_support();
          }

          if (service  == "mediation") {
              on_mobile_mediation();
          }

          if (service  == "consultation") {
              on_mobile_free_consultation();
          }

          if (service  == "contested-divorce") {
              on_mobile_contested();
          }


          $( "#newsform" ).submit(function( event ) {
               event.preventDefault();
               subscribe();
          });

          $(function () {
               $('#newsletter-form').submit(function () {

                     if (validEmail($('#newsletter-email').val())) {
                           $.ajax({
                                  method: "POST",
                                  url: "https://divorcesus.com/subscribe/",
                                  data: {'email':$('#newsletter-email').val()}
                           }).done(function( msg ) {
                                  $('#newsletter-success').css('display','block').fadeOut(1200);
                           });
                     }

               });
          });


          if($('#page-service').val()==='blog') {
                on_mobile_blog();
          } else if($('#page-service').val()=='services') {
                on_mobile_services();
          } else if($('#page-service').val()=='payments') {
                on_mobile_payments();
          } else if($('#page-service').val()=='adoption') {
                on_mobile_adoption();
          } else if($('#page-service').val()=='agreements') {
                on_mobile_agreements();
          } else if($('#page-service').val()=='contested') {
                on_mobile_contested();
          } else if($('#page-service').val()=='uncontested') {
                on_mobile_uncontested();
          } else if($('#page-service').val()=='childcustody') {
                on_mobile_child_custody();
          } else if($('#page-service').val()=='childsupport') {
                on_mobile_child_support();
          } else if($('#page-service').val()=='domesticviolence') {
                on_mobile_domestic_violence();
          } else if($('#page-service').val()=='mediation') {
                on_mobile_mediation();
          } else if($('#page-service').val()=='consultation') {
                on_mobile_free_consultation();
          } else if($('#page-service').val()=='property') {
                on_mobile_property();
          } else if($('#page-service').val()=='protection') {
                on_mobile_protection();
          } else if($('#page-service').val()=='spousalsupport') {
                on_mobile_spousal_support();
          }  else if($('#page-service').val()=='faq' || $('#page-service').val()=='frequentlyasked') {
                on_mobile_faq();
          }

          $('#add-new-post').click(function(e) {
              openmenu('newpost');
          });
    }); // ready ends




