import { createContext } from 'react'

import { useProduct } from '../hooks/useProduct'
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces'

import { ProductButtons } from './ProductButtons'
import { ProductImage } from './ProductImage'
import { ProductTitle } from './ProductTitle'

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductCard = ({ children, product }: ProductCardProps) => {

    const { counter, increaseBy } = useProduct()

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={ styles.productCard }>
                { children }
            </div>
        </Provider>
    )
}

ProductCard.Buttons = ProductButtons;
ProductCard.Image   = ProductImage;
ProductCard.Title   = ProductTitle;