const questions = [
  {
    "category": "You, the Astronaut",
    "question": "What would your astronaut name be?",
    "easy": "You can use your real name or make one up.",
    "deeper": "How come you picked that name?",
    "traits": [
      "Identity",
      "Confidence"
    ]
  },
  {
    "category": "You, the Astronaut",
    "question": "What color would your spacesuit be?",
    "easy": "Pick one color or lots of colors.",
    "deeper": "What do you like about that color?",
    "traits": [
      "Identity",
      "Self-Expression"
    ]
  },
  {
    "category": "You, the Astronaut",
    "question": "What would your astronaut be really good at?",
    "easy": "Helping, noticing, fixing, drawing, listening, making people laugh, or something else?",
    "deeper": "When are you good at that in real life?",
    "traits": [
      "Strength",
      "Confidence"
    ]
  },
  {
    "category": "You, the Astronaut",
    "question": "What would your astronaut want help with?",
    "easy": "Everyone needs help with something.",
    "deeper": "Who is good at helping you?",
    "traits": [
      "Self-Awareness",
      "Support"
    ]
  },
  {
    "category": "You, the Astronaut",
    "question": "What would your astronaut be excited about?",
    "easy": "The rocket, the stars, the Moon, aliens, floating, or something else?",
    "deeper": "What makes you excited in real life?",
    "traits": [
      "Interests",
      "Joy"
    ]
  },
  {
    "category": "You, the Astronaut",
    "question": "What would your astronaut feel nervous about?",
    "easy": "The launch, the dark, being far away, loud sounds, or something else?",
    "deeper": "What helps when you feel nervous?",
    "traits": [
      "Feelings",
      "Regulation"
    ]
  },
  {
    "category": "You, the Astronaut",
    "question": "What is one thing your astronaut wants people to know about them?",
    "easy": "It can be something you like, need, or are good at.",
    "deeper": "Do people usually know that about you?",
    "traits": [
      "Identity",
      "Communication"
    ]
  },
  {
    "category": "You, the Astronaut",
    "question": "What would make your astronaut proud?",
    "easy": "Trying, helping, learning, being brave, or finishing something?",
    "deeper": "What makes you proud of yourself?",
    "traits": [
      "Self-Esteem",
      "Confidence"
    ]
  },
  {
    "category": "You, the Astronaut",
    "question": "What kind of astronaut would you want to be?",
    "easy": "Kind, brave, careful, funny, calm, curious, or something else?",
    "deeper": "Which one is most like you?",
    "traits": [
      "Identity",
      "Hope"
    ]
  },
  {
    "category": "You, the Astronaut",
    "question": "What would your astronaut’s special power be?",
    "easy": "Flying, helping, calming, fixing, noticing, or imagining?",
    "deeper": "How could that power help your crew?",
    "traits": [
      "Strength",
      "Empathy"
    ]
  },
  {
    "category": "Mission Feelings",
    "question": "If your feelings were space weather today, what would the weather be?",
    "easy": "Sunny, stormy, cloudy, windy, calm, or mixed?",
    "deeper": "What would help the weather feel better?",
    "traits": [
      "Feelings",
      "Self-Awareness"
    ]
  },
  {
    "category": "Mission Feelings",
    "question": "What makes your astronaut happy?",
    "easy": "People, places, games, pets, jokes, quiet, or something else?",
    "deeper": "How can people tell when you are happy?",
    "traits": [
      "Joy",
      "Communication"
    ]
  },
  {
    "category": "Mission Feelings",
    "question": "What makes your astronaut worried?",
    "easy": "New things, loud things, mistakes, school, people, or something else?",
    "deeper": "What helps worry get smaller?",
    "traits": [
      "Feelings",
      "Regulation"
    ]
  },
  {
    "category": "Mission Feelings",
    "question": "What makes your astronaut mad?",
    "easy": "Unfair things, being rushed, being teased, noise, or something else?",
    "deeper": "What helps mad feelings stay safe?",
    "traits": [
      "Feelings",
      "Safety"
    ]
  },
  {
    "category": "Mission Feelings",
    "question": "What makes your astronaut sad?",
    "easy": "Missing someone, being left out, getting in trouble, or something else?",
    "deeper": "What helps when sadness shows up?",
    "traits": [
      "Feelings",
      "Support"
    ]
  },
  {
    "category": "Mission Feelings",
    "question": "What feeling is easy for your astronaut to show?",
    "easy": "Happy, mad, sad, worried, silly, excited, or calm?",
    "deeper": "How do people know you feel that way?",
    "traits": [
      "Feelings",
      "Communication"
    ]
  },
  {
    "category": "Mission Feelings",
    "question": "What feeling does your astronaut usually keep inside?",
    "easy": "A feeling people may not see right away.",
    "deeper": "What makes that feeling stay inside?",
    "traits": [
      "Feelings",
      "Self-Awareness"
    ]
  },
  {
    "category": "Mission Feelings",
    "question": "What feeling do people sometimes miss in your astronaut?",
    "easy": "A feeling people do not always notice.",
    "deeper": "What would help them notice it?",
    "traits": [
      "Communication",
      "Self-Awareness"
    ]
  },
  {
    "category": "Mission Feelings",
    "question": "If your astronaut had a feeling button, what feeling would be on it today?",
    "easy": "Pick one feeling or more than one.",
    "deeper": "What made that feeling show up?",
    "traits": [
      "Feelings",
      "Insight"
    ]
  },
  {
    "category": "Mission Feelings",
    "question": "What feeling is hard for your astronaut to talk about?",
    "easy": "It can be any feeling.",
    "deeper": "What would make it easier to talk about?",
    "traits": [
      "Feelings",
      "Communication"
    ]
  },
  {
    "category": "Your Crew",
    "question": "Who would you bring to space with you?",
    "easy": "You can pick one person or more than one.",
    "deeper": "How come you picked them?",
    "traits": [
      "Relationships",
      "Support"
    ]
  },
  {
    "category": "Your Crew",
    "question": "Who would help you feel safe on the rocket?",
    "easy": "A family member, friend, teacher, pet, or someone else?",
    "deeper": "What do they do that helps you feel safe?",
    "traits": [
      "Safety",
      "Attachment"
    ]
  },
  {
    "category": "Your Crew",
    "question": "Who would make you laugh in space?",
    "easy": "Someone silly, funny, or playful.",
    "deeper": "What do they do that makes you laugh?",
    "traits": [
      "Relationships",
      "Joy"
    ]
  },
  {
    "category": "Your Crew",
    "question": "Who would be good at listening to you?",
    "easy": "Someone who lets you talk or lets you be quiet.",
    "deeper": "How can you tell they are listening?",
    "traits": [
      "Relationships",
      "Communication"
    ]
  },
  {
    "category": "Your Crew",
    "question": "Who would help if something went wrong?",
    "easy": "Pick someone you trust.",
    "deeper": "What makes them helpful?",
    "traits": [
      "Trust",
      "Support"
    ]
  },
  {
    "category": "Your Crew",
    "question": "Who would you miss from Earth?",
    "easy": "A person, pet, or group of people.",
    "deeper": "What would you miss about them?",
    "traits": [
      "Attachment",
      "Relationships"
    ]
  },
  {
    "category": "Your Crew",
    "question": "Who knows you really well?",
    "easy": "Someone who understands you.",
    "deeper": "What do they understand about you?",
    "traits": [
      "Relationships",
      "Identity"
    ]
  },
  {
    "category": "Your Crew",
    "question": "Who is easy to talk to?",
    "easy": "Someone at home, school, or somewhere else.",
    "deeper": "What makes them easy to talk to?",
    "traits": [
      "Communication",
      "Support"
    ]
  },
  {
    "category": "Your Crew",
    "question": "Who would you want to sit next to on the rocket?",
    "easy": "Pick someone who would feel good to sit beside.",
    "deeper": "What would make sitting with them feel good?",
    "traits": [
      "Relationships",
      "Safety"
    ]
  },
  {
    "category": "Your Crew",
    "question": "If your crew had a team name, what would it be?",
    "easy": "Make up a name for your group.",
    "deeper": "Who belongs on that team?",
    "traits": [
      "Belonging",
      "Relationships"
    ]
  },
  {
    "category": "Home Planet",
    "question": "What do you like most about home?",
    "easy": "A person, pet, room, toy, routine, or feeling.",
    "deeper": "What makes that part of home special?",
    "traits": [
      "Home",
      "Safety"
    ]
  },
  {
    "category": "Home Planet",
    "question": "What is your favorite place at home?",
    "easy": "Bedroom, couch, kitchen, outside, or somewhere else?",
    "deeper": "What do you like about that place?",
    "traits": [
      "Home",
      "Regulation"
    ]
  },
  {
    "category": "Home Planet",
    "question": "Where do you go when you want quiet?",
    "easy": "A room, corner, blanket, outside, or somewhere else?",
    "deeper": "How do people know you need quiet?",
    "traits": [
      "Regulation",
      "Communication"
    ]
  },
  {
    "category": "Home Planet",
    "question": "Who helps you at home?",
    "easy": "A grown-up, sibling, pet, or someone else?",
    "deeper": "What do they help with?",
    "traits": [
      "Home",
      "Support"
    ]
  },
  {
    "category": "Home Planet",
    "question": "What is something fun you do at home?",
    "easy": "A game, show, toy, activity, or routine.",
    "deeper": "Who do you like doing it with?",
    "traits": [
      "Home",
      "Joy"
    ]
  },
  {
    "category": "Home Planet",
    "question": "What is something hard about home?",
    "easy": "Noise, rules, sharing, bedtime, mornings, or something else?",
    "deeper": "What would make that part easier?",
    "traits": [
      "Home",
      "Needs"
    ]
  },
  {
    "category": "Home Planet",
    "question": "What do you wish happened more at home?",
    "easy": "More play, quiet, help, hugs, talking, alone time, or something else?",
    "deeper": "Who could help make that happen?",
    "traits": [
      "Home",
      "Needs"
    ]
  },
  {
    "category": "Home Planet",
    "question": "What makes home feel safe?",
    "easy": "People, rules, routines, quiet, pets, or something else?",
    "deeper": "How do you know when you feel safe?",
    "traits": [
      "Safety",
      "Home"
    ]
  },
  {
    "category": "Home Planet",
    "question": "What makes home feel loud or busy?",
    "easy": "Sounds, people, lights, arguing, chores, or changes?",
    "deeper": "What helps when home feels too busy?",
    "traits": [
      "Home",
      "Regulation"
    ]
  },
  {
    "category": "Home Planet",
    "question": "If your home was a planet, what kind of planet would it be?",
    "easy": "Quiet, busy, funny, loud, cozy, stormy, or mixed?",
    "deeper": "What would make that planet better for you?",
    "traits": [
      "Home",
      "Feelings"
    ]
  },
  {
    "category": "Mission Jobs",
    "question": "Would you rather be the captain or have someone else be captain?",
    "easy": "Captain or someone else?",
    "deeper": "How come?",
    "traits": [
      "Leadership",
      "Trust"
    ]
  },
  {
    "category": "Mission Jobs",
    "question": "Who would you trust to be captain of your spaceship?",
    "easy": "Pick someone you trust.",
    "deeper": "What makes them a good captain?",
    "traits": [
      "Trust",
      "Relationships"
    ]
  },
  {
    "category": "Mission Jobs",
    "question": "What would your job be on the spaceship?",
    "easy": "Captain, helper, fixer, artist, explorer, listener, or something else?",
    "deeper": "Why would that job fit you?",
    "traits": [
      "Identity",
      "Strength"
    ]
  },
  {
    "category": "Mission Jobs",
    "question": "What job would you not want to have?",
    "easy": "Pick any spaceship job you would not like.",
    "deeper": "What would be hard about that job?",
    "traits": [
      "Self-Awareness",
      "Boundaries"
    ]
  },
  {
    "category": "Mission Jobs",
    "question": "Would you rather help people on the ship or explore new places?",
    "easy": "Help people or explore?",
    "deeper": "How come?",
    "traits": [
      "Values",
      "Interests"
    ]
  },
  {
    "category": "Mission Jobs",
    "question": "Would you rather work by yourself or with a teammate?",
    "easy": "By yourself or with someone?",
    "deeper": "What feels better about that?",
    "traits": [
      "Independence",
      "Relationships"
    ]
  },
  {
    "category": "Mission Jobs",
    "question": "Would you rather make the rules for the ship or help everyone follow them?",
    "easy": "Make the rules or help with the rules?",
    "deeper": "How come?",
    "traits": [
      "Boundaries",
      "Leadership"
    ]
  },
  {
    "category": "Mission Jobs",
    "question": "Would you rather be the brave one, the careful one, the funny one, or the helper?",
    "easy": "Brave, careful, funny, or helper?",
    "deeper": "Which one is most like you?",
    "traits": [
      "Identity",
      "Self-Esteem"
    ]
  },
  {
    "category": "Mission Jobs",
    "question": "If something went wrong on the ship, what would you be good at doing?",
    "easy": "Getting help, staying calm, fixing, thinking, helping someone, or something else?",
    "deeper": "When have you done something like that before?",
    "traits": [
      "Strength",
      "Resilience"
    ]
  },
  {
    "category": "Mission Jobs",
    "question": "What would your crew say you are good at?",
    "easy": "Helping, trying, noticing, caring, making people laugh, or something else?",
    "deeper": "Do you think they are right?",
    "traits": [
      "Self-Esteem",
      "Relationships"
    ]
  },
  {
    "category": "Space School",
    "question": "What is your favorite part of school?",
    "easy": "A subject, teacher, friend, lunch, recess, art, gym, or something else?",
    "deeper": "What makes that part good?",
    "traits": [
      "School",
      "Interests"
    ]
  },
  {
    "category": "Space School",
    "question": "What part of school is hardest?",
    "easy": "Work, friends, noise, rules, sitting, changes, or something else?",
    "deeper": "What would make that part less hard?",
    "traits": [
      "School",
      "Support"
    ]
  },
  {
    "category": "Space School",
    "question": "Who helps you at school?",
    "easy": "A teacher, friend, counselor, nurse, aide, or someone else?",
    "deeper": "How do they help?",
    "traits": [
      "School",
      "Support"
    ]
  },
  {
    "category": "Space School",
    "question": "What makes a teacher feel safe to talk to?",
    "easy": "Kind voice, listening, patience, fairness, or something else?",
    "deeper": "What makes a teacher harder to talk to?",
    "traits": [
      "School",
      "Safety"
    ]
  },
  {
    "category": "Space School",
    "question": "What makes school feel too loud or busy?",
    "easy": "Hallways, cafeteria, classroom, bus, recess, or something else?",
    "deeper": "What helps when school feels too much?",
    "traits": [
      "School",
      "Regulation"
    ]
  },
  {
    "category": "Space School",
    "question": "What helps you have a better school day?",
    "easy": "A person, routine, break, quiet place, warning, or something else?",
    "deeper": "Who at school should know that?",
    "traits": [
      "School",
      "Support"
    ]
  },
  {
    "category": "Space School",
    "question": "What is something you are good at in school?",
    "easy": "A subject, helping, noticing, drawing, reading, or something else?",
    "deeper": "Who notices that strength?",
    "traits": [
      "School",
      "Self-Esteem"
    ]
  },
  {
    "category": "Space School",
    "question": "What is something you wish was easier at school?",
    "easy": "Learning, asking, writing, friends, noise, rules, or something else?",
    "deeper": "What kind of help would make it easier?",
    "traits": [
      "School",
      "Needs"
    ]
  },
  {
    "category": "Space School",
    "question": "Where could your astronaut take a break at space school?",
    "easy": "A quiet room, hallway, library, nurse, outside, or another place?",
    "deeper": "How would your astronaut ask for that break?",
    "traits": [
      "Regulation",
      "Communication"
    ]
  },
  {
    "category": "Space School",
    "question": "What would you change about school if you could?",
    "easy": "A rule, room, schedule, sound, work, or something else?",
    "deeper": "How would that change help kids?",
    "traits": [
      "School",
      "Advocacy"
    ]
  },
  {
    "category": "Friendship Planet",
    "question": "What makes someone a good friend?",
    "easy": "Kind, funny, fair, calm, honest, playful, or something else?",
    "deeper": "How do you know when someone is a good friend?",
    "traits": [
      "Friendship",
      "Trust"
    ]
  },
  {
    "category": "Friendship Planet",
    "question": "What makes someone hard to be around?",
    "easy": "Bossy, loud, mean, unfair, confusing, or something else?",
    "deeper": "What do you do when someone is hard to be around?",
    "traits": [
      "Boundaries",
      "Relationships"
    ]
  },
  {
    "category": "Friendship Planet",
    "question": "What do you like to do with friends?",
    "easy": "Play, talk, build, draw, games, sports, pretend, or something else?",
    "deeper": "What makes that fun with someone else?",
    "traits": [
      "Friendship",
      "Interests"
    ]
  },
  {
    "category": "Friendship Planet",
    "question": "What is hard about making friends?",
    "easy": "Starting, joining, talking, sharing, knowing what to say, or something else?",
    "deeper": "What helps make it easier?",
    "traits": [
      "Friendship",
      "Communication"
    ]
  },
  {
    "category": "Friendship Planet",
    "question": "What is hard about keeping friends?",
    "easy": "Arguments, sharing, teasing, changes, space, or something else?",
    "deeper": "What helps friendships last?",
    "traits": [
      "Friendship",
      "Repair"
    ]
  },
  {
    "category": "Friendship Planet",
    "question": "How do you know someone is being kind?",
    "easy": "What do they say or do?",
    "deeper": "How does kindness feel?",
    "traits": [
      "Friendship",
      "Safety"
    ]
  },
  {
    "category": "Friendship Planet",
    "question": "How do you know someone is not being kind?",
    "easy": "What do they say or do?",
    "deeper": "What should you do if someone is not being kind?",
    "traits": [
      "Safety",
      "Boundaries"
    ]
  },
  {
    "category": "Friendship Planet",
    "question": "What should a friend do when you are upset?",
    "easy": "Listen, give space, get help, sit with you, or something else?",
    "deeper": "What should they not do?",
    "traits": [
      "Friendship",
      "Support"
    ]
  },
  {
    "category": "Friendship Planet",
    "question": "What kind of friend are you?",
    "easy": "Silly, loyal, caring, quiet, playful, helpful, or something else?",
    "deeper": "What would your friends say about you?",
    "traits": [
      "Self-Esteem",
      "Friendship"
    ]
  },
  {
    "category": "Friendship Planet",
    "question": "If a new kid joined your space crew, what could help them feel included?",
    "easy": "Say hi, show them around, ask them to play, or something else?",
    "deeper": "When have you felt included?",
    "traits": [
      "Empathy",
      "Relationships"
    ]
  },
  {
    "category": "Big Feeling Asteroids",
    "question": "What do you do when you feel mad?",
    "easy": "Yell, cry, move, hide, talk, squeeze, or something else?",
    "deeper": "What helps mad feelings stay safe?",
    "traits": [
      "Regulation",
      "Safety"
    ]
  },
  {
    "category": "Big Feeling Asteroids",
    "question": "What do you do when you feel worried?",
    "easy": "Ask questions, get quiet, move, think a lot, or something else?",
    "deeper": "What helps worry calm down?",
    "traits": [
      "Regulation",
      "Feelings"
    ]
  },
  {
    "category": "Big Feeling Asteroids",
    "question": "What do you do when you feel sad?",
    "easy": "Cry, get quiet, want a hug, want space, or something else?",
    "deeper": "What helps sadness a little?",
    "traits": [
      "Regulation",
      "Support"
    ]
  },
  {
    "category": "Big Feeling Asteroids",
    "question": "What do you do when you feel too excited?",
    "easy": "Jump, talk fast, laugh, run, make noise, or something else?",
    "deeper": "What helps excitement stay okay for everyone?",
    "traits": [
      "Regulation",
      "Self-Awareness"
    ]
  },
  {
    "category": "Big Feeling Asteroids",
    "question": "What helps after a hard day?",
    "easy": "Quiet, play, hugs, music, animals, shows, or something else?",
    "deeper": "Who helps after a hard day?",
    "traits": [
      "Regulation",
      "Support"
    ]
  },
  {
    "category": "Big Feeling Asteroids",
    "question": "What makes a hard feeling bigger?",
    "easy": "Being rushed, yelled at, touched, watched, noise, or something else?",
    "deeper": "What do you wish people did instead?",
    "traits": [
      "Regulation",
      "Communication"
    ]
  },
  {
    "category": "Big Feeling Asteroids",
    "question": "What makes a hard feeling smaller?",
    "easy": "Breathing, space, talking, drawing, moving, music, or something else?",
    "deeper": "Which one works best for you?",
    "traits": [
      "Regulation",
      "Coping"
    ]
  },
  {
    "category": "Big Feeling Asteroids",
    "question": "Who helps when feelings get big?",
    "easy": "A grown-up, friend, sibling, pet, or someone else?",
    "deeper": "What do they do that helps?",
    "traits": [
      "Support",
      "Safety"
    ]
  },
  {
    "category": "Big Feeling Asteroids",
    "question": "Where do you feel worry in your body?",
    "easy": "Belly, chest, head, hands, legs, throat, or somewhere else?",
    "deeper": "What helps your body when worry shows up?",
    "traits": [
      "Body Clues",
      "Self-Awareness"
    ]
  },
  {
    "category": "Big Feeling Asteroids",
    "question": "Where do you feel anger in your body?",
    "easy": "Hands, face, chest, belly, legs, head, or somewhere else?",
    "deeper": "What helps your body when anger shows up?",
    "traits": [
      "Body Clues",
      "Regulation"
    ]
  },
  {
    "category": "Safety and Boundaries",
    "question": "What helps you feel safe?",
    "easy": "A person, place, object, rule, routine, or something else?",
    "deeper": "How can people tell when you feel safe?",
    "traits": [
      "Safety",
      "Regulation"
    ]
  },
  {
    "category": "Safety and Boundaries",
    "question": "Who helps you feel safe?",
    "easy": "Someone at home, school, therapy, or somewhere else.",
    "deeper": "What makes that person feel safe?",
    "traits": [
      "Safety",
      "Attachment"
    ]
  },
  {
    "category": "Safety and Boundaries",
    "question": "What does personal space mean to you?",
    "easy": "How close is okay?",
    "deeper": "How can you tell someone needs more space?",
    "traits": [
      "Boundaries",
      "Safety"
    ]
  },
  {
    "category": "Safety and Boundaries",
    "question": "What should people ask before touching your things?",
    "easy": "What words should they use?",
    "deeper": "How do you feel when people touch your things without asking?",
    "traits": [
      "Boundaries",
      "Communication"
    ]
  },
  {
    "category": "Safety and Boundaries",
    "question": "What should people ask before giving you a hug or high five?",
    "easy": "What would feel respectful?",
    "deeper": "How can you say no if you do not want that?",
    "traits": [
      "Consent",
      "Boundaries"
    ]
  },
  {
    "category": "Safety and Boundaries",
    "question": "What is a kind way to say no?",
    "easy": "What words could your astronaut use?",
    "deeper": "When is it hard to say no?",
    "traits": [
      "Boundaries",
      "Communication"
    ]
  },
  {
    "category": "Safety and Boundaries",
    "question": "What is a strong way to say stop?",
    "easy": "What words or signal could your astronaut use?",
    "deeper": "Who could help if someone does not stop?",
    "traits": [
      "Safety",
      "Advocacy"
    ]
  },
  {
    "category": "Safety and Boundaries",
    "question": "Who could you tell if something felt wrong?",
    "easy": "A grown-up, teacher, counselor, family member, or someone else?",
    "deeper": "What makes it easier to tell?",
    "traits": [
      "Safety",
      "Support"
    ]
  },
  {
    "category": "Safety and Boundaries",
    "question": "What makes an adult safe to talk to?",
    "easy": "They listen, believe you, stay calm, help, or something else?",
    "deeper": "What makes an adult harder to talk to?",
    "traits": [
      "Trust",
      "Safety"
    ]
  },
  {
    "category": "Safety and Boundaries",
    "question": "What rule would help everyone feel safe on the spaceship?",
    "easy": "A rule about bodies, words, things, space, or asking first.",
    "deeper": "Why does that rule matter?",
    "traits": [
      "Boundaries",
      "Safety"
    ]
  },
  {
    "category": "Reaching Space",
    "question": "What helped your astronaut get this far?",
    "easy": "People, practice, courage, kindness, calm, or something else?",
    "deeper": "What helps you keep going in real life?",
    "traits": [
      "Resilience",
      "Support"
    ]
  },
  {
    "category": "Reaching Space",
    "question": "What did your astronaut learn about themselves?",
    "easy": "Something they are good at, need, like, or feel.",
    "deeper": "Did anything surprise you?",
    "traits": [
      "Insight",
      "Identity"
    ]
  },
  {
    "category": "Reaching Space",
    "question": "What was the best part of the mission?",
    "easy": "Pick any part.",
    "deeper": "What made that part the best?",
    "traits": [
      "Joy",
      "Reflection"
    ]
  },
  {
    "category": "Reaching Space",
    "question": "What was the hardest part of the mission?",
    "easy": "Pick any part.",
    "deeper": "What helped you get through it?",
    "traits": [
      "Resilience",
      "Coping"
    ]
  },
  {
    "category": "Reaching Space",
    "question": "What are you proud of?",
    "easy": "Something from the mission or real life.",
    "deeper": "Who would be proud of you too?",
    "traits": [
      "Self-Esteem",
      "Confidence"
    ]
  },
  {
    "category": "Reaching Space",
    "question": "What do you want to keep practicing?",
    "easy": "A feeling skill, friendship skill, school skill, or something else?",
    "deeper": "Who can help you practice?",
    "traits": [
      "Growth",
      "Support"
    ]
  },
  {
    "category": "Reaching Space",
    "question": "What do you hope gets easier?",
    "easy": "Something at home, school, with feelings, or with people.",
    "deeper": "What would be the first sign it was getting easier?",
    "traits": [
      "Hope",
      "Needs"
    ]
  },
  {
    "category": "Reaching Space",
    "question": "What would your crew say you are good at?",
    "easy": "Helping, trying, noticing, caring, making people laugh, or something else?",
    "deeper": "Do you believe that about yourself?",
    "traits": [
      "Self-Esteem",
      "Relationships"
    ]
  },
  {
    "category": "Reaching Space",
    "question": "What is your next big dream?",
    "easy": "It can be big, small, real, or imaginary.",
    "deeper": "What is one tiny step toward that dream?",
    "traits": [
      "Hope",
      "Future"
    ]
  },
  {
    "category": "Reaching Space",
    "question": "What should the newspaper say about your space journey?",
    "easy": "What headline should they write?",
    "deeper": "What do you want people to remember about you?",
    "traits": [
      "Identity",
      "Self-Esteem"
    ]
  }
];

