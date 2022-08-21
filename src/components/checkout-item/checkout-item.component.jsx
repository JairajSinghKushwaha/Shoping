import {
    CheckoutItemContainer,
    ImageContainer,
    Name,
    Quantity,
    Price,
    Arrow,
    RemoveButton

} from './checkout-item.style.jsx';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({cartItem}) => {
    const {clearItemFromCart, addItemToCart, removeItemFromCart}= useContext(CartContext);
    const {id, name, imageUrl, price, quantity} = cartItem;
    const clearCartHandler = () => clearItemFromCart(cartItem);
    const addCartHandler = () => addItemToCart(cartItem);
    const removeCartHandler = () => removeItemFromCart(cartItem);
    return (
        <CheckoutItemContainer key={id}>
            <ImageContainer>
              <img src={imageUrl} alt={`${name}`}/>
            </ImageContainer>
            <Name> {name} </Name>
            <Arrow onClick={addCartHandler}> &#10094; </Arrow> 
                <Quantity>                
                  {quantity} 
                </Quantity>
            <Arrow onClick={removeCartHandler}> &#10095; </Arrow>
            <Price> {price} </Price>
            <RemoveButton onClick={clearCartHandler}> &#x2715;</RemoveButton>
        </CheckoutItemContainer>
    )
}
export default CheckoutItem;