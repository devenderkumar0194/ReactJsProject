import React, { useState } from 'react';
import productService from '../../api/services/productService';
import { useQuery } from '@tanstack/react-query';
import ProductRow from './ProductRow';
import Loader from '../common/Loader';
import AddProduct from './AddProduct';

const ProductListReduxQuery = () => {

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['products'],
        queryFn: productService.getProductsAPI,
        refetchInterval: 10000, 
    });

    const [modalDisplay, setModalDisplay] = useState(false);

    const addProduct = (display) => {
        setModalDisplay(display);
    }


    if (isLoading) return <Loader/>;
    if (isError) return <p>Error: {error.message}</p>;

    return (
        <>
            <div className="relative overflow-x-auto">
                
                <div className=''>
                    <h1  className="text-4xl mt-1 font-bold  text-blue-800">Product List React Query</h1>    
                    <button onClick={ () => addProduct(true) } type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 float-right">Add</button>
                </div>

                { modalDisplay ? ( <AddProduct  setModalDisplay={setModalDisplay} />) : "" }
                
                <table className="w-full mt-5 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3">
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
