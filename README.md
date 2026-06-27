# KidTalk Space Journey

A GitHub Pages-ready therapeutic question game for kids.

## New in this version

After the client answers 100 questions, the app generates a final newspaper article from **The Galaxy Gazette** summarizing:

- The client’s astronaut name
- Their crew companion
- Their strongest character traits
- Their 100-question journey
- Selected typed answers from the mission log
- A final mission-complete summary

The article can be printed or copied.

## Upload to GitHub

Upload these four files:

- index.html
- style.css
- script.js
- README.md

Then enable GitHub Pages:

Settings > Pages > Deploy from branch > main > /root


## Music / Soundscape Themes

This version includes simple browser-generated soundscapes. No MP3 files are needed.

Children can choose:
- Galactic Adventure
- NASA Mission
- Cosmic Arcade
- Magical Galaxy
- Robot Factory
- Calm Cosmic Journey
- Silent Mission

Sound begins only after the mission starts, because browsers require a user click before playing audio.


## Chapter Complete Screens

This version adds achievement-style chapter-complete screens at:

- 10 questions: A Dream Begins
- 25 questions: Space Camp Graduate
- 50 questions: Astronaut Academy
- 75 questions: Launch Training Complete
- 90 questions: Entering Orbit

Each chapter screen includes a mission message, current rank, top skill, and newspaper-style headline.


## Epic Dynamic Music

This version removes the child music picker. The app now uses one consistent epic fantasy-space soundtrack that changes automatically by journey stage:

- Questions 0–9: A Dream Begins
- 10–24: Space Camp
- 25–49: Astronaut Academy
- 50–74: Mission Training
- 75–89: Launch Day
- 90–99: Orbit
- 100: Mission Complete

The music is generated in the browser, so no MP3 files are needed.


## Patch
Fixed submit behavior so the next question appears after each submitted answer, except when a chapter-complete screen appears.
