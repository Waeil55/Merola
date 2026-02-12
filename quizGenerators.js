// Utility for Coin Images - Updated to your Merola Repo links
const COIN_URLS = {
    c1: "https://raw.githubusercontent.com/Waeil55/Merola/main/1.PNG",
    c5: "https://raw.githubusercontent.com/Waeil55/Merola/main/5.PNG",
    c10: "https://raw.githubusercontent.com/Waeil55/Merola/main/10.PNG",
    c25: "https://raw.githubusercontent.com/Waeil55/Merola/main/25.PNG",
    c100: "https://raw.githubusercontent.com/Waeil55/Merola/main/1dollar.PNG"
};

const getCoin = (key) => {
    const sizes = { c10: '3.5em', c1: '3.8em', c5: '4.2em', c25: '4.8em', c100: '5.2em' }; 
    return `<img src="${COIN_URLS[key]}" class="coin-img align-middle inline-block mx-1 object-contain max-w-[20vw]" style="height: ${sizes[key]}" alt="${key}">`;
};

// Clock SVG Generator
function getClockSVG(h, m) {
    const hDeg = (h % 12 + m / 60) * 30;
    const mDeg = m * 6;
    return `
    <div class="bg-white p-4 rounded-full inline-block border-4 border-purple-200 shadow-inner">
        <svg class="clock-svg w-32 h-32" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="#FFF" stroke="#673AB7" stroke-width="3"/>
            <circle cx="50" cy="50" r="2" fill="#673AB7"/>
            ${[12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((n, i) => {
                const ang = (i * 30) * Math.PI / 180;
                return `<text x="${50 + 35 * Math.sin(ang)}" y="${54 - 35 * Math.cos(ang)}" font-size="8" text-anchor="middle" fill="#673AB7" font-weight="900" style="font-family: 'Comic Neue'">${n}</text>`;
            }).join('')}
            <line x1="50" y1="50" x2="50" y2="28" stroke="#2D3436" stroke-width="4" stroke-linecap="round" transform="rotate(${hDeg} 50 50)"/>
            <line x1="50" y1="50" x2="50" y2="15" stroke="#9C27B0" stroke-width="3" stroke-linecap="round" transform="rotate(${mDeg} 50 50)"/>
        </svg>
    </div>`;
}

// Shape SVG Generator
function getShapeSVG(type) {
    const shapes = {
        circle: '<circle cx="50" cy="50" r="40" fill="#FF7675" stroke="#D63031" stroke-width="3"/>',
        square: '<rect x="15" y="15" width="70" height="70" fill="#74B9FF" stroke="#0984E3" stroke-width="3"/>',
        triangle: '<polygon points="50,15 90,85 10,85" fill="#55EFC4" stroke="#00B894" stroke-width="3"/>',
        rectangle: '<rect x="10" y="25" width="80" height="50" fill="#FDCB6E" stroke="#E17055" stroke-width="3"/>',
        star: '<polygon points="50,5 63,35 95,35 70,55 80,85 50,65 20,85 30,55 5,35 37,35" fill="#A29BFE" stroke="#6C5CE7" stroke-width="3"/>',
        sphere: '<circle cx="50" cy="50" r="40" fill="url(#sphereGrad)"/><defs><radialGradient id="sphereGrad" cx="30%" cy="30%" r="50%"><stop offset="0%" stop-color="#81ECEC"/><stop offset="100%" stop-color="#00CEC9"/></radialGradient></defs>',
        cube: '<path d="M20 30 l30 -10 l30 10 v40 l-30 10 l-30 -10 z" fill="#FAB1A0" stroke="#E17055" stroke-width="3"/><path d="M20 30 l30 10 l30 -10 M50 40 v40" fill="none" stroke="#E17055" stroke-width="3"/>',
        cone: '<ellipse cx="50" cy="80" rx="30" ry="10" fill="#FFEAA7" stroke="#FDCB6E" stroke-width="3"/><path d="M20 80 L50 20 L80 80" fill="#FFEAA7" stroke="#FDCB6E" stroke-width="3"/>',
        cylinder: '<ellipse cx="50" cy="25" rx="30" ry="10" fill="#81ECEC" stroke="#00CEC9" stroke-width="3"/><path d="M20 25 v50 a30 10 0 0 0 60 0 v-50" fill="#81ECEC" stroke="#00CEC9" stroke-width="3"/><ellipse cx="50" cy="75" rx="30" ry="10" fill="none" stroke="#00CEC9" stroke-width="3" stroke-dasharray="2 2"/>',
        pyramid: '<polygon points="50,15 85,85 15,85" fill="#D63031" stroke="#2D3436" stroke-width="3"/><line x1="50" y1="15" x2="50" y2="85" stroke="#2D3436" stroke-width="2"/>'
    };
    return `<div class="p-4">${shapes[type] || ''}</div>`;
}

