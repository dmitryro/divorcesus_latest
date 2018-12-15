
var counter = 0;
var first_name = '';
var fullname = '';
var email = '';
var modal_submit_register = 'Register';  
var modal_submit_password = 'Reset Password';  
var modal_submit_login    = 'Login';
 // register modal component
Vue.config.devtools = true;

/*
Vue.transition('fade', {
    enterClass: 'fadeIn',
    leaveClass: 'fadeOut'
});

Vue.transition('fadeWithMove', {
    enterClass: 'fadeInDown',
    leaveClass: 'fadeOutUp'
});
*/

Vue.component('modal', {
  template: '#modal-template-signin',
  props: {
    show: {
      type: Boolean,
      required: true,
      twoWay: true
    }
  },
  methods: {
    close: function () {
        this.show = false;
    }
  },
  ready: function () {
    document.addEventListener("keydown", (e) => {
      if (this.show && e.keyCode == 27) {
        this.close();
      }
    });
  }

})



var qvm = new Vue({
  el: '#qualify-stepone',
  data: {
    state:'',
    is_spouse_location_known:'',
    are_there_children: '',
    does_spouse_agree:'',
    is_military:'',
  },
  methods: {
    submitone: function (event) {
              
               this.$set('is_spouse_location_known',$('#is_spouse_location_known').val());
               this.$set('are_there_children',$('#are_there_children').val());
               this.$set('does_spouse_agree',$('#does_spouse_agree').val());
               this.$set('is_military',$('#is_military').val());
               this.$set('state',$('#state-selected').val());
               $("#final-qualify-state").html("<h4><strong>"+$('#state-selected').val()+"</strong></h4>");

               if(!$('#is_spouse_location_known').is(":checked") || !$('#does_spouse_agree').is(":checked")) {
                      $('#final_does_qualify').html("<h4><strong>Congratulations! You qualify to use our contested divorce package!</strong></h4>");
               }          

               else {
                      $('#final_does_qualify').html("<h4><strong>Congratulations! You qualify to use our uncontested divorce package!</strong></h4>");
               }


    },
    submittwo: function (event) {
    },

    submitthree: function (event) {
    },

    submitfour: function (event) {
    },

    successCallback: function(event) {
            alert("SUCCESS");
    },
    errorCallback: function(event) {
            alert("ERROR");
    },
    validConfirm: function(event) {
           alert("VALID");
    }

  }
})


var qvm2 = new Vue({
  el: '#qualify-steptwo',
  data: {
    state:'',
    does_qualify:'',
    agree_to_start: '',
    is_spouse_location_known:'',
    are_there_children: '',
    does_spouse_agree:'',
    is_military:'',
  },
  methods: {
    submitone: function (event) {
           this.$set('does_qualify','NO');
           this.$set('state',$('#state-selected').val());
    },
    submittwo: function (event) {
    },

    submitthree: function (event) {
    },

    submitfour: function (event) {
         alert('hi hi');
    },

    successCallback: function(event) {
            alert("SUCCESS");
    },
    errorCallback: function(event) {
            alert("ERROR");
    },
    validConfirm: function(event) {
           alert("VALID");
    }
  },
  ready:function() {
      this.$set('does_qualify','NO');
      this.$set('state',$('#state-selected').val());

  }

})


var vm = new Vue({
  el: '#stepone',

  data: {
    email:'',
    phone:'',
    fullname: '',
  },

  methods: {

    submitone: function (event) {
               this.$set('phone',$('#phone').val());
               this.$set('email',$('#email').val());
               this.$set('fullname',$('#fullname').val());               
    },

    submittwo: function (event) {

    },

    submitthree: function (event) {
    },

    submitfour: function (event) {
        alert('hihihi');
    },

    successCallback: function(event) {
            alert("SUCCESS");
    },
    errorCallback: function(event) {
            alert("ERROR");
    },
    validConfirm: function(event) {
           alert("VALID");
    },
    ready:function() {
      this.$set('phone',$('#phone').val());
      this.$set('email',$('#email').val());
      this.$set('fullname',$('#fullname').val());
    }

    
  }
})


var vm2 = new Vue({
  el: '#steptwo',
  data: {
    email:'',
    phone:'',
    fullname: '',
    cardtype:'',
    cardnumber:'',
    expirationmonth:'',
    expirationyear:'',
  },
  methods: {
    submitone: function (event) {
    },
    submittwo: function (event) {
           this.$set('phone',vm.phone);
           this.$set('fullname',vm.fullname);
           vm3.$set('email',this.email);
           vm3.$set('fullname',this.fullname);
           vm3.$set('cardtype',this.cardtype);
           vm3.$set('cardnumber',this.cardnumber);
           vm3.$set('expirationmonth',this.expirationmonth);
           vm3.$set('expirationyear',this.expirationyear);
    },

    submitthree: function (event) {
    },

    submitfour: function (event) {
         alert('hi ho hi hi');
    },

    successCallback: function(event) {
            alert("SUCCESS");
    },
    errorCallback: function(event) {
            alert("ERROR");
    },
    validConfirm: function(event) {
           alert("VALID");
    }
  },
  ready:function() {
      this.$set('phone',vm.phone);  
      this.$set('email',$('#email').val());
      this.$set('fullname',$('#fullname').val());
    
  }
  
})



