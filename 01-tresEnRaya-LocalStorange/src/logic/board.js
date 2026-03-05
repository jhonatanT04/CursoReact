import { TURNS,WINNER_COMBO } from '../constante.js'

export const checkWinnerFrom = (boardChech, turn) => {
    for (const combo of WINNER_COMBO) {
        const [a, b, c] = combo
        if (boardChech[a] === turn &&
            boardChech[b] === turn &&
            boardChech[c] === turn) {
            
            return (turn)
        }
    }
    return null
}
export const chechEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
}

export const saveLocalStorange = ({newBoard,turn}) =>{
    window.localStorage.setItem('board',JSON.stringify(newBoard))
    window.localStorage.setItem('turn',turn)

}

export const getBoardLocalStorange = () =>{
    return window.localStorage.getItem('board')
}

export const getTurnLocalStorange = () =>{
    return window.localStorage.getItem('turn')
}

export const removeLocalStorange = ()=>{
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}
