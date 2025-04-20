import { useRouter } from "next/navigation"
import { useState } from "react"

export const useFunc = () => {
    const len = 10
    const boardSize = len * len
    const [points, setPoints] = useState(0)
    const [food, setFood] = useState()
    const [snakeStartPosition, setSnakeStartPosition] = useState(0)
    const [snakeFinalPosition, setSnakeFinalPosition] = useState(0)
    const [direction, setDirection] = useState('RIGHT')

    const router = useRouter()

    const welcome = () => { router.push("/") }
    const playGame = () => { router.push("/game") }
    const gameOver = () => { router.push("/gameOver") }


    const init = () => {
        let getFoodRandomPosition = Math.floor(Math.random() * boardSize)
        let getSnakeRandomPosition
        do (getSnakeRandomPosition = Math.floor(Math.random() * boardSize))
        while (getFoodRandomPosition = getSnakeRandomPosition) getFoodRandomPosition = Math.floor(Math.random() * boardSize)
        setFood(getFoodRandomPosition)
        setSnakeStartPosition(getSnakeRandomPosition)
        setSnakeFinalPosition(getSnakeRandomPosition - 1)
        setPoints(0)
    }

    const updateNewFood = () => {
        if (snakeStartPosition == food) {
            setPoints(prev => prev + 1)
            let newFood
            do (newFood = Math.floor(Math.random() * boardSize))
            while (newFood === snakeStartPosition) setFood(newFood)
        }
    }

    const arrowRight = () => {
        setSnakeStartPosition((prev) => {
            setSnakeFinalPosition(prev)
            return prev + 1
        })
        setDirection('RIGHT')

    }
    const arrowLeft = () => {
        setSnakeStartPosition((prev) => {
            setSnakeFinalPosition(prev)
            return prev - 1
        })
        setDirection('LEFT')
    }
    const arrowUp = () => {
        setSnakeStartPosition((prev) => {
            setSnakeFinalPosition(prev)
            return prev - len
        })
        setDirection('UP')
    }
    const arrowDown = () => {
        setSnakeStartPosition((prev) => {
            setSnakeFinalPosition(prev)
            return prev + len
        })
        setDirection('DOWN')
    }

    const isHitWall = (pos) => {
        return (
            pos < 0 ||
            pos >= boardSize ||
            (direction === 'LEFT' && snakeStartPosition % len === 0) ||
            (direction === 'RIGHT' && snakeStartPosition % len === len - 1)
        )
    }

    return {
        welcome, playGame, gameOver, updateNewFood, init, snakeStartPosition, snakeFinalPosition, food, setPoints, setFood, arrowUp, arrowRight, arrowLeft, arrowDown, isHitWall, direction, points, len, boardSize
    }

}