var counter = 0;
var first_name = '';
var fullname = '';
var email = '';
var modal_submit_register = 'Register';  
var modal_submit_password = 'Reset Password';  
var modal_submit_login    = 'Login';
 // register modal component
Vue.config.devtools = true;
Vue.component('v-select', VueSelect.VueSelect);
Vue.component('onload', {
    props: [],
    template: '<span>Start Now!</span>',
    created: function () {
        this.load();
    },
    methods: {
        load() {
            this.$emit('load');
        }
    }
});

var packages = new Hash();
var states = {};
states[2] = "New York";
states[1] = "New Jersey";

var divorcetypes = {};
divorcetypes['Uncontested'] = 2;
divorcetypes['Contested'] = 1;

function Hash(){
    var length=0;
    this.add = function(key, val){
         if(this[key] == undefined)
         {
           length++;
         }
         this[key]=val;
    }; 
    this.length = function(){
        return length;
    };
}

function qualify_step_zero(state) {
   qvm.state = state;
   $('#state-selected').attr('value', state);
   $('#state-displayed').html(states[state]);
}

function toggle_service(service_id) {

   if ($("#package_open_"+service_id).val() == 0) {
       $("#package_open_"+service_id).attr('value', 1);
       $("#services_"+service_id).css('display', 'block');
       $("#toggle_"+service_id).html('x');
   } else {
       $("#package_open_"+service_id).attr('value', 0);
       $("#services_"+service_id).css('display', 'none');
       $("#toggle_"+service_id).html('v');
   }

   return false;
}

function price_changed(id, pack_id, price) {
   $('#selected-package-id').attr('value', pack_id);
   $('#selected-price').attr('value', price);
   return false;
}

var featured = new Vue({
  el: '#featured-packages',
  data: {
     package_selected: ''
  },
  created: function () {

  },
  methods: {

  },
  mounted:function() {

         let url_ny = 'https://divorcesus.com/packages/?package_type!=3&state=2';
         var pkg = {};

         $.get(url_ny, function(msg) {
             let result = "<h4> New York Packages </h4>"+
                          "<table class='tables'>"+
                          "<tr>"+
                          "<th class='bg1 lg'>Package</th>"+
                          "<th class='bg1 text-center'>Price</th>"+
                          "</tr>";
               
             for(var i=0;i<msg.length;i++) {
                   var str = "<tr>"+ 
                             "<td class='lg'>"+msg[i].title+"</td>"+
                             "<td class='text-center'><a href='#'>"+msg[i].price+"</a></td>"+
                             "</tr>";
                   result = result + str;
             }
             result = result + "</table>";
             $("#new_york_packages").html(result);
         });

         let url_nj = 'https://divorcesus.com/packages/?package_type!=3&state=1';
         var pkg = {};

         $.get(url_nj, function(msg) {
             let result = "<h4> New Jersey Packages </h4>"+
                          "<table class='tables'>"+
                          "<tr>"+
                          "<th class='bg2 lg'>Package</th>"+
                          "<th class='bg2 text-center'>Price</th>"+
                          "</tr>";

             for(var i=0;i<msg.length;i++) {
                   var str = "<tr>"+
                             "<td class='lg'>"+msg[i].title+"</td>"+
                             "<td class='text-center'><a href='#'>"+msg[i].price+"</a></td>"+
                             "</tr>";
                   result = result + str;
             }
             result = result + "</table>";
             $("#new_jersey_packages").html(result);
         });





         let url_other_ny = 'https://divorcesus.com/packages/?package_type=3&state=2';
         var pkg = {};

         $.get(url_other_ny, function(msg) {
             let result = "<h4> New York Other Packages </h4>"+
                          "<table class='tables'>"+
                          "<tr>"+
                          "<th class='bg3 lg'>Package</th>"+
                          "<th class='bg3 text-center'>Price</th>"+
                          "</tr>";

             for(var i=0;i<msg.length;i++) {
                   var str = "<tr>"+
                             "<td class='lg'>"+msg[i].title+"</td>"+
                             "<td class='text-center'><a href='#'>"+msg[i].price+"</a></td>"+
                             "</tr>";
                   result = result + str;
             }
             result = result + "</table>";
             $("#new_york_other_packages").html(result);


         });

         let url_other_nj = 'https://divorcesus.com/packages/?package_type=3&state=1';
         var pkg = {};

         $.get(url_other_nj, function(msg) {
             let result = "<h4> Other New Jersey Packages </h4>"+
                          "<table class='tables'>"+
                          "<tr>"+
                          "<th class='bg4 lg'>Package</th>"+
                          "<th class='bg4 text-center'>Price</th>"+
                          "</tr>";

             for(var i=0;i<msg.length;i++) {
                   var str = "<tr>"+
                             "<td class='lg'>"+msg[i].title+"</td>"+
                             "<td class='text-center'><a href='#'>"+msg[i].price+"</a></td>"+
                             "</tr>";
                   result = result + str;
             }
             result = result + "</table>";
             $("#new_jersey_other_packages").html(result);

         });

    
 
  }
});

