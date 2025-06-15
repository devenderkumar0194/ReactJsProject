import React from 'react';

const ProductRow = (props) => {
    const product = props.product;
    return (
        <>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {product._id ? product._id : ""}
                </th>
                <td className="px-6 py-4">
                    { product.title }
                </td>
                <td className="px-6 py-4">
                    { product.description }
                </td>
                <td className="px-6 py-4">
                    { product.price }
                </td>
            </tr>
        </>
    );
}

export default ProductRow;
