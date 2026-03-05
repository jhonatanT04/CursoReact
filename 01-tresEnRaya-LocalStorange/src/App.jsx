import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'

import { Board } from './componets/Board.jsx'
import { Turns } from './componets/Turns.jsx'
import { Winner } from './componets/Winner.jsx'

import { TURNS } from './constante.js'

import {
    checkWinnerFrom, chechEndGame,
    saveLocalStorange, getBoardLocalStorange,
    getTurnLocalStorange, removeLocalStorange
} from './logic/board.js'



export function App() {
    const [board, setBoard] = useState(() => {
        const boardFromLocalStorange = getBoardLocalStorange()
        return boardFromLocalStorange ?
            JSON.parse(boardFromLocalStorange) :
            Array(9).fill(null)
    })
    const [turn, setTurns] = useState(() => {
        const turnFromLocalStorange = getTurnLocalStorange()
        return turnFromLocalStorange ?? TURNS.X
    })
    const [winner, setWinner] = useState(null)



    const updateBoard = (index) => {
        if (board[index] || winner) return
        const newBoard = [...board]
        newBoard[index] = turn

        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X

        setTurns(newTurn)
        setBoard(newBoard)

        

        const newWinner = checkWinnerFrom(newBoard, turn)

        if (newWinner) {
            confetti()
            setWinner(newWinner)
        } else if (chechEndGame(newBoard)) {
            setWinner(false)
        }

    }

    const resetGame = () => {

        setBoard(Array(9).fill(null))
        setTurns(TURNS.X)
        setWinner(null)

        removeLocalStorange()
    }
    useEffect(() => {
        saveLocalStorange({
            newBoard: board,
            turn: turn
        })
    }, [turn,board])
    return (
        <main className='board'>
            <h1>Tres en raya</h1>
            <button onClick={resetGame}>Reset game</button>

            <Board board={board} updateBoard={updateBoard} />
            <Turns turn={turn} />
            <Winner resetGame={resetGame} winner={winner} />

        </main>
    )
}