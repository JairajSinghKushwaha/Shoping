import { Outlet } from 'react-router-dom';
import Categories from '../../components/categories/categories';

const Home = () => {
  return (
    <div>   
      <Categories/> 
      <Outlet/>
    </div>
  
  );
}

export default Home;
