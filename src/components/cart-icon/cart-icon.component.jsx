import 
{
  ShoppingIcon,
  CartIconContainer,
  ItemCount
} from './cart-icon.style.jsx';

import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

const CartIcon = () => {
  const {setIsCartOpen, isCartOpen, cartCount} = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return(
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon/>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
}
export default CartIcon;