const questions = [
  {
    "category": "Launch Profile",
    "question": "Choose a name for your spaceship.",
    "easy": "It can be any name you want.",
    "deeper": "Why does that name fit your spaceship?",
    "traits": [
      "Creativity",
      "Identity"
    ]
  },
  {
    "category": "Launch Profile",
    "question": "What do you want your spaceship to look like?",
    "easy": "Big, tiny, shiny, cozy, colorful, fast, or strange?",
    "deeper": "What part would be most important to you?",
    "traits": [
      "Creativity",
      "Choice"
    ]
  },
  {
    "category": "Launch Profile",
    "question": "What would your astronaut name be?",
    "easy": "You can use your real name or make one up.",
    "deeper": "How come you picked that name?",
    "traits": [
      "Identity",
      "Self-Expression"
    ]
  },
  {
    "category": "Launch Profile",
    "question": "What color would your spacesuit be?",
    "easy": "Pick one color or lots of colors.",
    "deeper": "What do you like about that color?",
    "traits": [
      "Identity",
      "Choice"
    ]
  },
  {
    "category": "Launch Profile",
    "question": "What would your first mission be?",
    "easy": "Visit the Moon, find aliens, see Earth, explore a planet, or something else?",
    "deeper": "Why would you choose that mission?",
    "traits": [
      "Interests",
      "Motivation"
    ]
  },
  {
    "category": "Launch Profile",
    "question": "What would your astronaut be most excited to see?",
    "easy": "Stars, planets, aliens, Earth, the Moon, or something else?",
    "deeper": "What kinds of things make you excited in real life?",
    "traits": [
      "Interests",
      "Joy"
    ]
  },
  {
    "category": "Launch Profile",
    "question": "What would your astronaut feel nervous about?",
    "easy": "The launch, loud sounds, being far away, the dark, or something else?",
    "deeper": "What helps when you feel nervous?",
    "traits": [
      "Feelings",
      "Regulation"
    ]
  },
  {
    "category": "Launch Profile",
    "question": "What should Mission Control know before you blast off?",
    "easy": "Something you like, need, dislike, or want people to understand.",
    "deeper": "Do people usually know that about you?",
    "traits": [
      "Communication",
      "Needs"
    ]
  },
  {
    "category": "Launch Profile",
    "question": "What would be the hardest part of leaving Earth?",
    "easy": "Missing people, pets, home, school, routines, or something else?",
    "deeper": "What would help with that?",
    "traits": [
      "Attachment",
      "Feelings"
    ]
  },
  {
    "category": "Launch Profile",
    "question": "What would make the rocket feel more like home?",
    "easy": "A person, object, sound, smell, blanket, picture, or routine?",
    "deeper": "Why would that help?",
    "traits": [
      "Home",
      "Safety"
    ]
  },
  {
    "category": "Space Weather",
    "question": "If your feelings were space weather today, what would the weather be?",
    "easy": "Sunny, stormy, cloudy, windy, calm, or mixed?",
    "deeper": "What would help the weather feel better?",
    "traits": [
      "Feelings",
      "Self-Awareness"
    ]
  },
  {
    "category": "Space Weather",
    "question": "What makes your astronaut happy?",
    "easy": "People, pets, games, jokes, quiet, being outside, or something else?",
    "deeper": "How can people tell when you are happy?",
    "traits": [
      "Joy",
      "Communication"
    ]
  },
  {
    "category": "Space Weather",
    "question": "What makes your astronaut worried?",
    "easy": "New things, loud things, mistakes, school, people, or something else?",
    "deeper": "What helps worry get smaller?",
    "traits": [
      "Feelings",
      "Regulation"
    ]
  },
  {
    "category": "Space Weather",
    "question": "What makes your astronaut mad?",
    "easy": "Unfair things, being rushed, being teased, noise, or something else?",
    "deeper": "What helps mad feelings stay safe?",
    "traits": [
      "Feelings",
      "Safety"
    ]
  },
  {
    "category": "Space Weather",
    "question": "What makes your astronaut sad?",
    "easy": "Missing someone, being left out, getting in trouble, or something else?",
    "deeper": "What helps when sadness shows up?",
    "traits": [
      "Feelings",
      "Support"
    ]
  },
  {
    "category": "Space Weather",
    "question": "What does your astronaut do when they feel silly?",
    "easy": "Laugh, joke, move around, make sounds, dance, or something else?",
    "deeper": "Who likes your silly side?",
    "traits": [
      "Joy",
      "Relationships"
    ]
  },
  {
    "category": "Space Weather",
    "question": "What feeling is easy for your astronaut to show?",
    "easy": "Happy, mad, sad, worried, silly, excited, or calm?",
    "deeper": "How do people know you feel that way?",
    "traits": [
      "Feelings",
      "Communication"
    ]
  },
  {
    "category": "Space Weather",
    "question": "What feeling does your astronaut keep inside?",
    "easy": "A feeling people may not see right away.",
    "deeper": "What makes that feeling stay inside?",
    "traits": [
      "Feelings",
      "Self-Awareness"
    ]
  },
  {
    "category": "Space Weather",
    "question": "What feeling do people sometimes miss in your astronaut?",
    "easy": "A feeling people do not always notice.",
    "deeper": "What would help them notice it?",
    "traits": [
      "Communication",
      "Self-Awareness"
    ]
  },
  {
    "category": "Space Weather",
    "question": "If your astronaut had a warning light, when would it turn on?",
    "easy": "When things are too loud, too fast, too unfair, too scary, or too much?",
    "deeper": "What should people do when the warning light turns on?",
    "traits": [
      "Regulation",
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
    "question": "If your crew had a team cheer, what would it be?",
    "easy": "Make up a cheer, saying, or sound.",
    "deeper": "When would your crew use it?",
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
    "question": "If something went wrong on the ship, what would you do first?",
    "easy": "Get help, stay calm, check on people, hide, freeze, or try to fix it?",
    "deeper": "What would help you do that?",
    "traits": [
      "Regulation",
      "Coping"
    ]
  },
  {
    "category": "Mission Jobs",
    "question": "What would be the easiest job for you on the spaceship?",
    "easy": "Pick the job that sounds easiest for you.",
    "deeper": "What makes that job easier than the others?",
    "traits": [
      "Self-Awareness",
      "Confidence"
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
    "question": "What is one thing you like learning about?",
    "easy": "It can be from school, home, games, videos, books, or anywhere.",
    "deeper": "What makes it interesting to you?",
    "traits": [
      "Interests",
      "Curiosity"
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
    "easy": "Something they like, need, feel, or understand now.",
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
    "question": "What are you proud of from the mission?",
    "easy": "Trying, answering, imagining, being honest, or something else?",
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
    "question": "When you look back at Earth, who or what do you think about?",
    "easy": "A person, pet, place, memory, or feeling.",
    "deeper": "Why does that come to mind?",
    "traits": [
      "Attachment",
      "Reflection"
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
    "deeper": "What do you want people to remember about the mission?",
    "traits": [
      "Identity",
      "Self-Esteem"
    ]
  }
];

let state = {
  name: "Star Explorer",
  avatar: "👩🏻‍🚀",
  suit: "classic-white",
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

const avatarOptions = [
  {
    "id": "f1",
    "emoji": "👩🏻‍🚀",
    "label": "Girl Astronaut"
  },
  {
    "id": "f2",
    "emoji": "👩🏼‍🚀",
    "label": "Girl Astronaut"
  },
  {
    "id": "f3",
    "emoji": "👩🏽‍🚀",
    "label": "Girl Astronaut"
  },
  {
    "id": "f4",
    "emoji": "👩🏾‍🚀",
    "label": "Girl Astronaut"
  },
  {
    "id": "f5",
    "emoji": "👩🏿‍🚀",
    "label": "Girl Astronaut"
  },
  {
    "id": "m1",
    "emoji": "👨🏻‍🚀",
    "label": "Boy Astronaut"
  },
  {
    "id": "m2",
    "emoji": "👨🏼‍🚀",
    "label": "Boy Astronaut"
  },
  {
    "id": "m3",
    "emoji": "👨🏽‍🚀",
    "label": "Boy Astronaut"
  },
  {
    "id": "m4",
    "emoji": "👨🏾‍🚀",
    "label": "Boy Astronaut"
  },
  {
    "id": "m5",
    "emoji": "👨🏿‍🚀",
    "label": "Boy Astronaut"
  },
  {
    "id": "n1",
    "emoji": "🧑🏻‍🚀",
    "label": "Astronaut"
  },
  {
    "id": "n2",
    "emoji": "🧑🏼‍🚀",
    "label": "Astronaut"
  },
  {
    "id": "n3",
    "emoji": "🧑🏽‍🚀",
    "label": "Astronaut"
  },
  {
    "id": "n4",
    "emoji": "🧑🏾‍🚀",
    "label": "Astronaut"
  },
  {
    "id": "n5",
    "emoji": "🧑🏿‍🚀",
    "label": "Astronaut"
  },
  {
    "id": "fun1",
    "emoji": "👽",
    "label": "Alien"
  },
  {
    "id": "fun2",
    "emoji": "🤖",
    "label": "Robot"
  },
  {
    "id": "fun3",
    "emoji": "👾",
    "label": "Pixel Alien"
  },
  {
    "id": "fun4",
    "emoji": "🐱",
    "label": "Space Cat"
  },
  {
    "id": "fun5",
    "emoji": "🐶",
    "label": "Space Pup"
  },
  {
    "id": "fun6",
    "emoji": "🦊",
    "label": "Cosmic Fox"
  },
  {
    "id": "fun7",
    "emoji": "🦄",
    "label": "Galaxy Unicorn"
  },
  {
    "id": "fun8",
    "emoji": "🐸",
    "label": "Moon Frog"
  },
  {
    "id": "fun9",
    "emoji": "🐼",
    "label": "Star Panda"
  }
];

const outfitOptions = [
  {
    "id": "classic-white",
    "label": "Classic White",
    "color": "#e3f2fd"
  },
  {
    "id": "moon-silver",
    "label": "Moon Silver",
    "color": "#cfd8dc"
  },
  {
    "id": "galaxy-blue",
    "label": "Galaxy Blue",
    "color": "#64b5f6"
  },
  {
    "id": "comet-teal",
    "label": "Comet Teal",
    "color": "#4dd0e1"
  },
  {
    "id": "rocket-red",
    "label": "Rocket Red",
    "color": "#ef5350"
  },
  {
    "id": "mars-orange",
    "label": "Mars Orange",
    "color": "#ff9800"
  },
  {
    "id": "sun-gold",
    "label": "Sun Gold",
    "color": "#ffd54f"
  },
  {
    "id": "nebula-purple",
    "label": "Nebula Purple",
    "color": "#9575cd"
  },
  {
    "id": "starlight-pink",
    "label": "Starlight Pink",
    "color": "#f48fb1"
  },
  {
    "id": "forest-green",
    "label": "Forest Green",
    "color": "#81c784"
  },
  {
    "id": "midnight-black",
    "label": "Midnight Black",
    "color": "#455a64"
  },
  {
    "id": "rainbow-burst",
    "label": "Rainbow Burst",
    "color": "#ff7043"
  },
  {
    "id": "ice-blue",
    "label": "Ice Blue",
    "color": "#90caf9"
  },
  {
    "id": "planet-lime",
    "label": "Planet Lime",
    "color": "#aed581"
  },
  {
    "id": "cosmic-coral",
    "label": "Cosmic Coral",
    "color": "#ff8a65"
  },
  {
    "id": "aurora-mint",
    "label": "Aurora Mint",
    "color": "#80cbc4"
  },
  {
    "id": "meteor-brown",
    "label": "Meteor Brown",
    "color": "#a1887f"
  },
  {
    "id": "bubblegum",
    "label": "Bubblegum",
    "color": "#f06292"
  },
  {
    "id": "lavender-glow",
    "label": "Lavender Glow",
    "color": "#b39ddb"
  },
  {
    "id": "sunset-peach",
    "label": "Sunset Peach",
    "color": "#ffab91"
  },
  {
    "id": "electric-neon",
    "label": "Electric Neon",
    "color": "#76ff03"
  },
  {
    "id": "ocean-wave",
    "label": "Ocean Wave",
    "color": "#4fc3f7"
  },
  {
    "id": "plasma-plum",
    "label": "Plasma Plum",
    "color": "#ab47bc"
  },
  {
    "id": "solar-flare",
    "label": "Solar Flare",
    "color": "#ffca28"
  }
];


const milestones = [
  { count: 1, title: "Daily Discoveries", headline: "Young Dreamer Names a Spaceship", body: "A brave student began their mission by imagining the perfect spaceship." },
  { count: 10, title: "Daily Discoveries", headline: "Local Student Gets Into Space Camp!", body: "The first mission chapter revealed hopes, personality, and early mission dreams." },
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


function renderAvatarChoices() {
  const grid = document.getElementById("avatarGrid");
  if (!grid) return;
  grid.innerHTML = "";
  avatarOptions.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.className = "avatar-choice" + (option.emoji === state.avatar ? " active" : "");
    btn.type = "button";
    btn.innerHTML = `<div class="avatar-emoji">${option.emoji}</div>`;
    btn.addEventListener("click", () => {
      state.avatar = option.emoji;
      document.querySelectorAll(".avatar-choice").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      updateAvatar();
    });
    grid.appendChild(btn);
  });
}

function renderOutfitChoices() {
  const grid = document.getElementById("outfitGrid");
  if (!grid) return;
  grid.innerHTML = "";
  outfitOptions.forEach(option => {
    const btn = document.createElement("button");
    btn.className = "outfit-choice" + (option.id === state.suit ? " active" : "");
    btn.type = "button";
    btn.innerHTML = `<div class="outfit-swatch" style="background:${option.color}"></div><div class="outfit-label">${option.label}</div>`;
    btn.addEventListener("click", () => {
      state.suit = option.id;
      document.querySelectorAll(".outfit-choice").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      updateAvatar();
    });
    grid.appendChild(btn);
  });
}

renderAvatarChoices();
renderOutfitChoices();

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
  audioStarted = true;
  ensureAudio();
  document.getElementById("setupScreen").classList.add("hidden");
  document.getElementById("gameScreen").classList.remove("hidden");
  updateMusicLevel();
  startSoundscape();
  updateAll();
  drawQuestion();
});

function drawQuestion() {
  if (questions.length === 0) return;

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
  const suit = outfitOptions.find(o => o.id === state.suit);
  const suitText = document.getElementById("suitText");
  if (suitText && suit) suitText.textContent = `Suit: ${suit.label}`;
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

function suitColor(suitId) {
  const suit = outfitOptions.find(o => o.id === suitId);
  return suit ? suit.color : "#64b5f6";
}

function updateAvatar() {
  const avatar = document.getElementById("avatarFace");
  const preview = document.getElementById("avatarPreview");
  if (!avatar) return;
  avatar.textContent = state.avatar;
  avatar.style.filter = `drop-shadow(0 0 12px ${suitColor(state.suit)})`;
  if (preview) {
    preview.style.boxShadow = `0 0 0 3px ${suitColor(state.suit)} inset, 0 0 24px rgba(0,0,0,.25)`;
  }
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
      After a 100-question journey filled with conversation, imagination, courage, and self-expression,
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
let masterGain = null;
let musicNodes = [];
let musicTimers = [];
let audioStarted = false;
let currentMusicLevel = null;

const epicLevels = {
  dream: {
    name: "A Dream Begins",
    root: 110,
    tempo: 1250,
    drumEvery: 2,
    intensity: 0.55,
    melody: [0, 3, 5, 7, 10, 7, 5, 3]
  },
  camp: {
    name: "Space Camp",
    root: 123.47,
    tempo: 1050,
    drumEvery: 2,
    intensity: 0.70,
    melody: [0, 3, 7, 10, 12, 10, 7, 3]
  },
  academy: {
    name: "Astronaut Academy",
    root: 130.81,
    tempo: 880,
    drumEvery: 2,
    intensity: 0.82,
    melody: [0, 5, 7, 10, 12, 15, 12, 7]
  },
  training: {
    name: "Mission Training",
    root: 146.83,
    tempo: 730,
    drumEvery: 1,
    intensity: 0.95,
    melody: [0, 3, 7, 12, 15, 12, 10, 7]
  },
  launch: {
    name: "Launch Day",
    root: 164.81,
    tempo: 560,
    drumEvery: 1,
    intensity: 1.10,
    melody: [0, 7, 10, 12, 15, 19, 15, 12]
  },
  orbit: {
    name: "Orbit",
    root: 98,
    tempo: 1500,
    drumEvery: 3,
    intensity: 0.65,
    melody: [0, 5, 7, 12, 14, 12, 7, 5]
  },
  complete: {
    name: "Mission Complete",
    root: 130.81,
    tempo: 900,
    drumEvery: 1,
    intensity: 1.05,
    melody: [0, 7, 12, 15, 19, 24, 19, 15]
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
    if (audioStarted && state.soundOn) startSoundscape(true);
  }
}

function ensureAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (!masterGain) {
    masterGain = audioCtx.createGain();
    masterGain.gain.value = state.soundOn ? state.volume : 0;
    masterGain.connect(audioCtx.destination);
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
}

function stopSoundscape() {
  musicTimers.forEach(timer => clearInterval(timer));
  musicTimers = [];
  musicNodes.forEach(node => {
    try {
      if (node.stop) node.stop();
      if (node.disconnect) node.disconnect();
    } catch(e) {}
  });
  musicNodes = [];
  currentMusicLevel = null;
}

function midiToFreq(root, semitone) {
  return root * Math.pow(2, semitone / 12);
}

function createOsc(freq, type, gainValue, destination = masterGain) {
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.value = gainValue;
  osc.connect(gain);
  gain.connect(destination);
  osc.start();
  musicNodes.push(osc, gain);
  return { osc, gain };
}

function playShortTone(freq, type, peak, duration, delay = 0, destination = masterGain) {
  if (!audioCtx || !state.soundOn) return;
  const now = audioCtx.currentTime + delay;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(Math.max(peak, 0.0002), now + 0.025);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  osc.connect(gain);
  gain.connect(destination);
  osc.start(now);
  osc.stop(now + duration + 0.04);
}

function playDrum(strength = 1) {
  if (!audioCtx || !state.soundOn) return;
  const now = audioCtx.currentTime;

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(95, now);
  osc.frequency.exponentialRampToValueAtTime(42, now + 0.22);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.12 * strength, now + 0.018);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.42);
  osc.connect(gain);
  gain.connect(masterGain);
  osc.start(now);
  osc.stop(now + 0.45);

  // A tiny noise burst makes the drum feel less like a beep.
  const bufferSize = audioCtx.sampleRate * 0.18;
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 3);
  }
  const noise = audioCtx.createBufferSource();
  const noiseGain = audioCtx.createGain();
  noiseGain.gain.setValueAtTime(0.035 * strength, now);
  noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
  noise.connect(noiseGain);
  noiseGain.connect(masterGain);
  noise.start(now);
  noise.stop(now + 0.2);
}

