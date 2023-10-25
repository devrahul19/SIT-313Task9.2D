
import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import './Payment.css'
function Payment() {

  const onToken = (token)=>{
    console.log(token);
    alert(token.id);
  }
  
  return (
    <>
    <div className='stripe'>Payment
    <StripeCheckout
        className="hloo"
        token={onToken}
        name="DEV DEAKIN PAYMENT"
        currency='Inr'
        amount="600"
        stripeKey="pk_test_51O4SvPSDahWJQZEv5yys2hjWJnHCEm6WIWmkmE75uXXyLxlBBsnHWTShVPmyUc7kTUzqJsCWR8T973S2wz9QxHHJ00QJv36NnA"
      />
      </div>
    </>
  )
}

export default Payment
