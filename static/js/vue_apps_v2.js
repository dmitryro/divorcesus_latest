var counter = 0;
var first_name = '';
var nameoncard = '';
var email = '';
var modal_submit_register = 'Register';  
var modal_submit_password = 'Reset Password';  
var modal_submit_login    = 'Login';
 // register modal component
Vue.config.devtools = true;
Vue.use(SocialSharing);
var consult_visited = new Array(false, false, false, false, false, false, false, false);
var package_visited = new Array(false, false, false, false, false, false, false, false);
var payment_visited = new Array(false, false, false, false, false);
var ask_visited = new Array(false, false, false, false, false);

var packages_featured = new Hash();
var packages = new Hash();
var states = {};
states[2] = "New York";
states[1] = "New Jersey";

var divorcetypes = {};
var divorcetypes_index = {};
divorcetypes['Other'] = 3;
divorcetypes['Uncontested'] = 2;
divorcetypes['Contested'] = 1;
divorcetypes_index[1]= 'Contested';
divorcetypes_index[2] = 'Uncontested';
divorcetypes_index[3] = 'Other';
/*
var paymentmethod = new Vue({
  el: '#paymentmethod',
  data: {
    name_on_card: '',
    make_default: ''
  },
  created: function () {
  },
  mounted:function() {
  },
  methods: {
    submitpayment: function(e) {
        alert("time to save");
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
  }
});
*/


var featured = new Vue({
  el: '#featured-packages',
  data: {
    package_selected: '',
    options: ['Contested', 'Uncontested', 'Other'],
    states: ["New York", "New Jersey"],
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
    nameoncard:'',
    is_military:'',
    user_id:'',
    packages: new Hash(),
    showModal: false,
    showNewCommentModal: false,
    packages_featured: new Hash()
  },
  created: function () {

  },
  methods: {
      packageselected: function (p) {
      } 
  },
  mounted:function() {

         let url_ny = '/packages/?package_type=2&state=2';
         var pkg = {};

         $.get(url_ny, function(msg) {
             let result = "<h4> New York Uncontested Divorce Packages </h4>"+
                          "<table class='tables'>"+
                          "<tr>"+
                          "<th class='bg1 lg'>Package</th>"+
                          "<th class='bg1 text-center'>Price</th>"+
                          "</tr>";
               
             for(var i=0;i<msg.length;i++) {
                   var str = "<tr>"+ 
                     //        "<td class='lg'>"+msg[i].title+"</td>"+

                             "<td class='lg'><a href='#' onclick='package_selected(2, "+msg[i].id+","+msg[i].package_type.id+","+msg[i].price+");package_step_one();return false;'>"+msg[i].title+"</a></td>"+

                             "<td class='text-center'><a href='#' onclick='package_selected(2, "+msg[i].id+","+msg[i].package_type.id+","+msg[i].price+");package_step_one();return false;'>"+msg[i].price+"</a></td>"+
                             "</tr>";
                   result = result + str;
                   packages_featured.add(msg[i].id, msg[i].title);
             }
             result = result + "</table>";
             $("#new_york_packages").html(result);
         });

         let url_nj = '/packages/?package_type=2&state=1';
         var pkg = {};

         $.get(url_nj, function(msg) {
             let result = "<h4> New Jersey Uncontested Divorce Packages </h4>"+
                          "<table class='tables'>"+
                          "<tr>"+
                          "<th class='bg2 lg'>Package</th>"+
                          "<th class='bg2 text-center'>Price</th>"+
                          "</tr>";

             for(var i=0;i<msg.length;i++) {
                   var str = "<tr>"+
                         //    "<td class='lg'>"+msg[i].title+"</td>"+
                             "<td class='lg'><a href='#' onclick='package_selected(1, "+msg[i].id+","+msg[i].package_type.id+","+msg[i].price+");package_step_one();return false;'>"+msg[i].title+"</a></td>"+

                             "<td class='text-center'><a href='#' onclick='package_selected(1, "+msg[i].id+","+msg[i].package_type.id+","+msg[i].price+");package_step_one();return false;' >"+msg[i].price+"</a></td>"+
                             "</tr>";
                   result = result + str;
                   packages_featured.add(msg[i].id, msg[i].title);
             }
             result = result + "</table>";
             $("#new_jersey_packages").html(result);
         });

         let url_other_ny = '/packages/?package_type=3&state=2';
         var pkg = {};

         $.get(url_other_ny, function(msg) {
             let result = "<h4> Other New York Family Law Packages </h4>"+
                          "<table class='tables'>"+
                          "<tr>"+
                          "<th class='bg3 lg'>Package</th>"+
                          "<th class='bg3 text-center'>Price</th>"+
                          "</tr>";

             for(var i=0;i<msg.length;i++) {
                   var str = "<tr>"+
//                             "<td class='lg'>"+msg[i].title+"</td>"+
                             "<td class='lg'><a href='#' onclick='package_selected(2, "+msg[i].id+","+msg[i].package_type.id+","+msg[i].price+");package_step_one();return false;'>"+msg[i].title+"</a></td>"+

                             "<td class='text-center'><a href='#' onclick='package_selected(2, "+msg[i].id+","+msg[i].package_type.id+","+msg[i].price+");package_step_one();return false;' >"+msg[i].price+"</a></td>"+
                             "</tr>";
                   result = result + str;
                   packages_featured.add(msg[i].id, msg[i].title);
             }
             result = result + "</table>";
             $("#new_york_other_packages").html(result);


         });

         let url_other_nj = '/packages/?package_type=3&state=1';
         var pkg = {};

         $.get(url_other_nj, function(msg) {
             let result = "<h4> Other New Jersey Family Law Packages </h4>"+
                          "<table class='tables'>"+
                          "<tr>"+
                          "<th class='bg4 lg'>Package</th>"+
                          "<th class='bg4 text-center'>Price</th>"+
                          "</tr>";

             for(var i=0;i<msg.length;i++) {
                   var str = "<tr>"+
//                             "<td class='lg'>"+msg[i].title+"</td>"+
                             "<td class='lg'><a href='#' onclick='package_selected(1, "+msg[i].id+","+msg[i].package_type.id+","+msg[i].price+");package_step_one();return false;'>"+msg[i].title+"</a></td>"+

                             "<td class='text-center'><a href='#' onclick='package_selected(1, "+msg[i].id+","+msg[i].package_type.id+","+msg[i].price+");package_step_one();return false;' >"+msg[i].price+"</a></td>"+

                             "</tr>";
                   result = result + str;
                   packages_featured.add(msg[i].id, msg[i].title);
             }
             packages = packages_featured;
             packages_featured = packages_featured;
             result = result + "</table>";
             $("#new_jersey_other_packages").html(result);

         });

         packageChange('Uncontested'); 
 
  }
});
//packageChange('Uncontested');



