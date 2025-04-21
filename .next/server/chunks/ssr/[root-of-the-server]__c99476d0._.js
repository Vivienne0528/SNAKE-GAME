module.exports = {

"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/react-dom [external] (react-dom, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}}),
"[project]/src/utils/useFunc.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useFunc": (()=>useFunc)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
const useFunc = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [boardLen, setBoardLen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(10);
    const [foodNumbs, setFoodNumbs] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(1);
    const [points, setPoints] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const lenFromQuery = parseInt(router.query.len);
    const foodNumbsFromQuery = parseInt(router.query.foodNumbs);
    const pointsFromQuery = parseInt(router.query.points);
    const boardSize = lenFromQuery * lenFromQuery;
    const [food, setFood] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])();
    const [snakeStartPosition, setSnakeStartPosition] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const [snakeFinalPosition, setSnakeFinalPosition] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const [snakeBody, setSnakeBody] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('RIGHT');
    const welcome = ()=>{
        router.push("/");
    };
    const handleStartGame = ()=>{
        router.push(`/game?len=${boardLen}&foodNumbs=${foodNumbs}`);
    };
    // const gameOver = () => { router.push("/gameOver") }
    const gameOver = ()=>{
        router.push(`/gameOver?points=${points}`);
    };
    const init = ()=>{
        let getFoodRandomPosition = Math.floor(Math.random() * boardSize);
        let getSnakeRandomPosition;
        do getSnakeRandomPosition = Math.floor(Math.random() * boardSize);
        while (getFoodRandomPosition === getSnakeRandomPosition)
        setFood(getFoodRandomPosition);
        setSnakeStartPosition(getSnakeRandomPosition);
        setSnakeFinalPosition(getSnakeRandomPosition - 1);
        setPoints(0);
    };
    const updateNewFood = ()=>{
        if (snakeStartPosition === food) {
            setPoints((prev)=>prev + 1);
            // setSnakeBody(prev => prev.push(snakeStartPosition))
            setSnakeBody((prev)=>[
                    ...prev,
                    snakeStartPosition
                ]);
            setSnakeStartPosition(food);
            let newFood;
            do newFood = Math.floor(Math.random() * boardSize);
            while (newFood === snakeStartPosition)
            setFood(newFood);
        }
    };
    const arrowRight = ()=>{
        setSnakeStartPosition((prev)=>{
            setSnakeFinalPosition(prev);
            return prev + 1;
        });
        setDirection('RIGHT');
    };
    const arrowLeft = ()=>{
        setSnakeStartPosition((prev)=>{
            setSnakeFinalPosition(prev);
            return prev - 1;
        });
        setDirection('LEFT');
    };
    const arrowUp = ()=>{
        setSnakeStartPosition((prev)=>{
            setSnakeFinalPosition(prev);
            return prev - lenFromQuery;
        });
        setDirection('UP');
    };
    const arrowDown = ()=>{
        setSnakeStartPosition((prev)=>{
            setSnakeFinalPosition(prev);
            return prev + lenFromQuery;
        });
        setDirection('DOWN');
    };
    const isHitWall = (pos)=>{
        return pos < 0 || pos >= boardSize || direction === 'LEFT' && snakeStartPosition % lenFromQuery === 0 || direction === 'RIGHT' && snakeStartPosition % lenFromQuery === lenFromQuery - 1;
    };
    return {
        snakeBody,
        pointsFromQuery,
        boardLen,
        router,
        welcome,
        gameOver,
        updateNewFood,
        init,
        snakeStartPosition,
        setFoodNumbs,
        snakeFinalPosition,
        food,
        setPoints,
        setFood,
        arrowUp,
        arrowRight,
        arrowLeft,
        arrowDown,
        isHitWall,
        direction,
        points,
        lenFromQuery,
        boardSize,
        setBoardLen,
        foodNumbs,
        foodNumbsFromQuery,
        handleStartGame
    };
};
}}),
"[project]/src/components/board/index.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//640*640->20*20
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$useFunc$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/useFunc.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
;
const Board = ({ len, boardSize })=>{
    const { snakeBody, updateNewFood, gameOver, init, snakeStartPosition, snakeFinalPosition, food, arrowUp, arrowRight, arrowLeft, arrowDown, isHitWall, direction, points } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$useFunc$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useFunc"])();
    const cells = [];
    const cellSize = 600 / len;
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        init();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        updateNewFood();
    }, [
        snakeStartPosition
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            switch(direction){
                case 'UP':
                    arrowUp();
                    break;
                case 'RIGHT':
                    arrowRight();
                    break;
                case 'LEFT':
                    arrowLeft();
                    break;
                case 'DOWN':
                    arrowDown();
                    break;
            }
            if (isHitWall(snakeStartPosition)) {
                clearInterval(interval);
                gameOver();
                return;
            }
        }, 1000);
        return ()=>clearInterval(interval);
    }, [
        food,
        snakeStartPosition,
        direction
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
    }, [
        direction
    ]);
    for(let index = 0; index < len * len; index++){
        const isFood = index === food;
        // const isSnake = snakePosition.includes(index)
        const isSnake = snakeStartPosition === index || snakeFinalPosition === index || snakeBody.includes(index);
        cells.push(// <div key={index} className={`${isFood ? "bg-red-500" : ""} ${isSnake ? "bg-blue-500" : ""} border-blue-500 border-1 h-[${cellSize}px] w-[${cellSize}px]`}></div>
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            style: {
                height: cellSize,
                width: cellSize
            },
            className: `${isFood ? "bg-red-500" : ""} ${isSnake ? "bg-blue-500" : ""} border-blue-500 border-1`
        }, index, false, {
            fileName: "[project]/src/components/board/index.tsx",
            lineNumber: 81,
            columnNumber: 13
        }, this));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "flex justify-center items-center h-screen",
        children: [
            points,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "w-[640px] h-[640px] border-black border-[20px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                    className: "grid",
                    style: {
                        gridTemplateColumns: `repeat(${len}, 1fr)`
                    },
                    children: cells
                }, void 0, false, {
                    fileName: "[project]/src/components/board/index.tsx",
                    lineNumber: 90,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/board/index.tsx",
                lineNumber: 88,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/board/index.tsx",
        lineNumber: 86,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = Board;
}}),
"[project]/src/pages/game/index.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$board$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/board/index.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$useFunc$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/useFunc.tsx [ssr] (ecmascript)");
;
;
;
const Game = ()=>{
    const { lenFromQuery, boardSize } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$useFunc$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useFunc"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$board$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        len: lenFromQuery,
        boardSize: boardSize
    }, void 0, false, {
        fileName: "[project]/src/pages/game/index.tsx",
        lineNumber: 6,
        columnNumber: 12
    }, this);
};
const __TURBOPACK__default__export__ = Game;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__c99476d0._.js.map