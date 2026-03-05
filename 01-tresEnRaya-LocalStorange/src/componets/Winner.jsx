import { Square } from './Square.jsx'


export const Winner = ({winner,resetGame}) => {
    return (
         winner !== null && (
            <section className='winner'>
                <div className='text'>
                    <h2>
                        {
                            winner == false ?
                                'Empato' :
                                'Gano :'
                        }
                    </h2>
                    <header className='win'>
                        {winner && <Square>{winner}</Square>}
                    </header>

                    <footer>
                        <button onClick={resetGame}>Reiniciar</button>
                    </footer>
                </div>
            </section>
        )
    )
}