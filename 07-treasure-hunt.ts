import * as fs from "fs";

interface Location {
    x: number;
    y: number;
}

interface Point {
    coords: Location;
    momentum: Location;
}

const inputParser = () => {
    return new Promise((res, rej) => {
        fs.readFile("./aoc.txt", "utf-8", (err, data) => {
            if (err) throw err;
            const splitData = data.split("\r\n").map(l => l.split(")>")).map(l => l.slice(0, 2));
            splitData.pop();
            const parsedData = splitData
                .map(l => [l[0].slice(13), l[1].slice(11)])
                .map(l => l.map(j => j.split(", ").map(Number)))
                .map(l => ({ coords: { x: l[0][0], y: l[0][1] }, momentum: { x: l[1][0], y: l[1][1] }}));
            const iterated = genArr(20000, parsedData);
            const min = iterated.find(l => {
                return l.dims.x === 23
            });
            console.log(min);
            console.log(displayBoard(100, 20, min.board));
        });
    });
}

const displayBoard = (width: number, height: number, board: Point[]) => {
    console.log(board);
    let str = "";
    for (let i = -height; i < height; i++) {
        for (let j = -width; j < width; j++) {
            if (board.find(l => l.coords.x === j && l.coords.y === i)) {
                str += "#";
            } else {
                str += " ";
            }
        }
        str += "\n";
    }
    return str;
}

const getBoardDims = (board: Point[]): Location => {
    const lowestX = board.reduce((acc, cur) => acc > cur.coords.x ? cur.coords.x : acc, 99999999999999);
    const lowestY = board.reduce((acc, cur) => acc > cur.coords.y ? cur.coords.y : acc, 99999999999999);
    const highestX = board.reduce((acc, cur) => acc < cur.coords.x ? cur.coords.x : acc, -99999999999999);
    const highestY = board.reduce((acc, cur) => acc < cur.coords.y ? cur.coords.y : acc, -999999999999999);
    return {
        x: highestX - lowestX,
        y: highestY - lowestY
    }
}

const iterateBoard = (board: Point[]) => {
    return board.map(l => ({
        coords: {
            x: l.coords.x + l.momentum.x,
            y: l.coords.y + l.momentum.y
        },
        momentum: {
            x: l.momentum.x,
            y: l.momentum.y
        }
    }));
}

const genArr = (iters: number, board: Point[]): {dims: Location, board: Point[]}[] => {
    const dims: {dims: Location, board: Point[]}[] = [];
    let curBoard = board;
    for (let i = 0; i < iters; i++) {
        curBoard = iterateBoard(curBoard);
        dims.push({
            dims: getBoardDims(curBoard),
            board: curBoard
        });
    }
    return dims;
}

inputParser()