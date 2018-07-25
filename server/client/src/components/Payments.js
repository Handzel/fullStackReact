import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
    render() {
        return (
            <StripeCheckout 
                name="Emaily"
                description="$5 for 5 email credits"
                amount={500} // value in US cents 0.01$ - by default its USD
                token={token => this.props.handleToken(token)} // cb - representation of charge
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">
                    Add credits
                </button>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payments);