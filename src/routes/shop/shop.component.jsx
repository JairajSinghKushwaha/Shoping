import { Routes, Route } from 'react-router-dom';
import CategoriresPreview from '../categoires-preview/categoires-preview.component';
import DirectoryItem from '../directory-item/directory-item.component';

const Shop = () => {
 return (
   <Routes>
    <Route index element={<CategoriresPreview/>} />
    <Route path=":category" element={<DirectoryItem/>} />
   </Routes>
)}
export default Shop;