import React from 'react';

import StripeCheckout from 'react-stripe-checkout';


function StripeCheckoutButton ({price}) {

    const onToken = token => {
        console.log(token);
        alert('Successful Payment');
    }

    
    const priceForStripe = price * 100;
    const publishKey = "pk_test_aZihxpI95N06zzDzApS1QBvN00uVKzEHBI";

    return(
        <StripeCheckout
        label = 'Pay Now'
        name ='L&Q Shoes'
        billingAddress
        shippingAddress
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey ={publishKey}
         />
    )
}

export default StripeCheckoutButton;