window.UE5_THEORY_DATA = {
  "version": "3.41.3",
  "buildDate": "2026-08-31",
  "xp": 25,
  "passPercent": 67,
  "paths": [
    {
      "id": "foundations",
      "title": "Design Foundations",
      "icon": "◈",
      "short": "Understand what designers actually control: rules, loops, systems and intended experience."
    },
    {
      "id": "decisions",
      "title": "Player Decisions",
      "icon": "♢",
      "short": "Agency, meaningful choice, uncertainty, risk and trade-offs."
    },
    {
      "id": "systems",
      "title": "Systems & Balance",
      "icon": "⚙",
      "short": "Resources, economies, feedback loops, fairness, progression and challenge."
    },
    {
      "id": "experience",
      "title": "Player Experience",
      "icon": "◎",
      "short": "Feedback, pacing, onboarding, accessibility and the feel of play."
    },
    {
      "id": "space",
      "title": "Space & World",
      "icon": "⌖",
      "short": "Affordances, guidance, environmental storytelling and emergent play."
    },
    {
      "id": "process",
      "title": "Design Process",
      "icon": "↻",
      "short": "Scope, prototypes, playtests, iteration and translating games between media."
    }
  ],
  "lab": {
    "title": "Board Game Lab — see design in the open",
    "duration": "20–30 min",
    "intro": "Board games make rules, turns, resources and player decisions visible. Pick one of the physical games in the classroom and play it as a designer: you are not playing just to win, you are collecting design evidence.",
    "rules": [
      "Groups of 3–4. Pick a game you have not all analysed before.",
      "Read enough rules to begin, then notice where the rulebook helps or fails.",
      "Play for at least 15–20 minutes or one meaningful round/phase.",
      "Every person records observations. One person should not become the group “rules brain”."
    ],
    "prompts": [
      "What is the turn loop?",
      "What are the three most meaningful decisions?",
      "Where does randomness enter: before or after decisions?",
      "How do players affect each other?",
      "What resource or limit creates pressure?",
      "What rule did somebody forget or misunderstand?",
      "What physical component communicates information well?",
      "What principle would you borrow—not copy—for your own design?"
    ],
    "evidence": "One group sheet or slide with the game title, 6–8 observations and one mechanic/principle worth stealing thoughtfully.",
    "note": "Physical games teach handling, turn length, component readability and rule burden in ways a videogame cannot. This lab is optional for general Theory study, but it is especially useful before a tabletop adaptation project."
  },
  "lessons": [
    {
      "id": "what-is-game-design",
      "title": "What Game Design Actually Is",
      "path": "foundations",
      "icon": "◈",
      "short": "Move beyond theme and features: design is the behaviour created by rules, information and player decisions.",
      "definition": "Game design is the deliberate shaping of rules, systems, information, goals and feedback so that players make particular kinds of decisions and experience particular kinds of play.",
      "why": "Students often describe games through story, genre and assets. Those matter, but a designer needs to explain what the player repeatedly does, what limits them, what information they receive and why one action becomes more interesting than another.",
      "keyIdeas": [
        "A mechanic is not automatically a good mechanic; ask what behaviour it creates.",
        "Theme describes the fiction. Systems determine what the player can actually do.",
        "Design is about relationships: rules interact, players adapt, unexpected strategies appear.",
        "A feature list is not a design explanation."
      ],
      "mistakes": [
        "“It has crafting, bosses and a skill tree” without explaining why.",
        "Adding systems because another successful game has them.",
        "Starting final art before the rules have proven themselves."
      ],
      "diagram": {
        "title": "Design chain",
        "nodes": [
          "RULES / INFORMATION",
          "PLAYER DECISIONS",
          "BEHAVIOUR",
          "PLAYER EXPERIENCE"
        ],
        "caption": "Designers directly change rules and information. The experience emerges through what players do with them."
      },
      "example": {
        "game": "INSIDE",
        "title": "Design is what the player does",
        "body": "INSIDE is remembered for atmosphere, but its design is visible in the restrictions placed on the player: a small verb set, readable threats, tightly controlled information and spaces that turn simple actions into tension and curiosity.",
        "src": "https://cdn.akamai.steamstatic.com/steam/apps/304430/header.jpg",
        "sourceUrl": "https://playdead.com/games/inside/",
        "sourceTitle": "Playdead — INSIDE"
      },
      "sources": [
        {
          "title": "INSIDE Presentations — Playdead",
          "url": "https://blog.playdead.com/articles/inside_presentations/inside_publications.html",
          "note": "Playdead collects its own GDC talks, videos and publications on how INSIDE was built and refined.",
          "kind": "Developer resources"
        },
        {
          "title": "Rules of Play — MIT Press",
          "url": "https://mitpress.mit.edu/9780262240451/rules-of-play/",
          "note": "A major design text on rules, systems, meaningful play, information and emergence.",
          "kind": "Further reading"
        },
        {
          "title": "Design in Detail — GDC Vault",
          "url": "https://www.gdcvault.com/play/1015851/Design-in-Detail-Identifying-the",
          "note": "A practical design talk about finding the variables that actually drive play.",
          "kind": "Developer talk"
        }
      ],
      "task": {
        "title": "Strip a game down to design",
        "brief": "Choose a game you know well and explain it without using story, characters, graphics or genre as your main answer.",
        "steps": [
          "Write the player goal.",
          "List the 3–5 actions repeated most often.",
          "Identify one limit or resource that forces decisions.",
          "Describe the feedback that tells the player whether they are succeeding."
        ],
        "evidence": "A short systems description or annotated screenshot.",
        "stretch": "Try the same game again: which single rule could you change to create a noticeably different experience?"
      },
      "quiz": [
        {
          "q": "A pitch says “It is a dark sci-fi game with monsters, crafting and a huge map.” What is most clearly missing?",
          "options": [
            "A detailed lore timeline",
            "An explanation of player decisions and system relationships",
            "More features",
            "A final art style"
          ],
          "correct": 1,
          "feedback": "Design needs to explain what players do and why those actions matter, not just theme and features."
        },
        {
          "q": "Which change is most directly a game-design change?",
          "options": [
            "Replacing a texture",
            "Changing a rule so healing consumes a scarce shared resource",
            "Increasing render resolution",
            "Changing the logo font"
          ],
          "correct": 1,
          "feedback": "Rules and resource relationships directly change player decisions."
        },
        {
          "q": "Why prototype before final art?",
          "options": [
            "Prototypes always look better",
            "It makes the game longer",
            "You can test whether the rules create useful play before expensive polish",
            "It removes the need for playtesting"
          ],
          "correct": 2,
          "feedback": "A cheap prototype answers design questions while changes are still easy."
        }
      ],
      "duration": "15–20 min",
      "caseStudy": {
        "intro": "INSIDE is useful because almost none of its identity depends on a feature list. Its effect comes from a tightly controlled relationship between verbs, information, threat and space.",
        "observations": [
          "The player has a deliberately small verb set. Running, jumping, grabbing and pushing become interesting because the context around those actions keeps changing.",
          "The world communicates danger and possibility visually. There is almost no HUD telling the player what an object is for; animation, staging and cause-and-effect do that work.",
          "New situations recombine familiar rules instead of constantly adding unrelated mechanics. The design gets richer without the control scheme becoming larger."
        ],
        "question": "If you removed INSIDE’s art style and story, which rules and information choices would still create tension?"
      },
      "watch": {
        "kind": "Official trailer",
        "title": "INSIDE Trailer 2016 — Playdead",
        "url": "https://www.youtube.com/watch?v=E0V2rPVQWfM",
        "youtubeId": "E0V2rPVQWfM",
        "watchFor": "How much of the game is communicated through staging, animation, threat and simple actions rather than UI or a feature list.",
        "question": "Which design rule can you infer from the footage without anybody explaining it? "
      }
    },
    {
      "id": "core-gameplay-loops",
      "title": "Core Gameplay Loops",
      "path": "foundations",
      "icon": "↺",
      "short": "Find what the player repeatedly does and why they want to do it again.",
      "definition": "A core gameplay loop is the repeated cycle of actions, feedback and rewards that structures moment-to-moment play. Larger progression loops can sit around the core loop.",
      "why": "If the repeated activity is dull, adding more content rarely fixes the underlying problem. Identifying the loop also helps teams decide what must survive when adapting or simplifying a game.",
      "keyIdeas": [
        "Write loops as verbs: explore → gather → craft → build.",
        "Separate the short moment-to-moment loop from longer progression.",
        "Rewards should feed back into future decisions rather than merely exist as numbers.",
        "A loop should explain why the next cycle is different or more interesting."
      ],
      "mistakes": [
        "Calling a linear list of every game feature a “loop”.",
        "Using vague nouns instead of player actions.",
        "Adding progression rewards that do not change future play."
      ],
      "diagram": {
        "title": "Nested loops",
        "nodes": [
          "DO",
          "GET FEEDBACK",
          "GAIN / LOSE",
          "CHOOSE NEXT ACTION",
          "DO AGAIN"
        ],
        "caption": "The useful question is what changes before the player repeats the cycle."
      },
      "example": {
        "game": "Death Stranding",
        "title": "Preparation → traversal → delivery → improvement",
        "body": "Death Stranding makes delivery into a repeatable decision loop. Cargo, terrain, route choice and tools affect how a journey plays; the result of that journey then changes what the player can prepare for next.",
        "src": "https://cdn.akamai.steamstatic.com/steam/apps/1850570/header.jpg",
        "sourceUrl": "https://www.kojimaproductions.jp/en/death-stranding-directors-cut",
        "sourceTitle": "Kojima Productions — Death Stranding Director’s Cut"
      },
      "sources": [
        {
          "title": "The Hideo Kojima Death Stranding Interview — PlayStation Blog",
          "url": "https://blog.playstation.com/2017/02/23/the-hideo-kojima-death-stranding-interview-strands-decima-and-guerrilla-games/",
          "note": "Kojima discusses the game’s core idea of connection and the design thinking behind the new IP.",
          "kind": "Developer interview"
        },
        {
          "title": "Death Stranding: An AI Postmortem — GDC Vault",
          "url": "https://www.gdcvault.com/play/1027144",
          "note": "A Kojima Productions postmortem covering navigation and AI problems created by the game’s unusual terrain and traversal.",
          "kind": "Developer talk"
        },
        {
          "title": "The Turducken Method of Game Design — GDC Vault",
          "url": "https://www.gdcvault.com/play/1014958/The-Turducken-Method-of-Game",
          "note": "Useful background on nested activity and reward loops.",
          "kind": "Further reading"
        }
      ],
      "task": {
        "title": "Loop it",
        "brief": "Pick one game every member of your group knows.",
        "steps": [
          "Write the core loop in no more than five verbs.",
          "Add one piece of feedback after each verb.",
          "Circle the point where the player makes the most interesting decision.",
          "Identify one larger progression loop around it."
        ],
        "evidence": "A one-page loop diagram.",
        "stretch": "Remove one step. Does the game still feel like itself?"
      },
      "quiz": [
        {
          "q": "Which is the clearest core loop?",
          "options": [
            "Fantasy → dragons → castle → boss",
            "Explore → gather → craft → build → explore",
            "Inventory → graphics → music → story",
            "Start → middle → ending"
          ],
          "correct": 1,
          "feedback": "A useful core loop describes repeated player actions."
        },
        {
          "q": "A reward never affects any future decision. What is the design risk?",
          "options": [
            "The loop can feel disconnected or cosmetic",
            "The frame rate will drop",
            "The story becomes non-linear",
            "The UI must be blue"
          ],
          "correct": 0,
          "feedback": "Rewards are strongest when they change what the player can attempt or how they choose."
        },
        {
          "q": "Why identify the core loop before adapting a videogame to tabletop?",
          "options": [
            "To copy every animation",
            "To identify the repeated experience worth preserving",
            "To choose the box size",
            "To avoid all randomness"
          ],
          "correct": 1,
          "feedback": "The loop helps separate essential play from platform-specific detail."
        }
      ],
      "duration": "15–20 min",
      "caseStudy": {
        "intro": "Death Stranding turns an activity that could have been a simple objective marker—deliver cargo—into a loop of preparation, route choice, execution, evaluation and improved future capability.",
        "observations": [
          "Preparation matters before movement begins: cargo weight, tools, footwear, route and expected terrain change what the next journey will feel like.",
          "Traversal is the play, not empty travel between encounters. Balance, terrain reading, ladders, ropes and vehicles continuously ask for small decisions.",
          "A completed delivery feeds the next loop through ratings, network connection, equipment and shared structures, so the next journey starts from a changed state."
        ],
        "question": "Where does the loop create a new decision for the next delivery instead of simply giving the player a bigger number?"
      },
      "watch": {
        "kind": "Official gameplay & trailers",
        "title": "Death Stranding videos — PlayStation",
        "url": "https://www.playstation.com/en-gb/games/death-stranding/",
        "watchFor": "Preparation, cargo, terrain reading, traversal tools and the way completed journeys feed future journeys.",
        "question": "Where can you see the loop changing the player’s next decision? "
      }
    },
    {
      "id": "mda-framework",
      "title": "MDA Framework",
      "path": "foundations",
      "icon": "MDA",
      "short": "Use Mechanics → Dynamics → Aesthetics to connect rules to player experience.",
      "definition": "MDA stands for Mechanics, Dynamics and Aesthetics. Mechanics are the rules/components, dynamics are the behaviours that emerge during play, and aesthetics are the desired emotional experiences or forms of fun.",
      "why": "MDA stops design conversations ending at “add a mechanic”. It asks what behaviour that mechanic is likely to produce and whether that behaviour supports the experience you want.",
      "keyIdeas": [
        "Mechanics are the designer-facing rules and systems.",
        "Dynamics are what happens when players interact with those systems over time.",
        "Aesthetics are experiences such as challenge, discovery, expression, fellowship or tension.",
        "Designers often work from desired experience backwards; players encounter mechanics first and experience the result."
      ],
      "mistakes": [
        "Treating “aesthetics” as only graphics.",
        "Assuming one mechanic guarantees one emotion.",
        "Ignoring interactions between mechanics."
      ],
      "diagram": {
        "title": "MDA",
        "nodes": [
          "MECHANICS",
          "DYNAMICS",
          "AESTHETICS"
        ],
        "caption": "Rule → behaviour → experience. Then work backwards to refine the rule."
      },
      "example": {
        "game": "Journey",
        "title": "Mechanics can be designed toward an emotion",
        "body": "Journey uses a deliberately small set of mechanics—movement, jumping, cloth interaction and a wordless call. Their interaction with anonymous co-op produces dynamics such as waiting, following and helping, supporting aesthetics such as companionship, wonder, vulnerability and loss.",
        "src": "https://cdn.akamai.steamstatic.com/steam/apps/638230/header.jpg",
        "sourceUrl": "https://thatgamecompany.com/journey/",
        "sourceTitle": "thatgamecompany — Journey"
      },
      "sources": [
        {
          "title": "MDA: A Formal Approach to Game Design and Game Research — AAAI",
          "url": "https://aaai.org/papers/ws04-04-001-mda-a-formal-approach-to-game-design-and-game-research/",
          "note": "The original MDA paper: Mechanics → Dynamics → Aesthetics.",
          "kind": "Research"
        },
        {
          "title": "Designing Journey — GDC Vault",
          "url": "https://www.gdcvault.com/play/1017700/Designing",
          "note": "Jenova Chen explains the experiments, failures and design decisions used to realise Journey’s emotional arc.",
          "kind": "Developer talk"
        },
        {
          "title": "Journey — thatgamecompany",
          "url": "https://thatgamecompany.com/journey/",
          "note": "The creator’s official overview emphasises anonymous companionship, the mountain goal and the game’s deliberately minimal interaction model.",
          "kind": "Official"
        }
      ],
      "task": {
        "title": "Reverse-engineer an experience",
        "brief": "Start with one feeling your game creates.",
        "steps": [
          "Name the desired aesthetic/experience.",
          "Describe one player behaviour that produces it.",
          "Identify the mechanics encouraging that behaviour.",
          "Change one mechanic and predict the new dynamic."
        ],
        "evidence": "A three-column M → D → A analysis.",
        "stretch": "Find an example where the same mechanic creates a different dynamic in another game."
      },
      "quiz": [
        {
          "q": "In MDA, players repeatedly saving resources because healing is scarce is best described as what?",
          "options": [
            "Mechanic",
            "Dynamic",
            "Aesthetic",
            "Art direction"
          ],
          "correct": 1,
          "feedback": "Scarcity is the mechanic; cautious saving is behaviour that emerges from it."
        },
        {
          "q": "In MDA, “tension” is usually discussed as what?",
          "options": [
            "Aesthetic / player experience",
            "Source code",
            "Mechanic",
            "Texture"
          ],
          "correct": 0,
          "feedback": "Aesthetics are the experiential outcomes, not merely visual style."
        },
        {
          "q": "Your game should feel desperate, but players hoard 30 healing items. Which MDA move is most useful?",
          "options": [
            "Add more concept art",
            "Change mechanics that create the hoarding dynamic",
            "Rename the items",
            "Ignore player behaviour"
          ],
          "correct": 1,
          "feedback": "MDA encourages changing rules to produce the desired behaviour and experience."
        }
      ],
      "duration": "15–20 min",
      "caseStudy": {
        "intro": "Journey is unusually clear for MDA analysis because its mechanics are sparse, while the behaviour and emotional experience created from them are much richer.",
        "observations": [
          "Mechanics: movement, jumping/gliding, cloth interaction and one wordless call give the player only a few direct actions.",
          "Dynamics: anonymous players wait, follow, separate, help, copy and communicate through movement because conventional chat and identity are absent.",
          "Aesthetics: those dynamics support wonder, companionship, vulnerability, loneliness and loss without the game needing a dialogue choice labelled “be kind”."
        ],
        "question": "Which emotional part of Journey is designed directly, and which part emerges from players using the mechanics together?"
      },
      "watch": {
        "kind": "Official trailer",
        "title": "Journey — first trailer from thatgamecompany / PlayStation",
        "url": "https://blog.playstation.com/2010/12/10/thatgamecompany-shares-journeys-first-trailer/",
        "watchFor": "The extremely small set of visible mechanics and the emotional tone created around them.",
        "question": "Separate one thing the player can DO from one thing the sequence makes the player FEEL. "
      }
    },
    {
      "id": "pillars-and-abstraction",
      "title": "Game Pillars & Abstraction",
      "path": "foundations",
      "icon": "▣",
      "short": "Protect what matters and simplify everything else.",
      "definition": "Game pillars are a small set of statements that guide design decisions. Abstraction is the deliberate simplification of a complex action or system while preserving the part that matters to the experience.",
      "why": "Pillars prevent feature creep. Abstraction makes games manageable—especially board games, where the computer is no longer calculating physics, AI, inventories and hundreds of hidden values for you.",
      "keyIdeas": [
        "Good pillars are specific enough to reject ideas.",
        "Every major feature should support at least one pillar.",
        "Abstraction removes detail, not meaning.",
        "Choose the simplest representation that still creates the intended decision."
      ],
      "mistakes": [
        "Pillars such as “fun” or “good graphics” that cannot guide a choice.",
        "Trying to simulate every detail of reality.",
        "Assuming more complexity means more depth."
      ],
      "diagram": {
        "title": "Abstraction test",
        "nodes": [
          "COMPLEX REAL / DIGITAL SYSTEM",
          "WHAT DECISION MATTERS?",
          "SIMPLE REPRESENTATION",
          "TEST EXPERIENCE"
        ],
        "caption": "Keep the decision; simplify the calculation."
      },
      "example": {
        "game": "Control",
        "title": "A strange world still needs a coherent design promise",
        "body": "Control combines supernatural powers, destructive combat, investigation and an impossible bureaucratic building. Strong creative principles keep those very different ingredients pointing toward the same experience instead of becoming an unrelated feature pile.",
        "src": "https://cdn.akamai.steamstatic.com/steam/apps/870780/header.jpg",
        "sourceUrl": "https://www.remedygames.com/games/control",
        "sourceTitle": "Remedy Entertainment — Control"
      },
      "sources": [
        {
          "title": "Control freak: Inside the narrative design of Remedy’s least linear game — Game Developer",
          "url": "https://www.gamedeveloper.com/design/-i-control-i-freak-inside-the-narrative-design-of-remedy-s-least-linear-game",
          "note": "Remedy narrative designer Brooke Maggs discusses how world, level, combat and narrative teams kept the Oldest House coherent.",
          "kind": "Developer interview"
        },
        {
          "title": "Rules of Play — MIT Press",
          "url": "https://mitpress.mit.edu/9780262240451/rules-of-play/",
          "note": "Useful wider reading on systems, rules and abstraction.",
          "kind": "Further reading"
        },
        {
          "title": "Designing Assassin’s Creed II — GDC Vault",
          "url": "https://www.gdcvault.com/play/1012306/Designing-Assassin-s-Creed",
          "note": "A professional case study in turning high-level creative goals into production decisions.",
          "kind": "Developer talk"
        }
      ],
      "task": {
        "title": "Write pillars that can say “no”",
        "brief": "Create three pillars for your current game idea.",
        "steps": [
          "Write each as a short design promise.",
          "For each pillar, give one feature that supports it.",
          "Give one tempting feature you would reject because it fights the pillars.",
          "Abstract one complicated system into cards, tokens, a meter or a simple rule."
        ],
        "evidence": "Three pillars plus one abstraction sketch.",
        "stretch": "Ask another team whether they could make a design decision using your pillars without you explaining them."
      },
      "quiz": [
        {
          "q": "Which is the strongest game pillar?",
          "options": [
            "Make it fun",
            "High quality",
            "Every encounter rewards planning over reflex",
            "Use nice graphics"
          ],
          "correct": 2,
          "feedback": "A useful pillar can guide and reject concrete design decisions."
        },
        {
          "q": "What is good abstraction?",
          "options": [
            "Deleting all mechanics",
            "Simplifying a system while preserving the important decision or experience",
            "Making every value random",
            "Replacing all rules with story"
          ],
          "correct": 1,
          "feedback": "Abstraction should reduce handling without deleting the meaningful part."
        },
        {
          "q": "A tabletop adaptation tracks 27 hidden statistics by hand. What should the team ask first?",
          "options": [
            "Can we add 10 more?",
            "Which of these values actually create meaningful decisions?",
            "Can the font be smaller?",
            "Can one student do the maths?"
          ],
          "correct": 1,
          "feedback": "The best simplification starts by identifying which variables genuinely affect play."
        }
      ],
      "duration": "15–20 min",
      "caseStudy": {
        "intro": "Control has a lot competing for attention—telekinesis, gunplay, investigation, horror, bureaucracy and an impossible building—so coherence depends on strong creative principles.",
        "observations": [
          "The Oldest House, supernatural bureaucracy and altered objects all support the same “ordinary institution meets impossible phenomenon” identity.",
          "Combat powers reinforce that identity: launching chunks of the environment makes the world itself feel unstable and usable.",
          "Side material, architecture, UI language and mission structure can vary widely while still feeling like Control because they return to the same core pillars."
        ],
        "question": "Which feature could you remove from Control without damaging its pillars, and which removal would make it stop feeling like Control?"
      },
      "watch": {
        "kind": "Official gameplay trailer",
        "title": "Control — Gameplay Trailer",
        "url": "https://www.youtube.com/watch?v=jnO4oaSRZj8",
        "youtubeId": "jnO4oaSRZj8",
        "watchFor": "How powers, destruction, architecture, colour, sound and supernatural bureaucracy all reinforce the same identity.",
        "question": "Which repeated design idea connects the combat to the world rather than leaving them as separate features? "
      }
    },
    {
      "id": "player-agency",
      "title": "Player Agency",
      "path": "decisions",
      "icon": "⇢",
      "short": "Give players decisions that can genuinely affect what happens.",
      "definition": "Player agency is the player’s capacity to make intentional choices that affect game state, strategy, route, relationships or outcomes.",
      "why": "Agency is central to interactive media. A game can contain lots of buttons but very little agency if the “correct” action is always obvious or outcomes are unaffected by the choice.",
      "keyIdeas": [
        "Action is not the same as agency.",
        "Players need enough information to form an intention.",
        "Consequences can be immediate or delayed, but should be legible enough to learn from.",
        "Constraints can increase agency by making choices difficult rather than infinite."
      ],
      "mistakes": [
        "Offering two options that lead to the same result with no meaningful difference.",
        "Hiding all information, then blaming the player for a random outcome.",
        "Confusing freedom with unlimited content."
      ],
      "diagram": {
        "title": "Agency loop",
        "nodes": [
          "INFORMATION",
          "INTENTION",
          "CHOICE",
          "CONSEQUENCE",
          "LEARN"
        ],
        "caption": "Players need to understand enough of the consequence to make the next decision better."
      },
      "example": {
        "game": "Baldur’s Gate 3",
        "title": "Agency comes from viable approaches and consequences",
        "body": "Baldur’s Gate 3 repeatedly lets players combine dialogue, movement, objects, spells, stealth and combat in different ways. Agency comes from the game recognising those approaches and allowing choices to alter situations—not simply from offering more buttons.",
        "src": "https://cdn.akamai.steamstatic.com/steam/apps/1086940/header.jpg",
        "sourceUrl": "https://baldursgate3.game/",
        "sourceTitle": "Larian Studios — Baldur’s Gate 3"
      },
      "sources": [
        {
          "title": "The Secrets of Baldur’s Gate 3 — GDC Vault",
          "url": "https://gdcvault.com/play/1034610/The-Secrets-of-Baldur-s",
          "note": "Swen Vincke gives a behind-the-scenes account of the design and development challenges behind Larian’s systemic RPG.",
          "kind": "Developer talk"
        },
        {
          "title": "Community Update #26 — Larian Studios",
          "url": "https://baldursgate3.game/news/community-update-26-evil-endings-new-beginnings_117",
          "note": "An official example of Larian continuing to expand outcomes and consequences around player choice.",
          "kind": "Official"
        },
        {
          "title": "Decisions That Matter — GDC Vault",
          "url": "https://www.gdcvault.com/play/1020570/Level-Design-in-a-Day",
          "note": "A useful professional discussion of making decisions matter to the player.",
          "kind": "Further reading"
        }
      ],
      "task": {
        "title": "Agency audit",
        "brief": "Choose one 30-second section of play.",
        "steps": [
          "List every decision the player makes.",
          "Cross out decisions with an obviously dominant answer.",
          "Mark which decisions change later options.",
          "Rewrite one weak decision so two choices have credible advantages."
        ],
        "evidence": "A before/after choice diagram.",
        "stretch": "Find a moment where deliberately limiting options makes a decision stronger."
      },
      "quiz": [
        {
          "q": "Which situation has the most agency?",
          "options": [
            "Roll a die and move exactly that many spaces",
            "Choose between a safe route with low reward and a risky route with scarce loot",
            "Watch a cutscene",
            "Press the only available button"
          ],
          "correct": 1,
          "feedback": "Agency comes from intentional choices with meaningful consequences."
        },
        {
          "q": "Why can constraints increase agency?",
          "options": [
            "They remove all choice",
            "They force players to prioritise between limited options",
            "They guarantee victory",
            "They make controls harder"
          ],
          "correct": 1,
          "feedback": "Scarcity and constraints can make available choices more meaningful."
        },
        {
          "q": "A player selects “spare” or “attack”, but both trigger the same scene and reward. What is the main issue?",
          "options": [
            "Low texture resolution",
            "Apparent choice without meaningful consequence",
            "Too much negative feedback",
            "Excessive onboarding"
          ],
          "correct": 1,
          "feedback": "The interface offers choice, but the game state does not meaningfully respond."
        }
      ],
      "duration": "15–20 min",
      "caseStudy": {
        "intro": "Baldur’s Gate 3 is a strong agency example because the game recognises different intentions through overlapping systems instead of restricting every problem to one authored solution.",
        "observations": [
          "Dialogue, stealth, combat, positioning, objects, spells and environmental systems can all become ways of approaching the same situation.",
          "Agency is reinforced when the world acknowledges what happened—characters react, later situations change and consequences persist beyond the button press.",
          "Failure can create a new state rather than simply a reload prompt. A poor roll or unintended outcome may redirect the story and still be playable."
        ],
        "question": "Find one moment where the game accepts a player solution the designer could not present as a single menu option."
      },
      "watch": {
        "kind": "Gameplay + developer interview",
        "title": "Baldur’s Gate 3 gameplay explained with Larian",
        "url": "https://www.youtube.com/watch?v=rHzXgnvNCT4",
        "youtubeId": "rHzXgnvNCT4",
        "watchFor": "Alternative approaches, environmental interaction, stealth and how system rules create options beyond a dialogue menu.",
        "question": "Which moment demonstrates recognised player intent rather than simply a large number of buttons? "
      }
    },
    {
      "id": "meaningful-choice",
      "title": "Meaningful Choice & Trade-offs",
      "path": "decisions",
      "icon": "⇄",
      "short": "Strong choices make players give something up.",
      "definition": "A meaningful choice presents alternatives with different, understandable consequences. A trade-off means gaining one advantage requires accepting a cost, risk or lost opportunity.",
      "why": "Interesting decisions often emerge because no option dominates in every situation. Trade-offs create strategy, discussion and replayability.",
      "keyIdeas": [
        "If one option is always better, it is not much of a choice.",
        "Opportunity cost is powerful: choosing A means not choosing B.",
        "Context can make the same option strong now and weak later.",
        "Good choices reveal player priorities."
      ],
      "mistakes": [
        "Balancing by making every option identical.",
        "Making the “bad” option a trap with no plausible use.",
        "Adding ten choices when only two are meaningfully different."
      ],
      "diagram": {
        "title": "Trade-off",
        "nodes": [
          "OPTION A",
          "GAIN A / LOSE B",
          "CONTEXT",
          "GAIN B / LOSE A",
          "OPTION B"
        ],
        "caption": "The tension sits in what you give up, not merely in the number of buttons."
      },
      "example": {
        "game": "Papers, Please",
        "title": "A choice matters when every option costs something",
        "body": "Papers, Please turns document checking into repeated trade-offs. Processing people quickly earns the money your family needs, but rules become increasingly demanding and individual travellers create moral pressure. The interesting choice is rarely “good or evil”; it is what cost you are willing to accept.",
        "src": "https://cdn.akamai.steamstatic.com/steam/apps/239030/header.jpg",
        "sourceUrl": "https://papersplea.se/",
        "sourceTitle": "Lucas Pope — Papers, Please"
      },
      "sources": [
        {
          "title": "Road to the IGF: Lucas Pope’s Papers, Please — Game Developer",
          "url": "https://www.gamedeveloper.com/design/road-to-the-igf-lucas-pope-s-i-papers-please-i-",
          "note": "Lucas Pope explains how bureaucracy, throughput and changing rules became the game’s mechanics.",
          "kind": "Developer interview"
        },
        {
          "title": "Decisions That Matter — GDC Vault",
          "url": "https://www.gdcvault.com/play/1020570/Level-Design-in-a-Day",
          "note": "A design talk about creating choices that produce meaningful consequences.",
          "kind": "Developer talk"
        },
        {
          "title": "Rules of Play — MIT Press",
          "url": "https://mitpress.mit.edu/9780262240451/rules-of-play/",
          "note": "Background reading on meaningful play and system relationships.",
          "kind": "Further reading"
        }
      ],
      "task": {
        "title": "Make a choice hurt a little",
        "brief": "Take one weak binary choice in a game or prototype.",
        "steps": [
          "Write what option A gains.",
          "Write what option A gives up.",
          "Do the same for B.",
          "Add context that makes each option sensible in a different situation."
        ],
        "evidence": "A two-column trade-off table.",
        "stretch": "Test it on someone else. If they always choose the same option, ask why."
      },
      "quiz": [
        {
          "q": "Which is the best example of a trade-off?",
          "options": [
            "Sword A does 10 damage; Sword B does 2 damage with no other difference",
            "Heavy armour reduces damage but slows dodging",
            "Choose red or blue when colour changes nothing",
            "Take 100 gold or 1 gold"
          ],
          "correct": 1,
          "feedback": "The armour decision exchanges protection for mobility."
        },
        {
          "q": "What is opportunity cost?",
          "options": [
            "The rendering cost of an item",
            "What you give up by choosing one option instead of another",
            "The retail price",
            "A random penalty"
          ],
          "correct": 1,
          "feedback": "Opportunity cost is the value of the alternative you cannot also take."
        },
        {
          "q": "Players choose the same upgrade 95% of the time. What should you investigate first?",
          "options": [
            "Whether one option dominates the others",
            "The title screen",
            "The music volume",
            "How many polygons the upgrade has"
          ],
          "correct": 0,
          "feedback": "A dominant option often means the choice lacks credible trade-offs."
        }
      ],
      "duration": "15–20 min",
      "caseStudy": {
        "intro": "Papers, Please makes tiny administrative decisions meaningful by connecting them to time pressure, income, rules and human consequences.",
        "observations": [
          "Every extra check costs time, so being careful has an economic price rather than being an obviously correct strategy.",
          "Rules change and accumulate, turning familiar document checks into new trade-offs instead of repeating the exact same puzzle.",
          "Individual travellers create pressure against the system: helping someone may feel morally right while threatening the inspector’s wages or family."
        ],
        "question": "Which choice would become meaningless if the family economy or daily time limit disappeared?"
      },
      "watch": {
        "kind": "Official trailer",
        "title": "Papers, Please — creator press kit trailers",
        "url": "https://papersplea.se/presskit/",
        "watchFor": "The tension between speed, accuracy, changing rules and the human consequences of a stamp.",
        "question": "What makes “approve or deny” more than a binary button choice? "
      }
    },
    {
      "id": "risk-reward",
      "title": "Risk vs Reward",
      "path": "decisions",
      "icon": "⚠",
      "short": "Create tension by making players decide how much they are willing to lose for a possible gain.",
      "definition": "Risk–reward design asks players to weigh a potential benefit against the chance or cost of failure. The best version is usually legible enough that players can deliberately choose their level of exposure.",
      "why": "Risk creates tension because the player owns the decision. It is more interesting to say “I pushed too far” than to lose to an unknowable coin flip.",
      "keyIdeas": [
        "Players should understand the broad shape of the risk.",
        "Reward should scale with meaningful exposure, not arbitrary punishment.",
        "Banking, retreating and “one more room” decisions are classic risk structures.",
        "Different player types may accept different risk."
      ],
      "mistakes": [
        "Hiding the risk completely.",
        "Punishing failure so severely that nobody rationally takes the risk.",
        "Offering huge rewards for negligible danger."
      ],
      "diagram": {
        "title": "Push your luck",
        "nodes": [
          "BANK NOW",
          "SAFE / SMALL GAIN",
          "PUSH ON",
          "DANGER / BIGGER GAIN"
        ],
        "caption": "The player creates tension by choosing when to stop."
      },
      "example": {
        "game": "Darkest Dungeon",
        "title": "The profitable choice can also be the dangerous one",
        "body": "In Darkest Dungeon, pushing deeper can produce more treasure and progress, but health, stress, supplies and the risk of permanent hero loss accumulate. Retreating protects what you have; continuing asks whether the possible reward is worth exposing a damaged party to another problem.",
        "src": "https://cdn.akamai.steamstatic.com/steam/apps/262060/header.jpg",
        "sourceUrl": "https://www.darkestdungeon.com/darkest-dungeon/",
        "sourceTitle": "Red Hook Studios — Darkest Dungeon"
      },
      "sources": [
        {
          "title": "Darkest Dungeon: A Design Postmortem — GDC Vault",
          "url": "https://gdcvault.com/play/1023089/Darkest-Dungeon-A-Design",
          "note": "Tyler Sigman explains the stress, affliction and roguelike systems and the iterations behind them.",
          "kind": "Developer talk"
        },
        {
          "title": "Cards, Dice, and RNGs: Using Randomness in Games — GDC Vault",
          "url": "https://www.gdcvault.com/play/1028984/Cards-Dice-and-RNGs-Using",
          "note": "Useful wider reading on how risk interacts with uncertainty.",
          "kind": "Further reading"
        },
        {
          "title": "Darkest Dungeon — Red Hook Studios",
          "url": "https://www.darkestdungeon.com/darkest-dungeon/about/",
          "note": "Red Hook’s official overview foregrounds stress, physical vulnerability, famine and the emotional cost of continuing an expedition.",
          "kind": "Official"
        }
      ],
      "task": {
        "title": "Build a push-your-luck moment",
        "brief": "Design a choice where a player can stop safely or continue for a greater possible reward.",
        "steps": [
          "State what can be banked now.",
          "State what extra reward is available.",
          "State what is at risk.",
          "Give the player enough information to make an intentional decision."
        ],
        "evidence": "A 4–6 line rule or small card mock-up.",
        "stretch": "Play it three times and record where players choose to stop."
      },
      "quiz": [
        {
          "q": "Which creates the strongest player-owned risk?",
          "options": [
            "A hidden instant-death tile with no clue",
            "The player may bank 5 treasure or enter another room where they could gain 4 more but lose unbanked treasure",
            "A cutscene kills the player",
            "The game randomly deletes a save"
          ],
          "correct": 1,
          "feedback": "The player understands the stakes and chooses whether to continue."
        },
        {
          "q": "If nobody ever chooses the risky option, what is a likely design issue?",
          "options": [
            "The risk/reward ratio may be unattractive",
            "The UI must use more colours",
            "There are too few textures",
            "The game needs a longer title"
          ],
          "correct": 0,
          "feedback": "The expected or perceived reward may not justify the danger."
        },
        {
          "q": "Why is readable risk important?",
          "options": [
            "So players can make an intentional decision rather than suffer arbitrary punishment",
            "So games never surprise anyone",
            "So random systems are banned",
            "So every outcome is guaranteed"
          ],
          "correct": 0,
          "feedback": "Players need enough information to own the choice."
        }
      ],
      "duration": "15–20 min",
      "caseStudy": {
        "intro": "Darkest Dungeon makes greed visible by letting the player decide how long to expose an increasingly damaged party to danger.",
        "observations": [
          "Health, stress, light, supplies and inventory space all deteriorate or become constrained as an expedition continues.",
          "The reward for continuing is tangible—loot, progress and opportunity—but so is the possibility of losing expensive or emotionally valued heroes.",
          "Retreat is a real design option. The player is deciding when to stop, not only whether they can win the next fight."
        ],
        "question": "What information does Darkest Dungeon give you before asking “one more room?”, and what uncertainty remains?"
      },
      "watch": {
        "kind": "Developer postmortem",
        "title": "Darkest Dungeon: A Design Postmortem — GDC",
        "url": "https://www.youtube.com/watch?v=0IUaGQhlPwo",
        "youtubeId": "0IUaGQhlPwo",
        "watchFor": "How stress, afflictions, loss and retreat create pressure around the decision to continue.",
        "question": "Which cost makes a tempting reward genuinely risky rather than simply difficult to obtain? "
      }
    },
    {
      "id": "randomness-uncertainty",
      "title": "Randomness & Uncertainty",
      "path": "decisions",
      "icon": "⚄",
      "short": "Use chance to create situations for players to solve, not to replace their decisions.",
      "definition": "Randomness changes game state unpredictably. Input randomness reveals uncertainty before a decision; output randomness resolves uncertainty after a decision. Both can work, but they create different feelings of control.",
      "why": "Randomness creates variety, tension and replayability. It becomes frustrating when important outcomes feel disconnected from preparation or response.",
      "keyIdeas": [
        "Input randomness: draw cards, then decide how to use them.",
        "Output randomness: choose an action, then roll to see whether it succeeds.",
        "Mitigation—rerolls, probabilities, resource spending—lets skill interact with chance.",
        "Hidden information can create uncertainty without pure randomness."
      ],
      "mistakes": [
        "Using dice for every decision because “board games need dice”.",
        "Letting one unlucky result erase all earlier decisions.",
        "Showing no probability or way to respond."
      ],
      "diagram": {
        "title": "Two kinds of randomness",
        "nodes": [
          "RANDOM → DECIDE",
          "INPUT RANDOMNESS",
          "DECIDE → RANDOM",
          "OUTPUT RANDOMNESS"
        ],
        "caption": "Ask whether the interesting skill is responding to uncertainty or committing before the result."
      },
      "example": {
        "game": "XCOM 2",
        "title": "Probability creates plans, not guarantees",
        "body": "XCOM 2 exposes hit chances before many attacks, so uncertainty becomes part of planning. Strong play is about creating fallback options, improving odds and deciding how much risk a turn can tolerate—not assuming a 90% shot is certain.",
        "src": "https://cdn.akamai.steamstatic.com/steam/apps/268500/header.jpg",
        "sourceUrl": "https://www.xcom.com/xcom-2/",
        "sourceTitle": "2K / Firaxis — XCOM 2"
      },
      "sources": [
        {
          "title": "Jake Solomon explains the careful use of randomness in XCOM 2 — Game Developer",
          "url": "https://www.gamedeveloper.com/design/jake-solomon-explains-the-careful-use-of-randomness-in-i-xcom-2-i-",
          "note": "XCOM’s creative director discusses probability, player psychology and why displayed odds need careful handling.",
          "kind": "Developer interview"
        },
        {
          "title": "Cards, Dice, and RNGs: Using Randomness in Games — GDC Vault",
          "url": "https://www.gdcvault.com/play/1028984/Cards-Dice-and-RNGs-Using",
          "note": "Professional background on different uses of randomness in games.",
          "kind": "Developer talk"
        },
        {
          "title": "XCOM 2 — 2K official game page",
          "url": "https://store.2k.com/game/buy-xcom-2-pc",
          "note": "Official overview of concealment, tactical flexibility, soldier classes and the combat systems surrounding each uncertain shot.",
          "kind": "Official"
        }
      ],
      "task": {
        "title": "Change when the random event happens",
        "brief": "Take one random mechanic.",
        "steps": [
          "Write its current order: decide → random or random → decide.",
          "Reverse that order.",
          "Describe how the player’s sense of control changes.",
          "Add one mitigation tool such as reroll, resource spend or probability information."
        ],
        "evidence": "A before/after random-system description.",
        "stretch": "Test which version creates better discussion between players."
      },
      "quiz": [
        {
          "q": "Drawing three cards and then choosing one to play is mainly what?",
          "options": [
            "Input randomness",
            "Output randomness",
            "No randomness",
            "A feedback loop"
          ],
          "correct": 0,
          "feedback": "The random information arrives before the player decides."
        },
        {
          "q": "Choosing to attack and then rolling to hit is mainly what?",
          "options": [
            "Input randomness",
            "Output randomness",
            "Environmental storytelling",
            "Negative feedback"
          ],
          "correct": 1,
          "feedback": "The player commits before the random result is resolved."
        },
        {
          "q": "What usually improves a high-stakes random system?",
          "options": [
            "Remove all player tools",
            "Give players ways to understand, prepare for or mitigate the chance",
            "Hide every probability",
            "Make failure permanent every time"
          ],
          "correct": 1,
          "feedback": "Mitigation lets player decisions meaningfully interact with uncertainty."
        }
      ],
      "duration": "15–20 min",
      "caseStudy": {
        "intro": "XCOM 2 makes probability part of tactical planning by showing many odds before the player commits, then asking them to build a turn that can survive an uncertain result.",
        "observations": [
          "Displayed hit chances turn randomness into information the player can reason about instead of a hidden surprise.",
          "Cover, flanking, elevation, explosives and ability choice let the player modify odds before taking the roll.",
          "Good plans contain fallbacks. The interesting skill is often deciding what happens if the 80–90% action fails."
        ],
        "question": "When does XCOM ask the player to manage randomness, and when does it simply ask them to accept it?"
      },
      "watch": {
        "kind": "Official gameplay media",
        "title": "XCOM 2 — 2K screenshots & videos",
        "url": "https://store.2k.com/game/buy-xcom-2-pc",
        "watchFor": "Displayed hit chances, positioning, cover and the tactical choices made before a random outcome is resolved.",
        "question": "What can the player change before the roll, and what remains uncertain? "
      }
    },
    {
      "id": "feedback-loops",
      "title": "Positive & Negative Feedback Loops",
      "path": "systems",
      "icon": "⟳",
      "short": "Understand when success accelerates success—and when the game helps players recover.",
      "definition": "A positive feedback loop amplifies a change: success produces advantages that make further success easier. A negative feedback loop pushes the system back toward balance or gives trailing players ways to recover.",
      "why": "Feedback loops shape pacing and competitive fairness. Positive loops can make progression satisfying but can also create runaway leaders. Negative loops can preserve competition but feel artificial if too strong.",
      "keyIdeas": [
        "Positive does not mean “good”; it means reinforcing.",
        "Negative does not mean “bad”; it means counteracting.",
        "Economies and territory games often contain strong positive loops.",
        "Catch-up mechanics are only one form of negative feedback."
      ],
      "mistakes": [
        "Confusing feedback loops with audiovisual feedback.",
        "Removing all advantage from success.",
        "Making catch-up systems so strong that leading feels pointless."
      ],
      "diagram": {
        "title": "System feedback",
        "nodes": [
          "SUCCESS",
          "MORE POWER",
          "EASIER SUCCESS",
          "RUNAWAY?",
          "COUNTER-FORCE"
        ],
        "caption": "Designers decide whether to reinforce momentum or introduce pressure that keeps the contest alive."
      },
      "example": {
        "game": "Mario Kart 8 Deluxe",
        "title": "Catch-up pressure is a negative feedback tool",
        "body": "Mario Kart changes the value and availability of items according to race context, helping trailing players threaten the leaders. That is a negative-feedback principle: the system pushes against a growing advantage so the contest can stay alive, while strong driving still matters.",
        "src": "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_MarioKart8Deluxe_image1600w.jpg",
        "sourceUrl": "https://www.nintendo.com/en-gb/Games/Nintendo-Switch-games/Mario-Kart-8-Deluxe-1173281.html",
        "sourceTitle": "Nintendo — Mario Kart 8 Deluxe"
      },
      "sources": [
        {
          "title": "Mario Kart 8 director Kosuke Yabuki on balancing — Nintendo Life",
          "url": "https://www.nintendolife.com/news/2014/05/interview_mario_kart_8_director_kosuke_yabuki_on_key_features_of_the_wii_us_blockbuster_release",
          "note": "Yabuki explains that the team rebuilt and repeatedly tested the whole balance rather than tuning one isolated part.",
          "kind": "Developer interview"
        },
        {
          "title": "Mario Kart 8: “It’s not all about luck” — GameSpot",
          "url": "https://www.gamespot.com/articles/mario-kart-8-it-s-not-all-about-luck-two-rainbow-roads-confirmed/1100-6418730/",
          "note": "Developer comments on item distribution, race position and careful balancing.",
          "kind": "Developer interview"
        },
        {
          "title": "Macroeconomics of a Game — GDC Vault",
          "url": "https://www.gdcvault.com/play/1026070/Macroeconomics-of-a-Game",
          "note": "Useful wider reading on reinforcing and balancing loops.",
          "kind": "Further reading"
        }
      ],
      "task": {
        "title": "Find the snowball",
        "brief": "Analyse a competitive or progression game.",
        "steps": [
          "Identify one success → advantage → more success loop.",
          "Describe when it feels rewarding.",
          "Describe when it becomes a runaway problem.",
          "Design one gentle counter-force that does not erase earned advantage."
        ],
        "evidence": "A loop diagram plus one balancing proposal.",
        "stretch": "Explain why your counter-force is better than simply giving everyone equal resources."
      },
      "quiz": [
        {
          "q": "A player captures more territory, gains more income, buys more units and captures territory even faster. This is…",
          "options": [
            "Positive feedback",
            "Negative feedback",
            "Onboarding",
            "Input randomness"
          ],
          "correct": 0,
          "feedback": "The initial advantage reinforces itself."
        },
        {
          "q": "A trailing racer receives slightly stronger catch-up opportunities. This is…",
          "options": [
            "A negative feedback mechanism",
            "A texture issue",
            "A core loop",
            "Pure positive feedback"
          ],
          "correct": 0,
          "feedback": "The system counteracts the growing gap."
        },
        {
          "q": "Why can excessive catch-up feel bad?",
          "options": [
            "It can make earned advantages feel meaningless",
            "It always increases realism",
            "It removes all UI",
            "It improves every genre"
          ],
          "correct": 0,
          "feedback": "If leadership is constantly erased, success stops feeling consequential."
        }
      ],
      "duration": "15–20 min",
      "caseStudy": {
        "intro": "Mario Kart 8 Deluxe is useful for studying balancing feedback because race position changes the kinds of recovery tools likely to matter without simply handing victory to the player in last place.",
        "observations": [
          "Players ahead and behind experience different item pressures, so the state of the race affects the resources entering the system.",
          "Recovery tools can compress gaps and keep more racers relevant, counteracting a runaway lead: a negative-feedback effect.",
          "Driving skill, route knowledge and item timing still matter, so the balancing system changes opportunity rather than guaranteeing an outcome."
        ],
        "question": "Which Mario Kart system pushes against a growing lead, and which systems still allow a strong player to preserve one?"
      },
      "watch": {
        "kind": "Official gameplay video",
        "title": "Mario Kart 8 Deluxe — Nintendo",
        "url": "https://www.nintendo.com/en-gb/Games/Nintendo-Switch-games/Mario-Kart-8-Deluxe-1173281.html",
        "watchFor": "How race position, items and recovery opportunities keep pressure between racers while driving skill remains relevant.",
        "question": "Find one system that pushes against a runaway lead without simply deciding the winner. "
      }
    },
    {
      "id": "resources-economies",
      "title": "Resources, Sources & Sinks",
      "path": "systems",
      "icon": "¤",
      "short": "Treat every resource as a flow through the game, not just a number on the HUD.",
      "definition": "A resource is something players acquire, store, spend or exchange. Sources introduce a resource; sinks remove it. A stable economy controls how quickly resources enter, circulate and leave.",
      "why": "Resources create priorities and opportunity costs. If a resource floods the game, choices around it collapse. If it is too scarce, players may become unable or unwilling to engage with the systems it was meant to support.",
      "keyIdeas": [
        "Map where each resource comes from and where it goes.",
        "A sink gives a resource purpose.",
        "Caps, decay and upkeep can control stockpiling.",
        "Exchange rates between resources create strategic value."
      ],
      "mistakes": [
        "Adding currency without enough useful sinks.",
        "Making a resource so scarce players never experiment.",
        "Balancing only the starting amount instead of the whole flow over time."
      ],
      "diagram": {
        "title": "Economy flow",
        "nodes": [
          "SOURCE",
          "PLAYER STOCK",
          "CHOICE / EXCHANGE",
          "SINK",
          "NEW DEMAND"
        ],
        "caption": "Watch the flow over time: stockpiles tell you when a resource has stopped forcing decisions."
      },
      "example": {
        "game": "Stardew Valley",
        "title": "Time, energy, money and materials compete for attention",
        "body": "Stardew Valley’s economy is not only gold. Each day has limited time and energy; crops, mining, fishing and animals create resources, while seeds, tool upgrades, buildings and crafting consume them. The player constantly chooses where today’s limited capacity should go.",
        "src": "https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg",
        "sourceUrl": "https://www.stardewvalley.net/",
        "sourceTitle": "ConcernedApe — Stardew Valley"
      },
      "sources": [
        {
          "title": "Road to the IGF: ConcernedApe’s Stardew Valley — Game Developer",
          "url": "https://www.gamedeveloper.com/design/road-to-the-igf-concernedape-s-i-stardew-valley-i-",
          "note": "Eric Barone discusses the game’s design origins and how he expanded the farming-life formula.",
          "kind": "Developer interview"
        },
        {
          "title": "Eric Barone talks Stardew Valley & Haunted Chocolatier — PC Gamer",
          "url": "https://www.youtube.com/watch?v=olf3wAuCfeU",
          "note": "Long-form video interview with ConcernedApe about Stardew Valley and his evolving design thinking.",
          "kind": "Video"
        },
        {
          "title": "Macroeconomics of a Game — GDC Vault",
          "url": "https://www.gdcvault.com/play/1026070/Macroeconomics-of-a-Game",
          "note": "Professional background on game economies, sources, sinks and system-wide effects.",
          "kind": "Developer talk"
        }
      ],
      "task": {
        "title": "Draw a resource map",
        "brief": "Pick one important resource.",
        "steps": [
          "List every source.",
          "List every sink.",
          "Show what decision spending it creates.",
          "Predict what happens if players receive twice as much."
        ],
        "evidence": "A source → stock → sink diagram.",
        "stretch": "Add one non-currency resource such as time, inventory slots, actions or attention."
      },
      "quiz": [
        {
          "q": "Players finish every match with thousands of unused coins. What should you inspect?",
          "options": [
            "Whether the economy has meaningful sinks",
            "The skybox",
            "The voice acting",
            "The polygon count"
          ],
          "correct": 0,
          "feedback": "A stockpile often means supply exceeds useful spending opportunities."
        },
        {
          "q": "Which can be a resource even if it is not called “money”?",
          "options": [
            "Action points",
            "Inventory slots",
            "Time",
            "All of these"
          ],
          "correct": 3,
          "feedback": "Resources include anything limited that players allocate or exchange."
        },
        {
          "q": "Why might a resource cap be useful?",
          "options": [
            "It can stop infinite stockpiling and encourage spending",
            "It guarantees balance",
            "It removes every decision",
            "It increases texture quality"
          ],
          "correct": 0,
          "feedback": "Caps can keep resources circulating rather than accumulating forever."
        }
      ],
      "duration": "15–20 min",
      "caseStudy": {
        "intro": "Stardew Valley creates an economy from overlapping scarce resources rather than gold alone. A day is a budget of time, energy, money, space and seasonal opportunity.",
        "observations": [
          "Crops, fishing, mining and animals generate different resources on different timescales, so income sources compete for the player’s attention.",
          "Seeds, buildings, tool upgrades and crafting act as sinks that remove resources now in exchange for future capability.",
          "Time and energy make opportunity cost visible: spending the afternoon in the mine means not watering, fishing, socialising or exploring elsewhere."
        ],
        "question": "Which Stardew resource would most radically change the economy if it became unlimited?"
      },
      "watch": {
        "kind": "Official trailer",
        "title": "Stardew Valley Trailer — ConcernedApe",
        "url": "https://www.youtube.com/watch?v=ot7uXNQskhs",
        "youtubeId": "ot7uXNQskhs",
        "watchFor": "How many resources are being managed at once: money, time, energy, crops, materials, space and relationships.",
        "question": "Which resource creates the clearest opportunity cost in the footage? "
      }
    },
    {
      "id": "balance-counterplay",
      "title": "Balance, Fairness & Counterplay",
      "path": "systems",
      "icon": "⚖",
      "short": "Balance is about viable decisions and understandable counterplay—not making everything identical.",
      "definition": "Game balance is the tuning of rules, numbers and options so that the intended strategies remain viable and the game produces an appropriate challenge or contest. Counterplay means opponents or the game can respond to a strong option.",
      "why": "Perfect numerical equality is rarely the goal. Asymmetrical games can be fair if strengths have costs, conditions and counters. Players need to feel that losses can be understood and improved upon.",
      "keyIdeas": [
        "Look for dominant strategies, not just strong ones.",
        "Asymmetry needs different strengths, not hidden superiority.",
        "Counterplay can be positioning, timing, resource pressure or information.",
        "Balance depends on context and skill level."
      ],
      "mistakes": [
        "Nerfing every popular option automatically.",
        "Balancing only by damage numbers.",
        "Creating abilities with no readable response."
      ],
      "diagram": {
        "title": "Healthy option",
        "nodes": [
          "STRENGTH",
          "CONDITION",
          "COST",
          "COUNTERPLAY",
          "VIABLE ALTERNATIVE"
        ],
        "caption": "A strong option can be healthy if it has a context, cost and response."
      },
      "example": {
        "game": "Street Fighter 6",
        "title": "Strong options stay interesting when answers exist",
        "body": "Street Fighter 6’s Drive system gives both players powerful offensive, defensive and movement tools from a shared resource. The design challenge is not making every option identical; it is creating costs, timings and counters so powerful actions still invite a response.",
        "src": "https://cdn.akamai.steamstatic.com/steam/apps/1364780/header.jpg",
        "sourceUrl": "https://www.streetfighter.com/6/en-uk/",
        "sourceTitle": "Capcom — Street Fighter 6"
      },
      "sources": [
        {
          "title": "Street Fighter 6 development discussion — Capcom Integrated Report",
          "url": "https://www.capcom.co.jp/ir/english/data/oar/2023/development.html",
          "note": "Capcom developers discuss broadening Street Fighter while protecting the depth of competitive play.",
          "kind": "Developer interview"
        },
        {
          "title": "Street Fighter 6 developers on the Drive system — Famitsu",
          "url": "https://www.famitsu.com/news/202206/17264369.html",
          "note": "The development team explains the shared Drive resource and the offensive, defensive and movement options built around it.",
          "kind": "Developer interview"
        },
        {
          "title": "Flavors of Challenge: The 8 Kinds of Difficulty — GDC Vault",
          "url": "https://gdcvault.com/play/1035713/Flavors-of-Challenge-The-8",
          "note": "Useful context for separating fair challenge from raw numerical difficulty.",
          "kind": "Further reading"
        }
      ],
      "task": {
        "title": "Dominant strategy test",
        "brief": "Choose the strongest option in a game or prototype.",
        "steps": [
          "State when it is strong.",
          "State its cost or limitation.",
          "Describe the opponent/player response.",
          "Compare it with the next-best alternative."
        ],
        "evidence": "A “strength / weakness / counter” card.",
        "stretch": "If it currently has no counterplay, add one without simply halving its power."
      },
      "quiz": [
        {
          "q": "One weapon is best at every range, costs nothing extra and has no counter. The likely problem is…",
          "options": [
            "A dominant strategy",
            "Too much onboarding",
            "Low agency because of story",
            "A missing texture"
          ],
          "correct": 0,
          "feedback": "An option that dominates across contexts collapses strategic choice."
        },
        {
          "q": "Does fair balance require identical player abilities?",
          "options": [
            "Yes, always",
            "No; asymmetry can be fair when strengths, costs and counters are understood",
            "Only in single player",
            "Only if there are no rules"
          ],
          "correct": 1,
          "feedback": "Fairness can come from viable asymmetrical strengths and counterplay."
        },
        {
          "q": "Which is counterplay?",
          "options": [
            "A shield can block a powerful attack if timed correctly",
            "The powerful attack cannot be reacted to or avoided",
            "The UI hides the attack",
            "Damage is random and invisible"
          ],
          "correct": 0,
          "feedback": "Counterplay gives the other side a meaningful response."
        }
      ],
      "duration": "15–20 min",
      "caseStudy": {
        "intro": "Street Fighter 6 shows that balance is not sameness. Characters can be deliberately unequal in range, speed and tools as long as strong options have costs, timings and responses.",
        "observations": [
          "The shared Drive Gauge powers offence, defence and movement, so using a strong option also changes what the player can afford next.",
          "Burnout turns resource overspending into a new temporary game state with different risks, rather than only subtracting points from a meter.",
          "Counterplay is readable in timing and spacing: a powerful move is healthier when the opponent has a meaningful response to learn and execute."
        ],
        "question": "Choose one strong option in Street Fighter 6. What does the opponent need to know or do for that option to feel fair?"
      },
      "watch": {
        "kind": "Official gameplay",
        "title": "Street Fighter 6 — Ed Gameplay Trailer",
        "url": "https://www.youtube.com/watch?v=g9DsCc8CsA4",
        "youtubeId": "g9DsCc8CsA4",
        "watchFor": "Spacing, attack commitment, defensive answers and use of the shared Drive system during exchanges.",
        "question": "Choose one strong action. What visible opportunity does the opponent have to answer it? "
      }
    },
    {
      "id": "progression-difficulty",
      "title": "Progression & Difficulty",
      "path": "systems",
      "icon": "▲",
      "short": "Make challenge and player capability change in ways players can learn from.",
      "definition": "Progression changes what the player can do, understand or access over time. Difficulty is the demand placed on the player. Good progression and challenge curves introduce complexity, allow practice, then recombine demands.",
      "why": "Simply increasing enemy health often creates longer fights, not deeper challenge. Designers can vary knowledge, execution, planning, pressure, navigation, coordination and resource demands.",
      "keyIdeas": [
        "Teach one idea, test it, then combine it with another.",
        "Player power and game challenge can both rise.",
        "Difficulty settings should ideally change meaningful demands, not only numbers.",
        "Mastery can be progression even without levels or XP."
      ],
      "mistakes": [
        "Difficulty = more health and damage only.",
        "Introducing five new mechanics simultaneously.",
        "Unlocking powers that make earlier systems irrelevant."
      ],
      "diagram": {
        "title": "Challenge curve",
        "nodes": [
          "INTRODUCE",
          "SAFE PRACTICE",
          "TEST",
          "COMBINE",
          "TWIST"
        ],
        "caption": "A useful curve changes the type and combination of challenge, not just the size of numbers."
      },
      "example": {
        "game": "Elden Ring",
        "title": "Progression includes power, knowledge and route choice",
        "body": "Elden Ring lets players grow through levels and equipment, but also through knowledge of enemies and the world. Its open structure adds another progression tool: if one obstacle is too severe, the player can explore elsewhere, improve, learn and return later.",
        "src": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg",
        "sourceUrl": "https://en.bandainamcoent.eu/elden-ring/elden-ring",
        "sourceTitle": "Bandai Namco / FromSoftware — Elden Ring"
      },
      "sources": [
        {
          "title": "Interview with Hidetaka Miyazaki — PlayStation Blog",
          "url": "https://blog.playstation.com/2022/01/28/an-interview-with-fromsoftwares-hidetaka-miyazki/",
          "note": "Miyazaki discusses freedom of progression, learning through failure and providing multiple ways to overcome difficult situations.",
          "kind": "Developer interview"
        },
        {
          "title": "Flavors of Challenge: The 8 Kinds of Difficulty — GDC Vault",
          "url": "https://gdcvault.com/play/1035713/Flavors-of-Challenge-The-8",
          "note": "A useful framework for analysing what kind of difficulty a game is actually asking from the player.",
          "kind": "Developer talk"
        },
        {
          "title": "UX Summit: Difficult Games by Design — GDC Vault",
          "url": "https://www.gdcvault.com/play/1034838/UX-Summit-Difficult-Games-by",
          "note": "Professional discussion of deliberately challenging game experiences.",
          "kind": "Developer talk"
        }
      ],
      "task": {
        "title": "Replace a health sponge",
        "brief": "Find an encounter that becomes “harder” mainly by adding health/damage.",
        "steps": [
          "Name the skill the encounter should test.",
          "Remove some raw-stat inflation.",
          "Add a pattern, positional, resource or information challenge.",
          "Explain how the player can learn to improve."
        ],
        "evidence": "A before/after encounter note.",
        "stretch": "Design an easier version that preserves the same idea rather than deleting it."
      },
      "quiz": [
        {
          "q": "An enemy takes twice as long to kill but behaves identically. What changed most?",
          "options": [
            "Duration / punishment more than strategic depth",
            "Player agency always doubled",
            "Environmental storytelling",
            "Input randomness"
          ],
          "correct": 0,
          "feedback": "More health can extend the same test without adding a new decision."
        },
        {
          "q": "A strong teaching sequence usually…",
          "options": [
            "Introduces several unrelated systems at once",
            "Introduces, practises, tests and then combines ideas",
            "Never repeats mechanics",
            "Hides all feedback"
          ],
          "correct": 1,
          "feedback": "Staging complexity supports learning and later mastery."
        },
        {
          "q": "Which is progression without a level-up screen?",
          "options": [
            "The player learns enemy tells and can solve encounters more reliably",
            "Nothing can count without XP",
            "Only new graphics",
            "A loading screen"
          ],
          "correct": 0,
          "feedback": "Player knowledge and mastery are genuine progression."
        }
      ],
      "duration": "15–20 min",
      "caseStudy": {
        "intro": "Elden Ring mixes demanding combat with unusually flexible progression. Difficulty can be answered through execution, knowledge, route choice, equipment, levels, summons or simply returning later.",
        "observations": [
          "The open world lets players redirect themselves when one encounter is currently beyond their skill or build.",
          "Failure teaches attack timing, positioning and enemy behaviour, so player knowledge progresses even when character stats do not.",
          "Character progression provides additional solutions—upgrades, build changes, spirit summons and equipment—without requiring every player to solve challenge in the same way."
        ],
        "question": "Which parts of Elden Ring difficulty are solved by player learning, and which can be solved by changing the character or route?"
      },
      "watch": {
        "kind": "Official gameplay reveal",
        "title": "ELDEN RING — Official Gameplay Reveal",
        "url": "https://www.youtube.com/watch?v=E3Huy2cdih0",
        "youtubeId": "E3Huy2cdih0",
        "watchFor": "Different routes, enemy scales, movement options, summons and approaches that let players respond to challenge in more than one way.",
        "question": "Which challenge looks execution-based, and which could be answered by preparation or route choice? "
      }
    },
    {
      "id": "game-feel-feedback",
      "title": "Game Feel & Feedback",
      "path": "experience",
      "icon": "✦",
      "short": "Make actions readable, responsive and satisfying.",
      "definition": "Game feel is the moment-to-moment sensory and control response of interacting with a game. Feedback is information showing that an action happened, what it affected and whether it succeeded.",
      "why": "Players make better decisions when state changes are readable. “Juice” can add impact, but effects should reinforce information rather than bury it.",
      "keyIdeas": [
        "Input response, animation, sound, camera, particles and UI can reinforce the same event.",
        "Feedback should match the importance of the action.",
        "Anticipation and follow-through help actions read.",
        "Accessibility means important feedback should not rely on one sensory channel alone."
      ],
      "mistakes": [
        "Adding screen shake and particles everywhere.",
        "Delayed or ambiguous response to input.",
        "Using sound as the only signal for essential information."
      ],
      "diagram": {
        "title": "Action feedback",
        "nodes": [
          "INPUT",
          "ANTICIPATION",
          "ACTION",
          "IMPACT",
          "RECOVERY / STATE"
        ],
        "caption": "Each layer should help the player understand what happened—not just make noise."
      },
      "example": {
        "game": "Jet Set Radio",
        "title": "Movement, music and style all answer the player",
        "body": "Jet Set Radio makes skating expressive through the combination of speed, grinding, tagging, animation, camera movement, sound and an aggressively distinctive soundtrack. The feedback layers agree with each other: the game wants motion to feel confident, rhythmic and rebellious rather than merely functional.",
        "src": "https://cdn.akamai.steamstatic.com/steam/apps/205950/header.jpg",
        "sourceUrl": "https://store.steampowered.com/app/205950/Jet_Set_Radio/",
        "sourceTitle": "SEGA — Jet Set Radio"
      },
      "sources": [
        {
          "title": "Jet Set Radio Future Q&A — GameSpot",
          "url": "https://www.gamespot.com/articles/jet-set-radio-future-qanda/1100-2778750/",
          "note": "Director Masayoshi Kikuchi and art director Ryuuta Ueda discuss the visual influences and “extreme” identity inherited from Jet Set Radio.",
          "kind": "Developer interview"
        },
        {
          "title": "Smilebit Q&A — GameSpot",
          "url": "https://www.gamespot.com/articles/smilebit-qanda/1100-2850400/",
          "note": "Smilebit discusses level design, atmosphere and why music was curated to preserve the game’s particular feel.",
          "kind": "Developer interview"
        },
        {
          "title": "Staying in Tune: Richard Jacques on game music — Game Developer",
          "url": "https://www.gamedeveloper.com/audio/staying-in-tune-richard-jacques-on-game-music-s-past-present-and-future",
          "note": "Composer Richard Jacques discusses game music including his work on Jet Set Radio and how music supports the identity of play.",
          "kind": "Developer interview"
        },
        {
          "title": "Game Feel: A Game Designer’s Guide to Virtual Sensation — Routledge",
          "url": "https://www.routledge.com/Game-Feel-A-Game-Designers-Guide-to-Virtual-Sensation/Swink/p/book/9780123743282",
          "note": "A foundational text on input, response and virtual sensation.",
          "kind": "Further reading"
        }
      ],
      "task": {
        "title": "Feedback stack",
        "brief": "Pick one important action such as jump, hit, collect or open.",
        "steps": [
          "List what the player sees.",
          "List what the player hears.",
          "List controller/camera/UI response.",
          "Remove one unnecessary effect and add one missing information cue."
        ],
        "evidence": "A labelled feedback stack or before/after capture.",
        "stretch": "Make the action understandable with audio muted, then with visual effects reduced."
      },
      "quiz": [
        {
          "q": "What is the best purpose of hit feedback?",
          "options": [
            "To communicate that contact happened and its importance",
            "To cover the entire screen",
            "To make every hit identical",
            "To replace game rules"
          ],
          "correct": 0,
          "feedback": "Feedback should first make state and consequence readable."
        },
        {
          "q": "Why avoid relying on sound alone for essential state?",
          "options": [
            "Some players cannot hear it or may play without audio",
            "Sound never works in games",
            "It reduces polygon count",
            "It prevents saving"
          ],
          "correct": 0,
          "feedback": "Redundant sensory channels improve clarity and accessibility."
        },
        {
          "q": "More particles always improve game feel. True?",
          "options": [
            "True",
            "False; effects can obscure information and reduce impact through overuse"
          ],
          "correct": 1,
          "feedback": "Juice works when it reinforces the action and hierarchy."
        }
      ],
      "duration": "15–20 min",
      "caseStudy": {
        "intro": "Jet Set Radio makes movement expressive by stacking control response, animation, sound, camera, music and visual style around the same player actions.",
        "observations": [
          "Grinding turns movement into a readable rhythm through speed, rail attachment, animation and sound rather than merely changing the character’s coordinates.",
          "Tagging interrupts traversal with a bold, performative interaction that gives success a visual and musical identity appropriate to the fantasy.",
          "The soundtrack, cel-shaded art and exaggerated motion all point toward the same rebellious tone, so feedback feels authored rather than added as generic “juice”."
        ],
        "question": "Mute the clip in your head: what feedback would still sell the action? Then imagine the visuals removed: what would the audio still communicate?"
      },
      "watch": {
        "kind": "Official trailer",
        "title": "Jet Set Radio Trailer — SEGA",
        "url": "https://www.youtube.com/watch?v=ih2BoI0BH_Q",
        "youtubeId": "ih2BoI0BH_Q",
        "watchFor": "Grinding, tagging, camera, animation, sound and music all firing around movement.",
        "question": "Count the feedback layers attached to one successful movement or tag action. "
      }
    },
    {
      "id": "pacing-tension-flow",
      "title": "Pacing, Tension & Flow",
      "path": "experience",
      "icon": "≈",
      "short": "Shape intensity over time instead of keeping everything at maximum.",
      "definition": "Pacing is the rhythm of pressure, release, discovery and escalation. Tension comes from anticipation and stakes. Flow describes deep engagement when challenge and skill are well matched, but it should not be reduced to a single magic graph.",
      "why": "Constant intensity becomes flat because players adapt. Contrast—quiet before danger, uncertainty before revelation, recovery after challenge—makes important moments stronger.",
      "keyIdeas": [
        "Pacing is designed across seconds, encounters, levels and whole games.",
        "Anticipation can be more powerful than constant action.",
        "Recovery spaces let players process information and reset resources.",
        "Different players and genres need different rhythms."
      ],
      "mistakes": [
        "Treating every room as a climax.",
        "Confusing slow pacing with boring pacing.",
        "Using “flow” as an excuse to remove every moment of frustration or thought."
      ],
      "diagram": {
        "title": "Intensity rhythm",
        "nodes": [
          "SETUP",
          "BUILD",
          "PEAK",
          "RELEASE",
          "NEW QUESTION"
        ],
        "caption": "Contrast gives peaks meaning. A flat line at 100% stops feeling intense."
      },
      "example": {
        "game": "Resident Evil 4 (Remake)",
        "title": "Tension needs peaks, recovery and a controlled tempo",
        "body": "Resident Evil 4 alternates combat pressure with exploration, resource management, quieter traversal and deliberate breaks. The remake changed controls, enemy behaviour and spaces together so added player mobility did not destroy the tempo between horror and action.",
        "src": "https://cdn.akamai.steamstatic.com/steam/apps/2050650/header.jpg",
        "sourceUrl": "https://www.residentevil.com/re4/en-uk/",
        "sourceTitle": "Capcom — Resident Evil 4"
      },
      "sources": [
        {
          "title": "Talking Resident Evil 4’s updated combat — Xbox Wire",
          "url": "https://news.xbox.com/en-us/2023/03/10/talking-resident-evil-4-updated-combat/",
          "note": "Producer Yoshiaki Hirabayashi discusses preserving the original tempo while changing controls, enemies and level design.",
          "kind": "Developer interview"
        },
        {
          "title": "How Resident Evil 4’s directors approached the remake — Game Informer",
          "url": "https://gameinformer.com/exclusive-feature/2023/02/08/how-resident-evil-4s-directors-approached-designing-the-remake",
          "note": "The directors explain how they revisited familiar encounters without losing the character of the original.",
          "kind": "Developer interview"
        },
        {
          "title": "Resident Evil 4 trailer and gameplay — PlayStation Blog / Capcom",
          "url": "https://blog.playstation.com/2023/02/23/resident-evil-4-trailer-debuts-new-action-gameplay-announces-mercenaries-mode-demo/",
          "note": "Capcom’s promotion producer introduces gameplay footage showing the remake changing encounter pressure, enemy types and familiar sequences.",
          "kind": "Official gameplay"
        }
      ],
      "task": {
        "title": "Draw an intensity graph",
        "brief": "Take 10–15 minutes of a game or your prototype.",
        "steps": [
          "Mark low, medium and high intensity moments.",
          "Identify where tension builds before a peak.",
          "Find one recovery space.",
          "Redesign one flat stretch by changing contrast rather than just adding enemies."
        ],
        "evidence": "A simple timeline / intensity graph.",
        "stretch": "Compare your graph with another genre. What changes?"
      },
      "quiz": [
        {
          "q": "Why can constant maximum action feel less intense over time?",
          "options": [
            "Players adapt and there is no contrast",
            "It always lowers frame rate",
            "It makes choices more meaningful",
            "It guarantees flow"
          ],
          "correct": 0,
          "feedback": "Without quieter baselines, peaks lose relative impact."
        },
        {
          "q": "What can a recovery section do?",
          "options": [
            "Let players process, plan and reset before new pressure",
            "Only waste time",
            "Remove every decision",
            "Make difficulty impossible"
          ],
          "correct": 0,
          "feedback": "Recovery supports pacing and prepares the next escalation."
        },
        {
          "q": "Which is the better way to use “flow” in design?",
          "options": [
            "As one guaranteed formula for fun",
            "As one lens for matching demands and capability, alongside other player needs",
            "As a reason to delete failure",
            "As a visual effect"
          ],
          "correct": 1,
          "feedback": "Flow is useful, but it is not the only explanation of engagement."
        }
      ],
      "duration": "15–20 min",
      "caseStudy": {
        "intro": "Resident Evil 4 Remake repeatedly changes pressure before one type of encounter can become normal. Combat intensity is framed by exploration, resource decisions, quieter anticipation and sudden escalation.",
        "observations": [
          "Village encounters create peaks through enemy count, space pressure and changing threats, then release that pressure so the player can recover and reassess.",
          "Resource scarcity links pacing to behaviour: a quiet room matters more after ammunition and healing have been drained by a demanding fight.",
          "The remake preserves recognisable beats while changing layouts, enemy behaviour and timing, showing that pacing is a relationship between events—not an exact script of seconds."
        ],
        "question": "Mark one tension rise, one peak and one release in the footage. What changes mechanically at each point?"
      },
      "watch": {
        "kind": "Official trailer",
        "title": "Resident Evil 4 — 3rd Trailer",
        "url": "https://www.youtube.com/watch?v=Id2EaldBaWw",
        "youtubeId": "Id2EaldBaWw",
        "watchFor": "Changes in enemy pressure, space, tempo, threat type and moments of release between intense beats.",
        "question": "Where does the sequence deliberately change pace before one kind of pressure becomes normal? "
      }
    },
    {
      "id": "onboarding",
      "title": "Onboarding & Teaching Through Play",
      "path": "experience",
      "icon": "→",
      "short": "Teach players what matters at the moment they need it.",
      "definition": "Onboarding is how a game introduces controls, rules, goals, language and expectations. Strong onboarding usually combines safe experimentation, contextual prompts, feedback and staged complexity.",
      "why": "Players learn by doing and receiving consequences. Front-loading every rule creates memory load before the player has context for why the information matters.",
      "keyIdeas": [
        "Teach one concept close to its first use.",
        "Create a safe place to experiment.",
        "Confirm understanding through a small challenge.",
        "Reintroduce information after a gap instead of assuming perfect memory."
      ],
      "mistakes": [
        "A ten-page instruction wall before play.",
        "Tutorial prompts explaining actions the player cannot yet perform.",
        "Removing all consequences so players cannot tell whether they understood."
      ],
      "diagram": {
        "title": "Teach loop",
        "nodes": [
          "SHOW NEED",
          "LET PLAYER TRY",
          "FEEDBACK",
          "SMALL TEST",
          "COMBINE LATER"
        ],
        "caption": "Context makes instructions memorable because the player immediately uses them."
      },
      "example": {
        "game": "Portal",
        "title": "Teach one rule, then ask the player to prove it",
        "body": "Portal’s opening chambers introduce interaction rules through small, controlled problems rather than a large manual. Each space gives the player just enough information to discover a rule, then changes the context so the next puzzle checks whether that rule was actually understood.",
        "src": "https://cdn.akamai.steamstatic.com/steam/apps/400/header.jpg",
        "sourceUrl": "https://store.steampowered.com/app/400/Portal/",
        "sourceTitle": "Valve — Portal"
      },
      "sources": [
        {
          "title": "Thinking With Portals: Creating Valve’s New IP — Game Developer",
          "url": "https://www.gamedeveloper.com/design/thinking-with-portals-creating-valve-s-new-ip",
          "note": "A development account of how Portal’s mechanics, testing and teaching structure were shaped.",
          "kind": "Developer article"
        },
        {
          "title": "Portal 2: Making a sequel to a “perfect” game — Game Developer",
          "url": "https://www.gamedeveloper.com/design/gdc-2012-i-portal-2-i-making-a-sequel-to-a-perfect-game",
          "note": "Valve discusses the challenge of teaching Portal concepts to new players without boring experienced players.",
          "kind": "Developer talk"
        },
        {
          "title": "Valve publications",
          "url": "https://www.valvesoftware.com/en/publications",
          "note": "Valve’s own archive includes its Portal postmortem and playtesting presentations.",
          "kind": "Official"
        }
      ],
      "task": {
        "title": "Delete the instruction dump",
        "brief": "Choose one rule currently explained in text.",
        "steps": [
          "Create a situation where the player needs the rule.",
          "Let them try it safely.",
          "Give clear success/failure feedback.",
          "Add text only where the interaction cannot explain enough."
        ],
        "evidence": "A four-panel tutorial storyboard.",
        "stretch": "Give it to someone who has not seen the rule and do not help them."
      },
      "quiz": [
        {
          "q": "When is information usually easiest to learn?",
          "options": [
            "Long before it is relevant",
            "Near the moment the player can use it",
            "Only after the game ends",
            "Never through interaction"
          ],
          "correct": 1,
          "feedback": "Context and immediate use reduce abstract memory load."
        },
        {
          "q": "What is a good tutorial test?",
          "options": [
            "A small situation that requires the newly taught idea",
            "A longer paragraph",
            "A loading screen",
            "A reward with no action"
          ],
          "correct": 0,
          "feedback": "A small challenge checks whether the player can apply the concept."
        },
        {
          "q": "Why can “teach through play” still use text?",
          "options": [
            "Because text can clarify information interaction alone cannot communicate efficiently",
            "It can never use text",
            "Text should replace all experimentation",
            "Only lore is allowed"
          ],
          "correct": 0,
          "feedback": "The goal is appropriate teaching, not a ban on words."
        }
      ],
      "duration": "15–20 min",
      "caseStudy": {
        "intro": "Portal teaches an unfamiliar spatial mechanic by controlling what the player can see, touch and combine before asking for more complex reasoning.",
        "observations": [
          "Early chambers isolate one idea at a time, reducing the number of possible explanations when something works or fails.",
          "The player sees portals and their consequences before being given full control of both portal colours, so observation precedes mastery.",
          "Later chambers recombine previously learned ideas instead of replacing them, turning tutorial knowledge into genuine problem-solving."
        ],
        "question": "Where does Portal stop explaining a rule and start asking the player to prove they understand it?"
      },
      "watch": {
        "kind": "Official trailer",
        "title": "Official Portal Trailer — Valve",
        "url": "https://www.youtube.com/watch?v=-cO_DIVuSyQ",
        "youtubeId": "-cO_DIVuSyQ",
        "watchFor": "How the trailer communicates the portal rule through visible cause-and-effect rather than a long verbal explanation.",
        "question": "What would a new player understand about portals after watching this even without playing? "
      }
    },
    {
      "id": "accessibility-inclusive-design",
      "title": "Accessibility & Inclusive Design",
      "path": "experience",
      "icon": "♿",
      "short": "Avoid unnecessarily excluding players from the experience you designed.",
      "definition": "Accessible game design identifies barriers created by controls, presentation, timing, information and sensory assumptions, then offers alternatives or flexibility while preserving the intended experience where possible.",
      "why": "Accessibility benefits far more people than a narrow “special mode” mindset suggests. Many changes—remapping, text size, subtitles, clear language, redundant cues—are simply strong communication and control design.",
      "keyIdeas": [
        "Do not communicate essential information by colour alone.",
        "Provide subtitles/captions for important speech and alternatives for audio-only cues.",
        "Allow control remapping or simpler alternatives where possible.",
        "Offer adjustable text, contrast, timing, difficulty or assist settings appropriate to the game."
      ],
      "mistakes": [
        "Treating accessibility as a final polish task.",
        "Assuming one preset fits every impairment or player.",
        "Removing all challenge rather than removing unnecessary barriers."
      ],
      "diagram": {
        "title": "Barrier test",
        "nodes": [
          "INTENDED CHALLENGE",
          "HOW IS IT PRESENTED?",
          "WHO IS BLOCKED?",
          "ALTERNATIVE ACCESS",
          "SAME CORE GOAL"
        ],
        "caption": "Preserve the intended challenge while reducing accidental barriers."
      },
      "example": {
        "game": "Forza Motorsport",
        "title": "Accessibility can redesign the information channel",
        "body": "Forza Motorsport’s Blind Driving Assists convert important spatial driving information into configurable audio cues. That is more than adding a difficulty toggle: it changes how track position, steering and braking information can reach a player.",
        "src": "https://cdn.akamai.steamstatic.com/steam/apps/2440510/header.jpg",
        "sourceUrl": "https://forza.net/motorsport",
        "sourceTitle": "Turn 10 Studios — Forza Motorsport"
      },
      "sources": [
        {
          "title": "From Blind Driving Assists to One Touch Driving — Xbox Wire",
          "url": "https://news.xbox.com/en-us/2023/04/27/forza-motorsport-accessibility-features-blind-driving/",
          "note": "Turn 10 explains the research, consultation and design behind Forza Motorsport’s accessibility systems.",
          "kind": "Developer article"
        },
        {
          "title": "Forza Motorsport — Blind Driving Assists — Xbox",
          "url": "https://www.youtube.com/watch?v=T7aVUqmQ_Sc",
          "note": "Official Xbox video with accessibility consultant Brandon Cole and Turn 10 developers demonstrating the system.",
          "kind": "Video"
        },
        {
          "title": "Forza Motorsport Accessibility Support",
          "url": "https://support.forzamotorsport.net/hc/en-us/articles/46524064744851-Forza-Motorsport-Accessibility-Support",
          "note": "Current official documentation for the game’s accessibility and assist options.",
          "kind": "Official"
        },
        {
          "title": "Game Accessibility Guidelines",
          "url": "https://gameaccessibilityguidelines.com/",
          "note": "Practical guidelines organised by player barriers and implementation complexity.",
          "kind": "Further reading"
        }
      ],
      "task": {
        "title": "Accessibility pass",
        "brief": "Audit one screen, mechanic or board-game component.",
        "steps": [
          "Find one motor/control barrier.",
          "Find one vision/readability barrier.",
          "Find one hearing/audio-only barrier or equivalent information issue.",
          "Choose one practical improvement that preserves the intended challenge."
        ],
        "evidence": "Annotated screenshot/component with three barriers and one redesign.",
        "stretch": "Check whether any essential information relies on colour alone."
      },
      "quiz": [
        {
          "q": "A red icon and green icon have identical shapes and no labels. What is the risk?",
          "options": [
            "Essential information relies on colour alone",
            "Too much player agency",
            "Positive feedback",
            "Overpowered economy"
          ],
          "correct": 0,
          "feedback": "Colour-only coding can exclude players with colour-vision differences and is often less readable generally."
        },
        {
          "q": "Which is accessibility design rather than simply making a game “easy”?",
          "options": [
            "Remappable controls and readable subtitles",
            "Deleting every enemy",
            "Making victory automatic",
            "Removing all decisions"
          ],
          "correct": 0,
          "feedback": "Accessibility removes barriers; it does not require removing the intended game."
        },
        {
          "q": "When is the cheapest time to consider accessibility?",
          "options": [
            "Early in design and UI/system planning",
            "After shipping only",
            "Never",
            "After all controls are locked"
          ],
          "correct": 0,
          "feedback": "Early planning avoids expensive rework and often improves general usability."
        }
      ],
      "duration": "15–20 min",
      "caseStudy": {
        "intro": "Forza Motorsport’s Blind Driving Assists are a useful accessibility case because they translate spatial driving information into another sensory channel rather than merely lowering difficulty.",
        "observations": [
          "Audio cues communicate steering, track position, braking and corner information that is normally carried heavily by vision.",
          "Assists are configurable, recognising that players with the same broad impairment may need different combinations of support.",
          "The feature was developed with consultation and testing, showing accessibility as an iterative design problem rather than a final checklist."
        ],
        "question": "Which information is being translated, and which player decision remains theirs after the assist communicates it?"
      },
      "watch": {
        "kind": "Official developer demonstration",
        "title": "Forza Motorsport — Blind Driving Assists",
        "url": "https://www.youtube.com/watch?v=T7aVUqmQ_Sc",
        "youtubeId": "T7aVUqmQ_Sc",
        "watchFor": "Which visual driving information is translated into audio and how the player still retains control of decisions.",
        "question": "What information is assisted, and what skill or choice remains with the player? "
      }
    },
    {
      "id": "affordances-signifiers",
      "title": "Affordances & Signifiers",
      "path": "space",
      "icon": "▤",
      "short": "Make spaces and objects communicate what players can do with them.",
      "definition": "An affordance is an action an object or environment allows; a signifier is a perceivable cue that communicates where or how that action can happen. In games, designers often shape both deliberately.",
      "why": "Players should not need to test every wall, door and prop. Consistent visual, audio and interaction language lets them read possibilities quickly.",
      "keyIdeas": [
        "Shape, placement, animation, colour, lighting and sound can signify interaction.",
        "Consistency creates a learnable visual language.",
        "False affordances waste attention: a detailed door that can never open may look interactive.",
        "Not every interactable object needs a giant glowing icon."
      ],
      "mistakes": [
        "Making interactive and decorative objects indistinguishable.",
        "Breaking established signifier rules without reason.",
        "Using UI markers to solve every readability problem."
      ],
      "diagram": {
        "title": "Readability chain",
        "nodes": [
          "OBJECT / SPACE",
          "CUE",
          "PLAYER EXPECTATION",
          "ACTION",
          "CONFIRMATION"
        ],
        "caption": "A signifier sets an expectation; the game should usually honour it."
      },
      "example": {
        "game": "Half-Life 2",
        "title": "Objects teach use through appearance, context and consequence",
        "body": "Half-Life 2 repeatedly uses familiar objects and environmental context to suggest interaction: a can can be picked up, a padlock suggests a blocked route, movable physics objects invite experimentation. The important lesson is that players read what an object appears to allow before they know its code.",
        "src": "https://cdn.akamai.steamstatic.com/steam/apps/220/header.jpg",
        "sourceUrl": "https://www.half-life.com/en/halflife2",
        "sourceTitle": "Valve — Half-Life 2"
      },
      "sources": [
        {
          "title": "Affordance Design in Half-Life 2 — Game Developer",
          "url": "https://www.gamedeveloper.com/design/affordance-design-in-half-life-2",
          "note": "A direct analysis of perceptible, hidden and false affordances in Half-Life 2’s opening level.",
          "kind": "Design analysis"
        },
        {
          "title": "Valve publications",
          "url": "https://www.valvesoftware.com/en/publications",
          "note": "Valve’s official archive of design, art and playtesting presentations.",
          "kind": "Official"
        },
        {
          "title": "Level Design in a Day — GDC Vault",
          "url": "https://gdcvault.com/play/1014207/Level-Design-in-a-Day",
          "note": "Useful professional context for communicating interaction and intent through spaces.",
          "kind": "Developer talk"
        }
      ],
      "task": {
        "title": "Read a room without HUD",
        "brief": "Take a screenshot of a game space.",
        "steps": [
          "Circle three things that look usable or traversable.",
          "Write the cue that creates each expectation.",
          "Find one false affordance.",
          "Redesign it so the player can read it without a floating objective icon."
        ],
        "evidence": "One annotated screenshot.",
        "stretch": "Repeat with a real classroom/public space: what do doors, handles, rails and lighting signify?"
      },
      "quiz": [
        {
          "q": "A ladder has the same yellow paint every time it is climbable. The paint is primarily acting as…",
          "options": [
            "A signifier",
            "A currency",
            "A feedback loop",
            "Output randomness"
          ],
          "correct": 0,
          "feedback": "It communicates the available action."
        },
        {
          "q": "What is a false affordance problem in games?",
          "options": [
            "An object strongly looks usable but consistently is not",
            "An enemy is challenging",
            "A reward is scarce",
            "A level has music"
          ],
          "correct": 0,
          "feedback": "The presentation creates an action expectation the system does not honour."
        },
        {
          "q": "Why use consistent interaction language?",
          "options": [
            "Players can learn and predict possibilities without constant instructions",
            "It guarantees realism",
            "It removes all art direction",
            "It makes every object identical"
          ],
          "correct": 0,
          "feedback": "Consistency reduces guesswork and supports fluent play."
        }
      ],
      "duration": "15–20 min",
      "caseStudy": {
        "intro": "Half-Life 2 uses physics objects, familiar forms and environmental staging to make interaction possibilities readable before the player knows the implementation behind them.",
        "observations": [
          "Objects look liftable, breakable, movable or dangerous because their form and physical behaviour agree with familiar expectations.",
          "The gravity gun expands the meaning of existing props: once the rule is learned, ordinary objects become potential tools, shields or weapons.",
          "False or weak affordances become immediately noticeable because the game otherwise trains players to trust physical cause and effect."
        ],
        "question": "Find an object whose appearance suggests an action before the game explicitly tells the player what to do with it."
      },
      "watch": {
        "kind": "Official developer documentary",
        "title": "Half-Life 2: 20th Anniversary Documentary — Valve",
        "url": "https://www.youtube.com/watch?v=YCjNT9qGjh4",
        "youtubeId": "YCjNT9qGjh4",
        "watchFor": "Jump to the physics chapter around 34:40. Look at how familiar objects, physical response and the gravity gun teach what the world allows.",
        "question": "Which object suggests its use before a tutorial explicitly names that use? "
      }
    },
    {
      "id": "guidance-sightlines",
      "title": "Player Guidance, Sightlines & Landmarks",
      "path": "space",
      "icon": "⌖",
      "short": "Guide attention through composition and space before reaching for objective arrows.",
      "definition": "Player guidance is the deliberate use of space, visibility, contrast, landmarks, motion, lighting and route structure to help players understand where they are and what is worth investigating.",
      "why": "Strong guidance reduces navigation friction while preserving discovery. The goal is not always to show the exact route; sometimes it is to make the next useful question readable.",
      "keyIdeas": [
        "Landmarks support orientation and memory.",
        "Sightlines can reveal goals, threats and future spaces.",
        "Contrast and lighting can prioritise routes.",
        "Gating can sequence spaces without feeling like arbitrary invisible walls."
      ],
      "mistakes": [
        "Putting a waypoint on top of a confusing level instead of fixing the level.",
        "Making every point of interest equally bright.",
        "Showing the destination but never helping the player understand how spaces connect."
      ],
      "diagram": {
        "title": "Guidance hierarchy",
        "nodes": [
          "LANDMARK",
          "SIGHTLINE",
          "LOCAL CUE",
          "ROUTE CHOICE",
          "REORIENT"
        ],
        "caption": "Players should repeatedly regain orientation after making a choice."
      },
      "example": {
        "game": "Firewatch",
        "title": "Guide exploration without turning the world into a corridor",
        "body": "Firewatch has to support free-looking exploration while still moving players toward story goals. World structure, goals, gating and level composition quietly narrow possibilities at the right moments, allowing the wilderness to feel explorable without becoming directionless.",
        "src": "https://cdn.akamai.steamstatic.com/steam/apps/383870/header.jpg",
        "sourceUrl": "https://www.firewatchgame.com/",
        "sourceTitle": "Campo Santo — Firewatch"
      },
      "sources": [
        {
          "title": "Designing for Exploration and Choice in Firewatch — GDC Vault",
          "url": "https://www.gdcvault.com/play/1022409/Designing-for-Exploration-and-Choice",
          "note": "Campo Santo discusses world structure, goals, gating and encounter design for a non-combat exploration game.",
          "kind": "Developer talk"
        },
        {
          "title": "Video: Designing for exploration and choice in Firewatch — Game Developer",
          "url": "https://www.gamedeveloper.com/design/video-designing-for-exploration-and-choice-in-i-firewatch-i-",
          "note": "Free video/article version of the Campo Santo design talk.",
          "kind": "Video"
        },
        {
          "title": "Firewatch — About",
          "url": "https://www.firewatchgame.com/about/",
          "note": "Official game information and developer audio-tour details.",
          "kind": "Official"
        }
      ],
      "task": {
        "title": "Remove the waypoint",
        "brief": "Choose a location currently dependent on a marker.",
        "steps": [
          "Identify the next important destination.",
          "Create one long-range landmark or sightline.",
          "Create one local cue at the decision point.",
          "Plan how the player reorients after turning a corner."
        ],
        "evidence": "An annotated top-down sketch plus one player-view sketch.",
        "stretch": "Give the sketch to someone and ask where they think they should go before explaining it."
      },
      "quiz": [
        {
          "q": "What is a landmark best at supporting?",
          "options": [
            "Orientation and spatial memory",
            "Random damage",
            "Inventory economy",
            "Input latency"
          ],
          "correct": 0,
          "feedback": "Distinct landmarks help players build and recover a mental map."
        },
        {
          "q": "If every doorway is equally bright and saturated, what happens to guidance?",
          "options": [
            "Visual hierarchy weakens",
            "Agency always increases",
            "Feedback loops disappear",
            "The economy breaks"
          ],
          "correct": 0,
          "feedback": "If everything is emphasised, nothing is prioritised."
        },
        {
          "q": "A waypoint fixes navigation confusion. Should the designer stop there?",
          "options": [
            "Not necessarily; inspect whether the space itself can communicate more clearly",
            "Yes, waypoints are always the final solution",
            "Delete the level",
            "Add more random lights"
          ],
          "correct": 0,
          "feedback": "HUD can support navigation, but it can also mask spatial readability problems."
        }
      ],
      "duration": "15–20 min",
      "caseStudy": {
        "intro": "Firewatch needs its wilderness to feel open while still delivering authored story beats. Guidance therefore comes from terrain, landmarks, gates, dialogue goals and composition rather than a corridor.",
        "observations": [
          "Distinct landmarks and silhouettes give players stable orientation points in spaces that otherwise share similar natural materials.",
          "Paths, elevation and blocked routes narrow possibilities locally without making the whole world feel linear.",
          "The map and compass support deliberate navigation, letting uncertainty remain part of the experience while preventing aimless wandering."
        ],
        "question": "Which cue tells the player where to look next without behaving like a floating quest arrow?"
      },
      "watch": {
        "kind": "Official trailers",
        "title": "Firewatch — Campo Santo media",
        "url": "https://www.firewatchgame.com/media/",
        "watchFor": "Landmarks, path framing, elevation, colour and environmental boundaries that make a natural space navigable.",
        "question": "Which visual cue gives direction without looking like a UI instruction? "
      }
    },
    {
      "id": "environmental-storytelling",
      "title": "Environmental Storytelling",
      "path": "space",
      "icon": "⌂",
      "short": "Let spaces communicate events, people and change without stopping play.",
      "definition": "Environmental storytelling uses spatial arrangement, props, damage, architecture, sound, lighting and traces of past events to let players infer what happened or what a place is for.",
      "why": "It turns environment art into readable evidence. The best examples support player interpretation and gameplay rather than scattering unrelated “story props” everywhere.",
      "keyIdeas": [
        "Ask what happened here, who used this place and what changed.",
        "Cause and effect makes clutter meaningful.",
        "Story detail should support the function and history of the space.",
        "Players may discover information in different orders, so each clue needs enough context."
      ],
      "mistakes": [
        "Blood, rubbish and graffiti everywhere with no cause.",
        "Using text logs for information the environment could communicate.",
        "Decorating before deciding what event the scene should imply."
      ],
      "diagram": {
        "title": "Evidence chain",
        "nodes": [
          "PAST EVENT",
          "PHYSICAL TRACE",
          "PLAYER NOTICES",
          "INFERENCE",
          "NEW EXPECTATION"
        ],
        "caption": "The player reconstructs a story from evidence rather than receiving a lecture."
      },
      "example": {
        "game": "OMORI",
        "title": "A space can represent memory as well as location",
        "body": "OMORI uses stark contrasts between White Space, Headspace and Faraway Town to make environment part of the story. Repetition, absence, object placement and changes in familiar places communicate memory, avoidance and trauma before the player is given a complete verbal explanation.",
        "src": "https://cdn.akamai.steamstatic.com/steam/apps/1150690/header.jpg",
        "sourceUrl": "https://www.omocat.com/omori",
        "sourceTitle": "OMOCAT — OMORI"
      },
      "sources": [
        {
          "title": "Trauma in OMORI’s Environmental Design — Games and Culture",
          "url": "https://journals.sagepub.com/doi/10.1177/15554120231162982",
          "note": "Academic analysis focused specifically on how OMORI’s spaces represent trauma and memory.",
          "kind": "Research"
        },
        {
          "title": "OMORI developer interview — Game*Spark",
          "url": "https://www.gamespark.jp/article/2021/02/05/105845.html",
          "note": "OMOCAT discusses the game’s story, themes, visual identity and the personal experiences that informed the work.",
          "kind": "Developer interview"
        },
        {
          "title": "OMORI Official Walkthrough & Artbook — OMOCAT",
          "url": "https://www.omocat-shop.com/collections/omori/products/omori-the-official-walkthrough-artbook",
          "note": "Official art and development material, including creator/artist material around the game’s world.",
          "kind": "Official"
        }
      ],
      "task": {
        "title": "Build a scene from an event",
        "brief": "Choose a simple event: argument, evacuation, failed experiment, rushed escape.",
        "steps": [
          "Write what happened in one sentence.",
          "List five physical traces it would leave.",
          "Place those clues from obvious to subtle.",
          "Remove any prop that does not support place, function or event."
        ],
        "evidence": "A top-down or screenshot annotation showing five evidence clues.",
        "stretch": "Ask a classmate what they think happened without telling them the answer."
      },
      "quiz": [
        {
          "q": "What makes environmental storytelling stronger?",
          "options": [
            "Props have a plausible cause and let players infer an event",
            "More random clutter",
            "Longer item names",
            "Every wall has text"
          ],
          "correct": 0,
          "feedback": "Cause-and-effect turns decoration into evidence."
        },
        {
          "q": "A room has blood decals on every surface with no source or event. What is the issue?",
          "options": [
            "The detail lacks readable cause and becomes generic decoration",
            "Too much agency",
            "Not enough currency",
            "Input randomness"
          ],
          "correct": 0,
          "feedback": "Environmental traces work when the player can connect them to plausible events."
        },
        {
          "q": "Why can environmental storytelling support gameplay too?",
          "options": [
            "It can foreshadow threats, routes, resources or rules while communicating fiction",
            "It can only tell lore",
            "It removes the need for level design",
            "It guarantees branching story"
          ],
          "correct": 0,
          "feedback": "Environmental evidence can prepare decisions as well as world-build."
        }
      ],
      "duration": "15–20 min",
      "caseStudy": {
        "intro": "OMORI makes space part of its narrative structure. Places do not only locate events; they represent memory, avoidance and changing relationships between the player and what happened.",
        "observations": [
          "White Space is defined as much by absence and repetition as by objects, making emptiness itself meaningful information.",
          "Headspace exaggerates colour, fantasy and familiarity, while Faraway Town uses a more grounded everyday structure; the contrast changes how identical themes are read.",
          "Returning to familiar locations after new knowledge or events lets small environmental differences carry narrative weight without a separate exposition scene."
        ],
        "question": "Choose one OMORI location. What does its layout, repetition or absence communicate before dialogue explains it?"
      },
      "watch": {
        "kind": "Official trailer",
        "title": "OMORI Trailer — OMOCAT",
        "url": "https://www.youtube.com/watch?v=erzgjfU271g",
        "youtubeId": "erzgjfU271g",
        "watchFor": "The contrast between worlds, repeated imagery, empty space and objects that feel emotionally loaded before their meaning is explained.",
        "question": "What does one location communicate through absence, repetition or contrast rather than dialogue? "
      }
    },
    {
      "id": "emergent-gameplay",
      "title": "Emergent Gameplay & System Interaction",
      "path": "space",
      "icon": "✣",
      "short": "Create rules that combine into outcomes you did not individually script.",
      "definition": "Emergent gameplay occurs when relatively simple rules interact to create complex situations, strategies or stories that were not authored as a fixed sequence.",
      "why": "Emergence can give games replayability and player expression. It also creates testing challenges because changing one rule may have consequences elsewhere in the system.",
      "keyIdeas": [
        "Systems need shared state or meaningful ways to affect each other.",
        "Simple rules can create complex outcomes when combined.",
        "Players will find strategies the designer did not predict.",
        "Unexpected does not automatically mean good—test whether emergence supports the game’s pillars."
      ],
      "mistakes": [
        "Calling any random event “emergence”.",
        "Hard-coding every possible interaction individually.",
        "Fixing surprising player strategies simply because they were not planned."
      ],
      "diagram": {
        "title": "Emergence",
        "nodes": [
          "SIMPLE RULE A",
          "SIMPLE RULE B",
          "PLAYER GOAL",
          "INTERACTION",
          "UNSCRIPTED OUTCOME"
        ],
        "caption": "The outcome is produced by system interaction, not selected from one authored script."
      },
      "example": {
        "game": "HITMAN World of Assassination",
        "title": "Author systems and opportunities, not every exact outcome",
        "body": "HITMAN’s locations combine disguises, schedules, restricted spaces, distractions, accidents, NPC behaviours and tools. Designers author the rules and opportunities, but players can combine them into assassination plans and mishaps that were not scripted as one fixed sequence.",
        "src": "https://cdn.akamai.steamstatic.com/steam/apps/1659040/header.jpg",
        "sourceUrl": "https://hitman.com/",
        "sourceTitle": "IO Interactive — HITMAN World of Assassination"
      },
      "sources": [
        {
          "title": "Modular Sandbox Design: Tools and Workflows for Hitman — GDC Vault",
          "url": "https://www.gdcvault.com/play/1022840/Modular-Sandbox-Design-Tools-and",
          "note": "IO Interactive explains the modular systems and workflows behind its assassination sandbox.",
          "kind": "Developer talk"
        },
        {
          "title": "Lessons learned from five years on the Hitman series — Game Developer",
          "url": "https://www.gamedeveloper.com/production/q-a-lessons-learned-from-five-years-spent-on-the-i-hitman-i-series",
          "note": "IO Interactive discusses systemic kills, player-created scenarios and lessons from building the sandbox.",
          "kind": "Developer interview"
        },
        {
          "title": "Level Design in Hitman: Guiding Players in a Non-Linear Sandbox — GDC",
          "url": "https://www.youtube.com/watch?v=hc8_W2PERZE",
          "note": "Official GDC video about supporting players inside an open-ended sandbox without removing freedom.",
          "kind": "Video"
        }
      ],
      "task": {
        "title": "Make two rules talk",
        "brief": "Take two mechanics that currently do not affect one another.",
        "steps": [
          "Describe each rule separately.",
          "Create one shared resource, state or spatial interaction between them.",
          "Predict three outcomes players might discover.",
          "Test whether the interaction supports a game pillar."
        ],
        "evidence": "A two-system interaction diagram.",
        "stretch": "Find one exploit. Decide whether to remove it, limit it or embrace it."
      },
      "quiz": [
        {
          "q": "What best describes emergent gameplay?",
          "options": [
            "Complex outcomes produced by interacting rules and player behaviour",
            "A scripted cutscene",
            "A random loading screen",
            "A fixed tutorial prompt"
          ],
          "correct": 0,
          "feedback": "Emergence comes from system interaction rather than a predetermined sequence."
        },
        {
          "q": "An unexpected strategy appears during testing. What should a designer do first?",
          "options": [
            "Understand how it affects the game before deciding whether to remove it",
            "Delete it immediately because it was unplanned",
            "Ignore testing",
            "Add more effects"
          ],
          "correct": 0,
          "feedback": "Unexpected play can be valuable; evaluate it against goals and balance."
        },
        {
          "q": "Why can emergence increase replayability?",
          "options": [
            "The same systems can produce different situations and strategies",
            "It always adds more story text",
            "It guarantees randomness",
            "It removes player choice"
          ],
          "correct": 0,
          "feedback": "System combinations can create varied outcomes without bespoke content for each one."
        }
      ],
      "duration": "15–20 min",
      "caseStudy": {
        "intro": "HITMAN builds locations from interacting rules—disguises, suspicion, schedules, accidents, restricted zones and tools—then lets players combine them into plans the level does not need to script one-by-one.",
        "observations": [
          "NPC schedules create predictable opportunities, but distractions and player interference can push those routines into unexpected states.",
          "Disguises change access and suspicion rules, turning the same physical space into different gameplay depending on the current identity.",
          "Accidents, objects, crowds and security systems overlap, allowing a solution to emerge from several simple systems rather than one bespoke “correct” assassination."
        ],
        "question": "Find a moment where two independent systems interact to create an opportunity the player can exploit."
      },
      "watch": {
        "kind": "Developer talk",
        "title": "Level Design in HITMAN: Guiding Players in a Non-Linear Sandbox — GDC",
        "url": "https://www.youtube.com/watch?v=hc8_W2PERZE",
        "youtubeId": "hc8_W2PERZE",
        "watchFor": "How level structure guides players while disguises, NPC routines, opportunities and systemic rules preserve freedom.",
        "question": "Where can a player create a plan by combining systems instead of following one authored sequence? "
      }
    },
    {
      "id": "scope-constraints",
      "title": "Scope & Constraints",
      "path": "process",
      "icon": "▱",
      "short": "Finish a smaller coherent game instead of designing an imaginary giant one.",
      "definition": "Scope is the amount of content, systems, polish and production work a project demands. Constraints deliberately limit options so the team can focus effort and finish the most important experience.",
      "why": "Student projects usually fail through uncontrolled ambition, not a lack of ideas. Every new mechanic creates design, implementation, art, UI, audio, testing and bug-fixing work.",
      "keyIdeas": [
        "Define a minimum playable version first.",
        "Time is a design constraint, not just a scheduling problem.",
        "Prioritise pillars and core loop before optional breadth.",
        "Cut whole systems before shrinking every system until none is good."
      ],
      "mistakes": [
        "“We can add it later” used for 20 unplanned features.",
        "Building final assets for systems that have not survived testing.",
        "Making the map bigger because there is empty space."
      ],
      "diagram": {
        "title": "Scope funnel",
        "nodes": [
          "BIG IDEA",
          "CORE EXPERIENCE",
          "MUST WORK",
          "NICE TO HAVE",
          "CUT / LATER"
        ],
        "caption": "A finished small game provides more evidence than a huge design document and half a prototype."
      },
      "example": {
        "game": "A Short Hike",
        "title": "Small scope can sharpen the whole game",
        "body": "A Short Hike was built around a deliberately tiny open world and a tight production deadline. Its limited scale encouraged reusable tools, a focused movement set and “stretch” features that could be cut without breaking the core experience—scope becoming a design strength rather than only a production restriction.",
        "src": "https://cdn.akamai.steamstatic.com/steam/apps/1055540/header.jpg",
        "sourceUrl": "https://ashorthike.com/",
        "sourceTitle": "Adam Robinson-Yu — A Short Hike"
      },
      "sources": [
        {
          "title": "Crafting A Tiny Open World: A Short Hike Postmortem — GDC Vault",
          "url": "https://www.gdcvault.com/play/1026613/",
          "note": "Adam Robinson-Yu explains how a small scale, deadline and production constraints shaped the game.",
          "kind": "Developer talk"
        },
        {
          "title": "Finding smart shortcuts in A Short Hike — Game Developer",
          "url": "https://www.gamedeveloper.com/design/finding-smart-shortcuts-in-a-short-hike-postmortem-unlocking-the-vault-4",
          "note": "A concise breakdown of the postmortem’s lessons on limitations, stretch goals and finishing a small game.",
          "kind": "Developer article"
        },
        {
          "title": "A Short Hike — official press kit",
          "url": "https://www.ashorthike.com/press/index.html",
          "note": "Creator Adam Robinson-Yu’s own press kit contains trailer, b-roll, screenshots and the concise feature set behind the tiny open world.",
          "kind": "Official"
        }
      ],
      "task": {
        "title": "Cut it to the playable truth",
        "brief": "Write your current project as a minimum playable version.",
        "steps": [
          "Name the one core loop that must work.",
          "List only the components/systems required for one complete play session.",
          "Move everything else into “later if proven”.",
          "Cut one feature now and explain what development work disappears with it."
        ],
        "evidence": "A MUST / LATER / CUT board.",
        "stretch": "Estimate how many assets, rules, UI states and tests one “small” feature really creates."
      },
      "quiz": [
        {
          "q": "Which scope decision is strongest?",
          "options": [
            "Build 100 cards before testing",
            "Make 12 working cards that prove the full loop, then expand",
            "Add every idea so nobody is disappointed",
            "Start final packaging first"
          ],
          "correct": 1,
          "feedback": "A minimum playable set proves the design before scaling production."
        },
        {
          "q": "Why does one new mechanic increase more than programming work?",
          "options": [
            "It can create art, UI, audio, rules, balance, tutorial and testing work too",
            "It never affects anything else",
            "Only marketing changes",
            "It reduces scope automatically"
          ],
          "correct": 0,
          "feedback": "Features create dependencies across multiple disciplines."
        },
        {
          "q": "What is a healthy use of constraints?",
          "options": [
            "Focus effort on the intended experience and force prioritisation",
            "Prevent all creativity",
            "Guarantee a short game",
            "Remove player agency"
          ],
          "correct": 0,
          "feedback": "Constraints can sharpen creative decisions by reducing irrelevant possibilities."
        }
      ],
      "duration": "15–20 min",
      "caseStudy": {
        "intro": "A Short Hike demonstrates how a deliberately small project can feel generous by concentrating effort on a compact world, a few expressive movement systems and optional discoveries.",
        "observations": [
          "The island is small enough for locations to be reused, crossed from different angles and learned by the player instead of requiring enormous content volume.",
          "Climbing, gliding and feathers make traversal itself enjoyable, so the same terrain can support exploration without needing a new mechanic in every area.",
          "Optional characters and activities enrich the route to the summit while remaining cuttable or non-critical to the central goal."
        ],
        "question": "Which feature makes the small world feel richer without dramatically increasing production scope?"
      },
      "watch": {
        "kind": "Official trailer & b-roll",
        "title": "A Short Hike — official press kit",
        "url": "https://www.ashorthike.com/press/index.html",
        "watchFor": "How a compact world is made dense through traversal, revisiting spaces, optional activities and a small number of reusable mechanics.",
        "question": "Which element adds perceived richness without requiring a huge amount of unique content? "
      }
    },
    {
      "id": "prototyping",
      "title": "Prototyping: Fail Cheaply",
      "path": "process",
      "icon": "□",
      "short": "Build the cheapest thing that can answer the next design question.",
      "definition": "A prototype is a deliberately incomplete version built to test an assumption. Its value is the answer it gives, not how polished it looks.",
      "why": "Fast prototypes let teams discover weak rules before expensive art, code and content make them emotionally or practically difficult to change.",
      "keyIdeas": [
        "Prototype one risk at a time when possible.",
        "Paper and tokens can test digital systems.",
        "Placeholder art is a feature when visual polish is not the question.",
        "Write the question before building the prototype."
      ],
      "mistakes": [
        "Treating prototype code/art as sacred production work.",
        "Building everything before testing anything.",
        "Polishing the prototype until people judge appearance instead of the rule."
      ],
      "diagram": {
        "title": "Prototype cycle",
        "nodes": [
          "QUESTION",
          "CHEAP BUILD",
          "PLAY / OBSERVE",
          "ANSWER",
          "KEEP / CHANGE / KILL"
        ],
        "caption": "If the prototype cannot fail, it probably is not testing a useful assumption."
      },
      "example": {
        "game": "Hades",
        "title": "Build something testable, then let evidence reshape it",
        "body": "Hades was designed for Early Access from the beginning. Supergiant shipped a playable structure, watched how people used it and repeatedly changed systems, balance and content. It is a useful large-scale example of the prototype mindset: expose uncertain ideas to play before treating them as final.",
        "src": "https://cdn.akamai.steamstatic.com/steam/apps/1145360/header.jpg",
        "sourceUrl": "https://www.supergiantgames.com/games/hades/",
        "sourceTitle": "Supergiant Games — Hades"
      },
      "sources": [
        {
          "title": "Hades FAQ — Supergiant Games",
          "url": "https://www.supergiantgames.com/blog/hades-faq/",
          "note": "Supergiant explains that Hades was designed around Early Access so it could evolve through player feedback.",
          "kind": "Official"
        },
        {
          "title": "Hades: Developing Hell — Noclip",
          "url": "https://www.noclip.video/hades",
          "note": "A documentary series embedded with Supergiant throughout Hades’ Early Access development.",
          "kind": "Video"
        },
        {
          "title": "Prototyping Based Design: A Better Way to Create Games — GDC Vault",
          "url": "https://www.gdcvault.com/play/1012473/Prototyping-Based-Design-A-Better",
          "note": "Professional guidance on answering design questions with cheap, playable prototypes.",
          "kind": "Developer talk"
        }
      ],
      "task": {
        "title": "Write the question first",
        "brief": "Choose one risky assumption in your project.",
        "steps": [
          "Write it as a yes/no or comparative question.",
          "Build the cheapest version that can answer it.",
          "Remove anything not needed for that test.",
          "Record the result and next decision."
        ],
        "evidence": "A photo/screenshot plus the question and what you learned.",
        "stretch": "Create a second prototype that tests the opposite solution."
      },
      "quiz": [
        {
          "q": "What makes a prototype successful?",
          "options": [
            "It answers a useful design question",
            "It looks final",
            "It contains every feature",
            "Nobody finds a problem"
          ],
          "correct": 0,
          "feedback": "A prototype exists to generate information for the next decision."
        },
        {
          "q": "Why use placeholder art?",
          "options": [
            "It keeps effort focused when visual quality is not the current question",
            "It always ships in the final game",
            "It removes the need for artists",
            "It guarantees balance"
          ],
          "correct": 0,
          "feedback": "Placeholders keep iteration cheap and direct attention to the mechanic."
        },
        {
          "q": "A prototype cannot possibly disprove the team’s idea. What is wrong?",
          "options": [
            "It may not be testing a meaningful assumption",
            "It is definitely perfect",
            "It needs final textures",
            "It needs a logo"
          ],
          "correct": 0,
          "feedback": "Useful prototypes are capable of telling you the idea does not work."
        }
      ],
      "duration": "15–20 min",
      "caseStudy": {
        "intro": "Hades used Early Access as a long-running playable prototype environment: Supergiant exposed unfinished systems to real players, observed behaviour and repeatedly changed the game before treating it as complete.",
        "observations": [
          "Updates changed balance, progression, content and presentation while the core loop remained playable enough to generate useful evidence.",
          "The team could test assumptions with real player behaviour rather than relying only on internal confidence about what would work.",
          "Early Access was designed into the production plan, so feedback and iteration were part of development rather than a marketing event at the end."
        ],
        "question": "What design question can a rough playable build answer that a design document cannot?"
      },
      "watch": {
        "kind": "Development documentary",
        "title": "Hades: Developing Hell #01 — Noclip",
        "url": "https://www.youtube.com/watch?v=JzyE9hi912c",
        "youtubeId": "JzyE9hi912c",
        "watchFor": "The state of the game at Early Access launch, what the team is uncertain about and why showing unfinished work creates useful evidence.",
        "question": "Which decision is being tested by players rather than treated as final? "
      }
    },
    {
      "id": "playtesting-iteration",
      "title": "Playtesting & Iteration",
      "path": "process",
      "icon": "↻",
      "short": "Observe what players actually do, then change the design based on evidence.",
      "definition": "Playtesting puts a playable design in front of people to collect evidence about behaviour, understanding and experience. Iteration is the repeated cycle of build → test → observe → change → test again.",
      "why": "Designers know the intended rules, so they are poor substitutes for fresh players. Watching where people hesitate, misunderstand, exploit or disengage reveals problems explanation alone cannot.",
      "keyIdeas": [
        "Observe before explaining.",
        "Ask players what they thought would happen, not only whether they “liked it”.",
        "Change one important variable at a time when diagnosing.",
        "Record problems and decisions so iteration has a history."
      ],
      "mistakes": [
        "Defending the game while somebody is confused.",
        "Only testing with the design team.",
        "Changing five variables at once and not knowing what helped.",
        "Writing “playtest went well” as evidence."
      ],
      "diagram": {
        "title": "Iteration loop",
        "nodes": [
          "BUILD",
          "WATCH",
          "FIND PATTERN",
          "CHANGE",
          "RETEST"
        ],
        "caption": "A bug or misunderstanding discovered early is useful information, not failure."
      },
      "example": {
        "game": "Left 4 Dead",
        "title": "Observe real players, change the game, test again",
        "body": "Valve used external playtesting throughout Left 4 Dead’s development, watching where players struggled and changing systems, visuals and spaces in response. The important evidence was behaviour: what testers actually saw, understood and did—not what the team hoped they would do.",
        "src": "https://cdn.akamai.steamstatic.com/steam/apps/500/header.jpg",
        "sourceUrl": "https://www.l4d.com/",
        "sourceTitle": "Valve — Left 4 Dead"
      },
      "sources": [
        {
          "title": "Left 4 Dead Blog — playtesting at Valve",
          "url": "https://www.l4d.com/blog/post.php?id=1849",
          "note": "Valve describes bringing in people from outside the company, observing them and changing the game based on their experience.",
          "kind": "Official"
        },
        {
          "title": "Valve publications",
          "url": "https://www.valvesoftware.com/en/publications",
          "note": "Valve’s official archive lists “Valve’s Approach to Playtesting: The Application of Empiricism” and its Left 4 Dead design talks.",
          "kind": "Official"
        },
        {
          "title": "Left 4 Dead art direction and playtesting — Valve",
          "url": "https://www.l4d.com/blog/?p=51",
          "note": "Concrete examples of visual and level-design changes made after playtesters could not read threats or routes clearly.",
          "kind": "Developer article"
        }
      ],
      "task": {
        "title": "Run a silent first five minutes",
        "brief": "Give your prototype to another group.",
        "steps": [
          "Explain only the goal and anything absolutely required for setup.",
          "Watch the first five minutes without correcting them.",
          "Record three hesitations, misunderstandings or unexpected strategies.",
          "Change the single highest-impact problem and retest."
        ],
        "evidence": "A small test log: problem → evidence → change → result.",
        "stretch": "Ask the second group what they thought the rules were before showing them your written rules."
      },
      "quiz": [
        {
          "q": "A tester misunderstands the same rule as three other people. What is the best response?",
          "options": [
            "Treat the repeated misunderstanding as design/communication evidence",
            "Tell them they are playing wrong and ignore it",
            "Add more unrelated features",
            "Only test with experts"
          ],
          "correct": 0,
          "feedback": "Repeated misunderstanding is valuable evidence about rules or presentation."
        },
        {
          "q": "Why change one major variable at a time during diagnosis?",
          "options": [
            "It helps identify which change caused the result",
            "It makes the game prettier",
            "It guarantees success",
            "It prevents all bugs"
          ],
          "correct": 0,
          "feedback": "Controlled changes make cause and effect easier to understand."
        },
        {
          "q": "Which playtest note is most useful?",
          "options": [
            "“It was good”",
            "“Three players forgot the swamp movement rule; adding the cost to the tile reduced errors in the next test”",
            "“They liked it”",
            "“We finished”"
          ],
          "correct": 1,
          "feedback": "Specific observation, change and retest evidence demonstrates iteration."
        }
      ],
      "duration": "15–20 min",
      "caseStudy": {
        "intro": "Left 4 Dead is a classic example of observation-led iteration. Valve repeatedly put the game in front of people outside the team and changed what players failed to read, understand or do.",
        "observations": [
          "The team watched behaviour rather than asking testers whether they “liked” a feature and treating opinion alone as proof.",
          "Visual hierarchy and route communication changed when players missed threats or navigational information the developers thought was obvious.",
          "Repeated tests separated one-person mistakes from patterns, giving the team evidence for where the design—not the tester—needed to change."
        ],
        "question": "What is the difference between “the tester played badly” and evidence that the game failed to communicate?"
      },
      "watch": {
        "kind": "Developer video",
        "title": "How Valve uses biofeedback to make better games — GDC / Game Developer",
        "url": "https://www.gamedeveloper.com/design/video-how-valve-uses-biofeedback-to-make-better-games",
        "watchFor": "How Valve measures what players actually do and experience, then uses that evidence alongside conventional observation.",
        "question": "What evidence could contradict a tester saying “it was fine”? "
      }
    },
    {
      "id": "translating-between-media",
      "title": "Translating Games Between Media",
      "path": "process",
      "icon": "🎮→🎲",
      "short": "Convert the experience, decisions and core loop—not the videogame screen—into physical systems.",
      "definition": "Adaptation between media is a design translation problem. Identify the experience and decisions worth preserving, then replace platform-specific systems with rules and components appropriate to the new medium.",
      "why": "A computer silently handles AI, physics, timers, visibility, inventories and calculations. A tabletop game needs players and physical components to handle only the information that creates worthwhile decisions.",
      "keyIdeas": [
        "KEEP the core experience and recognisable decisions.",
        "SIMPLIFY calculations and content volume.",
        "CHANGE systems that only work because a computer handles them.",
        "REMOVE features that do not serve the tabletop loop.",
        "REPLACE digital processes with cards, tokens, dice, tracks, hidden information or priority rules."
      ],
      "mistakes": [
        "Making “videogame Monopoly” by changing only theme/art.",
        "Trying to reproduce every quest, stat and item.",
        "Choosing a videogame only one team member understands.",
        "Starting final board/card art before the paper loop works."
      ],
      "diagram": {
        "title": "Adaptation test",
        "nodes": [
          "ORIGINAL EXPERIENCE",
          "CORE LOOP / DECISIONS",
          "KEEP • SIMPLIFY • REMOVE",
          "PHYSICAL RULES",
          "PLAYTEST THE FEEL"
        ],
        "caption": "The success test is not “does it contain everything?” but “does this still create the important kind of play?”"
      },
      "example": {
        "game": "Slay the Spire → Slay the Spire: The Board Game",
        "title": "Preserve the decisions, not the computer",
        "body": "The digital Slay the Spire can calculate large numbers, enemy logic and many status effects instantly. The board game keeps the recognisable deckbuilding decisions but compresses maths, converts automated systems into cards/tokens and adds cooperative play that makes sense around a physical table.",
        "src": "https://cdn.akamai.steamstatic.com/steam/apps/646570/header.jpg",
        "sourceUrl": "https://contentiongames.com/games/slay/",
        "sourceTitle": "Contention Games — Slay the Spire: The Board Game"
      },
      "sources": [
        {
          "title": "Slay the Spire: The Board Game — Contention Games",
          "url": "https://contentiongames.com/games/slay/",
          "note": "Official board-game page: components, co-op structure and the physical adaptation.",
          "kind": "Official"
        },
        {
          "title": "Slay the Spire: The Board Game rulebook — Contention Games",
          "url": "https://contentiongames.com/_images/STS_KS_Rulebook.pdf",
          "note": "Read the physical rules and compare what was preserved, simplified or replaced.",
          "kind": "Official rules"
        },
        {
          "title": "Designing Slay the Spire — The Board Game — Nerdlab",
          "url": "https://nerdlab-games.com/090-designing-slay-the-spire-the-boardgame-with-gary-dworetsky/",
          "note": "Interview/podcast with board-game designer Gary Dworetsky about adapting the digital game.",
          "kind": "Developer interview"
        },
        {
          "title": "Dark Souls Board Games — Steamforged",
          "url": "https://steamforged.com/en-gb/pages/dark-souls-board-games",
          "note": "A second adaptation to compare: which digital ideas survive differently at the table?",
          "kind": "Further comparison"
        }
      ],
      "task": {
        "title": "Translation statement",
        "brief": "Choose a videogame that EVERY member of your team has actually played and understands.",
        "steps": [
          "Agree its core loop and the feeling you want to keep.",
          "List systems under KEEP / SIMPLIFY / CHANGE / REMOVE / REPLACE.",
          "Translate one digital system into a physical rule or component.",
          "Write: “Our board game captures the ___ of ___ by using ___.”"
        ],
        "evidence": "One adaptation matrix plus the statement.",
        "stretch": "Give the physical rule to another team. Can they identify what experience it is trying to preserve?"
      },
      "quiz": [
        {
          "q": "What is the strongest first question when adapting a videogame to tabletop?",
          "options": [
            "Which art can we print?",
            "What experience and repeated decisions must survive?",
            "How many cards can we make?",
            "Can we reproduce every statistic?"
          ],
          "correct": 1,
          "feedback": "Adaptation starts by identifying the essential experience and loop."
        },
        {
          "q": "A videogame enemy uses complex AI. What is a good tabletop translation?",
          "options": [
            "Ask one player to secretly run a full AI simulation",
            "Use clear behaviour cards or priority rules that preserve the tactical decision",
            "Delete every enemy",
            "Roll randomly with no readable logic"
          ],
          "correct": 1,
          "feedback": "Physical rules should simplify computation while retaining useful behaviour and decisions."
        },
        {
          "q": "Why must every team member know and have played the chosen videogame?",
          "options": [
            "So design decisions can be discussed and challenged by the whole team",
            "Because the box needs four names",
            "To increase component count",
            "It guarantees perfect balance"
          ],
          "correct": 0,
          "feedback": "Shared knowledge prevents one person becoming the sole source of truth for the adaptation."
        }
      ],
      "duration": "20–30 min",
      "examples": [
        {
          "game": "Dark Souls: The Board Game",
          "title": "Preserve danger and learning, not analogue-stick combat",
          "body": "The tabletop version focuses on dangerous exploration, enemies, equipment, limited resources and learning from failure rather than trying to reproduce real-time controls.",
          "sourceUrl": "https://steamforged.com/en-gb/pages/dark-souls-board-games",
          "sourceTitle": "Steamforged — Dark Souls Board Games"
        },
        {
          "game": "Minecraft: Builders & Biomes",
          "title": "Select a recognisable subset",
          "body": "The board game concentrates on collecting blocks, building structures, exploring and fighting mobs. It does not attempt to simulate the full sandbox.",
          "sourceUrl": "https://www.ravensburger.co.uk/en-GB/products/games/strategy-games/minecraft-builders-biomes--26132",
          "sourceTitle": "Ravensburger — Minecraft: Builders & Biomes"
        },
        {
          "game": "Slay the Spire: The Board Game",
          "title": "Translate a digital deckbuilder into cooperative physical handling",
          "body": "The adaptation preserves deckbuilding, combat choices and runs while changing information handling and multiplayer structure for tabletop play.",
          "sourceUrl": "https://contentiongames.com/games/slay/",
          "sourceTitle": "Contention Games — Slay the Spire: The Board Game"
        }
      ],
      "caseStudy": {
        "intro": "Slay the Spire: The Board Game succeeds by preserving the decision structure of deckbuilding while replacing calculations and automation that would be tedious at a table.",
        "observations": [
          "Damage, status effects and enemy behaviour are compressed into values, cards, cubes and tokens that people can update without a computer.",
          "The recognisable loop—fight, choose rewards, build the deck, manage risk, climb—survives even though many numbers and effects are simplified.",
          "Co-operative play is a new tabletop dynamic: adaptation adds something appropriate to people sharing a physical table instead of copying the solo digital experience literally."
        ],
        "question": "Identify one automated digital task the board game replaces. What physical component or rule now carries that job?"
      },
      "watch": {
        "kind": "Tabletop gameplay tutorial",
        "title": "Slay the Spire: The Board Game — solo tutorial & playthrough",
        "url": "https://boardgamegeek.com/video/517475/slay-the-spire-the-board-game/slay-the-spire-the-board-game-solo-tutorial-and-pl",
        "watchFor": "What the physical version tracks with cards, cubes, boards and tokens that the videogame calculates automatically.",
        "question": "Find one rule that was simplified or made physical so human players can operate it at the table. "
      }
    }
  ]
};
