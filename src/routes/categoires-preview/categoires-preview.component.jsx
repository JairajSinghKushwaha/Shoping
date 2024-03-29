import { useContext } from "react";
import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriresPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
 return (
   <>
    { 
      categoriesMap &&
       Object.keys(categoriesMap).map(title => {
        const products = categoriesMap[title];    
        return(<CategoryPreview key={title} title={title} products={products} />)
      })
    }
   </>
)};
export default CategoriresPreview;