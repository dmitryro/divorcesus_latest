var counter = 0;
var first_name = '';
var fullname = '';
var email = '';
var modal_submit_register = 'Register';  
var modal_submit_password = 'Reset Password';  
var modal_submit_login    = 'Login';
 // register modal component
Vue.config.devtools = true;

var qvm = new Vue({
  el: '#qualify-stepone',
  data: {
    state:'',
    user_id:'',
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
    user_id:'',
    showModal: false,
    showNewCommentModal: false
  },
  methods: {
    submitone: function (event) {
               this.is_spouse_location_known = $('#is_spouse_location_known').is(":checked") ? 'yes' : 'no';
               this.are_there_children = $('#are_there_children').is(":checked") ? 'yes' : 'no';
               this.does_spouse_agree = $('#does_spouse_agree').is(":checked") ? 'yes' : 'no';
               this.is_military = $('#is_military').is(":checked") ? 'yes' : 'no';
               this.state = $('#state-selected').val();
               this.first = $('#first').val();
               this.last = $('#last').val();
               this.email = $('#email').val();
               this.user_id = $("#current-user-id").val();    
               qvm2.user_id = this.user_id;
               $("#final-qualify-state").html("<h4><strong>"+$('#state-selected').val()+"</strong></h4>");

               if(this.is_spouse_location_known == 'yes' && this.does_spouse_agree == 'yes') {
                      $('#final_does_qualify').html("<h4><strong>Congratulations! You qualify to use our uncontested divorce package!</strong></h4>");
                      this.package_type = 'uncontested';
                      this.package_price = '159.00';
               }          

               else {
                      $('#final_does_qualify').html("<h4><strong>Congratulations! You qualify to use our contested divorce package!</strong></h4>");
                      this.package_type = 'contested';  
                      this.package_price = '249.00';
               }

    },

    submittwo: function (event) {
    },

    submitthree: function (event) {
    },

    submitfour: function (event) {
         alert('submitfour 1');
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
    },
    open: function(which, e) {
      // Prevents clicking the link from doing anything
        e.preventDefault();
        modal.active = which;
    },
    close: function (e) {
        alert('closing it');
        this.$emit('close');
    },
    show: function() {
        this.$emit('show');
    },

    submit: function(which, e) {
            e.preventDefault();
    }
  },
  mounted:function() {
      this.is_spouse_location_known = 'yes';
      this.user_id = $("#current-user-id").val();
  }

})


var qvm2 = new Vue({
  el: '#qualify-steptwo',

  data: {
    user_id:'',
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
           this.does_qualify = 'NO'
           this.state = $('#state-selected').val();
    },
    submittwo: function (event) {
           this.state = qvm.state;
           this.package_price = qvm.package_price;
           this.package_type = qvm.package_type;
           this.is_spouse_location_known = qvm.is_spouse_location_known;
           this.are_there_children = qvm.are_there_children;
           this.does_spouse_agree = qvm.does_spouse_agree;
           this.is_military = qvm.is_military;
           this.state = qvm.state;
           this.first = qvm.first;
           this.last = qvm.last;
           this.email = qvm.email;
           this.user_id = qvm.user_id;   
           qvm3.user_id = this.user_id;
           qvm3.package_type = this.package_type;
           qvm3.package_price = this.package_price;
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
       alert('submitfour 2');
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
        this.$emit('close');
    },
    show: function() {
        this.$emit('show');
    },

    submit: function(which, e) {
            e.preventDefault();
    }

  },
  mounted:function() {
      this.does_qualify = 'NO';
      this.state = $('#state-selected').val();
  }

})

