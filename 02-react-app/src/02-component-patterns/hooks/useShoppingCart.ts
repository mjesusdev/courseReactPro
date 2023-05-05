import { useState } from 'react';

import { Product, ProductInCart } from '../interfaces/interfaces';
import { products } from '../data/products';

export const useShoppingCart = () => {
    const [ shoppingCart, setShoppingCart ] = useState<{ [key:string]: ProductInCart }>({});

    const [ product1, product2 ] = products;

    const onProductCountChange = ({ count, product }: { count: number, product: Product } ) => {
        setShoppingCart( oldShoppingCart => {
            const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };

            if ( Math.max( productInCart.count + count, 0 ) > 0 ) {
                productInCart.count += count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }
            
            const { [product.id]: toDelete, ...rest } = oldShoppingCart
            return rest;
        })
    }

    return {
        products,
        shoppingCart,

        onProductCountChange,
    }
}
