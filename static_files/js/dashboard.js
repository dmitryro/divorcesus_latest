    var allWells = $('.admin-content');
    var allWellsExceptFirst = $('.admin-content:not(:first)');

    function blink() {
        $(".notification-counter").fadeTo(100, 0.1).fadeTo(100, 1.0);
    }

    function unblink() {
        $(".notification-counter").fadeTo(100, 0.0).fadeTo(100, 0.0);
    }

    function stopInterval(interval){
      clearInterval(interval); 
      return false;
    }

    function read_user_by_id(user_id) {
        $.get( "https://divorcesus.com/users/"+user_id, function(data) {
             var user_id = data.id;
             $('#target-customer').val(data.username).change();
             return data;
        });
 
    }

    function read_user() {
        var username = $('#target-customer').val();

        $.get( "https://divorcesus.com/users?username="+username, function( data ) {
             var user_id = data[0].id;
             if (user_id!=undefined) {
                 $('#receiver_id').val(user_id).change();
                 return user_id;
             }
             $('#receiver_id').val(user_id).change();
        });
        return $('#receiver_id').val();
    }

    $(document).ready(function(){
   	    var options = ['root','azhurba','ajsegal','egrinberg'];

            var toggle_user_id = $('#user_id').val();
             
            var tg = read_toggle(toggle_user_id);
            

            var total = $("#total_unseen").val();
           
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
           
            interval = setInterval(function(){blink()}, 1000);
            if (total==0) {
                stopInterval(interval)
            }
         
            $(".notification").bind('click', function() {
               openmenu('incoming');
            });

            $("#edit-billing-address-form").submit(function(e) {
                 e.preventDefault();
                 $("#edit-billing-address-form-submitted").attr('value',1);
            });

            $(".notification-counter").css('display','block');   
            
           //$(".notification-counter").addClass("flash");
          //  setInterval(function(){blink()}, 1000);

      //      $('.notification-counter').css({opacity: 0});
      //      $('.notification-counter').animate({opacity: 1}, 700 );
             
            $('#duplicate_to_email').bind('click', function() {
                      if ($(this).val()=='on') {
                           toggle(0);
                           document.getElementById('duplicate_to_email').value = 'off';
                      } else {
                           toggle(1);
                           document.getElementById('duplicate_to_email').value = 'on';
                      }
            });


            var l = document.getElementById('duplicate_to_email');

            if (tg == true) {
                $(l).click();
                if($(l).val()=='off') {
                    $(l).click();
                }
                document.getElementById('duplicate_to_email').value = 'off';

            } else {
                $(l).click();
                if($(l).val()=='on') {
                     $(l).click();
                }
                document.getElementById('duplicate_to_email').value = 'on';
            }


            $('#add-billing-address-body').css('display','none');
            $("#billing-addresses").hide();
            $("#edit-billingaddress-back").hide();
            $("#edit-billingaddress-home").hide();
            $("#edit-billing-address").hide();

            $('#respond_back').click(function(e) {
                sendmessage();
                openmenu('incoming');
            });
            
            $('#saveeditedpost').click(function(e) {
                saveEditedPost();
                openmenu('allposts');
            });

            $('#send_message').click(function(e) {
                openmenu('outgoing');
            });
            allWellsExceptFirst.hide();
            allWells.hide();
            $('#home').show();

            $("#receiver_id").on('change', function(){
                 var user_id = $("#receiver_id").val();

                 if (eval(user_id) < 17) {
                            read_user_by_id(user_id); 
                 }
            });
 
            $('#receiver_id').click(function() {
                  var value = $('#receiver_id').val();
                  if (eval(value)==19) {
                      $('#send-to-customer').css('display', 'block');
                  } else {
                      $('#send-to-customer').css('display', 'none');
                  }

            });

            $('#add-payment-method').click(function(e) {
                    $("#add-payment-method-back").css('display','block');
                    $("#add-payment-method-home").css('display', 'none');
                    $('#add-payment-method-body').css('display','block');
            });

            $('#add-billing-address').click(function(e) {
                    $("#billing-addresses").css('display', 'none');
                    $("#edit-billing-address").css('display', 'none');
                    $("#edit-billingaddress-back").css('display', 'block');
                    $("#edit-billingaddress-home").css('display', 'none'); 
                    $('#add-billing-address-body').css('display', 'block');
            });

            $("#billing-address-form").validate(
             );


	    jQuery(function($) {
	      $('[data-numeric]').payment('restrictNumeric');
	      $('.cc-number').payment('formatCardNumber');
	      $('.cc-exp').payment('formatCardExpiry');
	      $('.cc-cvc').payment('formatCardCVC');
	      $.fn.toggleInputError = function(erred) {
		this.parent('.form-group').toggleClass('has-error', erred);
		return this;
	      };
	      $('form').submit(function(e) {
		e.preventDefault();
		var cardType = $.payment.cardType($('.cc-number').val());
		$('.cc-number').toggleInputError(!$.payment.validateCardNumber($('.cc-number').val()));
		$('.cc-exp').toggleInputError(!$.payment.validateCardExpiry($('.cc-exp').payment('cardExpiryVal')));
		$('.cc-cvc').toggleInputError(!$.payment.validateCardCVC($('.cc-cvc').val(), cardType));
		$('.cc-brand').text(cardType);
		$('.validation').removeClass('text-danger text-success');
		$('.validation').addClass($('.has-error').length ? 'text-danger' : 'text-success');
	      });
	    });

            $('#add-new-post').click(function(e) {
              openmenu('newpost');
            });

            $('#add-new-post-one').click(function(e) {
              openmenu('newpost');
            });


    });
  
 
    function saveEditedPost() {
       var post_id = $('#post_id').val();
       var body = $("#edit_post_body").val();
       var category_id = $("#edit_category_id").val();
       var link = $("#edit_link").val();


       $.ajax({
                     
           method: "POST",
           url: "https://divorcesus.com/savepost",
           data: { title: $('#edit_post_title').val(),post_id: $('#post_id').val(),category_id:$('#edit_category_id').val(), body:body, link:link}
              }).done(function( msg ) {
            openmenu('allposts');
        });

    }
 
    function openmenu(target) {
          $('#commentform').hide();
          allWells.hide();
          $('#' + target).show();
 
          if (target==='chat') {
               $('.panel-all-your-posts').hide();
               $('#allposts').hide();
               $('#editpost').hide();
               $('#appform').hide();
               $('#commentform').hide();
               $("#incoming").hide();
          }
          else if (target==='paymenthistory') {
               $('#paymenthistory').show();

                         
               $.ajax({
                       method: "POST",
                       url: "https://divorcesus.com/pastpayments/",
                       data: { user_id: $('#user_id').val()}
               }).done(function( msg ) {

                       let result = '';

                       for(var i = 0; i < msg.payments.length; i++) {
                           result += '<div style="float:left;width:40%;">';
                           result += msg.payments[i].payment_processing_number;
                           result += '</div>';
                           result += '<div style="clear:both;"></div>';
                       }

                       $('.panel-payments').html(result);

               });
               
               $('.panel-payments').html('list here');

               $('.panel-all-your-posts').hide();
               $('#allposts').hide();
               $('#editpost').hide();
               $('#appform').hide();
               $('#chat').hide();
               $('#commentform').hide();
               $("#incoming").hide();
          }
          else if (target==='notify') {
               $('#mceu_13').removeClass("mce-tinymce mce-container mce-panel");
               $('#send-us-message').html('<textarea id="message_body" class="inner-textarea" style="overflow:hidden;margin-bottom:1.2em;"  rows="5"></textarea>');
               $('#paymenthistory').hide();
          }
          else if (target==='incoming') {
               $("#incoming").show();
               $("#chat").hide();
               $('.panel-all-your-posts').hide();
               $('#allposts').hide();
               $('#editpost').hide();
               $('#appform').hide();
               $('#commentform').hide();               
               $('.panel-incoming-messages').show();
               $('.panel-current-incoming-message').hide();
               $('#paymenthistory').hide();
               $('#incoming_messages_back').css('display','none');
               $('#incoming_messages_home').css('display','block');
               var arr = {receiver_id: document.getElementById('user_id').value};

               $.ajax({
                     url: "https://divorcesus.com/incoming/",
                     type: "POST",
                     crossDomain: true,
                     data: JSON.stringify(arr),
                     dataType: 'json',
                     contentType: 'application/json; charset=utf-8',
                     method: "POST"
              }).done(function( msg ) {
                           var result = '';
                           for(var i=0; i<msg.length; i++) {
                               if (msg[i].sender.first_name) {
                                   var first_name = msg[i].sender.first_name;
                               } else {
                                   var first_name = '';
                               }
                               if (msg[i].sender.last_name) {
                                   var last_name = msg[i].sender.last_name;
                               } else {
                                   var last_name = '';
                               }                             

                               result=result+"<div style='width:99%;padding-top:0.6em;padding-bottom:0.6em;'>";

                               result=result+"<div style='float:left;width=24%;padding-left:2.0em;margin-right:2.2em;'>"+first_name+" "+last_name+"</div>";

                               result=result+"<div style='float:left;width:24%;'>";
                               result=result+msg[i].time_sent.slice(0,10);
                               result=result+"</div>";

                               result=result+"<div style='float:left;width:30%;'>";
                               result=result+msg[i].title;
                               result=result+"</div>";


                               result=result+"<div style='float:left;width:10%;'>";

                               if (!msg[i].is_seen) {

                               result=result+"<a href='#' id='msg-"+msg[i].id+"' onclick='readmessage("+msg[i].id+");'  style='color:blue;font-weight:bold;'>Read</a>";
                               } else {
                                  result=result+"<a href='#' id='msg-"+msg[i].id+"' onclick='readmessage("+msg[i].id+");'  style='color:blue;'>Read</a>";
                               }

                               result=result+"</div>";
                               result=result+"<div style='float:left;width:10%;'>";
                               result=result+"<a href='#' style='color:red;' onclick='deletemessage("+msg[i].id+",2);'>Delete</a>";
                               result=result+"</div>";
                               result=result+"<div class='clear'></div>";
                               result=result+"</div>"

                               if (!msg[i].is_seen) {
                                    $('#msg-'+msg[i].id).css('color','green');
                                    $('#msg-'+msg[i].id).css('font-weight','bold');
                       
                               //   $('#msg-'+msg[i].id).pulse({opacity: 0.8}, {duration : 100, pulses : 5});
                               }

                           }
                           $('.panel-incoming-messages').html(result);


              });

 
          }
          else if (target=='billingaddresses') {
                  $("#billing-addresses-panel").show(); 
                  $("#billing-addresses").show();
                  //$("#billingaddress").css('display', 'none');
                  $("#edit-billing-address").hide();
                  $("#edit-billingaddress-back").hide();
                  $("#edit-billingaddress-home").css('display', 'block');
                  $("#add-billing-address-body").hide();
          }
          else if (target=='paymentmethods') {
                  $("#add-payment-method-body").hide();
                  $("#add-payment-method-back").hide();  
                  $("#add-payment-method-home").show();
          }
          else if (target=='onandoff') {
                  var toggle_user_id = $('#user_id').val();
                  var tg = read_toggle(toggle_user_id);

                  if (tg == true) {
                      toggle(1);
                      document.getElementById('duplicate_to_email').value = 'on';
                  //    $('#duplicate_to_email').click();
                  } else {
                      toggle(0);
                      document.getElementById('duplicate_to_email').value = 'off';
                    //  $('#duplicate_to_email').click();
                  }



          } else if (target==='outgoing') {
               $("#chat").hide();
               $("#incoming").hide();
               $('#paymenthistory').hide();

               var arr = {sender_id: document.getElementById('user_id').value};

               $.ajax({
                     url: "https://divorcesus.com/outgoing/",
                     type: "POST",
                     crossDomain: true,
                     data: JSON.stringify(arr),
                     dataType: 'json',
                     contentType: 'application/json; charset=utf-8',
                     method: "POST"
              }).done(function( msg ) {

                           var result = '';
                           for(var i=0; i<msg.length; i++) {
                                
                           result=result+"<div style='float:left;width:10%;'>";
                               result=result+msg[i].receiver.username;
                               //result=result+' ';
                              // result=result+msg[i].receiver.last_name;
                               result=result+"</div>";
                               result=result+"<div style='float:left;width:30%;'>";
                               result=result+msg[i].time_sent;
                               result=result+"</div>";
                               result=result+"<div style='float:left;width:39%;'>";
                               result=result+msg[i].title;
                               result=result+"</div>";
                               result=result+"<div style='float:left;width:10%;'>";
                               result=result+'Resend';
                               result=result+"</div>";
                               result=result+"<div style='float:left;width:10%;'>";
                               result=result+"<a href='#' style='color:red;' onclick='deletemessage("+msg[i].id+",1);'>Delete</a>";
                               result=result+"</div>";
                               result=result+"<div class='clear'></div>";
                               result=result+"</div>"


                           }
                           $('.panel-outgoing-messages').html(result);
                           $('.personal').show();
                               

              });

          }

          else if(target==='newpost' || target==='allposts') {
              $('#paymenthistory').hide();
   
 
              if ( target==='newpost') {
                  $('#edit_post').hide();
                  $('.panel-all-your-posts').hide();
                  $("#incoming").hide(); 
                  $('#chat').hide();
                  $('#allposts').hide();
                  $('#editpost').hide();
                  $('#appform').show();
                  $('#commentform').hide();
                  resetpost();

              } else if (target==='allposts') {
                  //$('.panel-all-your-posts').show();
                  $('#chat').hide();
                  $("#incoming").hide();
                  $('#allposts').show();
                  $('#editpost').hide();
                  $('#appform').hide();
                  $('#commentform').hide();

              } else if (target==='editpost') {
                  $('#chat').hide();
                  $("#incoming").hide();
                  $('#editpost').show();
                  $('#appform').hide();
                  $('#allposts').hide();
              }

              $.ajax({
                     method: "POST",
                     url: "https://divorcesus.com/getposts",
                     data: {}
              }).done(function( msg ) {
                       var result = '';
                           result=result+"<div class='clear'></div>";
                           result=result+"</div>"

                       for(var i=0;i<msg.length;i++) {
                           result=result+"<div style='width:99%;font-weight:0.8em;padding-top:0.6em;padding-bottom:0.6em;'>";
                           result=result+"<div style='float:left;width:2%;'>&nbsp;</div>";
                           result=result+"<div style='float:left;width:5%;'>";
                           result=result+msg[i].id;
                           result=result+"</div>";
                           result=result+"<div style='float:left;width:45%;'>";
                           result=result+msg[i].title;
                           result=result+"</div>";
/*
                           result=result+"<div style='float:left;width:30%;'>";
                           result=result+msg[i].link;
                           result=result+"</div>";
*/
                           result=result+"<div style='float:left;width:15%;'>";
                           result=result+"<a href='#' onclick='editpost("+msg[i].id+");return false;'  style='color:blue;'>Edit</a>";
                           result=result+"</div>";


                           result=result+"<div style='float:left;width:15%;'>";
                           result=result+"<a href='#' style='color:red;' onclick='deletepost("+msg[i].id+");'>Delete</a>";
                           result=result+"</div>";

                           result=result+"<div style='float:left;width:15%;'>";
                           result=result+"<a href='#' style='color:red;' onclick='postcomments("+msg[i].id+");'>Comments</a>";
                           result=result+"</div>";




                           result=result+"<div class='clear'></div>";
                           result=result+"</div>"
                       }
                      // $('.panel-all-your-posts').show();
                       //$('.panel-all-your-posts .panel-posts').html(result);
                       $('#allposts .panel-all-posts .panel-posts').html(result);
                 //      $('.newpost').css('display','none');
                       //$('#panel-all-posts').html(result);
              });


          }    

    }