var qvm3 = new Vue({
  el: '#qualify-stepthree',

  data: {
    user_id:'',
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
           this.does_quualify = 'NO';
           this.state = $('#state-selected').val();
    },

    submittwo: function (event) {

    },

    submitthree: function (event) {
               this.phone = $('#stepthree_phone').val();
               this.email = $('#stepthree_email').val();
               this.fullname = $('#qnameoncard').val();
               this.state = qvm2.state;
               this.package_price = qvm2.package_price;
               this.package_type = qvm2.package_type;
               this.first = $('#stepthree_first').val();
               this.last = $('#stepthree_last').val(); 
               qvm4.user_id = this.user_id;               
               qvm4.fullname = this.fullname;
               qvm4.package_type = this.package_type;
               qvm4.package_price = this.package_price;              

               $("#step_four_package").html(this.package_type);
               $("#step_four_state").html(this.state);
               $("#step_four_price").html(this.package_price);//this.package_price);
               $("#step_four_email").html(this.email);
               $("#step_four_first").html(this.first);
               $("#step_four_last").html(this.last);
               $("#step_four_phone").html(this.phone);

    },

    submitfour: function (event) {
       alert('submitfour 3');
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
  mounted:function() {
      this.does_qualify = 'NO';
      this.state = $('#state-selected').val();
      this.phone = $('#phone').val();
      this.email = $('#email').val();
      this.fullname = $('#fullname').val();
      this.first = $('#first').val();
      this.last = $('#last').val();
      this.package_location = $('#package_location').val();
  }

});

var qvm4 = new Vue({
  el: '#qualify-stepfour',

  data: {
    user_id:'',
    email:'',
    phone:'',
    state:'',
    city:'',
    zip:'',
    year: '',
    month: '',
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
               
               this.phone = qvm3.phone;
               this.email = qvm3.email;
               this.state = qvm2.state;
               this.package_price = qvm2.package_price;
               this.package_type = qvm2.package_type;
               this.first = qvm3.first;
               this.last = qvm3.last;
               this.cardnumber = $('#cardnumber').val();
               this.cardtype = $('#cardtype').val();
               this.expirationmonth = $('#expirationmonth').val();
               this.expirationyear = $('#expirationyear').val();

               qvm5.package_price = this.package_price;
               qvm5.package_type = this.package_type;
               qvm5.email = this.email;
               qvm5.first = this.first;
               qvm5.last = this.last;
               qvm5.cardtype = this.cardtype;
               qvm5.cardnumber = this.cardnumber;
               qvm5.expirationmonth = this.expirationmonth;
               qvm5.expirationyear = this.expirationyear;
               qvm5.address1 = this.address1;
               qvm5.address2 = this.address2;
               qvm5.city = this.city;
               qvm5.state = this.state;
               qvm5.zip = this.zip;
               qvm5.phone = this.phone;
               qvm5.user_id = this.user_id;
               qvm5.fullname = this.fullname;

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
    user_id:'',
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
    year: '',
    month: '',
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
               this.phone = qvm4.phone;
               qvm6.email = this.email;
               qvm6.fullname = this.fullname;
               qvm6.first = this.first;
               qvm6.last = this.last;
               qvm6.cardtype = this.cardtype;
               qvm6.cardnumber = this.cardnumber;
               qvm6.expirationmonth = this.expirationmonth;
               qvm6.expirationyear = this.expirationyear;
               qvm6.address1 = this.address1;
               qvm6.address2 = this.address2;
               qvm6.city = this.city;
               qvm6.state = this.state;
               qvm6.zip = this.zip;
               qvm6.phone = this.phone;
               qvm6.user_id = this.user_id;
               qvm6.package_type = this.package_type;
               qvm6.package_price = this.package_price;

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
    user_id:'',
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
    year:'',
    state: '',
    month: '',
    day: '',
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
	     var arr = {
		"email": this.email,
		"first": this.first,
		"last": this.last,
		"fullname": this.fullname,
		"cardtype": this.cardtype,
		"cardnumber": this.cardnumber,
		"phone": this.phone,
		"address1": this.address1,
		"address2": this.address2,
		"state": this.state,
		"zip": this.zip,
                "package_type": this.package_type,
                "package_price": this.package_price,
		"user_id": $("#current-user-id").val(),
		"month": this.expirationmonth,
		"year": this.expirationyear,
                "city": this.city};
             alert('here:'+this.package_type+' and '+this.package_price);
	     $.ajax({
		    type: "POST",
		    url: "https://divorcesus.com/paymentconfirm/",
		    crossDomain: true,
		    data: JSON.stringify(arr),
		    dataType: 'json',
		    contentType: "application/json; charset=utf-8",
		    success: function(data) {
                      alert('success');
		    },
		    error: function(data){
		      alert("failure"+data);
		   }
	      });


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
    email: '',
    first: '',
    last:  '',
    phone: '',
    state: '',
    month: '',
    year: '',
    fullname: ''
  },
  methods: {
    submitone: function () {
        if (this.phone==undefined || this.phone.toString().length==0) {
           vm2.phone = $('#phone_payments').val();
           this.phone = $('#phone_payments').val();
        } else {
           vm2.phone = this.phone;
        }

        if (this.email==undefined || this.email.toString().length==0) {
           vm2.email = $('#email_payments').val();
           this.email = $('#email_payments').val();
        } else {
           vm2.email = this.email;
        }

        if (this.first==undefined || this.first.toString().length==0) {
           vm2.first = $('#first_payments').val();
           this.first = $('#first_payments').val();
        } else {
           vm2.first = this.first;
        }

        if (this.last==undefined || this.last.toString().length==0) {
           vm2.last = $('#last_payments').val();
           this.last = $('#last_payments').val();
        } else {
           vm2.last = this.last;
        }

        vm2.state = this.state;
        $("#step_two_phone").html(this.phone.toString());
        $("#step_two_state").html(this.state.toString());
        $("#step_two_email").html(this.email.toString());
        $("#step_two_first").html(this.first.toString());
        $("#step_two_last").html(this.last.toString());
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
    },
  },
  mounted:function() {
      this.first = $('#first_payments').val();
      this.last =  $('#last_payments').val();
      this.email =  $('#email_payments').val();
      this.phone = $('#phone_payments').val();
  }
});


var vm2 = new Vue({
  el: '#steptwo',
  data: {
    email:'',
    phone:'',
    first: '',
    last: '',
    state: '',
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
           vm3.first = this.fist;
           vm3.last = this.last;
           vm3.state = this.state;
           vm3.email = this.email;
           vm3.fullname = this.fullname;
           vm3.cardtype = this.cardtype;
           vm3.cardnumber = this.cardnumber;
           vm3.expirationmonth = this.expirationmonth;
           vm3.expirationyear = this.expirationyear;
           $("#step_three_phone").html(this.phone.toString());
           $("#step_three_state").html(this.state.toString());
           $("#step_three_email").html(this.email.toString());
           $("#step_three_first").html(this.first.toString());
           $("#step_three_last").html(this.last.toString());
           $("#step_three_cardtype").html(this.cardtype.toString());
           $("#step_three_cardnumber").html(this.cardnumber.toString());
           $("#step_three_nameoncard").html(this.fullname.toString());
           $("#step_three_expiration").html(this.expirationmonth.toString()+'/'+this.expirationyear.toString());
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
  mounted:function() {
  }
  
})



var vm3 = new Vue({
  el: '#stepthree',
  data: {
    user_id:'',
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
               this.phone = vm.phone;
               this.email = vm.email;
               vm4.email = vm.email;
               vm4.fullname = this.fullname;
               vm4.cardtype = this.cardtype;
               vm4.cardnumber = this.cardnumber;
               vm4.expirationmonth = this.expirationmonth;
               vm4.expirationyear = this.expirationyear;
               vm4.address1 = this.address1;
               vm4.address2 = this.address2; 
               vm4.city = this.city;
               vm4.state = this.state;
               vm4.zip = this.zip;
               vm4.phone = vm.phone;  

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
  mounted: function() {
           this.phone=vm2.phone;
  }
})


var vm4 = new Vue({
  el: '#stepfour',
  data: {
    user_id: '',     
    email:vm3.email,
    fullname: '',
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
     this.user_id = +$('#current-user-id').val();

     var arr = {
        "email": this.email,
        "first": this.first,
        "last": this.last,
        "fullname": this.fullname,
        "cardtype": this.cardtype,
        "cardnumber": this.cardnumber,
        "phone": this.phone,
        "address1": this.address1,
        "address2": this.address2,
        "city": this.city,
        "state": this.state,
        "zip": this.zip,
        "user_id": this.user_id,
        "month": this.expirationmonth,
        "year": this.expirationyear};

     $.ajax({
            type: "POST",
            url: "https://divorcesus.com/paymentconfirm/",
            crossDomain: true,
            data: JSON.stringify(arr),
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function(data) {
            },
            error: function(data){
              alert("failure"+data);
           }
      });

    },

    successCallback: function(event) {
    },

    errorCallback: function(event) {
    },

    validConfirm: function(event) {
    }

  },
  mounted:function() {
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
       alert('submitfour 4');
    },

    submitfive: function (event) {
    },
    successCallback: function(event) {
    },

    errorCallback: function(event) {
    },

    validConfirm: function(event) {
    }

  },
  mounted:function() {
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
      this.$emit('close');  
      this.show = false;
      this.comment = '';
    },
    show: function() {
        this.$emit('show');
    },
    postComment: function () {
      // Insert AJAX call here...
       this.$emit('close');
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
      },
      subscribe: function (event) { 
      }
  },
  mounted: function() {
  }
});

