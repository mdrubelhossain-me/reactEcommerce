import React, { createContext } from 'react';
import '../Pages/CSS/ShopCategory.css'
import productsData from './../Component/Data/ProductData';


export const ShopContext = createContext(null);


const ShopContextProvider = (props)=>{
    const contextValue = {productsData};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;


// Same Work
// export const ShopContext = createContext();

// const ShopProvider = ({ children }) => {
//     return (
//         <ShopContext.Provider value={{ productsData }}>
//             {children}
//         </ShopContext.Provider>
//     );
// };

// export default ShopProvider;