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

      if (isMobile()) {
          jQuery('body').scrollTop(500);
      } else {
          jQuery('body').scrollTop(100);
      }

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

      if (isMobile()) {
          jQuery('body').scrollTop(500);
      } else {
          jQuery('body').scrollTop(100);
      }

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

function subscribe() {
      $.ajax({
                     method: "POST",
                     url: "http://divorcesus.com/subscribe/",
                     data: {'email':$('#newsletter-email').val()}
      }).done(function( msg ) {
         $('#newsletter-success').css('display','block').fadeOut(1200);
      });
      return false;
}

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

