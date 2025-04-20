// src/pages/welcome/index.tsx
import { useFunc } from "@/utils/useFunc"
import React from "react"

const Welcome = () => {
    const { boardLen, setBoardLen, foodNumbs, setFoodNumbs, handleStartGame } = useFunc()

    return (
        <section className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-blue-900">
            <section className="w-[640px] h-[640px] bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-10 animate-fade-in">
                <h1 className="text-4xl font-bold">Welcome to Snake Game 🐍</h1>

                <h2 className="text-2xl font-semibold mb-4">Choose your board size:</h2>
                <div className="flex gap-4">
                    {[10, 20, 30].map((size) => (
                        <button
                            key={size}
                            onClick={() => setBoardLen(size)}
                            className={`px-6 py-3 font-bold text-xl rounded-xl shadow-lg transition-all 
                            ${boardLen === size ? "bg-purple-700 text-white scale-105" : "bg-white text-purple-700 hover:scale-105"}`}
                        >
                            {size} x {size}
                        </button>
                    ))}
                </div>

                <h2 className="text-2xl font-semibold mb-4">Choose your food number:</h2>
                <div className="flex gap-4">
                    {[1, 2, 3].map((num) => (
                        <button
                            key={num}
                            onClick={() => setFoodNumbs(num)}
                            className={`px-6 py-3 font-bold text-xl rounded-xl shadow-lg transition-all 
                            ${foodNumbs === num ? "bg-purple-700 text-white scale-105" : "bg-white text-purple-700 hover:scale-105"}`}
                        >
                            {num}
                        </button>
                    ))}
                </div>

                <button
                    onClick={handleStartGame}
                    className="px-6 py-3 bg-purple-700 text-white font-bold text-xl rounded-xl shadow-lg hover:scale-105 transition-all"
                >
                    START GAME
                </button>
            </section>
        </section>
    )
}

export default Welcome
