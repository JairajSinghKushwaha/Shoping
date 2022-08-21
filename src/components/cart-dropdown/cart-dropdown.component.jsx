import {
    CartDropdownContainer,
    CartItems,
    EmptyMessage
} from './cart-dropdown.style.jsx';

import { useContext } from 'react';
import {useNavigate} from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';

const CartDropdown = () => {   
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();
    const goToChecoutPage = () => {
        debugger
        navigate('./checkout');
    }
    return(
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length > 0 ?  
                    (cartItems.map(item => <CartItem key={item.id} cartItem={item} />)) :
                    (<EmptyMessage>Your cart is empty.</EmptyMessage>)
                }
            </CartItems>
          <Button onClick={goToChecoutPage}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    );
}
export default CartDropdown;