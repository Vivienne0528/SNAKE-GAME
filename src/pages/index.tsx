import Board from "@/pages/board";

export default function Home() {
  const len = 10
  const boardSize = len * len
  return (
    <>
      <Board len={len} boardSize={boardSize} />
    </>
  )
}