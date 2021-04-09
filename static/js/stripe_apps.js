
function setup_stripe_three() {
    // Create a Stripe client.
    var stripe = Stripe('pk_test_T8bXfqG9ZJjwUJKcCjv8RqtV');

    // Create an instance of Elements.
    var elements = stripe.elements();

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


    var ce = $('#card-element-three');

    if (ce) {
        card.mount('#card-element-three');
        // Handle real-time validation errors from the card Element.
        if (card) {
            card.addEventListener('change', function(event) {
                var displayError = document.getElementById('card-errors-three');
                if (event.error) {
                    displayError.textContent = event.error.message;
                } else {
                    displayError.textContent = '';
                }
            });
        }
    }

    // Handle form submission.
    var form = document.getElementById('payment-form-three');
    form.addEventListener('submit', function(event) {
      event.preventDefault();

      stripe.createToken(card).then(function(result) {
        if (result.error) {
            // Inform the user if there was an error.
            var errorElement = document.getElementById('card-errors-three');
            errorElement.textContent = result.error.message;
            consulttwo.stripe_errors.push(result.error.message);
            consulttwo.token=null;
        } else {
            if(consulttwo.errors.length==0) {
               consulttwo.redirect();
            }
            $("#payment-token").attr("value", result.token.id);
        }




      });
    });


    return false;
}


function setup_stripe_one() {
    // Create a Stripe client.
    var stripe = Stripe('pk_test_T8bXfqG9ZJjwUJKcCjv8RqtV');

    // Create an instance of Elements.
    var elements = stripe.elements();

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

    var ce = $('#card-element-one');

    if (ce) {

        card.mount('#card-element-one');

        // Handle real-time validation errors from the card Element.
        card.addEventListener('change', function(event) {
            var displayError = document.getElementById('card-errors-one');
            if (event.error) {
                displayError.textContent = event.error.message;
            } else {
                displayError.textContent = '';
            }
        });
    }
    // Handle form submission.
    var form = document.getElementById('payment-form-one');
    form.addEventListener('submit', function(event) {
      event.preventDefault();

      stripe.createToken(card).then(function(result) {
        if (result.error) {
            // Inform the user if there was an error.
            var errorElement = document.getElementById('card-errors-one');
            errorElement.textContent = result.error.message;
            vm2.stripe_errors.push(result.error.message);
            vm2.token=null;  
        } else {
            if(vm2.errors.length==0) {
               vm2.redirect();
            }
            $("#payment-token").attr("value", result.token.id);
        }
      });
    });


    return false;
}


