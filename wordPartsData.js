const wordPartsData = [
    {
        title: "Prefix Lab: un- & re-",
        instr: "Choose the word that fits the meaning.",
        qs: [
            { q: "Which word means <b>not</b> happy?", opts: ["Unhappy", "Rehappy", "Prehappy", "Dishappy"], c: 0 },
            { q: "Which word means to play <b>again</b>?", opts: ["Unplay", "Replay", "Preplay", "Misplay"], c: 1 },
            { q: "Which word means <b>not</b> kind?", opts: ["Rekind", "Unkind", "Prekind", "Diskind"], c: 1 },
            { q: "Which word means to read <b>again</b>?", opts: ["Unread", "Reread", "Preread", "Misread"], c: 1 },
            { q: "Which word means <b>not</b> safe?", opts: ["Unsafe", "Resafe", "Presafe", "Dissafe"], c: 0 },
            { q: "Which word means to tell <b>again</b>?", opts: ["Untell", "Retell", "Pretell", "Mistell"], c: 1 },
            { q: "Which word means <b>not</b> fair?", opts: ["Unfair", "Refair", "Prefair", "Disfair"], c: 0 },
            { q: "Which word means to write <b>again</b>?", opts: ["Unwrite", "Rewrite", "Prewrite", "Miswrite"], c: 1 },
            { q: "Which word means <b>not</b> lucky?", opts: ["Unlucky", "Relucky", "Prelucky", "Dislucky"], c: 0 },
            { q: "Which word means to make <b>again</b>?", opts: ["Unmake", "Remake", "Premake", "Mismake"], c: 1 }
        ]
    },
    {
        title: "Prefix Lab: pre-, dis-, & mis-",
        instr: "Identify the word based on the prefix.",
        qs: [
            { q: "Which word means to view <b>before</b>?", opts: ["Preview", "Review", "Unview", "Disview"], c: 0 },
            { q: "Which word means <b>not</b> to agree?", opts: ["Preagree", "Reagree", "Unagree", "Disagree"], c: 3 },
            { q: "Which word means to spell <b>wrong</b>?", opts: ["Prespell", "Respell", "Misspell", "Disspell"], c: 2 },
            { q: "Which word means to heat <b>before</b>?", opts: ["Preheat", "Reheat", "Unheat", "Disheat"], c: 0 },
            { q: "Which word means <b>not</b> to like?", opts: ["Prelike", "Relike", "Unlike", "Dislike"], c: 3 },
            { q: "Which word means to lead <b>wrong</b>?", opts: ["Prelead", "Relead", "Mislead", "Dislead"], c: 2 },
            { q: "Which word means to school <b>before</b>?", opts: ["Preschool", "Reschool", "Unschool", "Disschool"], c: 0 },
            { q: "Which word means <b>not</b> to trust?", opts: ["Pretrust", "Retrust", "Untrust", "Distrust"], c: 3 },
            { q: "Which word means to place <b>wrong</b>?", opts: ["Preplace", "Replace", "Misplace", "Displace"], c: 2 },
            { q: "Which word means to pay <b>before</b>?", opts: ["Prepay", "Repay", "Unpay", "Dispay"], c: 0 }
        ]
    },
    {
        title: "Suffix Lab: -ful & -less",
        instr: "Choose the word that describes the meaning.",
        qs: [
            { q: "Which word means <b>full of</b> help?", opts: ["Helpless", "Helpful", "Helpness", "Helply"], c: 1 },
            { q: "Which word means <b>without</b> a home?", opts: ["Homeful", "Homeless", "Homeness", "Homely"], c: 1 },
            { q: "Which word means <b>full of</b> cheer?", opts: ["Cheerless", "Cheerful", "Cheerness", "Cheerly"], c: 1 },
            { q: "Which word means <b>without</b> fear?", opts: ["Fearful", "Fearless", "Fearness", "Fearly"], c: 1 },
            { q: "Which word means <b>full of</b> color?", opts: ["Colorless", "Colorful", "Colorness", "Colorly"], c: 1 },
            { q: "Which word means <b>without</b> hope?", opts: ["Hopeful", "Hopeless", "Hopeness", "Hopely"], c: 1 },
            { q: "Which word means <b>full of</b> play?", opts: ["Playless", "Playful", "Playness", "Playly"], c: 1 },
            { q: "Which word means <b>without</b> use?", opts: ["Useful", "Useless", "Useness", "Usely"], c: 1 },
            { q: "Which word means <b>full of</b> care?", opts: ["Careless", "Careful", "Careness", "Carely"], c: 1 },
            { q: "Which word means <b>without</b> pain?", opts: ["Painful", "Painless", "Painness", "Painly"], c: 1 }
        ]
    },
    {
        title: "Suffix Lab: -er & -est",
        instr: "Comparing things and actions.",
        qs: [
            { q: "Which word means <b>more</b> fast?", opts: ["Fastest", "Faster", "Fastly", "Fastness"], c: 1 },
            { q: "Which word means the <b>most</b> tall?", opts: ["Taller", "Tallest", "Tally", "Tallness"], c: 1 },
            { q: "Which word means <b>more</b> small?", opts: ["Smallest", "Smaller", "Smally", "Smallness"], c: 1 },
            { q: "Which word means the <b>most</b> high?", opts: ["Higher", "Highest", "Highly", "Highness"], c: 1 },
            { q: "Which word means <b>more</b> slow?", opts: ["Slowest", "Slower", "Slowly", "Slowness"], c: 1 },
            { q: "Which word means the <b>most</b> loud?", opts: ["Louder", "Loudest", "Loudly", "Loudness"], c: 1 },
            { q: "Which word means <b>more</b> big?", opts: ["Biggest", "Bigger", "Bigly", "Bigness"], c: 1 },
            { q: "Which word means the <b>most</b> cold?", opts: ["Colder", "Coldest", "Coldly", "Coldness"], c: 1 },
            { q: "Which word means <b>one who</b> teaches?", opts: ["Teaching", "Teacher", "Teachly", "Teachful"], c: 1 },
            { q: "Which word means <b>one who</b> paints?", opts: ["Painting", "Painter", "Paintly", "Paintful"], c: 1 }
        ]
    },
    {
        title: "Suffix Lab: -ly & -ness",
        instr: "How things are or their state.",
        qs: [
            { q: "Which word means in a <b>quick</b> way?", opts: ["Quickly", "Quicker", "Quickest", "Quickness"], c: 0 },
            { q: "Which word means the state of being <b>kind</b>?", opts: ["Kindly", "Kinder", "Kindness", "Kindest"], c: 2 },
            { q: "Which word means in a <b>sad</b> way?", opts: ["Sadly", "Sadder", "Saddest", "Sadness"], c: 0 },
            { q: "Which word means the state of being <b>happy</b>?", opts: ["Happily", "Happier", "Happiness", "Happiest"], c: 2 },
            { q: "Which word means in a <b>loud</b> way?", opts: ["Loudly", "Louder", "Loudest", "Loudness"], c: 0 },
            { q: "Which word means the state of being <b>dark</b>?", opts: ["Darkly", "Darker", "Darkness", "Darkest"], c: 2 },
            { q: "Which word means in a <b>soft</b> way?", opts: ["Softly", "Softer", "Softest", "Softness"], c: 0 },
            { q: "Which word means the state of being <b>weak</b>?", opts: ["Weakly", "Weaker", "Weakness", "Weakest"], c: 2 },
            { q: "Which word means in a <b>brave</b> way?", opts: ["Bravely", "Braver", "Bravest", "Braveness"], c: 0 },
            { q: "Which word means the state of being <b>bright</b>?", opts: ["Brightly", "Brighter", "Brightness", "Brightest"], c: 2 }
        ]
    },
    {
        title: "Ending Lab: -ing & -ed",
        instr: "Actions happening now or in the past.",
        qs: [
            { q: "Which word means <b>jumping</b> right now?", opts: ["Jumped", "Jumping", "Jumper", "Jumply"], c: 1 },
            { q: "Which word means <b>walked</b> in the past?", opts: ["Walking", "Walked", "Walker", "Walkly"], c: 1 },
            { q: "Which word means <b>reading</b> right now?", opts: ["Readed", "Reading", "Reader", "Readly"], c: 1 },
            { q: "Which word means <b>played</b> in the past?", opts: ["Playing", "Played", "Player", "Playly"], c: 1 },
            { q: "Which word means <b>singing</b> right now?", opts: ["Singed", "Singing", "Singer", "Singly"], c: 1 },
            { q: "Which word means <b>talked</b> in the past?", opts: ["Talking", "Talked", "Talker", "Talkly"], c: 1 },
            { q: "Which word means <b>running</b> right now?", opts: ["Runned", "Running", "Runner", "Runly"], c: 1 },
            { q: "Which word means <b>called</b> in the past?", opts: ["Calling", "Called", "Caller", "Callly"], c: 1 },
            { q: "Which word means <b>looking</b> right now?", opts: ["Looked", "Looking", "Looker", "Lookly"], c: 1 },
            { q: "Which word means <b>helped</b> in the past?", opts: ["Helping", "Helped", "Helper", "Helply"], c: 1 }
        ]
    }
];

