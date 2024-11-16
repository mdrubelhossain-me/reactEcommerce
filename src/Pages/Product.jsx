import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../Component/Breadcrumb/Breadcrumb';
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay';
import Description from '../Component/Description/Description';



const Product = () => {

    const {productsData} = useContext(ShopContext);
    const { id } = useParams();
    const product = productsData.find((e) => e.id === Number(id));


    return (
        <div>
            <Breadcrumb product={product} />
            <ProductDisplay product={product} />
            <Description/>
        </div>
    );
};

export default Product;