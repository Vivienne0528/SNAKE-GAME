import Board from "../../components/board"

const Game = () => {
    const len = 10
    const boardSize = len * len

    return <Board len={len} boardSize={boardSize} />
}
export default Game