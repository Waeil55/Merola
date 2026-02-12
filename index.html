<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    
    <!-- PWA & iOS App Meta Tags -->
    <title>Merola's Lab</title>
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="Merola's Lab">
    
    <link rel="apple-touch-icon" href="https://raw.githubusercontent.com/Waeil55/Merola/main/IMG_3813.png">
    <link rel="icon" type="image/png" href="https://raw.githubusercontent.com/Waeil55/Merola/main/IMG_3813.png">
    <meta name="theme-color" content="#673AB7">

    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Bubblegum+Sans&family=Comic+Neue:wght@700;900&display=swap" rel="stylesheet">
    
    <!-- External Logic Imports (Kept for compatibility) -->
    <script src="readingData.js"></script>
    <script src="quizGenerators.js"></script>
    <script src="wordPartsData.js"></script>
    <script src="storiesData.js"></script>
    <script src="writingData.js"></script>

    <style>
        :root {
            --bg-color: #F8F4FF;
            --card-bg: #ffffff;
            --text-color: #2D3436;
            --title-color: #9C27B0;
            --instr-color: #673AB7;
            --border-color: #B39DDB;
            --primary-action: #6C5CE7;
            --user-font-size: 22px;
            --header-bg: #673AB7;
            --passage-bg: #E1F5FE;
        }

        .dark {
            --bg-color: #1A1A2E;
            --card-bg: #2D3436;
            --text-color: #F3E5F5;
            --title-color: #BB86FC;
            --border-color: #5E35B1;
            --header-bg: #311B92;
            --passage-bg: #2C3E50;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            font-family: 'Bubblegum Sans', cursive;
            background-image: radial-gradient(var(--border-color) 1px, transparent 1px);
            background-size: 30px 30px;
            transition: background-color 0.3s ease, color 0.3s ease;
            -webkit-tap-highlight-color: transparent;
            overflow-x: hidden;
        }

        .q-text { 
            font-size: var(--user-font-size) !important; 
            font-family: 'Comic Neue', cursive; 
            font-weight: 900;
            color: var(--text-color) !important; 
        }

        .passage-text { 
            font-size: var(--user-font-size) !important; 
            line-height: 1.6; 
            font-weight: 900; 
            font-family: 'Comic Neue', cursive;
            color: var(--text-color) !important;
        }

        .instr-text { 
            font-size: calc(var(--user-font-size) * 0.7) !important; 
            line-height: 1.2; 
            font-weight: 800; 
            font-family: 'Comic Neue';
            color: var(--text-color);
            opacity: 0.9;
        }

        .option-btn { 
            font-size: calc(var(--user-font-size) * 0.9) !important; 
            border-radius: 25px; 
            background: var(--card-bg); 
            box-shadow: 0 6px 0 var(--border-color); 
            border: 2px solid var(--border-color); 
            color: var(--text-color); 
        }
        .option-btn:active { transform: translateY(4px); box-shadow: 0 2px 0 var(--border-color); }

        .card { 
            background-color: var(--card-bg); 
            border: 4px solid var(--border-color); 
            border-radius: 40px; 
            box-shadow: 8px 8px 0px var(--border-color); 
        }
        
        .passage-box { 
            background-color: var(--passage-bg) !important; 
            border: 4px dotted var(--primary-action) !important; 
            border-radius: 30px !important; 
        }

        .hub-card { 
            aspect-ratio: 1.1 / 1;
            border-radius: 45px; 
            cursor: pointer; 
            transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        .hub-card:hover { transform: scale(1.05); }
        .hub-card:active { transform: scale(0.95); }
        .hub-card h3 {
            font-family: 'Comic Neue', cursive;
            font-weight: 900;
            text-transform: uppercase;
            font-size: 1.25rem;
            margin-top: 0.75rem;
            letter-spacing: 0.025em;
        }
        @media (min-width: 640px) {
            .hub-card h3 { font-size: 1.5rem; }
        }

        .section-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 1.5rem;
        }
        .section-icon {
            background: #E5E7EB;
            padding: 8px;
            border-radius: 14px;
            box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);
        }
        .section-title {
            font-family: 'Comic Neue', cursive;
            font-weight: 900;
            text-transform: uppercase;
            font-size: 1.75rem;
            letter-spacing: 0.05em;
            color: #6B46C1;
        }

        .daily-mission-card {
            border-radius: 50px;
            background: linear-gradient(to bottom, #7E57C2, #5E35B1);
            padding: 3rem 1.5rem;
            text-align: center;
            color: white;
            cursor: pointer;
            box-shadow: 0 10px 20px rgba(94, 53, 177, 0.3);
            transition: transform 0.2s;
        }
        .daily-mission-card:hover { transform: scale(1.02); }

        @keyframes pulse-ring { 0% { transform: scale(0.8); opacity: 0.5; } 100% { transform: scale(1.6); opacity: 0; } }
        .listening-ring { position: absolute; width: 110px; height: 110px; border-radius: 50%; border: 5px solid #ef4444; animation: pulse-ring 1.5s infinite; }

        .correct { background: #4CAF50 !important; color: white !important; border-color: #2E7D32 !important; box-shadow: 0 4px 0 #2E7D32 !important; }
        .wrong { background: #F44336 !important; color: white !important; border-color: #B71C1C !important; box-shadow: 0 4px 0 #B71C1C !important; }

        .glass-header { 
            background: linear-gradient(135deg, #673AB7 0%, #5E35B1 100%); 
            border-bottom: 4px solid #512DA8;
            border-radius: 0 0 30px 30px; 
            box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }

        .app-footer {
            background: rgba(255, 255, 255, 0.95);
            border-top: 4px solid #D1C4E9;
            box-shadow: 0 -4px 15px rgba(0,0,0,0.05);
        }
        .dark .app-footer {
            background: rgba(45, 52, 54, 0.95);
            border-top-color: #512DA8;
        }

        .spelling-input {
            width: 100%; border: 4px solid var(--border-color); border-radius: 20px; padding: 15px;
            font-family: 'Comic Neue', cursive; font-weight: 700; outline: none; background: #fdfdfd; text-align: center;
            color: #2D3436; 
        }
        .dark .spelling-input { background: #E1BEE7; color: #2D3436; }
    </style>
</head>
<body class="min-h-screen flex flex-col">

    <header class="glass-header sticky top-0 z-50 px-4 py-2.5 flex flex-col gap-1 text-white">
        <div class="flex justify-between items-center max-w-5xl mx-auto w-full">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center text-2xl animate-bounce border border-white/30">🍦</div>
                <div>
                    <h1 class="text-base sm:text-xl font-black font-['Comic_Neue'] tracking-tight leading-none uppercase">Merola's Lab</h1>
                    <p class="text-[8px] sm:text-[10px] uppercase font-bold text-yellow-300 leading-none mt-1 opacity-90">Grade 2 Discovery!</p>
                </div>
            </div>

            <div class="flex items-center gap-2 sm:gap-4">
                <div class="flex items-center bg-black/10 backdrop-blur rounded-full p-1 border border-white/20">
                    <button onclick="adjustFont(-2)" class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center font-black hover:bg-white/30 text-white text-[10px] sm:text-xs">A-</button>
                    <button onclick="adjustFont(2)" class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center font-black hover:bg-white/30 ml-1 text-white text-[10px] sm:text-xs">A+</button>
                </div>

                <button onclick="toggleTheme()" class="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-xl flex items-center justify-center text-sm sm:text-lg border border-white/20 hover:bg-white/20 transition-colors">
                    <span id="theme-icon">✨</span>
                </button>

                <div class="bg-yellow-400 text-purple-900 px-3 sm:px-5 py-1 sm:py-1.5 rounded-full font-black border-2 border-white shadow-[0_4px_0_#FBC02D]">
                    ⭐ <span id="score-val" class="text-sm sm:text-lg">0</span>
                </div>
                
                <button onclick="goHome()" class="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-xl flex items-center justify-center text-lg sm:text-xl border border-white/20 hover:bg-white/20 transition-colors">🏠</button>
            </div>
        </div>
        
        <div id="progress-container" class="hidden max-w-5xl mx-auto w-full mt-2">
            <div class="h-2.5 sm:h-3 bg-black/20 rounded-full overflow-hidden border border-white/10">
                <div id="progress-bar" class="h-full bg-gradient-to-r from-yellow-300 to-orange-400 transition-all duration-700 relative"></div>
            </div>
        </div>
    </header>

    <main class="flex-grow max-w-5xl mx-auto px-4 py-6 sm:py-10 w-full mb-20">
        <div id="main-view"></div>
    </main>

    <footer id="quiz-footer" class="hidden fixed bottom-0 left-0 right-0 py-3 px-4 sm:px-6 z-40 app-footer backdrop-blur-lg">
        <div class="max-w-xl mx-auto flex gap-4 sm:gap-6">
            <button onclick="handleBack()" class="flex-1 py-3 bg-white dark:bg-gray-800 border-b-4 border-gray-300 dark:border-gray-900 rounded-3xl font-black text-lg text-gray-600 dark:text-gray-300 active:translate-y-1 active:border-b-0 transition-all uppercase">Back</button>
            <button id="next-btn" onclick="nextPage()" class="flex-1 py-3 bg-[#673AB7] text-white border-b-4 border-[#4527A0] rounded-3xl font-black text-lg shadow-lg active:translate-y-1 active:border-b-0 transition-all uppercase">Next 🚀</button>
        </div>
    </footer>

    <div id="toast" class="fixed top-24 left-1/2 -translate-x-1/2 px-8 py-3 rounded-full text-white font-black shadow-2xl transition-all duration-300 opacity-0 pointer-events-none z-[60] text-lg sm:text-xl border-4 border-white"></div>

    <script>
        // Lesson Data embedded to fix import issues
        const lessonData = [
            { title: "Lesson 1: Antonyms", instr: "Choose the opposite word.", qs: [ { q: "Opposite of <u>hot</u>", opts: ["warm", "cold", "sunny", "burn"], c: 1 }, { q: "Opposite of <u>big</u>", opts: ["large", "huge", "small", "tall"], c: 2 }, { q: "Opposite of <u>happy</u>", opts: ["glad", "sad", "silly", "fun"], c: 1 }, { q: "Opposite of <u>fast</u>", opts: ["quick", "slow", "run", "race"], c: 1 } ] },
            { title: "Lesson 2: Synonyms", instr: "Choose the word with the same meaning.", qs: [ { q: "Synonym of <u>small</u>", opts: ["big", "tiny", "large", "huge"], c: 1 }, { q: "Synonym of <u>fast</u>", opts: ["slow", "quick", "lazy", "crawl"], c: 1 }, { q: "Synonym of <u>glad</u>", opts: ["sad", "mad", "happy", "grumpy"], c: 2 }, { q: "Synonym of <u>scared</u>", opts: ["brave", "afraid", "happy", "bold"], c: 1 } ] },
            { title: "Lesson 3: Homographs", instr: "One word, two meanings!", qs: [ { q: "I have a ___ of gum. / Help me ___ my bag.", opts: ["pack", "stick", "roll", "box"], c: 0 }, { q: "Turn on the ___ to cool down. / I am a big ___ of that team.", opts: ["air", "fan", "wind", "player"], c: 1 }, { q: "Look at your ___ to see the time. / I like to ___ movies.", opts: ["clock", "watch", "show", "screen"], c: 1 }, { q: "The bird has a sharp ___. / Please pay the ___.", opts: ["beak", "bill", "wing", "check"], c: 1 } ] },
            { title: "Lesson 4: Compound Words", instr: "Two words joined together.", qs: [ { q: "sun + flower =", opts: ["sunshine", "flowerpot", "sunflower", "garden"], c: 2 }, { q: "rain + bow =", opts: ["rainbow", "raincoat", "raindrop", "snowbow"], c: 0 }, { q: "butter + fly =", opts: ["buttercup", "butterfly", "flybutter", "dragonfly"], c: 1 }, { q: "back + pack =", opts: ["backpack", "package", "backside", "backyard"], c: 0 } ] },
            { title: "Lesson 5: Plural Nouns", instr: "More than one!", qs: [ { q: "One dog, many ___", opts: ["doges", "dogs", "dogging", "dogly"], c: 1 }, { q: "One cat, many ___", opts: ["cats", "cates", "catty", "catted"], c: 0 }, { q: "One box, many ___", opts: ["boxs", "boxes", "boxing", "boxly"], c: 1 }, { q: "One dish, many ___", opts: ["dishs", "dishes", "dished", "dishing"], c: 1 } ] },
            { title: "Lesson 6: Verbs", instr: "Find the action word.", qs: [ { q: "The boy ___ to school.", opts: ["apple", "runs", "happy", "green"], c: 1 }, { q: "I ___ a book every night.", opts: ["read", "blue", "pencil", "sleepy"], c: 0 }, { q: "We ___ in the pool.", opts: ["swim", "water", "wet", "fish"], c: 0 }, { q: "Birds ___ in the sky.", opts: ["fly", "cloud", "wings", "high"], c: 0 } ] },
            { title: "Lesson 7: Adjectives", instr: "Words that describe things.", qs: [ { q: "The ___ apple was yummy.", opts: ["run", "red", "eat", "fast"], c: 1 }, { q: "The puppy is very ___.", opts: ["jump", "cute", "bark", "tail"], c: 1 }, { q: "It was a ___ day.", opts: ["sun", "sunny", "sky", "blue"], c: 1 }, { q: "I have a ___ ball.", opts: ["round", "spin", "bounce", "play"], c: 0 } ] },
            { title: "Lesson 8: Proper Nouns", instr: "Special names for people and places.", qs: [ { q: "Which is a special name?", opts: ["boy", "girl", "Merola", "friend"], c: 2 }, { q: "Which is a special place?", opts: ["school", "Egypt", "park", "store"], c: 1 }, { q: "Which is a day of the week?", opts: ["today", "Monday", "morning", "night"], c: 1 }, { q: "Which is a month?", opts: ["winter", "July", "summer", "week"], c: 1 } ] },
            { title: "Lesson 9: Contractions", instr: "Shortening words.", qs: [ { q: "do + not =", opts: ["don't", "dont", "do'not", "doit"], c: 0 }, { q: "is + not =", opts: ["isnt", "isn't", "isnot", "is't"], c: 1 }, { q: "I + am =", opts: ["Iam", "I'm", "Im", "I'am"], c: 1 }, { q: "can + not =", opts: ["cant", "can't", "cannot", "can'tnot"], c: 1 } ] },
            { title: "Lesson 10: Rhyming Words", instr: "Words that sound the same at the end.", qs: [ { q: "What rhymes with <u>cat</u>?", opts: ["dog", "bat", "bird", "fish"], c: 1 }, { q: "What rhymes with <u>tree</u>?", opts: ["bee", "leaf", "green", "wood"], c: 0 }, { q: "What rhymes with <u>sun</u>?", opts: ["hot", "fun", "day", "star"], c: 1 }, { q: "What rhymes with <u>cake</u>?", opts: ["pie", "bake", "sweet", "eat"], c: 1 } ] },
            { title: "Lesson 11: Long Vowels (Silent e)", instr: "Choose the word with the long vowel sound.", qs: [ { q: "Which word has a long <u>a</u>?", opts: ["cap", "cake", "cat", "can"], c: 1 }, { q: "Which word has a long <u>i</u>?", opts: ["kite", "kit", "kid", "kick"], c: 0 }, { q: "Which word has a long <u>o</u>?", opts: ["hop", "hope", "hot", "hog"], c: 1 }, { q: "Which word has a long <u>u</u>?", opts: ["cub", "tube", "cup", "cut"], c: 1 }, { q: "Which word rhymes with <u>bike</u>?", opts: ["sick", "like", "lick", "back"], c: 1 }, { q: "I used a ___ to measure.", opts: ["rule", "ruler", "rope", "rate"], c: 1 }, { q: "The sun will ___.", opts: ["shin", "shine", "shook", "shot"], c: 1 }, { q: "I ate a ___ of pizza.", opts: ["slick", "slice", "slide", "slid"], c: 1 }, { q: "Open the ___.", opts: ["gat", "gate", "get", "got"], c: 1 }, { q: "The ___ is on the floor.", opts: ["rob", "robe", "rock", "rod"], c: 1 } ] },
            { title: "Lesson 12: Vowel Teams (ai, ay, ee, ea)", instr: "Choose the correctly spelled word.", qs: [ { q: "The ___ falls from the sky.", opts: ["rane", "rain", "rayn", "ran"], c: 1 }, { q: "I like to ___ at the beach.", opts: ["play", "plai", "plae", "pla"], c: 0 }, { q: "The ___ is green.", opts: ["lefe", "leaf", "leef", "laef"], c: 1 }, { q: "I can ___ with my eyes.", opts: ["se", "sea", "see", "si"], c: 2 }, { q: "Wait for the ___.", opts: ["trane", "train", "trayn", "tran"], c: 1 }, { q: "The dog wagged its ___.", opts: ["tale", "tail", "tayl", "tal"], c: 1 }, { q: "Eat your ___.", opts: ["mete", "meat", "meet", "maet"], c: 1 }, { q: "It is a sunny ___.", opts: ["da", "dai", "day", "de"], c: 2 }, { q: "The boat is in the ___.", opts: ["se", "sea", "see", "si"], c: 1 }, { q: "I like to ___ books.", opts: ["reed", "read", "rede", "raed"], c: 1 } ] },
            { title: "Lesson 13: Suffixes (-ful, -less)", instr: "Choose the word with the correct suffix.", qs: [ { q: "Full of help", opts: ["helpless", "helpful", "helping", "helper"], c: 1 }, { q: "Without hope", opts: ["hopeful", "hopeless", "hoping", "hoped"], c: 1 }, { q: "Full of color", opts: ["colorless", "colorful", "coloring", "colored"], c: 1 }, { q: "Without fear", opts: ["fearful", "fearless", "fearing", "feared"], c: 1 }, { q: "Full of joy", opts: ["joyless", "joyful", "joying", "joyed"], c: 1 }, { q: "Without a home", opts: ["homeless", "homeful", "homing", "homed"], c: 0 }, { q: "Full of care", opts: ["careless", "careful", "caring", "cared"], c: 1 }, { q: "Without use", opts: ["useful", "useless", "using", "used"], c: 1 }, { q: "Full of pain", opts: ["painless", "painful", "pained", "paining"], c: 1 }, { q: "Without sleep", opts: ["sleepy", "sleepless", "sleeping", "sleepful"], c: 1 } ] },
            { title: "Lesson 14: Prefixes (un-, re-)", instr: "Choose the word with the correct prefix.", qs: [ { q: "To do again", opts: ["undo", "redo", "doing", "done"], c: 1 }, { q: "Not happy", opts: ["rehappy", "unhappy", "happily", "happiness"], c: 1 }, { q: "To tie again", opts: ["untie", "retie", "tying", "tied"], c: 1 }, { q: "Not kind", opts: ["unkind", "rekind", "kindly", "kindness"], c: 0 }, { q: "To write again", opts: ["unwrite", "rewrite", "writing", "wrote"], c: 1 }, { q: "Not safe", opts: ["resafe", "unsafe", "safely", "safety"], c: 1 }, { q: "To play again", opts: ["unplay", "replay", "playing", "played"], c: 1 }, { q: "Not lucky", opts: ["relucky", "unlucky", "luckily", "luckier"], c: 1 }, { q: "To read again", opts: ["unread", "reread", "reading", "reads"], c: 1 }, { q: "Not fair", opts: ["refair", "unfair", "fairly", "fairer"], c: 1 } ] },
            { title: "Lesson 15: Irregular Plurals", instr: "Choose the correct plural form.", qs: [ { q: "One child, many ___", opts: ["childs", "children", "childes", "childrens"], c: 1 }, { q: "One tooth, many ___", opts: ["tooths", "teeth", "toothes", "teeths"], c: 1 }, { q: "One mouse, many ___", opts: ["mouses", "mice", "mices", "mouser"], c: 1 }, { q: "One foot, many ___", opts: ["foots", "feet", "feets", "footer"], c: 1 }, { q: "One person, many ___", opts: ["persons", "peoples", "people", "persones"], c: 2 }, { q: "One goose, many ___", opts: ["gooses", "geese", "geeses", "gooser"], c: 1 }, { q: "One man, many ___", opts: ["mans", "men", "mens", "manes"], c: 1 }, { q: "One woman, many ___", opts: ["womans", "women", "womens", "womanes"], c: 1 }, { q: "One fish, many ___", opts: ["fish", "fishes", "fishy", "fishs"], c: 0 }, { q: "One sheep, many ___", opts: ["sheeps", "sheep", "sheepes", "sheepy"], c: 1 } ] },
            { title: "Lesson 16: Irregular Past Tense", instr: "Choose the word that shows it already happened.", qs: [ { q: "Today I go. Yesterday I ___.", opts: ["goed", "went", "gone", "goes"], c: 1 }, { q: "Today I eat. Yesterday I ___.", opts: ["eated", "ate", "eaten", "eats"], c: 1 }, { q: "Today I run. Yesterday I ___.", opts: ["runned", "ran", "running", "runs"], c: 1 }, { q: "Today I see. Yesterday I ___.", opts: ["seed", "saw", "seen", "sees"], c: 1 }, { q: "Today I do. Yesterday I ___.", opts: ["did", "doed", "done", "does"], c: 0 }, { q: "Today I am. Yesterday I ___.", opts: ["was", "beed", "were", "is"], c: 0 }, { q: "Today I come. Yesterday I ___.", opts: ["comed", "came", "coming", "comes"], c: 1 }, { q: "Today I take. Yesterday I ___.", opts: ["taked", "took", "taken", "takes"], c: 1 }, { q: "Today I sing. Yesterday I ___.", opts: ["singed", "sang", "sung", "sings"], c: 1 }, { q: "Today I write. Yesterday I ___.", opts: ["writed", "wrote", "written", "writes"], c: 1 } ] },
            { title: "Lesson 17: Subject-Verb Agreement", instr: "Choose the correct verb for the sentence.", qs: [ { q: "The dog ___ loudly.", opts: ["bark", "barks", "barking", "barked"], c: 1 }, { q: "We ___ to the park.", opts: ["go", "goes", "going", "gone"], c: 0 }, { q: "She ___ her lunch.", opts: ["eat", "eats", "eating", "ate"], c: 1 }, { q: "They ___ in the pool.", opts: ["swim", "swims", "swimming", "swam"], c: 0 }, { q: "I ___ my homework.", opts: ["do", "does", "doing", "done"], c: 0 }, { q: "He ___ very fast.", opts: ["run", "runs", "running", "ran"], c: 1 }, { q: "The birds ___ in the tree.", opts: ["sing", "sings", "singing", "sang"], c: 0 }, { q: "My mom ___ cookies.", opts: ["bake", "bakes", "baking", "baked"], c: 1 }, { q: "Cats ___ milk.", opts: ["like", "likes", "liking", "liked"], c: 0 }, { q: "A teacher ___ the class.", opts: ["help", "helps", "helping", "helped"], c: 1 } ] },
            { title: "Lesson 18: Capitalization", instr: "Which word should have a capital letter?", qs: [ { q: "we went to the zoo.", opts: ["we", "went", "zoo", "the"], c: 0 }, { q: "my friend lives in florida.", opts: ["my", "friend", "lives", "florida"], c: 3 }, { q: "is your name sam?", opts: ["is", "your", "name", "sam"], c: 3 }, { q: "i love christmas.", opts: ["i", "love", "christmas", "both i and christmas"], c: 3 }, { q: "last monday was fun.", opts: ["last", "monday", "fun", "was"], c: 1 }, { q: "the month is april.", opts: ["the", "month", "april", "is"], c: 2 }, { q: "mister jones is nice.", opts: ["mister", "jones", "nice", "both mister and jones"], c: 3 }, { q: "i live on main street.", opts: ["i", "main", "street", "all of these"], c: 3 }, { q: "have you seen fluffy?", opts: ["have", "seen", "fluffy", "you"], c: 2 }, { q: "today is tuesday.", opts: ["today", "is", "tuesday", "both today and tuesday"], c: 3 } ] },
            { title: "Lesson 19: Punctuation (End Marks)", instr: "Choose the correct ending punctuation.", qs: [ { q: "Where are you going", opts: [".", "?", "!", ","], c: 1 }, { q: "I like ice cream", opts: [".", "?", "!", ","], c: 0 }, { q: "Watch out", opts: [".", "?", "!", ","], c: 2 }, { q: "Can I play", opts: [".", "?", "!", ","], c: 1 }, { q: "It is a sunny day", opts: [".", "?", "!", ","], c: 0 }, { q: "What is your name", opts: [".", "?", "!", ","], c: 1 }, { q: "That is amazing", opts: [".", "?", "!", ","], c: 2 }, { q: "Stop that", opts: [".", "?", "!", ","], c: 2 }, { q: "The cat is sleeping", opts: [".", "?", "!", ","], c: 0 }, { q: "How old are you", opts: [".", "?", "!", ","], c: 1 } ] },
            { title: "Lesson 20: Homophones", instr: "Choose the correct word for the sentence.", qs: [ { q: "I have ___ apples.", opts: ["to", "two", "too", "tow"], c: 1 }, { q: "The ___ is shining.", opts: ["son", "sun", "soon", "sin"], c: 1 }, { q: "I can ___ the ocean.", opts: ["see", "sea", "say", "set"], c: 0 }, { q: "The ___ is blue.", opts: ["see", "sea", "say", "set"], c: 1 }, { q: "I ___ a blue shirt.", opts: ["wear", "where", "were", "ware"], c: 0 }, { q: "___ is my bag?", opts: ["wear", "where", "were", "ware"], c: 1 }, { q: "I ___ a book.", opts: ["read", "red", "reed", "rid"], c: 0 }, { q: "My favorite color is ___.", opts: ["read", "red", "reed", "rid"], c: 1 }, { q: "I ___ the game.", opts: ["one", "won", "own", "on"], c: 1 }, { q: "I have ___ dog.", opts: ["one", "won", "own", "on"], c: 0 } ] },
            { title: "Lesson 21: Context Clues", instr: "Choose the meaning of the underlined word.", qs: [ { q: "The <u>gigantic</u> elephant was huge.", opts: ["small", "big", "fast", "scary"], c: 1 }, { q: "I was <u>exhausted</u> after the long race.", opts: ["happy", "tired", "sad", "fast"], c: 1 }, { q: "The pizza was <u>delicious</u> and tasted great.", opts: ["bad", "yummy", "cold", "hot"], c: 1 }, { q: "He was <u>furious</u> when he lost his toy.", opts: ["happy", "angry", "silly", "brave"], c: 1 }, { q: "The kitten was <u>tiny</u> and fit in my hand.", opts: ["big", "small", "loud", "fast"], c: 1 }, { q: "It was <u>chilly</u> outside so I wore a coat.", opts: ["hot", "cold", "sunny", "wet"], c: 1 }, { q: "The story was <u>hilarious</u> and we laughed.", opts: ["sad", "funny", "scary", "long"], c: 1 }, { q: "The <u>ancient</u> castle was very old.", opts: ["new", "old", "big", "blue"], c: 1 }, { q: "She was <u>joyful</u> on her birthday.", opts: ["sad", "happy", "mad", "tired"], c: 1 }, { q: "The water was <u>shallow</u> and not deep.", opts: ["deep", "not deep", "cold", "blue"], c: 1 } ] },
            { title: "Lesson 22: Commas in a Series", instr: "Choose the sentence with correct commas.", qs: [ { q: "I like apples bananas and grapes.", opts: ["I like apples, bananas, and grapes.", "I like apples bananas, and grapes.", "I like apples, bananas and grapes.", "No commas needed"], c: 0 }, { q: "She has a cat dog and bird.", opts: ["She has a cat, dog, and bird.", "She has a cat dog, and bird.", "She has a cat, dog and bird.", "No commas needed"], c: 0 }, { q: "We saw lions tigers and bears.", opts: ["We saw lions, tigers, and bears.", "We saw lions tigers, and bears.", "We saw lions, tigers and bears.", "No commas needed"], c: 0 }, { q: "Buy milk eggs and bread.", opts: ["Buy milk, eggs, and bread.", "Buy milk eggs, and bread.", "Buy milk, eggs and bread.", "No commas needed"], c: 0 }, { q: "He ran jumped and played.", opts: ["He ran, jumped, and played.", "He ran jumped, and played.", "He ran, jumped and played.", "No commas needed"], c: 0 }, { q: "I have a pen pencil and eraser.", opts: ["I have a pen, pencil, and eraser.", "I have a pen pencil, and eraser.", "I have a pen, pencil and eraser.", "No commas needed"], c: 0 }, { q: "They ate cake cookies and pie.", opts: ["They ate cake, cookies, and pie.", "They ate cake cookies, and pie.", "They ate cake, cookies and pie.", "No commas needed"], c: 0 }, { q: "Red blue and green are colors.", opts: ["Red, blue, and green are colors.", "Red blue, and green are colors.", "Red, blue and green are colors.", "No commas needed"], c: 0 }, { q: "Sit stay and roll over.", opts: ["Sit, stay, and roll over.", "Sit stay, and roll over.", "Sit, stay and roll over.", "No commas needed"], c: 0 }, { q: "One two and three.", opts: ["One, two, and three.", "One two, and three.", "One, two and three.", "No commas needed"], c: 0 } ] },
            { title: "Lesson 23: Prepositions", instr: "Choose the word that shows where something is.", qs: [ { q: "The cat is ___ the table.", opts: ["under", "run", "happy", "blue"], c: 0 }, { q: "The bird is ___ the nest.", opts: ["in", "fly", "green", "sing"], c: 0 }, { q: "The ball is ___ the box.", opts: ["on", "jump", "red", "fast"], c: 0 }, { q: "The sun is ___ the clouds.", opts: ["behind", "yellow", "hot", "big"], c: 0 }, { q: "The dog is ___ the house.", opts: ["inside", "bark", "tail", "cute"], c: 0 }, { q: "The book is ___ the shelf.", opts: ["on", "read", "page", "story"], c: 0 }, { q: "The car is ___ the garage.", opts: ["in", "drive", "fast", "road"], c: 0 }, { q: "The flowers are ___ the vase.", opts: ["in", "pretty", "grow", "smell"], c: 0 }, { q: "The plane is ___ the trees.", opts: ["above", "fly", "wing", "sky"], c: 0 }, { q: "The chair is ___ the desk.", opts: ["near", "sit", "wood", "legs"], c: 0 } ] },
            { title: "Lesson 24: Conjunctions (and, but, or)", instr: "Choose the best word to join the sentences.", qs: [ { q: "I like milk ___ cookies.", opts: ["and", "but", "or", "so"], c: 0 }, { q: "I want to go, ___ it is raining.", opts: ["and", "but", "or", "so"], c: 1 }, { q: "Do you want tea ___ juice?", opts: ["and", "but", "or", "so"], c: 2 }, { q: "He is tall ___ strong.", opts: ["and", "but", "or", "so"], c: 0 }, { q: "I tried, ___ I failed.", opts: ["and", "but", "or", "so"], c: 1 }, { q: "Is it a boy ___ a girl?", opts: ["and", "but", "or", "so"], c: 2 }, { q: "She ran fast, ___ she missed the bus.", opts: ["and", "but", "or", "so"], c: 1 }, { q: "I have a brother ___ a sister.", opts: ["and", "but", "or", "so"], c: 0 }, { q: "Wear a coat, ___ you will be cold.", opts: ["and", "but", "or", "so"], c: 2 }, { q: "It was late, ___ I was not tired.", opts: ["and", "but", "or", "so"], c: 1 } ] },
            { title: "Lesson 25: ABC Order", instr: "Which word comes first in ABC order?", qs: [ { q: "apple, banana, cat", opts: ["apple", "banana", "cat", "none"], c: 0 }, { q: "dog, bear, zebra", opts: ["dog", "bear", "zebra", "none"], c: 1 }, { q: "sun, moon, star", opts: ["sun", "moon", "star", "none"], c: 1 }, { q: "fish, goat, elephant", opts: ["fish", "goat", "elephant", "none"], c: 2 }, { q: "kite, jump, lion", opts: ["kite", "jump", "lion", "none"], c: 1 }, { q: "queen, pig, rabbit", opts: ["queen", "pig", "rabbit", "none"], c: 1 }, { q: "van, wagon, umbrella", opts: ["van", "wagon", "umbrella", "none"], c: 2 }, { q: "house, ice, garden", opts: ["house", "ice", "garden", "none"], c: 2 }, { q: "nest, orange, map", opts: ["nest", "orange", "map", "none"], c: 2 }, { q: "yarn, x-ray, zoo", opts: ["yarn", "x-ray", "zoo", "none"], c: 1 } ] },
            { title: "Lesson 26: Pronouns", instr: "Choose the word that replaces the noun.", qs: [ { q: "<u>The boy</u> is happy.", opts: ["He", "She", "It", "They"], c: 0 }, { q: "<u>The girl</u> is smart.", opts: ["He", "She", "It", "They"], c: 1 }, { q: "<u>The dog</u> is brown.", opts: ["He", "She", "It", "They"], c: 2 }, { q: "<u>Mom and Dad</u> are home.", opts: ["He", "She", "It", "They"], c: 3 }, { q: "<u>The books</u> are on the shelf.", opts: ["He", "She", "It", "They"], c: 3 }, { q: "<u>Sam and I</u> are friends.", opts: ["We", "They", "Us", "Me"], c: 0 }, { q: "Give the ball to <u>the boy</u>.", opts: ["him", "her", "it", "them"], c: 0 }, { q: "Give the ball to <u>the girl</u>.", opts: ["him", "her", "it", "them"], c: 1 }, { q: "Look at <u>the cat</u>.", opts: ["him", "her", "it", "them"], c: 2 }, { q: "I like <u>the cookies</u>.", opts: ["him", "her", "it", "them"], c: 3 } ] },
            { title: "Lesson 27: Possessive Nouns", instr: "Choose the word that shows ownership.", qs: [ { q: "The toy of the boy", opts: ["boys toy", "boy's toy", "boys' toy", "boy toy"], c: 1 }, { q: "The bone of the dog", opts: ["dogs bone", "dog's bone", "dogs' bone", "dog bone"], c: 1 }, { q: "The dress of the girl", opts: ["girls dress", "girl's dress", "girls' dress", "girl dress"], c: 1 }, { q: "The car of my dad", opts: ["dads car", "dad's car", "dads' car", "dad car"], c: 1 }, { q: "The house of the bird", opts: ["birds house", "bird's house", "birds' house", "bird house"], c: 1 }, { q: "The tail of the cat", opts: ["cats tail", "cat's tail", "cats' tail", "cat tail"], c: 1 }, { q: "The room of the teacher", opts: ["teachers room", "teacher's room", "teachers' room", "teacher room"], c: 1 }, { q: "The book of the student", opts: ["students book", "student's book", "students' book", "student book"], c: 1 }, { q: "The milk of the kitten", opts: ["kittens milk", "kitten's milk", "kittens' milk", "kitten milk"], c: 1 }, { q: "The computer of the man", opts: ["mans computer", "man's computer", "mans' computer", "man computer"], c: 1 } ] },
            { title: "Lesson 28: Abbreviations", instr: "Choose the correct short form.", qs: [ { q: "Doctor", opts: ["Dr.", "Doc.", "Dtr.", "Dr"], c: 0 }, { q: "Mister", opts: ["Mr.", "Ms.", "Mrs.", "Mr"], c: 0 }, { q: "Mistress (Married woman)", opts: ["Mr.", "Ms.", "Mrs.", "Mrs"], c: 2 }, { q: "Street", opts: ["St.", "Str.", "Strt.", "St"], c: 0 }, { q: "Road", opts: ["Rd.", "Ro.", "Rad.", "Rd"], c: 0 }, { q: "Monday", opts: ["Mon.", "Mnd.", "M.", "Mon"], c: 0 }, { q: "January", opts: ["Jan.", "Jny.", "J.", "Jan"], c: 0 }, { q: "Avenue", opts: ["Ave.", "Av.", "Avn.", "Ave"], c: 0 }, { q: "Saturday", opts: ["Sat.", "Std.", "S.", "Sat"], c: 0 }, { q: "October", opts: ["Oct.", "Ocb.", "O.", "Oct"], c: 0 } ] },
            { title: "Lesson 29: Adverbs (-ly)", instr: "Choose the word that describes how an action is done.", qs: [ { q: "She sang ___.", opts: ["beautiful", "beautifully", "beauty", "beauties"], c: 1 }, { q: "He ran ___.", opts: ["quick", "quickly", "quicker", "quickest"], c: 1 }, { q: "The cat walked ___.", opts: ["soft", "softly", "softer", "softest"], c: 1 }, { q: "I talked ___.", opts: ["quiet", "quietly", "quieter", "quietest"], c: 1 }, { q: "The sun shone ___.", opts: ["bright", "brightly", "brighter", "brightest"], c: 1 }, { q: "He spoke ___.", opts: ["loud", "loudly", "louder", "loudest"], c: 1 }, { q: "She smiled ___.", opts: ["happy", "happily", "happier", "happiest"], c: 1 }, { q: "I wrote ___.", opts: ["careful", "carefully", "carefully", "carefuler"], c: 1 }, { q: "The turtle moved ___.", opts: ["slow", "slowly", "slower", "slowest"], c: 1 }, { q: "He answered ___.", opts: ["correct", "correctly", "correcter", "correctest"], c: 1 } ] },
            { title: "Lesson 30: Fact vs. Opinion", instr: "Is the sentence a fact or an opinion?", qs: [ { q: "Dogs have four legs.", opts: ["Fact", "Opinion", "Neither", "Both"], c: 0 }, { q: "Dogs are the best pets.", opts: ["Fact", "Opinion", "Neither", "Both"], c: 1 }, { q: "The sun is hot.", opts: ["Fact", "Opinion", "Neither", "Both"], c: 0 }, { q: "Summer is the best season.", opts: ["Fact", "Opinion", "Neither", "Both"], c: 1 }, { q: "Apples are a fruit.", opts: ["Fact", "Opinion", "Neither", "Both"], c: 0 }, { q: "Apples taste better than oranges.", opts: ["Fact", "Opinion", "Neither", "Both"], c: 1 }, { q: "Ice cream is cold.", opts: ["Fact", "Opinion", "Neither", "Both"], c: 0 }, { q: "Chocolate is the yummiest flavor.", opts: ["Fact", "Opinion", "Neither", "Both"], c: 1 }, { q: "Birds can fly.", opts: ["Fact", "Opinion", "Neither", "Both"], c: 0 }, { q: "Watching movies is fun.", opts: ["Fact", "Opinion", "Neither", "Both"], c: 1 } ] },
            { title: "Lesson 31: Subject and Predicate", instr: "Identify the subject (who/what) or predicate (action).", qs: [ { q: "In 'The dog barked', what is the subject?", opts: ["The dog", "barked", "The", "dog barked"], c: 0 }, { q: "In 'The dog barked', what is the predicate?", opts: ["The dog", "barked", "The", "dog barked"], c: 1 }, { q: "In 'She runs fast', what is the subject?", opts: ["She", "runs fast", "fast", "runs"], c: 0 }, { q: "In 'She runs fast', what is the predicate?", opts: ["She", "runs fast", "fast", "runs"], c: 1 }, { q: "In 'My mom cooks dinner', what is the subject?", opts: ["My mom", "cooks dinner", "dinner", "cooks"], c: 0 }, { q: "In 'My mom cooks dinner', what is the predicate?", opts: ["My mom", "cooks dinner", "dinner", "cooks"], c: 1 }, { q: "In 'Birds fly in the sky', what is the subject?", opts: ["Birds", "fly in the sky", "sky", "fly"], c: 0 }, { q: "In 'Birds fly in the sky', what is the predicate?", opts: ["Birds", "fly in the sky", "sky", "fly"], c: 1 }, { q: "In 'The blue car stopped', what is the subject?", opts: ["The blue car", "stopped", "car", "The blue"], c: 0 }, { q: "In 'The blue car stopped', what is the predicate?", opts: ["The blue car", "stopped", "car", "The blue"], c: 1 } ] },
            { title: "Lesson 32: Reflexive Pronouns", instr: "Choose the correct reflexive pronoun.", qs: [ { q: "I did it by ___.", opts: ["myself", "himself", "herself", "itself"], c: 0 }, { q: "He did it by ___.", opts: ["myself", "himself", "herself", "itself"], c: 1 }, { q: "She did it by ___.", opts: ["myself", "himself", "herself", "itself"], c: 2 }, { q: "The cat cleaned ___.", opts: ["myself", "himself", "herself", "itself"], c: 3 }, { q: "We did it by ___.", opts: ["ourselves", "themselves", "yourselves", "ourself"], c: 0 }, { q: "They did it by ___.", opts: ["ourselves", "themselves", "yourselves", "theirself"], c: 1 }, { q: "You did it by ___ (one person).", opts: ["yourself", "yourselves", "myself", "himself"], c: 0 }, { q: "You did it by ___ (many people).", opts: ["yourself", "yourselves", "myself", "himself"], c: 1 }, { q: "I can wash ___.", opts: ["myself", "ourselves", "himself", "herself"], c: 0 }, { q: "The bird built the nest ___.", opts: ["itself", "himself", "herself", "myself"], c: 0 } ] },
            { title: "Lesson 33: Multiple Meaning Words", instr: "Choose the correct word for the context.", qs: [ { q: "The ___ of a tree. / A dog's ___.", opts: ["bark", "leaf", "root", "branch"], c: 0 }, { q: "A ___ of cards. / To ___ a suitcase.", opts: ["deck", "pack", "suit", "stack"], c: 1 }, { q: "A ___ of water. / To ___ the ball.", opts: ["drop", "splash", "wave", "sink"], c: 2 }, { q: "The ___ flies at night. / A baseball ___.", opts: ["ball", "bat", "bird", "glove"], c: 1 }, { q: "A ___ of bread. / To ___ around.", opts: ["roll", "slice", "loaf", "piece"], c: 0 }, { q: "A ___ of shoes. / To ___ fruit.", opts: ["set", "pair", "box", "pear"], c: 1 }, { q: "A ___ shows the way. / A ___ is for drawing circles.", opts: ["map", "compass", "ruler", "sign"], c: 1 }, { q: "A ___ in the ground. / A ___ in your shirt.", opts: ["gap", "hole", "pit", "rip"], c: 1 }, { q: "The ___ of a mountain. / A ___ of a bird.", opts: ["peak", "beak", "top", "side"], c: 0 }, { q: "A ___ on your finger. / To ___ a bell.", opts: ["ring", "band", "gold", "call"], c: 0 } ] },
            { title: "Lesson 34: Shades of Meaning", instr: "Choose the strongest word.", qs: [ { q: "Which word means very happy?", opts: ["glad", "happy", "thrilled", "nice"], c: 2 }, { q: "Which word means very big?", opts: ["big", "large", "huge", "great"], c: 2 }, { q: "Which word means very hot?", opts: ["warm", "hot", "scorching", "sunny"], c: 2 }, { q: "Which word means very small?", opts: ["small", "tiny", "microscopic", "little"], c: 2 }, { q: "Which word means very angry?", opts: ["mad", "angry", "furious", "upset"], c: 2 }, { q: "Which word means very cold?", opts: ["cool", "cold", "freezing", "chilly"], c: 2 }, { q: "Which word means very fast?", opts: ["quick", "fast", "speedy", "rapid"], c: 3 }, { q: "Which word means very loud?", opts: ["noisy", "loud", "deafening", "strong"], c: 2 }, { q: "Which word means very pretty?", opts: ["nice", "pretty", "beautiful", "good"], c: 2 }, { q: "Which word means very smart?", opts: ["smart", "wise", "brilliant", "okay"], c: 2 } ] },
            { title: "Lesson 35: Root Words", instr: "Find the root word of the underlined word.", qs: [ { q: "The kitten was <u>playing</u>.", opts: ["play", "playing", "player", "played"], c: 0 }, { q: "She <u>jumped</u> over the log.", opts: ["jump", "jumped", "jumping", "jumper"], c: 0 }, { q: "He is the <u>fastest</u> runner.", opts: ["fast", "fastest", "faster", "fastly"], c: 0 }, { q: "The flower is <u>unopened</u>.", opts: ["open", "opened", "unopen", "opening"], c: 0 }, { q: "I am <u>rereading</u> the book.", opts: ["read", "reading", "reread", "reads"], c: 0 }, { q: "The room was <u>colorless</u>.", opts: ["color", "colorless", "colorful", "colors"], c: 0 }, { q: "She is a <u>helpful</u> person.", opts: ["help", "helpful", "helping", "helped"], c: 0 }, { q: "The dog <u>barked</u> at the cat.", opts: ["bark", "barked", "barking", "barks"], c: 0 }, { q: "He <u>walks</u> to school.", opts: ["walk", "walks", "walking", "walked"], c: 0 }, { q: "I am <u>thankful</u>.", opts: ["thank", "thankful", "thanks", "thanking"], c: 0 } ] },
            { title: "Lesson 36: Categorizing Words", instr: "Which word does NOT belong?", qs: [ { q: "Apple, Banana, Carrot, Orange", opts: ["Apple", "Banana", "Carrot", "Orange"], c: 2 }, { q: "Dog, Cat, Bird, Table", opts: ["Dog", "Cat", "Bird", "Table"], c: 3 }, { q: "Red, Blue, Green, Square", opts: ["Red", "Blue", "Green", "Square"], c: 3 }, { q: "Car, Bus, Train, Tree", opts: ["Car", "Bus", "Train", "Tree"], c: 3 }, { q: "Monday, Tuesday, Friday, April", opts: ["Monday", "Tuesday", "Friday", "April"], c: 3 }, { q: "Run, Jump, Skip, Happy", opts: ["Run", "Jump", "Skip", "Happy"], c: 3 }, { q: "Pencil, Pen, Eraser, Chair", opts: ["Pencil", "Pen", "Eraser", "Chair"], c: 3 }, { q: "Milk, Juice, Water, Bread", opts: ["Milk", "Juice", "Water", "Bread"], c: 3 }, { q: "One, Two, Three, Big", opts: ["One", "Two", "Three", "Big"], c: 3 }, { q: "North, South, East, Up", opts: ["North", "South", "East", "Up"], c: 3 } ] },
            { title: "Lesson 37: Alphabetizing to the Second Letter", instr: "Which word comes first in ABC order?", qs: [ { q: "Apple, Ant, Axe", opts: ["Ant", "Apple", "Axe", "none"], c: 0 }, { q: "Ball, Bee, Box", opts: ["Ball", "Bee", "Box", "none"], c: 0 }, { q: "Cat, Cup, Cow", opts: ["Cat", "Cow", "Cup", "none"], c: 0 }, { q: "Dog, Dig, Duck", opts: ["Dig", "Dog", "Duck", "none"], c: 0 }, { q: "Fish, Fan, Fox", opts: ["Fan", "Fish", "Fox", "none"], c: 0 }, { q: "Goat, Gum, Get", opts: ["Goat", "Get", "Gum", "none"], c: 1 }, { q: "Hat, Hit, Hot", opts: ["Hat", "Hit", "Hot", "none"], c: 0 }, { q: "Jump, Jet, Job", opts: ["Jet", "Job", "Jump", "none"], c: 0 }, { q: "Kite, Key, Kid", opts: ["Key", "Kid", "Kite", "none"], c: 0 }, { q: "Lamp, Lip, Leg", opts: ["Lamp", "Leg", "Lip", "none"], c: 0 } ] },
            { title: "Lesson 38: Collective Nouns", instr: "Choose the correct group name.", qs: [ { q: "A group of birds is a ___.", opts: ["flock", "herd", "pack", "team"], c: 0 }, { q: "A group of cows is a ___.", opts: ["flock", "herd", "pack", "team"], c: 1 }, { q: "A group of wolves is a ___.", opts: ["flock", "herd", "pack", "team"], c: 2 }, { q: "A group of players is a ___.", opts: ["flock", "herd", "pack", "team"], c: 3 }, { q: "A group of bees is a ___.", opts: ["swarm", "herd", "pack", "school"], c: 0 }, { q: "A group of fish is a ___.", opts: ["swarm", "herd", "pack", "school"], c: 3 }, { q: "A group of lions is a ___.", opts: ["pride", "herd", "pack", "flock"], c: 0 }, { q: "A group of ants is a ___.", opts: ["colony", "herd", "pack", "flock"], c: 0 }, { q: "A group of kittens is a ___.", opts: ["litter", "herd", "pack", "flock"], c: 0 }, { q: "A group of people is a ___.", opts: ["crowd", "herd", "pack", "flock"], c: 0 } ] },
            { title: "Lesson 39: Irregular Comparative Adjectives", instr: "Choose the correct word.", qs: [ { q: "Good, Better, ___", opts: ["Best", "Goodest", "Betterest", "Bester"], c: 0 }, { q: "Bad, Worse, ___", opts: ["Worst", "Baddest", "Worser", "Worsest"], c: 0 }, { q: "Little, Less, ___", opts: ["Least", "Littlest", "Lesser", "Lessest"], c: 0 }, { q: "Many, More, ___", opts: ["Most", "Manier", "Maniest", "Morest"], c: 0 }, { q: "This cake is good, but that one is ___.", opts: ["better", "gooder", "best", "goodest"], c: 0 }, { q: "This is the ___ day ever!", opts: ["best", "better", "goodest", "gooder"], c: 0 }, { q: "I feel bad, but he feels ___.", opts: ["worse", "badder", "worst", "baddest"], c: 0 }, { q: "That was the ___ movie.", opts: ["worst", "worse", "badder", "baddest"], c: 0 }, { q: "I have little milk, but she has ___.", opts: ["less", "littler", "least", "littlest"], c: 0 }, { q: "He has the ___ money.", opts: ["least", "less", "littler", "littlest"], c: 0 } ] },
            { title: "Lesson 40: Review Mix", instr: "Test your skills!", qs: [ { q: "Opposite of <u>loud</u>", opts: ["noisy", "quiet", "fast", "big"], c: 1 }, { q: "Synonym of <u>mad</u>", opts: ["happy", "sad", "angry", "glad"], c: 2 }, { q: "The plural of 'leaf' is ___.", opts: ["leafs", "leaves", "leafes", "leafy"], c: 1 }, { q: "Past tense of 'eat' is ___.", opts: ["eated", "ate", "eating", "eats"], c: 1 }, { q: "A compound word: rain + coat =", opts: ["rainbow", "rainy", "raincoat", "raining"], c: 2 }, { q: "Which is a proper noun?", opts: ["school", "Monday", "park", "store"], c: 1 }, { q: "Contraction for 'cannot' is ___.", opts: ["cant", "can't", "cannot", "ca'nt"], c: 1 }, { q: "What rhymes with 'moon'?", opts: ["sun", "spoon", "star", "night"], c: 1 }, { q: "A ___ of fish.", opts: ["flock", "herd", "school", "pack"], c: 2 }, { q: "I did it by ___.", opts: ["myself", "himself", "herself", "itself"], c: 0 } ] }
        ];

        let currentView = 'home', activeData = [], currentPage = 0, userAnswers = {};
        let fontSize = 22, globalScore = 0, isDarkMode = false, isListening = false;
        let micUsedOnThisPage = false, recognition = null, currentActivityType = '';

        function adjustFont(val) {
            fontSize = Math.max(16, Math.min(42, fontSize + val));
            document.documentElement.style.setProperty('--user-font-size', fontSize + 'px');
        }

        function toggleTheme() {
            isDarkMode = !isDarkMode;
            document.body.classList.toggle('dark', isDarkMode);
            document.getElementById('theme-icon').innerText = isDarkMode ? '🌙' : '✨';
        }

        function shuffle(array) {
            return array.sort(() => Math.random() - 0.5);
        }

        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            recognition = new SpeechRecognition();
            recognition.continuous = false;
            recognition.lang = 'en-US';
            recognition.onstart = () => { isListening = true; render(); };
            recognition.onend = () => { isListening = false; render(); };
            recognition.onresult = (e) => checkReading(e.results[0][0].transcript);
        }

        function goHome() {
            currentView = 'home';
            document.getElementById('quiz-footer').classList.add('hidden');
            document.getElementById('progress-container').classList.add('hidden');
            render();
            window.scrollTo(0, 0);
        }

        function flattenData(source) {
            let flat = [];
            source.forEach(page => {
                page.qs.forEach(q => {
                    flat.push({ title: page.title, instr: page.instr, passage: page.passage || null, qs: [q] });
                });
            });
            return flat;
        }

        function startSection(type) {
            currentActivityType = type;
            micUsedOnThisPage = false;
            
            let dataToShuffle = [];

            if (type === 'writing') {
                const wordsSource = (typeof spellingWords !== 'undefined') ? spellingWords : ["apple", "school"];
                dataToShuffle = shuffle([...wordsSource]).map((w) => ({ title: `Spelling Word`, instr: "Listen carefully and type the word!", qs: [{ target: w, isWriting: true }] }));
            } else if (type === 'reading') {
                const sentsSource = (typeof readingSentences !== 'undefined') ? readingSentences : ["Reading is fun."];
                dataToShuffle = shuffle([...sentsSource]).map((s) => ({ title: `Reading Mastery`, instr: "Try to speak first, then you can listen!", qs: [{ q: s, original: s, isReading: true }] }));
            } else {
                switch(type) {
                    case 'lesson': dataToShuffle = flattenData(lessonData); break;
                    case 'stories': dataToShuffle = flattenData(typeof storiesData !== 'undefined' ? storiesData : []); break;
                    case 'wordparts': dataToShuffle = flattenData(typeof wordPartsData !== 'undefined' ? wordPartsData : []); break;
                    case 'coin': dataToShuffle = flattenData([{ qs: typeof initialCoinData !== 'undefined' ? initialCoinData : [], title: "Coin Lab", instr: "Count the coins!" }]); break;
                    case 'time': dataToShuffle = flattenData([{ qs: typeof generateTimeData === 'function' ? generateTimeData() : [], title: "Time Lab", instr: "Read the clock!" }]); break;
                    case 'math': dataToShuffle = flattenData([{ qs: typeof generateMathData === 'function' ? generateMathData() : [], title: "Math Lab", instr: "Solve the problem!" }]); break;
                    case 'shapes': dataToShuffle = flattenData([{ qs: typeof generateShapesData === 'function' ? generateShapesData() : [], title: "Shapes Lab", instr: "Identify the shape!" }]); break;
                    case 'grammar': dataToShuffle = flattenData([{ qs: typeof generateGrammarData === 'function' ? generateGrammarData() : [], title: "Grammar Lab", instr: "Noun or Verb?" }]); break;
                }
            }
            
            activeData = shuffle([...dataToShuffle]);
            
            if (type === 'writing' && activeData.length > 30) {
                activeData = activeData.slice(0, 30);
            }

            currentPage = 0; userAnswers = {}; currentView = 'quiz';
            render();
            window.scrollTo(0, 0);
        }

        function toggleMic() {
            if (!recognition) return;
            micUsedOnThisPage = true; 
            if (isListening) recognition.stop(); else recognition.start();
        }

        function speak(text) {
            window.speechSynthesis.cancel();
            const msg = new SpeechSynthesisUtterance(text);
            msg.rate = 0.8;
            window.speechSynthesis.speak(msg);
        }

        function checkReading(heard) {
            const target = activeData[currentPage].qs[0].original.toLowerCase().replace(/[.,!?;:]/g, "");
            const words = heard.toLowerCase().split(" ");
            let match = 0;
            target.split(" ").forEach(w => { if(words.includes(w)) match++; });
            if (match / target.split(" ").length >= 0.6) handleAnswer(0, 0, true);
            else showToast("Try again! 🎤", "#F44336");
        }

        function checkSpelling(qIdx) {
            const input = document.getElementById(`spell-input-${qIdx}`);
            const target = activeData[currentPage].qs[qIdx].target;
            if (input.value.trim().toLowerCase() === target.toLowerCase()) handleAnswer(qIdx, 0, true);
            else { showToast("Check the spelling!", "#F44336"); input.animate([{transform: 'translateX(0)'}, {transform: 'translateX(10px)'}, {transform: 'translateX(-10px)'}, {transform: 'translateX(0)'}], {duration: 200}); }
        }

        function handleAnswer(qIdx, oIdx, isCorrect = null) {
            const key = `${currentPage}-${qIdx}`;
            if (userAnswers[key] !== undefined) return;
            const q = activeData[currentPage].qs[qIdx];
            const finalCorrect = isCorrect !== null ? isCorrect : (oIdx === q.c);
            userAnswers[key] = oIdx;
            if (finalCorrect) { globalScore++; showToast("BINGO! ⭐", "#4CAF50"); } else { showToast("OOPS! 🍌", "#F44336"); }
            render();
        }

        function showToast(msg, color) {
            const t = document.getElementById('toast'); t.innerText = msg; t.style.backgroundColor = color; t.style.opacity = "1";
            setTimeout(() => t.style.opacity = "0", 1500);
        }

        function renderHubItem(type, label, icon, bgClass, labelColor) {
            return `<div onclick="startSection('${type}')" class="hub-card ${bgClass} text-white">
                <div class="text-5xl sm:text-6xl drop-shadow-sm">${icon}</div>
                <h3 class="${labelColor || 'text-white'}">${label}</h3>
            </div>`;
        }

        function render() {
            const main = document.getElementById('main-view');
            document.getElementById('score-val').innerText = globalScore;

            if (currentView === 'home') {
                main.innerHTML = `<div class="space-y-16 max-w-4xl mx-auto">
                    <section>
                        <div class="section-header">
                            <div class="section-icon">📕</div>
                            <h2 class="section-title">Magic English</h2>
                        </div>
                        <div class="grid grid-cols-2 gap-6 sm:gap-8">
                            ${renderHubItem('reading', 'Reading', '🎙️', 'bg-[#D63384]')}
                            ${renderHubItem('writing', 'Spelling', '✏️', 'bg-[#F9BC4D]')}
                            ${renderHubItem('stories', 'Stories', '📖', 'bg-[#3CC19C]')}
                            ${renderHubItem('wordparts', 'Word Lab', '🧩', 'bg-[#5B71EB]')}
                            ${renderHubItem('grammar', 'Grammar', '🖍️', 'bg-[#A6D934]')}
                        </div>
                    </section>
                    
                    <section>
                        <div class="section-header">
                            <div class="section-icon">🎯</div>
                            <h2 class="section-title">Daily Mission</h2>
                        </div>
                        <div onclick="startSection('lesson')" class="daily-mission-card">
                            <div class="text-7xl mb-6 drop-shadow-lg">🎓</div>
                            <h3 class="font-['Comic_Neue'] font-black text-3xl uppercase tracking-widest">Lesson Mastery</h3>
                        </div>
                    </section>

                    <section>
                        <div class="section-header">
                            <div class="section-icon">🔢</div>
                            <h2 class="section-title" style="color: #E28C2B;">Math Quests</h2>
                        </div>
                        <div class="grid grid-cols-2 gap-6 sm:gap-8">
                            ${renderHubItem('math', 'Math Lab', '➕', 'bg-[#4396E8]')}
                            ${renderHubItem('time', 'Time Lab', '⏰', 'bg-[#EFD13B]')}
                            ${renderHubItem('coin', 'Coin Lab', '💰', 'bg-[#48B365]')}
                            ${renderHubItem('shapes', 'Shapes', '📐', 'bg-[#C1369B]')}
                        </div>
                    </section>
                </div>`;
            } else if (currentView === 'quiz') {
                document.getElementById('quiz-footer').classList.remove('hidden');
                document.getElementById('progress-container').classList.remove('hidden');
                const data = activeData[currentPage], progress = ((currentPage + 1) / activeData.length) * 100;
                document.getElementById('progress-bar').style.width = progress + "%";

                const nextBtn = document.getElementById('next-btn');
                if (nextBtn) {
                    const isPageAnswered = data.qs.every((_, qIdx) => userAnswers[`${currentPage}-${qIdx}`] !== undefined);
                    nextBtn.disabled = !isPageAnswered;
                    if (!isPageAnswered) {
                        nextBtn.classList.add('opacity-40', 'pointer-events-none', 'grayscale-[0.4]');
                    } else {
                        nextBtn.classList.remove('opacity-40', 'pointer-events-none', 'grayscale-[0.4]');
                    }
                }

                if (currentActivityType === 'reading') {
                    const q = data.qs[0], answered = userAnswers[`${currentPage}-0`] !== undefined, canListen = micUsedOnThisPage || answered;
                    main.innerHTML = `<div class="text-center max-w-2xl mx-auto"><h2 class="text-2xl sm:text-3xl font-black mb-4 text-purple-600 uppercase font-['Comic_Neue'] tracking-tight">${data.title}</h2><div class="instr-text mb-6">💡 ${data.instr}</div>
                        <div class="card p-6 sm:p-14 mb-8 flex flex-col items-center border-dashed"><div class="q-text mb-12 text-gray-800 leading-tight">"${q.q}"</div>
                            <div class="flex flex-col items-center gap-10">
                                <div class="relative flex items-center justify-center">${isListening ? '<div class="listening-ring"></div>' : ''}
                                    <button onclick="toggleMic()" class="w-24 h-24 sm:w-32 sm:h-32 rounded-full ${isListening ? 'bg-red-500 shadow-[0_0_30px_#ef4444]' : 'bg-purple-600 shadow-xl'} text-white flex items-center justify-center text-4xl sm:text-6xl z-10 transition-all ${answered ? 'opacity-30 pointer-events-none' : 'hover:scale-110'}">${isListening ? '🛑' : '🎤'}</button>
                                </div>
                                <button onclick="speak('${q.original}')" ${!canListen ? 'disabled' : ''} class="px-10 py-4 sm:px-14 sm:py-5 bg-blue-500 text-white rounded-3xl font-black text-xl sm:text-2xl shadow-xl transition-all ${!canListen ? 'opacity-30 grayscale pointer-events-none' : 'hover:bg-blue-600 active:translate-y-1'}">🔊 Listen</button>
                                ${answered ? '<div class="text-6xl sm:text-8xl animate-bounce">✅⭐</div>' : ''}
                            </div>
                        </div></div>`;
                } else if (currentActivityType === 'writing') {
                    let qsHtml = data.qs.map((q, qIdx) => {
                        const answered = userAnswers[`${currentPage}-${qIdx}`] !== undefined;
                        return `<div class="card p-6 sm:p-10 mb-6 flex flex-col items-center">
                            <button onclick="speak('${q.target}')" class="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-orange-500 text-white shadow-lg flex items-center justify-center text-4xl sm:text-5xl mb-6 hover:scale-110 active:scale-95 transition-all">🔊</button>
                            <input type="text" id="spell-input-${qIdx}" class="spelling-input text-2xl sm:text-3xl mb-4 ${answered ? 'bg-green-100 border-green-500 text-green-700 font-bold' : ''}" placeholder="Type here..." ${answered ? 'disabled value="'+q.target+'"' : ''} onkeydown="if(event.key==='Enter') checkSpelling(${qIdx})">
                            ${!answered ? `<button onclick="checkSpelling(${qIdx})" class="px-10 py-3 bg-green-500 text-white rounded-full font-black shadow-lg uppercase">Check</button>` : '<div class="text-2xl font-black text-green-600">✨ CORRECT ✨</div>'}
                        </div>`;
                    }).join('');
                    main.innerHTML = `<div class="text-center max-w-2xl mx-auto"><h2 class="text-2xl sm:text-3xl font-black mb-4 text-orange-600 uppercase font-['Comic_Neue']">${data.title}</h2><div class="instr-text mb-6">💡 ${data.instr}</div>${qsHtml}</div>`;
                } else {
                    let passageHtml = data.passage ? `<div class="sticky-passage-wrapper"><div class="passage-box p-6 sm:p-8 shadow-xl mb-6 sm:mb-8 passage-text">${data.passage}</div></div>` : '';
                    let qsHtml = data.qs.map((q, qIdx) => {
                        const ans = userAnswers[`${currentPage}-${qIdx}`], answered = ans !== undefined;
                        return `<div class="card p-6 sm:p-10 mb-6 sm:mb-8 transform transition-all">
                            <div class="q-text mb-6 sm:mb-8 text-xl sm:text-3xl leading-snug font-['Comic_Neue'] font-black">${q.qText || q.q}</div>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                                ${q.opts.map((opt, oIdx) => {
                                    let cls = answered ? (oIdx === q.c ? "correct" : (oIdx === ans ? "wrong" : "opacity-30")) : "hover:bg-purple-50";
                                    return `<button onclick="handleAnswer(${qIdx}, ${oIdx})" ${answered ? 'disabled' : ''} class="option-btn p-4 sm:p-5 font-black text-base sm:text-xl transition-all ${cls}">${opt}</button>`;
                                }).join('')}
                            </div>
                        </div>`;
                    }).join('');
                    main.innerHTML = `<div class="mb-10 text-center px-2"><h2 class="text-2xl sm:text-4xl font-black text-purple-700 uppercase tracking-tight font-['Comic_Neue']">${data.title}</h2><div class="inline-block px-4 py-1 bg-purple-100 text-purple-600 rounded-full font-bold text-xs sm:text-sm mt-1 instr-text">💡 ${data.instr}</div></div><div class="${data.passage ? 'lg:grid lg:grid-cols-2 lg:gap-14 items-start' : 'max-w-4xl mx-auto'}">${passageHtml}<div>${qsHtml}</div></div>`;
                }
            } else if (currentView === 'results') {
                main.innerHTML = `<div class="text-center py-14 max-w-2xl mx-auto px-4"><div class="text-8xl sm:text-9xl mb-8 animate-bounce">👑</div><h2 class="text-4xl sm:text-6xl font-black mb-4 text-purple-600 uppercase font-['Comic_Neue']">Victory!</h2><p class="text-xl sm:text-3xl font-bold text-gray-500 mb-10">You earned ${globalScore} stars!</p><button onclick="goHome()" class="px-12 py-5 sm:px-16 sm:py-8 bg-purple-600 text-white rounded-[3rem] font-black text-xl sm:text-3xl shadow-2xl hover:scale-110 active:scale-95 transition-all w-full sm:w-auto uppercase">Play Again 🏠</button></div>`;
            }
        }

        function handleBack() { micUsedOnThisPage = false; currentPage > 0 ? (currentPage--, render(), window.scrollTo(0, 0)) : goHome(); }
        function nextPage() { micUsedOnThisPage = false; currentPage < activeData.length - 1 ? (currentPage++, render(), window.scrollTo(0, 0)) : finish(); }
        function finish() {
            currentView = 'results'; document.getElementById('quiz-footer').classList.add('hidden'); document.getElementById('progress-container').classList.add('hidden');
            render();
            window.scrollTo(0, 0);
        }
        window.onload = render;
    </script>
</body>
</html>

