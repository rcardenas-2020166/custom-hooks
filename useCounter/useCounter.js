import { useState } from 'react';

export const useCounter = ( initialValue = 1 ) => 
{
    const [ counter, setCounter ] = useState( initialValue );

    const incrementCounter = ( value = 1 ) => 
    {
        setCounter( (current) => current + value )
    }

    const decrementCounter = ( value = 1) =>
    {
        if ( counter === 1) return;
        setCounter( (current) => current - value )
    }

    const resetCounter = () =>
    {
        setCounter( initialValue )
    }

    return {
        counter,
        incrementCounter,
        decrementCounter,
        resetCounter
    }
}