// register modal component
Vue.component('modal', {
  template: '#final-modal-template',
  props: {
    show: {
      type: Boolean,
      required: true,
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
        this.$emit('close');  
    }, 
    show: function() {
        this.$emit('show');
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
    }
  },
  mounted: function () {
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
    }
  },
  mounted: function () {
    document.addEventListener("keydown", (e) => {
      if (this.show && e.keyCode == 27) {
        this.close();
      }
    });
  }
})

// start app
new Vue({
  el: '#activation-required-app',
  data: {
    showModal: true
  }
})

// register modal component
Vue.component('modal', {
  template: '#modal-template-signup',
  props: ['show'],
  mounted: function () {
    document.addEventListener("keydown", (e) => {
      if (this.show && e.keyCode == 27) {
        this.close();
      }
    });
  },
  methods: {
    close: function () {
      this.$emit('close');
      this.comment = '';
    }
  }
})

// start app
new Vue({
    el: '#signinapp',
    data: {
      showModal: false
    },
    close: function (e) {
       this.$emit('close');
    },
    show: function() {
        this.$emit('show');
    },
    submit: function(which, e) {
            e.preventDefault();
    }

});

// start app
new Vue({
    el: '#signupapp',
    data: {
      showModal: false,
      show: false
    },
    close: function (e) {
       this.$emit('close');
    },
    show: function() {
        this.$emit('show');
    },
    submit: function(which, e) {
            e.preventDefault();
    },
    methods: { 
     beforeOpen () {
        document.addEventListener('keyup', this.close)
     },

     beforeClose () {
        document.removeEventListener('keyup', this.close)
     },
     close (e) {
       if (e.keyCode === 27)  this.$emit('close');
     } 
   }
})