var vm3 = new Vue({
  el: '#stepthree',
  data: {
    email:'',
    fullname: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip:  '',
    phone: '2222',
    cardtype: '',
    cardnumber: '',
    expirationmonth: '',
    expirationyear: '',
  },
  methods: {
    submitone: function (event) {
    },
    submittwo: function (event) {
    },

    submitthree: function (event) {
               vm4.$set('email',this.email);
               vm4.$set('fullname',this.fullname);
               vm4.$set('cardtype',this.cardtype);
               vm4.$set('cardnumber',this.cardnumber);
               vm4.$set('expirationmonth',this.expirationmonth);
               vm4.$set('expirationyear',this.expirationyear);
               vm4.$set('address1',this.address1);
               vm4.$set('address2',this.address2); 
               vm4.$set('city',this.city);
               vm4.$set('state',this.state);
               vm4.$set('zip',this.zip);
               vm4.$set('phone',this.phone);  

               $("#phone").attr("value",this.phone.toString());
               $("#city").attr("value",this.city.toString());  
               $("#state").attr("value",this.state.toString());
               $("#zip").attr("value",this.zip.toString());
               $("#month").attr("value",this.expirationmonth.toString());
               $("#year").attr("value",this.expirationyear.toString());
               $("#email").attr("value",this.email.toString());
               $("#fullname").attr("value",this.fullname.toString());
               $("#cardtype").attr("value",this.cardtype.toString());
               $("#cardnumber").attr("value",this.cardnumber.toString());
               $("#address1").attr("value",this.address1.toString());  
               $("#address2").attr("value",this.address2.toString());

               $("#final_email").html("<p><strong>Email: "+this.email.toString()+"</strong></p>");
               $("#final_phone").html("<p><strong>Phone: "+this.phone.toString()+"</strong></p>");
               $("#final_fullname").html("<p><strong>Full Name: "+this.fullname.toString()+"</strong></p>");   
               $("#final_cardtype").html("<p><strong>Card Type: "+this.cardtype.toString()+"</strong></p>");  
               $("#final_cardnumber").html("<p><strong>Card Number: "+this.cardnumber.toString()+"</strong></p>");   
               $("#final_expirationmonth").html("<p><strong>Expiration Month: "+this.expirationmonth.toString()+"</strong></p>");
               $("#final_expirationyear").html("<p><strong>Expiration Year: "+this.expirationyear.toString()+"</strong></p>");   
               $("#final_address1").html("<p><strong>Address 1: "+this.address1.toString()+"</strong></p>");   
               $("#final_address2").html("<p><strong>Address 2: "+this.address2.toString()+"</strong></p>"); 
               $("#final_city").html("<p><strong>City: "+this.city.toString()+"</strong></p>");
               $("#final_state").html("<p><strong>State: "+this.state.toString()+"</strong></p>");  
               $("#final_zip").html("<p><strong>Zip Code: "+this.zip.toString()+"</strong></p>");
    },

    submitfour: function (event) {
           alert('hi hi hi hi hi');
    },

    successCallback: function(event) {
           alert("SUCCESS");
    },
    errorCallback: function(event) {
           alert("ERROR");
    },
    validConfirm: function(event) {
           alert("VALID");
    }

  },
  ready: function() {
           this.phone=vm2.phone;
  }
})


var vm4 = new Vue({
  el: '#stepfour',
  data: {
     
    email:vm3.email,
    fullname: vm3.fullname,
    address1: vm3.address1,
    address2: vm3.address2,
    city: vm3.city,
    state: vm3.state,
    zip:  vm3.zip,
    phone: '393-342-4232',
    cardtype: vm3.cardtype,
    cardnumber: vm3.cardnumber,
    expirationmonth: vm3.expirationmonth,
    expirationyear: vm3.expirationyear,
  },
  // define methods under the `methods` object
  methods: {

    submitone: function (event) {
    },

    submittwo: function (event) {
    },

    submitthree: function (event) {
    },

    submitfour: function (event) {
    },

    successCallback: function(event) {
    },

    errorCallback: function(event) {
    },

    validConfirm: function(event) {
    }

  },
  ready:function() {
  }
})


var vm5 = new Vue({
  el: '#stepfive',
  data: {
    email:vm3.email,
    phone:vm3.phone,
    fullname: vm3.fullname,
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip:  '',
    cardtype: '',
    cardnumber: '',
    expirationmonth: '',
    expirationyear: '',
  },
  // define methods under the `methods` object
  methods: {

    submitone: function (event) {
    },

    submittwo: function (event) {
    },

    submitthree: function (event) {
    },

    submitfour: function (event) {
            alert('hi hi hi hi hi hi');
    },

    submitfive: function (event) {
         alert('pay');
    },
    successCallback: function(event) {
    },

    errorCallback: function(event) {
    },

    validConfirm: function(event) {
    }

  },
  ready:function() {
  }
})


