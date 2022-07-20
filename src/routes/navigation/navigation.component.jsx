
import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.contexts';
import { signOutUser } from '../../utilities/firebase/firebase.utils';
import './navigation.styles.scss';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart.context';

const Navigation = () => {
 const {currentUser} = useContext(UserContext);
 const {isCartOpen} = useContext(CartContext);
    return (
      <Fragment>
        <div className='navigation'>
          <Link className='logo-container' to='/'>
            <CrownLogo className='logo'/>
          </Link>
      
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
              SHOP
            </Link>
            {
              // if user exist(currentContext has some value) then 'SIGN OUT' link 
              // otherwise 'SIGN IN' link.
              currentUser ? (<span className='nav-link' onClick={signOutUser} >SIGN OUT</span>)
                             : (<Link className='nav-link' to='/auth'>SIGN IN </Link>)
            }
            <CartIcon/>
          </div>  
          {isCartOpen && (<CartDropdown/>)}
        </div>
        <Outlet/>
      </Fragment>
    )
  }
  export default Navigation;