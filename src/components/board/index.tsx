//640*640->20*20

import { useFunc } from "@/utils/useFunc";
import { useEffect } from "react";

const Board = ({ len, boardSize }) => {
    const { isGameOver, handleKeyDown, moveSnake, snakeBody, updateNewFoodNewSnake, init, food, direction, points } = useFunc()

    const cells = []
    const cellSize = 600 / len

    useEffect(() => {
        init()
    }, [])

    useEffect(() => {
        updateNewFoodNewSnake()
    }, [snakeBody])

    useEffect(() => {
        const interval = setInterval(() => {
            moveSnake()
            isGameOver()
        }, 1000)

        return () => clearInterval(interval)

    }, [food, snakeBody, moveSnake])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // 让浏览器“监听”键盘是否被按下，如果按下了，就执行 handleKeyDown 函数。
            window.addEventListener("keydown", handleKeyDown);
            // 当组件卸载（比如页面离开或组件被移除）时，把之前注册的监听器“取消掉”。
            return () => window.removeEventListener("keydown", handleKeyDown);
        }
    }, [direction])


    for (let index = 0; index < len * len; index++) {
        const isFood = index === food;
        const isSnake = snakeBody.includes(index)
        cells.push(
            // <div key={index} className={`${isFood ? "bg-red-500" : ""} ${isSnake ? "bg-blue-500" : ""} border-blue-500 border-1 h-[${cellSize}px] w-[${cellSize}px]`}></div>
            <div key={index} style={{ height: cellSize, width: cellSize }} className={`${isFood ? "bg-red-500" : ""} ${isSnake ? "bg-blue-500" : ""} border-blue-500 border-1`}></div>
        )
    }

    return (
        <section className="flex justify-center items-center h-screen">
            {points}
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