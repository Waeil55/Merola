// lessonData.js
const lessonData = [
    {
        title: "Page 1: Antonyms",
        instr: "Choose the word that means the opposite of the underlined word.",
        qs: [
            { q: "1. a <u>problem</u>", opts: ["solution", "worry", "math", "sentence"], c: 0 },
            { q: "2. was <u>loose</u>", opts: ["tight", "large", "big", "win"], c: 0 },
            { q: "3. a <u>question</u>", opts: ["word", "poem", "answer", "talk"], c: 2 },
            { q: "4. was <u>fact</u>", opts: ["true", "real", "scary", "fiction"], c: 3 },
            { q: "5. was <u>straight</u>", opts: ["bent", "tall", "narrow", "long"], c: 0 },
            { q: "6. to <u>create</u>", opts: ["make", "build", "destroy", "draw"], c: 2 },
            { q: "7. was <u>shiny</u>", opts: ["dull", "bright", "pretty", "ugly"], c: 0 },
            { q: "8. to <u>listen</u>", opts: ["hear", "ignore", "touch", "eat"], c: 1 }
        ]
    },
    {
        title: "Page 2: Homographs",
        instr: "Choose the word that correctly completes BOTH sentences.",
        qs: [
            { q: "1. She counted all the ___ in her purse.<br>He will ___ clothes before practice.", opts: ["coins", "change", "buy", "money"], c: 1 },
            { q: "2. I will ___ a movie before bed.<br>Use your ___ to tell the time.", opts: ["watch", "clock", "see", "rent"], c: 0 },
            { q: "3. If it gets too hot, turn on the ___.<br>I am a big ___ of the basketball team.", opts: ["fan", "air", "player", "water"], c: 0 },
            { q: "4. Don't forget to ___ your bag.<br>Buy a ___ of gum at the store.", opts: ["stick", "pack", "bring", "use"], c: 1 },
            { q: "5. She ___ school every day at 3:00.<br>In the fall, rake the ___.", opts: ["grass", "leaves", "visits", "flowers"], c: 1 },
            { q: "6. We took a ___ to the fair.<br>You can ___ your dog to do tricks.", opts: ["car", "teach", "train", "bus"], c: 2 },
            { q: "7. Learn about ___ in science class.<br>Floss the ___ between your teeth.", opts: ["plants", "letter", "water", "space"], c: 3 },
            { q: "8. Don't ___ in front of others.<br>___ the paper into four squares.", opts: ["tear", "rip", "cut", "hit"], c: 2 }
        ]
    },
    {
        title: "Page 3: Prefixes Mastery",
        instr: "Choose the correct word based on the prefix meaning.",
        qs: [
            { q: "1. Which word means <b>not</b> fair?", opts: ["Fairness", "Unfair", "Missfair", "Disfair"], c: 1 },
            { q: "2. Which word means to wind <b>again</b>?", opts: ["Rewind", "Rewinding", "Unwind", "Miswind"], c: 0 },
            { q: "3. Which word means to heat <b>before</b>?", opts: ["Heating", "Preheat", "Unheat", "Misheat"], c: 1 },
            { q: "4. Which word means to make <b>again</b>?", opts: ["Remake", "Remaking", "Unmake", "Dismake"], c: 0 },
            { q: "5. Which word means to <b>stop appearing</b>?", opts: ["Appearing", "Disappear", "Misappear", "Reappear"], c: 1 },
            { q: "6. Which word means to spell <b>wrong</b>?", opts: ["Spellings", "Misspell", "Unspell", "Prespell"], c: 1 },
            { q: "7. Which word means to <b>not</b> agree?", opts: ["Agreements", "Disagree", "Unagree", "Misagree"], c: 1 },
            { q: "8. Which word means <b>not</b> even?", opts: ["Evenly", "Uneven", "Reeven", "Diseven"], c: 1 }
        ]
    },
    {
        title: "Page 4: Suffixes Mastery",
        instr: "Choose the correct word based on the suffix meaning.",
        qs: [
            { q: "1. Which word means <b>without</b> worth?", opts: ["Worthful", "Worthless", "Worthness", "Worthly"], c: 1 },
            { q: "2. Which word means the <b>state</b> of being weak?", opts: ["Weakly", "Weakness", "Weakful", "Weakless"], c: 1 },
            { q: "3. Which word means <b>full of</b> help?", opts: ["Helpless", "Helpful", "Helpness", "Helply"], c: 1 },
            { q: "4. Which word means <b>one who</b> teaches?", opts: ["Teaching", "Teacher", "Teachless", "Teachful"], c: 1 },
            { q: "5. Which word means <b>without</b> a home?", opts: ["Homely", "Homeless", "Homeness", "Homeful"], c: 1 },
            { q: "6. Which word means <b>full of</b> color?", opts: ["Colorly", "Colorful", "Colorless", "Colorness"], c: 1 },
            { q: "7. Which word means <b>in a quick way</b>?", opts: ["Quickless", "Quickly", "Quickful", "Quicker"], c: 1 },
            { q: "8. Which word means <b>one who</b> leads?", opts: ["Leading", "Leader", "Leadless", "Leadful"], c: 1 }
        ]
    },
    {
        title: "Pages 7-8: Section 2 - Penguins",
        passage: "Most penguins live in a land of snow and ice. They have feathers, wings, and a beak... But they cannot fly because their body is too heavy. They use their flat, stiff wings as flippers to help them swim swiftly. They eat shrimplike animals called krill.",
        qs: [
            { q: "1.", qText: "Which sentence DOES NOT tell how they move?", opts: ["waddle land", "slide on bellies", "make nest of pebbles", "webbed feet"], c: 2 },
            { q: "2.", qText: "Meaning of <b>swiftly</b>:", opts: ["carefully", "quickly", "slowly", "safely"], c: 1 },
            { q: "3.", qText: "<b>Krill</b> means:", opts: ["eggs", "fish", "shrimplike animals", "babies"], c: 2 },
            { q: "4.", qText: "Fact about penguins:", opts: ["bad swimmers", "exactly like other birds", "wings help swim", "only mothers"], c: 2 }
        ]
    },
    {
        title: "Pages 9-10: Wright Brothers",
        passage: "Orville and Wilbur Wright owned a bicycle shop. In 1899, they began to experiment with flight using kites and gliders. In 1903, they took the first motor-powered flight for 12 seconds.",
        qs: [
            { q: "8.", qText: "Main idea:", opts: ["Testing bad", "Flyer first", "Early pilots", "Bike shop"], c: 2 },
            { q: "9.", qText: "<b>Experiment</b>:", opts: ["try new ideas", "test kites", "stay in air", "fly airplane"], c: 0 },
            { q: "12.", qText: "Opposite of started:", opts: ["began", "finished", "first", "continued"], c: 1 },
            { q: "13.", qText: "Opinion:", opts: ["Tested kites", "Flight in 1903", "Very smart", "Flyer first"], c: 2 }
        ]
    },
    {
        title: "Page 16: Synonyms Mastery",
        instr: "Choose the word that means about the same.",
        qs: [
            { q: "1. was <u>old</u>", opts: ["new", "ancient", "young", "dirty"], c: 1 },
            { q: "2. was <u>quiet</u>", opts: ["loud", "silent", "noisy", "yelling"], c: 1 },
            { q: "3. was <u>thin</u>", opts: ["narrow", "wide", "short", "tall"], c: 0 },
            { q: "4. was <u>unusual</u>", opts: ["regular", "normal", "strange", "same"], c: 2 },
            { q: "5. was <u>shiny</u>", opts: ["bright", "dull", "new", "pretty"], c: 0 }
        ]
    },
    {
        title: "Page 17: Context Clues Mastery",
        instr: "Read the context and fill in the numbered blanks.",
        passage: "My family is going on a (1) trip. We will (2) to the beach in our car. Some people like to (3) soda and eat candy. You should (4) brush your teeth (5) morning. We are going to learn (6) animals. I do not have (7) time to finish my book.",
        qs: [
            { q: "1.", opts: ["large", "clean", "special", "hard"], c: 2 },
            { q: "2.", opts: ["swim", "travel", "together", "bring"], c: 1 },
            { q: "3.", opts: ["drink", "carry", "start", "bring"], c: 0 },
            { q: "4.", opts: ["never", "always", "sometimes", "rarely"], c: 1 },
            { q: "5.", opts: ["every", "none", "only", "not"], c: 0 },
            { q: "6.", opts: ["about", "from", "with", "around"], c: 0 },
            { q: "7.", opts: ["enough", "many", "few", "none"], c: 0 }
        ]
    }
];
