const lessonData = [
    {
        title: "Lesson 1: Antonyms",
        instr: "Choose the opposite word.",
        qs: [
            { q: "Opposite of <u>hot</u>", opts: ["warm", "cold", "sunny", "burn"], c: 1 },
            { q: "Opposite of <u>big</u>", opts: ["large", "huge", "small", "tall"], c: 2 },
            { q: "Opposite of <u>happy</u>", opts: ["glad", "sad", "silly", "fun"], c: 1 },
            { q: "Opposite of <u>fast</u>", opts: ["quick", "slow", "run", "race"], c: 1 }
        ]
    },
    {
        title: "Lesson 2: Synonyms",
        instr: "Choose the word with the same meaning.",
        qs: [
            { q: "Synonym of <u>small</u>", opts: ["big", "tiny", "large", "huge"], c: 1 },
            { q: "Synonym of <u>fast</u>", opts: ["slow", "quick", "lazy", "crawl"], c: 1 },
            { q: "Synonym of <u>glad</u>", opts: ["sad", "mad", "happy", "grumpy"], c: 2 },
            { q: "Synonym of <u>scared</u>", opts: ["brave", "afraid", "happy", "bold"], c: 1 }
        ]
    },
    {
        title: "Lesson 3: Homographs",
        instr: "One word, two meanings!",
        qs: [
            { q: "I have a ___ of gum. / Help me ___ my bag.", opts: ["pack", "stick", "roll", "box"], c: 0 },
            { q: "Turn on the ___ to cool down. / I am a big ___ of that team.", opts: ["air", "fan", "wind", "player"], c: 1 },
            { q: "Look at your ___ to see the time. / I like to ___ movies.", opts: ["clock", "watch", "show", "screen"], c: 1 },
            { q: "The bird has a sharp ___. / Please pay the ___.", opts: ["beak", "bill", "wing", "check"], c: 1 }
        ]
    },
    {
        title: "Lesson 4: Compound Words",
        instr: "Two words joined together.",
        qs: [
            { q: "sun + flower =", opts: ["sunshine", "flowerpot", "sunflower", "garden"], c: 2 },
            { q: "rain + bow =", opts: ["rainbow", "raincoat", "raindrop", "snowbow"], c: 0 },
            { q: "butter + fly =", opts: ["buttercup", "butterfly", "flybutter", "dragonfly"], c: 1 },
            { q: "back + pack =", opts: ["backpack", "package", "backside", "backyard"], c: 0 }
        ]
    },
    {
        title: "Lesson 5: Plural Nouns",
        instr: "More than one!",
        qs: [
            { q: "One dog, many ___", opts: ["doges", "dogs", "dogging", "dogly"], c: 1 },
            { q: "One cat, many ___", opts: ["cats", "cates", "catty", "catted"], c: 0 },
            { q: "One box, many ___", opts: ["boxs", "boxes", "boxing", "boxly"], c: 1 },
            { q: "One dish, many ___", opts: ["dishs", "dishes", "dished", "dishing"], c: 1 }
        ]
    },
    {
        title: "Lesson 6: Verbs",
        instr: "Find the action word.",
        qs: [
            { q: "The boy ___ to school.", opts: ["apple", "runs", "happy", "green"], c: 1 },
            { q: "I ___ a book every night.", opts: ["read", "blue", "pencil", "sleepy"], c: 0 },
            { q: "We ___ in the pool.", opts: ["swim", "water", "wet", "fish"], c: 0 },
            { q: "Birds ___ in the sky.", opts: ["fly", "cloud", "wings", "high"], c: 0 }
        ]
    },
    {
        title: "Lesson 7: Adjectives",
        instr: "Words that describe things.",
        qs: [
            { q: "The ___ apple was yummy.", opts: ["run", "red", "eat", "fast"], c: 1 },
            { q: "The puppy is very ___.", opts: ["jump", "cute", "bark", "tail"], c: 1 },
            { q: "It was a ___ day.", opts: ["sun", "sunny", "sky", "blue"], c: 1 },
            { q: "I have a ___ ball.", opts: ["round", "spin", "bounce", "play"], c: 0 }
        ]
    },
    {
        title: "Lesson 8: Proper Nouns",
        instr: "Special names for people and places.",
        qs: [
            { q: "Which is a special name?", opts: ["boy", "girl", "Merola", "friend"], c: 2 },
            { q: "Which is a special place?", opts: ["school", "Egypt", "park", "store"], c: 1 },
            { q: "Which is a day of the week?", opts: ["today", "Monday", "morning", "night"], c: 1 },
            { q: "Which is a month?", opts: ["winter", "July", "summer", "week"], c: 1 }
        ]
    },
    {
        title: "Lesson 9: Contractions",
        instr: "Shortening words.",
        qs: [
            { q: "do + not =", opts: ["don't", "dont", "do'not", "doit"], c: 0 },
            { q: "is + not =", opts: ["isnt", "isn't", "isnot", "is't"], c: 1 },
            { q: "I + am =", opts: ["Iam", "I'm", "Im", "I'am"], c: 1 },
            { q: "can + not =", opts: ["cant", "can't", "cannot", "can'tnot"], c: 1 }
        ]
    },
    {
        title: "Lesson 10: Rhyming Words",
        instr: "Words that sound the same at the end.",
        qs: [
            { q: "What rhymes with <u>cat</u>?", opts: ["dog", "bat", "bird", "fish"], c: 1 },
            { q: "What rhymes with <u>tree</u>?", opts: ["bee", "leaf", "green", "wood"], c: 0 },
            { q: "What rhymes with <u>sun</u>?", opts: ["hot", "fun", "day", "star"], c: 1 },
            { q: "What rhymes with <u>cake</u>?", opts: ["pie", "bake", "sweet", "eat"], c: 1 }
        ]
    }
];

