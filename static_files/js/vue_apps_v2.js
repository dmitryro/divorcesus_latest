var counter = 0;
var first_name = '';
var nameoncard = '';
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

function packageChange(p) {
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

function package_selected(state, pack) {
    $('#state-selected').attr('value', state);
    featured.state = state;
    qvm.state = state;
    on_mobile_select_package(state, pack);
    qualify_step_zero(state);
    return false;
}

var paymentmethod = new Vue({
  el: '#paymentmethod',
  data: {
    credit_card: '',
    expiration: '',
    cvc: '',
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
                             "<td class='text-center'><a href='#' onclick='package_selected(2, "+msg[i].id+")'>"+msg[i].price+"</a></td>"+
                             "</tr>";
                   result = result + str;
                   packages_featured.add(msg[i].id, msg[i].title);
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
                             "<td class='text-center'><a href='#' onclick='package_selected(1, "+msg[i].id+")' >"+msg[i].price+"</a></td>"+
                             "</tr>";
                   result = result + str;
                   packages_featured.add(msg[i].id, msg[i].title);
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
                             "<td class='text-center'><a href='#' onclick='package_selected(2, "+msg[i].id+")' >"+msg[i].price+"</a></td>"+
                             "</tr>";
                   result = result + str;
                   packages_featured.add(msg[i].id, msg[i].title);
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
                             "<td class='text-center'><a href='#' onclick='package_selected(1, "+msg[i].id+")' >"+msg[i].price+"</a></td>"+
                             "</tr>";
                   result = result + str;
                   packages_featured.add(msg[i].id, msg[i].title);
             }
             this.packages = packages_featured;
             this.packages_featured = packages_featured;
             result = result + "</table>";
             $("#new_jersey_other_packages").html(result);

         });

    
 
  }
});
packageChange('Uncontested');

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
    showNewCommentModal: false
  },
  created: function () {
                         let ch = document.getElementsByClassName("dropdown-toggle").firstChild;
                         ch.remove();     
                         ch.innerHTML = "<span class='selected-tag'>Uncontested</span>";
                         let result = "<select id='select-package' class='styled-select slate' style='width:100%;' onchange='packageChange(this.value);'>";
                         for(var i=0;i<this.options.length;i++) {
                             result =  result+'<option value="'+this.options[i]+'">'+this.options[i]+'</option>';
                         }
                         result = result + "</select>";
                         $("#qualify-package-choices").html(result);
                         packageChange('Uncontested');
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
               
               this.package_price = $('#selected-price').val();
               this.package_selected = $('#selected-package-id').val();
                
               this.is_spouse_location_known = $('#is_spouse_location_known').is(":checked") ? 'yes' : 'no';
               this.are_there_children = $('#are_there_children').is(":checked") ? 'yes' : 'no';
               this.does_spouse_agree = $('#does_spouse_agree').is(":checked") ? 'yes' : 'no';
               this.is_military = $('#is_military').is(":checked") ? 'yes' : 'no';
               this.state = $('#state-selected').val();
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
      let ch = document.getElementsByClassName("dropdown-toggle").firstChild;
      ch.remove();
      packageChange('Uncontested');
      this.state = jQuery("#state-selected").val();
      this.is_spouse_location_known = 'yes';
      this.user_id = $("#current-user-id").val();
  }

})


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
    email:'',
    phone:'',
    first:'',
    last:'',
    packages: new Hash(),
    nameoncard:'',
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
           this.address_state = $('#select-state').val();
           this.first = qvm.first;
           this.last = qvm.last;
           this.email = qvm.email;
           this.user_id = qvm.user_id;   
           this.package_state = this.state;
           qvm3.packages = this.packages;
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
           $("#step_three_package").html(this.packages[this.package_selected]);
           $("#step_three_state").html(states[this.state]);
           $("#step_three_price").html(this.package_price);   
    },

    submitthree: function (event) {
               qvm3.package_state = this.package_state;
               qvm3.package_type = this.packages[this.package_selected];
               $("#step_four_package").html(this.packages[this.package_selected]);
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
    email:'',
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
    first:'',
    last:'',
    packages: new Hash()
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
               $("#name_on_card").html("<p>Name on Card: "+this.nameoncard.toString()+"</p>");
               this.phone = $('#stepthree_phone').val();
               this.email = $('#stepthree_email').val();
               this.nameoncard = $('#qnameoncard').val();
               this.state = qvm2.state;
               this.package_price = qvm2.package_price;
               this.package_type = this.package_selected;
               this.first = $('#stepthree_first').val();
               this.last = $('#stepthree_last').val();
               qvm4.address_state = this.address_state; 
               qvm4.user_id = this.user_id;               
               qvm4.nameoncard = this.nameoncard;
               qvm4.package_state = this.package_state;
               qvm4.package_selected = this.package_selected
               qvm4.package_type = this.package_selected;
               qvm4.package_price = this.package_price;              
               qvm4.packages = this.packages;

               $("#step_four_package").html(this.packages[this.package_selected]);
               $("#step_four_state").html(states[this.state]);
               $("#price-to-pay").attr("value",this.package_price);
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
      this.nameoncard = $('#nameoncard').val();
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
    packages: new Hash()
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
               qvm5.packages = this.packages;
               qvm5.package_price = this.package_price;
               qvm5.package_type = this.package_type;
               qvm5.email = this.email;
               qvm5.first = this.first;
               qvm5.last = this.last;
               qvm5.cardtype = this.cardtype;
               qvm5.cardnumber = this.cardnumber;
               qvm5.expiration = this.expiration;
               qvm5.address1 = this.address1;
               qvm5.address2 = this.address2;
               qvm5.city = this.city;
               qvm5.address_state = this.address_state;
               qvm5.package_state = this.package_state;
               qvm5.state = this.state;
               qvm5.zip = this.zip;
               qvm5.phone = this.phone;
               qvm5.user_id = this.user_id;
               qvm5.nameoncard = this.nameoncard;
               qvm5.packages = this.packages;
               qvm5.package_selected = this.package_selected;
               $.get('https://divorcesus.com/states', function(msg) {
                         let result = "<select id='select-state-stepfive' v-model='state' class='styled-select slate' style='width:100%;' >";
                         for(var i=0;i<msg.length;i++) {
                             result =  result+'<option value="'+msg[i].id+'">'+msg[i].name+'</option>';
                         }
                         result = result + "</select>";
                         $("#qualify-state-stepfive-choices").html(result);
               });

               $("#step_five_package").html(this.packages[this.package_selected]);
               $("#step_five_state").html(states[this.package_state]);
               $("#step_five_price").html(qvm3.package_price);//this.package_price);
               $("#step_five_email").html(qvm3.email);
               $("#step_five_first").html(qvm3.first);
               $("#step_five_last").html(qvm3.last);
               $("#step_five_phone").html(qvm3.phone);
               $("#step_five_cardnumber").html(qvm3.cardnumber);
               $("#step_five_card_type").html(qvm3.cardtype);
               $("#step_five_expiration").html(qvm3.expiration);
               
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
    billing_state:'',
    package_state: '',
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
    does_qualify:'',
    agree_to_start: '',
    is_spouse_location_known:'',
    are_there_children: '',
    does_spouse_agree:'',
    is_military:'',
    package_type:'',
    package_price:'',
    package_selected: '',
    packages: new Hash()
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
               this.billing_state = $('#select-state-stepfive').val();
               qvm6.email = this.email;
               qvm6.nameoncard = this.nameoncard;
               qvm6.first = this.first;
               qvm6.last = this.last;
               qvm6.address1 = this.address1;
               qvm6.address2 = this.address2;
               qvm6.city = this.city;
               qvm6.state = this.state;
               qvm6.address_state = this.address_state;
               qvm6.package_state = this.package_state;
               qvm6.billing_state = $('#select-state-stepfive').val()
               qvm6.zip = this.zip;
               qvm6.phone = this.phone;
               qvm6.user_id = this.user_id;
               qvm6.package_selected = this.package_selected;
               qvm6.packages = this.packages;
               qvm6.package_type = this.package_type;
               qvm6.package_price = this.package_price;
               $.get('https://divorcesus.com/states/?id='+this.billing_state, function(data) {
                  // $("#state").attr("value",data[0].name.toString());
                   qvm6.billing_state = data[0].name;
                   $("#qualify_final_billing_state").html("<p><strong>State: "+data[0].name.toString()+"</strong></p>");
               });

               $.get('https://divorcesus.com/states/?id='+this.address_state, function(data) {
                   qvm6.address_state = data[0].name;
                   $("#qualify_final_address_state").html("<p><strong>State: "+data[0].name.toString()+"</strong></p>");
               });


               $("#step_six_phone").attr("value",this.phone.toString());
               $("#step_six_city").attr("value",this.city.toString());
               $("#step_six_state").attr("value",states[this.state]);
               $("#step_six_zip").attr("value",this.zip.toString());
               $("#step_six_expiration").attr("value",this.expiration.toString());
               $("#step_six_email").attr("value",this.email.toString());
               $("#step_six_nameoncard").attr("value",this.nameoncard.toString());
               $("#step_six_first").attr("value",this.first.toString());
               $("#step_six_last").attr("value",this.last.toString());
               $("#step_six_address1").attr("value",this.address1.toString());
               $("#step_six_address2").attr("value",this.address2.toString());

               $("#name_on_card").html("<p>Name on Card: "+this.nameoncard.toString()+"</p>");
               $("#qualify_final_package").html("<p><strong>Package: "+this.packages[this.package_selected]+"</strong></p>");
               $("#qualify_final_state").html("<p><strong>State: "+states[this.state]+"</strong></p>");
               $("#qualify_final_price").html("<p><strong>Price: "+this.package_price+"</strong></p>");
               $("#qualify_final_email").html("<p><strong>Email: "+this.email.toString()+"</strong></p>");
               $("#qualify_final_phone").html("<p><strong>Phone: "+this.phone.toString()+"</strong></p>");
               $("#qualify_final_nameoncard").html("<p><strong>Name on Card: "+this.nameoncard.toString()+"</strong></p>");
               $("#qualify_final_first").html("<p><strong>First Name: "+this.first.toString()+"</strong></p>");
               $("#qualify_final_last").html("<p><strong>Last Name: "+this.last.toString()+"</strong></p>");
               $("#qualify_final_cardtype").html("<p><strong>Card Type: "+this.cardtype.toString()+"</strong></p>");
               $("#qualify_final_cardnumber").html("<p><strong>Card Number: **** **** **** **** </strong></p>");
               $("#qualify_final_expiration").html("<p><strong>Expiration: **/**/**</strong></p>");
               $("#qualify_final_address1").html("<p><strong>Address 1: "+this.address1.toString()+"</strong></p>");
               $("#qualify_final_address2").html("<p><strong>Address 2: "+this.address2.toString()+"</strong></p>");
               $("#qualify_final_city").html("<p><strong>City: "+this.city.toString()+"</strong></p>");
               //$("#qualify_final_state").html("<p><strong>State: "+states[this.state]+"</strong></p>");
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
    package_state: '',
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
		"nameoncard": this.nameoncard,
		"cardtype": this.cardtype,
		"cardnumber": this.cardnumber,
		"phone": this.phone,
		"address1": this.address1,
		"address2": this.address2,
		"state": this.state,
		"zip": this.zip,
                "package_type": this.package_type,
                "package_price":  $('#price-to-pay').val(),
		"user_id": $("#current-user-id").val(),
		"expiration": this.expiration,
                'token':$('#payment-token').val(),
                'amount': eval($('#price-to-pay').val()),
                "city": this.city};

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
    cardnumber:'',
    cardtype:'',
    cvc: '',
    expiration:'',
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
    nameoncard: '',
    phone: '',
    state: '',
    state_code: '',
    state_name: '',
    expiration: '',
    nameoncard: '',
    amount: '',
    token: '',
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
    nameoncard: '',
    state: '',
    state_code: '',
    state_name: '',
    amount: '', 
    token: '',
    nameoncard: '',
    cardtype:'',
    cardnumber:'',
    expiration:'',
    token: '',
  },
  methods: {
    submitone: function (event) {

    },
    submittwo: function (event) {
           $("#step_three_payments_price").html(this.amount.toString());
           vm3.first = this.first;
           vm3.last = this.last;
           vm3.state = this.state;
           vm3.email = this.email;
           vm3.amount = this.amount;
           vm3.nameoncard = this.nameoncard;
           $.get('https://divorcesus.com/states', function(msg) {
                         let result = "<select id='pay-select-state' v-model='state' class='styled-select slate' style='width:100%;' >";
                         for(var i=0;i<msg.length;i++) {
                             result =  result+'<option value="'+msg[i].id+'">'+msg[i].name+'</option>';
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
    cardtype: '',
    cardnumber: '',
    expiration: '',
  },
  methods: {
    submitone: function (event) {
    },
    submittwo: function (event) {
    },

    submitthree: function (event) {


               $("#step_three_payments_name_on_card").html(this.nameoncard);
               this.phone = vm.phone;
               this.email = vm.email;
               this.zip = $('#pay-zip').val();
               this.state = $('#pay-select-state').val(); 
               vm4.token = this.token;
               vm4.email = vm.email;
               vm4.first = this.first;
               vm4.last = this.last;
               vm4.nameoncard = this.nameoncard;
               vm4.cardtype = this.cardtype;
               vm4.cardnumber = this.cardnumber;
               vm4.expiration = this.expiration;
               vm4.address1 = this.address1;
               vm4.address2 = this.address2; 
               vm4.city = this.city;
               vm4.state = this.state;
               vm4.state_code = this.state_code;
               vm4.state_name = this.state_name;
               vm4.zip = this.zip;
               vm4.phone = vm.phone;  
               vm4.amount = this.amount;

               $.get('https://divorcesus.com/states/?id='+this.state, function(data) {
                   $("#state").attr("value",data[0].name.toString());
                   $("#final_state").html("<p><strong>State: "+data[0].name.toString()+"</strong></p>");
               });
               $("#phone").attr("value",this.phone.toString());
               $("#city").attr("value",this.city.toString());  
               //$("#state").attr("value",current_state);
               $("#zip").attr("value",this.zip.toString());
               $("#expiration").attr("value",this.expiration.toString());
               $("#email").attr("value",this.email.toString());
               $("#nameoncard").attr("value",this.nameoncard.toString());
               $("#address1").attr("value",this.address1.toString());  
               $("#address2").attr("value",this.address2.toString());
                
               $("#final_email").html("<p><strong>Email: "+this.email.toString()+"</strong></p>");
               $("#final_phone").html("<p><strong>Phone: "+this.phone.toString()+"</strong></p>");
               $("#final_nameoncard").html("<p><strong>Name on Card "+this.nameoncard.toString()+"</strong></p>");   
               $("#final_address1").html("<p><strong>Address 1: "+this.address1.toString()+"</strong></p>");   
               $("#final_address2").html("<p><strong>Address 2: "+this.address2.toString()+"</strong></p>"); 
               $("#final_city").html("<p><strong>City: "+this.city.toString()+"</strong></p>");
               //$("#final_state").html("<p><strong>State: "+current_state+"</strong></p>");  
               $("#final_zip").html("<p><strong>Zip Code: "+this.zip.toString()+"</strong></p>");
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
    cardtype: vm3.cardtype,
    cardnumber: vm3.cardnumber,
    expiration: vm3.expiration,
    amount: vm3.amount,
    token: vm3.token,
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
        "amount": eval(this.amount),
        "email": this.email,
        "first": this.first,
        "last": this.last,
        "fullname": this.nameoncard,
        "cardtype": this.cardtype,
        "cardnumber": this.cardnumber,
        "phone": this.phone,
        "address1": this.address1,
        "address2": this.address2,
        "city": this.city,
        "state": this.state,
        "zip": this.zip,
        "token": $('#payment-token').val(),
        "user_id": this.user_id,
        "expiration": this.expiration};

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
              alert("failure"+data.message);
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
    cardtype: '',
    cardnumber: '',
    expiration: '',
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
   },
   methods: {
       reset_price: function (event) {
       },
       submitone: function (event) {
           consulttwo.price = this.price;
           consulttwo.consultancy_type = this.consultancy_type;
           $.get('https://divorcesus.com/consulttypes', function(msg) {
                     let result = "<div>";
                     for(var i=0;i<msg.length;i++) {
                         str = "<div style='float:left;width:5%;margin-bottom:1.2em;'>";
                         str = str + "<input type='hidden' id='consultancy-type-"+msg[i].id+"' value='"+msg[i].price+"' />";
                         str= str + "<input type='radio' onclick='resetprice("+msg[i].price+","+msg[i].id+")'  v-model='consultancy_type'  name='consultancy_type' value='"+
                               msg[i].id+"'></div><div style='float:left;width:94%;margin-bottom:1.2em;'>"+msg[i].description+"</div><div class='clear'></div>";
                         result = result + str
                     }
                     result = result + "</div>";
                     $("#service-choices").html(result);
            });


            $.get('https://divorcesus.com/states', function(msg) {
                     let result = "<select id='consult-select-state' v-model='state' class='styled-select slate' style='width:100%;' >";
                     for(var i=0;i<msg.length;i++) {
                         result =  result+'<option value="'+msg[i].id+'">'+msg[i].name+'</option>';
                     }
                     result = result + "</select>";
                     $("#consult-state-choices").html(result);
            });

            $.get('https://divorcesus.com/countries', function(msg) {
                     let result = "<select id='consult-select-country' v-model='country' class='styled-select slate' style='width:100%;' >";
                     for(var i=0;i<msg.length;i++) {
                         result =  result+'<option value="'+msg[i].id+'">'+msg[i].name+'</option>';
                     }
                     result = result + "</select>";
                     $("#consult-country-choices").html(result);
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
     number_of_children: '',
     manner_of_entry: '',
     marital_status: '',
     purpose: '',
  },
   methods: {

       submitone: function (event) {
       },

       submittwo: function (event) {
            this.price = $('#consult_amount').val();
           
            consultthree.consultancy_type = this.consultancy_type;
            consultthree.price = this.price;
            consultthree.payment_token = this.payment_token;
   
            $.get('https://divorcesus.com/states', function(msg) {
                     let result = "<select id='consult-individual-select-state' v-model='state' class='styled-select slate' style='width:100%;' >";
                     for(var i=0;i<msg.length;i++) {
                         result =  result+'<option value="'+msg[i].id+'">'+msg[i].name+'</option>';
                     }
                     result = result + "</select>";
                     $("#consult-individual-state-choices").html(result);
            });

            $.get('https://divorcesus.com/countries', function(msg) {
                     let result = "<select id='consult-individual-select-country' v-model='country' class='styled-select slate' style='width:100%;' >";
                     for(var i=0;i<msg.length;i++) {
                         result =  result+'<option value="'+msg[i].id+'">'+msg[i].name+'</option>';
                     }
                     result = result + "</select>";
                     $("#consult-individual-country-choices").html(result);
            });


         this.billing_full_name = $('#consult_full_name').val();
         this.billing_state = $('#consult-select-state').val();
         this.billing_country = $('#consult-select-country').val();
         this.billing_zip = $('#consult_zip').val();
         this.billing_phone = $('#consult_phone').val();         
         this.billing_address1 = $('#consult_address1').val();
         this.billing_address2 =  $('#consult_address2').val();
         this.billing_city = $('#consult_city').val();
         this.billing_email = $('#consult_email').val(); 
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
   data: {
     billing_country: '',
     billing_state: '',
     cardtype: '',
     is_verified: false,
     pre_verified: '',
     billing_full_name: '',
     individual_full_name: '',
     individual_address1: '',
     individual_address2: '',
     individual_city: '',
     individual_state: '',
     individual_zip: '',
     individual_country: '',
     individual_phone: '',
     individual_email: '',
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
   },
   methods: {

       submitone: function (event) {
       },

       submittwo: function (event) {
       },

       submitthree: function (event) {
           this.individual_state = $('#consult-individual-select-state').val();
           this.individual_country = $('#consult-individual-select-country').val();
           this.payment_token = $("#payment-token").val();

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


           $.get('https://divorcesus.com/countries', function(msg) {
               let result = "<select id='consult-select-country-of-citizenship' v-model='country' class='styled-select slate' style='width:100%;' >";
                
               for(var i=0;i<msg.length;i++) {
                             result =  result+'<option value="'+msg[i].id+'">'+msg[i].name+'</option>';
               }
               result = result + "</select>";
               $("#consult-additional-country-choices").html(result);
           });

            $.get('https://divorcesus.com/children', function(msg) {
                     let result = "<select id='consult-select-children' v-model='children' class='styled-select slate' style='width:100%;' >";
                     for(var i=0;i<msg.length;i++) {
                         result =  result+'<option value="'+msg[i].id+'">'+msg[i].value+'</option>';
                     }
                     result = result + "</select>";
                     $("#consult-additional-children-choices").html(result);
            });

            $.get('https://divorcesus.com/marital', function(msg) {
                     let result = "<select id='consult-select-marital' v-model='marriage' class='styled-select slate' style='width:100%;' >";
                     for(var i=0;i<msg.length;i++) {
                         result =  result+'<option value="'+msg[i].id+'">'+msg[i].status+'</option>';
                     }
                     result = result + "</select>";
                     $("#consult-additional-marital-choices").html(result);
            });

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


var consultfour = new Vue({
   el: '#consult-stepfour',
   data: {
     billing_country: '',
     billing_state: '',
     billing_cardtype: '',
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
   },
   methods: {

       submitone: function (event) {
       },

       submittwo: function (event) {
       },

       submitthree: function (event) {
       },

       submitfour: function (event) {
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
        
 
         $.get('https://divorcesus.com/countries/'+this.billing_country+"/", function(data) {
               $("#final_consultation_billing_country").html("<p><strong>Country: "+data.name.toString()+"</strong></p>");
         })
         $.get('https://divorcesus.com/states/?id='+this.billing_state, function(data) {
               $("#final_consultation_billing_state").html("<p><strong>State: "+data[0].name.toString()+"</strong></p>");
         })

         $("#final_consultation_billing_name_on_card").html("<p><strong>Full Name: "+this.billing_full_name+"</strong></p>");
         $("#final_consultation_billing_address1").html("<p><strong>Address 1: "+this.billing_address1+"</strong></p>");
         $("#final_consultation_billing_address2").html("<p><strong>Address 2: "+this.billing_address2+"</strong></p>");
         $("#final_consultation_billing_city").html("<p><strong>City: "+this.billing_city+"</strong></p>");
         $("#final_consultation_billing_phone").html("<p><strong>Phone: "+this.billing_phone+"</strong></p>");
         $("#final_consultation_billing_email").html("<p><strong>Email: "+this.billing_email+"</strong></p>");

         $("#final_consultation_individual_fullname").html("<p><strong>Full Name: "+this.individual_full_name+"</strong></p>");
         $("#final_consultation_individual_address1").html("<p><strong>Address 1: "+this.individual_address1+"</strong></p>");
         $("#final_consultation_individual_address2").html("<p><strong>Address 2: "+this.individual_address2+"</strong></p>"); 
         $("#final_consultation_individual_city").html("<p><strong>City: "+this.individual_address2+"</strong></p>");
         $("#final_consultation_individual_zip").html("<p><strong>Zip(Postal): "+this.individual_zip+"</strong></p>");
         $("#final_consultation_individual_phone").html("<p><strong>Phone: "+this.individual_phone+"</strong></p>");
         $("#final_consultation_individual_email").html("<p><strong>Email: "+this.individual_email+"</strong></p>");
          
         $.get('https://divorcesus.com/consulttypes/'+this.consultancy_type, function(msg) {
               $("#final_consultation_consultancy_type").html("<p><strong>Consultancy Type: "+msg.description+"</strong></p>");
               $("#final_consultation_consultancy_price").html("<p><strong>Consultancy Price: "+msg.price+"</strong></p>");
         });
        
 
         $.get('https://divorcesus.com/countries/'+this.individual_country+"/", function(data) {
               $("#final_consultation_individual_country").html("<p><strong>Country: "+data.name.toString()+"</strong></p>");
         })
         $.get('https://divorcesus.com/states/?id='+this.individual_state, function(data) {
               $("#final_consultation_individual_state").html("<p><strong>State: "+data[0].name.toString()+"</strong></p>");
         })



         $.get('https://divorcesus.com/children/'+this.number_of_children+"/", function(data) {
               $("#final_consultation_number_of_children").html("<p><strong>Number of children: "+data.number.toString()+"</strong></p>");
         })

         $.get('https://divorcesus.com/marital/'+this.marital_status+"/", function(data) {
               $("#final_consultation_marital_status").html("<p><strong>Marital status: "+data.status.toString()+"</strong></p>");
         });

         $.get('https://divorcesus.com/countries/'+this.country_of_citizenship+"/", function(data) {
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

                   "payment_token": this.payment_token,
                   "price": this.price,
                   "consultancy_type": this.consultancy_type,
                   "purpose": this.purpose,
                   "marital_status": this.marital_status,
                   "country_of_citizenship": this.country_of_citizenship,
                   "number_of_children": this.number_of_children,
                   "manner_of_entry": this.manner_of_entry
             };

             $.ajax({
                    type: "POST",
                    url: "https://divorcesus.com/consult/",
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
                      alert("failure:"+data.message);
                   }
             });

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

});
