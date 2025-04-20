import { useFunc } from "@/utils/useFunc"


const GameOver = () => {
    const { welcome } = useFunc()

    return (
        <section className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-blue-900">
            <section className="w-[640px] h-[640px] bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-10 animate-fade-in">
                <h1 className="text-6xl font-extrabold text-red-600 animate-bounce">
                    GAME OVER!
                </h1>
                <h2 className="text-3xl text-gray-800">
                    FINAL POINTS: <span className="text-blue-600 font-bold">80</span>
                </h2>
                <button
                    onClick={welcome}
                    className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-xl font-semibold rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                    🔁 PLAY AGAIN
                </button>
            </section>
        </section>
    )

}

export default GameOver