import Board from "../../components/board"
import { useFunc } from "@/utils/useFunc"

const Game = () => {
    const { lenFromQuery } = useFunc()
    return <Board len={lenFromQuery} />
}
export default Game