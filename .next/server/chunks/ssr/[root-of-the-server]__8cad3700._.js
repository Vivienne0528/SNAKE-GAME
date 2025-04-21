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
    const [snakeBody, setSnakeBody] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('RIGHT');
    const welcome = ()=>{
        router.push("/");
    };
    const handleStartGame = ()=>{
        router.push(`/game?len=${boardLen}&foodNumbs=${foodNumbs}`);
    };
    const gameOver = ()=>{
        router.push(`/gameOver?points=${points}`);
    };
    const init = ()=>{
        let getFoodRandomPosition = Math.floor(Math.random() * boardSize);
        let getSnakeRandomPosition;
        do getSnakeRandomPosition = Math.floor(Math.random() * boardSize);
        while (getFoodRandomPosition === getSnakeRandomPosition)
        const initialHead = getSnakeRandomPosition;
        const initialTail = initialHead - 1;
        const initialBody = [
            initialHead,
            initialTail
        ];
        setFood(getFoodRandomPosition);
        setSnakeBody(initialBody);
        setPoints(0);
    };
    const updateNewFoodNewSnake = ()=>{
        if (snakeBody.includes(food)) {
            setPoints((prev)=>prev + 1);
            switch(direction){
                case 'UP':
                    setSnakeBody((prev)=>[
                            ...prev,
                            food - lenFromQuery
                        ]);
                    break;
                case 'RIGHT':
                    setSnakeBody((prev)=>[
                            ...prev,
                            food + 1
                        ]);
                    break;
                case 'LEFT':
                    setSnakeBody((prev)=>[
                            ...prev,
                            food - 1
                        ]);
                    break;
                case 'DOWN':
                    setSnakeBody((prev)=>[
                            ...prev,
                            food + lenFromQuery
                        ]);
                    break;
            }
            let newFood;
            do newFood = Math.floor(Math.random() * boardSize);
            while (snakeBody.includes(newFood))
            setFood(newFood);
        }
    };
    const arrowRight = ()=>{
        setSnakeBody((prev)=>{
            const newHead = prev[0] + 1;
            const newBody = [
                newHead,
                ...prev.slice(0, -1)
            ];
            return newBody;
        });
        setDirection('RIGHT');
    };
    const arrowLeft = ()=>{
        setSnakeBody((prev)=>{
            const newHead = prev[0] - 1;
            const newBody = [
                newHead,
                ...prev.slice(0, -1)
            ];
            return newBody;
        });
        setDirection('LEFT');
    };
    const arrowUp = ()=>{
        setSnakeBody((prev)=>{
            const newHead = prev[0] - lenFromQuery;
            const newBody = [
                newHead,
                ...prev.slice(0, -1)
            ];
            return newBody;
        });
        setDirection('UP');
    };
    const arrowDown = ()=>{
        setSnakeBody((prev)=>{
            const newHead = prev[0] + lenFromQuery;
            const newBody = [
                newHead,
                ...prev.slice(0, -1)
            ];
            return newBody;
        });
        setDirection('DOWN');
    };
    const moveSnake = ()=>{
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
    };
    const handleKeyDown = (event)=>{
        const key = event.key;
        switch(key){
            case 'ArrowUp':
                if (direction !== 'DOWN') arrowUp();
                break;
            case 'ArrowRight':
                if (direction !== 'LEFT') arrowRight();
                break;
            case 'ArrowLeft':
                if (direction !== 'RIGHT') arrowLeft();
                break;
            case 'ArrowDown':
                if (direction !== 'UP') arrowDown();
                break;
            default:
                break;
        }
    };
    const isHitWall = (snake)=>{
        return snake.find((pos)=>pos < 0) || snake.find((pos)=>pos >= boardSize) || direction === 'LEFT' && snake[0] % lenFromQuery === 0 || direction === 'RIGHT' && snake[0] % lenFromQuery === lenFromQuery - 1;
    };
    const isHitSnake = ()=>{
        return snakeBody.slice(1).includes(snakeBody[0]);
    };
    const isGameOver = ()=>{
        if (isHitWall(snakeBody) || isHitSnake()) {
            // clearInterval(interval)
            gameOver();
            return;
        }
    };
    return {
        boardLen,
        setBoardLen,
        foodNumbs,
        setFoodNumbs,
        handleStartGame,
        isGameOver,
        handleKeyDown,
        moveSnake,
        snakeBody,
        updateNewFoodNewSnake,
        init,
        food,
        direction,
        points,
        lenFromQuery,
        boardSize,
        welcome,
        pointsFromQuery
    };
};
}}),
"[project]/src/pages/gameOver/index.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$useFunc$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/useFunc.tsx [ssr] (ecmascript)");
;
;
const GameOver = ()=>{
    const { welcome, pointsFromQuery } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$useFunc$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["useFunc"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "h-screen w-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-blue-900",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
            className: "w-[640px] h-[640px] bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-10 animate-fade-in",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                    className: "text-6xl font-extrabold text-red-600 animate-bounce",
                    children: "GAME OVER!"
                }, void 0, false, {
                    fileName: "[project]/src/pages/gameOver/index.tsx",
                    lineNumber: 10,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                    className: "text-3xl text-gray-800",
                    children: [
                        "FINAL POINTS: ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: "text-blue-600 font-bold",
                            children: pointsFromQuery
                        }, void 0, false, {
                            fileName: "[project]/src/pages/gameOver/index.tsx",
                            lineNumber: 14,
                            columnNumber: 35
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/gameOver/index.tsx",
                    lineNumber: 13,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                    onClick: welcome,
                    className: "px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-xl font-semibold rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105",
                    children: "🔁 PLAY AGAIN"
                }, void 0, false, {
                    fileName: "[project]/src/pages/gameOver/index.tsx",
                    lineNumber: 16,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/pages/gameOver/index.tsx",
            lineNumber: 9,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/pages/gameOver/index.tsx",
        lineNumber: 8,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = GameOver;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__8cad3700._.js.map