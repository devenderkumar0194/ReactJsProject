import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../features/products/productSlice';
const ProductList = () => {
    
    const dispatch = useDispatch();
    const { items, status, error } = useSelector((state) => state.products);
    
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    // if (status === 'loading') return <p>Loading...</p>;
    // if (status === 'failed') return <p>Error: {error}</p>;

    return (
    <div className="justify-center min-h-screen bg-blue-100">
        <h1  className="text-4xl mt-1 font-bold  text-blue-800">Product List</h1>    
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 px-1.5">
           {items.map((product, index) =>
                    <ProductCard key={index} product={product}/>
            )}
        </div>
    </div>
      
    );
}

export default ProductList;
