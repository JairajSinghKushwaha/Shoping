import './categories.style.scss';
import CategoryItem from '../category-item/category-item';

const Categories = ({categories}) => {
 return (
   <div className="categories-container">
    { categories.map((category, index) => ( <CategoryItem key={index} category={category} /> )) }
   </div>
 )
}
export default Categories;