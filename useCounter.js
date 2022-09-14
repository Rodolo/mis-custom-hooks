import { useState } from "react"

export const useCounter = (initialValue = 1) => {

    const [counter, setCounter] = useState(initialValue);

    const increment = (value = 1) => {
        setCounter((e) => e + value);
    }

    const decrement = (value = 1) => {
        setCounter((e) => e - value);
    }

    const reset = () => {
        setCounter(initialValue);
    }

    return {
        counter, increment, decrement, reset
    }

}