const questions = [
  {
    "category": "Dreams",
    "question": "Tell me about something you want that you do not currently have.",
    "easy": "It could be a thing, a skill, a friendship, a feeling, or something that would make life easier.",
    "deeper": "What would be different if you had it?",
    "traits": [
      "Vision",
      "Hope"
    ]
  },
  {
    "category": "Feelings",
    "question": "If your feeling today was a planet, what kind of planet would it be?",
    "easy": "Hot, cold, stormy, quiet, colorful, rocky, icy, or full of life?",
    "deeper": "What would help that planet feel safer?",
    "traits": [
      "Self-Awareness",
      "Calm"
    ]
  },
  {
    "category": "Brag Cards",
    "question": "Brag about something your brain does well.",
    "easy": "Noticing, remembering, imagining, solving, creating, caring, or asking questions?",
    "deeper": "Who should notice this more?",
    "traits": [
      "Confidence",
      "Strength"
    ]
  },
  {
    "category": "Would You Rather",
    "question": "Would you rather explore space alone or with a crew?",
    "easy": "Alone or with a crew?",
    "deeper": "What feels better about that choice?",
    "traits": [
      "Independence",
      "Teamwork"
    ]
  },
  {
    "category": "Sensory",
    "question": "What would your perfect spaceship sound like?",
    "easy": "Silent, humming, music, nature sounds, robot sounds, or something else?",
    "deeper": "What sounds make it harder to think?",
    "traits": [
      "Sensory Wisdom",
      "Focus"
    ]
  },
  {
    "category": "School",
    "question": "If school was astronaut training, what part would be hardest?",
    "easy": "Listening, sitting, writing, friends, noise, tests, homework, or transitions?",
    "deeper": "What tool would help you train better?",
    "traits": [
      "Problem Solving",
      "Perseverance"
    ]
  },
  {
    "category": "Home",
    "question": "What is one place where your astronaut feels most calm?",
    "easy": "Bedroom, couch, outside, with a pet, with a person, or somewhere imaginary?",
    "deeper": "What makes that place feel calm?",
    "traits": [
      "Calm",
      "Safety"
    ]
  },
  {
    "category": "Friendship",
    "question": "What kind of person would you want on your space crew?",
    "easy": "Funny, calm, smart, kind, brave, quiet, creative, or loyal?",
    "deeper": "What would make them a good teammate?",
    "traits": [
      "Teamwork",
      "Trust"
    ]
  },
  {
    "category": "Communication",
    "question": "How should your crew know when you need help?",
    "easy": "Words, signal, card, drawing, quiet, movement, or asking a grown-up?",
    "deeper": "What makes asking for help hard sometimes?",
    "traits": [
      "Communication",
      "Support"
    ]
  },
  {
    "category": "Coping",
    "question": "Your rocket hits turbulence. What helps your astronaut stay steady?",
    "easy": "Breathing, music, headphones, drawing, movement, space, water, or a trusted person?",
    "deeper": "How can people help without making it worse?",
    "traits": [
      "Calm",
      "Resilience"
    ]
  },
  {
    "category": "Story Builder",
    "question": "Tell a story about an astronaut who feels different from the rest of the crew.",
    "easy": "What makes them different?",
    "deeper": "What does the crew eventually understand about them?",
    "traits": [
      "Creativity",
      "Identity"
    ]
  },
  {
    "category": "Masking",
    "question": "When does your astronaut feel like they have to pretend?",
    "easy": "School, groups, family, public places, online, or around certain people?",
    "deeper": "What would help them feel more like themselves?",
    "traits": [
      "Authenticity",
      "Courage"
    ]
  },
  {
    "category": "Body Clues",
    "question": "What does your astronaut’s body do when it needs a break?",
    "easy": "Quiet, moving, hiding, crying, yelling, freezing, laughing, or feeling tired?",
    "deeper": "What should the crew notice first?",
    "traits": [
      "Self-Awareness",
      "Safety"
    ]
  },
  {
    "category": "Boundaries",
    "question": "What rule should everyone follow on your spaceship?",
    "easy": "Ask before touching, give space, use kind words, keep things quiet, or explain changes?",
    "deeper": "Why does that rule matter?",
    "traits": [
      "Boundaries",
      "Leadership"
    ]
  },
  {
    "category": "Future",
    "question": "What kind of astronaut do you want to become?",
    "easy": "Brave, curious, kind, calm, creative, strong, helpful, or independent?",
    "deeper": "What part of that astronaut already exists in you?",
    "traits": [
      "Vision",
      "Confidence"
    ]
  },
  {
    "category": "Would You Rather",
    "question": "Would you rather have a clear flight plan or freedom to explore?",
    "easy": "Clear plan or freedom?",
    "deeper": "Which one feels safer?",
    "traits": [
      "Focus",
      "Independence"
    ]
  },
  {
    "category": "Brag Cards",
    "question": "Tell me about a time you handled something hard.",
    "easy": "It can be something small.",
    "deeper": "What does that say about you?",
    "traits": [
      "Resilience",
      "Courage"
    ]
  },
  {
    "category": "Dreams",
    "question": "If one thing in your life could get easier, what would you choose?",
    "easy": "School, sleep, friends, talking, feelings, routines, or asking for help?",
    "deeper": "What would be the first sign it was getting easier?",
    "traits": [
      "Hope",
      "Problem Solving"
    ]
  },
  {
    "category": "Drawing",
    "question": "Draw your astronaut’s safe place in space.",
    "easy": "It can be a moon base, spaceship room, planet, cave, or star garden.",
    "deeper": "Who is allowed to visit?",
    "traits": [
      "Creativity",
      "Safety"
    ]
  },
  {
    "category": "Leadership",
    "question": "Your crew is nervous before launch. What would you say to help them?",
    "easy": "You can use kind words, a joke, a plan, or a calm reminder.",
    "deeper": "What kind of leader would you be?",
    "traits": [
      "Leadership",
      "Kindness"
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
  { count: 10, title: "Daily Discoveries", headline: "Local Student Gets Into Space Camp!", body: "Hard work, curiosity, and courage helped this explorer earn a spot." },
  { count: 25, title: "The Future Times", headline: "Young Explorer Shows Outstanding Leadership", body: "The student helped the crew solve problems during training." },
  { count: 50, title: "Space Camp Times", headline: "Future Astronaut Graduates Training Camp", body: "After dedication and growth, this explorer is ready for advanced missions." },
  { count: 75, title: "Galaxy Gazette", headline: "Mission Prep Complete!", body: "The crew reports that this astronaut is nearly ready for launch." },
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
  state.current = questions[Math.floor(Math.random() * questions.length)];
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
      After a 100-question journey filled with reflection, imagination, courage, and problem-solving,
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
      The launch was not only a trip into space, but a story about learning how to understand oneself,
      communicate needs, and keep moving forward.
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