function startSoundscape(forceRestart = false) {
  audioStarted = true;
  ensureAudio();

  if (!state.soundOn) {
    if (masterGain) masterGain.gain.value = 0;
    return;
  }

  if (masterGain) masterGain.gain.value = state.volume;

  const settings = epicLevels[state.musicLevel] || epicLevels.dream;
  if (!forceRestart && currentMusicLevel === state.musicLevel && musicNodes.length > 0) return;

  stopSoundscape();
  currentMusicLevel = state.musicLevel;

  const intensity = settings.intensity;
  const root = settings.root;

  // Low cello/war horn style drone
  createOsc(root / 2, "sawtooth", 0.010 * intensity);
  createOsc(root, "triangle", 0.012 * intensity);
  createOsc(root * 1.5, "triangle", 0.006 * intensity);

  // Heroic fifths / medieval-fantasy chord bed
  [0, 7, 12, 15].forEach((semi, i) => {
    createOsc(midiToFreq(root, semi), i % 2 ? "triangle" : "sawtooth", (0.006 + i * 0.0015) * intensity);
  });

  let step = 0;

  // Main pulsing rhythm and melody
  const pulseTimer = setInterval(() => {
    if (!audioCtx || !state.soundOn) return;
    const semitone = settings.melody[step % settings.melody.length];
    const freq = midiToFreq(root * 2, semitone);
    playShortTone(freq, "triangle", 0.035 * intensity, 0.34);
    if (step % 2 === 0) {
      playShortTone(freq / 2, "sawtooth", 0.025 * intensity, 0.42);
    }
    if (step % settings.drumEvery === 0) {
      playDrum(intensity);
    }
    step++;
  }, settings.tempo);

  // Higher sparkle/choir-like accent
  const accentTimer = setInterval(() => {
    if (!audioCtx || !state.soundOn) return;
    const pick = settings.melody[Math.floor(Math.random() * settings.melody.length)];
    playShortTone(midiToFreq(root * 4, pick), "sine", 0.018 * intensity, 0.7);
  }, Math.max(settings.tempo * 3, 1500));

  // Slow horn swell
  const hornTimer = setInterval(() => {
    if (!audioCtx || !state.soundOn) return;
    playShortTone(root, "sawtooth", 0.045 * intensity, 1.4);
    playShortTone(root * 1.5, "triangle", 0.025 * intensity, 1.4, 0.08);
  }, Math.max(settings.tempo * 6, 3200));

  musicTimers.push(pulseTimer, accentTimer, hornTimer);
}

