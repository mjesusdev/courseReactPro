import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';

import { useShoppingCart } from '../hooks/useShoppingCart';
import '../styles/custom-styles.css';

export const ShoppingPage = () => {
    const { products, shoppingCart, onProductCountChange } = useShoppingCart();

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