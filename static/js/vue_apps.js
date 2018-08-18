var payment_visited = new Array(false, false, false, false, false);
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
        alert("CLOSING");
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
    package_type:'',
    package_location:'',
    package_price:'',
    email:'',
    phone:'',
    first:'',
    last:'',
    fullname:'',
    is_military:'',
  },
  methods: {
    submitone: function (event) {
              
               this.$set('is_spouse_location_known',$('#is_spouse_location_known').val());
               this.$set('are_there_children',$('#are_there_children').val());
               this.$set('does_spouse_agree',$('#does_spouse_agree').val());
               this.$set('is_military',$('#is_military').val());

               this.$set('state',$('#state-selected').val());
               this.$set('first',$('#first').val());
               this.$set('last',$('#last').val());
               this.$set('email',$('#email').val());
               $("#final-qualify-state").html("<h4><strong>"+$('#state-selected').val()+"</strong></h4>");
               

               if(!$('#is_spouse_location_known').is(":checked") || !$('#does_spouse_agree').is(":checked")) {
                      $('#final_does_qualify').html("<h4><strong>Congratulations! You qualify to use our contested divorce package!</strong></h4>");
                      this.$set('package_type','contested');
                      this.$set('package_price','159.00');
               }          

               else {
                      $('#final_does_qualify').html("<h4><strong>Congratulations! You qualify to use our uncontested divorce package!</strong></h4>");
                      this.$set('package_type','uncontested');  
                      this.$set('package_price','249.00');
               }


    },

    submittwo: function (event) {
    },

    submitthree: function (event) {
    },

    submitfour: function (event) {
    },

    submitfive: function (event) {
    },

    submitsix: function (event) {
    },

    submitseven: function (event) {
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
    package_type:'',
    package_price:'',
    email:'',
    phone:'',
    first:'',
    last:'',
    fullname:'',
    showModal: false,
    showNewCommentModal: false,
    active: null,
  },

  methods: {
    submitone: function (event) {
           this.$set('does_qualify','NO');
           this.$set('state',$('#state-selected').val());
    },
    submittwo: function (event) {
           this.$set('state', qvm.state);
           this.$set('package_price', qvm.package_price);
           this.$set('package_type',qvm.package_type);
           $("#step_three_package").html(this.package_type);
           $("#step_three_state").html(this.state);
           $("#step_three_price").html(this.package_price);   
    },

    submitthree: function (event) {
               $("#step_four_package").html(this.package_type);
               $("#step_four_state").html(this.state);
               $("#step_four_price").html(this.package_price);//this.package_price);
               $("#step_four_email").html(this.email);
               $("#step_four_first").html(this.first);
               $("#step_four_last").html(this.last);
               $("#step_four_phone").html(this.phone);
    },

    submitfour: function (event) {
    },

    submitfive: function (event) {
    },

    submitsix: function (event) {
    },

    submitseven: function (event) {
    },

    successCallback: function(event) {
    },

    errorCallback: function(event) {
    },

    validConfirm: function(event) {
    },
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
  ready:function() {
      this.$set('does_qualify','NO');
      this.$set('state',$('#state-selected').val());

  }

})