let state = {
  name: "Star Explorer",
  avatar: "🧑‍🚀",
  skin: "#f6c08d",
  hair: "#3b2418",
  suit: "blue",
  crewName: "Robo",
  crewSkill: "Problem Solving",
  count: 0,
  traits: {},
  current: null,
  questionCursor: 0,
  newsUnlocked: [],
  answers: [],
  finalGenerated: false,
  chaptersShown: [],
  soundOn: true,
  volume: 0.25,
  musicLevel: "dream"
};

const milestones = [
  { count: 1, title: "Daily Discoveries", headline: "Young Dreamer Begins Astronaut Journey", body: "A brave student took the first step toward space today." },
  { count: 10, title: "Daily Discoveries", headline: "Local Student Gets Into Space Camp!", body: "The first mission chapter revealed strengths, hopes, and personality." },
  { count: 25, title: "The Future Times", headline: "Young Explorer Builds a Space Crew", body: "The mission revealed important people, supports, and trusted helpers." },
  { count: 50, title: "Space Camp Times", headline: "Future Astronaut Shares Their World", body: "Halfway through the journey, Mission Control has learned more about home, school, feelings, and communication." },
  { count: 75, title: "Galaxy Gazette", headline: "Mission Prep Complete!", body: "The explorer has practiced naming feelings, asking for help, and finding safe ways through hard moments." },
  { count: 100, title: "Galaxy Gazette", headline: "Historic Launch! Student Reaches Space", body: "A dream becomes reality as our brave explorer launches into space." }
];

