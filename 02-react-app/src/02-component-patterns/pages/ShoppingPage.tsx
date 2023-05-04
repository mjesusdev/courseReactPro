import { useState } from 'react';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';

import { Product } from '../interfaces/interfaces';
import '../styles/custom-styles.css';

const product1 = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

const product2 = {
    id: '2',
    title: 'Coffee Mug - Meme',
    img: './coffee-mug2.png'
}

const products: Product[] = [ product1, product2 ]

interface ProductInCard extends Product {
    count: number
}

export const ShoppingPage = () => {
    const [ shoppingCart, setShoppingCart ] = useState<{ [key:string]: ProductInCard }>({});

    const onProductCountChange = ({ count, product }: { count: number, product: Product } ) => {
        setShoppingCart( oldShoppingCard => {
            if ( count === 0 ) {
                const { [product.id]: toDelete, ...rest } = oldShoppingCard
                return rest
            }

            return {
                ...oldShoppingCard,
                [ product.id ]: { ...product, count }
            }
        })
    }

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                {
                    products.map( product => (
                        <ProductCard 
                            className="bg-dark text-white"
                            product={ product }
                            key={ product.id }
                            onChange={ onProductCountChange }
                            value={ shoppingCart[product.id]?.count || 0 }
                        >
                            <ProductImage className='custom-image' style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                            <ProductTitle className='text-bold' />
                            <ProductButtons className='custom-buttons' />
                        </ProductCard>
                    ))
                }
            </div>

            <div className='shopping-cart'>
                {
                    Object.entries( shoppingCart ).map( ([ key, product ]) => 
                        <ProductCard
                            className='bg-dark text-white'
                            key={ key }
                            product={ product }
                            style={{ width: '100px' }}
                            onChange={ onProductCountChange }
                            value={ product.count }
                        >
                            <ProductImage className='custom-image' style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                            <ProductButtons className='custom-buttons' />
                        </ProductCard>
                    )
                }
            </div>
        </div>
    )
}