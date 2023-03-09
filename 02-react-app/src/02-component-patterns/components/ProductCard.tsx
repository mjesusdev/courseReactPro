import { createContext, useContext } from 'react'

import { useProduct } from '../hooks/useProduct'
import { ProductContextProps, Props } from '../interfaces/interfaces'

import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'

const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductImage = ({ img = '' }) => {

    const { product } = useContext( ProductContext )
    let imgToShow: string
    
    if ( img ) {
        imgToShow = img
    } else if ( product.img ) {
        imgToShow = product.img
    } else {
        imgToShow = noImage
    }

    return (
        <img className={ styles.productImg } src={ imgToShow } alt="Product Image" />
    )
}

export const ProductTitle = ({ title }: { title: string }) => {
    return (
        <span className={ styles.productDescription }>{ title }</span>
    )        
}

interface ProductButtonsProps {
    counter: number;
    increaseBy: ( value: number ) => void;
}

export const ProductButtons = () => {

    const { counter, increaseBy } = useContext( ProductContext )

    return (
        <div className={ styles.buttonsContainer }>
            <button
                className={ styles.buttonMinus }
                onClick={ () => increaseBy( -1 )}> - </button>

            <div className={ styles.countLabel }>{ counter }</div>

            <button
                className={ styles.buttonMinus }
                onClick={ () => increaseBy( +1 )}> + </button>
        </div>
    )
}

export const ProductCard = ({ children, product }: Props) => {

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