// start app
new Vue({
  el: '#contactus',
  data: {
      email:'',
      phone:'',
      message:'',
      name:'',
  },
  options: {
  },
  methods: {
     successCallback: function() {
            alert("SUCCESS");
     },
     errorCallback: function() {
            alert("ERROR");
     },
     validConfirm: function() {
           alert("VALID");
           $( "div.success" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
     },
     submit: function() {
         $.get('http://divorcesus.com/sendmail?email='+this.email+'&phone='+this.phone+'&message='+this.message+'&name='+this.name, function(data)
                {
                     if (data.message =='success')  {
                          
                           $( "div.success" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );       
                     }
                    this.email='';
                    this.phone='';
                    this.message='';
                    this.name='';
                });
     }
  }
})

new Vue({
  el: '#main_wrapper',
  data: {
    showModal: false,
    showNewCommentModal: false,
    active: null,
  },
  methods: {
    open: function(which, e) {
      // Prevents clicking the link from doing anything
        e.preventDefault();
        modal.active = which;
    },
    close: function (e) {
    },
    submit: function(which, e) {
            e.preventDefault();
    }


  },

  ready: function () {
  }

})


Vue.component('NewCommentModal', {
  template: '#new-comment-modal-template',
  props: ['show'],
  data: function () {
  	return {
      comment: ''
    };
  },
  methods: {
    close: function () {
      this.show = false;
      this.comment = '';
    },
    postComment: function () {
      // Insert AJAX call here...
      this.close();
    }
  }
})

new Vue({
  el: '#app',
  data: {
    showModal: false,
    showNewCommentModal: false,
    active: null,
  },
  methods: {
    open: function(which, e) {
      // Prevents clicking the link from doing anything
        e.preventDefault();
        modal.active = which;
    },
    close: function (e) {
    },
    submit: function(which, e) {
            e.preventDefault();
    }


  },

  ready: function () {
  }

})


   jQuery(document).ready(function() {
           
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

           $('.rd-mobilepanel_title').html("Grinberg & Segal Family Law");

           $('.rd-mobilemenu_ul a').click(function(e) {
                 $(".rd-mobilepanel_toggle").click();
           });

          $(function(){ 
                  $(".ui-chatbox") 
                        .draggable() 
                        .resizable(); 
         
           });

            var counter = 1;

            $("#counter").attr("value",1);
            $("#wizard :nth-child(1)").attr('class','active');
            $("#stepone").css("display","block");
            $("#steptwo").css("display","none");
            $("#stepthree").css("display","none");
            $("#stepfour").css("display","none");
            $("#stepfive").css("display","none");

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
            jQuery("#search_block").css('display', 'none');
            jQuery("#qualify_block").css('display', 'none');
 
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
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }
            ScaleSlider();
            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);

      $("#qualify_progress_stepone").bind("click",function() {
                     counter = 0;
                     $("#qualify-stepone").css("display","block");
                     $("#qualify-steptwo").css("display","none");
                     $("#qualify-stepthree").css("display","none");
                     $("#qualify-stepfour").css("display","none");
                     $("#qualify-stepfive").css("display","none");

                     $("#qualify-wizard :nth-child(1)").attr('class','active');
                     $("#qualify-wizard :nth-child(2)").removeAttr('class');
                     $("#qualify-wizard :nth-child(3)").removeAttr('class');
                     $("#qualify-wizard :nth-child(4)").removeAttr('class');
                     $("#qualify-wizard :nth-child(5)").removeAttr('class');

      });

      $("#qualify_progress_steptwo").bind("click",function() {
                     counter = 1;
                     alert('da kase');
                     $("#qualify-stepone").css("display","none");
                     $("#qualify-steptwo").css("display","block");
                     $("#qualify-stepthree").css("display","none");
                     $("#qualify-stepfour").css("display","none");
                     $("#qualify-stepfive").css("display","none");

                     $("#qualify-wizard :nth-child(1)").removeAttr('class');
                     $("#qualify-wizard :nth-child(2)").attr('class','active');
                     $("#qualify-wizard :nth-child(3)").removeAttr('class');
                     $("#qualify-wizard :nth-child(4)").removeAttr('class');
                     $("#qualify-wizard :nth-child(5)").removeAttr('class');

      });

      $("#qualify_progress_stepthree").bind("click",function() {
                     counter = 2;
                     $("#qualify-stepone").css("display","none");
                     $("#qualify-steptwo").css("display","none");
                     $("#qualify-stepthree").css("display","block");
                     $("#qualify-stepfour").css("display","none");
                     $("#qualify-stepfive").css("display","none");

                     $("#qualify-wizard :nth-child(1)").removeAttr('class');
                     $("#qualify-wizard :nth-child(2)").removeAttr('class');
                     $("#qualify-wizard :nth-child(3)").attr('class','active');
                     $("#qualify-wizard :nth-child(4)").removeAttr('class');
                     $("#qualify-wizard :nth-child(5)").removeAttr('class');

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

                     $("#qualify-wizard :nth-child(1)").removeAttr('class');
                     $("#qualify-wizard :nth-child(2)").attr('class','active');
                     $("#qualify-wizard :nth-child(3)").removeAttr('class');
                     $("#qualify-wizard :nth-child(4)").removeAttr('class');
                     $("#qualify-wizard :nth-child(5)").removeAttr('class');


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


// Ok, the CSS is complete. Now we need to hide the input and make it appear on clicking the icon.
// Now, we have a small problem. Clicking on search butotn doesnt perform any search and the input element hides. To make search button work, we'll use a flag

// Perfect! This thing is cross browser compatible and works even in IE8! You can use the same technique to create some other cool effects like on http://www.apple.com/ and http://developer.android.com/index.html

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

/*

              $.ajax({

                     method: "GET",

                     url: "http://divorcesus.com/searchresults?q="+$("#search").val(),

                     data: {}

              }).done(function( msg ) {
                   
                       var result = '';


                       for(var i=0;i<msg.posts.length;i++) {
                           if (i===0) {
                              result=result+"<div style='width:96%;text-align:left;margin-top:1.2em;'><h4><strong>Posts Found</strong></h4></div>";
                           }
                           result=result+"<div style='width:96%;'>";
                           result=result+"<div style='float:left;width:10%;'>";
                           result=result+'Title:';
                           result=result+"</div>";
                           result=result+"<div style='float:left;width:80%;font-weight:bold;'>";
                           result=result+msg.posts[i].title;
                           result=result+"</div>";
                           result=result+"</div>";

                           result=result+"<div class='clear'></div>";
                           result=result+"</div>"

                           result=result+"<div style='width:96%;'>";
                           result=result+"<div style='float:left;width:10%;'>";
                           result=result+'Link:';
                           result=result+"</div>";
                           result=result+"<div style='float:left;width:80%;font-weight:bold;'>";
                           result=result+msg.posts[i].link;
                           result=result+"</div>";
                           result=result+"</div>";



                           result=result+"<div class='clear'></div>";
                           result=result+"</div>"

                           result=result+"<br/><br/>";
                       }
                        
                       for(var i=0;i<msg.services.length;i++) {
                           if(i==0) {
                              result=result+"<div style='width:96%;text-align:left;margin-top:1.2em;'><h4><strong>Services Found</strong></h4></div>";
                           }

                           result=result+"<div style='width:96%;'>";
                           result=result+"<div style='float:left;width:10%;'>";
                           result=result+'Title:';
                           result=result+"</div>";
                           result=result+"<div style='float:left;width:80%;font-weight:bold;'>";
                           result=result+"<a href='#' onclick='on_mobile_search_service("+msg.services[i].id+");'>";
                           result=result+msg.services[i].title;
                           result=result+"</a>";
                           result=result+"</div>";
                           result=result+"</div>";


                           result=result+"<div class='clear'></div>";
                           result=result+"</div>"

                           result=result+"<div style='width:96%;'>";
                           result=result+"<div style='float:left;width:10%;'>";
                           result=result+'Description:';
                           result=result+"</div>";
                           result=result+"<div style='float:left;width:80%;font-weight:bold;'>";
                           result=result+msg.services[i].description;
                           result=result+"</div>";
                           result=result+"</div>";


                           result=result+"<div class='clear'></div>";
                           result=result+"</div>"

                           result=result+"<div style='width:96%;'>";
                           result=result+"<div style='float:left;width:10%;'>";
                           result=result+'Service:';
                           result=result+"</div>";
                           result=result+"<div style='float:left;width:80%;font-weight:bold;'>";
                           result=result+"<a href='#' onclick='on_mobile_search_service("+msg.services[i].id+");'><img src='"+msg.services[i].service+"' heigt='100' width='100' /></a>";
                           result=result+"</div>";
                           result=result+"</div>";


                           result=result+"<div class='clear'></div>";
                           result=result+"</div>"


                           result=result+"<br/><br/>";
                       }
                     
                       for(var i=0;i<msg.categories.length;i++) {
                           if(i==0) {
                              result=result+"<div style='width:96%;text-align:left;margin-top:1.2em;'><h4><strong>Categories Found</strong></h4></div>";
                           }

                           result=result+"<div style='width:96%;'>";
                           result=result+"<div style='float:left;width:10%;'>";
                           result=result+'Name:';
                           result=result+"</div>";
                           result=result+"<div style='float:left;width:80%;font-weight:bold;'>";
                           result=result+msg.categories[i].name;
                           result=result+"</div>";
                           result=result+"</div>";


                           result=result+"<div class='clear'></div>";
                           result=result+"</div>"

                           result=result+"<div style='width:96%;'>";
                           result=result+"<div style='float:left;width:10%;'>";
                           result=result+'Code:';
                           result=result+"</div>";
                           result=result+"<div style='float:left;width:80%;font-weight:bold;'>";
                           result=result+msg.categories[i].code;
                           result=result+"</div>";
                           result=result+"</div>";


                           result=result+"<div class='clear'></div>";
                           result=result+"</div>"

                           result=result+"<br/><br/>";
                       }
 
                       on_mobile_search();
                       $('#search-results').html(result);
                       return false;       

              }); 
*/

	});
	
	// Now, we need to hide the icon too
	icon.fadeOut(300);
	
	// Looks great, but what about hiding the input when it loses focus and doesnt contain any value? Lets do that too
	input.blur(function() {
		if(!input.val() && !is_submit_clicked) {
			input.animate({
				"width": "0",
				"padding": "0",
				"opacity": 0
			}, 200);
			
			// Get the icon back
			icon.fadeIn(200);
		};
	});
});



  });


  function makeExpandingArea(container) {
     var area = container.querySelector('textarea');
     var span = container.querySelector('span');

     if (area.addEventListener) {
       area.addEventListener('input', function() {
       span.textContent = area.value;
      }, false);
     span.textContent = area.value;
    } else if (area.attachEvent) {
   // IE8 compatibility
   area.attachEvent('onpropertychange', function() {
     span.innerText = area.value;
   });
   span.innerText = area.value;
 }
// Enable extra CSS
container.className += "active";
     }var areas = document.querySelectorAll('.expandingArea');
     var l = areas.length;while (l--) {
     makeExpandingArea(areas[l]);
  }
  function on_mobile_showcomments(){
      return false;         
  }

  function on_mobile_search() {
      document.getElementById('search_block').style.display='block';     
      document.getElementById('home_block').style.display='none';
      document.getElementById('about_block').style.display='none';
      document.getElementById('services_block').style.display='none';
      document.getElementById('pricing_block').style.display='none';
      document.getElementById('contact_block').style.display='none';
      document.getElementById('payment_block').style.display='none';
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
      document.getElementById('qualify_block').style.display='none';
      jQuery('body').scrollTop(0);
      return false;
  }

  function on_mobile_about() {
      document.getElementById('search_block').style.display='none';
      document.getElementById('home_block').style.display='none';
      document.getElementById('about_block').style.display='block';
      document.getElementById('services_block').style.display='none';
      document.getElementById('pricing_block').style.display='none';
      document.getElementById('contact_block').style.display='none';
      document.getElementById('payment_block').style.display='none';
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
      document.getElementById('qualify_block').style.display='none';
      
      jQuery('body').scrollTop(0);
      return false;
  }

  function on_mobile_home() {
      document.getElementById('search_block').style.display='none';
      document.getElementById('home_block').style.display='block';
      document.getElementById('about_block').style.display='none';
      document.getElementById('services_block').style.display='none';
      document.getElementById('pricing_block').style.display='none';
      document.getElementById('contact_block').style.display='none';
      document.getElementById('payment_block').style.display='none';
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
      document.getElementById('qualify_block').style.display='none';
      jQuery('body').scrollTop(0);
      return false;
  }

  function on_mobile_services() {
      document.getElementById('search_block').style.display='none';
      document.getElementById('home_block').style.display='none';
      document.getElementById('about_block').style.display='none';
      document.getElementById('services_block').style.display='none';
      document.getElementById('pricing_block').style.display='none';
      document.getElementById('contact_block').style.display='none';
      document.getElementById('payment_block').style.display='none';
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
      document.getElementById('services_block').style.display='block';
      document.getElementById('free_consultation_block').style.display='none';
      document.getElementById('blog_block').style.display='none';
      document.getElementById('faq_block').style.display='none';
      document.getElementById('qualify_block').style.display='none';
      jQuery('body').scrollTop(0);
      return false;
  }

  function on_mobile_contact() {
      document.getElementById('search_block').style.display='none';
      document.getElementById('home_block').style.display='none';
      document.getElementById('about_block').style.display='none';
      document.getElementById('services_block').style.display='none';
      document.getElementById('pricing_block').style.display='none';
      document.getElementById('contact_block').style.display='block';
      document.getElementById('payment_block').style.display='none';
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
      document.getElementById('qualify_block').style.display='none';
      jQuery('body').scrollTop(0);
      return false;  
  }

  function on_mobile_payment() {
      document.getElementById('home_block').style.display='none';
      document.getElementById('about_block').style.display='none';
      document.getElementById('services_block').style.display='none';
      document.getElementById('pricing_block').style.display='none';
      document.getElementById('contact_block').style.display='none';
      document.getElementById('payment_block').style.display='block';
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
      document.getElementById('qualify_block').style.display='none';
      document.getElementById('search_block').style.display='none';
      jQuery('body').scrollTop(0);
      return false;
  }

  function on_mobile_pricing() {
      document.getElementById('search_block').style.display='none';
      document.getElementById('home_block').style.display='none';
      document.getElementById('about_block').style.display='none';
      document.getElementById('services_block').style.display='none';
      document.getElementById('pricing_block').style.display='block';
      document.getElementById('contact_block').style.display='none';
      document.getElementById('payment_block').style.display='none';
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
      document.getElementById('qualify_block').style.display='none';
      jQuery('body').scrollTop(0);
      return false;
  }

  function on_mobile_contested() {
      document.getElementById('search_block').style.display='none';
      document.getElementById('home_block').style.display='none';
      document.getElementById('about_block').style.display='none';
      document.getElementById('services_block').style.display='none';
      document.getElementById('pricing_block').style.display='none';
      document.getElementById('contact_block').style.display='none';
      document.getElementById('payment_block').style.display='none';
      document.getElementById('property_block').style.display='none';
      document.getElementById('protection_block').style.display='none';
      document.getElementById('agreements_block').style.display='none';
      document.getElementById('child_custody_block').style.display='none';
      document.getElementById('child_support_block').style.display='none';
      document.getElementById('spousal_support_block').style.display='none';
      document.getElementById('contested_divorce_block').style.display='block';
      document.getElementById('uncontested_divorce_block').style.display='none';
      document.getElementById('domestic_violence_block').style.display='none';
      document.getElementById('mediation_block').style.display='none';
      document.getElementById('adoption_block').style.display='none';
      document.getElementById('free_consultation_block').style.display='none';
      document.getElementById('blog_block').style.display='none';
      document.getElementById('faq_block').style.display='none';
      document.getElementById('qualify_block').style.display='none';
      jQuery('body').scrollTop(0);
      return false;
  }

  function on_mobile_uncontested() {
      document.getElementById('search_block').style.display='none';
      document.getElementById('home_block').style.display='none';
      document.getElementById('about_block').style.display='none';
      document.getElementById('services_block').style.display='none';
      document.getElementById('pricing_block').style.display='none';
      document.getElementById('contact_block').style.display='none';
      document.getElementById('payment_block').style.display='none';
      document.getElementById('property_block').style.display='none';  
      document.getElementById('protection_block').style.display='none';
      document.getElementById('agreements_block').style.display='none';
      document.getElementById('child_custody_block').style.display='none';
      document.getElementById('child_support_block').style.display='none';
      document.getElementById('spousal_support_block').style.display='none';
      document.getElementById('contested_divorce_block').style.display='none';
      document.getElementById('uncontested_divorce_block').style.display='block';
      document.getElementById('domestic_violence_block').style.display='none';
      document.getElementById('mediation_block').style.display='none';
      document.getElementById('adoption_block').style.display='none';
      document.getElementById('free_consultation_block').style.display='none';
      document.getElementById('blog_block').style.display='none';
      document.getElementById('faq_block').style.display='none';
      document.getElementById('qualify_block').style.display='none';
      jQuery('body').scrollTop(0);
      return false;
  }

  function on_mobile_property() {
      document.getElementById('search_block').style.display='none';
      document.getElementById('home_block').style.display='none';
      document.getElementById('about_block').style.display='none';
      document.getElementById('services_block').style.display='none';
      document.getElementById('pricing_block').style.display='none';
      document.getElementById('contact_block').style.display='none';
      document.getElementById('payment_block').style.display='none';
      document.getElementById('property_block').style.display='block';
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
      document.getElementById('qualify_block').style.display='none';
      jQuery('body').scrollTop(0);
      return false;
  }

  function on_mobile_protection() {
      document.getElementById('search_block').style.display='none';
      document.getElementById('home_block').style.display='none';
      document.getElementById('about_block').style.display='none';
      document.getElementById('services_block').style.display='none';
      document.getElementById('pricing_block').style.display='none';
      document.getElementById('contact_block').style.display='none';
      document.getElementById('payment_block').style.display='none';
      document.getElementById('property_block').style.display='none';
      document.getElementById('protection_block').style.display='block';
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
      document.getElementById('qualify_block').style.display='none';
      jQuery('body').scrollTop(0);
      return false;
  }

  function on_mobile_agreements() {
      document.getElementById('search_block').style.display='none';
      document.getElementById('home_block').style.display='none';
      document.getElementById('about_block').style.display='none';
      document.getElementById('services_block').style.display='none';
      document.getElementById('pricing_block').style.display='none';
      document.getElementById('contact_block').style.display='none';
      document.getElementById('payment_block').style.display='none';
      document.getElementById('property_block').style.display='none';
      document.getElementById('protection_block').style.display='none';
      document.getElementById('agreements_block').style.display='block';
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
      document.getElementById('qualify_block').style.display='none';
      jQuery('body').scrollTop(0);
      return false;
  }

  function on_mobile_child_custody() {
      document.getElementById('search_block').style.display='none';
      document.getElementById('home_block').style.display='none';
      document.getElementById('about_block').style.display='none';
      document.getElementById('services_block').style.display='none';
      document.getElementById('pricing_block').style.display='none';
      document.getElementById('contact_block').style.display='none';
      document.getElementById('payment_block').style.display='none';
      document.getElementById('property_block').style.display='none';
      document.getElementById('protection_block').style.display='none';
      document.getElementById('agreements_block').style.display='none';
      document.getElementById('child_custody_block').style.display='block';
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
      document.getElementById('qualify_block').style.display='none';
      jQuery('body').scrollTop(0);
      return false;
  }

  function on_mobile_child_support() {
      document.getElementById('search_block').style.display='none';
      document.getElementById('home_block').style.display='none';
      document.getElementById('about_block').style.display='none';
      document.getElementById('services_block').style.display='none';
      document.getElementById('pricing_block').style.display='none';
      document.getElementById('contact_block').style.display='none';
      document.getElementById('payment_block').style.display='none';
      document.getElementById('property_block').style.display='none';
      document.getElementById('protection_block').style.display='none';
      document.getElementById('agreements_block').style.display='none';
      document.getElementById('child_custody_block').style.display='none';
      document.getElementById('child_support_block').style.display='block';
      document.getElementById('spousal_support_block').style.display='none';
      document.getElementById('contested_divorce_block').style.display='none';
      document.getElementById('uncontested_divorce_block').style.display='none';
      document.getElementById('domestic_violence_block').style.display='none';
      document.getElementById('mediation_block').style.display='none';
      document.getElementById('adoption_block').style.display='none';
      document.getElementById('free_consultation_block').style.display='none';
      document.getElementById('blog_block').style.display='none';
      document.getElementById('faq_block').style.display='none';
      document.getElementById('qualify_block').style.display='none';
      jQuery('body').scrollTop(0);
      return false;
  }

  function on_mobile_spousal_support() {
      document.getElementById('search_block').style.display='none';
      document.getElementById('home_block').style.display='none';
      document.getElementById('about_block').style.display='none';
      document.getElementById('services_block').style.display='none';
      document.getElementById('pricing_block').style.display='none';
      document.getElementById('contact_block').style.display='none';
      document.getElementById('payment_block').style.display='none';
      document.getElementById('property_block').style.display='none';
      document.getElementById('protection_block').style.display='none';
      document.getElementById('agreements_block').style.display='none';
      document.getElementById('child_custody_block').style.display='none';
      document.getElementById('child_support_block').style.display='none';
      document.getElementById('spousal_support_block').style.display='block';
      document.getElementById('contested_divorce_block').style.display='none';
      document.getElementById('uncontested_divorce_block').style.display='none';
      document.getElementById('domestic_violence_block').style.display='none';
      document.getElementById('mediation_block').style.display='none';
      document.getElementById('adoption_block').style.display='none';
      document.getElementById('free_consultation_block').style.display='none';
      document.getElementById('blog_block').style.display='none';
      document.getElementById('faq_block').style.display='none';
      document.getElementById('qualify_block').style.display='none';
      jQuery('body').scrollTop(0);
      return false;
  }

  function on_mobile_domestic_violence() {
      document.getElementById('search_block').style.display='none';
      document.getElementById('home_block').style.display='none';
      document.getElementById('about_block').style.display='none';
      document.getElementById('services_block').style.display='none';
      document.getElementById('pricing_block').style.display='none';
      document.getElementById('contact_block').style.display='none';
      document.getElementById('payment_block').style.display='none';
      document.getElementById('property_block').style.display='none';
      document.getElementById('protection_block').style.display='none';
      document.getElementById('agreements_block').style.display='none';
      document.getElementById('child_custody_block').style.display='none';
      document.getElementById('child_support_block').style.display='none';
      document.getElementById('spousal_support_block').style.display='none';
      document.getElementById('contested_divorce_block').style.display='none';
      document.getElementById('uncontested_divorce_block').style.display='none';
      document.getElementById('domestic_violence_block').style.display='block';
      document.getElementById('mediation_block').style.display='none';
      document.getElementById('adoption_block').style.display='none';
      document.getElementById('free_consultation_block').style.display='none'; 
      document.getElementById('blog_block').style.display='none';
      document.getElementById('faq_block').style.display='none';
      document.getElementById('qualify_block').style.display='none';
      jQuery('body').scrollTop(0);
      return false;

  }

  function on_mobile_mediation() {
      document.getElementById('search_block').style.display='none';
      document.getElementById('home_block').style.display='none';
      document.getElementById('about_block').style.display='none';
      document.getElementById('services_block').style.display='none';
      document.getElementById('pricing_block').style.display='none';
      document.getElementById('contact_block').style.display='none';
      document.getElementById('payment_block').style.display='none';
      document.getElementById('property_block').style.display='none';
      document.getElementById('protection_block').style.display='none';
      document.getElementById('agreements_block').style.display='none';
      document.getElementById('child_custody_block').style.display='none';
      document.getElementById('child_support_block').style.display='none';
      document.getElementById('spousal_support_block').style.display='none';
      document.getElementById('contested_divorce_block').style.display='none';
      document.getElementById('uncontested_divorce_block').style.display='none';
      document.getElementById('domestic_violence_block').style.display='none';
      document.getElementById('mediation_block').style.display='block';
      document.getElementById('adoption_block').style.display='none';
      document.getElementById('free_consultation_block').style.display='none';
      document.getElementById('blog_block').style.display='none';
      document.getElementById('faq_block').style.display='none';
      document.getElementById('qualify_block').style.display='none';
      jQuery('body').scrollTop(0);
      return false;

  }

  function on_mobile_adoption() {
      document.getElementById('search_block').style.display='none';
      document.getElementById('home_block').style.display='none';
      document.getElementById('about_block').style.display='none';
      document.getElementById('services_block').style.display='none';
      document.getElementById('pricing_block').style.display='none';
      document.getElementById('contact_block').style.display='none';
      document.getElementById('payment_block').style.display='none';
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
      document.getElementById('adoption_block').style.display='block';
      document.getElementById('free_consultation_block').style.display='none';
      document.getElementById('blog_block').style.display='none';
      document.getElementById('faq_block').style.display='none';
      document.getElementById('qualify_block').style.display='none';
      jQuery('body').scrollTop(0);
      return false;
  }

  function on_mobile_free_consultation() {
      document.getElementById('search_block').style.display='none';
      document.getElementById('home_block').style.display='none';
      document.getElementById('about_block').style.display='none';
      document.getElementById('services_block').style.display='none';
      document.getElementById('pricing_block').style.display='none';
      document.getElementById('contact_block').style.display='none';
      document.getElementById('payment_block').style.display='none';
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
      document.getElementById('free_consultation_block').style.display='block';
      document.getElementById('blog_block').style.display='none';
      document.getElementById('faq_block').style.display='none';
      document.getElementById('qualify_block').style.display='none'; 
      jQuery('body').scrollTop(0);
      return false;
   

  }

  function on_mobile_blog() {
      document.getElementById('search_block').style.display='none';
      document.getElementById('home_block').style.display='none';
      document.getElementById('about_block').style.display='none';
      document.getElementById('services_block').style.display='none';
      document.getElementById('pricing_block').style.display='none';
      document.getElementById('contact_block').style.display='none';
      document.getElementById('payment_block').style.display='none';
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
      document.getElementById('blog_block').style.display='block';
      document.getElementById('faq_block').style.display='none';
      document.getElementById('qualify_block').style.display='none'; 

             
      $.ajax({
                     method: "POST",
                     url: "http://divorcesus.com/getallposts",
                     data: {}
      }).done(function( msg ) {
      
                     var result = '';

                     //$('#comments').html('Comments('+msg.comments.length+')');
                     var post_id = $('#post-id').val();

                     if (msg.comments) {
                         $('.comments-link-'+post_id).html('Comments('+msg.comments.length+')');
                     }

                     for(var i=0;i<msg.length;i++) {
                           result=result+"<div style='width:96%;'>";
                           result=result+"<div style='float:left;width:10%;'>";
                           result=result+'Title:';
                           result=result+"</div>";
                           result=result+"<div style='float:left;width:30%;font-weight:bold;'>";
                           result=result+msg[i].title;
                           result=result+"</div>";
                           result=result+"</div>";

                           result=result+"<div class='clear'></div>";
                           result=result+"</div>"

                           result=result+"<div style='width:96%;'>";
                           result=result+"<div style='float:left;width:10%;'>";
                           result=result+'Link:';
                           result=result+"</div>";
                           result=result+"<div style='float:left;width:30%;font-weight:bold;'>";
                           result=result+msg[i].link;
                           result=result+"</div>";
                           result=result+"</div>";

                           result=result+"<div class='clear'></div>";
                           result=result+"</div>"

                           result=result+"<div style='width:96%;'>";
                           result=result+"<div style='float:left;width:10%;'>";
                           result=result+'Posted by:';
                           result=result+"</div>";
                           result=result+"<div style='float:left;width:30%;font-weight:bold;'>";
                           result=result+msg[i].author.first_name+' '+msg[i].author.last_name;
                           result=result+"</div>";
                           result=result+"</div>";

                           result=result+"<div class='clear'></div>";
                           result=result+"</div>"

                           result=result+"<div style='width:96%;'>";
                           result=result+"<div style='float:left;width:60%;'>";
                           result=result+msg[i].body;
                           result=result+"</div>";
                           result=result+"</div>";


                           result=result+"<div class='clear'></div>";
                           result=result+"</div>"

                           result=result+"<div style='width:96%;'>";
                           result=result+"<div style='float:left;width:15%;'>";
                           result=result+"<a href='#'>All Comments</a>";
                           result=result+"</div>";
                           result=result+"<div style='float:left;width:15%;'>";
                           result=result+"<a href='#'>Post Comment</a>";
                           result=result+"</div>";

                           result=result+"</div>";


                           result=result+"<div class='clear'></div>";
                           result=result+"</div>"

                           result=result+"<br/><br/>";
                       }

                  //     $('#blog-posts').html(result);
              });


      jQuery('body').scrollTop(0);
      return false;


  }

  function on_mobile_faq() {
      document.getElementById('search_block').style.display='none';
      document.getElementById('home_block').style.display='none';
      document.getElementById('about_block').style.display='none';
      document.getElementById('services_block').style.display='none';
      document.getElementById('pricing_block').style.display='none';
      document.getElementById('contact_block').style.display='none';
      document.getElementById('payment_block').style.display='none';
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
      document.getElementById('qualify_block').style.display='none';
      document.getElementById('faq_block').style.display='block'; 
      jQuery('body').scrollTop(0);
      return false;


  }

  function on_mobile_qualify(state) {
      if  (state==1) {
             jQuery("#qualify-state-label").attr("style","float:left;width:60%;padding-top:1.2em;padding-bottom:1.2em;display:block;");
             jQuery("#qualify-state").attr("style","float:left;width:12%;padding-top:1.2em;padding-bottom:1.2em;display:block;");
             jQuery("#qualify-state").html("<h4><strong>New York</strong></h4>");
             jQuery("#state-selected").attr("value","New York");
      }
      else 
      if  (state==2) {
             jQuery("#qualify-state-label").attr("style","float:left;width:60%;padding-top:1.2em;padding-bottom:1.2em;display:block;");
             jQuery("#qualify-state").attr("style","float:left;width:12%;padding-top:1.2em;padding-bottom:1.2em;display:block;");
             jQuery("#qualify-state").html("<h4><strong>New Jersey</strong></h4>");
             jQuery("#state-selected").attr("value","New Jersey");      
      }
      else
      if  (state==0) {
             jQuery("#qualify-state-label").attr("style","float:left;width:60%;padding-top:1.2em;padding-bottom:1.2em;display:none;");
             jQuery("#qualify-state").attr("style","float:left;width:12%;padding-top:1.2em;padding-bottom:1.2em;display:none;");
      }


      document.getElementById('search_block').style.display='none';
      document.getElementById('home_block').style.display='none';
      document.getElementById('about_block').style.display='none';
      document.getElementById('services_block').style.display='none';
      document.getElementById('pricing_block').style.display='none';
      document.getElementById('contact_block').style.display='none';
      document.getElementById('payment_block').style.display='none';
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
      document.getElementById('qualify_block').style.display='block';  
      $("#qualify-wizard :nth-child(1)").attr('class','active');
      $("#qualify-steptwo").attr("style","display:none;");
      jQuery('body').scrollTop(0);
      return false;


  }
  
  function on_mobile_search_service(id) {

     if (id==1) {
         on_mobile_adoption();
     }

     if (id==2) {
         on_mobile_agreements();
     }

     if (id==3) {
         on_mobile_contested();
     }

     if (id==4) {
         on_mobile_child_custody();
     }

     if (id==5) {
         on_mobile_child_support();
     }    

     if (id==6) {
         on_mobile_domestic_violence();
     }
 
     if (id==7) {
         on_mobile_consultation();
     }

     if (id==8) {
         on_mobile_mediation();
     }

     if (id==9) {
         on_mobile_property();
     }

     if (id==10) {
         on_mobile_protection();
     }

     if (id==11) {
         on_mobile_spousal_support();
     }

     if (id==12) {
         on_mobile_uncontested_divorce();
     }

     return false;
  }

   function processPayment() {
      $.ajax({
            type: "POST",
            url: "http://divorcesus.com/confirm/",
            data: '{"email":"'+$("#email").val()+'","fullname":"'+$("#fullname").val()+'","cardtype":"'+$("#cardtype").val()+
                                 '","cardnumber":"'+$("#cardnumber").val()+'","address1":"'+$("#address1").val()+'","address2":"'+
                                 $("#address2").val()+'","city":"'+$("#city").val()+'","phone":"'+$("#phone").val()+'","state":"'+
                                 $("#state").val()+'","zip":"'+$("#zip").val()+'","month":"'+$("#month").val()+'","year":"'+$("#year").val()+'"}',

            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(data) {
            },
            error: function(data){
              alert("failure"+data);
           }
      });

   }

       function close_comments() {

          $('#comments-section').css('display','none');
          $('#comments-open').attr('value','0');

          return false;

       }

       function open_comments() {
          $('#comments-section').css('display','block');
          $('#comments-open').attr('value','1');

          return false;
       }
       function handlePostId(id) {


          $("#comments-section").appendTo("#post-single-"+id);      

          if ($('#post-id').val()==id) {

              if ($('#comments-open').val()==1) {

                  open_comments();

              } else {

                  close_comments();      

              }

              return false;
          }

          close_comments();

          $('#post-id').attr('value',id);

          return false;
       }


   function loadPosts() {
      alert('load all posts');
   }

      
   function handlePost() {
                  var post_id = $('#post-id').val();
                  var comment = $('#comment').val();

                  $.ajax({
                         method: "GET",
                         url: "http://divorcesus.com/addcomment?post_id="+post_id+"&body='"+comment+"'",
                         data: {}
                  }).done(function( msg ) {

                         //  alert("WE ARE BACK ONE"+msg.comments.length);

                           var result = '';

                           //$('#comments').html('Comments('+msg.comments.length+')');
                           var post_id = $('#post-id').val();

                           $('.comments-link-'+post_id).html('Comments('+msg.comments.length+')');

                          // $('.comments-link').html('Comments('+msg.comments.length+')');

                           for(var i=0;i<msg.comments.length;i++) {

                               if(i==0) {
                                  result=result+"<div style='width:96%;text-align:left;margin-top:1.2em;margin-bottom:1.2em;'><h4><strong>Comments</strong></h4></div>";
                               }

                               result=result+"<div class='comment-all-wrapper'>";

                               result=result+"<div class='left-wrapper'>";

                               result=result+"<div class='avatar-wrapper'>";
                               result=result+"<img src='"+msg.comments[i].avatar+"' class='avatar' />";
                               result=result+"</div>";

                               result=result+"<div class='username-wrapper'>";
                               result=result+"<center>";                           
                               result=result+msg.comments[i].username;
                               result=result+"</center>";
                               result=result+"</div>";
                               result=result+"<div class='clear'></div>";

                               result=result+"</div>";   
                               result=result+"<div class='comment-wrapper'>";
                               result=result+msg.comments[i].body;
                               result=result+"</div>";
                               result=result+"<div class='clear'></div>";
                               result=result+"</div>";
                               result=result+"<div class='clear'></div>";    
                           }
                           $('#comments-list').html(result);
                           return false;

                  }); 

       }

       function handleComments() {
          var commentsopen = eval($("#comments-open").val());

          var post_id = $('#post-id').val();

          if  (commentsopen==undefined || commentsopen==0) {

                  $("#comments-open").attr('value','1');
                  $('#comments-section').css('display','block'); 


                  $.ajax({
                         method: "GET",
                         url: "http://divorcesus.com/getcomments?post_id="+post_id,
                         data: {}
                  }).done(function( msg ) {


                           var post_id = $('#post-id').val();
                           $('.comments-link-'+post_id).html('Comments('+msg.comments.length+')');

                           var result = '';

                           for(var i=0;i<msg.comments.length;i++) {

                               if(i==0) {
                                  result=result+"<div style='width:96%;text-align:left;margin-top:1.2em;margin-bottom:1.2em;'><h4><strong>Comments</strong></h4></div>";
                               }

                               result=result+"<div class='comment-all-wrapper'>";

                               result=result+"<div class='left-wrapper'>";

                               result=result+"<div class='avatar-wrapper'>";
                               result=result+"<img src='"+msg.comments[i].avatar+"' class='avatar' />";
                               result=result+"</div>";

                               result=result+"<div class='username-wrapper'>";
                               result=result+"<center>";
                               result=result+msg.comments[i].username;
                               result=result+"</center>";
                               result=result+"</div>";
                               result=result+"<div class='clear'></div>";

                               result=result+"</div>";
                               result=result+"<div class='comment-wrapper'>";
                               result=result+msg.comments[i].body;
                               result=result+"</div>";
                               result=result+"<div class='clear'></div>";
                               result=result+"</div>";
                               result=result+"<div class='clear'></div>";



                           }
                           $('#comments-list').html(result);

                  });


          }

          if  (commentsopen==1) {
               $("#comments-open").attr('value','0');
               $('#comments-section').css('display','none');
          }


          return false;     
       }


   $(document).ready(function() {



          var box = null;
 
          var service = $("#page-service").val();
          $('#comments-section').css('display','none');
   
          $('.comments-link').bind('click',handleComments);



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


var vm = new Vue({
  el: '#stepone',

  data: {
    email:'',
    phone:'',
    fullname: '',
  },

  methods: {

    submitone: function (event) {
               this.$set('phone',$('#phone').val());
               this.$set('email',$('#email').val());
               this.$set('fullname',$('#fullname').val());               
    },

    submittwo: function (event) {

    },

    submitthree: function (event) {
    },

    submitfour: function (event) {
        alert('hihihi');
    },

    successCallback: function(event) {
            alert("SUCCESS");
    },
    errorCallback: function(event) {
            alert("ERROR");
    },
    validConfirm: function(event) {
           alert("VALID");
    },
    ready:function() {
      this.$set('phone',$('#phone').val());
      this.$set('email',$('#email').val());
      this.$set('fullname',$('#fullname').val());
    }

    
  }
});


});