// Data Sets
const initialCoinData = [
    { q: `Count the coins:<br>${getCoin('c1')} + ${getCoin('c1')} + ${getCoin('c1')}`, opts: ["2 cents", "3 cents", "5 cents", "10 cents"], c: 1 },
    { q: `Count the coins:<br>${getCoin('c5')} + ${getCoin('c5')}`, opts: ["5 cents", "10 cents", "25 cents", "2 cents"], c: 1 },
    { q: `Count the coins:<br>${getCoin('c10')} + ${getCoin('c10')}`, opts: ["10 cents", "20 cents", "25 cents", "15 cents"], c: 1 },
    { q: `Count the coins:<br>${getCoin('c25')} + ${getCoin('c10')}`, opts: ["30 cents", "35 cents", "40 cents", "25 cents"], c: 1 },
    { q: `Count the coins:<br>${getCoin('c25')} + ${getCoin('c25')} + ${getCoin('c25')} + ${getCoin('c25')}`, opts: ["50 cents", "75 cents", "$1.00", "$2.00"], c: 2 },
    { q: `Count the coins:<br>${getCoin('c10')} + ${getCoin('c5')} + ${getCoin('c1')}`, opts: ["15 cents", "16 cents", "20 cents", "11 cents"], c: 1 }
];

function generateTimeData() {
    const times = [];
    for (let i = 0; i < 20; i++) {
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
        times.push({ q: `What time is it?<br>${getClockSVG(h, m)}`, opts: sortedOpts, c: sortedOpts.indexOf(correctStr) });
    }
    return times;
}

function generateMathData() {
    const math = [];
    for (let i = 0; i < 40; i++) {
        const op = Math.random() > 0.5 ? '+' : '-';
        let a, b, res;
        if (op === '+') { a = Math.floor(Math.random() * 51); b = Math.floor(Math.random() * 51); res = a + b; }
        else { a = Math.floor(Math.random() * 81) + 20; b = Math.floor(Math.random() * a); res = a - b; }
        const correct = res.toString();
        const opts = new Set([correct]);
        while (opts.size < 4) opts.add((res + Math.floor(Math.random() * 10) - 5).toString());
        const sortedOpts = Array.from(opts).sort((x, y) => parseInt(x) - parseInt(y));
        math.push({ q: `Calculate:<br><span class="text-4xl">${a} ${op} ${b} = ?</span>`, opts: sortedOpts, c: sortedOpts.indexOf(correct) });
    }
    return math;
}

function generateShapesData() {
    const list = [];
    const names = ["circle", "square", "triangle", "rectangle", "star", "sphere", "cube", "cone", "cylinder", "pyramid"];
    for (let i = 0; i < 20; i++) {
        const type = names[Math.floor(Math.random() * names.length)];
        const correct = type.charAt(0).toUpperCase() + type.slice(1);
        const all = ["Circle", "Square", "Triangle", "Rectangle", "Star", "Sphere", "Cube", "Cone", "Cylinder", "Pyramid"];
        let wrongs = all.filter(opt => opt !== correct).sort(() => 0.5 - Math.random()).slice(0, 3);
        const finalOpts = [correct, ...wrongs].sort();
        list.push({ q: `What shape is this?<br><svg class="w-32 h-32 mx-auto" viewBox="0 0 100 100">${getShapeSVG(type)}</svg>`, opts: finalOpts, c: finalOpts.indexOf(correct) });
    }
    return list;
}

function generateGrammarData() {
    const nouns = ["Dog", "Apple", "Teacher", "School", "Book", "Park", "Cat", "Ball"];
    const verbs = ["Run", "Jump", "Eat", "Sleep", "Sing", "Dance", "Write", "Read"];
    const list = [];
    for (let i = 0; i < 20; i++) {
        const isNoun = Math.random() > 0.5;
        const word = isNoun ? nouns[Math.floor(Math.random() * nouns.length)] : verbs[Math.floor(Math.random() * verbs.length)];
        list.push({ q: `Is this word a Noun or a Verb?<br><span class="text-4xl text-purple-600">${word}</span>`, opts: ["Noun", "Verb"], c: isNoun ? 0 : 1 });
    }
    return list;
}