function playRewardSound() {
  ensureAudio();
  if (!state.soundOn) return;
  const notes = state.musicLevel === "complete" ? [523, 659, 784, 1046] : [392, 523, 659];
  notes.forEach((freq, i) => {
    playShortTone(freq, "triangle", 0.08, 0.34, i * 0.09);
  });
}

function playChapterFanfare() {
  ensureAudio();
  if (!state.soundOn) return;
  const notes = [196, 294, 392, 523, 659, 784];
  notes.forEach((freq, i) => {
    playShortTone(freq, i % 2 ? "triangle" : "sawtooth", 0.09, 0.55, i * 0.12);
  });
  setTimeout(() => playDrum(1.35), 60);
  setTimeout(() => playDrum(1.15), 420);
}

document.addEventListener("pointerdown", () => {
  if (audioStarted) ensureAudio();
}, { once: false });

setTimeout(() => {
  const soundToggle = document.getElementById("soundToggle");
  const volumeSlider = document.getElementById("volumeSlider");

  if (soundToggle) {
    soundToggle.addEventListener("click", () => {
      state.soundOn = !state.soundOn;
      soundToggle.textContent = state.soundOn ? "🔊 Epic Music On" : "🔇 Music Off";
      ensureAudio();
      if (state.soundOn) {
        startSoundscape(true);
      } else if (masterGain) {
        masterGain.gain.value = 0;
      }
    });
  }

  if (volumeSlider) {
    volumeSlider.addEventListener("input", () => {
      state.volume = Number(volumeSlider.value) / 100;
      ensureAudio();
      if (masterGain) masterGain.gain.value = state.soundOn ? state.volume : 0;
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
