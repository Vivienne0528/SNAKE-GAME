//640*640->20*20

const Board = ({ len }) => {
    const checkerLen = 600 / len
    const cells = []
    let foodPosition = Math.floor(Math.random() * (len * len))
    let snakeStartPosition = Math.floor(Math.random() * (len * len))
    let snakeFinalPosition
    if ((snakeStartPosition + 1) % 20 != 0) {
        snakeFinalPosition = snakeStartPosition + 1
    } else {
        snakeFinalPosition = snakeStartPosition + 20
    }


    for (let index = 0; index < len * len; index++) {

        cells.push(
            <div key={index} className={`${index == foodPosition ? "bg-red-500" : ""} ${index == snakeStartPosition || index == snakeFinalPosition ? "bg-blue-500" : ""} border-blue-500 border-1 h-[${checkerLen}px] w-[${checkerLen}px]`}></div>)
    }
    const goAhead = (snakeFinalPosition) => {

        snakeStartPosition = snakeFinalPosition
        snakeFinalPosition = snakeStartPosition + 1
        cells.filter(snakeAhead => {
            <div key={snakeFinalPosition + 1} className={` border-blue-500 border-1 h-[${checkerLen}px] w-[${checkerLen}px]`}></div>

        })
    }




    return (<section className="flex justify-center items-center  h-screen">
        <section className={`w-[640px] h-[640px] border-black border-[${len}px]`}>
            <section className={`grid grid-cols-${len}`}>
                {cells}
            </section>
        </section>
    </section>
    )
}

export default Board