import { useSearchParams } from "next/navigation"
import { useRouter } from "next/router"
import { useState } from "react"

export const useFunc = () => {
    const router = useRouter()
    const [boardLen, setBoardLen] = useState(10)
    const [foodNumbs, setFoodNumbs] = useState(1)
    const [points, setPoints] = useState(0)

    const lenFromQuery = parseInt(router.query.len)
    const foodNumbsFromQuery = parseInt(router.query.foodNumbs)
    const pointsFromQuery = parseInt(router.query.points)

    const boardSize = lenFromQuery * lenFromQuery

    const [food, setFood] = useState()
    const [snakeStartPosition, setSnakeStartPosition] = useState(0)
    const [snakeFinalPosition, setSnakeFinalPosition] = useState(0)
    const [direction, setDirection] = useState('RIGHT')

    const welcome = () => { router.push("/") }
    const handleStartGame = () => {
        router.push(`/game?len=${boardLen}&foodNums=${foodNumbs}`)
    }
    // const gameOver = () => { router.push("/gameOver") }
    const gameOver = () => {
        router.push(`/gameOver?points=${points}`)
    }


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
            return prev - lenFromQuery
        })
        setDirection('UP')
    }
    const arrowDown = () => {
        setSnakeStartPosition((prev) => {
            setSnakeFinalPosition(prev)
            return prev + lenFromQuery
        })
        setDirection('DOWN')
    }

    const isHitWall = (pos) => {
        return (
            pos < 0 ||
            pos >= boardSize ||
            (direction === 'LEFT' && snakeStartPosition % lenFromQuery === 0) ||
            (direction === 'RIGHT' && snakeStartPosition % lenFromQuery === lenFromQuery - 1)
        )
    }

    return {
        pointsFromQuery, boardLen, router, welcome, gameOver, updateNewFood, init, snakeStartPosition, setFoodNumbs, snakeFinalPosition, food, setPoints, setFood, arrowUp, arrowRight, arrowLeft, arrowDown, isHitWall, direction, points, lenFromQuery, boardSize, setBoardLen, foodNumbs, foodNumbsFromQuery, handleStartGame
    }

}