export const Square = ({ children, updateBoard, index, isSelected }) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`

    const handreClick = () => {
        updateBoard(index)
    }

    return (
        <div className={className} onClick={handreClick}>
            {children}
        </div>
    )
}