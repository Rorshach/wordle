import React from 'react'
import { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Keypad from './Keypad'


export default function Wordle({solution}) {
    const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } = useWordle(solution)

    useEffect(() =>{
        window.addEventListener("keyup", handleKeyup)
        
        return () => window.removeEventListener("keyup", handleKeyup)
    }, [handleKeyup])

    useEffect(() => {
        console.log(guesses, turn, isCorrect)
    }, [guesses, turn, isCorrect])

    return(
        <div>
            <div>Solution - { solution }</div>
            <div>Current guess - { currentGuess }</div>
            <Grid guesses={guesses} currentGuess={currentGuess} turn={turn}/>
            <Keypad usedKeys={usedKeys} />
        </div>
    )
}