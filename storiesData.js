const storiesData = [
    {
        title: "The Snowy Day",
        instr: "Read and answer the questions!",
        passage: "Sam woke up and looked out the window. Everything was white! Snow had fallen all night. Sam put on his warm coat, blue hat, and red mittens. He ran outside to build a snowman. He used a carrot for the nose and coal for the eyes. Sam's dog, Barnaby, jumped in the snow and wagged his tail.",
        qs: [
            { qText: "What did Sam see out the window?", opts: ["Rain", "Snow", "Sun", "Grass"], c: 1 },
            { qText: "What color were Sam's mittens?", opts: ["Blue", "Red", "Green", "Black"], c: 1 },
            { qText: "What did Sam use for the snowman's nose?", opts: ["A potato", "A carrot", "A stick", "A rock"], c: 1 },
            { qText: "What is the name of Sam's dog?", opts: ["Rex", "Bolt", "Barnaby", "Buddy"], c: 2 }
        ]
    },
    {
        title: "The Helpful Robot",
        instr: "A story about Bolt!",
        passage: "Bolt is a silver robot. He has wheels instead of feet. He helps Sam clean his room. Bolt can pick up toy cars with his magnet hand. Every night, Bolt puts the toys in a big blue bin. Sam thinks Bolt is the best helper in the world!",
        qs: [
            { qText: "What color is Bolt?", opts: ["Gold", "Silver", "Red", "Blue"], c: 1 },
            { qText: "How does Bolt move?", opts: ["He walks", "He flies", "He zooms on wheels", "He hops"], c: 2 },
            { qText: "What is special about Bolt's hand?", opts: ["It is a hook", "It is a magnet", "It is a brush", "It is a light"], c: 1 },
            { qText: "Where do the toys go?", opts: ["Under the bed", "In a blue bin", "Out the window", "In a closet"], c: 1 }
        ]
    },
    {
        title: "The Garden Party",
        instr: "Bees and flowers!",
        passage: "The sun was shining in the garden. A busy bee flew to a bright yellow flower. The bee was looking for nectar. A small ladybug sat on a green leaf. 'Hello,' said the bee. They both enjoyed the warm day in the colorful garden.",
        qs: [
            { qText: "What color was the flower?", opts: ["Red", "Yellow", "Blue", "White"], c: 1 },
            { qText: "Where did the ladybug sit?", opts: ["On a rock", "On a green leaf", "On a branch", "On the ground"], c: 1 },
            { qText: "What was the bee looking for?", opts: ["Water", "Nectar", "A friend", "A home"], c: 1 },
            { qText: "What kind of day was it?", opts: ["Cold", "Rainy", "Warm and sunny", "Windy"], c: 2 }
        ]
    },
    {
        title: "Lost in the Woods",
        instr: "A forest adventure.",
        passage: "Toby the turtle was lost. He looked for his home near the pond. He saw a tall pine tree and a pile of dry leaves. Suddenly, he heard a 'Ribbit!' It was his friend the frog. 'Follow me,' said the frog. Toby was happy to find his way back to the water.",
        qs: [
            { qText: "Who was lost?", opts: ["The frog", "Toby the turtle", "A bird", "A squirrel"], c: 1 },
            { qText: "Where does Toby live?", opts: ["In a tree", "Near the pond", "In a cave", "In a house"], c: 1 },
            { qText: "What sound did the frog make?", opts: ["Quack", "Ribbit", "Meow", "Bark"], c: 1 },
            { qText: "How did Toby feel at the end?", opts: ["Sad", "Happy", "Scared", "Angry"], c: 1 }
        ]
    },
    {
        title: "The Magic Kite",
        instr: "High in the sky!",
        passage: "Mia had a beautiful purple kite. She went to the park on a windy day. The kite flew high above the trees. Mia felt like she was flying with it. The kite did a loop in the air. Mia held the string tight so it wouldn't fly away to the clouds.",
        qs: [
            { qText: "What color was Mia's kite?", opts: ["Red", "Purple", "Green", "Yellow"], c: 1 },
            { qText: "Why did the kite fly well?", opts: ["It was heavy", "It was a windy day", "It was raining", "It was night"], c: 1 },
            { qText: "What did the kite do in the air?", opts: ["A dance", "A loop", "A song", "A sleep"], c: 1 },
            { qText: "Where did Mia go to fly her kite?", opts: ["To school", "To the park", "To the beach", "To the store"], c: 1 }
        ]
    },
    {
        title: "Baking Cookies",
        instr: "Yummy treats!",
        passage: "Leo and his mom were baking. They put flour, sugar, and chocolate chips in a bowl. Leo helped stir the dough with a big wooden spoon. The kitchen smelled like sweet chocolate. When the cookies were done, Leo had one with a glass of cold milk.",
        qs: [
            { qText: "What kind of chips were in the cookies?", opts: ["Mint", "Chocolate", "Apple", "Potato"], c: 1 },
            { qText: "What did Leo use to stir the dough?", opts: ["A fork", "A wooden spoon", "A knife", "His hands"], c: 1 },
            { qText: "What did Leo drink with his cookie?", opts: ["Water", "Juice", "Cold milk", "Tea"], c: 2 },
            { qText: "Where were they baking?", opts: ["In the garden", "In the kitchen", "In the bedroom", "At school"], c: 1 }
        ]
    },
    {
        title: "The Brave Little Ant",
        instr: "Working together.",
        passage: "Andy the ant found a big bread crumb. It was too heavy to carry alone. He called his friends for help. Ten ants came to help Andy. They pushed and pulled the crumb all the way to their hill. Teamwork made the job easy and fast!",
        qs: [
            { qText: "What did Andy find?", opts: ["A leaf", "A bread crumb", "A grape", "A stick"], c: 1 },
            { qText: "Could Andy carry it alone?", opts: ["Yes", "No", "Maybe", "Only a little"], c: 1 },
            { qText: "How many friends came to help?", opts: ["Two", "Five", "Ten", "Fifty"], c: 2 },
            { qText: "What helped them finish the job?", opts: ["Luck", "Teamwork", "Magic", "Rain"], c: 1 }
        ]
    },
    {
        title: "Space Journey",
        instr: "To the moon!",
        passage: "The rocket ship was ready to blast off. 3... 2... 1... GO! The astronauts went up past the clouds. They saw the Earth getting smaller and smaller. It looked like a big blue marble. They were going to visit the moon to collect gray rocks.",
        qs: [
            { qText: "What was going to blast off?", opts: ["An airplane", "A rocket ship", "A kite", "A balloon"], c: 1 },
            { qText: "What did Earth look like from space?", opts: ["A flat map", "A blue marble", "A square box", "A bright sun"], c: 1 },
            { qText: "Where were the astronauts going?", opts: ["To Mars", "To the moon", "To the sun", "To a star"], c: 1 },
            { qText: "What did they want to collect?", opts: ["Stars", "Gray rocks", "Ice", "Flowers"], c: 1 }
        ]
    },
    {
        title: "The Sleepy Owl",
        instr: "Night time forest.",
        passage: "Ollie the owl opened his big eyes. It was night time in the forest. While others slept, Ollie was awake. He flew silently through the trees. He saw a rabbit hopping and a fox hiding. Ollie hooted loudly at the bright white moon.",
        qs: [
            { qText: "When is Ollie awake?", opts: ["In the morning", "At night", "In the afternoon", "Never"], c: 1 },
            { qText: "How does Ollie fly?", opts: ["Loudly", "Silently", "Slowly", "With a engine"], c: 1 },
            { qText: "Who did Ollie see hopping?", opts: ["A fox", "A rabbit", "A deer", "A bear"], c: 1 },
            { qText: "What did Ollie do at the moon?", opts: ["He sang", "He hooted", "He laughed", "He cried"], c: 1 }
        ]
    },
    {
        title: "Market Day",
        instr: "Fresh fruit!",
        passage: "Sara went to the market with her dad. They saw red apples, orange carrots, and green grapes. Sara picked out a big, round watermelon. Dad bought a bag of sweet peaches. They carried the heavy bags home and made a fresh fruit salad for lunch.",
        qs: [
            { qText: "Where did Sara go?", opts: ["To the zoo", "To the market", "To the park", "To the library"], c: 1 },
            { qText: "What fruit did Sara pick?", opts: ["An apple", "A watermelon", "A grape", "A banana"], c: 1 },
            { qText: "What did they make for lunch?", opts: ["Soup", "Fruit salad", "Pizza", "Sandwich"], c: 1 },
            { qText: "What color were the apples?", opts: ["Green", "Red", "Yellow", "Purple"], c: 1 }
        ]
    }
];

