import { useRouter } from "next/navigation"

export const useFunc = () => {
    const router = useRouter()
    const welcome = () => { router.push("/") }
    const playGame = () => { router.push("/game") }

    return {
        welcome, playGame
    }

}