// start app
new Vue({
    el: '#njsignupapp',
    data: {
      showModal: false,
    },
    close: function (e) {
       this.$emit('close');
    },
    show: function() {
        this.$emit('show');
    },
    submit: function(which, e) {
            e.preventDefault();
    },
    methods: {
     beforeOpen () {
        document.addEventListener('keyup', this.close)
     },

     beforeClose () {
        document.removeEventListener('keyup', this.close)
     },
     close (e) {
       if (e.keyCode === 27)  this.$emit('close');
     }
   }
})

// start app
new Vue({
    el: '#nysignupapp',
    data: {
      showModal: false,
    },
    close: function (e) {
       this.$emit('close');
    },
    show: function() {
        this.$emit('show');
    },
    submit: function(which, e) {
            e.preventDefault();
    },
    methods: {
     beforeOpen () {
        document.addEventListener('keyup', this.close)
     },

     beforeClose () {
        document.removeEventListener('keyup', this.close)
     },
     close (e) {
       if (e.keyCode === 27)  this.$emit('close');
     }
   }
});

var askone = new Vue({
   el: '#askquestion_stepone',
   data: {
     is_verified: false,
     pre_verified: '',
     full_name:'',
     email:''
     message: '',
     subject: '',
     time_asked: '',
     agreement: '',
     agreed_note: '',
     agreed: false
   },
   methods: {
       submitone: function (event) {
           asktwo.is_verified = this.is_verified;
           asktwo.pre_verified = this.pre_verified;
       },

       submittwo: function (event) {
       },

       submitthree: function (event) {
       },

       submitfour: function (event) {
       },

       submitfive: function (event) {
       },

       successCallback: function(event) {
       },

       errorCallback: function(event) {
       },

       validConfirm: function(event) {
       }
   }  ,
   mounted:function() {
   }

});

