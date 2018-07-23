import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
    render() {
        debugger;

        return (
            <StripeCheckout 
                amount={500} // value in US cents 0.01$ - by default its USD
                token={token => console.log(token)} // cb - representation of charge
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            />
        );
    }
}

export default Payments;