var qvm = new Vue({
  el: '#qualify-stepone',
  data: {
    options: ['Contested', 'Uncontested'],
    state: '',
    user_id:'',
    is_spouse_location_known:'',
    are_there_children: '',
    does_spouse_agree:'',
    package_type: 1,
    package_location:'',
    package_price:'',
    package_selected: '',
    email:'',
    phone:'',
    first:'',
    last:'',
    fullname:'',
    is_military:'',
    user_id:'',
    packages: new Hash(),
    showModal: false,
    showNewCommentModal: false
  },
  created: function () {
  },
  methods: {
    packagechange: function (p) {
         let divorce_type = divorcetypes[p];
         this.state =  $('#state-selected').val();
         this.package_type = divorce_type; 
         let url = 'https://divorcesus.com/packages/?package_type='+this.package_type+'&state='+this.state;
         var pkg = {};
           $.get(url, function(msg) {
                     let result = "<div style='width:100%;'>";
                     for(var i=0;i<msg.length;i++) {

                         packages.add(msg[i].id, msg[i].title); 
                         var str = "<div style='float:left;width:4%;margin-bottom:1.2em;'>";
                         str = str + "<input type='hidden' id='selected-package-id' name='selected-package-id' value='0'/>";
                         str = str + "<input type='hidden' id='selected-price' name='selected-price' value='0'/>";
                         str = str + "<input type='hidden' id='package_open_"+i+"' name='package_open_"+i+"' value='0'/>";
                         str = str + "<input type='radio' onclick='price_changed("+i+","+msg[i].id+","+msg[i].price+")'  name='package_selected' value='"+
                                    msg[i].id+"'>";
                         str = str + "</div>";
                         str = str + "<div style='float:left;width:30%;margin-bottom:1.2em;'>"+msg[i].title+"</div>";
                         str = str + "<div style='float:left;width:6%;margin-bottom:1.2em;'>"+msg[i].price+"</div>";
                         str = str + "<div style='float:left;width:59%;margin-bottom:1.2em;'>"
                         str = str + "<div style='width:100%;'>"+msg[i].description+"</div>";
                         str = str + "<div class='clear'></div>";
                         str = str + "<div style='width:80%; float:left;'>Services Included</div>";
                         str = str + "<div style='width:15%; float:left;'>Price</div>";
                         str = str + "<div id='toggle_"+i+"' style='width:4%; float:left;' onclick='toggle_service("+i+");'>v</div>";
                         str = str + "<div class='clear'></div>";
                         str = str + "<div id='services_"+i+"' style='width:100%; display: none;'>";
                        
                         for(var j=0; j<msg[i].services.length; j++) {
                             str = str + "<div style='float:left;width:80%;'> - ";
                             str = str + msg[i].services[j].title;
                             str = str + "</div>";
                             str = str + "<div style='float:left;width:19%;'>";
                             str = str + msg[i].services[j].price;
                             str = str + "</div>";
                             str = str + "<div class='clear'></div>";
                         }

                         str = str + "</div>";
                         str = str + "</div>";
                         str = str + "</div>";      
                         str = str + "<div class='clear'></div>";
                         result = result + str;

                     }
                     result = result + "</div>";
                     $("#packages-choices").html(result);
                     this.packages = packages;

                     $.get('https://divorcesus.com/states', function(msg) {
                         let result = "<select id='select-state' v-model='state' class='styled-select slate' style='width:100%;' >";
                         for(var i=0;i<msg.length;i++) {
                             result =  result+'<option value="'+msg[i].id+'">'+msg[i].name+'</option>';
                         }
                         result = result + "</select>";
                         $("#qualify-state-choices").html(result);
                    });

                    $.get('https://divorcesus.com/countries', function(msg) {
                         let result = "<select id='select-country' v-model='country' class='styled-select slate' style='width:100%;' >";
                         for(var i=0;i<msg.length;i++) {
                             result =  result+'<option value="'+msg[i].id+'">'+msg[i].name+'</option>';
                         }
                         result = result + "</select>";
                         $("#qualify-country-choices").html(result);
                    });


            });
    
         
    },


    submitone: function (event) {
               this.package_price = $('#selected-price').val();
               this.package_selected = $('#selected-package-id').val();
  
               this.is_spouse_location_known = $('#is_spouse_location_known').is(":checked") ? 'yes' : 'no';
               this.are_there_children = $('#are_there_children').is(":checked") ? 'yes' : 'no';
               this.does_spouse_agree = $('#does_spouse_agree').is(":checked") ? 'yes' : 'no';
               this.is_military = $('#is_military').is(":checked") ? 'yes' : 'no';
               this.state = $('#state-selected').val();
               this.first = $('#first').val();
               this.last = $('#last').val();
               this.email = $('#email').val();
               this.user_id = $("#current-user-id").val();    
               qvm2.options = this.options;
               qvm2.user_id = this.user_id;
               qvm2.email = email;
               qvm2.package_price = this.package_price;
               qvm2.package_selected = this.package_selected;
               qvm2.packages = packages;
               $("#final-qualify-state").html("<h4><strong>State: "+states[this.state]+"</strong></h4>");

               $('#final-package-selected').html("<h4><strong>Package Selected: "+packages[this.package_selected]+"</strong></h4>");
 
               $('#final-package-price').html("<h4><strong>Price: $"+this.package_price+"</strong></h4>");

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
      this.state = jQuery("#state-selected").val();
      this.is_spouse_location_known = 'yes';
      this.user_id = $("#current-user-id").val();
  }

})


var qvm2 = new Vue({
  el: '#qualify-steptwo',

  data: {
    options: [],
    package_price:'',
    package_selected: '',
    user_id:'',
    state:'',
    does_qualify:'',
    agree_to_start: '',
    is_spouse_location_known:'',
    are_there_children: '',
    does_spouse_agree:'',
    is_military:'',
    package_type:'',
    email:'',
    phone:'',
    first:'',
    last:'',
    packages: {},
    fullname:'',
    showModal: false,
    showNewCommentModal: false,
    active: null
  },

  methods: {
    submitzero: function (event) {
    },

    submitone: function (event) {
           this.does_qualify = 'NO'
           this.state = $('#state-selected').val();
    },
    submittwo: function (event) {
           this.state = qvm.state;
           this.package_selected = qvm.package_selected;
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
           qvm3.package_selected = this.package_selected;
           $("#step_three_package").html(this.packages[this.package_selected]);
           $("#step_three_state").html(states[this.state]);
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
    package_selected: '',
    package_location:'',
    first:'',
    last:'',
    packages: {}
  },

  methods: {
    submitzero: function (event) {
    },

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
    package_selected: '',
    first:'',
    last:'',
    cardnumber:'',
    cardtype:'',
    expirationmonth:'',
    expirationyear:'',
  },
  methods: {
    submitzero: function (event) {
    },

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
    package_selected: '',
    cardnumber:'',
    cardtype:'',
    expirationmonth:'',
    expirationyear:''
  },

  methods: {
    submitzero: function (event) {
    },

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
    package_selected: '',
    cardnumber:'',
    cardtype:'',
    expirationmonth:'',
    expirationyear:''
  },

  methods: {
    submitzero: function (event) {
    },

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
    package_selected: '',
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
   el: '#ask-stepone',
   data: {
     is_verified: false,
     pre_verified: '',
     full_name:'',
     email:'',
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
   el: '#ask-steptwo',
   data: {
     is_verified: false,
     pre_verified: '',
     full_name:'',
     email:'',
     message: '',
     subject: '',
     time_asked: '',
     agreement: '',
     agreed_note: '',
     agreed: false
   },
   methods: {
       submitone: function (event) {
       },

       submittwo: function (event) {
           this.email = $("#ask_email").val();
           this.full_name = $("#ask_full_name").val();
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
   el: '#ask-stepthree',
   data: {     
     is_verified: false,
     pre_verified: '',
     full_name:'',
     email:'',
     message: '',
     subject: '',
     time_asked: '',
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
           $.get('https://divorcesus.com/asktemplates/1/', function(data){
               $("#ask-agreement-container").html(data.agreement);
           });

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
   el: '#ask-stepfour',
   data: {
     is_verified: false,
     pre_verified: '',
     full_name:'',
     email:'',
     message: '',
     subject: '',
     time_asked: '',
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

           $("#final_email").html(this.email);
           $("#final_full_name").html(this.full_name);
           $("#final_subject").html(this.subject);
           $("#final_message").html(this.message);

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
   el: '#ask-stepfive',
   data: {
     is_verified: false,
     pre_verified: '',
     full_name:'',
     email:'',
     message: '',
     subject: '',
     time_asked: '',
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

         $.get('https://divorcesus.com/sendmail?email='+this.email+'&subject='+this.subject+'&message='+this.message+'&name='+this.full_name, function(data)
                {
                     if (data.message =='success')  {
                           $( "div.success" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
                           $("#ask-stepfive-submit").html("<button class='btn4' v-scroll-to='{el: \"#page\", offset: -120,}'  onclick='on_mobile_home(); return false;'  id='ask_step_five'>Home</button>");
                     }
                    this.email='';
                    this.phone='';
                    this.message='';
                    this.name='';
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
});


var consultone = new Vue({
   el: '#consult-stepone',
   data: {
     country: '',
     state: '',
     cardtype: '',
     is_verified: false,
     pre_verified: '',
     full_name:'',
     email:'',
     message: '',
     subject: '',
     time_asked: '',
     agreement: '',
     agreed_note: '',
     agreed: false,
     consultancytype: '',
     cardnumber: '',
     day: '',
     month: '',
     year: '',
     address1: '',
     address2: '',
     city: '',
     phone: '',
     zip: ''
   },
   methods: {
       reset_price: function (event) {
       },
       submitone: function (event) {

           $.get('https://divorcesus.com/consulttypes', function(msg) {
                     let result = "<div>";
                     for(var i=0;i<msg.length;i++) {
                         str = "<div style='float:left;width:5%;margin-bottom:1.2em;'>";
                         str = str + "<input type='hidden' id='consultancy-type-"+msg[i].id+"' value='"+msg[i].price+"' />";
                         str= str + "<input type='radio' onclick='resetprice("+msg[i].price+","+msg[i].id+")'  v-model='consultancytype'  name='consultancytype' value='"+
                               msg[i].id+"'></div><div style='float:left;width:94%;margin-bottom:1.2em;'>"+msg[i].description+"</div><div class='clear'></div>";
                         result = result + str
                     }
                     result = result + "</div>";
                     $("#service-choices").html(result);
            });

            $.get('https://divorcesus.com/cardtypes', function(msg) {
                     let result = "<select v-model='cardtype' id='select-card' class='styled-select slate' style='width:100%;' >";
                     for(var i=0;i<msg.length;i++) {
                         result =  result+'<option value="'+msg[i].id+'">'+msg[i].card+'</option>';
                     }
                     result = result + "</select>";
                     $("#card-choices").html(result);
            });

            $.get('https://divorcesus.com/states', function(msg) {
                     let result = "<select id='select-state' v-model='state' class='styled-select slate' style='width:100%;' >";
                     for(var i=0;i<msg.length;i++) {
                         result =  result+'<option value="'+msg[i].id+'">'+msg[i].name+'</option>';
                     }
                     result = result + "</select>";
                     $("#state-choices").html(result);
            });

            $.get('https://divorcesus.com/countries', function(msg) {
                     let result = "<select id='select-country' v-model='country' class='styled-select slate' style='width:100%;' >";
                     for(var i=0;i<msg.length;i++) {
                         result =  result+'<option value="'+msg[i].id+'">'+msg[i].name+'</option>';
                     }
                     result = result + "</select>";
                     $("#country-choices").html(result);
            });
        
 
    
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
       },

       errorCallback: function(event) {
       },

       validConfirm: function(event) {
       }

   },
   mounted:function() {
   }
});


var consulttwo = new Vue({
   el: '#consult-steptwo',
   data: {
     country: '',
     state: '',
     cardtype: '',
     is_verified: false,
     pre_verified: '',
     full_name:'',
     email:'',
     message: '',
     subject: '',
     time_asked: '',
     agreement: '',
     agreed_note: '',
     agreed: false,
     consultancytype: '',
     cardnumber: '',
     cvv: '',
     day: '',
     month: '',
     year: '',
     address1: '',
     address2: '',
     city: '',
     phone: '',
     zip: ''
  },
   methods: {

       submitone: function (event) {
       },

       submittwo: function (event) {
         this.full_name = $('#consult_full_name').val();
         this.cardtype = $('#select-card').val();
         this.state = $('#select-state').val();
         this.country = $('#select-country').val();
         this.zip = $('#consult_zip').val();
         this.phone = $('#consult_phone').val();         
         this.address1 = $('#consult_address1').val();
         this.address2 =  $('#consult_address2').val();
         this.city = $('#consult_city').val();
         this.year = $('#consult_year').val();
         this.month = $('#consult_month').val();
         this.day =  $('#consult_day').val();
         this.cardnumber =  $('#consult_cardnumber').val();
         this.cvv = $('#consult_cvv').val();

         consultthree.full_name = this.full_name;
         consultthree.cardtype = this.cardtype;
         consultthree.state = this.state;
         consultthree.country = this.country;
         consultthree.zip = this.zip;
         consultthree.phone = this.phone;
         consultthree.address1 = this.address1;
         consultthree.address2 = this.address2;
         consultthree.city = this.city;
         consultthree.year = this.year;
         consultthree.month = this.month;
         consultthree.day = this.day;
         consultthree.cardnumbe = this.cardnumber; 
         consultthree.cvv = this.cvv;

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
       },

       errorCallback: function(event) {
       },

       validConfirm: function(event) {
       }

   },
   mounted:function() {
   },
   data() {
      return {
         items: [
              {name: 'apple', price: '7'},
              {name: 'orange', price: '12'}
         ]
   }
}
});

var consultthree = new Vue({
   el: '#consult-stepthree',
   data: {
     country: '',
     state: '',
     cardtype: '',
     is_verified: false,
     pre_verified: '',
     full_name:'',
     email:'',
     message: '',
     subject: '',
     time_asked: '',
     agreement: '',
     agreed_note: '',
     agreed: false,
     consultancytype: '',
     cardnumber: '',
     cvv: '',
     day: '',
     month: '',
     year: '',
     address1: '',
     address2: '',
     city: '',
     phone: '',
     zip: ''
   },
   methods: {

       submitone: function (event) {
       },

       submittwo: function (event) {
       },

       submitthree: function (event) {
         consultfour.full_name = this.full_name;
         consultfour.cardtype = this.cardtype;
         consultfour.state = this.state;
         consultfour.country = this.country;
         consultfour.zip = this.zip;
         consultfour.phone = this.phone;
         consultfour.address1 = this.address1;
         consultfour.address2 = this.address2;
         consultfour.city = this.city;
         consultfour.year = this.year;
         consultfour.month = this.month;
         consultfour.day = this.day;
         consultfour.cardnumbe = this.cardnumber;
         consultfour.cvv = this.cvv;
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
       }

   },
   mounted:function() {
   }
});


var consulttfour = new Vue({
   el: '#consult-stepfour',
   data: {
     country: '',
     state: '',
     cardtype: '',
     is_verified: false,
     pre_verified: '',
     full_name:'',
     email:'',
     message: '',
     subject: '',
     time_asked: '',
     agreement: '',
     agreed_note: '',
     agreed: false,
     consultancytype: '',
     cardnumber: '',
     cvv: '',
     day: '',
     month: '',
     year: '',
     address1: '',
     address2: '',
     city: '',
     phone: '',
     zip: ''
   },
   methods: {

       submitone: function (event) {
       },

       submittwo: function (event) {
       },

       submitthree: function (event) {
       },

       submitfour: function (event) {
         consultfive.full_name = this.full_name;
         consultfive.cardtype = this.cardtype;
         consultfive.state = this.state;
         consultfive.country = this.country;
         consultfive.zip = this.zip;
         consultfive.phone = this.phone;
         consultfive.address1 = this.address1;
         consultfive.address2 = this.address2;
         consultfive.city = this.city;
         consultfive.year = this.year;
         consultfive.month = this.month;
         consultfive.day = this.day;
         consultfive.cardnumbe = this.cardnumber;
         consultfive.cvv = this.cvv;
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
       }

   },
   mounted:function() {
   }
});


var consultfive = new Vue({
   el: '#consult-stepfive',
   data: {
     country: '',
     state: '',
     cardtype: '',
     is_verified: false,
     pre_verified: '',
     full_name:'',
     email:'',
     message: '',
     subject: '',
     time_asked: '',
     agreement: '',
     agreed_note: '',
     agreed: false,
     consultancytype: '',
     cardnumber: '',
     cvv: '',
     day: '',
     month: '',
     year: '',
     address1: '',
     address2: '',
     city: '',
     phone: '',
     zip: ''
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
         consultsix.full_name = this.full_name;
         consultsix.cardtype = this.cardtype;
         consultsix.state = this.state;
         consultsix.country = this.country;
         consultsix.zip = this.zip;
         consultsix.phone = this.phone;
         consultsix.address1 = this.address1;
         consultsix.address2 = this.address2;
         consultsix.city = this.city;
         consultsix.year = this.year;
         consultsix.month = this.month;
         consultsix.day = this.day;
         consultsix.cardnumbe = this.cardnumber;
         consultsix.cvv = this.cvv;
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
       }

   },
   mounted:function() {
   }
});


var consultsix = new Vue({
   el: '#consult-stepsix',
   data: {
     country: '',
     state: '',
     cardtype: '',
     is_verified: false,
     pre_verified: '',
     full_name:'',
     email:'',
     message: '',
     subject: '',
     time_asked: '',
     agreement: '',
     agreed_note: '',
     agreed: false,
     consultancytype: '',
     cardnumber: '',
     cvv: '',
     day: '',
     month: '',
     year: '',
     address1: '',
     address2: '',
     city: '',
     phone: '',
     zip: ''
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
         consultseven.full_name = this.full_name;
         consultseven.cardtype = this.cardtype;
         consultseven.state = this.state;
         consultseven.country = this.country;
         consultseven.zip = this.zip;
         consultseven.phone = this.phone;
         consultseven.address1 = this.address1;
         consultseven.address2 = this.address2;
         consultseven.city = this.city;
         consultseven.year = this.year;
         consultseven.month = this.month;
         consultseven.day = this.day;
         consultseven.cardnumbe = this.cardnumber;
         consultseven.cvv = this.cvv;
       },

       submitseven: function (event) {
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


var consultseven = new Vue({
   el: '#consult-stepseven',
   data: {
     country: '',
     state: '',
     cardtype: '',
     is_verified: false,
     pre_verified: '',
     full_name:'',
     email:'',
     message: '',
     subject: '',
     time_asked: '',
     agreement: '',
     agreed_note: '',
     agreed: false,
     consultancytype: '',
     cardnumber: '',
     cvv: '',
     day: '',
     month: '',
     year: '',
     address1: '',
     address2: '',
     city: '',
     phone: '',
     zip: ''
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