function search() {
              $.ajax({

                     method: "GET",

                     url: "http://divorcesus.com/searchresults?q="+$("#search").val(),

                     data: {}

              }).done(function( msg ) {

                       var result = 'Your search delivered no results.';

                       for(var i=0;i<msg.posts.length;i++) {
                            
                           if (i===0) {

                              if (msg.posts.length>0) { 
                                 result = '';
                              }  

                              result=result+"<div style='width:96%;text-align:left;margin-top:1.2em;'><h4><strong>Posts Found</strong></h4></div>";
                           }
                           result=result+"<div style='width:96%;'>";
                           result=result+"<div style='float:left;width:10%;'>";
                           result=result+'Title:';
                           result=result+"</div>";
                           result=result+"<div style='float:left;width:80%;font-weight:bold;'>";
                           result=result+msg.posts[i].title;
                           result=result+"</div>";
                           result=result+"</div>";

                           result=result+"<div class='clear'></div>";
                           result=result+"</div>"

                           result=result+"<div style='width:96%;'>";
                           result=result+"<div style='float:left;width:10%;'>";
                           result=result+'Link:';
                           result=result+"</div>";
                           result=result+"<div style='float:left;width:80%;font-weight:bold;'>";
                           result=result+msg.posts[i].link;
                           result=result+"</div>";
                           result=result+"</div>";


                           result=result+"<div class='clear'></div>";
                           result=result+"</div>"

                           result=result+"<br/><br/>";
                       }

                       for(var i=0;i<msg.services.length;i++) {
                           if(i===0) {
                              if (msg.services.length > 0 && result==='Your search delivered no results.') {
                                  result = '';
                              }

                              result=result+"<div style='width:96%;text-align:left;margin-top:1.2em;'><h4><strong>Services Found</strong></h4></div>";
                           }

                           result=result+"<div style='width:96%;'>";
                           result=result+"<div style='float:left;width:10%;'>";
                           result=result+'Title:';
                           result=result+"</div>";
                           result=result+"<div style='float:left;width:80%;font-weight:bold;'>";
                           result=result+"<a href='#' onclick='on_mobile_search_service("+msg.services[i].id+");'>";
                           result=result+msg.services[i].title;
                           result=result+"</a>";
                           result=result+"</div>";
                           result=result+"</div>";


                           result=result+"<div class='clear'></div>";
                           result=result+"</div>"

                           result=result+"<div style='width:96%;'>";
                           result=result+"<div style='float:left;width:10%;'>";
                           result=result+'Description:';
                           result=result+"</div>";
                           result=result+"<div style='float:left;width:80%;font-weight:bold;'>";
                           result=result+msg.services[i].description;
                           result=result+"</div>";
                           result=result+"</div>";

                           result=result+"<div class='clear'></div>";
                           result=result+"</div>"

                           result=result+"<div style='width:96%;'>";
                           result=result+"<div style='float:left;width:10%;'>";
                           result=result+'Service:';
                           result=result+"</div>";
                           result=result+"<div style='float:left;width:80%;font-weight:bold;'>";
                           result=result+"<a href='#' onclick='on_mobile_search_service("+msg.services[i].id+");'><img src='"+msg.services[i].service+"' heigt='100' width='100' /></a>";
                           result=result+"</div>";
                           result=result+"</div>";


                           result=result+"<div class='clear'></div>";
                           result=result+"</div>"


                           result=result+"<br/><br/>";
                       }

                       for(var i=0;i<msg.categories.length;i++) {

                           if(i===0) {

                              if (msg.categories.length > 0 && result==='Your search delivered no results.') {
                                  result = '';
                              }

                              result=result+"<div style='width:96%;text-align:left;margin-top:1.2em;'><h4><strong>Categories Found</strong></h4></div>";
                           }

                           result=result+"<div style='width:96%;'>";
                           result=result+"<div style='float:left;width:10%;'>";
                           result=result+'Name:';
                           result=result+"</div>";
                           result=result+"<div style='float:left;width:80%;font-weight:bold;'>";
                           result=result+msg.categories[i].name;
                           result=result+"</div>";
                           result=result+"</div>";


                           result=result+"<div class='clear'></div>";
                           result=result+"</div>"

                           result=result+"<div style='width:96%;'>";
                           result=result+"<div style='float:left;width:10%;'>";
                           result=result+'Code:';


                           result=result+"</div>";
                           result=result+"<div style='float:left;width:80%;font-weight:bold;'>";
                           result=result+msg.categories[i].code;
                           result=result+"</div>";
                           result=result+"</div>";


                           result=result+"<div class='clear'></div>";
                           result=result+"</div>"

                           result=result+"<br/><br/>";
                       }

                       on_mobile_search();
                       $('#search-results').html(result);
                       return false;

              });

    return false;
}