const ranks = [
  [0, "Dreamer"],
  [10, "Space Camper"],
  [25, "Junior Astronaut"],
  [50, "Mission Cadet"],
  [75, "Launch Specialist"],
  [100, "Space Explorer"]
];

document.querySelectorAll(".choice-row").forEach(row => {
  row.querySelectorAll(".choice").forEach(btn => {
    btn.addEventListener("click", () => {
      row.querySelectorAll(".choice").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state[row.dataset.choice] = btn.dataset.value;
      updateAvatar();
    });
  });
});

document.querySelectorAll(".crew").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".crew").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    state.crewName = btn.dataset.name;
    state.crewSkill = btn.dataset.skill;
  });
});

document.querySelectorAll(".skill").forEach(btn => {
  btn.addEventListener("click", () => {
    const active = document.querySelectorAll(".skill.active").length;
    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
      delete state.traits[btn.textContent];
    } else if (active < 3) {
      btn.classList.add("active");
      state.traits[btn.textContent] = 3;
    }
  });
});



document.getElementById("startBtn").addEventListener("click", () => {
  state.name = document.getElementById("astronautName").value || "Star Explorer";
  document.getElementById("setupScreen").classList.add("hidden");
  document.getElementById("gameScreen").classList.remove("hidden");
  updateMusicLevel();
  startSoundscape();
  updateAll();
  drawQuestion();
});