function collapse(targetId){
  if (document.getElementById){
        target = document.getElementById(targetId);
       target.style.display = "none";
  }
}

function swap(targetId){
  if (document.getElementById){
        target = document.getElementById(targetId);
            if (target.style.display == "none"){
                target.style.display = "";
            } else{
                target.style.display = "none";
            }
                
  }
}

      
Vue.validator('nonempty', {
              message: function (field) { // error message with function
                  return 'required "' + field + '" field'
              },
              required: true,
              minlength: 10
})


Vue.validator('email', {
        message: 'invalid email address', // error message with plain string
        check: function (val) { // define validator
          return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)
        }
})


    // build-in `required` validator customization
Vue.validator('required', {
        message: function (field) { // error message with function
          return 'required "' + field + '" field'
        },
        check: Vue.validator('required') // re-use validator logic
})

function resetpost() {
      $('#postbody').attr('value','');
      $('#link').attr('value','');
      $('#posttitle').attr('value',''); 
      return false;
}

function read_toggle(user_id) {
     var xhReq = new XMLHttpRequest();
     xhReq.open("GET", "https://divorcesus.com/msgsettings?user_id="+user_id, false);
     xhReq.send(null);
     var data = JSON.parse(xhReq.responseText);
     if (data[0]==undefined) {
         return false;
     }
     var toggle= new Boolean(data[0].duplicate_private);
     return toggle;
}

