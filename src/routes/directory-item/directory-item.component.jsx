import './directory-item.style.scss';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';

const DirectoryItem = () => {
 const { category } = useParams(); // hats/
 const { categoriesMap } = useContext(CategoriesContext);
 const [products, setProducts] = useState(categoriesMap[category]);

 useEffect(() => {
 setProducts(categoriesMap[category]);
 }, [category, categoriesMap]);
 
 return(
  <>
  <h1 className='directory-item-title'>{category.toUpperCase()}</h1>
  <div className='directory-item-container'>
    {
      products &&
      products.map(product => <ProductCard key={product.key} product={product} />)
    }
    </div>
  </>
 )
}

export default DirectoryItem;