function drawQuestion() {
  if (questions.length === 0) return;

  // Move through the 100-question mission deck in order.
  // This prevents random repeats during a full mission.
  const index = state.questionCursor % questions.length;
  state.current = questions[index];
  state.questionCursor++;

  document.getElementById("categoryTag").textContent = state.current.category;
  document.getElementById("questionText").textContent = state.current.question;
  document.getElementById("easyText").textContent = state.current.easy;
  document.getElementById("answerBox").value = "";
}

document.getElementById("easyBtn").addEventListener("click", () => {
  document.getElementById("easyText").textContent = state.current.easy;
});

document.getElementById("deeperBtn").addEventListener("click", () => {
  document.getElementById("easyText").textContent = state.current.deeper;
});

document.getElementById("passBtn").addEventListener("click", drawQuestion);

document.getElementById("submitBtn").addEventListener("click", () => {
  const answer = document.getElementById("answerBox").value.trim();
  state.count++;
  state.answers.push({
    number: state.count,
    category: state.current.category,
    question: state.current.question,
    answer: answer || "[Answered verbally / not typed]",
    traits: state.current.traits
  });
  state.current.traits.forEach(t => {
    state.traits[t] = (state.traits[t] || 0) + 1;
  });
  unlockNews();
  updateMusicLevel();
  playRewardSound();
  updateAll();

  if (state.count >= 100 && !state.finalGenerated) {
    state.finalGenerated = true;
    updateMusicLevel();
    playChapterFanfare();
    showFinalArticle();
  } else {
    const showedChapter = typeof maybeShowChapterComplete === "function" ? maybeShowChapterComplete() : false;
    if (!showedChapter) {
      drawQuestion();
    }
  }
});