function toggle(tg) {
    var arr = {user_id: document.getElementById('user_id').value, 'toggle': tg};
    $.ajax({
        method: "POST",
        url: "https://divorcesus.com/duplication/",
        data:  JSON.stringify(arr)
    }).done(function( data ) {
        return new Boolean(data.duplicate_private);
    });
    return false;
}

function sendmessage() {
    $.ajax({
        method: "POST",
        url: "https://divorcesus.com/sendmessage/",
        data: { title: $('#message_reply_title').val(),
                message_id: $('#message_reply_id').val(),
                receiver_id:$('#message_sender_id').val(),
                body:$('#response-text').val()}
    }).done(function( msg ) {
    });

    return false;
}


function readmessage(id) {
   $.ajax({
       method: "POST",
       url: "https://divorcesus.com/readmessage",
       data: { message_id:id}
   }).done(function( msg ) {
      $("#total_unseen").attr("value", msg.total_unseen);
      $(".notification-counter").html(msg.total_unseen);
      $("#incoming_messages_back").css('display', 'block');
      $("#incoming_messages_home").css('display', 'none');
      var total = msg.total_unseen;

      interval = setInterval(function(){blink()}, 1000);
      
      if (total==0) {
                setInterval(function(){unblink()}, 1000);
                $(".notification-counter").css("display", "none");
      }
      msg = msg.messages;
      $('#mceu_13').removeClass("mce-tinymce mce-container mce-panel");
      $('.respond-back').html('<textarea id="response-text" class="form-control" rows="5"></textarea>');
      $('.panel-incoming-messages').hide();
      $('.panel-current-incoming-message').show();
      $('#message_reply_id').attr('value',msg.id);
      $('#message_reply_title').attr('value',msg.title);
      $('#message_reply_body').html(msg.body);
      $('#message_sender').html(msg.sender.username);
      $('#message_date_sent').html(msg.time_sent);
      $('#message_sender_id').attr('value',msg.sender.id);
   });
   return false;
}

function editaddress(id) {
    $("#billing-addresses-panel").hide();         
    $("#billing-addresses").hide();
    $("#edit-billing-address").show();
    $("#edit-billingaddress-back").show();
    $("#edit-billingaddress-home").hide();
    $("#add-billing-address-body").hide();

    $.ajax({
        method: "GET",
        url: "https://divorcesus.com/addresses/"+id
    }).done(function( data ) {
        $('#edit-address-id').attr('value', id);
        $('#edit-nickname').attr('value', data.nickname);
        $('#edit-name-or-company').attr('value', data.name_or_company);
        $('#edit-address-1').attr('value', data.address1);
        $('#edit-address-2').attr('value', data.address2);
        $('#edit-city').attr('value', data.city);
        $('#edit-state-province').attr('value', data.state_province.id);
        $('#edit-zip-postal').attr('value', data.zip_or_postal);
        $('#edit-country').attr('value', data.country);   

        var tg = data.is_default;
        var l = document.getElementById('edit-make-default-billing');

        if (tg==true && $(l).val()== 'on') {
           //  $(l).click();
        } else if (tg==true && $(l).val()== 'off') {
             //$(l).click();
        } else if (tg==false && $(l).val()== '') {
             $(l).click();
        }

        if (tg == false) {
            $(l).click();
           
            if($(l).val()=='on' || $(l).val()=='') {
                $(l).click();
            }
            document.getElementById('edit-make-default-billing').value = 'on';

        } else {
            $(l).click();
            if($(l).val()=='off' || $(l).val()=='') {
                $(l).click();
            }
            document.getElementById('edit-make-default-billing').value = 'off';
        }


    });
    return false;

}