var asktwo = new Vue({
   el: '#askquestion_steptwo',
   data: {
     is_verified: false,
     pre_verified: '',
     full_name:'',
     email:''
     message: '',
     subject: '',
     time_asked: ''
     agreement: '',
     agreed_note: '',
     agreed: false
   },
   methods: {
       submitone: function (event) {
       },

       submittwo: function (event) {
           askthree.is_verified = this.is_verified;
           askthree.pre_verified = this.pre_verified;
           askthree.full_name = this.full_name;
           askthree.email = this.email;
       },

       submitthree: function (event) {
       },

       submitfour: function (event) {
       },

       submitfive: function (event) {
       },

       successCallback: function(event) {
       },

       errorCallback: function(event) {
       },

       validConfirm: function(event) {
       }
   },
   mounted:function() {
   }
});

var askthree = new Vue({
   el: '#askquestion_stepthree',
   data: {     
     is_verified: false,
     pre_verified: '',
     full_name:'',
     email:''
     message: '',
     subject: '',
     time_asked: ''
     agreement: '',
     agreed_note: '',
     agreed: false
   },
   methods: {
       submitone: function (event) {
       },

       submittwo: function (event) {
       },

       submitthree: function (event) {
           askfour.is_verified = this.is_verified;
           askfour.pre_verified = this.pre_verified;
           askfour.full_name = this.full_name;
           askfour.email = this.email;
           askfour.message = this.message;
           askfour.subject = this.subject;
       },

       submitfour: function (event) {
       },

       submitfive: function (event) {
       },

       successCallback: function(event) {
       },

       errorCallback: function(event) {
       },

       validConfirm: function(event) {
       }
   },
   mounted:function() {
   }

})

var askfour = new Vue({
   el: '#askquestion_stepfour',
   data: {
     is_verified: false,
     pre_verified: '',
     full_name:'',
     email:''
     message: '',
     subject: '',
     time_asked: ''
     agreement: '',
     agreed_note: '',
     agreed: false
   },
   methods: {
       submitone: function (event) {
       },

       submittwo: function (event) {
       },

       submitthree: function (event) {
       },

       submitfour: function (event) {
           askfive.is_verified = this.is_verified;
           askfive.pre_verified = this.pre_verified;
           askfive.full_name = this.full_name;
           askfive.email = this.email;
           askfive.message = this.message;
           askfive.subject = this.subject;
       },

       submitfive: function (event) {
       },

       successCallback: function(event) {
       },

       errorCallback: function(event) {
       },

       validConfirm: function(event) {
       }

   },
   mounted:function() {
   }

})

var askfive = new Vue({
   el: '#askquestion_stepfive',
   data: {
     is_verified: false,
     pre_verified: '',
     full_name:'',
     email:''
     message: '',
     subject: '',
     time_asked: ''
     agreement: '',
     agreed_note: '',
     agreed: false
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
          alert(this.message);
       },

       successCallback: function(event) {
       },

       errorCallback: function(event) {
       },

       validConfirm: function(event) {
       }

   },
   mounted:function() {
   }
});




jQuery(document).ready(function() {
    
    jQuery('#add-billing-address').click(function(e) {
           jQuery('#add-billing-address-body').css('display','block');
    });

//    vm.$el = document.getElementById('stepone');
//    vm2.$el = document.getElementById('steptwo');
 //   vm3.$el = document.getElementById('stepthree');
 //   vm4.$el = document.getElementById('stepfour');
  //  vm5.$el = document.getElementById('stepfive');
  //  news.$el = document.getElementById('newsletter');
});
