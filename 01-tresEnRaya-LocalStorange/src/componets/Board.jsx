import { Square } from './Square.jsx'
export const Board = ({ board, updateBoard }) => {
    return (<section className='game'>
        {
            board.map((square, index) => {
                return (
                    <Square
                        index={index}
                        key={index}
                        updateBoard={updateBoard}
                    >

                        {square}
                    </Square>
                )
            })
        }
    </section>)
}