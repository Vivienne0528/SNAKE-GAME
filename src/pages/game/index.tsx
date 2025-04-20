import Board from "../../components/board"
import { useFunc } from "@/utils/useFunc"

const Game = () => {
    const { lenFromQuery, boardSize } = useFunc()
    return <Board len={lenFromQuery} boardSize={boardSize} />
}
export default Game