function deleteaddress(id) {
              var arr = {"address_id": id, "user_id": $('#user_id').val()};

              $.ajax({
                     method: "POST",
                     url: "https://divorcesus.com/deletebilling/",
                     data: JSON.stringify(arr)
              }).done(function( msg ) {
                     $("#billing-addresses-panel").show();
                     $("#add-billing-address-body").hide();
                     $("#edit-billing-address").hide();
                     $("#edit-billingaddress-back").hide();
                     $("#edit-billingaddress-home").css('display', 'block');
                     $("#billing-addresses").show();

                     var result = '';

                     for(var i = 0; i < msg.length; i++) {
                         result=result+"<div style='width:96%;padding-top:0.6em;padding-bottom:0.6em;'>";
                         result=result+"<div style='float:left;width:2%;'>&nbsp;</div>";
                         result=result+"<div style='float:left;width:20%;'>";
                         result=result+msg[i].nickname;
                         result=result+"</div>";
                         result=result+"<div style='float:left;width:48%;'>";
                         result=result+msg[i].address1+", "+msg[i].address2+", "+msg[i].city;
                         result=result+"</div>";
                         result=result+"<div style='float:left;width:10%;'>";
                           if (msg[i].is_default==true) {
                              result = result+"<span class='checkmark'>"+
                                              "<div class='checkmark_circle'></div>"+
                                              "<div class='checkmark_stem'></div>"+
                                              "<div class='checkmark_kick'></div>"+
                                              "</span>";

                           } else {
                              result = result+"<span class='checkmark'>"+
                                              "<div class='checkmark_circle_false'></div>"+
                                              "<div class='checkmark_stem'></div>"+
                                              "<div class='checkmark_kick'></div>"+
                                              "</span>";

                           }

                         result=result+"</div>";
                         result=result+"<div style='float:left;width:10%;'>";
                         result=result+"<a href='#' onclick='editaddress("+msg[i].id+");' style='color:blue; text-decoration:none;'>Edit</a>";
                         result=result+"</div>";
                         result=result+"<div style='float:left;width:10%;'>";
                         result=result+"<a href='#' onclick='deleteaddress("+msg[i].id+");' style='color:red; text-decoration:none;'>Delete</a>";
                         result=result+"</div>";
                         result=result+"<div class='clear'></div>";
                         result=result+"</div>";
                     }
                     $("#billing-addresses").html(result);

              });
              return false;
}

function deletemessage(id,mode) {
              $.ajax({
                     method: "POST",
                     url: "https://divorcesus.com/deletemessage/",
                     data: {message_id:id,mode:mode}
              }).done(function( msg ) {

                           var result = '';

                           var res = msg.messages;

                           for(var i=0; i<res.length; i++) {
                               result=result+"<div style='float:left;width:30%;'>";
                               result=result+res[i].receiver.first_name;
                               result=result+' ';
                               result=result+res[i].receiver.last_name;
                               result=result+"</div>";
                               result=result+"<div style='float:left;width:10%;'>";
                               result=result+res[i].time_sent;
                               result=result+"</div>";
                               result=result+"<div style='float:left;width:29%;'>";
                               result=result+res[i].title;
                               result=result+"</div>";
                               result=result+"<div style='float:left;width:15%;'>";
                               
                               if (mode===1) {
                                    result=result+"Resend";
                               } else {                               
                                    if (!res[i].is_seen) {

                                          result=result+"<a href='#' id='msg-"+res[i].id+"' onclick='readmessage("+res[i].id+");'  style='color:blue;font-weight:bold;'>Read</a>";
                                    } else {
                                          result=result+"<a href='#' id='msg-"+res[i].id+"' onclick='readmessage("+res[i].id+");'  style='color:blue;'>Read</a>";
                                    }
                               }
                               result=result+"</div>";
                               result=result+"<div style='float:left;width:15%;'>";
                               if (mode===1) {
                                   result=result+"<a href='#' style='color:red;' onclick='deletemessage("+res[i].id+",1);'>Delete</a>";
                               } else {
                                   result=result+"<a href='#' style='color:red;' onclick='deletemessage("+res[i].id+",2);'>Delete</a>";
                               }
                               result=result+"</div>";
                               result=result+"<div class='clear'></div>";
                               result=result+"</div>"


                           }
                           if (mode===1) {
                                $('.panel-outgoing-messages').html(result);
                                $('.personal').show();
                           } else {
                                $('.panel-incoming-messages').html(result);
                           }


              });

   return false;
}

function editpost(id) {
   $('.panel-all-your-posts').hide();

   $.ajax({
                     method: "POST",
                     url: "https://divorcesus.com/readpost",
                     data: { post_id:id}
   }).done(function( msg ) {
      $('#post_id').attr('value',msg.id);
      $('#edit_post_title').attr('value',msg.title);
      $('#edit_category_id').attr('value',msg.category.id);
      $('#edit_link').attr('value',msg.link);
      $('.errors').html('');
      $('#mceu_13').removeClass("mce-tinymce mce-container mce-panel");
      $('#edit_post_wrapper').html('<textarea name=edit_post_body" id="edit_post_body" width="20"  /></textarea>');
       
      $('#edit_post_body').html(msg.body);
      //tinyMCE.activeEditor.setContent(msg.body); 
      $('#postbody').attr('value',msg.body); 
      $('#edit_post').attr('style','display:block;');

      //tinyMCE.activeEditor.setContent("BBB");
      $('#editpost').show();
      $('#allposts').hide();
   });
   return false;
}

function editcomment(comment_id,post_id,comment_body) {

   //tinyMCE.execCommand('mceRemoveControl', true, 'edit_comment_body');

   var code = "<a href='#'"+
              " style='color:red;'"+
              " onclick='postcomments("+
              +post_id
              +");'>Back</a><br/><br/>";

   $('#comments_comment_id').attr('value',comment_id);
   $('#comments_post_id').attr('value',post_id);
   $('.panel-posts').html(code);
   $('#commentform').show();
   $('#mceu_13').css('width','90%');
   $('#mceu_13').css('margin-left','5%');
   $('#mceu_13').removeClass("mce-tinymce mce-container mce-panel");
   $('#edit_comment_wrapper').html('<textarea name="commentbody" id="edit_comment_body" width="20"  /></textarea>');
   $("#edit_comment_body").attr('value',comment_body);
   tinyMCE.activeEditor.setContent("AAA");
   return false;
}

