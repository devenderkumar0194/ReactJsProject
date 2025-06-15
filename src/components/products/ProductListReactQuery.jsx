import React from 'react';
import productService from '../../api/services/productService';
import { useQuery } from '@tanstack/react-query';
import ProductRow from './ProductRow';

const ProductListReduxQuery = () => {

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['products'],
        queryFn: productService.getProductsAPI,
        refetchInterval: 3000, 
    });

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {error.message}</p>;

    
    return (
        <>
            <div class="relative overflow-x-auto">
                <h1  className="text-4xl mt-1 font-bold  text-blue-800">Product List React Query</h1>    
                <table class="w-full mt-5 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Id
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((product, index) =>
                            <ProductRow key={index} product={product}/>
                        )}
                    </tbody>
                </table>
            </div>
 
        </>
    );
}

export default ProductListReduxQuery;
