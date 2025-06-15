import React from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
    return (
    <div className="justify-center min-h-screen bg-blue-100">
        <h1  className="text-4xl mt-1 font-bold  text-blue-800">Product List</h1>    
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 px-1.5">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    </div>
      
    );
}

export default ProductList;
