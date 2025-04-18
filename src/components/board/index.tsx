//640*640->20*20

import { useEffect, useState } from "react";

const Board = ({ len, boardSize }) => {
    const cells = []

    const cellSize = 600 / len

    const [food, setFood] = useState(0)
    const [snakeStartPosition, setSnakeStartPosition] = useState(0)
    const [snakeFinalPosition, setSnakeFinalPosition] = useState(0)

    const init = () => {
        let getFoodRandomPosition = Math.floor(Math.random() * boardSize)
        let getSnakeRandomPosition = Math.floor(Math.random() * boardSize)
        setFood(getFoodRandomPosition)
        setSnakeStartPosition(getSnakeRandomPosition)
        setSnakeFinalPosition(getSnakeRandomPosition - 1)
    }
    useEffect(() => {
        init()
    }, [])
    const goAhead = () => {
        setSnakeStartPosition(prev => prev + 1)
        setSnakeFinalPosition(prev => prev + 1)
    }
    const isHitWall = (prev, now) => {

    }
    const isGameOver = () => {

    }

    useEffect(() => {
        const interval = setInterval(() => {
            goAhead()
            isHitWall()
            isGameOver()
        }, 1000)
        // if ((snakeFinalPosition + 1) % len === 0) {
        //     return () => clearInterval(interval)
        // }
        return () => clearInterval(interval)
    }, [])


    for (let index = 0; index < len * len; index++) {
        const isFood = index === food;
        // const isSnake = snakePosition.includes(index)
        const isSnake = snakeStartPosition === index || snakeFinalPosition === index
        cells.push(
            // <div key={index} className={`${isFood ? "bg-red-500" : ""} ${isSnake ? "bg-blue-500" : ""} border-blue-500 border-1 h-[${cellSize}px] w-[${cellSize}px]`}></div>
            <div key={index} style={{ height: cellSize, width: cellSize }} className={`${isFood ? "bg-red-500" : ""} ${isSnake ? "bg-blue-500" : ""} border-blue-500 border-1`}></div>
        )
    }

    return (
        <section className="flex justify-center items-center h-screen">
            <section className="w-[640px] h-[640px] border-black border-[20px]">
                {/* <section className={grid grid-cols-${len}}> */}
                <section
                    className="grid"
                    style={{ gridTemplateColumns: `repeat(${len}, 1fr)` }}
                >
                    {cells}
                </section>
            </section>
        </section>
    );


}

export default Board