import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.contexts';
import { signOutUser } from '../../utilities/firebase/firebase.utils';
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink
}
from './navigation.styles';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart.context';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrownLogo className='logo' />
        </LogoContainer>

        <NavLinks>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          {
            // if user exist(currentContext has some value) then 'SIGN OUT' link 
            // otherwise 'SIGN IN' link.
            currentUser ? (<NavLink onClick={signOutUser} >SIGN OUT</NavLink>)
              : (<NavLink to='/auth'>SIGN IN</NavLink>)
          }
          <CartIcon />
        </NavLinks>
        {isCartOpen && (<CartDropdown />)}
      </NavigationContainer>
      <Outlet />
    </>
  )
}
export default Navigation;