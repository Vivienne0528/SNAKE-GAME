import { useRouter } from "next/router"
import { useState } from "react"

export const useFunc = () => {

    const router = useRouter()

    const [boardLen, setBoardLen] = useState(10)
    const [foodNumbs, setFoodNumbs] = useState(1)
    const [points, setPoints] = useState(0)
    const [time, setTime] = useState(1000)

    const lenFromQuery = parseInt(router.query.len)
    const foodNumbsFromQuery = parseInt(router.query.foodNumbs)
    const pointsFromQuery = parseInt(router.query.points)

    const boardSize = lenFromQuery * lenFromQuery

    const [foods, setFoods] = useState([])
    const [snakeBody, setSnakeBody] = useState([])

    const [direction, setDirection] = useState('RIGHT')

    const welcome = () => { router.push("/") }
    const handleStartGame = () => {
        router.push(`/game?len=${boardLen}&foodNumbs=${foodNumbs}`)
    }
    const gameOver = () => {
        router.push(`/gameOver?points=${points}`)
    }


    const init = () => {
        let getFoodRandomPosition = Math.floor(Math.random() * boardSize)
        let getSnakeRandomPosition
        do (getSnakeRandomPosition = Math.floor(Math.random() * boardSize))
        while (getFoodRandomPosition === getSnakeRandomPosition)

        const initialHead = getSnakeRandomPosition
        const initialTail = initialHead - 1
        const initialBody = [initialHead, initialTail]

        const newFoods = []
        while (newFoods.length < foodNumbsFromQuery) {
            let pos = Math.floor(Math.random() * boardSize)
            if (!initialBody.includes(pos) && !newFoods.includes(pos)) {
                newFoods.push(pos)
            }
        }
        setSnakeBody(initialBody)
        setFoods(newFoods)
        setPoints(0)
    }

    const eatFood = () => {
        const head = snakeBody[0]
        if (foods.includes(head)) {
            setPoints(prev => prev + 1)
            switch (direction) {
                case 'UP':
                    setSnakeBody(prev => [...prev, head - lenFromQuery])
                    break
                case 'RIGHT':
                    setSnakeBody(prev => [...prev, head + 1])
                    break
                case 'LEFT':
                    setSnakeBody(prev => [...prev, head - 1])
                    break
                case 'DOWN':
                    setSnakeBody(prev => [...prev, head + lenFromQuery])
                    break
            }

            let newFood
            do {
                newFood = Math.floor(Math.random() * boardSize)
            } while (snakeBody.includes(newFood) || foods.includes(newFood))

            do (newFood = Math.floor(Math.random() * boardSize))
            while (snakeBody.includes(newFood))
            const eatenFoodIndex = foods.indexOf(head)
            setFoods(prev => {
                const updated = [...prev]
                updated[eatenFoodIndex] = newFood
                return updated
            })
        }
    }

    const arrowRight = () => {
        setSnakeBody(prev => {
            const newHead = prev[0] + 1
            const newBody = [newHead, ...prev.slice(0, -1)]
            return newBody
        })
        setDirection('RIGHT')

    }
    const arrowLeft = () => {
        setSnakeBody(prev => {
            const newHead = prev[0] - 1
            const newBody = [newHead, ...prev.slice(0, -1)]
            return newBody
        })
        setDirection('LEFT')
    }
    const arrowUp = () => {
        setSnakeBody(prev => {
            const newHead = prev[0] - lenFromQuery
            const newBody = [newHead, ...prev.slice(0, -1)]
            return newBody
        })
        setDirection('UP')
    }
    const arrowDown = () => {
        setSnakeBody(prev => {
            const newHead = prev[0] + lenFromQuery
            const newBody = [newHead, ...prev.slice(0, -1)]
            return newBody
        })
        setDirection('DOWN')
    }
    const moveSnake = () => {
        switch (direction) {
            case 'UP':
                arrowUp()
                break
            case 'RIGHT':
                arrowRight()
                break
            case 'LEFT':
                arrowLeft()
                break
            case 'DOWN':
                arrowDown()
                break
        }
    }
    const handleKeyDown = (event) => {
        const key = event.key;
        switch (key) {
            case 'ArrowUp':
                if (direction !== 'DOWN') arrowUp()
                break
            case 'ArrowRight':
                if (direction !== 'LEFT') arrowRight()
                break
            case 'ArrowLeft':
                if (direction !== 'RIGHT') arrowLeft()
                break
            case 'ArrowDown':
                if (direction !== 'UP') arrowDown()
                break
            default:
                break
        }
    }
    const isHitWall = (snake) => {
        return (
            snake.find(pos => pos < 0) ||
            snake.find(pos => pos >= boardSize) ||
            (direction === 'LEFT' && snake[0] % lenFromQuery === 0) ||
            (direction === 'RIGHT' && snake[0] % lenFromQuery === lenFromQuery - 1)
        )
    }
    const isHitSnake = () => {
        return snakeBody.slice(1).includes(snakeBody[0])
    }
    const isGameOver = () => {
        if (isHitWall(snakeBody) || isHitSnake()) {
            // clearInterval(interval)
            gameOver()
            return
        }
    }

    return {
        time, setTime, boardLen, setBoardLen, foodNumbs, setFoodNumbs, handleStartGame, isGameOver, handleKeyDown, moveSnake, snakeBody, eatFood, init, foods, direction, points, lenFromQuery, welcome, pointsFromQuery
    }

}