function unlockNews() {
  milestones.forEach(m => {
    if (state.count >= m.count && !state.newsUnlocked.includes(m.count)) {
      state.newsUnlocked.push(m.count);
    }
  });
}

function updateAll() {
  updateAvatar();
  document.getElementById("displayName").textContent = state.name;
  document.getElementById("crewText").textContent = `Crew: ${state.crewName} · Skill: ${state.crewSkill}`;
  document.getElementById("questionCount").textContent = state.count;
  const pct = Math.min(state.count, 100);
  document.getElementById("progressFill").style.width = pct + "%";
  document.getElementById("rocket").style.left = `calc(${pct}% - 18px)`;
  document.getElementById("missionStatus").textContent = pct >= 100 ? "Mission complete: you reached space!" : `${100 - pct} questions until space.`;
  const rank = ranks.filter(r => state.count >= r[0]).pop()[1];
  document.getElementById("rankTitle").textContent = rank;
  renderTraits();
  renderNews();
}

function updateAvatar() {
  const avatar = document.getElementById("avatarFace");
  if (!avatar) return;
  avatar.textContent = state.avatar;
  avatar.style.filter = `drop-shadow(0 0 12px ${suitColor(state.suit)})`;
}

function suitColor(suit) {
  return {
    blue:"#64b5f6",
    orange:"#ff9800",
    green:"#7ed957",
    purple:"#b388ff",
    silver:"#cfd8dc"
  }[suit] || "#64b5f6";
}

