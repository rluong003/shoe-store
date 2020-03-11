import React from 'react';
import Button from '@material-ui/core/Button';

import './cart-dropdown.scss';

function CartDropdown(){

    return(
        <div className="cart-dropdown">
            <div className="cart-items" />
            <Button size="large">
          CHECKOUT
        </Button>
         
        </div>

    );
}

export default CartDropdown;