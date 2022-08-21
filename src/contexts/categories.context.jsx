import { createContext, useState, useEffect } from "react";
import {addCollectionAndDocuments} from '../utilities/firebase/firebase.utils';
import SHOP_DATA from '../shop-data.js';
import { getCategoriesAndDocs } from "../utilities/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {}
});
export const CategoriesProvider = ({children}) => {

    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, []);

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesMap = await getCategoriesAndDocs();
            setCategoriesMap(categoriesMap);
        }

        getCategoriesMap();
    }, []);

    const[categoriesMap, setCategoriesMap] = useState([]);
    const value = {categoriesMap};
    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}