function renderTraits() {
  const list = document.getElementById("traitList");
  list.innerHTML = "";
  const entries = Object.entries(state.traits).sort((a,b)=>b[1]-a[1]).slice(0,6);
  if (entries.length === 0) {
    list.innerHTML = "<p>No skills yet. Start answering questions.</p>";
    return;
  }
  entries.forEach(([trait, val]) => {
    const div = document.createElement("div");
    div.className = "trait";
    div.innerHTML = `<strong>${trait}</strong><div class="trait-bar"><div class="trait-fill" style="width:${Math.min(val*12,100)}%"></div></div>`;
    list.appendChild(div);
  });
}

function renderNews() {
  const list = document.getElementById("newsList");
  list.innerHTML = "";
  state.newsUnlocked.slice().reverse().forEach(count => {
    const m = milestones.find(x => x.count === count);
    const div = document.createElement("div");
    div.className = "news-item";
    div.innerHTML = `<h3>${m.title}</h3><strong>${m.headline}</strong><p>${m.body}</p><small>Question ${m.count} milestone</small>`;
    list.appendChild(div);
  });
  if (state.newsUnlocked.length === 0) {
    list.innerHTML = "<p>Newspaper articles unlock as your journey grows.</p>";
  }
}


function getTopTraits(limit = 5) {
  return Object.entries(state.traits)
    .sort((a,b)=>b[1]-a[1])
    .slice(0, limit);
}

function pickAnswerSamples() {
  const meaningful = state.answers.filter(a => a.answer && a.answer !== "[Answered verbally / not typed]");
  const source = meaningful.length >= 4 ? meaningful : state.answers;
  if (source.length === 0) return [];
  const indexes = [0, Math.floor(source.length * .25), Math.floor(source.length * .5), Math.floor(source.length * .75), source.length - 1];
  return [...new Set(indexes)].map(i => source[i]).filter(Boolean).slice(0,5);
}