function deletecomment(comment_id,post_id) {
    $('.panel-posts').html('<a href="#" style="color:red;" onclick="restoreposts('+post_id+');">Back</a>');

              $.ajax({
                     method: "GET",
                     url: "https://divorcesus.com/deletecomment?comment_id="+comment_id+"&post_id="+post_id,
                     data: {}
              }).done(function( msg ) {
                           var result = '<a href="#" style="color:red;" onclick="restoreposts('+post_id+');">Back</a><br/><br/>';

                       for(var i=0;i<msg.comments.length;i++) {
                           result=result+"<div style='width:99%;min-height:70px;'>";

                           result=result+"<div style='float:left;width:5%;'>";
                           result=result+msg.comments[i].id;
                           result=result+"</div>";

                           result=result+"<div style='float:left;width:12%;'>";
                           result=result+"<img src='"+msg.comments[i].avatar+"' class='avatar-small' />";
                           result=result+"</div>";

                           result=result+"<div style='float:left;width:15%;'>";
                           result=result+msg.comments[i].username;
                           result=result+"</div>";

                           result=result+"<div style='float:left;width:48%;'>";
                           result=result+msg.comments[i].body;
                           result=result+"</div>";


                           result=result+"<div style='float:left;width:8%;'>";
                           var call = "editcomment("+msg.comments[i].id+","+post_id+","+msg.comments[i].body+");";
                           call = call.replace(/'/g, '"');   
                           call = call.replace(/""/g, '"');
                           result=result+"<a href='#'";
                           result=result+" onclick='"+call+"'";
                           result=result+" style='color:blue;'>Edit</a>";
                           result=result+"</div>";


                           result=result+"<div style='float:left;width:10%;'>";
                           result=result+"<a href='#' style='color:red;' onclick='deletecomment("+msg.comments[i].id+","+post_id+");'>Delete</a>";
                           result=result+"</div>";



                           result=result+"<div class='clear'></div>";
                           result=result+"</div>"
                       }

                       $('.panel-posts').html(result);
                            
              });

    return false;


}

function postcomments(post_id) {
    $('#commentform').hide();
    $('.panel-posts').html('<a href="#" style="color:red;" onclick="restoreposts('+post_id+');">Back</a>');

              $.ajax({
                     method: "GET",
                     url: "https://divorcesus.com/getcomments?post_id="+post_id,
                     data: {}
              }).done(function( msg ) {
                           var result = '<a href="#" style="color:red;" onclick="restoreposts('+post_id+');">Back</a><br/><br/>';

                       for(var i=0;i<msg.comments.length;i++) {
                           result=result+"<div style='width:99%;min-height:70px;'>";

                           result=result+"<div style='float:left;width:5%;'>";
                           result=result+msg.comments[i].id;
                           result=result+"</div>";

                           result=result+"<div style='float:left;width:12%;'>";
                           result=result+"<img src='"+msg.comments[i].avatar+"' class='avatar-small' />";
                           result=result+"</div>";

                           result=result+"<div style='float:left;width:15%;'>";
                           result=result+msg.comments[i].username;
                           result=result+"</div>";

                           result=result+"<div style='float:left;width:48%;'>";
                           result=result+msg.comments[i].body;
                           result=result+"</div>";

                           result=result+"<div style='float:left;width:8%;'>";
                           var call = "editcomment("+msg.comments[i].id+","+post_id+",\'"+msg.comments[i].body+"\');";
                           call = call.replace(/'/g, '"');
                           call = call.replace(/""/g, '"');
                           
                           result=result+"<a href='#'";
                           result=result+" onclick='"+call+"'";
                           result=result+" style='color:blue;'>Edit</a>";
                           result=result+"</div>";


                           result=result+"<div style='float:left;width:10%;'>";
                           result=result+"<a href='#' style='color:red;' onclick='deletecomment("+msg.comments[i].id+","+post_id+");'>Delete</a>";
                           result=result+"</div>";



                           result=result+"<div class='clear'></div>";
                           result=result+"</div>"
                       }

                       $('.panel-posts').html(result);
              });

    return false;
}


function restoreposts(post_id) {
              $('#commentform').hide();
              $.ajax({
                     method: "POST",
                     url: "https://divorcesus.com/getposts",
                     data: {}
              }).done(function( msg ) {
                       var result = '';

                       for(var i=0;i<msg.length;i++) {
                           result=result+"<div style='width:96%;padding-top:0.6em; padding-bottom:0.6em;'>";
                           result=result+"<div style='float:left;width:2%;'>&nbsp;</div>";
                           result=result+"<div style='float:left;width:5%;'>";
                           result=result+msg[i].id;
                           result=result+"</div>";
                           result=result+"<div style='float:left;width:45%;'>";
                           result=result+msg[i].title;
                           result=result+"</div>";
/*  
                           result=result+"<div style='float:left;width:30%;'>";
                           result=result+msg[i].link;
                           result=result+"</div>";
*/
                           result=result+"<div style='float:left;width:15%;'>";
                           result=result+"<a href='#' onclick='editpost("+msg[i].id+");'  style='color:blue;'>Edit</a>";
                           result=result+"</div>";


                           result=result+"<div style='float:left;width:15%;'>";
                           result=result+"<a href='#' style='color:red;' onclick='deletepost("+msg[i].id+");'>Delete</a>";
                           result=result+"</div>";

                           result=result+"<div style='float:left;width:15%;'>";
                           result=result+"<a href='#' style='color:red;' onclick='postcomments("+msg[i].id+");'>Comments</a>";
                           result=result+"</div>";


                           result=result+"<div class='clear'></div>";
                           result=result+"</div>"
                       }


                       $('.panel-posts').html(result);
              });
    return false;
}

function read_receiver(username) {
     var xhReq = new XMLHttpRequest();
     xhReq.open("GET", "https://divorcesus.com/users?username="+username, false);
     xhReq.send(null);
     var data = JSON.parse(xhReq.responseText);
     if (data[0]==undefined) {
         return -1;
     }
     var user_id = new Number(data[0].id);
     document.getElementById("receiver_id").value = user_id;
     return user_id;
}

function deletepost(post_id) {
              $.ajax({
                     method: "POST",
                     url: "https://divorcesus.com/deleteblog",
                     data: { post_id:post_id}
              }).done(function( msg ) {
                       var result = '';

                       for(var i=0;i<msg.length;i++) {

                           result=result+"<div style='width:96%;padding-top:0.6em; padding-bottom:0.6em;'>";
                           result=result+"<div style='float:left;width:2%;'>&nbsp;</div>";

                           result=result+"<div style='float:left;width:5%;'>";
                           result=result+msg[i].id;
                           result=result+"</div>";
   
                           result=result+"<div style='float:left;width:45%;'>";
                           result=result+msg[i].title;
                           result=result+"</div>";

                           result=result+"<div style='float:left;width:15%;'>";
                           result=result+"<a href='#' onclick='editpost("+msg[i].id+");'  style='color:blue;'>Edit</a>";
                           result=result+"</div>";


                           result=result+"<div style='float:left;width:15%;'>";
                           result=result+"<a href='#' style='color:red;' onclick='deletepost("+msg[i].id+");'>Delete</a>";
                           result=result+"</div>";
                            
                           result=result+"<div style='float:left;width:15%;'>";
                           result=result+"<a href='#' style='color:red;' onclick='postcomments("+msg[i].id+");'>Comments</a>";
                           result=result+"</div>";


                           result=result+"<div class='clear'></div>";
                           result=result+"</div>"
                       }
                       $('.panel-posts').html(result);
              });

}

new Vue ({
        el: '#private_message', 

        data: {
          message_id:'',
          receiver_id:'',
          message_title:'',
          message_body:''  
        },

        methods: {

          edit: function (msg) {

          },

          send_message: function (msg) {
               
              var username = document.getElementById('target-customer').value;
              if (username.length > 0) {
                  var receiver_id = read_receiver(username);
              } else {
                  var receiver_id = document.getElementById("receiver_id").value;
              }

              $.ajax({
                     method: "POST",
                     url: "https://divorcesus.com/sendmessage/",
                     data: { title: document.getElementById("message_title").value,
                             receiver_id: receiver_id, 
                             body: document.getElementById("message_body").value}
              }).done(function( msg ) {
                           var result = '';
                           var res = msg.messages;
                            
                           for(var i = 0; i < res.length; i++) {
                            
                               result=result+"<div style='float:left;width:20%;'>";
                               result=result+res[i].reciever;
                               result=result+"</div>";
                               result=result+"<div style='float:left;width:20%;'>";
                               result=result+res[i].time_sent;
                               result=result+"</div>";
                               result=result+"<div style='float:left;width:29%;'>";
                               result=result+res[i].title;
                               result=result+"</div>";
                               result=result+"<div style='float:left;width:15%;'>";
                               result=result+'Resend';
                               result=result+"</div>";
                               result=result+"<div style='float:left;width:15%;'>";
                               result=result+"<a href='#' style='color:red;' onclick='deletemessage("+res[i].id+",1);'>Delete</a>";
                               result=result+"</div>";
                               result=result+"<div class='clear'></div>";
                               result=result+"</div>"


                           }
                           
                           $('.panel-outgoing-messages').html(result);
                           openmenu('outgoing');
              });  
          }

        },
        validators: {
          nonempty: { // `nonempty` custom validator local registration
              message: function (field) {
                return 'invalid "' + field + '" must be non-empty at least 10 characters long'
              },
              check: function (str) {
                   return !(!str || 10 > str.length);
              }
          },
          numeric: { // `numeric` custom validator local registration
            message: 'invalid numeric value',
            check: function (val) {
              return /^[-+]?[0-9]+$/.test(val)
            }
          },
          url: { // `url` custom validator local registration
            message: function (field) {
              return 'invalid "' + field + '" url format field'
            },
            check: function (val) {
              return /^(http\:\/\/|https\:\/\/)(.{4,})$/.test(val)
            }
          }
        }

});


new Vue ({
          el: '#commentform',
          data: {
              comments_post_id:'',
              comments_comment_id:'',
          },
          methods: {
              edit: function(msg) {

                      $.ajax({
                             method: "POST",
                             url: "https://divorcesus.com/savecomment/",
                             data: {"comment_id":$('#comments_comment_id').val(),"post_id":$('#comments_post_id').val(),"body":$('#edit_comment_body').val()}
                      }).done(function( msg ) {

                           $('#commentform').hide();
                           var post_id = $('#comments_post_id').val();
                           var result = '<a href="#" style="color:red;" onclick="restoreposts('+post_id+');">Back</a><br/><br/>';

                       for(var i=0;i<msg.comments.length;i++) {
                           result=result+"<div style='width:99%;min-height:70px;'>";

                           result=result+"<div style='float:left;width:5%;'>";
                           result=result+msg.comments[i].id;
                           result=result+"</div>";

                           result=result+"<div style='float:left;width:12%;'>";
                           result=result+"<img src='"+msg.comments[i].avatar+"' class='avatar-small' />";
                           result=result+"</div>";

                           result=result+"<div style='float:left;width:15%;'>";
                           result=result+msg.comments[i].username;
                           result=result+"</div>";

                           result=result+"<div style='float:left;width:48%;'>";
                           result=result+msg.comments[i].body;
                           result=result+"</div>";

                           result=result+"<div style='float:left;width:8%;'>";
                           var call = "editcomment("+msg.comments[i].id+","+post_id+",'"+msg.comments[i].body+"');";
                           call = call.replace(/'/g, '"');


                           result=result+"<a href='#'";
                           result=result+" onclick='"+call+"'";
                           result=result+" style='color:blue;'>Edit</a>";
                           result=result+"</div>";


                           result=result+"<div style='float:left;width:10%;'>";
                           result=result+"<a href='#' style='color:red;' onclick='deletecomment("+msg.comments[i].id+","+post_id+");'>Delete</a>";
                           result=result+"</div>";



                           result=result+"<div class='clear'></div>";
                           result=result+"</div>"
                       }

                       $('.panel-posts').html(result);
                });          

              }
          },
          validators: {
          }
         });

new Vue({
    el: '#edit-billing-address',
    data: {
        address_id: '',
        name_or_company: 'name_or_company',
        address_1: 'address 1',
        address_2: 'address 2',
        city: 'city',
        state: 'state',
        country: 'country',
        zip_or_postal: 'zip',
        nickname: 'nickname',
        make_default: 'true',
    },
    methods: {
        edit: function(msg) {

        },


        submitbilling: function(msg) {
               var update = this.make_default;
               var address = {'nickname': this.nickname,
                              'address_id': $('#edit-address-id').val(),
                              'name_or_company': this.name_or_company,
                              'address_1': this.address_1,
                              'address_2': this.address_2,
                              'city': this.city,
                              'country': this.country,
                              'state': $("#edit-state-province").val(),
                              'zip_or_postal': this.zip_or_postal,
                              'make_default': this.make_default,
                              'user_id': $('#user_id').val()};
               $.ajax({
                       method: "POST",
                       url: "https://divorcesus.com/addbilling/",
                       data:  JSON.stringify(address)
               }).done(function( msg ) {
                           $("#edit-billing-address").hide()
                           $("#add-billing-address-body").hide();
                           $("#billing-addresses").show();
                           openmenu('billingaddresses');


                           var tg = update;
                           var l = document.getElementById('edit-make-default-billing');

                           if (tg==true && $(l).val()=='on') {
                                   $(l).click();
                           }


                           var result = '';
                       for(var i = 0; i < msg.length; i++) {
                           result=result+"<div style='width:96%;padding-top:0.6em;padding-bottom:0.6em;'>";
                           result=result+"<div style='float:left;width:2%;'>&nbsp;</div>";
                           result=result+"<div style='float:left;width:20%;'>";
                           result=result+msg[i].nickname;
                           result=result+"</div>";
                           result=result+"<div style='float:left;width:48%;'>";
                           result=result+msg[i].address1+", "+msg[i].address2+", "+msg[i].city;
                           result=result+"</div>";
                           result=result+"<div style='float:left;width:10%;'>";
                           if (msg[i].is_default==true) {
                              result = result+"<span class='checkmark'>"+
                                              "<div class='checkmark_circle'></div>"+
                                              "<div class='checkmark_stem'></div>"+
                                              "<div class='checkmark_kick'></div>"+
                                              "</span>";

                           } else {
                              result = result+"<span class='checkmark'>"+
                                              "<div class='checkmark_circle_false'></div>"+
                                              "<div class='checkmark_stem'></div>"+
                                              "<div class='checkmark_kick'></div>"+
                                              "</span>";
                           }
                           result=result+"</div>";
                           result=result+"<div style='float:left;width:10%;'>";
                           result=result+"<a href='#' onclick='editaddress("+msg[i].id+");' style='color:blue; text-decoration:none;'>Edit</a>";
                           result=result+"</div>";
                           result=result+"<div style='float:left;width:10%;'>";
                           result=result+"<a href='#' onclick='deleteaddress("+msg[i].id+");' style='color:red; text-decoration:none;'>Delete</a>";
                           result=result+"</div>";
                           result=result+"<div class='clear'></div>";
                           result=result+"</div>";
                       }
                       $("#billing-addresses").html(result);



               });
        }
   },
   validators: {
          nonempty: { // `nonempty` custom validator local registration
              message: function (field) {
                return 'invalid "' + field + '" must be non-empty at least 1 characters long'
              },
              check: function (str) {
                   return !(!str || 1 > str.length);
              }
          }
   }

   });

new Vue({
    el: '#customerprofile',
    data: {
       username: '',
       first_name: '',
       middle_name: '',
       last_name: '',
       email: '',
       phone: '',
       bio: '',
    },
    created: function() {
    },
    methods: {
       edit_profile: function(msg) {
       },

       submit_profile: function(msg) {
       }
    },
    validators: {
    
          nonempty: { // `nonempty` custom validator local registration
              message: function (field) {
                return 'invalid "' + field + '" must be non-empty at least 1 characters long'
              },
              check: function (str) {
                   return !(!str || 1 > str.length);
              }
          },
          numeric: { // `numeric` custom validator local registration
            message: 'invalid numeric value',
            check: function (val) {
              return /^[-+]?[0-9]+$/.test(val)
            }
          },
          url: { // `url` custom validator local registration
            message: function (field) {
              return 'invalid "' + field + '" url format field'
            },
            check: function (val) {
              return /^(http\:\/\/|https\:\/\/)(.{4,})$/.test(val)
            }
          }
    }           

});
new Vue({
    el: '#paymentmethod',

    data: {
        payment_method_id: '',
        associated_address_id: '',
        credit_card: '',
        name_on_card: '',
        cvc: '',
        expiration_date: '',
        make_default: 'true',
    },

    created: function() {
    },

    methods: {
        edit: function(msg) {

        },
        submitpaymentmethod: function(msg) {

        }
    }
});
new Vue({
    el: '#billingaddress',
    data: {
        address_id: '',
        name_or_company: 'name_or_company',
        address_1: 'address 1',
        address_2: 'address 2',
        city: 'city',
        state: 'state',
        country: 'country',
        zip_or_postal: 'zip',
        nickname: 'nickname',
        make_default: 'true',
    },
    created: function () {
               var user_id = $('#user_id').val();
               $.ajax({
                       method: "GET",
                       url: "https://divorcesus.com/addresses/?user_id="+user_id
               }).done(function( msg ) {

                       $("#add-billing-address-body").hide();
                       $("#billing-addresses").show();

                       var result = '';
                       for(var i = 0; i < msg.length; i++) {
                           result=result+"<div style='width:96%;padding-top:0.6em;padding-bottom:0.6em;'>";
                           result=result+"<div style='float:left;width:2%;'>&nbsp;</div>";
                           result=result+"<div style='float:left;width:20%;'>";
                           result=result+msg[i].nickname;
                           result=result+"</div>";
                           result=result+"<div style='float:left;width:48%;'>";
                           result=result+msg[i].address1+", "+msg[i].address2+", "+msg[i].city;
                           result=result+"</div>";
                           result=result+"<div style='float:left;width:10%;'>";
                           if (msg[i].is_default==true) {
                              result = result+"<span class='checkmark'>"+
                                              "<div class='checkmark_circle'></div>"+
                                              "<div class='checkmark_stem'></div>"+
                                              "<div class='checkmark_kick'></div>"+
                                              "</span>";

                           } else {
                              result = result+"<span class='checkmark'>"+
                                              "<div class='checkmark_circle_false'></div>"+
                                              "<div class='checkmark_stem'></div>"+
                                              "<div class='checkmark_kick'></div>"+
                                              "</span>";
                           }

                           result=result+"</div>";
                           result=result+"<div style='float:left;width:10%;'>";
                           result=result+"<a href='#' onclick='editaddress("+msg[i].id+");' style='color:blue; text-decoration:none;'>Edit</a>";
                           result=result+"</div>";
                           result=result+"<div style='float:left;width:10%;'>";
                           result=result+"<a href='#' onclick='deleteaddress("+msg[i].id+");' style='color:red; text-decoration:none;'>Delete</a>";
                           result=result+"</div>";
                           result=result+"<div class='clear'></div>";
                           result=result+"</div>";
                       }
                       $("#billing-addresses").html(result);              
               });

    },
    methods: {
        edit: function(msg) {
            
        },

        
        submitbilling: function(msg) {
               var address = {'nickname': this.nickname,
                              'address_id': 0,
                              'name_or_company': this.name_or_company, 
                              'address_1': this.address_1, 
                              'address_2': this.address_2, 
                              'city': this.city,
                              'country': this.country,
                              'state': this.state,
                              'zip_or_postal': this.zip_or_postal,
                              'make_default': this.make_default,
                              'user_id': $('#user_id').val()}
               $.ajax({
                       method: "POST",
                       url: "https://divorcesus.com/addbilling/",
                       data:  JSON.stringify(address)
               }).done(function( msg ) {
                       $("#billing-addresses-panel").show();
                       $("#add-billing-address-body").hide();
                       $("#billing-addresses").show();
                       $("#edit-billing-address").hide();

                       var result = '';
                       for(var i = 0; i < msg.length; i++) {
                           result=result+"<div style='width:96%;padding-top:0.6em;padding-bottom:0.6em;'>";
                           result=result+"<div style='float:left;width:2%;'>&nbsp;</div>";
                           result=result+"<div style='float:left;width:20%;'>";
                           result=result+msg[i].nickname;
                           result=result+"</div>";
                           result=result+"<div style='float:left;width:48%;'>";
                           result=result+msg[i].address1+", "+msg[i].address2+", "+msg[i].city;
                           result=result+"</div>";
                           result=result+"<div style='float:left;width:10%;'>";

                           if (msg[i].is_default==true) {
                              result = result+"<span class='checkmark'>"+
                                              "<div class='checkmark_circle'></div>"+
                                              "<div class='checkmark_stem'></div>"+
                                              "<div class='checkmark_kick'></div>"+
                                              "</span>";

                           } else {
                              result = result+"<span class='checkmark'>"+
                                              "<div class='checkmark_circle_false'></div>"+
                                              "<div class='checkmark_stem'></div>"+
                                              "<div class='checkmark_kick'></div>"+
                                              "</span>";
                           }

                           result=result+"</div>";
                           result=result+"<div style='float:left;width:10%;'>";
                           result=result+"<a href='#' onclick='editaddress("+msg[i].id+");' style='color:blue; text-decoration:none;'>Edit</a>";
                           result=result+"</div>";
                           result=result+"<div style='float:left;width:10%;'>";
                           result=result+"<a href='#' onclick='deleteaddress("+msg[i].id+");' style='color:red; text-decoration:none;'>Delete</a>";
                           result=result+"</div>";
                           result=result+"<div class='clear'></div>";
                           result=result+"</div>";
                       }
                       $("#billing-addresses").html(result);
               });


        },
        onReset: function() {

        },
        addnew: function() {

        },
        delete: function(id) {
            alert(id);
        }
    },
    validators: {
          nonempty: { // `nonempty` custom validator local registration
              message: function (field) {
                return 'invalid "' + field + '" must be non-empty at least 1 characters long'
              },
              check: function (str) {
                   return !(!str || 1 > str.length);
              }
          }
    }
});

new Vue({
        el: '#edit-appform',
        data: {
          post_id:'',
          link:'',
          posttitle:'',
          postbody:'',
          category_id:''        
        },
        methods: {
          edit: function (msg) {
          },
          onReset: function () {
            this.$resetValidation()
          },
          editblog: function() {



              $.ajax({
                     method: "POST",
                     url: "https://divorcesus.com/savepost",
                     data: { title: $('#posttitle').val(),post_id: $('#post_id').val(),category_id:$('#category_id').val(), body: this.postbody, link:$('#link').val()}
              }).done(function( msg ) {
                       var result = '';
                       for(var i=0;i<msg.length;i++) {
                           result=result+"<div style='width:96%;'>";
                           result=result+"<div style='float:left;width:2%;'>&nbsp;</div>";
                           result=result+"<div style='float:left;width:5%;'>";
                           result=result+msg[i].id;
                           result=result+"</div>";
                           result=result+"<div style='float:left;width:30%;'>";
                           result=result+msg[i].title;
                           result=result+"</div>";
                           result=result+"<div style='float:left;width:30%;'>";
                           result=result+msg[i].link;
                           result=result+"</div>";

                           result=result+"<div style='float:left;width:10%;'>";
                           result=result+"<a href='#' onclick='editpost("+msg[i].id+");'  style='color:blue;'>Edit</a>";
                           result=result+"</div>";


                           result=result+"<div style='float:left;width:10%;'>";
                           result=result+"<a href='#' style='color:red;' onclick='deletepost("+msg[i].id+");'>Delete</a>";
                           result=result+"</div>";


                           result=result+"<div style='float:left;width:10%;'>";
                           result=result+"<a href='#' style='color:red;' onclick='postcomments("+msg[i].id+");'>Comments</a>";
                           result=result+"</div>";

                           result=result+"<div class='clear'></div>";
                           result=result+"</div>"
                       }


                       $('.panel-posts').html(result);
              });


          },
          submitblog: function(){
           //   $('.newpost').hide();

              alert(this.posttitle+' and '+this.postbody+' and '+this.category_id+' and '+this.link);
              
              $.ajax({
                     method: "POST",
                     url: "https://divorcesus.com/postblog",
                     data: { title: this.posttitle,category_id:this.category_id, body: this.postbody, link: this.link}
              }).done(function( msg ) {
                       var result = '';
                       for(var i=0;i<msg.length;i++) {
                           result=result+"<div style='width:96%;'>";
                           result=result+"<div style='float:left;width:2%;'>&nbsp;</div>";
                           result=result+"<div style='float:left;width:5%;'>";
                           result=result+msg[i].id;
                           result=result+"</div>";
                           result=result+"<div style='float:left;width:30%;'>";
                           result=result+msg[i].title;
                           result=result+"</div>";
                           result=result+"<div style='float:left;width:30%;'>";
                           result=result+msg[i].link;
                           result=result+"</div>";

                           result=result+"<div style='float:left;width:10%;'>";
                           result=result+"<a href='#' onclick='editpost("+msg[i].id+");'  style='color:blue;'>Edit</a>";
                           result=result+"</div>";


                           result=result+"<div style='float:left;width:10%;'>";
                           result=result+"<a href='#' style='color:red;' onclick='deletepost("+msg[i].id+");'>Delete</a>";
                           result=result+"</div>";

                           result=result+"<div style='float:left;width:10%;'>";
                           result=result+"<a href='#' style='color:red;' onclick='postcomments("+msg[i].id+");'>Comments</a>";
                           result=result+"</div>";


                           result=result+"<div class='clear'></div>";
                           result=result+"</div>"
                       }
 
                       $('.newpost .panel-all-your-posts').css('display','block');
                       $('#appform').css('display','none');
                       $('#commentform').css('display','none');
                       //$('.card').show();


                       $('.panel-posts').html(result);

              });


          } 
        },
        validators: {
          nonempty: { // `nonempty` custom validator local registration
              message: function (field) {
                return 'invalid "' + field + '" must be non-empty at least 10 characters long'
              },
              check: function (str) {
                   return !(!str || 10 > str.length);
              }
          },
          numeric: { // `numeric` custom validator local registration
            message: 'invalid numeric value',
            check: function (val) {
              return /^[-+]?[0-9]+$/.test(val)
            }
          },
          url: { // `url` custom validator local registration
            message: function (field) {
              return 'invalid "' + field + '" url format field'
            },
            check: function (val) {
              return /^(http\:\/\/|https\:\/\/)(.{4,})$/.test(val)
            }
          }
        }
      })


new Vue({
        el: '#appform',
        data: {
          post_id:'',
          link:'',
          posttitle:'',
          postbody:'',
          category_id:''        
        },
        methods: {
          edit: function (msg) {
          },
          onReset: function () {
            this.$resetValidation()
          },
          editblog: function() {
              $.ajax({
                     method: "POST",
                     url: "https://divorcesus.com/savepost",
                     data: { title: $('#posttitle').val(),post_id: $('#post_id').val(),category_id:$('#category_id').val(), body: this.postbody, link:$('#link').val()}
              }).done(function( msg ) {
                       var result = '';
                       for(var i=0;i<msg.length;i++) {
                           result=result+"<div style='width:96%;'>";
                           result=result+"<div style='float:left;width:2%;'>&nbsp;</div>";
                           result=result+"<div style='float:left;width:5%;'>";
                           result=result+msg[i].id;
                           result=result+"</div>";
                           result=result+"<div style='float:left;width:30%;'>";
                           result=result+msg[i].title;
                           result=result+"</div>";
                           result=result+"<div style='float:left;width:30%;'>";
                           result=result+msg[i].link;
                           result=result+"</div>";

                           result=result+"<div style='float:left;width:10%;'>";
                           result=result+"<a href='#' onclick='editpost("+msg[i].id+");'  style='color:blue;'>Edit</a>";
                           result=result+"</div>";


                           result=result+"<div style='float:left;width:10%;'>";
                           result=result+"<a href='#' style='color:red;' onclick='deletepost("+msg[i].id+");'>Delete</a>";
                           result=result+"</div>";


                           result=result+"<div style='float:left;width:10%;'>";
                           result=result+"<a href='#' style='color:red;' onclick='postcomments("+msg[i].id+");'>Comments</a>";
                           result=result+"</div>";

                           result=result+"<div class='clear'></div>";
                           result=result+"</div>"
                       }


                       $('.panel-posts').html(result);
              });


          },
          submitblog: function(){
           //   $('.newpost').hide();

              $.ajax({
                     method: "POST",
                     url: "https://divorcesus.com/postblog",
                     data: { title: $('#posttitle').val(),category_id:$('#category_id').val(), body: this.postbody, link:$('#link').val()}
              }).done(function( msg ) {
                       var result = '';
                       for(var i=0;i<msg.length;i++) {
                           result=result+"<div style='width:96%;'>";
                           result=result+"<div style='float:left;width:2%;'>&nbsp;</div>";
                           result=result+"<div style='float:left;width:5%;'>";
                           result=result+msg[i].id;
                           result=result+"</div>";
                           result=result+"<div style='float:left;width:30%;'>";
                           result=result+msg[i].title;
                           result=result+"</div>";
                           result=result+"<div style='float:left;width:30%;'>";
                           result=result+msg[i].link;
                           result=result+"</div>";

                           result=result+"<div style='float:left;width:10%;'>";
                           result=result+"<a href='#' onclick='editpost("+msg[i].id+");'  style='color:blue;'>Edit</a>";
                           result=result+"</div>";


                           result=result+"<div style='float:left;width:10%;'>";
                           result=result+"<a href='#' style='color:red;' onclick='deletepost("+msg[i].id+");'>Delete</a>";
                           result=result+"</div>";

                           result=result+"<div style='float:left;width:10%;'>";
                           result=result+"<a href='#' style='color:red;' onclick='postcomments("+msg[i].id+");'>Comments</a>";
                           result=result+"</div>";


                           result=result+"<div class='clear'></div>";
                           result=result+"</div>"
                       }
 
                       $('.newpost .panel-all-your-posts').css('display','block');
                       $('#appform').css('display','none');
                       $('#commentform').css('display','none');
                       //$('.card').show();


                       $('.panel-posts').html(result);

              });


          } 
        },
        validators: {
          nonempty: { // `nonempty` custom validator local registration
              message: function (field) {
                return 'invalid "' + field + '" must be non-empty at least 10 characters long'
              },
              check: function (str) {
                   return !(!str || 10 > str.length);
              }
          },
          numeric: { // `numeric` custom validator local registration
            message: 'invalid numeric value',
            check: function (val) {
              return /^[-+]?[0-9]+$/.test(val)
            }
          },
          url: { // `url` custom validator local registration
            message: function (field) {
              return 'invalid "' + field + '" url format field'
            },
            check: function (val) {
              return /^(http\:\/\/|https\:\/\/)(.{4,})$/.test(val)
            }
          }
        }
      })
