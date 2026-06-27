# KidTalk Space Journey

**KidTalk Space Journey** is a browser-based therapeutic conversation game for children ages 10 and under. It is designed for counselors, therapists, school clinicians, and other helping professionals who want a playful, structured way to get to know a child.

The child becomes an astronaut moving through a 100-question space mission. Each question is simple, low-pressure, and space-themed, while still helping the clinician learn about the child’s thoughts, feelings, self-esteem, home life, relationships, communication style, regulation needs, interests, strengths, safety, and boundaries.

This is not meant to be a diagnostic tool. It is a rapport-building and conversation-support tool.

## Live Demo

If GitHub Pages is enabled for this repository, the game can be played at:

```text
https://jdisab.github.io/space-journey/
```

## What the Game Does

The child creates an astronaut character and begins a journey toward space. As the child answers questions, the mission progresses from early training to launch.

The game includes:

- 100 unique, non-repeating mission questions
- Simple questions written for children 10 and under
- Space-themed prompts inspired by the style of classic conversation games
- Clinically relevant domains built into the question sequence
- A visual progress bar showing the journey to space
- Character and crew customization
- Milestone “newspaper” achievements
- Trait tracking based on the child’s answers
- A final printable/copyable newspaper-style mission article
- Optional browser-generated music and sound effects

## Clinical Purpose

The questions are designed to help a clinician understand the child through conversation rather than direct assessment.

The game explores:

- Thoughts and feelings
- Self-esteem and identity
- Home and family
- Friendships and relationships
- Communication preferences
- Regulation and coping
- Interests and strengths
- Safety and boundaries
- School experiences
- Hopes and future thinking

The goal is for the therapist to leave with a stronger understanding of who the child is, what helps them feel safe, who matters to them, how they communicate, what they enjoy, what feels hard, and what strengths they already have.

## Question Style

The questions are intentionally simple and concrete.

Examples include:

```text
Who would you bring to space with you?

Who would help you feel safe on the rocket?

What makes your astronaut worried?

What helps when words are hard?

What makes someone a good friend?

What helps you feel safe?

What should the newspaper say about your space journey?
```

The game avoids abstract clinical language and avoids cognitive testing-style prompts such as sequencing or executive functioning tasks. The focus is on conversation, rapport, emotional awareness, relationships, communication, and safety.

## How to Use in Session

A clinician can use the game in several ways:

1. Let the child answer verbally while the therapist types brief notes.
2. Let the child type their own answers when appropriate.
3. Use the “easy” and “deeper” prompts as optional follow-ups.
4. Skip or reframe any question that does not fit the child.
5. Print or copy the final mission article as a child-friendly summary of the journey.

The child does not need to complete all 100 questions in one session. The game can be used flexibly as a warm-up, rapport-building activity, intake support, or ongoing counseling tool.

## Important Note for Clinicians

This game is not a substitute for clinical judgment, informed consent, mandated reporting requirements, crisis assessment, or formal evaluation. It is a supportive conversation tool. Clinicians should adapt the prompts to the child’s developmental level, communication style, culture, family context, and clinical needs.

## Files

This project is a simple static website.

The main files are:

```text
index.html
style.css
script.js
README.md
```

No backend, database, or installation is required.

## How to Run Locally

Download or clone the repository, then open:

```text
index.html
```

in a web browser.

Because this is a static site, it can also be hosted easily through GitHub Pages.

## How to Deploy on GitHub Pages

1. Upload the project files to the root of the repository.
2. Go to the repository on GitHub.
3. Click **Settings**.
4. Click **Pages** in the left sidebar.
5. Under **Source**, choose **Deploy from a branch**.
6. Choose the **main** branch.
7. Choose **/(root)** as the folder.
8. Click **Save**.

After GitHub finishes deploying, the site should be available at:

```text
https://jdisab.github.io/space-journey/
```

## Updating the Question Bank

The questions are stored in `script.js` inside the `questions` array.

Each question uses this format:

```javascript
{
  category: "Mission Feelings",
  question: "What makes your astronaut worried?",
  easy: "New things, loud things, mistakes, people, school, or something else?",
  deeper: "What helps worry get smaller?",
  traits: ["Feelings", "Regulation"]
}
```

To edit the game content, update the questions inside `script.js`, save the file, and upload the revised file to GitHub.

## Design Philosophy

KidTalk Space Journey is built around one idea:

> A child should feel like they are going on an adventure, while the therapist is gently learning who they are.

The space theme gives the child emotional distance and imagination. The question structure gives the therapist clinically useful information. The result is a game that supports connection, curiosity, and understanding.
