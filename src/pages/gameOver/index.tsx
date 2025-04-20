import { useRouter } from "next/navigation"


const GameOver = () => {
    const router = useRouter()
    const playGame = () => { router.push("http://localhost:3000/") }
    return (
        <>
            <div>Game Over</div>
            <button onClick={playGame}>Try again!</button>
        </>

    )

}

export default GameOver