var qvm3 = new Vue({
  el: '#qualify-stepthree',

  data: {
    email:'',
    phone:'',
    fullname: '',
    does_qualify:'',
    agree_to_start: '',
    is_spouse_location_known:'',
    are_there_children: '',
    does_spouse_agree:'',
    is_military:'',
    package_type:'',
    package_price:'',
    package_location:'',
    first:'',
    last:'',
  },

  methods: {
    submitone: function (event) {
           this.$set('does_qualify','NO');
           this.$set('state',$('#state-selected').val());
    },

    submittwo: function (event) {

    },

    submitthree: function (event) {
               this.$set('phone',$('#stepthree_phone').val());
               this.$set('email',$('#stepthree_email').val());
               this.$set('fullname',$('#fullname').val());
               this.$set('state', qvm2.state);
               this.$set('package_price', qvm2.package_price);
               this.$set('package_type',qvm2.package_type);
               this.$set('first', $('#stepthree_first').val());
               this.$set('last', $('#stepthree_last').val()); 

               $("#step_four_package").html(this.package_type);
               $("#step_four_state").html(this.state);
               $("#step_four_price").html(this.package_price);//this.package_price);
               $("#step_four_email").html(this.email);
               $("#step_four_first").html(this.first);
               $("#step_four_last").html(this.last);
               $("#step_four_phone").html(this.phone);

    },

    submitfour: function (event) {
    },

    submitfive: function (event) {
    },

    submitsix: function (event) {
    },

    submitseven: function (event) {
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
      this.$set('phone',$('#phone').val());
      this.$set('email',$('#email').val());
      this.$set('fullname',$('#fullname').val());
      this.$set('first',$('#fist').val());
      this.$set('last',$('#last').val());
      this.$set('package_location',$('#package_location').val());
  }

});

var qvm4 = new Vue({
  el: '#qualify-stepfour',

  data: {
    email:'',
    phone:'',
    state:'',
    city:'',
    zip:'',
    address1:'',
    address2:'',
    fullname: '',
    does_qualify:'',
    agree_to_start: '',
    is_spouse_location_known:'',
    are_there_children: '',
    does_spouse_agree:'',
    is_military:'',
    package_type:'',
    package_price:'',
    first:'',
    last:'',
    cardnumber:'',
    cardtype:'',
    expirationmonth:'',
    expirationyear:'',
  },
  methods: {
    submitone: function (event) {
    },

    submittwo: function (event) {
    },

    submitthree: function (event) {
    },

    submitfour: function (event) {
               this.$set('phone',qvm3.phone);
               this.$set('email',qvm3.email);
               this.$set('fullname',$('#fullname').val());
               this.$set('state', qvm2.state);
               this.$set('package_price', qvm2.package_price);
               this.$set('package_type',qvm2.package_type);
               this.$set('first', $('#stepfour_first').val());
               this.$set('last', $('#stepfour_last').val());
               this.$set('cardnumber',$('#cardnumber').val());
               this.$set('cardtype',$('#cardtype').val());
               this.$set('expirationmonth',$('#expirationmonth').val());
               this.$set('expirationyear',$('#expirationyear').val());

               qvm5.$set('email',this.email);
               qvm5.$set('first',this.first);
               qvm5.$set('last',this.last);
               qvm5.$set('cardtype',this.cardtype);
               qvm5.$set('cardnumber',this.cardnumber);
               qvm5.$set('expirationmonth',this.expirationmonth);
               qvm5.$set('expirationyear',this.expirationyear);
               qvm5.$set('address1',this.address1);
               qvm5.$set('address2',this.address2);
               qvm5.$set('city',this.city);
               qvm5.$set('state',this.state);
               qvm5.$set('zip',this.zip);
               qvm5.$set('phone',this.phone);

               $("#step_five_package").html(this.package_type);
               $("#step_five_state").html(this.state);
               $("#step_five_price").html(this.package_price);//this.package_price);
               $("#step_five_email").html(this.email);
               $("#step_five_first").html(this.first);
               $("#step_five_last").html(this.last);
               $("#step_five_phone").html(this.phone);
               $("#step_five_cardnumber").html(this.cardnumber);
               $("#step_five_card_type").html(this.cardtype);
               $("#step_five_expiration").html(this.expirationmonth+'/'+this.expirationyear);
               
    },

    submitfive: function (event) {
    },

    submitsix: function (event) {
    },

    submitseven: function (event) {
    }

  }

});

var qvm5 = new Vue({
  el: '#qualify-stepfive',

  data: {
    email:'',
    phone:'',
    state:'',
    city:'',
    zip:'',
    address1:'',
    address2:'',
    fullname: '',
    first:'',
    last:'',
    does_qualify:'',
    agree_to_start: '',
    is_spouse_location_known:'',
    are_there_children: '',
    does_spouse_agree:'',
    is_military:'',
    package_type:'',
    package_price:'',
    cardnumber:'',
    cardtype:'',
    expirationmonth:'',
    expirationyear:'',
  },

  methods: {
    submitone: function (event) {
    },

    submittwo: function (event) {
    },

    submitthree: function (event) {
    },

    submitfour: function (event) {
    },

    submitfive: function (event) {
               this.$set('phone',qvm4.phone);
    
               qvm6.$set('email',this.email);
               qvm6.$set('fullname',this.fullname);
               qvm6.$set('first',this.first);
               qvm6.$set('last',this.last);
               qvm6.$set('cardtype',this.cardtype);
               qvm6.$set('cardnumber',this.cardnumber);
               qvm6.$set('expirationmonth',this.expirationmonth);
               qvm6.$set('expirationyear',this.expirationyear);
               qvm6.$set('address1',this.address1);
               qvm6.$set('address2',this.address2);
               qvm6.$set('city',this.city);
               qvm6.$set('state',this.state);
               qvm6.$set('zip',this.zip);
               qvm6.$set('phone',this.phone);

               $("#step_six_phone").attr("value",this.phone.toString());
               $("#step_six_city").attr("value",this.city.toString());
               $("#step_six_state").attr("value",this.state.toString());
               $("#step_six_zip").attr("value",this.zip.toString());
               $("#step_six_month").attr("value",this.expirationmonth.toString());
               $("#step_six_year").attr("value",this.expirationyear.toString());
               $("#step_six_email").attr("value",this.email.toString());
               $("#step_six_fullname").attr("value",this.fullname.toString());
               $("#step_six_first").attr("value",this.first.toString());
               $("#step_six_last").attr("value",this.last.toString());
               $("#step_six_cardtype").attr("value",this.cardtype.toString());
               $("#step_six_cardnumber").attr("value",this.cardnumber.toString());
               $("#step_six_address1").attr("value",this.address1.toString());
               $("#step_six_address2").attr("value",this.address2.toString());

               $("#qualify_final_email").html("<p><strong>Email: "+this.email.toString()+"</strong></p>");
               $("#qualify_final_phone").html("<p><strong>Phone: "+this.phone.toString()+"</strong></p>");
               $("#qualify_final_fullname").html("<p><strong>Full Name: "+this.fullname.toString()+"</strong></p>");
               $("#qualify_final_first").html("<p><strong>First Name: "+this.first.toString()+"</strong></p>");
               $("#qualify_final_last").html("<p><strong>Last Name: "+this.last.toString()+"</strong></p>");
               $("#qualify_final_cardtype").html("<p><strong>Card Type: "+this.cardtype.toString()+"</strong></p>");
               $("#qualify_final_cardnumber").html("<p><strong>Card Number: "+this.cardnumber.toString()+"</strong></p>");
               $("#qualify_final_expirationmonth").html("<p><strong>Expiration Month: "+this.expirationmonth.toString()+"</strong></p>");
               $("#qualify_final_expirationyear").html("<p><strong>Expiration Year: "+this.expirationyear.toString()+"</strong></p>");
               $("#qualify_final_address1").html("<p><strong>Address 1: "+this.address1.toString()+"</strong></p>");
               $("#qualify_final_address2").html("<p><strong>Address 2: "+this.address2.toString()+"</strong></p>");
               $("#qualify_final_city").html("<p><strong>City: "+this.city.toString()+"</strong></p>");
               $("#qualify_final_state").html("<p><strong>State: "+this.state.toString()+"</strong></p>");
               $("#qualify_final_zip").html("<p><strong>Zip Code: "+this.zip.toString()+"</strong></p>");

    },

    submitsix: function (event) {
    },

    submitseven: function (event) {
    }

  }

});
  
var qvm6 = new Vue({

  el: '#qualify-stepsix',

  data: {
    email:'',
    phone:'',
    state:'',
    city:'',
    zip:'',
    address1:'',
    address2:'',
    fullname: '',
    first:'',
    last:'',
    does_qualify:'',
    agree_to_start: '',
    is_spouse_location_known:'',
    are_there_children: '',
    does_spouse_agree:'',
    is_military:'',
    package_type:'',
    package_price:'',
    cardnumber:'',
    cardtype:'',
    expirationmonth:'',
    expirationyear:'',
  },

  methods: {
    submitone: function (event) {
    },

    submittwo: function (event) {
    },

    submitthree: function (event) {
    },

    submitfour: function (event) {
    },

    submitfive: function (event) {
    },

    submitsix: function (event) {
    },

    submitseven: function (event) {
    }

  }

});

var qvm7 = new Vue({

  el: '#qualify-stepseven',

  data: {
  },

  methods: {
    submitone: function (event) {
    },

    submittwo: function (event) {
    },

    submitthree: function (event) {
    },

    submitfour: function (event) {
    },

    submitfive: function (event) {
    },

    submitsix: function (event) {
    },

    submitseven: function (event) {
    }

  }

});


var vm = new Vue({
  el: '#stepone',

  data: {
    email:'',
    phone:'',
    fullname: '',
  },

  methods: {

    submitone: function (event) {
               this.$set('phone',$('#regular_phone').val());
               this.$set('email',$('#regular_email').val());
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
           vm3.$set('email',vm.email);
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

               this.$set('phone',vm.phone);
               this.$set('email',vm.email);
               vm4.$set('email',vm.email);
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
               vm4.$set('phone',vm.phone);  

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

new Vue({
  el: '#dashboard_panel',
  data: {
      total_incoming: 1,
      total_outgoing: 3,
      total_group: 0,
  },
  options: {

  },
  methods: {
   
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
         $.get('https://divorcesus.com/sendmail?email='+this.email+'&phone='+this.phone+'&message='+this.message+'&name='+this.name, function(data)
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

var news = new Vue({
  el: '#newsletter',
  data: {
      email:''
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
      },

      submit: function (event) {
        alert(this.email);
      },
      subscribe: function (event) { 
         alert(this.email);
      }
  },
  ready: function() {
  }
});

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

});

// register modal component
Vue.component('modal', {
  template: '#final-modal-template',
  props: {
    show: {
      type: Boolean,
      required: true,
      twoWay: true    
    }
  }
})

// modal to display user details
new Vue({
  el: '#final-app',
  data: {
    showModal: true,
    active: null,
    new_user: {
       email: '',
       first: '',
       last: '',
       phone: '',
       username: ''
    }
  },
  methods: {
    open: function(which, e) {
      // Prevents clicking the link from doing anything
        modal.active = which;
    },
    close: function (e) {
         
    }, 
    confirmInfo: function(e) {
         e.preventDefault();
         console.log('Confirming it ...');
    }
  }

})

// register modal component
Vue.component('modal', {
  template: '#activation-modal-template',
  props: {
    show: {
      type: Boolean,
      required: true,
      twoWay: true    
    }
  }
})

// start app
new Vue({
  el: '#activation-app',
  data: {
    showModal: true
  }
})

// register modal component
Vue.component('modal', {
  template: '#activation-required-modal-template',
  props: {
    show: {
      type: Boolean,
      required: true,
      twoWay: true
    }
  }
})

// start app
new Vue({
  el: '#activation-required-app',
  data: {
    showModal: true
  }
})


jQuery(document).ready(function() {
    
    jQuery('#add-billing-address').click(function(e) {
           jQuery('#add-billing-address-body').css('display','block');
    });

    vm.$el = document.getElementById('stepone');
    vm2.$el = document.getElementById('steptwo');
    vm3.$el = document.getElementById('stepthree');
    vm4.$el = document.getElementById('stepfour');
    vm5.$el = document.getElementById('stepfive');
    news.$el = document.getElementById('newsletter');
});