function showFinalArticle() {
  const modal = document.getElementById("finalArticleModal");
  const headline = document.getElementById("finalHeadline");
  const body = document.getElementById("finalArticleBody");
  const topTraits = getTopTraits();
  const samples = pickAnswerSamples();

  headline.textContent = `Historic Launch! ${state.name} Reaches Space`;

  const traitText = topTraits.length
    ? topTraits.map(([trait,val]) => `<li><strong>${trait}</strong> — strengthened through ${val} mission moments</li>`).join("")
    : "<li>Curiosity, courage, and effort carried the mission forward.</li>";

  const sampleText = samples.length
    ? samples.map(a => `
      <div class="article-answer">
        <strong>Question ${a.number} · ${a.category}</strong><br>
        <em>${a.question}</em><br>
        <span>Mission Log: ${escapeHtml(a.answer)}</span>
      </div>
    `).join("")
    : "<p>The mission included many spoken answers, reflections, choices, and brave attempts.</p>";

  body.innerHTML = `
    <p><strong>By The Galaxy Gazette Space Desk</strong></p>
    <p>
      After a 100-question journey filled with conversation, reflection, courage, and self-expression,
      <strong>${escapeHtml(state.name)}</strong> officially reached space today. Traveling with
      <strong>${state.crewName}</strong>, whose special skill is <strong>${state.crewSkill}</strong>,
      this young explorer moved from a dream to launch day one answer at a time.
    </p>

    <div class="article-grid">
      <div class="article-box">
        <h3>Mission Strengths</h3>
        <ul>${traitText}</ul>
      </div>
      <div class="article-box">
        <h3>Mission Profile</h3>
        <p><strong>Rank:</strong> ${document.getElementById("rankTitle").textContent}</p>
        <p><strong>Questions Answered:</strong> ${state.count}</p>
        <p><strong>Crewmate:</strong> ${state.crewName}</p>
        <p><strong>Crew Skill:</strong> ${state.crewSkill}</p>
      </div>
    </div>

    <div class="article-box" style="margin-top:18px">
      <h3>Selected Mission Logs</h3>
      ${sampleText}
    </div>

    <p>
      Mission Control reports that ${escapeHtml(state.name)} showed growth across the journey,
      especially in the areas of ${topTraits.map(t=>t[0]).slice(0,3).join(", ") || "curiosity, courage, and self-expression"}.
      The launch was not only a trip into space, but a story about getting to know the explorer’s feelings,
      relationships, strengths, needs, and hopes.
    </p>

    <p><strong>Final Status:</strong> Mission Complete. The universe is open.</p>
  `;

  modal.classList.remove("hidden");
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

document.getElementById("closeArticleBtn").addEventListener("click", () => {
  document.getElementById("finalArticleModal").classList.add("hidden");
});

document.getElementById("printArticleBtn").addEventListener("click", () => {
  window.print();
});

document.getElementById("copyArticleBtn").addEventListener("click", async () => {
  const text = document.getElementById("finalArticleBody").innerText;
  try {
    await navigator.clipboard.writeText(text);
    document.getElementById("copyArticleBtn").textContent = "Copied!";
    setTimeout(()=>document.getElementById("copyArticleBtn").textContent = "Copy Article", 1200);
  } catch(e) {
    alert("Copy failed. You can highlight the article text manually.");
  }
});




let audioCtx = null;
let soundNodes = [];
let audioStarted = false;

const epicLevels = {
  dream: {
    name: "A Dream Begins",
    base: 146,
    chord: [1, 1.25, 1.5],
    pulse: 1400,
    sparkle: 2600,
    drum: 0,
    lead: 0.012
  },
  camp: {
    name: "Space Camp",
    base: 164,
    chord: [1, 1.25, 1.5, 2],
    pulse: 950,
    sparkle: 2200,
    drum: 0.018,
    lead: 0.016
  },
  academy: {
    name: "Astronaut Academy",
    base: 196,
    chord: [1, 1.2, 1.5, 2],
    pulse: 720,
    sparkle: 1800,
    drum: 0.026,
    lead: 0.02
  },
  training: {
    name: "Mission Training",
    base: 220,
    chord: [1, 1.25, 1.5, 2],
    pulse: 520,
    sparkle: 1500,
    drum: 0.038,
    lead: 0.024
  },
  launch: {
    name: "Launch Day",
    base: 246,
    chord: [1, 1.2, 1.5, 2],
    pulse: 360,
    sparkle: 1200,
    drum: 0.052,
    lead: 0.03
  },
  orbit: {
    name: "Orbit",
    base: 174,
    chord: [1, 1.333, 1.777, 2.25],
    pulse: 1800,
    sparkle: 2400,
    drum: 0.008,
    lead: 0.018
  },
  complete: {
    name: "Mission Complete",
    base: 261,
    chord: [1, 1.25, 1.5, 2],
    pulse: 2200,
    sparkle: 1300,
    drum: 0.012,
    lead: 0.026
  }
};

function updateMusicLevel() {
  let level = "dream";
  if (state.count >= 100) level = "complete";
  else if (state.count >= 90) level = "orbit";
  else if (state.count >= 75) level = "launch";
  else if (state.count >= 50) level = "training";
  else if (state.count >= 25) level = "academy";
  else if (state.count >= 10) level = "camp";

  if (state.musicLevel !== level) {
    state.musicLevel = level;
    if (audioStarted) startSoundscape();
  }
}

function stopSoundscape() {
  soundNodes.forEach(node => {
    try {
      if (node.stop) node.stop();
      if (node.disconnect) node.disconnect();
    } catch(e) {}
  });
  soundNodes = [];
}

function startSoundscape() {
  stopSoundscape();
  audioStarted = true;
  if (!state.soundOn) return;

  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }

  const settings = epicLevels[state.musicLevel] || epicLevels.dream;

  const master = audioCtx.createGain();
  master.gain.value = state.volume;
  master.connect(audioCtx.destination);
  soundNodes.push(master);

  // Warm cinematic chord bed
  settings.chord.forEach((mult, i) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = i % 2 === 0 ? "sine" : "triangle";
    osc.frequency.value = settings.base * mult;
    gain.gain.value = 0.018 + (i * 0.003);
    osc.connect(gain);
    gain.connect(master);
    osc.start();
    soundNodes.push(osc, gain);
  });

  // Adventure pulse
  if (settings.pulse) {
    const pulseTimer = setInterval(() => {
      if (!audioCtx || !state.soundOn) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "triangle";
      osc.frequency.value = settings.base / 2;
      gain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.04, audioCtx.currentTime + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.28);
      osc.connect(gain);
      gain.connect(master);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.3);
    }, settings.pulse);
    soundNodes.push({ stop: () => clearInterval(pulseTimer), disconnect: () => {} });
  }

  // Low heroic drum, stronger at later levels
  if (settings.drum > 0) {
    const drumTimer = setInterval(() => {
      if (!audioCtx || !state.soundOn) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(90, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(45, audioCtx.currentTime + 0.18);
      gain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(settings.drum, audioCtx.currentTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(master);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.38);
    }, state.musicLevel === "launch" ? 720 : 1100);
    soundNodes.push({ stop: () => clearInterval(drumTimer), disconnect: () => {} });
  }

  // Fantasy sparkle / harp-like notes
  const sparkleTimer = setInterval(() => {
    if (!audioCtx || !state.soundOn) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "sine";
    const scale = [1, 1.125, 1.25, 1.5, 1.667, 2, 2.25];
    osc.frequency.value = settings.base * scale[Math.floor(Math.random() * scale.length)] * 2;
    gain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(settings.lead, audioCtx.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.55);
    osc.connect(gain);
    gain.connect(master);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.6);
  }, settings.sparkle);
  soundNodes.push({ stop: () => clearInterval(sparkleTimer), disconnect: () => {} });
}