var qvm = new Vue({
  el: '#qualify-stepone',
  data: {
    selected: null,
    options: ['Contested', 'Uncontested', 'Other'],
    states: ["New Jersey", "New York"],
    state: '',
    package_state: '',
    billing_state: '',
    address_state: '',
    state_code: '',
    state_name: '',
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
    nameoncard:'',
    is_military:'',
    user_id:'',
    packages: new Hash(),
    showModal: false,
    showNewCommentModal: false,
    default_id: 0,
    default_pack_id : '',
    default_price: '',  
    errors: [],
  },
  created: function () {
                         let ch = document.getElementsByClassName("dropdown-toggle").firstChild;
                         if (ch) { 
                             ch.remove();     
                             ch.innerHTML = "<span class='selected-tag'>Uncontested</span>";
                         }
                         let result = "<select id='select-package' class='styled-select slate' style='width:100%;' onchange='packageChange(this.value);'>";
                         for(var i=0;i<this.options.length;i++) {
                             result =  result+'<option value="'+this.options[i]+'">'+this.options[i]+'</option>';
                         }
                         result = result + "</select>";
                         $("#qualify-package-choices").html(result);
                         packageChange('Uncontested');
                         price_changed(this.default_id, this.default_pack_id, this.default_price);
  },
  methods: {
    packagechange: function (p) {
         let divorce_type = divorcetypes[p];
         this.state =  $('#state-selected').val();
         this.package_type = divorce_type;
         let url = '/packages/?package_type='+this.package_type+'&state='+this.state;
         var pkg = {};
           $.get(url, function(msg) {
                     let result = "<div style='width:100%;'>";
                     for(var i=0; i<msg.length; i++) {

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
                         str = str + "<div style='width:100%;'></div>";
                         str = str + "<div class='clear'></div>";
                         str = str + "<div style='width:80%; float:left;'>Services Included</div>";
                         str = str + "<div style='width:15%; float:left;'></div>";
                         str = str + "<div id='toggle_"+i+"' style='width:4%; float:left;' onclick='toggle_service("+i+");'>v</div>";
                         str = str + "<div class='clear'></div>";
                         str = str + "<div id='services_"+i+"' style='width:100%; display: none;'>";
                        
                         for(var j=0; j<msg[i].services.length; j++) {
                             str = str + "<div style='float:left;width:80%;'> - ";
                             str = str + msg[i].services[j].title;
                             str = str + "</div>";
                             str = str + "<div style='float:left;width:19%;'>";
                             str = str + "</div>";
                             str = str + "<div class='clear'></div>";
                         }


                             str = str + "<div style='float:left;width:80%;font-weight:bold;'>  ";
                             str = str + "If you have questions about this package or additional services, please don't hesitate to contact us.";
                             str = str + "</div>";
                             str = str + "<div style='float:left;width:19%;'>";
                             str = str + "</div>";
                             str = str + "<div class='clear'></div>";


                         str = str + "</div>";
                         str = str + "</div>";
                         str = str + "</div>";      
                         str = str + "<div class='clear'></div>";
                         result = result + str;

                     }
                     result = result + "</div>";
                     $("#packages-choices").html(result);

                     $.get('/states', function(msg) {
                         let result = "<select id='select-state' v-model='state' class='styled-select slate' style='width:100%;' >";
                         for(var i=0;i<msg.length;i++) {
                             result =  result+'<option value="'+msg[i].id+'">'+msg[i].name+'</option>';
                         }
                         result = result + "</select>";
                         $("#qualify-state-choices").html(result);
                    });

                    $.get('/countries', function(msg) {
                         let result = "<select id='select-country' v-model='country' class='styled-select slate' style='width:100%;' >";
                         for(var i=0;i<msg.length;i++) {
                             result =  result+'<option value="'+msg[i].id+'">'+msg[i].name+'</option>';
                         }
                         result = result + "</select>";
                         $("#qualify-country-choices").html(result);
                    });


            });
    
         
    },
    stateupdate: function() {
         let state = this.package_state;
   //      let state;
    //     if (s=='New Jersey') {
    //         state = 1;
    //     } else {
     //        state = 2;
     //    }
         if (state) { 
             $('#state-selected').attr('value', state);
         }

         qvm.state = state;
         qvm.packagechange(divorcetypes_index[qvm.package_type]);

        //packageChange('Uncontested');    
        //$('#state-selected').attr('value', this.package_state);
    },
    statechange: function(s) {
         let state;
         if (s=='New Jersey') {
             state = 1;
         } else {
             state = 2;
         }
         $('#state-selected').attr('value', state);
         qvm.state = state;
         qvm.packagechange(divorcetypes_index[qvm.package_type]);
    },


    submitone: function (event) {
        this.errors = [];
        this.package_price = $('#selected-price').val();
        this.package_selected = $('#selected-package-id').val();
 
        if (this.package_price==0) {
            this.package_price = this.default_price;
            this.package_selected = this.default_pack_id;
        }                

        this.is_spouse_location_known = $('#is_spouse_location_known').is(":checked") ? 'yes' : 'no';
        this.are_there_children = $('#are_there_children').is(":checked") ? 'yes' : 'no';
        this.does_spouse_agree = $('#does_spouse_agree').is(":checked") ? 'yes' : 'no';
        this.is_military = $('#is_military').is(":checked") ? 'yes' : 'no';
        this.state = $('#state-pricelist-selected').val();
       
        if (!this.state) {
            this.state = $('#state-selected').val();
            $('#state-pricelist-selected').attr('value', this.state);
        }

//        alert($('#from-pricing').val()+" and "+$('#state-pricelist-selected').val());
//        if ($('#from-pricing').val()) {
 //           alert("OUR CASE");
 //           this.state = $('#state-pricelist-selected').val();
 //           $('#state-selected').attr("value", this.state);
 //       }

        this.first = $('#payment-first').val();
        this.last = $('#payment-last').val();
        this.email = $('#payment-email').val();
        this.user_id = $("#current-user-id").val();    

        qvm2.last = this.last;
        qvm2.first = this.first;
        qvm2.email = this.email;
        qvm2.options = this.options;
        qvm2.user_id = this.user_id;
        qvm2.email = email;
        qvm2.package_type = this.package_type;
        qvm2.package_price = this.package_price;
 
        $("#price-to-pay").attr("value",this.package_price);
        
        qvm2.package_selected = this.package_selected;
        qvm2.packages = packages;
  
        $("#final-qualify-state").html("<strong>State: "+states[this.state]+"</strong>");

        $('#final-package-selected').html("<strong>Package Selected: "+packages[this.package_selected]+"</strong>");
 
        $('#final-package-price').html("<strong>Price: $"+this.package_price+"</strong>");


        if (this.errors.length > 0) {
            return;
        } else {
            counter = 1;
            package_visited[1] = true;
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
      price_changed(this.default_id, this.default_pack_id, this.default_price);
      $('#selected-price').attr('value', this.default_price);
      $('#selected-package-id').attr('value', this.default_pack_id);

      //let ch = document.getElementsByClassName("dropdown-toggle").firstChild;
      //ch.remove();
      packageChange('Uncontested');
      this.state = jQuery("#state-selected").val();
      this.package_state = jQuery("#state-selected").val();
      this.is_spouse_location_known = 'yes';
      this.user_id = $("#current-user-id").val();
      package_step_one();
      $('#payment-token').attr('value','');
  }

});


var qvm2 = new Vue({
  el: '#qualify-steptwo',

  data: {
    options: ['Contested', 'Uncontested', 'Other'],
    states: ["New York", "New Jersey"],
    package_price:'',
    package_selected: '',
    user_id:'',
    state:'',
    package_state: '',
    billing_state: '',
    address_state: '',
    state_code: '',
    state_name: '',
    does_qualify:'',
    agree_to_start: '',
    is_spouse_location_known:'',
    are_there_children: '',
    does_spouse_agree:'',
    is_military:'',
    package_type:'',
    reference_number: '',
    is_package_accepted: '',
    email:'',
    phone:'',
    first:'',
    last:'',
    packages: new Hash(),
    nameoncard:'',
    showModal: false,
    showNewCommentModal: false,
    active: null,
    errors: [],
  },

  methods: {
    submitzero: function (event) {
    },

    submitone: function (event) {
           this.does_qualify = 'NO'
           this.state = $('#state-selected').val();
    },
    submittwo: function (event) { 
           this.errors = [];
           var errors = [];
           if(this.is_package_accepted) {
                $('#is_package_accepted_errors').html("");
           } else {
                $( "div.package.error" ).fadeIn( 300 ).delay( 1000 ).fadeOut( 400 );
                $('#is_package_accepted_errors').html("<span class=\"package error\">Please confirm..</span>");
                errors.push("Must be accepted");
           }
 

           if (!this.reference_number) {
               $( "div.invoice.error" ).fadeIn( 300 ).delay( 1000 ).fadeOut( 400 );
               errors.push("Reference number is required");
               $('#invoice_errors').html("<span class=\"invoice error\">Pease provide a valid reference number!</span>");
               return;
           } else {

             var arr = {"invoice": this.reference_number};
             $.ajax({
                    type: "POST",
                    url: "/verifyinvoice/",
                    crossDomain: true,
                    data: JSON.stringify(arr),
                    dataType: 'json',
                    contentType: "application/json; charset=utf-8",
                    success: function(data) {
                         if (data.message =='success')  {
                            $('#payment-token').attr('value','');
                            this.state = qvm.state;
                            this.package_selected = qvm.package_selected;
                            this.package_price = qvm.package_price;
                            this.package_type = qvm.package_type;
                            this.is_spouse_location_known = qvm.is_spouse_location_known;
                            this.are_there_children = qvm.are_there_children;
                            this.does_spouse_agree = qvm.does_spouse_agree;
                            this.is_military = qvm.is_military;
                            this.state = qvm.state;
                            this.address_state = $('#select-state').val();
                            this.first = qvm.first;
                            this.last = qvm.last;
                            this.email = qvm.email;
                            this.user_id = qvm.user_id;
                            this.package_state = this.state;
                            qvm3.packages = packages;
                            qvm3.first = this.first;
                            qvm3.last = this.last;
                            qvm3.email = this.email;
                            qvm3.address_state = this.address_state;
                            qvm3.package_state = this.package_state;
                            qvm3.state = this.state;
                            qvm3.user_id = this.user_id;
                            qvm3.package_type = this.package_type;
                            qvm3.package_price = this.package_price;
                            qvm3.package_selected = this.package_selected;
                            $("#price-to-pay").attr("value",this.package_price);
                            $("#step_three_package").html(qvm.packages[this.package_selected]);
                            $("#step_three_state").html(states[this.state]);
                            $("#step_three_price").html(this.package_price);

                            if (errors.length==0) {
                                package_visited[2] = true;
                                counter = 2;
                                package_step_three();
                            }

                            return;

                         } else {
                             $( "div.invoice.error" ).fadeIn( 300 ).delay( 1000 ).fadeOut( 400 );
                             this.errors.push("Reference number is required");
                             $('#invoice_errors').html("<span class=\"invoice error\">Pease provide a valid reference number!</span>");
                         }
                    },
                    error: function(data){
                         errors.push("Invalid invoice");

                         $( "div.invoice.error" ).fadeIn( 300 ).delay( 1000 ).fadeOut( 400 );
                         $('#invoice_errors').html("<span class=\"invoice error\">Pease provide a valid reference number!</span>");

                    }
             });
             this.errors = errors;

           } 
           
           if (this.errors.length > 0) {
               return;
           }

    },

    submitthree: function (event) {
               qvm3.package_state = this.package_state;
               qvm3.package_type = packages[this.package_selected];
               qvm3.packages = packages;
               $("#step_four_package").html(packages[this.package_selected]);
               $("#step_four_state").html(this.state);
               $("#price-to-pay").attr("value",this.package_price);
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
      $('#payment-token').attr('value','');
      this.does_qualify = 'NO';
      this.state = $('#state-selected').val();
  }

})

var qvm3 = new Vue({
  el: '#qualify-stepthree',
  data: {
    states: ["New York", "New Jersey"],
    user_id:'',
    state_code: '',
    state_name: '',
    package_state: '',
    billing_state: '',
    address_state: '',
    address_city: '',
    address_address1: '',
    address_address2: '',
    address_zip: '',
    email:'',
    city:'',
    address1: '',
    address2: '',
    phone:'',
    nameoncard: '',
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
    first: '',
    last: '',
    zip: '',
    packages: new Hash(),
    errors: [],
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

               this.errors = [];
               this.phone = $('#stepthree_phone').val();
               this.email = $('#stepthree_email').val();
               this.nameoncard = $('#qnameoncard').val();
               this.package_state = qvm2.state;
               this.package_price = qvm2.package_price;
               this.package_type = this.package_selected;
               this.first = $('#stepthree_first').val();
               this.last = $('#stepthree_last').val();
               this.address_address1 = $('#qualify_address1').val();
               this.address_address2 = $('#qualify_address2').val();
               this.address_city =  $('#qualify_city').val(); 
               this.address_state = $('#select-state').val();
               this.address_zip = $('#qualify_zip').val();   
              // this.address_state = this.state;



               if (!this.first) {
                   this.errors.push("First name is required");
               }

               if (!this.last) {
                   this.errors.push("First name is required");
               }

               if (!this.city) {
                   this.errors.push("City is required");
               }

               if (!this.state) {
                   this.errors.push("State is required");
               }

               if (!this.phone) {
                   this.errors.push("Phone is required");
               }

               if (!this.email) {
                   this.errors.push("Email is required");
               }

               if (!this.address1) {
                   this.errors.push("Address1 is required");
               }




               //$("#name_on_card").html("<p>Name on Card: "+this.nameoncard.toString()+"</p>");
               qvm4.address_state = this.address_state; 
               qvm4.user_id = this.user_id;               
               qvm4.nameoncard = this.first+" "+this.last;
               $('#nameoncard-q').attr('value', this.first+" "+this.last);
               qvm4.package_state = this.package_state;
               qvm4.package_selected = this.package_selected
               qvm4.package_type = this.package_selected;
               qvm4.package_price = this.package_price;              
               qvm4.packages = packages;
               qvm4.address_address1 = this.address1;
               qvm4.address_address2 = this.address2;
               qvm4.address_city = this.city;
               qvm4.phone = this.phone;
               qvm4.email = this.email;
               qvm4.address_zip = this.zip;
               qvm4.packages = packages;
               $("#step_four_package").html(packages[this.package_selected]);
               $("#step_four_state").html(states[this.state]);
               $("#price-to-pay").attr("value",this.package_price);
               $("#step_four_price").html(this.package_price);//this.package_price);
               $("#step_four_email").html(this.email);
               $("#step_four_first").html(this.first);
               $("#step_four_last").html(this.last);
               $("#step_four_phone").html(this.phone);
























               if (this.errors.length > 0) {
                   return;
               } else {
                   counter = 3;
                   package_visited[3] = true;
                   qualify_progress_step_three();
                   qualify_next_three();
               }



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
      this.nameoncard = $('#nameoncard').val();
      this.first = $('#first').val();
      this.last = $('#last').val();
      this.package_location = $('#package_location').val();
      $('#payment-token').attr('value','');
  }

});

var qvm4 = new Vue({
  el: '#qualify-stepfour',

  data: {
    user_id:'',
    email:'',
    phone:'',
    state:'',
    package_state: '',
    billing_state: '',
    address_state: '',
    address_city: '',
    address_address1: '',
    address_address2: '',
    address_zip: '',
    state_code: '',
    state_name: '',
    city:'',
    zip:'',
    address1:'',
    address2:'',
    nameoncard: '',
    does_qualify:'',
    agree_to_start: '',
    is_spouse_location_known:'',
    are_there_children: '',
    does_spouse_agree:'',
    is_military:'',
    package_type:'',
    package_price:'',
    package_selected: '',
    token: '',
    first:'',
    last:'',
    packages: new Hash(),
    errors: [],
    stripe_errors: [],
  },
  methods: {
    redirect: function (event) {
               this.state = $('#state-selected').val();

               $("#name_on_card_by_state").html("<p>Name on Card: "+this.nameoncard.toString()+"</p>");
               $('.validation').removeClass('text-danger text-success');
               $('.validation').addClass($('.has-error').length ? 'text-danger' : 'text-success');
               this.phone = qvm3.phone;
               this.email = qvm3.email;
               this.state = qvm2.state;
               this.package_price = qvm2.package_price;
               this.package_type = qvm2.package_type;
               this.first = qvm3.first;
               this.last = qvm3.last;

               qvm5.packages = packages;
               qvm5.package_price = this.package_price;
               qvm5.package_type = this.package_type;
               qvm5.email = this.email;
               qvm5.first = this.first;
               qvm5.last = this.last;
               qvm5.address1 = this.address1;
               qvm5.address2 = this.address2;
               qvm5.city = this.city;
               qvm5.address_state = this.address_state;
               qvm5.package_state = this.package_state;
               qvm5.state = this.state;
               qvm5.zip = this.zip;
               qvm5.phone = this.phone;
               qvm5.user_id = this.user_id;
               qvm5.token = this.token;
               qvm5.nameoncard = this.nameoncard;
               qvm5.packages = packages;
               qvm5.package_selected = this.package_selected;

               $.get('/states', function(msg) {
                         let result = "<select id='select-state-stepfive' v-model='state' class='styled-select slate' style='width:100%;' >";
                         for(var i=0;i<msg.length;i++) {
                             if (msg[i].id===39) {
                                 result =  result+'<option value="'+msg[i].id+'" selected="selected">'+msg[i].name+'</option>';
                             } else {
                                 result =  result+'<option value="'+msg[i].id+'">'+msg[i].name+'</option>';
                             }
                         }
                         result = result + "</select>";
                         $("#qualify-state-stepfive-choices").html(result);
               });

               $("#step_five_package").html(packages[this.package_selected]);
               $("#step_five_state").html(states[this.package_state]);
               $("#step_five_price").html(qvm3.package_price);//this.package_price);
               $("#step_five_email").html(qvm3.email);
               $("#step_five_first").html(qvm3.first);
               $("#step_five_last").html(qvm3.last);
               $("#step_five_phone").html(qvm3.phone);

               package_visited[4] = true;
               qualify_progress_step_four();
               qualify_next_four();


    },
    submitzero: function (event) {

    },

    submitone: function (event) {
    },

    submittwo: function (event) {
    },

    submitthree: function (event) {
    },

    submitfour: function (event) {
               this.errors = [];

               $('#payment-form-package').submit();

               var cn = $('[name="cardnumber"]');

               this.token = $('#payment-token').val();
               this.nameoncard = $('#nameoncard-q').val();
               if (!this.nameoncard) {
                  this.errors.push("Name on card required");
               }

               if (cn.value.length === 0) {
                  $("#card-errors-package").html("Card number can't be empty!");
                  this.errors.push("Card number can't be empty");
               }

//               if (!this.payment_token) {
//                  this.errors.push("Payment token required");
//               }

               var displayError = document.getElementById('card-errors-package');

               if (displayError.textContent.length>0) {
                   this.errors.push("Invalid card");
               }

               if (this.errors.length > 0) {
                   return;
               } else {
                   if (this.stripe_errors.length > 0) {
                       return;
                   }
                   $('#payment-token').attr('value','');
                   counter = 4;
                   package_visited[4] = true;
                   qualify_progress_step_four();
                   qualify_next_four();
               }


               $("#name_on_card_by_state").html("<p>Name on Card: "+this.nameoncard.toString()+"</p>");
               $('.validation').removeClass('text-danger text-success');
               $('.validation').addClass($('.has-error').length ? 'text-danger' : 'text-success');
               this.phone = qvm3.phone;
               this.email = qvm3.email;
               this.state = qvm2.state;
               this.package_price = qvm2.package_price;
               this.package_type = qvm2.package_type;
               this.first = qvm3.first;
               this.last = qvm3.last;
             
               qvm5.packages = packages;
               qvm5.package_price = this.package_price;
               qvm5.package_type = this.package_type;
               qvm5.email = this.email;
               qvm5.first = this.first;
               qvm5.last = this.last;
               qvm5.address1 = this.address1;
               qvm5.address2 = this.address2;
               qvm5.city = this.city;
               qvm5.address_state = this.address_state;
               qvm5.package_state = this.package_state;
               qvm5.state = this.state;
               qvm5.zip = this.zip;
               qvm5.phone = this.phone;
               qvm5.user_id = this.user_id;
               qvm5.token = this.token;
               qvm5.nameoncard = this.nameoncard;
               qvm5.packages = packages;
               qvm5.package_selected = this.package_selected;
               $.get('/states', function(msg) {
                         let result = "<select id='select-state-stepfive' v-model='state' class='styled-select slate' style='width:100%;' >";
                         for(var i=0;i<msg.length;i++) {
                             if (msg[i].id===39) {
                                 result =  result+'<option value="'+msg[i].id+'" selected="selected">'+msg[i].name+'</option>';
                             } else {
                                 result =  result+'<option value="'+msg[i].id+'">'+msg[i].name+'</option>';
                             }
                         }
                         result = result + "</select>";
                         $("#qualify-state-stepfive-choices").html(result);
               });

               $("#step_five_package").html(packages[this.package_selected]);
               $("#step_five_state").html(states[this.package_state]);
               $("#step_five_price").html(qvm3.package_price);//this.package_price);
               $("#step_five_email").html(qvm3.email);
               $("#step_five_first").html(qvm3.first);
               $("#step_five_last").html(qvm3.last);
               $("#step_five_phone").html(qvm3.phone);
               
    },

    submitfive: function (event) {
    },

    submitsix: function (event) {
    },

    submitseven: function (event) {
    }

  },
  mounted: function() {
      $('#payment-token').attr('value',''); 
      setup_stripe_package();
     $("#card-element-package").click();
  }

});

var qvm5 = new Vue({
  el: '#qualify-stepfive',

  data: {
    user_id:'',
    email:'',
    phone:'',
    state:'',
    billing_state:'',
    package_state: '',
    address_state: '',
    address_city: '',
    address_address1: '',
    address_address2: '',
    address_zip: '',
    state_code: '',
    state_name: '',
    city:'',
    zip:'',
    address1:'',
    address2:'',
    nameoncard: '',
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
    package_selected: '',
    token: '',
    packages: new Hash(),
    errors: [],
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
               this.errors = [];
               this.phone = qvm4.phone;
               this.billing_state = $('#select-state-stepfive').val();
                
               if (!this.address1) {
                  this.errors.push("Billing address 1 required");
               }

               if (!this.city) {
                  this.errors.push("Billing city required");
               }

               if (!this.zip) {
                  this.errors.push("Billing zip required");
               }

               if (!this.state) {
                  this.errors.push("Billing state required");
               }


               if (this.errors.length > 0) {
                   return;
               } else {
                   counter = 5;
                   package_visited[5] = true;
                   qualify_progress_step_five();
                   qualify_next_five();
               }

               qvm6.email = this.email;
               qvm6.billing_address1 = this.address1;
               qvm6.billing_address2 = this.address2;
               qvm6.billing_city = this.city;
               qvm6.billing_zip = this.zip;
               qvm6.nameoncard = this.nameoncard;
               qvm6.address_address1 = this.address_address1;
               qvm6.address_address2 = this.address_address2;
               qvm6.address_city = this.address_city;
               qvm6.address_state = this.address_state;
               qvm6.address_zip = this.address_zip;
               qvm6.first = this.first;
               qvm6.last = this.last;
               qvm6.billing_address1 = this.address1;
               qvm6.billing_address2 = this.address2;
               qvm6.billing_city = this.city;
               qvm6.billing_state = this.state;
               qvm6.billing_zip = this.zip;
               qvm6.address_state = this.address_state;
               qvm6.package_state = this.package_state;
               qvm6.billing_state = $('#select-state-stepfive').val()
               qvm6.zip = this.zip;
               qvm6.phone = this.phone;
               qvm6.user_id = this.user_id;
               qvm6.package_selected = this.package_selected;
               qvm6.packages = packages;
               qvm6.package_type = this.package_type;
               qvm6.package_price = this.package_price;
               qvm6.token = this.token;
               $.get('/states/?id='+this.billing_state, function(data) {
                  // $("#state").attr("value",data[0].name.toString());
                   qvm6.billing_state = data[0].name;
                   $("#qualify_final_billing_state").html("<p><strong>State: "+data[0].name.toString()+"</strong></p>");
               });

               $.get('/states/?id='+this.address_state, function(data) {
                   qvm6.address_state = data[0].name;
                   $("#qualify_final_address_state").html("<p><strong>State: "+data[0].name.toString()+"</strong></p>");
               });


               $("#step_six_phone").attr("value",this.phone.toString());
               $("#step_six_city").attr("value",this.city.toString());
               $("#step_six_state").attr("value",states[this.state]);
               $("#step_six_zip").attr("value",this.zip.toString());
               $("#step_six_email").attr("value",this.email.toString());
               $("#step_six_nameoncard").attr("value",this.nameoncard.toString());
               $("#step_six_first").attr("value",this.first.toString());
               $("#step_six_last").attr("value",this.last.toString());
               $("#step_six_address1").attr("value",this.address1.toString());
               $("#step_six_address2").attr("value",this.address2.toString());

               $("#name_on_card").html("<p>Name on Card: "+this.nameoncard.toString()+"</p>");
               $("#qualify_final_package").html("<p><strong>Package: "+packages[this.package_selected]+"</strong></p>");
               $("#qualify_final_state").html("<p><strong>State: "+states[this.state]+"</strong></p>");
               $("#qualify_final_price").html("<p><strong>Price: "+this.package_price+"</strong></p>");
               $("#qualify_final_email").html("<p><strong>Email: "+this.email.toString()+"</strong></p>");
               $("#qualify_final_phone").html("<p><strong>Phone: "+this.phone.toString()+"</strong></p>");
               $("#qualify_final_nameoncard").html("<p><strong>Name on Card: "+this.nameoncard.toString()+"</strong></p>");
               $("#qualify_final_first").html("<p><strong>First Name: "+this.first.toString()+"</strong></p>");
               $("#qualify_final_last").html("<p><strong>Last Name: "+this.last.toString()+"</strong></p>");
               $("#qualify_final_address1").html("<p><strong>Address 1: "+this.address1.toString()+"</strong></p>");
               $("#qualify_final_address2").html("<p><strong>Address 2: "+this.address2.toString()+"</strong></p>");
               $("#qualify_final_city").html("<p><strong>City: "+this.city.toString()+"</strong></p>");
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
    billing_state:'',
    billing_zip:'',
    billing_address1: '',
    billing_address2: '',
    billing_city: '',
    package_state: '',
    address_state: '',
    address_city: '',
    address_address1: '',
    address_address2: '',
    address_zip: '',
    state_code: '',
    state_name: '',
    city:'',
    zip:'',
    address1:'',
    address2:'',
    nameoncard: '',
    first:'',
    last:'',
    state: '',
    does_qualify:'',
    agree_to_start: '',
    is_spouse_location_known:'',
    are_there_children: '',
    does_spouse_agree:'',
    is_military:'',
    token: '',
    package_type:'',
    package_price:'',
    package_selected: '',
    errors: [],
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
       //      alert(this.billing_address1);
       //      alert(this.billing_address2);
       //      alert(this.billing_city);
       //      alert(this.billing_zip);
       //      alert(this.billing_state);
             setup_stripe_one();
             this.token = $('#payment-token').val();

             this.errors = [];

             if (!this.token || this.token.length===0) {
                  this.errors.push("invalid token");
             }

             if (this.errors.length > 0) {
                 return;
             } else {
                 counter = 6;
                 package_visited[6] = true;
             }

	     var arr = {
		"email": this.email,
		"first": this.first,
		"last": this.last,
		"fullname": this.nameoncard,
		"phone": this.phone,
		"address1": this.billing_address1,
		"address2": this.billing_address2,
		"state": this.billing_state,
		"zip": this.billing_zip,
                "package_type": packages[this.package_selected],
                "package_price":  $('#price-to-pay').val(),
		"user_id": $("#current-user-id").val(),
                'token':$('#payment-token').val(),
                'amount': eval($('#price-to-pay').val()),
                "city": this.billing_city};
	        $.ajax({
		    type: "POST",
		    url: "/paymentconfirm/",
		    crossDomain: true,
		    data: JSON.stringify(arr),
		    dataType: 'json',
		    contentType: "application/json; charset=utf-8",
		    success: function(data) {
                         $(".success").fadeIn( 300 ).delay( 4500 ).fadeOut( 400 );
		    },
		    error: function(data){
		         $( ".error" ).fadeIn( 300 ).delay( 4500 ).fadeOut( 400 );
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
    package_state: '',
    billing_state: '',
    address_state: '',
    state_code: '',
    state_name: '',
    city:'',
    zip:'',
    address1:'',
    address2:'',
    nameoncard: '',
    first:'',
    last:'',
    state: '',
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

var vm_ask = new Vue({
    el: '#askwizard',
    data: {},
    methods: {
        stepone: function(event) {

            if (ask_visited[4]==true) {
                ask_visited[4] = false;
                ask_visited[3] = false;
                ask_visited[2] = false;
                ask_visited[1] = false;
                ask_step_zero();
            }


            if (ask_visited[3]==true) {
                ask_visited[3] = false;
                ask_visited[2] = false;
                ask_visited[1] = false;
                ask_step_zero();
            }

            if (ask_visited[2]==true) {
                ask_visited[2] = false;
                ask_visited[1] = false;
                ask_step_zero();
            }

            if (ask_visited[1]==true) {
                ask_visited[1] = false;
                ask_step_zero();
            }

      },
      steptwo: function(event) {
            if (ask_visited[4]==true) {
                ask_visited[4] = false;
                ask_visited[3] = false;
                ask_visited[2] = false;
                ask_step_one();
            }

            if (ask_visited[3]==true) {
                ask_visited[3] = false;
                ask_visited[2] = false;
                ask_step_one();  
            }

            if (ask_visited[2]==true) {
                ask_visited[2] = false;
                ask_step_one();
            }
      },

      stepthree: function(event) {
            if (ask_visited[4]==true) {
                ask_visited[4] = false;
                ask_visited[3] = false;
                ask_step_two();
            }

            if (ask_visited[3]==true) {
                ask_visited[3] = false;
                ask_step_two();
            }
      },

      stepfour: function(event) {
            if (ask_visited[4]==true) {
                ask_visited[4] = false;
                ask_step_three();
            }
      },
      stepfive: function(event) {}
  }


});

var vm_package = new Vue({
    el: '#packagewizard',
    data: {},
    methods: {
        stepone: function(event) {
            package_visited[0] = true;
            if (package_visited[6]==true) {
                package_visited[6] = false;
                package_visited[5] = false;
                package_visited[4] = false;
                package_visited[3] = false;
                package_visited[2] = false;
                package_visited[1] = false;
                package_step_one();
            }

            if (package_visited[5]==true) {
                package_visited[5] = false;
                package_visited[4] = false;
                package_visited[3] = false;
                package_visited[2] = false;
                package_visited[1] = false;
                package_step_one();
            }

            if (package_visited[4]==true) {
                package_visited[4] = false;
                package_visited[3] = false;
                package_visited[2] = false;
                package_visited[1] = false;
                package_step_one();
            }

            if (package_visited[3]==true) {
                package_visited[3] = false;
                package_visited[2] = false;
                package_visited[1] = false;
                package_step_one();
            }

            if (package_visited[2]==true) {
                package_visited[2] = false;
                package_visited[1] = false;
                package_step_one();
            }


            if (package_visited[1]==true) {
                package_visited[1] = false;
                package_step_one();
            }

        },

        steptwo: function(event) {
            if (package_visited[6]==true) {
                package_visited[6] = false;
                package_visited[5] = false;
                package_visited[4] = false;
                package_visited[3] = false;
                package_visited[2] = false;
                package_step_two();
            }

            if (package_visited[5]==true) {
                package_visited[5] = false;
                package_visited[4] = false;
                package_visited[3] = false;
                package_visited[2] = false;
                package_step_two();
            }

            if (package_visited[4]==true) {
                package_visited[4] = false;
                package_visited[3] = false;
                package_visited[2] = false;
                package_step_two();
            }

            if (package_visited[3]==true) {
                package_visited[3] = false;
                package_visited[2] = false;
                package_step_two();
            }

            if (package_visited[2]==true) {
                package_visited[2] = false;
                package_step_two();
            }

        },
        stepthree: function(event) {
            if (package_visited[6]==true) {
                package_visited[6] = false;
                package_visited[5] = false;
                package_visited[4] = false;
                package_visited[3] = false;
                package_step_three();
            }

            if (package_visited[5]==true) {
                package_visited[5] = false;
                package_visited[4] = false;
                package_visited[3] = false;
                package_step_three();
            }

            if (package_visited[4]==true) {
                package_visited[4] = false;
                package_visited[3] = false;
                package_step_three();
            }

            if (package_visited[3]==true) {
                package_visited[3] = false;
                package_step_three();
            }
        },
        stepfour: function(event) {
            if (package_visited[6]==true) {
                package_visited[6] = false;
                package_visited[5] = false;
                package_visited[4] = false;
                package_step_four();
            }

            if (package_visited[5]==true) {
                package_visited[5] = false;
                package_visited[4] = false;
                package_step_four();
            }

            if (package_visited[4]==true) {
                package_visited[4] = false;
                package_step_four();
            }
        },

        stepfive: function(event) {
            if (package_visited[6]==true) {
                package_visited[6] = false;
                package_visited[5] = false;
                package_step_five();
            }

            if (package_visited[5]==true) {
                package_visited[5] = false;
                package_step_five();
            }

        },

        stepsix: function(event) {
            if (package_visited[6]==true) {
                package_visited[6] = false;
                package_step_six();
            }
        },

        stepseven: function(event) {
        }

    },
    mounted:function() {

    }

});
var vm_consult = new Vue({
    el: '#consultwizard',
    data: {},
    methods: {
        stepzero: function(event) {
            consult_visited[0] = true;
            consult_step_zero(); 
            if (consult_visited[7]==true) {
                consult_visited[7] = false;
                consult_visited[6] = false;
                consult_visited[5] = false;
                consult_visited[4] = false;
                consult_visited[3] = false;
                consult_visited[2] = false;
                consult_visited[1] = false;
            }

            else if (consult_visited[6]==true) {
                consult_visited[6] = false;
                consult_visited[5] = false;
                consult_visited[4] = false;
                consult_visited[3] = false;
                consult_visited[2] = false;
                consult_visited[1] = false;
            }

            else if (consult_visited[5]==true) {
                consult_visited[5] = false;
                consult_visited[4] = false;
                consult_visited[3] = false;
                consult_visited[2] = false;
                consult_visited[1] = false;
            }

            else if(consult_visited[4]==true) {
                consult_visited[4] = false;
                consult_visited[3] = false;
                consult_visited[2] = false;
                consult_visited[1] = false;
            }

            else if (consult_visited[3]==true) {
                consult_visited[3] = false;
                consult_visited[2] = false;
                consult_visited[1] = false;
            }

            else if (consult_visited[2]==true) {
                consult_visited[2] = false;
                consult_visited[1] = false;
            }

            else if (consult_visited[1]==true) {
                consult_visited[1] = false;
            }

        },
        stepone: function(event) {
            if (consult_visited[7]==true) {
                consult_visited[7] = false; 
                consult_visited[6] = false;
                consult_visited[5] = false;
                consult_visited[4] = false;
                consult_visited[3] = false;
                consult_visited[2] = false;
                consult_visited[1] = false;
                consult_step_one();
            }

            if (consult_visited[6]==true) {
                consult_visited[6] = false;
                consult_visited[5] = false;
                consult_visited[4] = false;
                consult_visited[3] = false; 
                consult_visited[2] = false;
                consult_visited[1] = false;
                consult_step_one();
            }

            if (consult_visited[5]==true) {
                consult_visited[5] = false;
                consult_visited[4] = false;
                consult_visited[3] = false;
                consult_visited[2] = false;
                consult_visited[1] = false;
                consult_step_one();
            }

            if (consult_visited[4]==true) {
                consult_visited[4] = false;
                consult_visited[3] = false;
                consult_visited[2] = false;
                consult_visited[1] = false;
                consult_step_one();
            }

            if (consult_visited[3]==true) {
                consult_visited[3] = false;
                consult_visited[2] = false;
                consult_visited[1] = false;
                consult_step_one();
            }

            if (consult_visited[2]==true) {
                consult_visited[2] = false;
                consult_visited[1] = false;
                consult_step_one();
            }

            if (consult_visited[1]==true) {
                consult_visited[1] = false;
                consult_step_one();
            }
        },

        steptwo: function(event) {
            if (consult_visited[7]==true) {
                consult_visited[7] = false;
                consult_visited[6] = false;
                consult_visited[5] = false;
                consult_visited[4] = false;
                consult_visited[3] = false;
                consult_visited[2] = false;
                consult_step_two();
            }


            if (consult_visited[6]==true) {
                consult_visited[6] = false;
                consult_visited[5] = false;
                consult_visited[4] = false;
                consult_visited[3] = false;
                consult_visited[2] = false;
                consult_step_two();
            }

            if (consult_visited[5]==true) {
                consult_visited[5] = false;
                consult_visited[4] = false;
                consult_visited[3] = false;
                consult_visited[2] = false;
                consult_step_two();
            }

            if (consult_visited[4]==true) {
                consult_visited[4] = false;
                consult_visited[3] = false;
                consult_visited[2] = false;
                consult_step_two();
            }

            if (consult_visited[3]==true) {
                consult_visited[3] = false;
                consult_visited[2] = false;
                consult_step_two();
            }

            if (consult_visited[2]==true) {
                consult_visited[2] = false;
                consult_step_two();
            }
        },

        stepthree: function(event) {
            if (consult_visited[7]==true) {
                consult_visited[7] = false;
                consult_visited[6] = false;
                consult_visited[5] = false;
                consult_visited[4] = false;
                consult_visited[3] = false;
                consult_step_three();
            }


            if (consult_visited[6]==true) {
                consult_visited[6] = false;
                consult_visited[5] = false;
                consult_visited[4] = false;
                consult_visited[3] = false;
                consult_step_three();
            }

            if (consult_visited[5]==true) {
                consult_visited[5] = false;
                consult_visited[4] = false;
                consult_visited[3] = false;
                consult_step_three();
            }

            if (consult_visited[4]==true) {
                consult_visited[4] = false;
                consult_visited[3] = false;
                consult_step_three();
            }

            if (consult_visited[3]==true) {
                consult_visited[3] = false;
                consult_step_three();
            }


        },

        stepfour: function(event) {
            if (consult_visited[7]==true) {
                consult_visited[7] = false;
                consult_visited[6] = false;
                consult_visited[5] = false;
                consult_visited[4] = false;
                consult_step_four();
            }


            if (consult_visited[6]==true) {
                consult_visited[6] = false;
                consult_visited[5] = false;
                consult_visited[4] = false;
                consult_step_four();
            }

            if (consult_visited[5]==true) {
                consult_visited[5] = false;
                consult_visited[4] = false;
                consult_step_four();
            }

            if (consult_visited[4]==true) {
                consult_visited[4] = false;
                consult_step_four();
            }
        },

        stepfive: function(event) {
            if (consult_visited[7]==true) {
                consult_visited[7] = false;
                consult_visited[6] = false;
                consult_visited[5] = false;
                consult_step_five();
            }

            if (consult_visited[6]==true) {
                consult_visited[6] = false;
                consult_visited[5] = false;
                consult_step_five();
            }

            if (consult_visited[5]==true) {
                consult_visited[5] = false;
                consult_step_five();
            }

        },

        stepsix: function(event) {
            if (consult_visited[7]==true) {
                consult_visited[7] = false;
                consult_visited[6] = false;
                consult_step_six();
            }

            if (consult_visited[6]==true) {
                consult_visited[6] = false;
                consult_step_six();
            }
        },

        stepseven: function(event) {
            if (consult_visited[7]==true) {
                consult_visited[7] = false;
                consult_step_seven();
            } 
           // consult_step_six();
        }
    },
    mounted:function() {
    }
});

var vm_container = new Vue({
  el: '#paymentwizard',
  data: {},
  methods: {
      stepone: function () {

        if (payment_visited[4]==true) {
               init_payment();
        }

        if (payment_visited[3]==true) {
             payment_visited[3] = false;
             payment_visited[2] = false;
             payment_visited[1] = false;
             makepayment_step_one();
        }

        if (payment_visited[2]==true) {
             payment_visited[2] = false;
             payment_visited[1] = false;
             makepayment_step_one();
        }

        if (payment_visited[1]==true) {
             payment_visited[1] = false;
             makepayment_step_one();
        }


      },
      steptwo: function () {
        
        if (payment_visited[4]==true) {
//             payment_visited[4] = false;
//             payment_visited[3] = false;
 //            payment_visited[2] = false;
 //            makepayment_step_two();
             init_payment();
        }

        if (payment_visited[3]==true) {
             payment_visited[3] = false;
             payment_visited[2] = false;
             makepayment_step_two();
        }

        if (payment_visited[2]==true) {
             payment_visited[2] = false;
             makepayment_step_two();
        }

      },
      stepthree: function () {
        if (payment_visited[4]==true) {
 //            payment_visited[4] = false;
 //            payment_visited[3] = false;
 //            makepayment_step_three();
               init_payment();
        }

        if (payment_visited[3]==true) {
             payment_visited[3] = false;
             $('#pay-select-state').attr('value', vm3.state);
             $('#pay-address1').attr('value', vm3.address1);
             $('#pay-address2').attr('value', vm3.address2);
             $('#pay-city').attr('value', vm3.city);
             $('#pay-zip').attr('value', vm3.zip);
             makepayment_step_three();
        }

      },
      stepfour: function () {
        if (payment_visited[4]==true) {
            init_payment();
            // payment_visited[4] = false;
            // makepayment_step_four();
        }
      },
      stepfive: function (event) {
      },
  },
  mounted:function() {
      payment_visited[0] = true;
  }
});
var vm = new Vue({
  el: '#stepone',
  data: {
    email: '',
    first: '',
    last:  '',
    nameoncard: '',
    phone: '',
    state: '',
    state_code: '',
    state_name: '',
    nameoncard: '',
    amount: '',
    token: '',
    errors: [],
  },
  methods: {
 
    submitone: function () {
        this.errors = [];
        this.first = $("#first_payments").val();
        this.last = $("#last_payments").val();
        this.email = $("#email_payments").val();
        this.phone = $("#phone_payments").val();
        

        if (!this.email) {
           this.errors.push("Email is required");
        }

        if (!this.phone) {
           this.errors.push("Phone is required");
        }

        if (!this.first) {
           this.errors.push("First name is required");
        }

        if (!this.last) {
           this.errors.push("Last name is required");
        }


        if (this.errors.length > 0) {
           return; 
        } else {
           setup_stripe_one();
           payment_visited[1] = true;
        } 
           
        $("#payment-counter").attr("value", 2);

        this.nameoncard =  this.first+" "+this.last;
        $("#steptwo_nameoncard").attr("value", this.nameoncard);

        makepayment_next_one();        

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
    progress_stepone: function(event) {
        
    }
  },
  mounted:function() {
      payment_visited[0] = true;
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
    nameoncard: '',
    state: '',
    state_code: '',
    state_name: '',
    amount: '', 
    token: '',
    nameoncard: '',
    errors: [],
    stripe_errors: [],
  },
  methods: {
    submitone: function (event) {

    },
    redirect: function (event) {
           vm3.first = this.first;
           vm3.last = this.last;
           vm3.state = this.state;
           vm3.email = this.email;
           vm3.phone = this.phone;
           vm3.amount = this.amount;
           vm3.nameoncard = this.nameoncard;    
           $.get('/states', function(msg) {
                         let result = "<select id='pay-select-state' v-model='state' class='styled-select slate' style='width:100%;' >";
                         for(var i=0;i<msg.length;i++) {
                             if (msg[i].id===39) {
                                 result =  result+'<option value="'+msg[i].id+'" selected="selected">'+msg[i].name+'</option>';
                             } else {
                                 result =  result+'<option value="'+msg[i].id+'">'+msg[i].name+'</option>';
                             }
                         }
                         result = result + "</select>";
                         $("#pay-state-choices").html(result);
           });

           vm3.token = $("#payment-token").val();
           $("#step_three_payments_price").html(this.amount.toString());
           $("#step_three_payments_phone").html(this.phone.toString());
           $("#step_three_payments_state").html(this.state.toString());
           $("#step_three_payments_email").html(this.email.toString());
           $("#step_three_payments_first").html(this.first.toString());
           $("#step_three_payments_last").html(this.last.toString());
           $("#name_on_card").html("<p>Name on Card: "+this.nameoncard.toString()+"</p>");
    
           this.stripe_errors = [];

           payment_visited[2] = true;
           //$("#step_three_payments_price").html(this.amount);
           
           $("#payment-counter").attr("value", 3);
           makepayment_next_two();  
    }, 
    submittwo: function (event) {
           $('#payment-form-one').submit();
           $("#next_two").click();
           $("#payment-amount-error").html("");
           $("#payment-name-on-card-error").html("");
           this.errors = []; 
           this.token = $('#payment-token').val();
           vm3.first = this.first;
           vm3.last = this.last;
           vm3.state = this.state;
           vm3.email = this.email;
           vm3.phone = this.phone;
           vm3.amount = this.amount;
           vm3.nameoncard = this.nameoncard;
           if (!this.nameoncard) {
       
               $("#payment-name-on-card-error").html("<span class=\"error\">"+"Name on card is required"+"</span>");
               this.errors.push("Name on card is required");
           } else {
               $("#payment-name-on-card-error").html("");
           }


           if (!this.amount) {
               $("#payment-amount-error").html("<span class=\"error\" style=\"margin-top:-1.2em;\">"+"Amount is required"+"</span>");
               this.errors.push("Amount is required");
           } else {
               $("#payment-amount-error").html("");
           }


           var displayError = document.getElementById('card-errors-one');

           if (displayError.textContent.length>0) {
               this.errors.push("Invalid card");
           }


           if (this.errors.length > 0) {                      
               return;
           } else {
               if (this.stripe_errors.length > 0) {
                   return;
               }
               payment_visited[2] = true;
               //$("#step_three_payments_price").html(this.amount);  
               $("#payment-counter").attr("value", 3);
               makepayment_next_two();
           }

           $.get('/states', function(msg) {
                         let result = "<select id='pay-select-state' v-model='state' class='styled-select slate' style='width:100%;' >";
                         for(var i=0;i<msg.length;i++) {
                             if (msg[i].id===39) {
                                 result =  result+'<option value="'+msg[i].id+'" selected="selected">'+msg[i].name+'</option>';
                             } else {
                                 result =  result+'<option value="'+msg[i].id+'">'+msg[i].name+'</option>';
                             }
                         }
                         result = result + "</select>";
                         $("#pay-state-choices").html(result);
           });

           vm3.token = $("#payment-token").val();
           $("#step_three_payments_price").html(this.amount.toString());
           $("#step_three_payments_phone").html(this.phone.toString());
           $("#step_three_payments_state").html(this.state.toString());
           $("#step_three_payments_email").html(this.email.toString());
           $("#step_three_payments_first").html(this.first.toString());
           $("#step_three_payments_last").html(this.last.toString());
           $("#name_on_card").html("<p>Name on Card: "+this.nameoncard.toString()+"</p>");
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
    clearwarnings_amount(event) {
        var amount = $("#payment-amount").val();
        if (amount) {
            this.amount = amount;
            $("#payment-amount-error").html("");
        } else {
            $("#payment-amount-error").html("<span class=\"error\">Amount is required</span>");
        }
        return false;
    },
    clearwarnings_nameoncard(event) {
        var nameoncard = $("#steptwo_nameoncard").val();
        if (nameoncard) {
            this.nameoncard = nameoncard;
            $("#payment-name-on-card-error").html("");
        } else {
            $("#payment-name-on-card-error").html("<span class=\"error\">Name on card is required</span>");
        }
        return false;
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
    amount: '',
    token: '',
    first: '',
    last: '',
    nameoncard: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    state_code: '',
    state_name: '',
    zip:  '',
    phone: '2222',
    errors: [],
  },
  methods: {
    submitone: function (event) {
    },
    submittwo: function (event) {
    },

    submitthree: function (event) {
               this.address1 = $("#pay-address1").val();
               this.address2 = $("#pay-address2").val();
               this.city = $("#pay-city").val();
               this.zip = $("#pay-zip").val();
               this.state = $("#pay-select-state").val();


               this.errors = [];

               $("#payment-stepthree-address1-error").html("");
               $("#payment-stepthree-city-error").html(""); 
               $("#payment-stepthree-state-error").html("");                
               $("#payment-stepthree-zip-error").html(""); 

               if (!this.address1) {
                    this.errors.push("Address1 is required");
                    $("#payment-stepthree-address1-error").html("<span class=\"error\">"+"Address 1 is required"+"</span>");
               }

               if (!this.city) {
                    $("#payment-stepthree-city-error").html("<span class=\"error\">"+"City is required"+"</span>");
                    this.errors.push("City is required");
               }


               if (!this.state) {
                    $("#payment-stepthree-state-error").html("<span class=\"error\">"+"State is required"+"</span>");
                    this.errors.push("State is required");
               }


               if (!this.zip) {
                    this.errors.push("Zip is required");
                    $("#payment-stepthree-zip-error").html("<span class=\"error\">"+"Zip/Postal is required"+"</span>");
               }

               if (this.errors.length > 0) {
//                   $("span.mfValidation.show.error").css("color","red");
//                   $("span.mfValidation.show.error").css("font-size","1.2em");
//                   $("span.mfValidation.show.error").css("position","relative");
//                   $("span.mfValidation.show.error").css("margin-left","30em");
//                   $("span.mfValidation.show.error").css("margin-top","-15px");

                   return;
               } else {
                   payment_visited[3] = true;
                   $("#payment-counter").attr("value", 4);
                   makepayment_next_three(); 
               }

//               alert("VALUES PHONE SUBMIT THREE "+this.phone+" EMAIL "+
  //                   this.email+" FIRST "+this.first+
   //                  " LAST "+this.last+" ADDRESS1 "+
    //                 this.address1+" ADDRESS 2"+this.address2+

               $("#final_payment_amount").html("<p><strong>Amount: "+this.amount+"</strong></p>");
               $("#final_payment_email").html("<p><strong>Email: "+this.email+"</strong></p>");
               $("#final_payment_phone").html("<p><strong>Phone: "+this.phone+"</strong></p>");
               $("#final_payment_nameoncard").html("<p><strong>Name on Card "+this.nameoncard+"</strong></p>");
               $("#final_payment_address1").html("<p><strong>Address 1: "+this.address1+"</strong></p>");
               $("#final_payment_address2").html("<p><strong>Address 2: "+this.address2+"</strong></p>");
               $("#final_payment_city").html("<p><strong>City: "+this.city+"</strong></p>");
               //$("#final_state").html("<p><strong>State: "+current_state+"</strong></p>");
               $("#final_payment_zip").html("<p><strong>Zip Code: "+this.zip+"</strong></p>");
 
 
               $("#step_three_payments_name_on_card").html(this.nameoncard);
               this.zip = $('#pay-zip').val();
               this.state = $('#pay-select-state').val(); 
               vm4.token = this.token;
               vm4.email = this.email;
               vm4.phone = this.phone;
               vm4.first = this.first;
               vm4.last = this.last;
               vm4.nameoncard = this.nameoncard;
               vm4.address1 = this.address1;
               vm4.address2 = this.address2; 
               vm4.city = this.city;
               vm4.state = this.state;
               vm4.state_code = this.state_code;
               vm4.state_name = this.state_name;
               vm4.zip = this.zip;
               vm4.phone = vm.phone;  
               vm4.amount = this.amount;
               $.get('/states/?id='+this.state, function(data) {
                   $("#state").attr("value",data[0].name.toString());
                   $("#final_payment_state").html("<p><strong>State: "+data[0].name.toString()+"</strong></p>");
               });
               $("#phone").attr("value",this.phone.toString());
               $("#city").attr("value",this.city.toString());  
               //$("#state").attr("value",current_state);
               $("#zip").attr("value",this.zip.toString());
               $("#email").attr("value",this.email.toString());
               $("#nameoncard").attr("value",this.nameoncard.toString());
               $("#address1").attr("value",this.address1.toString());  
               $("#address2").attr("value",this.address2.toString());
                
               $("#final_email").html("<p><strong>Email: "+this.email+"</strong></p>");
               $("#final_phone").html("<p><strong>Phone: "+this.phone+"</strong></p>");
               $("#final_nameoncard").html("<p><strong>Name on Card "+this.nameoncard+"</strong></p>");   
               $("#final_address1").html("<p><strong>Address 1: "+this.address1+"</strong></p>");   
               $("#final_address2").html("<p><strong>Address 2: "+this.address2+"</strong></p>"); 
               $("#final_city").html("<p><strong>City: "+this.city+"</strong></p>");
               //$("#final_state").html("<p><strong>State: "+current_state+"</strong></p>");  
               $("#final_zip").html("<p><strong>Zip Code: "+this.zip+"</strong></p>");
    },

    submitfour: function (event) {
    },

    successCallback: function(event) {
    },
    errorCallback: function(event) {
    },
    validConfirm: function(event) {
    },
    clearwarnings_address1(event) {
        let address1 = $("#pay-address1").val();
        if (!address1) {
            $("#payment-stepthree-address1-error").html("<span class=\"error\">"+"Address 1 is required"+"</span>"); 
        } else {
            $("#payment-stepthree-address1-error").html("");
        }
    },
    clearwarnings_city(event) {
        let city = $("#pay-city").val();
        if (!city) {
            $("#payment-stepthree-city-error").html("<span class=\"error\">"+"City is required"+"</span>");
        } else {
            $("#payment-stepthree-city-error").html("");
        }
    },
    clearwarnings_zip(event) {
        let zip = $("#pay-zip").val();
        if (!zip) {
            $("#payment-stepthree-zip-error").html("<span class=\"error\">"+"Zip is required"+"</span>");
        } else {
            $("#payment-stepthree-zip-error").html("");
        }

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
    nameoncard: '',
    first: '',
    last: '',
    address1: vm3.address1,
    address2: vm3.address2,
    city: vm3.city,
    state: vm3.state,
    zip:  vm3.zip,
    phone: '393-342-4232',
    amount: vm3.amount,
    token: vm3.token,
    errors: [],
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
        this.errors = [];
        this.user_id = $('#current-user-id').val();
    
        if (this.errors.length > 0) {
            return;
        } else {
            payment_visited[4] = true;
            $("#payment-counter").attr("value", 5);    
            makepayment_next_four();
        }
 
        var arr = {
            "amount": eval(this.amount),
            "package_type": "General Payment",
            "email": this.email,
            "first": this.first,
            "last": this.last,
            "fullname": this.nameoncard,
            "phone": this.phone,
            "address1": this.address1,
            "address2": this.address2,
            "city": this.city,
            "state": this.state,
            "zip": this.zip,
            "token": $('#payment-token').val(),
            "user_id": this.user_id};
        $.ajax({
                type: "POST",
                url: "/paymentconfirm/",
                crossDomain: true,
                data: JSON.stringify(arr),
                dataType: 'json',
                contentType: "application/json; charset=utf-8",
                success: function(data) {
                    $( "div.success" ).fadeIn( 300 ).delay( 1200 ).fadeOut( 400 );
                },
                error: function(data){
                     $( "div.error" ).fadeIn( 300 ).delay( 2500 ).fadeOut( 400 );
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
});


var vm5 = new Vue({
  el: '#stepfive',
  data: {
    amount:vm3.amount,
    token:vm3.token,
    email:vm3.email,
    phone:vm3.phone,
    nameoncard: vm3.nameoncard,
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip:  '',
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
      errors: [],
      user: '',
  },
  options: {
  },
  created: function () {
    // `this` points to the vm instance
      this.user = read_user($('#current-user-id').val());
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
         this.errors = [];
         $('#contactus-name-error').html("");
         $('#contactus-email-error').html(""); 
         $('#contactus-phone-error').html(""); 
         $('#contactus-message-error').html("");  

         this.name = $('#contact-name').val();
         this.email = $('#contact-email').val();
         this.phone = $('#contact-phone').val();
         this.message = $('#contact-message').val(); 

         if (!this.name || this.name.length===0) {
             $('#contactus-name-error').html("<span class=\"name-error error\">Please provide your name!</span>");
             $( "span.name-error" ).delay( 1000 ).fadeOut( 400 );
             this.errors.push("Please provide your name!");
         }

         if (!this.email || this.email.length===0) {
             $('#contactus-email-error').html("<span class=\"email-error error\">Please provide your email!</span>");
             $( "span.email-error" ).delay( 1000 ).fadeOut( 400);
             this.errors.push("Please provide your email!");
         }

         if (!this.phone || this.phone.length===0) {
             $('#contactus-phone-error').html("<span class=\"phone-error error\">Please provide your phone!</span>");
             $( "span.phone-error" ).delay( 1000 ).fadeOut( 400 );
             this.errors.push("Please provide your phone!"); 
         }


         if (!this.message || this.message.length===0) {
             $('#contactus-message-error').html("<span class=\"message-error error\">Please provide your message!</span>");
             $( "span.message-error" ).delay( 1000 ).fadeOut( 400 );
             this.errors.push("Please provide your message!");
         }

         if (this.errors && this.errors.length > 0) {
             return;
         }

         $.get('/sendmail?email='+this.email+'&phone='+this.phone+'&message='+this.message+'&name='+this.name, function(data)
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
});


// start app
new Vue({
    el: '#consultapp',
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
});


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
     agreed: false,
     errors: [],
   },
   methods: {
       submitone: function (event) {
           asktwo.is_verified = this.is_verified;
           asktwo.pre_verified = this.pre_verified;
           ask_visited[1] = true;
           ask_step_one();
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
       ask_step_zero();
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
     agreed: false,
     errors: [],
   },
   methods: {
       submitone: function (event) {
       },

       submittwo: function (event) {
           this.errors = [];
           this.email = $("#ask_email").val();
           this.full_name = $("#ask_full_name").val();
           askthree.is_verified = this.is_verified;
           askthree.pre_verified = this.pre_verified;
           askthree.full_name = this.full_name;
           askthree.email = this.email;
           if (!this.full_name  || this.full_name.length==0) {
               this.errors.push("Full name required!");
           }

           if (!this.email  || this.email.length==0) {
               this.errors.push("Email required!");
           }


           if (this.errors.length > 0) {
                ask_visited[2] = false;
                ask_visited[1] = true;
                ask_step_one();
                return;  
           } else {
                ask_visited[2] = true;
                ask_step_two();
           }
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
     agreed: false,
     errors: [],
   },
   methods: {
       submitone: function (event) {
       },

       submittwo: function (event) {
       },

       submitthree: function (event) {
           this.errors = [];
           askfour.is_verified = this.is_verified;
           askfour.pre_verified = this.pre_verified;
           askfour.full_name = this.full_name;
           askfour.email = this.email;
           askfour.message = this.message;
           askfour.subject = this.subject;

           if (!this.message  || this.message.length==0) {
               this.errors.push("Message required!");
           }

           if (!this.subject  || this.subject.length==0) {
               this.errors.push("Subject required!");
           }

           if (this.errors.length > 0) {
                return;
           } else {
                ask_visited[3] = true;
                ask_step_three();
           }


           $.get('/asktemplates/1/', function(data){
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
     is_accepted: false,
     pre_verified: '',
     full_name:'',
     email:'',
     message: '',
     subject: '',
     time_asked: '',
     agreement: '',
     agreed_note: '',
     agreed: false,
     errors: [],
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
           
           if($('#is_accepted').prop('checked')) {     
                $('#is_ask_accepted_errors').html("");
                this.is_accepted = true; 
                ask_visited[4] = true;
                ask_step_four();
           } else {
                $('#is_ask_accepted_errors').html("<span class=\"error\">Please accept the terms.</span>");
                //$( "div.error" ).delay( 500 ).fadeOut( 400 );
                this.errors.push("Must be accepted");
                return; 
          }
  
          
           askfive.is_accepted = this.is_accepted;
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
     is_accepted: false,
     pre_verified: '',
     full_name:'',
     email:'',
     message: '',
     subject: '',
     time_asked: '',
     agreement: '',
     agreed_note: '',
     agreed: false,
     errors: [],
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
         $.get('/sendmail?email='+this.email+'&subject='+this.subject+'&message='+this.message+'&name='+this.full_name, function(data)
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
         ask_step_five();

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


var cosnultzero = new Vue({
   el: '#consult-stepzero',
   data: {
     billing_country: '',
     billing_state: '',
     is_verified: false,
     pre_verified: '',
     billing_full_name:'',
     billing_email:'',
     message: '',
     subject: '',
     time_asked: '',
     price: '',
     payment_token: '',
     agreement: '',
     agreed_note: '',
     agreed: false,
     consultancy_type: 3,
     billing_address1: '',
     billing_address2: '',
     billing_city: '',
     billing_phone: '',
     billing_zip: '',
     individual_full_name: '',
     individual_address1: '',
     individual_address2: '',
     individual_city: '',
     individual_state: '',
     individual_zip: '',
     individual_country: '',
     individual_phone: '',
     individual_email: '',
     country_of_citizenship: '',
     number_of_children: '',
     manner_of_entry: '',
     marital_status: '',
     purpose: '',
     errors: [],
     stripe_errors: [],
     is_accepted: false,

   },
   methods: {
       submitzero: function (event) {
          consult_visited[1] = true;
          consult_step_one();
       },
       submitone: function (event) {
       }
  },
  mounted: function() {
       consult_step_pre_zero();
       setup_stripe_three();
  }
});

var consultone = new Vue({
   el: '#consult-stepone',
   delimiters: ['[[',']]'],
   data: {
     billing_country: '',
     billing_state: '',
     is_verified: false,
     pre_verified: '',
     billing_full_name:'',
     billing_email:'',
     message: '',
     subject: '',
     time_asked: '',
     price: '',
     payment_token: '',
     agreement: '',
     agreed_note: '',
     agreed: false,
     consultancy_type: 3,
     billing_address1: '',
     billing_address2: '',
     billing_city: '',
     billing_phone: '',
     billing_zip: '',
     individual_full_name: '',
     individual_address1: '',
     individual_address2: '',
     individual_city: '',
     individual_state: '',
     individual_zip: '',
     individual_country: '',
     individual_phone: '',
     individual_email: '',
     country_of_citizenship: '',
     number_of_children: '',
     manner_of_entry: '',
     marital_status: '',
     purpose: '',
     errors: [],
     stripe_errors: [],
     is_accepted: false,
   },
   methods: {
       redirect: function(event) {

       },
       reset_price: function (event) {
       },
       submitzero: function (event) {

       },
       submitone: function (event) {
           this.errors = [];      
           consulttwo.price = this.price;
           consulttwo.consultancy_type = this.consultancy_type;

           if($('#is_consult_accepted').prop('checked')) {
                $('#is_consult_accepted_errors').html("");
           } else {
                $('#is_consult_accepted_errors').html("<span class=\"error\">Please accept the terms.</span>");
                this.errors.push("Must be accepted");
           }


           if (this.errors.length > 0) {
               return;
           } else {
               consult_visited[2] = true;
           }
           $.get('/consulttypes', function(msg) {
                     let result = "<div>";

                     for(var i=0; i<msg.length; i++) {
                         str = "<div style='float:left;width:5%;margin-bottom:1.2em;'>";
                         str = str + "<input type='hidden' id='consult-steptwo-valid' value='0' /> ";
                         if (i==0) {
                             str = str + "<input type='hidden' id='consultancy-type-"+msg[i].id+"' value='"+msg[i].price+"' checked=\"checked\"  />";
                         } else {
                             str = str + "<input type='hidden' id='consultancy-type-"+msg[i].id+"' value='"+msg[i].price+"' />";
                         }
                         if (i===0) {
                               str = str + "<input type='radio' onclick='resetprice("+msg[i].price+","+msg[i].id+")'  v-model='consultancy_type' checked='checked'  name='consultancy_type' value='"+
                               msg[i].id+"'></div><div style='float:left;width:94%;margin-bottom:1.2em;'>"+msg[i].description+"</div><div class='clear'></div>";
                         } else {
                               str = str + "<input type='radio' onclick='resetprice("+msg[i].price+","+msg[i].id+")'  v-model='consultancy_type' name='consultancy_type' value='"+
                               msg[i].id+"'></div><div style='float:left;width:94%;margin-bottom:1.2em;'>"+msg[i].description+"</div><div class='clear'></div>";
 

                         }
                              result = result + str
                     }
                     result = result + "</div>";
                     $("#service-choices").html(result);
                     $('input:radio[name=consultancy_type]')[0].checked = true;
            });


            $.get('/states', function(msg) {
                     let result = "<select id='consult-select-state' v-model='state' class='styled-select slate' style='width:100%;' >";
                     for(var i=0;i<msg.length;i++) {
                             if (msg[i].id===39) {
                                 result =  result+'<option value="'+msg[i].id+'" selected="selected">'+msg[i].name+'</option>';
                             } else {
                                 result =  result+'<option value="'+msg[i].id+'">'+msg[i].name+'</option>';
                             }
                     }
                     result = result + "</select>";
                     $("#consult-state-choices").html(result);
            });

            $.get('/countries', function(msg) {
                     let result = "<select id='consult-select-country' v-model='country' class='styled-select slate' style='width:100%;' >";
                     for(var i=0;i<msg.length;i++) {
                         result =  result+'<option value="'+msg[i].id+'">'+msg[i].name+'</option>';
                     }
                     result = result + "</select>";
                     $("#consult-country-choices").html(result);
            });
            var user_id = $('#current-user-id').val();
            $.get( "/users?id="+user_id, function( data ) {

               var user = data[0];
               consulttwo.nameoncard = user.first_name+" "+user.last_name;
               consulttwo.email = user.email;
               $('#nameoncard-consult').attr('value', consulttwo.nameoncard);
               $('#nameoncard-consult').attr('placeholder', consulttwo.nameoncard);
               consult_step_two();
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
       setup_stripe_three();
   }
});

var consulttwo = new Vue({
   el: '#consult-steptwo',
   delimiters: ['[[',']]'],
   data: {
     billing_country: '',
     billing_state: '',
     is_verified: false,
     pre_verified: '',
     billing_full_name:'',
     billing_email:'',
     message: '',
     subject: '',
     time_asked: '',
     agreement: '',
     agreed_note: '',
     agreed: false,
     consultancy_type: '',
     price: '',
     payment_token: '',
     billing_address1: '',
     billing_address2: '',
     billing_city: '',
     billing_phone: '',
     billing_zip: '',
     individual_full_name: '',
     individual_address1: '',
     individual_address2: '',
     individual_city: '',
     individual_state: '',
     individual_zip: '',
     individual_country: '',
     individual_phone: '',
     individual_email: '',
     country_of_citizenship: '',
     nameoncard: '',
     number_of_children: '',
     manner_of_entry: '',
     marital_status: '',
     purpose: '',
     errors: [],
     stripe_errors: [],
     user: '',
  },
   methods: {
       redirect: function(event) { 
           consultthree.billing_full_name = this.billing_full_name;
           consultthree.billing_state = this.billing_state;
           consultthree.billing_country = this.billing_country;
           consultthree.billing_zip = this.billing_zip;
           consultthree.billing_phone = this.billing_phone;
           consultthree.billing_email = this.billing_email;
           consultthree.billing_address1 = this.billing_address1;
           consultthree.billing_address2 = this.billing_address2;
           consultthree.billing_city = this.billing_city;

           consultthree.individual_full_name = this.individual_full_name;
           consultthree.individual_address1 = this.individual_address1;
           consultthree.individual_address2 = this.individual_address2;
           consultthree.individual_city = this.individual_city;
           consultthree.individual_state = this.individual_state;
           consultthree.individual_zip = this.individual_zip;
           consultthree.individual_country = this.individual_country;
           consultthree.individual_phone = this.individual_phone;
           consultthree.individual_email = this.individual_email;

           consultthree.consultancy_type = this.consultancy_type;
           consultthree.price = this.price;
           consultthree.payment_token = this.payment_token;

           var user_id = $('#current-user-id').val();

           $.get( "/users?id="+user_id, function( data ) {

               this.user = data[0];
               this.individual_email = this.user.email;

               $('#consult_email').attr("value", this.individual_email);

               consultthree.individual_email = this.individual_email;
           });  

           $.get('/states', function(msg) {
                     let result = "<select id='consult-individual-select-state' v-model='state' class='styled-select slate' style='width:100%;' >";
                     for(var i=0;i<msg.length;i++) {
                             if (msg[i].id===39) {
                                 result =  result+'<option value="'+msg[i].id+'" selected="selected">'+msg[i].name+'</option>';
                             } else {
                                 result =  result+'<option value="'+msg[i].id+'">'+msg[i].name+'</option>';
                             }
                     }
                     result = result + "</select>";
                     $("#consult-individual-state-choices").html(result);
           });

           $.get('/countries', function(msg) {
                     let result = "<select id='consult-individual-select-country' v-model='country' class='styled-select slate' style='width:100%;' >";
                     for(var i=0;i<msg.length;i++) {
                         result =  result+'<option value="'+msg[i].id+'">'+msg[i].name+'</option>';
                     }
                     result = result + "</select>";
                     result = result + "<input type='hidden' id='consult-stepthree-valid' value='0' /> ";
                     $("#consult-individual-country-choices").html(result);
            });

            consult_visited[3] = true;
            consultthree.individual_full_name = this.nameoncard;
            $('#consult_full_name').attr("value", this.nameoncard);
            consultthree.individual_email = this.individual_email;
            $('#consult_email').attr("value", this.individual_email);
            consult_step_three();


       },

       submitone: function (event) {
       },

       submittwo: function (event) {
            //setup_stripe_three();
            $('#payment-form-three').submit();
            this.errors = [];
            this.price = $('#consult_amount').val();
            let payment_token_error = $('#payment-token-error').val();
            consultthree.consultancy_type = this.consultancy_type;
            consultthree.price = this.price;
            consultthree.payment_token = this.payment_token;
            this.stripe_errors = [];


 
            $.get('/states', function(msg) {
                     let result = "<select id='consult-individual-select-state' v-model='state' class='styled-select slate' style='width:100%;' >";
                     for(var i=0;i<msg.length;i++) {
                             if (msg[i].id===39) {
                                 result =  result+'<option value="'+msg[i].id+'" selected="selected">'+msg[i].name+'</option>';
                             } else {
                                 result =  result+'<option value="'+msg[i].id+'">'+msg[i].name+'</option>';
                             }
                     }
                     result = result + "</select>";
                     $("#consult-individual-state-choices").html(result);
            });

            $.get('/countries', function(msg) {
                     let result = "<select id='consult-individual-select-country' v-model='country' class='styled-select slate' style='width:100%;' >";
                     for(var i=0;i<msg.length;i++) {
                         result =  result+'<option value="'+msg[i].id+'">'+msg[i].name+'</option>';
                     }
                     result = result + "</select>";
                     result = result + "<input type='hidden' id='consult-stepthree-valid' value='0' /> ";
                     $("#consult-individual-country-choices").html(result);
            });
         
         this.payment_token =  $("#payment-token").val();
         this.billing_full_name = $('#nameoncard-consult').val();
         this.billing_state = $('#consult-select-state').val();
         this.billing_country = $('#consult-select-country').val();
         this.billing_zip = $('#consult_zip').val();
         this.billing_phone = $('#consult_phone').val();         
         this.billing_address1 = $('#consult_address1').val();
         this.billing_address2 =  $('#consult_address2').val();
         this.billing_city = $('#consult_city').val();

//         if (!this.payment_token) {
 //            this.errors.push('Payment token is required.');
 //        }

         if (!this.billing_full_name) {
             this.errors.push('Full name is required.');
         }

         if (!this.billing_state) {
             this.errors.push('State is required.');
         }
 
         if (!this.billing_country) {
             this.errors.push('Country required.');
         }

         if (!this.billing_address1) {
             this.errors.push('Address 1 is required.');
         }

         if (!this.billing_zip) {
             this.errors.push('Zip required.');
         }

         if (!this.billing_phone) {
             this.errors.push('Phone required.');
         }

         if (!this.billing_phone || this.billing_phone.length === 0) {
                $('#consult_billing_phone_errors').html("<span class=\"error\">Billing phone number must be provided!</span>");
                //$( "div.error" ).delay( 500 ).fadeOut( 400 );
         } else {
                  $('#consult_billing_phone_errors').html("");
         }



         if (!this.billing_city) {
             this.errors.push('City required.');
         }

         var displayError = document.getElementById('card-errors-three');

         if (displayError.textContent.length>0) {
               this.errors.push("Invalid card");
         }

        


         if (this.errors.length > 0 ) {
             return;
         } else {

             if (this.stripe_errors.length > 0) {
                 return;
             }
             consult_visited[3] = true;

             consult_step_two();
             $('#consult_email').attr("value", "three");
         }

         var user_id = $('#current-user-id').val();
        
         $.get( "/users?id="+user_id, function( data ) {
         
               this.user = data[0];
 


         this.individual_email = this.user.email;
         this.billing_email = this.user.email;
         $('#consult_full_name').attr('value', this.user.first_name+" "+this.user.last_name);
         $('#consult_full_name').attr('placeholder', this.user.first_name+" "+this.user.last_name);
         this.individual_full_name = this.user.first_name+" "+this.user.last_name;

         consultthree.individual_email = this.user.email;
         $('#consult_email').attr('value', this.user.email);
         $('#consult_email').attr("value", this.user.email);

         this.billing_full_name = this.user.first_name+" "+this.user.last_name;
         consultthree.billing_full_name = this.billing_full_name;
         consultthree.billing_state = this.billing_state;
         consultthree.billing_country = this.billing_country;
         consultthree.billing_zip = this.billing_zip;
         consultthree.billing_phone = this.billing_phone;
         consultthree.billing_email = this.billing_email;
         consultthree.billing_address1 = this.billing_address1;
         consultthree.billing_address2 = this.billing_address2;
         consultthree.billing_city = this.billing_city;
         consultthree.individual_full_name = this.individual_full_name;
         consultthree.individual_address1 = this.individual_address1;
         consultthree.individual_address2 = this.individual_address2;
         consultthree.individual_city = this.individual_city;
         consultthree.individual_state = this.individual_state;
         consultthree.individual_zip = this.individual_zip;
         consultthree.individual_country = this.individual_country;
         consultthree.individual_phone = this.individual_phone;
         });
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
   mounted: function() {
       setup_stripe_three();
   },
   data() {
      return {
         items: [
         ]
   }
}
});

var consultthree = new Vue({
   el: '#consult-stepthree',
   delimiters: ['[[',']]'],
   data: {
     billing_country: '',
     billing_state: '',
     is_verified: false,
     pre_verified: '',
     billing_full_name: '',
     individual_full_name: '',
     individual_emaile: '',
     individual_address1: '',
     individual_address2: '',
     individual_city: '',
     individual_state: '',
     individual_zip: '',
     individual_country: '',
     individual_phone: '',
     billing_email:'',
     message: '',
     subject: '',
     time_asked: '',
     agreement: '',
     agreed_note: '',
     agreed: false,
     consultancy_type: '',
     payment_token: '',
     price: '',
     billing_address1: '',
     billing_address2: '',
     billing_city: '',
     billing_phone: '',
     billing_zip: '',
     country_of_citizenship: '',
     number_of_children: '',
     manner_of_entry: '',
     marital_status: '',
     purpose: '',
     errors: [],
     user:'',
   },
   methods: {
       submitone: function (event) {
       },

       submittwo: function (event) {
       },

       submitthree: function (event) {
           this.errors = [];
           this.individual_state = $('#consult-individual-select-state').val();
           this.individual_country = $('#consult-individual-select-country').val();
           this.payment_token = $("#payment-token").val();
           this.individual_email = $("#consult_email").val();
           this.billing_email = $("#consult_email").val();
           consultfour.billing_full_name = this.billing_full_name;
           consultfour.billing_state = this.billing_state;
           consultfour.billing_country = this.billing_country;
           consultfour.billing_zip = this.billing_zip;
           consultfour.billing_phone = this.billing_phone;
           consultfour.billing_address1 = this.billing_address1;
           consultfour.billing_address2 = this.billing_address2;
           consultfour.billing_city = this.billing_city;
           consultfour.billing_phone = this.billing_phone;
           consultfour.billing_email = this.billing_email;

           consultfour.consultancy_type = this.consultancy_type;
           consultfour.price = this.price;
           consultfour.payment_token = this.payment_token;
           consultfour.individual_full_name = this.individual_full_name;
           consultfour.individual_address1 = this.individual_address1;
           consultfour.individual_address2 = this.individual_address2;
           consultfour.individual_city = this.individual_city;
           consultfour.individual_state = this.individual_state;
           consultfour.individual_zip = this.individual_zip;
           consultfour.individual_country = this.individual_country;
           consultfour.individual_phone = this.individual_phone;
           consultfour.individual_email = this.individual_email;

           if (!this.individual_full_name || this.individual_full_name.length === 0) {
                $('#consult_fullname_errors').html("<span class=\"error\">Full name must be provided!</span>");
                //$( "div.error" ).delay( 500 ).fadeOut( 400 );
           } else {
                $('#consult_fullname_errors').html("");
           }

           if (!this.individual_email || this.individual_email.length === 0) {
                $('#consult_email_errors').html("<span class=\"error\">Email must be provided!</span>");
                //$( "div.error" ).delay( 500 ).fadeOut( 400 );
           } else {
                  $('#consult_email_errors').html("");
           }

           if (!this.individual_phone || this.individual_phone.length === 0) {
                $('#consult_phone_errors').html("<span class=\"error\">Individual phone number must be provided!</span>");
                //$( "div.error" ).delay( 500 ).fadeOut( 400 );
           } else {
                  $('#consult_phone_errors').html("");
           }

           $.get('/countries', function(msg) {
               let result = "<select id='consult-select-country-of-citizenship' v-model='country' class='styled-select slate' style='width:100%;' >";
                
               for(var i=0;i<msg.length;i++) {
                             result =  result+'<option value="'+msg[i].id+'">'+msg[i].name+'</option>';
               }
               result = result + "</select>";
               $("#consult-additional-country-choices").html(result);
           });

            $.get('/children', function(msg) {
                     let result = "<select id='consult-select-children' v-model='children' class='styled-select slate' style='width:100%;' >";
                     for(var i=0;i<msg.length;i++) {
                         result =  result+'<option value="'+msg[i].id+'">'+msg[i].value+'</option>';
                     }
                     result = result + "</select>";
                     $("#consult-additional-children-choices").html(result);
            });

            $.get('/marital', function(msg) {
                     let result = "<select id='consult-select-marital' v-model='marriage' class='styled-select slate' style='width:100%;' >";
                     for(var i=0;i<msg.length;i++) {
                         result =  result+'<option value="'+msg[i].id+'">'+msg[i].status+'</option>';
                     }
                     result = result + "</select>";
                     $("#consult-additional-marital-choices").html(result);
            });

            if (!this.individual_full_name) {
                this.errors.push('Individual full name is required.');
            }

            if (!this.individual_address1) {
                this.errors.push('Individual address 1 is required.');
            }

            if (!this.individual_city) {
                this.errors.push('Individual city is required.');
            }

            if (!this.individual_state) {
                this.errors.push('Individual state is required.');  
            }

            if (!this.individual_zip) {
                this.errors.push('Individual zip is required.');
            }

            if (!this.individual_country) {
                this.errors.push('Individual country is required.');
            }

            if (!this.individual_phone) {
                this.errors.push('Individual phone is required.'); 
            }
 
            if (!this.individual_email) {
                this.errors.push('Individual email is required.');
            }



            if (this.errors.length > 0 ) {
                $('#consult-stepthree-valid').attr('value', 0);
                return;
            } else {
                consult_visited[4] = true;
                $('#consult-stepthree-valid').attr('value', 1);
                consult_step_four();
            }
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
       setup_stripe_three();
   }
});


var consultfour = new Vue({
   el: '#consult-stepfour',
   data: {
     billing_country: '',
     billing_state: '',
     is_verified: false,
     pre_verified: '',
     billing_full_name:'',
     billing_email:'',
     message: '',
     subject: '',
     time_asked: '',
     agreement: '',
     agreed_note: '',
     agreed: false,
     consultancy_type: '',
     price: '',
     payment_token: '',
     individual_full_name: '',
     individual_address1: '',
     individual_address2: '',
     individual_city: '',
     individual_state: '',
     individual_zip: '',
     individual_country: '',
     individual_phone: '',
     individual_email: '',
     billing_address1: '',
     billing_address2: '',
     billing_city: '',
     billing_phone: '',
     billing_zip: '',
     country_of_citizenship: '',
     number_of_children: '',
     manner_of_entry: '',
     marital_status: '',
     purpose: '',
     errors: [],
   },
   methods: {

       submitone: function (event) {
       },

       submittwo: function (event) {
       },

       submitthree: function (event) {
       },

       submitfour: function (event) {
         this.errors = [];
         this.country_of_citizenship = $('#consult-select-country-of-citizenship').val();
         this.marital_status = $('#consult-select-marital').val();
         this.number_of_children = $('#consult-select-children').val();
             
         consultfive.billing_full_name = this.billing_full_name;
         consultfive.billing_state = this.billing_state;
         consultfive.billing_country = this.billing_country;
         consultfive.billing_zip = this.billing_zip;
         consultfive.number_of_children = this.number_of_children;
         consultfive.manner_of_entry = this.manner_of_entry;
         consultfive.marital_status = this.marital_status;
         consultfive.country_of_citizenship = this.country_of_citizenship;
         consultfive.billing_phone = this.billing_phone;
         consultfive.billing_email = this.billing_email;
         consultfive.billing_address1 = this.billing_address1;
         consultfive.billing_address2 = this.billing_address2;
         consultfive.billing_city = this.billing_city;
         consultfive.consultancy_type = this.consultancy_type;
         consultfive.price = this.price;
         consultfive.payment_token = this.payment_token;
         consultfive.individual_full_name = this.individual_full_name;
         consultfive.individual_address1 = this.individual_address1;
         consultfive.individual_address2 = this.individual_address2;
         consultfive.individual_city = this.individual_city;
         consultfive.individual_state = this.individual_state;
         consultfive.individual_zip = this.individual_zip;
         consultfive.individual_country = this.individual_country;
         consultfive.individual_phone = this.individual_phone;
         consultfive.individual_email = this.individual_email;
         if (this.errors.length > 0) {
             return;
         } else {
             consult_visited[5] = true;
             consult_step_five(); 
         }
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
     billing_country: '',
     billing_state: '',
     is_verified: false,
     pre_verified: '',
     billing_full_name:'',
     message: '',
     subject: '',
     time_asked: '',
     agreement: '',
     agreed_note: '',
     agreed: false,
     consultancy_type: '',
     price: '',
     payment_token: '',
     individual_full_name: '',
     individual_address1: '',
     individual_address2: '',
     individual_city: '',
     individual_state: '',
     individual_zip: '',
     individual_country: '',
     individual_phone: '',
     individual_email: '',
     billing_address1: '',
     billing_email: '',
     billing_address2: '',
     billing_city: '',
     billing_phone: '',
     billing_zip: '',
     country_of_citizenship: '',
     number_of_children: '',
     manner_of_entry: '',
     marital_status: '',
     purpose: '',
     errors: [],
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
         this.errors = [];
         consultsix.billing_full_name = this.billing_full_name;
         consultsix.billing_state = this.billing_state;
         consultsix.billing_country = this.billing_country;
         consultsix.billing_zip = this.billing_zip;
         consultsix.billing_phone = this.billing_phone;
         consultsix.billing_address1 = this.billing_address1;
         consultsix.billing_address2 = this.billing_address2;
         consultsix.billing_city = this.billing_city;
         consultsix.consultancy_type = this.consultancy_type;
         consultsix.price = this.price;
         consultsix.purpose = this.purpose;
         consultsix.payment_token = this.payment_token;
         consultsix.number_of_children = this.number_of_children;
         consultsix.marital_status = this.marital_status;
         consultsix.manner_of_entry = this.manner_of_entry;
         consultsix.country_of_citizenship = this.country_of_citizenship;
         consultsix.individual_full_name = this.individual_full_name;
         consultsix.individual_address1 = this.individual_address1;
         consultsix.individual_address2 = this.individual_address2;
         consultsix.individual_city = this.individual_city;
         consultsix.individual_state = this.individual_state;
         consultsix.individual_zip = this.individual_zip;
         consultsix.individual_country = this.individual_country;
         consultsix.individual_phone = this.individual_phone;
         consultsix.individual_email = this.individual_email;
       
         if (!this.purpose) {
             this.errors.push("Consultancy purpose is needed");
         }

         if (this.errors.length > 0) {
             return;
         } else {

             consult_visited[6] = true;
             consult_step_six();
         }

         $.get('/countries/'+this.billing_country+"/", function(data) {
               $("#final_consultation_billing_country").html("<p><strong>Country: "+data.name.toString()+"</strong></p>");
         })
         $.get('/states/?id='+this.billing_state, function(data) {
               $("#final_consultation_billing_state").html("<p><strong>State: "+data[0].name.toString()+"</strong></p>");
         })

         if (!this.individual_address2 || this.individual_address2.length===0) {
               this.individual_address2 = "";
         }

         $("#final_consultation_billing_name_on_card").html("<p><strong>Full Name: "+this.billing_full_name+"</strong></p>");
         $("#final_consultation_billing_address1").html("<p><strong>Address 1: "+this.billing_address1+"</strong></p>");
         $("#final_consultation_billing_address2").html("<p><strong>Address 2: "+this.billing_address2+"</strong></p>");
         $("#final_consultation_billing_city").html("<p><strong>City: "+this.billing_city+"</strong></p>");
         $("#final_consultation_billing_phone").html("<p><strong>Phone: "+this.billing_phone+"</strong></p>");
         $("#final_consultation_billing_email").html("<p><strong>Email: "+this.billing_email+"</strong></p>");

         $("#final_consultation_individual_fullname").html("<p><strong>Full Name: "+this.individual_full_name+"</strong></p>");
         $("#final_consultation_individual_address1").html("<p><strong>Address 1: "+this.individual_address1+"</strong></p>");
         $("#final_consultation_individual_address2").html("<p><strong>Address 2: "+this.individual_address2+"</strong></p>"); 
         $("#final_consultation_individual_city").html("<p><strong>City: "+this.individual_city+"</strong></p>");
         $("#final_consultation_individual_zip").html("<p><strong>Zip(Postal): "+this.individual_zip+"</strong></p>");
         $("#final_consultation_individual_phone").html("<p><strong>Phone: "+this.individual_phone+"</strong></p>");
         $("#final_consultation_individual_email").html("<p><strong>Email: "+this.individual_email+"</strong></p>");
          
         $.get('/consulttypes/'+this.consultancy_type, function(msg) {
               $("#final_consultation_consultancy_type").html("<p><strong>Consultancy Type: "+msg.description+"</strong></p>");
               $("#final_consultation_consultancy_price").html("<p><strong>Consultancy Price: "+msg.price+"</strong></p>");

               consultsix.price = msg.price;
         });
        
 
         $.get('/countries/'+this.individual_country+"/", function(data) {
               $("#final_consultation_individual_country").html("<p><strong>Country: "+data.name.toString()+"</strong></p>");
         })
         $.get('/states/?id='+this.individual_state, function(data) {
               $("#final_consultation_individual_state").html("<p><strong>State: "+data[0].name.toString()+"</strong></p>");
         })



         $.get('/children/'+this.number_of_children+"/", function(data) {
               $("#final_consultation_number_of_children").html("<p><strong>Number of children: "+data.number.toString()+"</strong></p>");
         })

         $.get('/marital/'+this.marital_status+"/", function(data) {
               $("#final_consultation_marital_status").html("<p><strong>Marital status: "+data.status.toString()+"</strong></p>");
         });

         $.get('/countries/'+this.country_of_citizenship+"/", function(data) {
               $("#final_consultation_country_of_citizenship").html("<p><strong>Country of citizenship: "+data.name.toString()+"</strong></p>");
         });

         $('#final_consultation_manner_of_entry').html("<p><strong>Manner of entry: "+this.manner_of_entry.toString()+"</strong></p>");
         $('#final_consultation_purpose').html("<p><strong>Consultation purpose: "+this.purpose+"</strong></p>");
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
     billing_country: '',
     billing_state: '',
     is_verified: false,
     pre_verified: '',
     billing_full_name:'',
     billing_email:'',
     message: '',
     subject: '',
     time_asked: '',
     agreement: '',
     agreed_note: '',
     agreed: false,
     consultancy_type: '',
     price: '',
     payment_token: '',
     individual_full_name: '',
     individual_address1: '',
     individual_address2: '',
     individual_city: '',
     individual_state: '',
     individual_zip: '',
     individual_country: '',
     individual_phone: '',
     individual_email: '',
     billing_address1: '',
     billing_address2: '',
     billing_city: '',
     billing_phone: '',
     billing_zip: '',
     country_of_citizenship: '',
     number_of_children: '',
     manner_of_entry: '',
     marital_status: '',
     purpose: '',
     errors: [],
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
             this.errors = [];
             consultseven.billing_full_name = this.billing_full_name;
             consultseven.billing_state = this.billing_state;
             consultseven.billing_country = this.billing_country;
             consultseven.billing_zip = this.billing_zip;
             consultseven.billing_phone = this.billing_phone;
             consultseven.billing_city = this.billing_city;
             consultseven.billing_email = this.billing_email;
             consultseven.billing_address1 = this.billing_address1;
             consultseven.billing_address2 = this.billing_address2;
             consultseven.consultancy_type = this.consultancy_type;
             consultseven.price = this.price;
             consultseven.payment_token = this.payment_token;

             var arr = {
                   "billing_address1": this.billing_address1,
                   "billing_address2": this.billing_address2,
                   "billing_city" : this.billing_city,
                   "billing_country": this.billing_country,
                   "billing_state": this.billing_state,
                   "billing_full_name": this.billing_full_name, 
                   "billing_phone": this.billing_phone,
                   "billing_email": this.billing_email,
                   "billing_zip": this.billing_zip,

                   "individual_address1": this.individual_address1,
                   "individual_address2": this.individual_address2,
                   "individual_city": this.individual_city,
                   "individual_country": this.individual_country,
                   "individual_state": this.individual_state,
                   "individual_full_name": this.individual_full_name,
                   "individual_phone": this.individual_phone,
                   "individual_zip": this.individual_zip,
                   "individual_email": this.individual_email,
                   "user_id": $('#current-user-id').val(),
                   "payment_token": this.payment_token,
                   "price": this.price,
                   "consultancy_type": this.consultancy_type,
                   "purpose": this.purpose,
                   "marital_status": this.marital_status,
                   "country_of_citizenship": this.country_of_citizenship,
                   "number_of_children": this.number_of_children,
             };
             $.ajax({
                    type: "POST",
                    url: "/consult/",
                    crossDomain: true,
                    data: JSON.stringify(arr),
                    dataType: 'json',
                    contentType: "application/json; charset=utf-8",
                    success: function(data) {
                         if (data.message =='success')  {
                               $( "div.success" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
                         }
                    },
                    error: function(data){
                         $( "div.error" ).fadeIn( 300 ).delay( 2500 ).fadeOut( 400 ); 
                    }
             });

             if (this.errors.length > 0) {
                 return;
             } else {
                 consult_visited[7] = true;
                 consult_step_seven();
             }

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
     consultancy_type: '',
     price: '',
     payment_token: '',
     individual_full_name: '',
     individual_address1: '',
     individual_address2: '',
     billing_address1: '',
     billing_address2: '',
     individual_city: '',
     individual_state: '',
     individual_zip: '',
     individual_country: '',
     individual_phone: '',
     individual_email: '',
     address1: '',
     address2: '',
     city: '',
     phone: '',
     zip: '',
     country_of_citizenship: '',
     number_of_children: '',
     manner_of_entry: '',
     marital_status: '',
     purpose: '',
     errors: [],
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
            this.errors = [];

             if (this.errors.length > 0) {
                 return;
             } else {
                 consult_visited[7] = true;
                 consult_step_seven();
             }
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

function consult_step_pre_zero() {
            $("#consult-stepzero").css("display","block");
            $("#consult-stepone").css("display","none");
            $("#consult-steptwo").css("display","none");
            $("#consult-stepthree").css("display","none");
            $("#consult-stepfour").css("display","none");
            $("#consult-stepfive").css("display","none");
            $("#consult-stepsix").css("display","none");
            $("#consult-stepseven").css("display","none");

            $("#consult-wizard :nth-child(1)").attr('class','current');
            $("#consult-wizard :nth-child(2)").removeAttr('class');
            $("#consult-wizard :nth-child(3)").removeAttr('class');
            $("#consult-wizard :nth-child(4)").removeAttr('class');
            $("#consult-wizard :nth-child(5)").removeAttr('class');
            $("#consult-wizard :nth-child(6)").removeAttr('class');
            $("#consult-wizard :nth-child(7)").removeAttr('class');
            $("#consult-wizard :nth-child(8)").removeAttr('class');

            $("#consult-stepzero").css("display","block");
            $("#consult-stepone").css("display","none");
            $("#consult-steptwo").css("display","none");
            $("#consult-stepthree").css("display","none");
            $("#consult-stepfour").css("display","none");
            $("#consult-stepfive").css("display","none");
            $("#consult-stepsix").css("display","none");
            $("#consult-stepseven").css("display","none");
            return false;
}

function on_mobile_qualify(state) {
      $('#from-pricing').attr('value', null);
      $('#package-id').attr('value', null);

      if  (state==1) {
             jQuery("#state-displayed").attr("style", "display:block;");
             jQuery("#qualify-no-state").attr("style", "display:none;");
             jQuery('input[id="state"][value="New York"]').prop("checked",true);
             jQuery("#state-selected").attr("value","2");
      }
      else
      if  (state==2) {
             jQuery("#state-displayed").attr("style", "display:block;");
             jQuery("#qualify-no-state").attr("style", "display:none;");
             jQuery('input[id="state"][value="New Jersey"]').prop("checked",true);
             jQuery("#state-selected").attr("value","1");
      }
      else
      if  (state==0) {
             jQuery("#state-displayed").attr("style", "display:none;");
             jQuery("#qualify-no-state").attr("style", "display:block;");
             jQuery("#qualify-state-label").attr("style","float:left;width:60%;padding-top:1.2em;padding-bottom:1.2em;display:none;");
             jQuery("#qualify-state").attr("style","float:left;width:12%;padding-top:1.2em;padding-bottom:1.2em;display:none;");
             jQuery("#qualify_progress_stepone").click();
             jQuery('input[id="state"][value="New York"]').prop("checked",true);
             jQuery("#state-selected").attr("value","2");
             jQuery("#package-state").attr("value","New York");

      }

      $("#qualify_progress_stepone").click();
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
      document.getElementById('ask_block').style.display='none';
      document.getElementById('consult_block').style.display='none';
      $("#qualify-stepone").attr('class','active');
      $("#qualify-steptwo").attr("style","display:none;");
      $("#qualify-stepthree").attr("style","display:none;");
      $("#qualify-stepfour").attr("style","display:none;");
      $("#qualify-stepfive").attr("style","display:none;");
      $("#qualify-stepsix").attr("style","display:none;");
      $("#qualify-stepseven").attr("style","display:none;");

      if (isMobile()) {
          jQuery('body').scrollTop(500);
      } else {
          jQuery('body').scrollTop(100);
      }
      package_step_one();
      return false;
}

function init_consult() {
    for(var i=0; i<consult_visited.length; i++) {
        consult_visited[i] = false;
    }
    return false();
}

function visit_consult(i) {
    consult_visited[i] = true;
    for(var j=i+1; j<consult_visited.length; j++) {
        consult_visited[j] = false;
    }
    return false;
}

function init_payment() {
    payment_visited[0] = false;
    payment_visited[1] = false;
    payment_visited[2] = false;
    payment_visited[3] = false;
    payment_visited[4] = false;
    on_mobile_payment();
    return false;
}

function packageChange(p) {
//         if (!$('#state-selected').val()) {
//             return; 
//         }
         let package_id =  $('#package-id').val();
         let divorce_type = divorcetypes[p];
         var state =  $('#state-selected').val();
         if (!state) {
             state = $('#state-pricelist-selected').val();
             $('#state-selected').attr("value", state);
         }
         if (!state) {
             state = 2;
             $('#state-selected').attr("value", 2);
         }

         if (qvm) {
             qvm.state = state;
             qvm.packagechange(p);
         }

         var package_type = divorce_type;
         let url = '/packages/?package_type='+package_type+'&state='+state;
         var pkg = {};
           $.get(url, function(msg) {
                     let result = "<div style='width:100%;'>";
                     for(var i=0; i<msg.length; i++) {
                         packages.add(msg[i].id, msg[i].title);
                         var str = "<div style='float:left;width:4%;margin-bottom:1.2em;'>";
                         str = str + "<input type='hidden' id='selected-package-id' name='selected-package-id' value='0'/>";
                         str = str + "<input type='hidden' id='selected-price' name='selected-price' value='0'/>";
                         str = str + "<input type='hidden' id='package_open_"+i+"' name='package_open_"+i+"' value='0'/>";
                   
//                         str = str + "<input type='radio' onclick='price_changed("+i+","+msg[i].id+","+msg[i].price+")'  name='package_selected' value='"+
//                                    msg[i].id+"'>";
                         
                         if (i==0 && !$('#from-pricing').val()) {
                           
                            str = str + "<input type='radio' onclick='price_changed("+i+","+msg[i].id+","+msg[i].price+")'  name='package_selected' checked=\"checked\"  value='"+
                                    msg[i].id+"'>";
                                    qvm.default_id = 0;
                                    qvm.default_pack_id = msg[i].id;
                                    qvm.default_price = msg[i].price;
                                    price_changed(0, +msg[i].id, msg[i].price);
  
                         }
                         else if (msg[i].id == package_id) {
                            str = str + "<input type='radio' onclick='price_changed("+i+","+msg[i].id+","+msg[i].price+")'  name='package_selected' checked=\"checked\"  value='"+
                                    msg[i].id+"'>";
                                    qvm.default_id = 0;
                                    qvm.default_pack_id = msg[i].id;
                                    qvm.default_price = msg[i].price;
                                    price_changed(0, +msg[i].id, msg[i].price);
                         } else {
                            str = str + "<input type='radio' onclick='price_changed("+i+","+msg[i].id+","+msg[i].price+")'  name='package_selected' value='"+
                                    msg[i].id+"'>";
                         }
                         str = str + "</div>";

                         str = str + "<div style='float:left;width:30%;margin-bottom:1.2em;'>"+msg[i].title+"</div>";
                         str = str + "<div style='float:left;width:6%;margin-bottom:1.2em;'>"+msg[i].price+"</div>";
                         str = str + "<div style='float:left;width:59%;margin-bottom:1.2em;'>"
                         str = str + "<div style='width:100%;'></div>";
                         str = str + "<div class='clear'></div>";
                         str = str + "<div style='width:80%; float:left;'>Services Included</div>";
                         str = str + "<div style='width:15%; float:left;'></div>";
                         str = str + "<div id='toggle_"+i+"' style='width:4%; float:left;' onclick='toggle_service("+i+");'>v</div>";
                         str = str + "<div class='clear'></div>";
                         str = str + "<div id='services_"+i+"' style='width:100%; display: none;'>";

                         for(var j=0; j<msg[i].services.length; j++) {
                             str = str + "<div style='float:left;width:80%;'> - ";
                             str = str + msg[i].services[j].title;
                             str = str + "</div>";
                             str = str + "<div style='float:left;width:19%;'>";
                             str = str + "</div>";
                             str = str + "<div class='clear'></div>";
                         }

                             str = str + "<div style='float:left;width:80%;font-weight:bold;'>  ";
                             str = str + "If you have questions about this package or additional services, please don't hesitate to contact us.";
                             str = str + "</div>";
                             str = str + "<div style='float:left;width:19%;'>";
                             str = str + "</div>";
                             str = str + "<div class='clear'></div>";

                         str = str + "</div>";
                         str = str + "</div>";
                         str = str + "</div>";

                         str = str + "<div class='clear'></div>";
                         result = result + str;

                     }
                     result = result + "</div>";
                     $("#packages-choices").html(result);

                     $.get('/states', function(msg) {
                         let result = "<select id='select-state' v-model='state' class='styled-select slate' style='width:100%;' >";
                         for(var i=0;i<msg.length;i++) {
                             if (msg[i].id===39) {
                                 result =  result+'<option value="'+msg[i].id+'" selected="selected">'+msg[i].name+'</option>';
                             } else {
                                 result =  result+'<option value="'+msg[i].id+'">'+msg[i].name+'</option>';
                             }
                         }
                         result = result + "</select>";
                         $("#qualify-state-choices").html(result);
                    });

                    $.get('/countries', function(msg) {
                         let result = "<select id='select-country' v-model='country' class='styled-select slate' style='width:100%;' >";
                         for(var i=0;i<msg.length;i++) {
                             result =  result+'<option value="'+msg[i].id+'">'+msg[i].name+'</option>';
                         }
                         result = result + "</select>";
                         $("#qualify-country-choices").html(result);
                    });


            });

            $('#select-package option:eq('+eval(divorcetypes[p]-1)+')').prop('selected', true);

    return false;
}
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
   $('#from-pricing').attr("value", null);   
   qvm.state = state;
   $("#qualify_progress_stepone").click();
   $('#state-selected').attr('value', state);
   $('#state-pricelist-selected').attr('value', state);
   $('#state-displayed').html(states[state]);
   $('#select-package option:eq(1)').prop('selected', true);
  
   if (state==2) {
         var result =  '<option selected value="2">New York</option>';
         result = result+'<option value="1">New Jersey</option>';
         $("#state-selected").html(result);

   } 
   packageChange('Uncontested');
   package_step_one();
   return false;
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

function mask_card(card) {
    var suffix = card.substring(card.length-4);
    var result = "**** **** **** "+suffix;
    return result;
}

function price_changed(id, pack_id, price) {
   $('#selected-package-id').attr('value', pack_id);
   $('#selected-price').attr('value', price);
   return false;
}
async function validate_invoice(invoice) {
    var arr = {"invoice_number": invoice};

    await $.ajax({
        type: "POST",
        url: "/verifyinvoice/",
        crossDomain: true,
        data: JSON.stringify(arr),
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        success: function (data) {
                       return true;
        },
        error: function (data) {
                        return false;
        },
        cache: false,
    }).fail(function (jqXHR, textStatus, error) {
                   return false;
    });
    return false;
}

function package_selected(state, pack, pack_type, price) {
    $('#package-id').attr('value', pack);
    $('#state-selected').attr('value', state);
    $('#state-pricelist-selected').attr('value', state);
    $('#selected-package-id').attr('value', pack);
    featured.state = state;
    qvm.state = state;
    qualify_step_zero(state);
    $('#from-pricing').attr('value', "yes");
    $('#select-package option:eq('+eval(pack_type-1)+')').prop('selected', true);
    on_mobile_select_package(state, pack, pack_type, price);
    qualify_step_zero(state);
    jQuery("#state-selected").attr("value",state);
    packageChange(divorcetypes_index[pack_type]);
    on_mobile_qualify(state);
    package_step_one();
    $('input[name=package_selected][value="'+pack+'"').attr('checked', true);
    return false;
}


function read_user(user_id) {

        $.get( "/users?id="+user_id, function( data ) {
              return data[0];
        });
        return null;
}


jQuery(document).ready(function() {
    jQuery('#qualify_progress_steptwo').click(function(e) {
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
    jQuery('#add-billing-address').click(function(e) {
           jQuery('#add-billing-address-body').css('display','block');
    });

});

function setup_stripe_package() {
    // Create a Stripe client.
    var stripe = Stripe('pk_test_T8bXfqG9ZJjwUJKcCjv8RqtV');

    // Create an instance of Elements.
    var elements = stripe.elements();

// Add an instance of the card UI component into the `card-element` <div>

    // Custom styling can be passed to options when creating an Element.
    // (Note that this demo uses a wider set of styles than the guide below.)
    var style = {
      base: {
        color: '#32325d',
        lineHeight: '18px',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    };

    // Create an instance of the card Element.
    var card = elements.create('card', {style: style});

    // Add an instance of the card Element into the `card-element` <div>.
    var ce = $('#card-element-package');

    if (ce) {
        card.mount('#card-element-package');

        // Handle real-time validation errors from the card Element.
        card.addEventListener('change', function(event) {
              var displayError = document.getElementById('card-errors-package');

             if (event.error) {
                 displayError.textContent = event.error.message;
             } else {
                 displayError.textContent = '';
             }
        });
    }

    // Handle form submission.
    var form = document.getElementById('payment-form-package');
    form.addEventListener('submit', function(event) {
      event.preventDefault();

      stripe.createToken(card).then(function(result) {
        if (result.error) {
            // Inform the user if there was an error.
            var errorElement = document.getElementById('card-errors-package');
            errorElement.textContent = result.error.message;
            qvm4.stripe_errors.push(result.error.message);
            qvm4.token=null;
        } else {
            if(qvm4.errors.length==0) {
               qvm4.redirect();
            }
            qvm4.token = result.token.id;
            qvm5.token = result.token.id;
            $("#payment-token").attr("value", result.token.id);
        }
      });
    });

}

             
ShadyDOM = {
                  force: true
};


var ps = new PerfectScrollbar('.scroll-container');

Vue.use(SocialSharing);

new Vue({
                el: '#shareapp',
                data: {
                    overriddenNetworks: {
                       "test": {
                              "sharer": "https://google.com",
                              "type": "popup"
                       },
                    }
               }
});

