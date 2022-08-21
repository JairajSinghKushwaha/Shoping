import {
  CategoryContainer,
  CategoryBodyContainer,
  BackgroundImage
} 
from './category-item.style.jsx';
import {useNavigate} from 'react-router-dom';

const CategoryItem = ({category: {id, title, imageUrl, route}}) => {
  const navigate = useNavigate();
  const navigateHandler = () => navigate(route);
  return (
  <CategoryContainer onClick={navigateHandler}>
  <BackgroundImage imageUrl={imageUrl} />
    <CategoryBodyContainer>
      <h2>{title}</h2>
        <p>Shop Now</p>
    </CategoryBodyContainer>
  </CategoryContainer>
)}
export default CategoryItem;