function playRewardSound() {
  if (!audioCtx || !state.soundOn) return;
  const master = audioCtx.createGain();
  master.gain.value = Math.min(state.volume + 0.1, 0.38);
  master.connect(audioCtx.destination);

  const notes = state.musicLevel === "complete" ? [523, 659, 784, 1046] : [392, 523, 659];
  notes.forEach((freq, i) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "triangle";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.0001, audioCtx.currentTime + i * 0.09);
    gain.gain.exponentialRampToValueAtTime(0.055, audioCtx.currentTime + i * 0.09 + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + i * 0.09 + 0.28);
    osc.connect(gain);
    gain.connect(master);
    osc.start(audioCtx.currentTime + i * 0.09);
    osc.stop(audioCtx.currentTime + i * 0.09 + 0.32);
  });
}

function playChapterFanfare() {
  if (!audioCtx || !state.soundOn) return;
  const master = audioCtx.createGain();
  master.gain.value = Math.min(state.volume + 0.12, 0.42);
  master.connect(audioCtx.destination);

  [392, 523, 659, 784, 1046].forEach((freq, i) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "triangle";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.0001, audioCtx.currentTime + i * 0.13);
    gain.gain.exponentialRampToValueAtTime(0.07, audioCtx.currentTime + i * 0.13 + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + i * 0.13 + 0.45);
    osc.connect(gain);
    gain.connect(master);
    osc.start(audioCtx.currentTime + i * 0.13);
    osc.stop(audioCtx.currentTime + i * 0.13 + 0.5);
  });
}

document.addEventListener("click", () => {
  if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();
}, { once: false });

setTimeout(() => {
  const soundToggle = document.getElementById("soundToggle");
  const volumeSlider = document.getElementById("volumeSlider");

  if (soundToggle) {
    soundToggle.addEventListener("click", () => {
      state.soundOn = !state.soundOn;
      soundToggle.textContent = state.soundOn ? "🔊 Epic Music On" : "🔇 Music Off";
      startSoundscape();
    });
  }

  if (volumeSlider) {
    volumeSlider.addEventListener("input", () => {
      state.volume = Number(volumeSlider.value) / 100;
      if (audioStarted) startSoundscape();
    });
  }
}, 0);


const chapters = [
  {
    count: 10,
    title: "Chapter 1 Complete",
    subtitle: "A Dream Begins",
    icon: "🌠",
    paper: "The Daily Galaxy",
    headline: "Local Child Accepted Into Space Camp",
    message: "Every astronaut starts with a dream. Today, your mission moved from imagination into action."
  },
  {
    count: 25,
    title: "Chapter 2 Complete",
    subtitle: "Space Camp Graduate",
    icon: "🎒",
    paper: "Space Camp Times",
    headline: "Young Explorer Shows Promise at Space Camp",
    message: "You practiced courage, curiosity, and communication. Mission Control is noticing your growth."
  },
  {
    count: 50,
    title: "Chapter 3 Complete",
    subtitle: "Astronaut Academy",
    icon: "🛰️",
    paper: "The Future Times",
    headline: "Astronaut Academy Welcomes Rising Star",
    message: "Halfway to space. Your astronaut is becoming stronger, wiser, and more prepared for the launch ahead."
  },
  {
    count: 75,
    title: "Chapter 4 Complete",
    subtitle: "Launch Training Complete",
    icon: "🚀",
    paper: "Galaxy Gazette",
    headline: "Launch Date Announced for Young Commander",
    message: "Your rocket is waiting. You have built skills, faced big questions, and kept moving forward."
  },
  {
    count: 90,
    title: "Chapter 5 Complete",
    subtitle: "Entering Orbit",
    icon: "🌍",
    paper: "Mission Control Bulletin",
    headline: "Student Astronaut Reaches Orbit",
    message: "The Earth is below and the stars are ahead. Only a few questions remain before the final mission."
  }
];

function maybeShowChapterComplete() {
  const chapter = chapters.find(c => c.count === state.count && !state.chaptersShown.includes(c.count));
  if (!chapter) return false;

  state.chaptersShown.push(chapter.count);

  const topTrait = getTopTraits(1)[0]?.[0] || "Curiosity";
  const rank = document.getElementById("rankTitle")?.textContent || "Dreamer";

  document.getElementById("chapterTitle").textContent = chapter.title;
  document.getElementById("chapterSubtitle").textContent = chapter.subtitle;
  document.getElementById("chapterIcon").textContent = chapter.icon;
  document.getElementById("chapterMessage").textContent = chapter.message;
  document.getElementById("chapterQuestions").textContent = state.count;
  document.getElementById("chapterRank").textContent = rank;
  document.getElementById("chapterSkill").textContent = topTrait;
  document.getElementById("chapterPaperName").textContent = chapter.paper;
  document.getElementById("chapterHeadline").textContent = chapter.headline;

  document.getElementById("chapterModal").classList.remove("hidden");
  playChapterFanfare();
  return true;
}

document.getElementById("continueChapterBtn").addEventListener("click", () => {
  document.getElementById("chapterModal").classList.add("hidden");
  drawQuestion();
});
