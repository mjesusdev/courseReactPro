import { useState } from 'react'
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs ) => void;
}

export const useProduct = ( onChange?: () => void ) => {
    const [ counter, setCounter ] = useState(0)
    
    const increaseBy = ( value:number ) => {
        setCounter( prev => Math.max( prev + value, 0 ))
        
        // Iqual of if
        onChange && onChange()
    }

    return {
        counter,
        increaseBy
    }
}
