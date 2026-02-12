// quizGenerators.js
const initialCoinData = [
    { q: `${getCoin('c1')} + ${getCoin('c1')} + ${getCoin('c1')}`, opts: ["2 cents", "3 cents", "5 cents", "10 cents"], c: 1 },
    { q: `${getCoin('c5')} + ${getCoin('c5')}`, opts: ["5 cents", "10 cents", "25 cents", "2 cents"], c: 1 },
    { q: `${getCoin('c10')} + ${getCoin('c10')}`, opts: ["10 cents", "20 cents", "25 cents", "15 cents"], c: 1 },
    { q: `${getCoin('c25')} + ${getCoin('c10')}`, opts: ["30 cents", "35 cents", "40 cents", "25 cents"], c: 1 },
    { q: `${getCoin('c25')} + ${getCoin('c25')} + ${getCoin('c25')} + ${getCoin('c25')}`, opts: ["50 cents", "75 cents", "$1.00", "$2.00"], c: 2 },
    { q: `${getCoin('c10')} + ${getCoin('c5')} + ${getCoin('c1')}`, opts: ["15 cents", "16 cents", "20 cents", "11 cents"], c: 1 }
];

function generateTimeData() {
    const times = [];
    for (let i = 0; i < 50; i++) {
        const h = Math.floor(Math.random() * 12) + 1;
        const m = Math.floor(Math.random() * 12) * 5;
        const correctStr = `${h}:${m.toString().padStart(2, '0')}`;
        const opts = new Set([correctStr]);
        while (opts.size < 4) {
            const dh = Math.floor(Math.random() * 12) + 1;
            const dm = Math.floor(Math.random() * 12) * 5;
            opts.add(`${dh}:${dm.toString().padStart(2, '0')}`);
        }
        const sortedOpts = Array.from(opts).sort();
        times.push({ q: `What time is it now?<br>${getClockSVG(h, m)}`, opts: sortedOpts, c: sortedOpts.indexOf(correctStr) });
    }
    return times;
}

function generateMathData() {
    const math = [];
    for (let i = 0; i < 100; i++) {
        const op = Math.random() > 0.5 ? '+' : '-';
        let a, b, res;
        if (op === '+') { a = Math.floor(Math.random() * 101); b = Math.floor(Math.random() * (101 - a)); res = a + b; }
        else { a = Math.floor(Math.random() * 101); b = Math.floor(Math.random() * (a + 1)); res = a - b; }
        const correct = res.toString();
        const opts = new Set([correct]);
        while (opts.size < 4) opts.add((res + Math.floor(Math.random() * 20) - 10).toString());
        const sortedOpts = Array.from(opts).sort((x, y) => parseInt(x) - parseInt(y));
        math.push({ q: `Calculate: ${a} ${op} ${b} = ?`, opts: sortedOpts, c: sortedOpts.indexOf(correct) });
    }
    return math;
}

function generateShapesData() {
    const list = [];
    const names = ["circle", "square", "triangle", "rectangle", "star", "sphere", "cube", "cone", "cylinder", "pyramid"];
    const allOptions = ["Circle", "Square", "Triangle", "Rectangle", "Star", "Sphere", "Cube", "Cone", "Cylinder", "Pyramid"];
    for (let i = 0; i < 50; i++) {
        const type = names[Math.floor(Math.random() * names.length)];
        const correct = type.charAt(0).toUpperCase() + type.slice(1);
        let wrongs = shuffle(allOptions.filter(opt => opt !== correct)).slice(0, 3);
        const finalOpts = shuffle([correct, ...wrongs]).sort();
        list.push({ q: `What shape is this?<br>${getShapeSVG(type)}`, opts: finalOpts, c: finalOpts.indexOf(correct) });
    }
    return list;
}

function generateGrammarData() {
    const nouns = ["Dog", "Apple", "Teacher", "School", "Book", "Park", "Cat", "Ball"];
    const verbs = ["Run", "Jump", "Eat", "Sleep", "Sing", "Dance", "Write", "Read"];
    const list = [];
    for (let i = 0; i < 50; i++) {
        const isNoun = Math.random() > 0.5;
        const word = isNoun ? nouns[Math.floor(Math.random() * nouns.length)] : verbs[Math.floor(Math.random() * verbs.length)];
        list.push({ q: `Is the word "<b>${word}</b>" a Noun or a Verb?`, opts: ["Noun", "Verb"], c: isNoun ? 0 : 1 });
    }
    return list;
}
