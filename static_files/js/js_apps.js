

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
     }

     var areas = document.querySelectorAll('.expandingArea');

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
      document.getElementById('ask_block').style.display='none';
      document.getElementById('consult_block').style.display='none';

      if (isMobile()) {
          jQuery('body').scrollTop(500);
      } else {
          jQuery('body').scrollTop(100);
      }
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
      document.getElementById('ask_block').style.display='none';
      document.getElementById('consult_block').style.display='none';     

      if (isMobile()) {
          jQuery('body').scrollTop(500);
      } else {
          jQuery('body').scrollTop(100);
      }
 
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
      document.getElementById('ask_block').style.display='none';
      document.getElementById('consult_block').style.display='none';

      if (isMobile()) {
          jQuery('body').scrollTop(500);
      } else {
          jQuery('body').scrollTop(100);
      }

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
      document.getElementById('ask_block').style.display='none';
      document.getElementById('consult_block').style.display='none';

      if (isMobile()) {
          jQuery('body').scrollTop(500);
      } else {
          jQuery('body').scrollTop(100);
      }

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
      document.getElementById('ask_block').style.display='none';
      document.getElementById('consult_block').style.display='none';

      if (isMobile()) {
          jQuery('body').scrollTop(500);
      } else {
          jQuery('body').scrollTop(100);
      }
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
      document.getElementById('ask_block').style.display='none';
      document.getElementById('consult_block').style.display='none';

      if (isMobile()) {
          jQuery('body').scrollTop(500);
      } else {
          jQuery('body').scrollTop(100);
      }
      return false;
  }

  function on_mobile_pricing() {
      document.getElementById('search_block').style.display='none';
      document.getElementById('home_block').style.display='none';
      document.getElementById('about_block').style.display='none';
      document.getElementById('services_block').style.display='none';
      document.getElementById('pricing_block').style.display='block';
      document.getElementById('bring-change').style.display='block';
      document.getElementById('pricing-article-show').style.display="none";
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
      document.getElementById('ask_block').style.display='none';
      document.getElementById('consult_block').style.display='none';

      if (isMobile()) {
          jQuery('body').scrollTop(500);
      } else {
          jQuery('body').scrollTop(100);
      }
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
      document.getElementById('ask_block').style.display='none';
      document.getElementById('consult_block').style.display='none';

      if (isMobile()) {
          jQuery('body').scrollTop(500);
      } else {
          jQuery('body').scrollTop(100);
      }
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
      document.getElementById('ask_block').style.display='none';
      document.getElementById('consult_block').style.display='none';

      if (isMobile()) {
          jQuery('body').scrollTop(500);
      } else {
          jQuery('body').scrollTop(100);
      }
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
      document.getElementById('ask_block').style.display='none';
      document.getElementById('consult_block').style.display='none';

      if (isMobile()) {
          jQuery('body').scrollTop(500);
      } else {
          jQuery('body').scrollTop(100);
      }
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
      document.getElementById('ask_block').style.display='none';
      document.getElementById('consult_block').style.display='none';

      if (isMobile()) {
          jQuery('body').scrollTop(500);
      } else {
          jQuery('body').scrollTop(100);
      }
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
      document.getElementById('ask_block').style.display='none';
      document.getElementById('consult_block').style.display='none';

      if (isMobile()) {
          jQuery('body').scrollTop(500);
      } else {
          jQuery('body').scrollTop(100);
      }
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
      document.getElementById('ask_block').style.display='none';
      document.getElementById('consult_block').style.display='none';

      if (isMobile()) {
          jQuery('body').scrollTop(500);
      } else {
          jQuery('body').scrollTop(100);
      }
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
      document.getElementById('ask_block').style.display='none';
      document.getElementById('consult_block').style.display='none';

      if (isMobile()) {
          jQuery('body').scrollTop(500);
      } else {
          jQuery('body').scrollTop(100);
      }
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
      document.getElementById('ask_block').style.display='none';
      document.getElementById('consult_block').style.display='none';

      if (isMobile()) {
          jQuery('body').scrollTop(500);
      } else {
          jQuery('body').scrollTop(100);
      }
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
      document.getElementById('ask_block').style.display='none';
      document.getElementById('consult_block').style.display='none';

      if (isMobile()) {
          jQuery('body').scrollTop(500);
      } else {
          jQuery('body').scrollTop(100);
      }
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
      document.getElementById('ask_block').style.display='none';
      document.getElementById('consult_block').style.display='none';

      if (isMobile()) {
          jQuery('body').scrollTop(500);
      } else {
          jQuery('body').scrollTop(100);
      }
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
      document.getElementById('ask_block').style.display='none';
      document.getElementById('consult_block').style.display='none';

      if (isMobile()) {
          jQuery('body').scrollTop(500);
      } else {
          jQuery('body').scrollTop(100);
      }
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
      document.getElementById('ask_block').style.display='none';
      document.getElementById('consult_block').style.display='none';

      if (isMobile()) {
          jQuery('body').scrollTop(500);
      } else {
          jQuery('body').scrollTop(100);
      }
      return false;
   

  }

  function on_mobile_blog() {
      jQuery(".rd-mobilepanel_toggle").click();
      
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
      document.getElementById('ask_block').style.display='none';
      document.getElementById('consult_block').style.display='none';
             
      $.ajax({
                     method: "POST",
                     url: "https://divorcesus.com/getallposts",
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


      if (isMobile()) {
          jQuery('body').scrollTop(500);
      } else {
          jQuery('body').scrollTop(100);
      }

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
      document.getElementById('ask_block').style.display='none';
      document.getElementById('consult_block').style.display='none';

      if (isMobile()) {
          jQuery('body').scrollTop(500);
      } else {
          jQuery('body').scrollTop(100);
      }

      return false;
  }



  function on_mobile_ask() {
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
      document.getElementById('faq_block').style.display='none';
      document.getElementById('ask_block').style.display='block';
      document.getElementById('consult_block').style.display='none';

      if (isMobile()) {
          jQuery('body').scrollTop(500);
      } else {
          jQuery('body').scrollTop(100);
      }

      return false;
  }


  function on_mobile_consult() {
      setup_stripe_three();
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
      document.getElementById('faq_block').style.display='none';
      document.getElementById('ask_block').style.display='none';
      document.getElementById('consult_block').style.display='block';

      if (isMobile()) {
          jQuery('body').scrollTop(500);
      } else {
          jQuery('body').scrollTop(100);
      }
      consult_step_pre_zero();
      return false;
  }

  function on_mobile_select_package(state, pack, pack_type, price) {
      if  (state==2) {

      //       jQuery("#qualify-state-label").attr("style","float:left;width:60%;padding-top:1.2em;padding-bottom:1.2em;display:block;");
      //       jQuery("#qualify-state").attr("style","float:left;width:12%;padding-top:1.2em;padding-bottom:1.2em;display:block;");
       //      jQuery("#qualify-state").html("<h4><strong>New York</strong></h4>");
             jQuery('input[id="state"][value="New York"]').prop("checked",true);
             jQuery("#state-selected").attr("value","New York");
      }
      else if  (state==1) {
   //          jQuery("#qualify-state-label").attr("style","float:left;width:60%;padding-top:1.2em;padding-bottom:1.2em;display:block;");
   //          jQuery("#qualify-state").attr("style","float:left;width:12%;padding-top:1.2em;padding-bottom:1.2em;display:block;");
    //         jQuery("#qualify-state").html("<h4><strong>New Jersey</strong></h4>");
             jQuery('input[id="state"][value="New Jersey"]').prop("checked",true);
             jQuery("#state-selected").attr("value","New Jersey");
      }
      else if  (state==0) {
             jQuery("#qualify-state-label").attr("style","float:left;width:60%;padding-top:1.2em;padding-bottom:1.2em;display:none;");
             jQuery("#qualify-state").attr("style","float:left;width:12%;padding-top:1.2em;padding-bottom:1.2em;display:none;");
             jQuery("#qualify_progress_stepone").click();
             jQuery('input[id="state"][value="New York"]').prop("checked",true);
             jQuery("#state-selected").attr("value","New York");
      }

      $('#selected-package-id').attr('value', pack);
 
      price_changed(state, pack, price);
      packageChange(divorcetypes_index[pack_type]);
      $('input[name=package_selected][value="'+pack+'"').attr('checked', true); 
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
      return false;



  }

  function on_mobile_qualify(state) {
      $('#from-pricing').attr('value', null);
      $('#package-id').attr('value', null);


      if  (state==1) {
             jQuery("#state-displayed").attr("style", "display:block;");
             jQuery("#qualify-no-state").attr("style", "display:none;");
             jQuery('input[id="state"][value="New York"]').prop("checked",true);
             jQuery("#state-selected").attr("value","New York");
      }
      else 
      if  (state==2) {
             jQuery("#state-displayed").attr("style", "display:block;");
             jQuery("#qualify-no-state").attr("style", "display:none;");
             jQuery('input[id="state"][value="New Jersey"]').prop("checked",true);
             jQuery("#state-selected").attr("value","New Jersey");      
      }
      else
      if  (state==0) {
             jQuery("#state-displayed").attr("style", "display:none;");
             jQuery("#qualify-no-state").attr("style", "display:block;");
             jQuery("#qualify-state-label").attr("style","float:left;width:60%;padding-top:1.2em;padding-bottom:1.2em;display:none;");
             jQuery("#qualify-state").attr("style","float:left;width:12%;padding-top:1.2em;padding-bottom:1.2em;display:none;");
             jQuery("#qualify_progress_stepone").click();
             jQuery('input[id="state"][value="New York"]').prop("checked",true);
             jQuery("#state-selected").attr("value","New York");
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

   function processPaymentQualify() {

   }



       function close_comments() {

          $('#comments-section').css('display','none');
          $('#comments-open').attr('value','0');

          return false;

       }

       function close_confirmation() {

          $('#confirmation-modal').css('display','none');
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
                         url: "https://divorcesus.com/addcomment?post_id="+post_id+"&body='"+comment+"'",
                         data: {}
                  }).done(function( msg ) {


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
                         url: "https://divorcesus.com/getcomments?post_id="+post_id,
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

       function search() {
              $.ajax({

                     method: "GET",

                     url: "https://divorcesus.com/searchresults?q="+$("#search").val(),

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

function subscribe() {
      $.ajax({
                     method: "POST",
                     url: "https://divorcesus.com/subscribe/",
                     data: {'email':$('#newsletter-email').val()}
      }).done(function( msg ) {
         $('#newsletter-success').css('display','block').fadeOut(1200);
      });
      return false;
}

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function resend() {

      var arr = {user_id: document.getElementById('user-id').value};

      $.ajax({
                url: "https://divorcesus.com/resendactivation/",
                type: "POST",
                crossDomain: true,
                data: JSON.stringify(arr),
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                success: function(msg) {
                    $( "div.success" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
                         setTimeout(function() {
                                $('#activation-required-app').fadeOut('slow');
                     }, 2500);

                }
            });
  
}
function confirm_info() {
  var arr = {first: document.getElementById('first').value, 
            last: document.getElementById('last').value, 
            username: document.getElementById('username').value, 
            user_id: document.getElementById('user-id').value, 
            email: document.getElementById('email').value, 
            phone: document.getElementById('phone').value};

  $.ajax(

            {
                url: "https://divorcesus.com/confirmaccount/",
                type: "POST",
                crossDomain: true,
                data: JSON.stringify(arr),
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                success: function(msg) {
                      var email_errors = false;
                      var username_initial = 0;
                      var phone_initial = 0;
                      var email_final = 0;
                      var username_final = 0;
                      
                      if (msg.error) {
                         if(msg.error.email) { 
                             $( "div.email-error.error" ).fadeIn( 300 ).delay( 500 ).fadeOut( 400 );
                             email_final = email_final + 1200;
                         }                       

                         if(msg.error.username) {
                             username_initial = email_final;
                             $( "div.username-error.error" ).delay(username_initial).fadeIn( 300 ).delay( 500 ).fadeOut(400);
                             username_final = username_final + username_initial + 1200
                         }

                         if(msg.error.phone) {
                             phone_initial = username_final + email_final;
                             $( "div.phone-error.error" ).delay(phone_initial).fadeIn( 300 ).delay( 500 ).fadeOut( 400 );
                         }


                     }
                     else {
                         $( "div.success" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
                         setTimeout(function() {
                                $('#final-app').fadeOut('slow');
                         }, 2500);
                         $("div.creds-container").html(msg.first+' '+msg.last);
                     }

                }
            }
        );

}

function ask_step_two() {
            $("#ask-stepone").css("display","none");
            $("#ask-steptwo").css("display","none");
            $("#ask-stepthree").css("display","block");
            $("#ask-stepfour").css("display","none");
            $("#ask-stepfive").css("display","none");

            $("#ask-wizard :nth-child(1)").removeAttr('class');
            $("#ask-wizard :nth-child(2)").removeAttr('class');
            $("#ask-wizard :nth-child(3)").attr('class','progress current');
            $("#ask-wizard :nth-child(4)").removeAttr('class');
            $("#ask-wizard :nth-child(5)").removeAttr('class');

            $("#ask-wizard :nth-child(1)").attr('class','progress visited');
            $("#ask-wizard :nth-child(2)").attr('class','progress visited');
            $("#ask-wizard :nth-child(4)").attr('class','progress');
            $("#ask-wizard :nth-child(5)").attr('class','progress');

            return false;
}

function ask_step_zero() {
            $("#ask-stepone").css("display","block");
            $("#ask-steptwo").css("display","none");
            $("#ask-stepthree").css("display","none");
            $("#ask-stepfour").css("display","none");
            $("#ask-stepfive").css("display","none");

            $("#ask-wizard :nth-child(1)").attr('class','progress current');
            $("#ask-wizard :nth-child(2)").removeAttr('class');
            $("#ask-wizard :nth-child(3)").removeAttr('class');
            $("#ask-wizard :nth-child(4)").removeAttr('class');
            $("#ask-wizard :nth-child(5)").removeAttr('class');
            $("#ask-wizard :nth-child(2)").attr('class','progress');
            $("#ask-wizard :nth-child(3)").attr('class','progress');
            $("#ask-wizard :nth-child(4)").attr('class','progress');
            $("#ask-wizard :nth-child(5)").attr('class','progress');

            return false;
}


function ask_set_step_one() {
            $("#ask-stepone").css("display","block");
            $("#ask-steptwo").css("display","none");
            $("#ask-stepthree").css("display","none");
            $("#ask-stepfour").css("display","none");
            $("#ask-stepfive").css("display","none");

            $("#ask-wizard :nth-child(1)").attr('class','progress current');
            $("#ask-wizard :nth-child(2)").removeAttr('class');
            $("#ask-wizard :nth-child(3)").removeAttr('class');
            $("#ask-wizard :nth-child(4)").removeAttr('class');
            $("#ask-wizard :nth-child(5)").removeAttr('class');
            $("#ask-wizard :nth-child(2)").attr('class','progress');
            $("#ask-wizard :nth-child(3)").attr('class','progress');
            $("#ask-wizard :nth-child(4)").attr('class','progress');
            $("#ask-wizard :nth-child(5)").attr('class','progress');

            return false;
}

function ask_step_one() {
            $("#ask-stepone").css("display","none");
            $("#ask-steptwo").css("display","block");
            $("#ask-stepthree").css("display","none");
            $("#ask-stepfour").css("display","none");
            $("#ask-stepfive").css("display","none");

            $("#ask-wizard :nth-child(1)").removeAttr('class');
            $("#ask-wizard :nth-child(2)").attr('class','progress current');
            $("#ask-wizard :nth-child(3)").removeAttr('class');
            $("#ask-wizard :nth-child(4)").removeAttr('class');
            $("#ask-wizard :nth-child(5)").removeAttr('class');
            $("#ask-wizard :nth-child(1)").attr('class','progress visited');
            $("#ask-wizard :nth-child(3)").attr('class','progress');
            $("#ask-wizard :nth-child(4)").attr('class','progress');
            $("#ask-wizard :nth-child(5)").attr('class','progress');

            return false;
}

        
function ask_step_three() {
            $("#ask-stepone").css("display","none");
            $("#ask-steptwo").css("display","none");
            $("#ask-stepthree").css("display","none");
            $("#ask-stepfour").css("display","block");
            $("#ask-stepfive").css("display","none");

            $("#ask-wizard :nth-child(1)").removeAttr('class');
            $("#ask-wizard :nth-child(2)").removeAttr('class');
            $("#ask-wizard :nth-child(3)").removeAttr('class');
            $("#ask-wizard :nth-child(4)").attr('class','progress current');
            $("#ask-wizard :nth-child(5)").removeAttr('class');
            $("#ask-wizard :nth-child(1)").attr('class','progress visited');
            $("#ask-wizard :nth-child(2)").attr('class','progress visited');
            $("#ask-wizard :nth-child(3)").attr('class','progress visited');
            $("#ask-wizard :nth-child(5)").attr('class','progress');


            return false;
}

function ask_step_four() {
            $("#ask-stepone").css("display","none");
            $("#ask-steptwo").css("display","none");
            $("#ask-stepthree").css("display","none");
            $("#ask-stepfour").css("display","none");
            $("#ask-stepfive").css("display","block");

            $("#ask-wizard :nth-child(1)").removeAttr('class');
            $("#ask-wizard :nth-child(2)").removeAttr('class');
            $("#ask-wizard :nth-child(3)").removeAttr('class');
            $("#ask-wizard :nth-child(4)").removeAttr('class');
            $("#ask-wizard :nth-child(5)").attr('class','progress current');
            $("#ask-wizard :nth-child(1)").attr('class','progress visited');
            $("#ask-wizard :nth-child(2)").attr('class','progress visited');
            $("#ask-wizard :nth-child(3)").attr('class','progress visited');
            $("#ask-wizard :nth-child(4)").attr('class','progress visited');
            
            return false;
}

function ask_step_five() {
            $("#ask-stepone").css("display","none");
            $("#ask-steptwo").css("display","none");
            $("#ask-stepthree").css("display","none");
            $("#ask-stepfour").css("display","none");
            $("#ask-stepfive").css("display","block");

            $("#ask-wizard :nth-child(1)").removeAttr('class');
            $("#ask-wizard :nth-child(2)").removeAttr('class');
            $("#ask-wizard :nth-child(3)").removeAttr('class');
            $("#ask-wizard :nth-child(4)").removeAttr('class');
            $("#ask-wizard :nth-child(5)").attr('class','progress current');
            $("#ask-wizard :nth-child(1)").attr('class','progress visited');
            $("#ask-wizard :nth-child(2)").attr('class','progress visited');
            $("#ask-wizard :nth-child(3)").attr('class','progress visited');
            $("#ask-wizard :nth-child(4)").attr('class','progress visited');
            

            return false;
}
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
function consult_step_zero() {
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

            return false;
}

function consult_step_one() {
            $("#consult-stepzero").css("display","none");
            $("#consult-stepone").css("display","block");
            $("#consult-steptwo").css("display","none");
            $("#consult-stepthree").css("display","none");
            $("#consult-stepfour").css("display","none");
            $("#consult-stepfive").css("display","none");
            $("#consult-stepsix").css("display","none");
            $("#consult-stepseven").css("display","none");

            $("#consult-wizard :nth-child(1)").removeAttr('class');
            $("#consult-wizard :nth-child(2)").attr('class','current')
            $("#consult-wizard :nth-child(3)").removeAttr('class');
            $("#consult-wizard :nth-child(4)").removeAttr('class');
            $("#consult-wizard :nth-child(5)").removeAttr('class');
            $("#consult-wizard :nth-child(6)").removeAttr('class');
            $("#consult-wizard :nth-child(7)").removeAttr('class');
            $("#consult-wizard :nth-child(8)").removeAttr('class'); 
           
            $("#consult-wizard :nth-child(1)").attr('class','visited');

}

function consult_step_two() {
            $("#consult-stepzero").css("display","none"); 
            $("#consult-stepone").css("display","none");
            $("#consult-steptwo").css("display","block");
            $("#consult-stepthree").css("display", "none");
            $("#consult-stepfour").css("display","none");
            $("#consult-stepfive").css("display","none");
            $("#consult-stepsix").css("display","none");
            $("#consult-stepseven").css("display","none");

            $("#consult-wizard :nth-child(1)").removeAttr('class');
            $("#consult-wizard :nth-child(2)").removeAttr('class');
            $("#consult-wizard :nth-child(3)").attr('class','current');
            $("#consult-wizard :nth-child(4)").removeAttr('class');
            $("#consult-wizard :nth-child(5)").removeAttr('class');
            $("#consult-wizard :nth-child(6)").removeAttr('class');
            $("#consult-wizard :nth-child(7)").removeAttr('class');
            $("#consult-wizard :nth-child(8)").removeAttr('class');

            $("#consult-wizard :nth-child(1)").attr('class','visited');
            $("#consult-wizard :nth-child(2)").attr('class','visited');
}

function consult_step_three() {
            $("#consult-stepzero").css("display","none"); 
            $("#consult-stepone").css("display","none");
            $("#consult-steptwo").css("display","none");
            $("#consult-stepthree").css("display", "block");
            $("#consult-stepfour").css("display", "none");
            $("#consult-stepfive").css("display","none");
            $("#consult-stepsix").css("display","none");
            $("#consult-stepseven").css("display","none");

            $("#consult-wizard :nth-child(1)").removeAttr('class');
            $("#consult-wizard :nth-child(2)").removeAttr('class');
            $("#consult-wizard :nth-child(3)").removeAttr('class');
            $("#consult-wizard :nth-child(4)").attr('class','current');
            $("#consult-wizard :nth-child(5)").removeAttr('class');
            $("#consult-wizard :nth-child(6)").removeAttr('class');
            $("#consult-wizard :nth-child(7)").removeAttr('class');
            $("#consult-wizard :nth-child(8)").removeAttr('class');

            $("#consult-wizard :nth-child(1)").attr('class','visited');
            $("#consult-wizard :nth-child(2)").attr('class','visited');
            $("#consult-wizard :nth-child(3)").attr('class','visited');
}

function consult_step_four() {
            $("#consult-stepzero").css("display","none");
            $("#consult-stepone").css("display","none");
            $("#consult-steptwo").css("display","none");
            $("#consult-stepthree").css("display", "none");
            $("#consult-stepfour").css("display", "block");
            $("#consult-stepfive").css("display","none");
            $("#consult-stepsix").css("display","none");
            $("#consult-stepseven").css("display","none");

            $("#consult-wizard :nth-child(1)").removeAttr('class');
            $("#consult-wizard :nth-child(2)").removeAttr('class');
            $("#consult-wizard :nth-child(3)").removeAttr('class');
            $("#consult-wizard :nth-child(4)").removeAttr('class');
            $("#consult-wizard :nth-child(5)").attr('class','current');
            $("#consult-wizard :nth-child(6)").removeAttr('class');
            $("#consult-wizard :nth-child(7)").removeAttr('class');
            $("#consult-wizard :nth-child(8)").removeAttr('class');   

            $("#consult-wizard :nth-child(1)").attr('class','visited');
            $("#consult-wizard :nth-child(2)").attr('class','visited');
            $("#consult-wizard :nth-child(3)").attr('class','visited');
            $("#consult-wizard :nth-child(4)").attr('class','visited');
}

function consult_step_five() {
            $("#consult-stepzero").css("display","none");  
            $("#consult-stepone").css("display","none");
            $("#consult-steptwo").css("display","none");
            $("#consult-stepthree").css("display", "none");
            $("#consult-stepfour").css("display", "none");
            $("#consult-stepfive").css("display","block");
            $("#consult-stepsix").css("display","none");
            $("#consult-stepseven").css("display","none");

            $("#consult-wizard :nth-child(1)").removeAttr('class');
            $("#consult-wizard :nth-child(2)").removeAttr('class');
            $("#consult-wizard :nth-child(3)").removeAttr('class');
            $("#consult-wizard :nth-child(4)").removeAttr('class');
            $("#consult-wizard :nth-child(5)").removeAttr('class');
            $("#consult-wizard :nth-child(6)").attr('class','current');
            $("#consult-wizard :nth-child(7)").removeAttr('class');
            $("#consult-wizard :nth-child(8)").removeAttr('class'); 

            $("#consult-wizard :nth-child(1)").attr('class','visited');
            $("#consult-wizard :nth-child(2)").attr('class','visited');
            $("#consult-wizard :nth-child(3)").attr('class','visited');
            $("#consult-wizard :nth-child(4)").attr('class','visited');
            $("#consult-wizard :nth-child(5)").attr('class','visited');
}

function consult_step_six() {
            $("#consult-stepzero").css("display","none");
            $("#consult-stepone").css("display","none");
            $("#consult-steptwo").css("display","none");
            $("#consult-stepthree").css("display", "none");
            $("#consult-stepfour").css("display", "none");
            $("#consult-stepfive").css("display","none");
            $("#consult-stepsix").css("display","block");
            $("#consult-stepseven").css("display","none");

            $("#consult-wizard :nth-child(1)").removeAttr('class');
            $("#consult-wizard :nth-child(2)").removeAttr('class');
            $("#consult-wizard :nth-child(3)").removeAttr('class');
            $("#consult-wizard :nth-child(4)").removeAttr('class');
            $("#consult-wizard :nth-child(5)").removeAttr('class');
            $("#consult-wizard :nth-child(6)").removeAttr('class');
            $("#consult-wizard :nth-child(7)").attr('class','current');
            $("#consult-wizard :nth-child(8)").removeAttr('class');            
 
            $("#consult-wizard :nth-child(1)").attr('class','visited');
            $("#consult-wizard :nth-child(2)").attr('class','visited');
            $("#consult-wizard :nth-child(3)").attr('class','visited');
            $("#consult-wizard :nth-child(4)").attr('class','visited');
            $("#consult-wizard :nth-child(5)").attr('class','visited');
            $("#consult-wizard :nth-child(6)").attr('class','visited'); 
}


function consult_step_seven() {
            $("#consult-stepzero").css("display","none");
            $("#consult-stepone").css("display","none");
            $("#consult-steptwo").css("display","none");
            $("#consult-stepthree").css("display", "none");
            $("#consult-stepfour").css("display", "none");
            $("#consult-stepfive").css("display","none");
            $("#consult-stepsix").css("display","none");
            $("#consult-stepseven").css("display","block");

            $("#consult-wizard :nth-child(1)").removeAttr('class');
            $("#consult-wizard :nth-child(2)").removeAttr('class');
            $("#consult-wizard :nth-child(3)").removeAttr('class');
            $("#consult-wizard :nth-child(4)").removeAttr('class');
            $("#consult-wizard :nth-child(5)").removeAttr('class');
            $("#consult-wizard :nth-child(6)").removeAttr('class');
            $("#consult-wizard :nth-child(7)").removeAttr('class');
            $("#consult-wizard :nth-child(8)").attr('class','current');

            $("#consult-wizard :nth-child(1)").attr('class','visited');
            $("#consult-wizard :nth-child(2)").attr('class','visited');
            $("#consult-wizard :nth-child(3)").attr('class','visited');
            $("#consult-wizard :nth-child(4)").attr('class','visited');
            $("#consult-wizard :nth-child(5)").attr('class','visited');
            $("#consult-wizard :nth-child(6)").attr('class','visited');
            $("#consult-wizard :nth-child(7)").attr('class','visited');
}

function qualify_progress_step_one() {

    $("#qualify-stepone").css("display","block");
    $("#qualify-steptwo").css("display","none");
    $("#qualify-stepthree").css("display","none");
    $("#qualify-stepfour").css("display","none");
    $("#qualify-stepfive").css("display","none");
    $("#qualify-stepsix").css("display","none");
    $("#qualify-stepseven").css("display","none");
    $("#qualify-stepeight").css("display","none");

    $("#qualify-wizard :nth-child(1)").attr('class','current');
    $("#qualify-wizard :nth-child(2)").removeAttr('class');
    $("#qualify-wizard :nth-child(3)").removeAttr('class');
    $("#qualify-wizard :nth-child(4)").removeAttr('class');
    $("#qualify-wizard :nth-child(5)").removeAttr('class');
    $("#qualify-wizard :nth-child(6)").removeAttr('class');
    $("#qualify-wizard :nth-child(7)").removeAttr('class');
    $("#qualify-wizard :nth-child(8)").removeAttr('class');
    return false;
}

function qualify_progress_step_two() {
    $("#qualify-stepone").css("display","none");
    $("#qualify-steptwo").css("display","block");
    $("#qualify-stepthree").css("display","none");
    $("#qualify-stepfour").css("display","none");
    $("#qualify-stepfive").css("display","none");
    $("#qualify-stepsix").css("display","none");
    $("#qualify-stepseven").css("display","none");
    $("#qualify-stepeight").css("display","none");

    $("#qualify-wizard :nth-child(1)").attr('class','visited');
    $("#qualify-wizard :nth-child(2)").attr('class','current');
    $("#qualify-wizard :nth-child(3)").removeAttr('class');
    $("#qualify-wizard :nth-child(4)").removeAttr('class');
    $("#qualify-wizard :nth-child(5)").removeAttr('class');
    $("#qualify-wizard :nth-child(6)").removeAttr('class');
    $("#qualify-wizard :nth-child(7)").removeAttr('class');
    $("#qualify-wizard :nth-child(8)").removeAttr('class');
    return false;
}

function qualify_progress_step_three() {
    $('.ElementsApp').attr("id","payment-form-two");
    setup_stripe_package();

    $("#qualify-stepone").css("display","none");
    $("#qualify-steptwo").css("display","none");
    $("#qualify-stepthree").css("display","block");
    $("#qualify-stepfour").css("display","none");
    $("#qualify-stepfive").css("display","none");
    $("#qualify-stepsix").css("display","none");
    $("#qualify-stepseven").css("display","none");
    $("#qualify-stepeight").css("display","none");

    $("#qualify-wizard :nth-child(1)").attr('class','visited');
    $("#qualify-wizard :nth-child(2)").attr('class','visited');
    $("#qualify-wizard :nth-child(3)").attr('class','current');
    $("#qualify-wizard :nth-child(4)").removeAttr('class');
    $("#qualify-wizard :nth-child(5)").removeAttr('class');
    $("#qualify-wizard :nth-child(6)").removeAttr('class');
    $("#qualify-wizard :nth-child(7)").removeAttr('class');
    $("#qualify-wizard :nth-child(8)").removeAttr('class');

    return false;
}

function qualify_progress_step_four() {

    $("#qualify-stepone").css("display","none");
    $("#qualify-steptwo").css("display","none");
    $("#qualify-stepthree").css("display","none");
    $("#qualify-stepfour").css("display","block");
    $("#qualify-stepfive").css("display","none");
    $("#qualify-stepsix").css("display","none");
    $("#qualify-stepseven").css("display","none");
    $("#qualify-stepeight").css("display","none");

    $("#qualify-wizard :nth-child(1)").attr('class','visited');
    $("#qualify-wizard :nth-child(2)").attr('class','visited');
    $("#qualify-wizard :nth-child(3)").attr('class','visited');
    $("#qualify-wizard :nth-child(4)").attr('class','current');
    $("#qualify-wizard :nth-child(5)").removeAttr('class');
    $("#qualify-wizard :nth-child(6)").removeAttr('class');
    $("#qualify-wizard :nth-child(7)").removeAttr('class');
    $("#qualify-wizard :nth-child(8)").removeAttr('class');

    return false;
}

function qualify_progress_step_five() {

    $("#qualify-stepone").css("display","none");
    $("#qualify-steptwo").css("display","none");
    $("#qualify-stepthree").css("display","none");
    $("#qualify-stepfour").css("display","none");
    $("#qualify-stepfive").css("display","block");
    $("#qualify-stepsix").css("display","none");
    $("#qualify-stepseven").css("display","none");
    $("#qualify-stepeight").css("display","none");

    $("#qualify-wizard :nth-child(1)").attr('class','visited');
    $("#qualify-wizard :nth-child(2)").attr('class','visited');
    $("#qualify-wizard :nth-child(3)").attr('class','visited');
    $("#qualify-wizard :nth-child(4)").attr('class','visited');
    $("#qualify-wizard :nth-child(5)").attr('class','current');
    $("#qualify-wizard :nth-child(6)").removeAttr('class');
    $("#qualify-wizard :nth-child(7)").removeAttr('class');
    $("#qualify-wizard :nth-child(8)").removeAttr('class');

    return false;
}

function qualify_progress_step_six() {

    $("#qualify-stepone").css("display","none");
    $("#qualify-steptwo").css("display","none");
    $("#qualify-stepthree").css("display","none");
    $("#qualify-stepfour").css("display","none");
    $("#qualify-stepfive").css("display","none");
    $("#qualify-stepsix").css("display","block");
    $("#qualify-stepseven").css("display","none");
    $("#qualify-stepeight").css("display","none");

    $("#qualify-wizard :nth-child(1)").attr('class','visited');
    $("#qualify-wizard :nth-child(2)").attr('class','visited');
    $("#qualify-wizard :nth-child(3)").attr('class','visited');
    $("#qualify-wizard :nth-child(4)").attr('class','visited');
    $("#qualify-wizard :nth-child(5)").attr('class','visited');
    $("#qualify-wizard :nth-child(6)").attr('class','current');
    $("#qualify-wizard :nth-child(7)").removeAttr('class');
    $("#qualify-wizard :nth-child(8)").removeAttr('class');

    return false;
}

function qualify_progress_step_seven() {

    $("#qualify-stepone").css("display","none");
    $("#qualify-steptwo").css("display","none");
    $("#qualify-stepthree").css("display","none");
    $("#qualify-stepfour").css("display","none");
    $("#qualify-stepfive").css("display","none");
    $("#qualify-stepsix").css("display","none");
    $("#qualify-stepseven").css("display","block");
    $("#qualify-stepeight").css("display","none");

    $("#qualify-wizard :nth-child(1)").attr('class','visited');
    $("#qualify-wizard :nth-child(2)").attr('class','visited');
    $("#qualify-wizard :nth-child(3)").attr('class','visited');
    $("#qualify-wizard :nth-child(4)").attr('class','visited');
    $("#qualify-wizard :nth-child(5)").attr('class','visited');
    $("#qualify-wizard :nth-child(6)").attr('class','visited');
    $("#qualify-wizard :nth-child(7)").attr('class','current');
    $("#qualify-wizard :nth-child(8)").removeAttr('class');

    return false;
}

function qualify_progress_step_eight() {

    $("#qualify-stepone").css("display","none");
    $("#qualify-steptwo").css("display","none");
    $("#qualify-stepthree").css("display","none");
    $("#qualify-stepfour").css("display","none");
    $("#qualify-stepfive").css("display","none");
    $("#qualify-stepsix").css("display","none");
    $("#qualify-stepseven").css("display","none");
    $("#qualify-stepeight").css("display","block");

    $("#qualify-wizard :nth-child(1)").attr('class','visited');
    $("#qualify-wizard :nth-child(2)").attr('class','visited');
    $("#qualify-wizard :nth-child(3)").attr('class','visited');
    $("#qualify-wizard :nth-child(4)").attr('class','visited');
    $("#qualify-wizard :nth-child(5)").attr('class','visited');
    $("#qualify-wizard :nth-child(6)").attr('class','visited');
    $("#qualify-wizard :nth-child(7)").attr('class','visited');
    $("#qualify-wizard :nth-child(8)").attr('class','current');

    return false;
}

function qualify_next_one() {
    $("#qualify-stepone").css("display","none");
    $("#qualify-steptwo").css("display","block");
    $("#qualify-stepthree").css("display","none");
    $("#qualify-stepfour").css("display","none");
    $("#qualify-stepfive").css("display","none");
    $("#qualify-stepsix").css("display","none");
    $("#qualify-stepseven").css("display","none");

    $("#qualify-wizard :nth-child(1)").attr('class','visited');
    $("#qualify-wizard :nth-child(2)").attr('class','current');
    $("#qualify-wizard :nth-child(3)").removeAttr('class');
    $("#qualify-wizard :nth-child(4)").removeAttr('class');
    $("#qualify-wizard :nth-child(5)").removeAttr('class');
    $("#qualify-wizard :nth-child(6)").removeAttr('class');
    $("#qualify-wizard :nth-child(7)").removeAttr('class');
    $("#qualify-wizard :nth-child(8)").removeAttr('class');
    return false;
}

function qualify_next_two() {
    $("#qualify-stepone").css("display","none");
    $("#qualify-steptwo").css("display","none");
    $("#qualify-stepthree").css("display","block");
    $("#qualify-stepfour").css("display","none");
    $("#qualify-stepfive").css("display","none");
    $("#qualify-stepsix").css("display","none");
    $("#qualify-stepseven").css("display","none");

    $("#qualify-wizard :nth-child(1)").attr('class','visited');
    $("#qualify-wizard :nth-child(2)").attr('class','visited');
    $("#qualify-wizard :nth-child(3)").attr('class','current');
    $("#qualify-wizard :nth-child(4)").removeAttr('class');
    $("#qualify-wizard :nth-child(5)").removeAttr('class');
    $("#qualify-wizard :nth-child(6)").removeAttr('class');
    $("#qualify-wizard :nth-child(7)").removeAttr('class');
    $("#qualify-wizard :nth-child(8)").removeAttr('class');
    return false;
}

function qualify_next_three() {
    $('.ElementsApp').attr("id","payment-form-two");
    setup_stripe_package();
    $("#qualify-stepone").css("display","none");
    $("#qualify-steptwo").css("display","none");
    $("#qualify-stepthree").css("display","none");
    $("#qualify-stepfour").css("display","block");
    $("#qualify-stepfive").css("display","none");
    $("#qualify-stepsix").css("display","none");
    $("#qualify-stepseven").css("display","none");


    $("#qualify-wizard :nth-child(1)").attr('class','visited');
    $("#qualify-wizard :nth-child(2)").attr('class','visited');
    $("#qualify-wizard :nth-child(3)").attr('class','visited');
    $("#qualify-wizard :nth-child(4)").attr('class','current');
    $("#qualify-wizard :nth-child(5)").removeAttr('class');
    $("#qualify-wizard :nth-child(6)").removeAttr('class');
    $("#qualify-wizard :nth-child(7)").removeAttr('class');
    $("#qualify-wizard :nth-child(8)").removeAttr('class');

    return false;
}

function qualify_next_four() {
    $("#qualify-stepone").css("display","none");
    $("#qualify-steptwo").css("display","none");
    $("#qualify-stepthree").css("display","none");
    $("#qualify-stepfour").css("display","none");
    $("#qualify-stepfive").css("display","block");
    $("#qualify-stepsix").css("display","none");
    $("#qualify-stepseven").css("display","none");

    $("#qualify-wizard :nth-child(1)").attr('class','visited');
    $("#qualify-wizard :nth-child(2)").attr('class','visited');
    $("#qualify-wizard :nth-child(3)").attr('class','visited');
    $("#qualify-wizard :nth-child(4)").attr('class','visited');
    $("#qualify-wizard :nth-child(5)").attr('class','current');
    $("#qualify-wizard :nth-child(6)").removeAttr('class');
    $("#qualify-wizard :nth-child(7)").removeAttr('class');
    $("#qualify-wizard :nth-child(8)").removeAttr('class');

    return false;
}

function qualify_next_five() {
    $("#qualify-stepone").css("display","none");
    $("#qualify-steptwo").css("display","none");
    $("#qualify-stepthree").css("display","none");
    $("#qualify-stepfour").css("display","none");
    $("#qualify-stepfive").css("display","none");
    $("#qualify-stepsix").css("display","block");
    $("#qualify-stepseven").css("display","none");

    $("#qualify-wizard :nth-child(1)").attr('class','visited');
    $("#qualify-wizard :nth-child(2)").attr('class','visited');
    $("#qualify-wizard :nth-child(3)").attr('class','visited');
    $("#qualify-wizard :nth-child(4)").attr('class','visited');
    $("#qualify-wizard :nth-child(5)").attr('class','visited');
    $("#qualify-wizard :nth-child(6)").attr('class','current');
    $("#qualify-wizard :nth-child(7)").removeAttr('class');
    $("#qualify-wizard :nth-child(8)").removeAttr('class');

    return false;
}

function qualify_next_six() {
/*
    $.ajax({
        method: "POST",
        url: "https://divorcesus.com/checkout/",
        data: {'token':$('#payment-token').val(), 'amount': $('#price-to-pay').val()}
    }).done(function( msg ) {
        $('#price-to-pay').attr('value', 0);
    });
*/
    $("#qualify-stepone").css("display","none");
    $("#qualify-steptwo").css("display","none");
    $("#qualify-stepthree").css("display","none");
    $("#qualify-stepfour").css("display","none");
    $("#qualify-stepfive").css("display","none");
    $("#qualify-stepsix").css("display","none");
    $("#qualify-stepseven").css("display","block");

    $("#qualify-wizard :nth-child(1)").attr('class','visited');
    $("#qualify-wizard :nth-child(2)").attr('class','visited');
    $("#qualify-wizard :nth-child(3)").attr('class','visited');
    $("#qualify-wizard :nth-child(4)").attr('class','visited');
    $("#qualify-wizard :nth-child(5)").attr('class','visited');
    $("#qualify-wizard :nth-child(6)").attr('class','visited');
    $("#qualify-wizard :nth-child(7)").attr('class','current');
    $("#qualify-wizard :nth-child(8)").removeAttr('class');

    return false;
}

function qualify_next_seven() {
    return false;
}

function qualify_next_eight() {
    return false;
}

function makepayment_step_one() {
    $('.ElementsApp').attr("id","payment-form");

    $("#stepone").css("display","block");
    $("#steptwo").css("display","none");
    $("#stepthree").css("display","none");
    $("#stepfour").css("display","none");
    $("#stepfive").css("display","none");

    $("#wizard :nth-child(1)").attr('class','current');
    $("#wizard :nth-child(2)").removeAttr('class');
    $("#wizard :nth-child(3)").removeAttr('class');
    $("#wizard :nth-child(4)").removeAttr('class');
    $("#wizard :nth-child(5)").removeAttr('class');

    return false;
}

function makepayment_step_two() {
    $("#stepone").css("display","none");
    $("#steptwo").css("display","block");
    $("#stepthree").css("display","none");
    $("#stepfour").css("display","none");
    $("#stepfive").css("display","none");

    $("#wizard :nth-child(1)").attr('class','visited');
    $("#wizard :nth-child(2)").attr('class','current');
    $("#wizard :nth-child(3)").removeAttr('class');
    $("#wizard :nth-child(4)").removeAttr('class');
    $("#wizard :nth-child(5)").removeAttr('class');

    return false;
}

function makepayment_step_three() {
    $("#stepone").css("display","none");
    $("#steptwo").css("display","none");
    $("#stepthree").css("display","block");
    $("#stepfour").css("display","none");
    $("#stepfive").css("display","none");

    $("#wizard :nth-child(1)").attr('class','visited');
    $("#wizard :nth-child(2)").attr('class','visited');
    $("#wizard :nth-child(3)").attr('class','current');
    $("#wizard :nth-child(4)").removeAttr('class');
    $("#wizard :nth-child(5)").removeAttr('class');

    return false;
}

function makepayment_step_four() {
    $("#stepone").css("display","none");
    $("#steptwo").css("display","none");
    $("#stepthree").css("display","none");
    $("#stepfour").css("display","block");
    $("#stepfive").css("display","none");

    $("#wizard :nth-child(1)").attr('class','visited');
    $("#wizard :nth-child(2)").attr('class','visited');
    $("#wizard :nth-child(3)").attr('class','visited');
    $("#wizard :nth-child(4)").attr('class','current');
    $("#wizard :nth-child(5)").removeAttr('class');

    return false;
}

function makepayment_step_five() {
    $("#stepone").css("display","none");
    $("#steptwo").css("display","none");
    $("#stepthree").css("display","none");
    $("#stepfour").css("display","none");
    $("#stepfive").css("display","block");

    $("#wizard :nth-child(1)").attr('class','visited');
    $("#wizard :nth-child(2)").attr('class','visited');
    $("#wizard :nth-child(3)").attr('class','visited');
    $("#wizard :nth-child(4)").attr('class','visited');
    $("#wizard :nth-child(5)").attr('class','current');

    return false;
}

function makepayment_next_one() {
    $('.ElementsApp').attr("id","payment-form");
    var counter = eval($("#counter").val());

    $("#stepone").css("display","none");
    $("#steptwo").css("display","block");
    $("#stepthree").css("display","none");
    $("#stepfour").css("display","none");
    $("#stepfive").css("display","none");

    $("#wizard :nth-child(1)").attr('class','visited');
    $("#wizard :nth-child(2)").attr('class','current');
    $("#wizard :nth-child(3)").removeAttr('class');
    $("#wizard :nth-child(4)").removeAttr('class');
    $("#wizard :nth-child(5)").removeAttr('class');

    return false;
}

function makepayment_next_two() {
    var counter = eval($("#counter").val());

    $("#stepone").css("display","none");
    $("#steptwo").css("display","none");
    $("#stepthree").css("display","block");
    $("#stepfour").css("display","none");
    $("#stepfive").css("display","none");

    $("#wizard :nth-child(1)").attr('class','visited');
    $("#wizard :nth-child(2)").attr('class','visited');
    $("#wizard :nth-child(3)").attr('class','current');
    $("#wizard :nth-child(4)").removeAttr('class');
    $("#wizard :nth-child(5)").removeAttr('class');

    return false;
}

function makepayment_next_three() {
    var counter = eval($("#counter").val());

    $("#stepone").css("display","none");
    $("#steptwo").css("display","none");
    $("#stepthree").css("display","none");
    $("#stepfour").css("display","block");
    $("#stepfive").css("display","none");

    $("#wizard :nth-child(1)").attr('class','visited');
    $("#wizard :nth-child(2)").attr('class','visited');
    $("#wizard :nth-child(3)").attr('class','visited');
    $("#wizard :nth-child(4)").attr('class','current');
    $("#wizard :nth-child(5)").removeAttr('class');

    return false;
}

function makepayment_next_four() {
    var counter = eval($("#counter").val());

/*
    $.ajax({
        method: "POST",
        url: "https://divorcesus.com/checkout/",
        data: {'token':$('#payment-token').val(), 'amount': $('#price-to-pay').val()}
    }).done(function( msg ) {
        alert(msg);
    });

*/
    $("#stepone").css("display","none");
    $("#steptwo").css("display","none");
    $("#stepthree").css("display","none");
    $("#stepfour").css("display","none");
    $("#stepfive").css("display","block");

    $("#wizard :nth-child(1)").attr('class','visited');
    $("#wizard :nth-child(2)").attr('class','visited');
    $("#wizard :nth-child(3)").attr('class','visited');
    $("#wizard :nth-child(4)").attr('class','visited');
    $("#wizard :nth-child(5)").attr('class','current');

    return false;
}

function makepayment_next_five() {
    return false;
}


function package_step_one() {
    $("#qualify-stepone").css("display","block");
    $("#qualify-steptwo").css("display","none");
    $("#qualify-stepthree").css("display","none");
    $("#qualify-stepfour").css("display","none");
    $("#qualify-stepfive").css("display","none");
    $("#qualify-stepsix").css("display","none");
    $("#qualify-stepseven").css("display","none");
    $("#qualify-stepeight").css("display","none");

    $("#qualify-wizard :nth-child(1)").attr('class','current');
    $("#qualify-wizard :nth-child(2)").removeAttr('class');
    $("#qualify-wizard :nth-child(3)").removeAttr('class');
    $("#qualify-wizard :nth-child(4)").removeAttr('class');
    $("#qualify-wizard :nth-child(5)").removeAttr('class');
    $("#qualify-wizard :nth-child(6)").removeAttr('class');
    $("#qualify-wizard :nth-child(7)").removeAttr('class');
    $("#qualify-wizard :nth-child(8)").removeAttr('class');

    return false;
}

function package_step_two() {
    $("#qualify-stepone").css("display","none");
    $("#qualify-steptwo").css("display","block");
    $("#qualify-stepthree").css("display","none");
    $("#qualify-stepfour").css("display","none");
    $("#qualify-stepfive").css("display","none");
    $("#qualify-stepsix").css("display","none");
    $("#qualify-stepseven").css("display","none");
    $("#qualify-stepeight").css("display","none");

    $("#qualify-wizard :nth-child(1)").attr('class','visited');
    $("#qualify-wizard :nth-child(2)").attr('class','current');
    $("#qualify-wizard :nth-child(3)").removeAttr('class');
    $("#qualify-wizard :nth-child(4)").removeAttr('class');
    $("#qualify-wizard :nth-child(5)").removeAttr('class');
    $("#qualify-wizard :nth-child(6)").removeAttr('class');
    $("#qualify-wizard :nth-child(7)").removeAttr('class');
    $("#qualify-wizard :nth-child(8)").removeAttr('class');

    return false;
}

function package_step_three() {
    $("#qualify-stepone").css("display","none");
    $("#qualify-steptwo").css("display","none");
    $("#qualify-stepthree").css("display","block");
    $("#qualify-stepfour").css("display","none");
    $("#qualify-stepfive").css("display","none");
    $("#qualify-stepsix").css("display","none");
    $("#qualify-stepseven").css("display","none");   
    $("#qualify-stepeight").css("display","none");

    $("#qualify-wizard :nth-child(1)").attr('class','visited');
    $("#qualify-wizard :nth-child(2)").attr('class','visited');
    $("#qualify-wizard :nth-child(3)").attr('class','current');
    $("#qualify-wizard :nth-child(4)").removeAttr('class');
    $("#qualify-wizard :nth-child(5)").removeAttr('class');
    $("#qualify-wizard :nth-child(6)").removeAttr('class');
    $("#qualify-wizard :nth-child(7)").removeAttr('class');
    $("#qualify-wizard :nth-child(8)").removeAttr('class');

    return false;
}

function package_step_four() {
    $("#qualify-stepone").css("display","none");
    $("#qualify-steptwo").css("display","none");
    $("#qualify-stepthree").css("display","none");
    $("#qualify-stepfour").css("display","block");
    $("#qualify-stepfive").css("display","none");
    $("#qualify-stepsix").css("display","none");
    $("#qualify-stepseven").css("display","none");
    $("#qualify-stepeight").css("display","none");

    $("#qualify-wizard :nth-child(1)").attr('class','visited');
    $("#qualify-wizard :nth-child(2)").attr('class','visited');
    $("#qualify-wizard :nth-child(3)").attr('class','visited');
    $("#qualify-wizard :nth-child(4)").attr('class','current');
    $("#qualify-wizard :nth-child(5)").removeAttr('class');
    $("#qualify-wizard :nth-child(6)").removeAttr('class');
    $("#qualify-wizard :nth-child(7)").removeAttr('class');
    $("#qualify-wizard :nth-child(8)").removeAttr('class');

    return false;
}

function package_step_five() {
    $("#qualify-stepone").css("display","none");
    $("#qualify-steptwo").css("display","none");
    $("#qualify-stepthree").css("display","none");
    $("#qualify-stepfour").css("display","none");
    $("#qualify-stepfive").css("display","block");
    $("#qualify-stepsix").css("display","none");
    $("#qualify-stepseven").css("display","none");
    $("#qualify-stepeight").css("display","none");

    $("#qualify-wizard :nth-child(1)").attr('class','visited');
    $("#qualify-wizard :nth-child(2)").attr('class','visited');
    $("#qualify-wizard :nth-child(3)").attr('class','visited');
    $("#qualify-wizard :nth-child(4)").attr('class','visited');
    $("#qualify-wizard :nth-child(5)").attr('class','current');
    $("#qualify-wizard :nth-child(6)").removeAttr('class');
    $("#qualify-wizard :nth-child(7)").removeAttr('class');
    $("#qualify-wizard :nth-child(8)").removeAttr('class');

    return false;
}

function package_step_six() {
    $("#qualify-stepone").css("display","none");
    $("#qualify-steptwo").css("display","none");
    $("#qualify-stepthree").css("display","none");
    $("#qualify-stepfour").css("display","none");
    $("#qualify-stepfive").css("display","none");
    $("#qualify-stepsix").css("display","block");
    $("#qualify-stepseven").css("display","none");
    $("#qualify-stepeight").css("display","none");

    $("#qualify-wizard :nth-child(1)").attr('class','visited');
    $("#qualify-wizard :nth-child(2)").attr('class','visited');
    $("#qualify-wizard :nth-child(3)").attr('class','visited');
    $("#qualify-wizard :nth-child(4)").attr('class','visited');
    $("#qualify-wizard :nth-child(5)").attr('class','visited');
    $("#qualify-wizard :nth-child(6)").attr('class','current');
    $("#qualify-wizard :nth-child(7)").removeAttr('class');
    $("#qualify-wizard :nth-child(8)").removeAttr('class');

    return false;
}

function package_step_seven() {

    $("#qualify-stepone").css("display","none");
    $("#qualify-steptwo").css("display","none");
    $("#qualify-stepthree").css("display","none");
    $("#qualify-stepfour").css("display","none");
    $("#qualify-stepfive").css("display","none");
    $("#qualify-stepsix").css("display","none");
    $("#qualify-stepseven").css("display","block");
    $("#qualify-stepeight").css("display","none");

    $("#qualify-wizard :nth-child(1)").attr('class','visited');
    $("#qualify-wizard :nth-child(2)").attr('class','visited');
    $("#qualify-wizard :nth-child(3)").attr('class','visited');
    $("#qualify-wizard :nth-child(4)").attr('class','visited');
    $("#qualify-wizard :nth-child(5)").attr('class','visited');
    $("#qualify-wizard :nth-child(6)").attr('class','visited');
    $("#qualify-wizard :nth-child(7)").attr('class','current');
    $("#qualify-wizard :nth-child(8)").removeAttr('class');

    return false;
}

function package_step_eight() {

    $("#qualify-stepone").css("display","none");
    $("#qualify-steptwo").css("display","none");
    $("#qualify-stepthree").css("display","none");
    $("#qualify-stepfour").css("display","none");
    $("#qualify-stepfive").css("display","none");
    $("#qualify-stepsix").css("display","none");
    $("#qualify-stepseven").css("display","none");
    $("#qualify-stepeight").css("display","block");

    $("#qualify-wizard :nth-child(1)").attr('class','visited');
    $("#qualify-wizard :nth-child(2)").attr('class','visited');
    $("#qualify-wizard :nth-child(3)").attr('class','visited');
    $("#qualify-wizard :nth-child(4)").attr('class','visited');
    $("#qualify-wizard :nth-child(5)").attr('class','visited');
    $("#qualify-wizard :nth-child(6)").attr('class','visited');
    $("#qualify-wizard :nth-child(7)").attr('class','visited');
    $("#qualify-wizard :nth-child(8)").attr('class','current');

    return false;
}


 


function resetprice(price, type) {
    //alert(price+" "+ type);
    $('#consult_amount').attr('value', price);
    consulttwo.consultancy_type = type; 
}
