import 
{
    CartItemContainer,
    Image,
    ItemDetails,
    ProductName,
    Price
} from './cart-item.style.jsx';
const CartItem = ({cartItem}) => {
const{id, name, imageUrl, quantity, price } = cartItem;
return (
    <CartItemContainer key={id}>
      <Image src={imageUrl} alt={`${name}`} />
        <ItemDetails>
            <ProductName>{name}</ProductName>
            <Price>
                {quantity} x ${price}
            </Price>
      </ItemDetails>   
    </CartItemContainer>
);
}

export default CartItem;