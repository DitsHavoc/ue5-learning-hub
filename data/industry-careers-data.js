window.UE5_INDUSTRY_CAREERS_DATA = {
  version: '3.49.3',
  buildDate: '2026-09-10',
  title: 'Find Your Place in the Games Industry',
  subtitle: 'Level 4 • Industry roles, real careers, skills, evidence and your next move',
  xp: 25,
  passPercent: 80,
  chapters: [
    {
      id: 'industry', order: 1, icon: '⌘', title: 'The Industry', slides: '5–39', time: '45–70 min across live delivery',
      question: 'What does the games industry actually look like?',
      short: 'Follow a real game through the ecosystem, investigate co-development and map the UK clusters where studios grow.',
      checkpoint: 'Save one credits investigation and one UK cluster finding. The scenario check can be taken before or after; both are needed to complete the chapter.',
      keyIdeas: [
        'A modern game is usually produced by a network of organisations rather than one isolated studio.',
        'Credits are useful primary evidence for hidden co-development, outsourcing, QA, localisation and technology partners.',
        'Studio scale changes specialisation, communication, hierarchy and the kind of responsibility an individual developer carries.',
        'UK clusters grow because experience moves through people: studios train talent, talent moves, and new studios form.'
      ],
      realityChecks: [
        {
          id:'who-made-it',
          q:'A store page lists one developer and one publisher. Who actually made the game?',
          options:[
            'The named developer — everyone else is support.',
            'The publisher, because they paid for it.',
            'Potentially a wider network of internal teams, co-development studios, outsourcers, middleware, localisation and QA partners.',
            'Whoever owns the IP.'
          ],
          correct:2,
          optionFeedback:[
            'That is the common shortcut. Full credits can reveal many other companies doing substantial development work.',
            'Publishers can fund, market and distribute a game, but that does not mean publisher staff created every asset, system or test build.',
            'Strong call. Modern game production is often distributed, which is why the full credits are better evidence than the logo on the store page.',
            'Ownership and authorship are different. An IP owner can control the property without personally producing every part of the game.'
          ],
          reveal:'The phrase “the developer” can hide a much bigger production network. Credits are one of the best places to see the real pipeline.',
          caseTitle:'SUMO DIGITAL — CO-DEVELOPMENT IN PLAIN SIGHT',
          caseText:'Sumo Digital openly offers full development, co-development, porting, engineering and live operations. A studio can contribute major parts of a shipped game without being the name most players remember.',
          sourceTitle:'Sumo Digital — Co-development',
          sourceUrl:'https://www.sumo-digital.com/our-services/co-development/'
        },
        {
          id:'bigger-better',
          q:'A 500-person studio should be able to make a better game than a studio with fewer than 20 people. True?',
          options:[
            'Yes — more people should always mean a better game.',
            'Usually yes, because every extra specialist automatically improves quality.',
            'No — scale changes capacity and specialisation, but it does not guarantee quality.',
            'No — small teams are always more creative than large ones.'
          ],
          correct:2,
          optionFeedback:[
            'More people can increase capacity, but they also increase coordination, cost and communication overhead. Quality is not a headcount formula.',
            'Specialists can raise quality in particular areas, but only if the project, direction and production system let their work fit together.',
            'Exactly. Team size changes what is possible and how work is organised; it does not produce quality automatically.',
            'That just flips the stereotype. Small teams can move quickly, but they also have fewer people, less redundancy and less specialist coverage.'
          ],
          reveal:'Team size is a production variable, not a quality score.',
          caseTitle:'HADES — FEWER THAN 20 EMPLOYEES',
          caseText:'Supergiant described Hades as being made by an independent studio with fewer than 20 employees while delivering more than 22,000 lines of fully voiced dialogue.',
          sourceTitle:'GDC Vault — Breathing Life into Greek Myth: The Dialogue of Hades',
          sourceUrl:'https://www.gdcvault.com/play/1026975/Breathing-Life-into-Greek-Myth'
        },
        {
          id:'big-owner-safe',
          q:'A giant parent company buys a studio. What is the safest conclusion about the employees?',
          options:[
            'Their jobs are now safer because the parent company has more money.',
            'Their jobs are now less safe because acquisitions are always bad.',
            'There is not enough information: deeper pockets can help, but strategy, debt, performance and restructuring can still put jobs at risk.',
            'Nothing changes except the logo.'
          ],
          correct:2,
          optionFeedback:[
            'More capital can help, but ownership does not guarantee a particular studio will remain strategically important.',
            'Acquisitions can also fund growth, technology, distribution and projects that might otherwise be impossible. “Always bad” is too simple.',
            'Strongest answer. Acquisition changes power and resources, but the consequences depend on what the parent company does next.',
            'Ownership can change budgets, reporting lines, IP control, project approval and even whether the studio continues to exist.'
          ],
          reveal:'The useful question is not “are acquisitions good?” but “good for whom, under what conditions, and who carries the risk?”',
          caseTitle:'EMBRACER — GROWTH, THEN RESTRUCTURING',
          caseText:'After years of expansion, Embracer launched a major restructuring programme in 2023. Its 2023/24 annual report records a cumulative headcount reduction of 1,583 during that programme, alongside divestments and project write-downs.',
          sourceTitle:'Embracer Group — Annual Report 2023/24',
          sourceUrl:'https://embracer.com/wp-content/uploads/2024/06/Embracer-Group-publishes-Annual-Report-20232024-240620.pdf'
        },
        {
          id:'shipped-healthy',
          q:'A studio has just shipped a big commercial game. Does that prove the company itself is financially healthy?',
          options:[
            'Yes — shipping a major game means the company has made it.',
            'Usually yes — publishers would stop the launch if the studio was in trouble.',
            'No — a studio can ship a real product and still have dangerous debt, cash-flow or financing problems.',
            'Only if the Metacritic score is high.'
          ],
          correct:2,
          optionFeedback:[
            'Shipping proves that a product reached market. It does not reveal the company’s debt, cash position, burn rate or obligations.',
            'A publisher can release a game while the developer is under serious financial pressure. Publishing and studio finances are not the same thing.',
            'Exactly. A finished game is evidence of production, not automatically evidence of a healthy balance sheet.',
            'Critical reception and company solvency are different measures.'
          ],
          reveal:'A game can look successful from the outside while the business behind it is under severe pressure.',
          caseTitle:'38 STUDIOS — KINGDOMS OF AMALUR',
          caseText:'Kingdoms of Amalur: Reckoning launched in February 2012. Rhode Island had backed 38 Studios with $75 million of taxable revenue bonds; the company filed for Chapter 7 bankruptcy on 7 June 2012.',
          sourceTitle:'State of Rhode Island — 38 Studios bond disclosure',
          sourceUrl:'https://treasury.ri.gov/sites/g/files/xkgbur646/files/assets/55b05bcdd4c9610651019c44/State_of_RI_GO_Bonds_2014_Series_B_C_D_.pdf'
        },
        {
          id:'sunk-cost',
          q:'A game has already cost more than $100 million and is years late. Is the money already spent a good reason to keep funding it?',
          options:[
            'Yes — otherwise all the previous spending was wasted.',
            'Yes — expensive games are too big to cancel.',
            'No — past spending is already gone. The next decision should depend on future costs, benefits, obligations and alternatives.',
            'No — any delayed project should be cancelled immediately.'
          ],
          correct:2,
          optionFeedback:[
            'That is the classic sunk-cost trap. Money already spent cannot be recovered by spending more simply because it was spent.',
            '“Too big to cancel” can become an emotional argument rather than a financial one. Sometimes continuation is right, but it needs future-looking evidence.',
            'Correct. Past cost matters as history, but the decision should be about what happens from this point onward.',
            'Delay alone is not enough. Contracts, expected revenue, strategic value and the remaining work all matter.'
          ],
          reveal:'Sunk cost does not mean “cancel it”. It means do not justify the next pound purely because of the pounds already gone.',
          caseTitle:'SKULL AND BONES — DEVELOPMENT HELL',
          caseText:'Kotaku reported that Skull and Bones began in 2013 as a multiplayer expansion to Assassin’s Creed IV: Black Flag, changed direction repeatedly and had reportedly cost Ubisoft more than $120 million by 2021. That figure came from sources familiar with the project, not an Ubisoft financial disclosure.',
          sourceTitle:'Kotaku — Inside Ubisoft Singapore’s struggle to ship Skull and Bones',
          sourceUrl:'https://kotaku.com/first-it-was-an-assassins-creed-expansion-now-its-ubis-1847326742'
        },
        {
          id:'headline-context',
          q:'A headline says: “Rockstar worked 100-hour weeks on Red Dead Redemption 2.” What should you conclude first?',
          options:[
            'The whole development team definitely worked 100-hour weeks.',
            'The story proves crunch is fake because Rockstar denied it.',
            'Check the original wording, who “we” referred to, the time period, and what other workers reported.',
            '100-hour weeks are acceptable if the game reviews well.'
          ],
          correct:2,
          optionFeedback:[
            'The famous quote was later clarified as referring to a four-person senior writing team during three intense weeks, not the whole studio.',
            'The clarification narrows the specific 100-hour claim, but it does not erase wider reporting and employee accounts about overtime and pressure.',
            'Exactly. This is source literacy: separate the headline, the clarification and the wider evidence before making a claim.',
            'Review scores do not answer whether working conditions were voluntary, sustainable, compensated or fairly distributed.'
          ],
          reveal:'Good industry analysis often begins by slowing down a dramatic headline and checking exactly what the evidence supports.',
          caseTitle:'RED DEAD REDEMPTION 2 — THE 100-HOUR HEADLINE',
          caseText:'Dan Houser’s “100-hour weeks” remark was later clarified as three intense weeks for a four-person senior writing team. Contemporary reporting also collected a range of employee accounts about crunch, making the story more complicated than either “everyone did 100 hours” or “there was no crunch”.',
          sourceTitle:'Ars Technica — Rockstar developers speak out about the 100-hour comment',
          sourceUrl:'https://arstechnica.com/gaming/2018/10/red-dead-redemption-2-devs-say-quoted-100-hour-weeks-arent-the-norm/'
        },
        {
          id:'goldeneye-team',
          q:'GoldenEye 007 became one of the defining Nintendo 64 games. What is the best estimate of the core development team?',
          options:[
            'Around 12 people.',
            'Around 60 people.',
            'Around 150 people.',
            'More than 500 people.'
          ],
          correct:0,
          optionFeedback:[
            'Yes. The Guardian’s retrospective describes GoldenEye as being built by 12 young people — tiny by modern AAA expectations.',
            'A reasonable modern guess, but still far too high for this project.',
            'That sounds plausible for a much later large production, not GoldenEye.',
            'That is modern mega-production scale, not the 1997 Rare team.'
          ],
          reveal:'Historical comparisons are useful because job specialisation and team scale have changed dramatically.',
          caseTitle:'GOLDENEYE 007 — 12 PEOPLE, HUGE INFLUENCE',
          caseText:'The Guardian describes GoldenEye as built by 12 young people. Its four-player multiplayer was also added late in development, showing how small teams can produce outsized influence — at a cost, because the same retrospective also describes punishing working conditions.',
          sourceTitle:'The Guardian — The game’s Bond: the making of GoldenEye 007',
          sourceUrl:'https://www.theguardian.com/games/2022/aug/19/nintendo-64-n64-goldeneye-007-rare-james-bond-making-of'
        }
      ],
      industryDebate: {
        id:'magnum-opus',
        title:'Your Magnum Opus',
        prompt:'You have spent seven years on a game. Release is eight weeks away. You genuinely believe another 10–15 hours a week could make your part of it exceptional. Would you do it?',
        options:[
          'Absolutely. This may be the best work I ever make.',
          'Yes, but only for a short and clearly defined period.',
          'Only if the extra time is paid or returned as time off.',
          'No. The production plan should not depend on extra hours.',
          'I need more information before deciding.'
        ],
        pressure:'Now add this: everyone else is staying late, your lead works until midnight, the overtime is described as optional, you do not own the studio or the IP, and saying no might make you worry about how committed you look.',
        afterPrompt:'With that extra context, what is your position now?',
        takeaway:'Passion is something a developer gives. Crunch becomes a management problem when the production system comes to depend on people repeatedly giving more than their contracted time.',
        sourceTitle:'Ars Technica — Red Dead Redemption 2 crunch discussion',
        sourceUrl:'https://arstechnica.com/gaming/2018/10/red-dead-redemption-2-devs-say-quoted-100-hour-weeks-arent-the-norm/'
      },
      cases: [
        {
          icon: '⚙', kicker: 'CO-DEVELOPMENT', title: 'Sumo Digital — the developer hiding in plain sight',
          body: 'Sumo Digital publicly describes full development, co-development, porting, engineering and live operations. Use the case to challenge the idea that the studio on the title screen did all the work.',
          question: 'Why might a studio bring in Sumo rather than permanently hire another 100 people?',
          sourceTitle: 'Sumo Digital — Co-development', sourceUrl: 'https://www.sumo-digital.com/our-services/co-development/'
        },
        {
          icon: '🌳', kicker: 'STUDIO FAMILY TREE', title: 'Bullfrog → Guildford',
          body: 'Bullfrog is useful not only because of Populous, Syndicate, Theme Park and Dungeon Keeper. Former staff carried skills and relationships into later Guildford studios. A company can disappear while its influence keeps multiplying.',
          question: 'What is more valuable to a regional cluster: one famous studio, or a pool of experienced people who can create the next five?',
          sourceTitle: 'Guildford Games — Bullfrog Productions', sourceUrl: 'https://guildford.games/developers/bullfrog-productions'
        },
        {
          icon: '🗺', kicker: 'UK CLUSTERS', title: 'Dundee — Lemmings, GTA and an education ecosystem',
          body: 'Dundee connects DMA Design, Lemmings, the early Grand Theft Auto lineage and a long-running games-education ecosystem. The point is not nostalgia: people, institutions and companies reinforce one another over time.',
          question: 'Why can a successful studio make a university course — and a university course make future studios — more viable?',
          sourceTitle: 'Abertay — games heritage and courses', sourceUrl: 'https://www.abertay.ac.uk/academic-faculties-and-graduate-school/faculty-of-design-informatics-and-business/computer-games-courses/'
        }
      ],
      watches: [
        {title:'The History of Grand Theft Auto, Lemmings & DMA Design', kind:'Noclip documentary', youtubeId:'Ev7FqNa5rD0', url:'https://www.youtube.com/watch?v=Ev7FqNa5rD0', watchFor:'Team size, overlapping responsibilities, how DMA changed, and where experience moved after projects and ownership changed.'},
        {title:'How Supergiant Secretly Launched Hades — Developing Hell #01', kind:'Noclip documentary', youtubeId:'JzyE9hi912c', url:'https://www.youtube.com/watch?v=JzyE9hi912c', watchFor:'How a small studio communicates, shares responsibility and makes decisions while preparing a live public release.'}
      ],
      sources: [
        {title:'UK Games Map', kind:'Industry map', url:'https://ukie.org.uk/uk-games-map', note:'Explore real UK developers, publishers, service companies and education providers by region.'},
        {title:'ScreenSkills Games Career Map', kind:'Career map', url:'https://www.screenskills.com/starting-your-career/career-maps/games-career-map/', note:'See how departments and roles connect across game development.'},
        {title:'WIRED — Leamington Spa games cluster', kind:'Industry history', url:'https://www.wired.com/story/leamington-spa-games-industry/', note:'A useful account of how Silicon Spa grew through people and studio splintering.'}
      ],
      quiz: [
        {q:'A AAA game credits six external studios under “additional development”. What is the strongest conclusion?', options:['The lead studio did almost no work','The game was produced through a wider development network','The publisher secretly owned every studio','External studios only perform QA'], correct:1, feedback:'Credits reveal distributed production. They do not by themselves tell us who carried the most creative or financial control.'},
        {q:'A 40-person studio needs specialist facial animation for four months. Which response best explains why outsourcing may be sensible?', options:['Outsourcing is always cheaper','The skill can be added temporarily without permanently expanding headcount','External workers do not need management','Specialists only exist outside AAA studios'], correct:1, feedback:'Temporary specialist demand is a common reason to use contractors, outsourcing or co-development.'},
        {q:'Why can one successful studio help create a regional games cluster?', options:['Games companies legally have to stay nearby','Experienced staff can move, found companies and train others locally','Every studio uses the same engine','Publishers only fund companies near universities'], correct:1, feedback:'Clusters often compound through experienced labour, networks, education and spin-outs.'},
        {q:'Which is a better Level 4 question than “Is Supergiant indie?”', options:['What colour is its logo?','How do ownership, scale and specialisation change how its staff work?','How many Steam reviews does Hades have today?','Is indie always better than AAA?'], correct:1, feedback:'The useful analysis is what the organisational structure changes, not just the label.'},
        {q:'What is the strongest source for checking who contributed to a particular released game?', options:['A random forum thread','The game credits','A fan wiki summary only','A streamer’s description'], correct:1, feedback:'Credits are direct production evidence. You can then triangulate them with studio pages and interviews.'}
      ]
    },
    {
      id: 'people', order: 2, icon: '◉', title: 'The People Who Make Games', slides: '40–81', time: '60–90 min across role delivery',
      question: 'What do people actually do inside a development team?',
      short: 'Explore roles through the problems they solve, the people they collaborate with and the evidence employers expect.',
      checkpoint: 'Rate at least three roles as DEFINITELY / MAYBE / NOT FOR ME. The scenario check can be taken before or after; both are needed to complete the chapter.',
      keyIdeas: [
        'A job title only becomes useful when you understand responsibility, collaborators, decisions and daily problems.',
        'Large studios often create narrower specialisms; small teams often require broader ownership.',
        'Design is not “having ideas”, QA is not “playing games”, and production is not “making people work harder”.',
        'Almost every role is interdependent: your output becomes somebody else’s input.'
      ],
      cases: [
        {icon:'🧁', kicker:'GAMEPLAY PROGRAMMING', title:'Tiffany Wild — “I am like a baker for video games.”', body:'Gameplay programming combines designs, art and other engineering systems into functioning player-facing features. Her day-to-day description also includes investigation, debugging, code review and communication.', question:'What does this story reveal that “programmers write code” fails to explain?', sourceTitle:'Into Games — Tiffany Wild', sourceUrl:'https://intogames.org/news/what-does-a-games-gameplay-programmer-do-tiffany-wild'},
        {icon:'✨', kicker:'TECHNICAL ART', title:'Kristrun Fridriksdottir — “magic buttons”', body:'Technical Art exists between art and technology. Kristrun describes creating tools that make art and animation work easier, while also translating needs between disciplines.', question:'Why can understanding two disciplines be a specialism in its own right?', sourceTitle:'Into Games — Kristrun Fridriksdottir', sourceUrl:'https://intogames.org/news/what-does-a-games-technical-artist-do-kristrun-fridriksdottir'},
        {icon:'🧪', kicker:'QUALITY ASSURANCE', title:'QA — finding the bug is only the beginning', body:'Professional QA requires reproducible steps, clear communication, retesting and regression testing. Repeatedly trying to break the same menu is very different from casually playing a favourite game.', question:'What makes a useful bug report valuable to programmers, designers and production?', sourceTitle:'Into Games — QA careers', sourceUrl:'https://intogames.org/careers/quality-assurance'}
      ],
      sources: [
        {title:'Into Games Careers Hub', kind:'Role explorer', url:'https://intogames.org/careers', note:'UK-focused role profiles, interviews and practical career guidance.'},
        {title:'ScreenSkills Games Job Profiles', kind:'Career profiles', url:'https://www.screenskills.com/job-profiles/browse/games/', note:'Role responsibilities and routes into games.'},
        {title:'Games Insights Database', kind:'Jobs framework', url:'https://gidb.uk/', note:'UK job-role framework and progression evidence.'}
      ],
      quiz: [
        {q:'A designer wants 50 enemies but engineering can only support 20. What is the most professional design response?', options:['Demand 50 because design owns the idea','Redesign the encounter to create the feeling of scale within the constraint','Remove engineering from the decision','Ship at a lower frame rate without discussion'], correct:1, feedback:'Professional design is negotiation and problem solving inside constraints.'},
        {q:'Which statement best separates Level Design from Environment Art?', options:['Level Design never uses an engine','Environment Art never affects gameplay readability','Level Design prioritises playable space and player flow; Environment Art prioritises the visual world and assets','They are identical jobs with different titles'], correct:2, feedback:'They collaborate closely, but their primary problems are different.'},
        {q:'A beautiful explosion drops the frame rate from 60 to 18 FPS. Is it strong professional game VFX?', options:['Yes, because visual quality is all that matters','No, because real-time performance is part of the requirement','Yes, if the artist likes it','Only if it uses Niagara'], correct:1, feedback:'Game VFX has to satisfy both visual and technical constraints.'},
        {q:'Which is the best description of production?', options:['Telling people to work faster','Managing scope, dependencies, priorities, risk and reality','Creating all the art and code','Only booking meetings'], correct:1, feedback:'Production coordinates the conditions in which the project can actually be delivered.'},
        {q:'Why does communication appear in almost every games job profile?', options:['It is filler language with no practical meaning','Because game work is highly interdependent and misunderstandings propagate across teams','Only managers communicate','Because technical skill is unimportant'], correct:1, feedback:'Games are collaborative systems: another person often depends on your output, explanation or decision.'}
      ]
    },
    {
      id: 'you', order: 3, icon: '◎', title: 'You as a Games Developer', slides: '82–99', time: '35–55 min',
      question: 'What kind of developer are you becoming?',
      short: 'Separate hard skills from soft skills, test your assumptions against evidence and explore the kinds of problems you genuinely enjoy.',
      checkpoint: 'Complete the work-style reflection, hard/soft skills audit and one piece of peer feedback.',
      keyIdeas: [
        'Hard skills show what you can make or do; soft skills show how you work with people, problems and responsibility.',
        '“Soft” does not mean easy or less important. Reliability, feedback and communication can determine whether great technical work is usable by a team.',
        'Confidence is not evidence. Your projects, behaviours and feedback can confirm or challenge how you see yourself.',
        'A career is partly choosing which kinds of problems you are happy solving repeatedly.'
      ],
      cases: [
        {icon:'🪞', kicker:'PERSONALITY REALITY CHECK', title:'A personality result is a mirror, not a job allocation system', body:'Personality-style tests can be fun prompts for discussion, but they should not decide that a particular “type” belongs in programming, art or production. Compare any result with demonstrated skills, interests, past behaviour and peer feedback.', question:'Which evidence would you trust most if a personality result conflicts with three years of actual project behaviour?', sourceTitle:'Use tests critically', sourceUrl:'https://www.screenskills.com/job-profiles/browse/games/'},
        {icon:'↔', kicker:'T-SHAPED SKILLS', title:'Breadth + depth can be powerful', body:'A specialist can go deep; a generalist can cover more ground. T-shaped developers combine broad understanding of the pipeline with deep ability in one area. Different studio sizes reward different shapes.', question:'What should be the deep stem of your “T” right now — and what evidence supports that choice?', sourceTitle:'Into Games Careers Hub', sourceUrl:'https://intogames.org/careers'}
      ],
      sources: [
        {title:'Into Games Careers', kind:'Career reflection', url:'https://intogames.org/careers', note:'Compare your self-assessment with what roles actually require.'},
        {title:'ScreenSkills Games Careers', kind:'Career profiles', url:'https://www.screenskills.com/job-profiles/browse/games/', note:'Use role evidence to challenge vague claims such as “I am creative”.'}
      ],
      quiz: [
        {q:'Which is the strongest evidence for the soft skill “communication”?', options:['I gave myself 9/10','I explained a broken system to my team, agreed a fix and documented the change','My personality test says I am outgoing','I talk a lot in class'], correct:1, feedback:'Soft skills still need observable evidence and outcomes.'},
        {q:'A student says “I am good at Unreal”. What should happen next?', options:['Accept the claim as specific enough','Break it into specific capabilities such as Blueprint scripting, materials, lighting or level blockout and ask for evidence','Convert it into an MBTI type','Only ask which version of Unreal they use'], correct:1, feedback:'Employability becomes clearer when broad confidence is turned into specific demonstrable skill.'},
        {q:'Which is an example of a strength becoming a weakness?', options:['Attention to detail causing missed deadlines through endless polishing','Learning version control','Asking for feedback','Documenting a problem'], correct:0, feedback:'Many strengths become harmful when overused or unmanaged.'},
        {q:'What is the best use of a personality-style test in this pathway?', options:['Automatically assign a career','Reject careers that do not match the type','Use it as a reflection prompt and compare it with stronger behavioural evidence','Store it as the most important employability score'], correct:2, feedback:'A personality label can prompt discussion, but should not override real evidence.'},
        {q:'What does a T-shaped profile describe?', options:['Two unrelated qualifications','Broad awareness across development plus deeper expertise in one area','A person who only works in Technical Art','Someone with no specialism'], correct:1, feedback:'T-shaped development combines collaborative breadth with a recognisable depth.'}
      ]
    },
    {
      id: 'routes', order: 4, icon: '↝', title: 'Careers Are Not Straight Lines', slides: '100–120', time: '40–60 min',
      question: 'How do people actually get into games?',
      short: 'Predict what happens next in real career stories, then examine the transferable skills that made unusual routes possible.',
      checkpoint: 'Reveal at least three career stories and save one lesson you can apply to your own route.',
      keyIdeas: [
        'Junior → Mid → Senior → Lead is only one possible route. Careers also move sideways between disciplines, companies and employment types.',
        'Projects, mods, jams, competitions and public work can create evidence before the first salaried job.',
        'Previous education or employment is not automatically wasted when a person changes discipline; transferable knowledge can become specialist value.',
        'Career resilience depends on skills, evidence, relationships and the ability to keep learning when a project or studio disappears.'
      ],
      cases: [
        {icon:'🌀', kicker:'STUDENT PROJECT → PORTAL', title:'Narbacular Drop', body:'DigiPen students built a playable portal-based puzzle game. Valve saw the project at a career event, invited the team to present it, then hired the entire team to rebuild the concept. The result became Portal.', question:'What did Valve learn by playing the project that a list of “passionate, creative, hard-working” claims could not prove?', sourceTitle:'DigiPen — Narbacular Drop', sourceUrl:'https://www.digipen.edu/showcase/student-games/narbacular-drop'},
        {icon:'🧩', kicker:'MOD → STANDALONE GAME', title:'The Forgotten City', body:'Nick Pearce built an award-winning Skyrim mod before leaving law to lead a standalone redevelopment of the idea. The route connected writing, modding, design and entrepreneurship.', question:'Which skill was the actual bridge: legal training, writing, modding, finishing public work — or the combination?', sourceTitle:'Noclip — The Forgotten City documentary', sourceUrl:'https://www.youtube.com/watch?v=CSqHTxgcXiI'},
        {icon:'🎯', kicker:'MODDING → FRANCHISE', title:'Counter-Strike and community development', body:'Counter-Strike began as a Half-Life mod before Valve brought its creators into the company. Modding can expose design, engineering and community skills in a real playable context.', question:'Why can modifying an existing game still provide strong original portfolio evidence?', sourceTitle:'Counter-Strike — official history', sourceUrl:'https://blog.counter-strike.net/about/'}
      ],
      watches: [
        {title:'How a Lawyer Sacrificed his Career to Redevelop his Skyrim Mod', kind:'Noclip documentary', youtubeId:'CSqHTxgcXiI', url:'https://www.youtube.com/watch?v=CSqHTxgcXiI', watchFor:'What transferred from law into writing, project leadership and development — and what the public Skyrim mod proved before the standalone game existed.'},
        {title:'Who is PLAYERUNKNOWN?', kind:'Noclip profile', youtubeId:'4e9EjExsMvI', url:'https://www.youtube.com/watch?v=4e9EjExsMvI', watchFor:'How modding, a clear design interest and public iteration created a path into a major commercial game.'}
      ],
      sources: [
        {title:'BAFTA — Breaking into the games industry', kind:'Career story', url:'https://www.bafta.org/stories/breaking-into-the-games-industry/', note:'Tyler Rotheram on competitions, QA, game jams, portfolios and the fact there is no single route.'},
        {title:'DigiPen — Narbacular Drop', kind:'Student project case', url:'https://www.digipen.edu/showcase/student-games/narbacular-drop', note:'A rare example of a student prototype directly demonstrating a team’s employable capability.'},
        {title:'Into Games — Modding', kind:'Portfolio route', url:'https://intogames.org/news/how-to-mod/', note:'Why mods can build skills, public feedback and portfolio evidence.'}
      ],
      quiz: [
        {q:'Why is Narbacular Drop such a useful portfolio case?', options:['It proves qualifications are irrelevant','Valve could directly observe a functioning idea, execution and teamwork','Every student project will become a AAA game','It had the best graphics of its year'], correct:1, feedback:'The playable project made capability visible. The outcome was exceptional; the evidence principle is ordinary.'},
        {q:'What is the strongest interpretation of moving from QA into Design?', options:['QA is a failed design career','QA can build whole-game knowledge and transferable production skills that may support a later move','Everyone in QA must become a designer','Design requires no new skill after QA'], correct:1, feedback:'Career moves can carry useful skills without making either role a “stepping stone” by definition.'},
        {q:'Why can a sideways career move be valuable?', options:['It always pays more','It can build a more useful skill combination or move closer to the work you want','It removes the need for a portfolio','It guarantees a Lead role next'], correct:1, feedback:'Progress is not only vertical seniority; specialisation and fit can improve sideways.'},
        {q:'Which is most likely to survive a studio closure?', options:['The building','Your skills, portfolio, relationships and reputation','The cancelled project schedule','The studio logo'], correct:1, feedback:'Career resilience is portable even when companies and projects are not.'},
        {q:'What is the best lesson from modding success stories?', options:['Make a mod and you will be hired','Public, finished work can reveal capability beyond a CV','Original games are useless','Only programmers can mod'], correct:1, feedback:'The useful principle is demonstrable public work, not the promise of a particular outcome.'}
      ]
    },
    {
      id: 'reality', order: 5, icon: '⌖', title: 'Reality Check', slides: '121–136', time: '45–70 min',
      question: 'Does your idea of yourself match what employers actually want?',
      short: 'Choose a specific role, compare real employers and vacancies, then turn repeated requirements into a Green / Amber / Red evidence matrix.',
      checkpoint: 'Choose a target role, save three vacancy snapshots and identify one RED requirement that matters.',
      keyIdeas: [
        '“Games Designer”, “Artist” and “Programmer” are too broad for useful career research. Specificity exposes real requirements.',
        'Career guides describe a role; live or recent vacancies show what a company is willing to recruit for in a particular production context.',
        'Repeated requirements across several adverts are a stronger market signal than one unusual requirement in one advert.',
        'You are also choosing an employer: project prestige, mentorship, location, working culture, stability and role breadth can all matter.'
      ],
      cases: [
        {icon:'📡', kicker:'CURRENT MARKET', title:'The UK Games Insights Database', body:'GIDB provides a UK games jobs framework intended to help compare roles and progression. Use it alongside ScreenSkills, Into Games and real vacancy pages rather than treating any single source as the whole truth.', question:'What changes between junior and senior: software skill, independence, responsibility, communication — or all of them?', sourceTitle:'Games Insights Database', sourceUrl:'https://gidb.uk/'},
        {icon:'⚠', kicker:'CAREER REALITY', title:'Opportunity + risk', body:'Games careers can offer extraordinary creative and technical work, but studio closures, redundancies and contract work are also part of the sector. A credible career plan considers resilience rather than pretending the industry is frictionless.', question:'What would remain valuable if your dream studio closed one month after you applied?', sourceTitle:'Ukie', sourceUrl:'https://ukie.org.uk/'}
      ],
      sources: [
        {title:'Games Insights Database', kind:'Jobs framework', url:'https://gidb.uk/', note:'Use the role framework to compare seniority and skill expectations.'},
        {title:'Games Jobs Direct', kind:'Vacancies', url:'https://www.gamesjobsdirect.com/jobs-in-uk', note:'Search current UK roles by discipline and location.'},
        {title:'Work With Indies', kind:'Indie vacancies', url:'https://www.workwithindies.com/', note:'Compare broader small-team roles with more specialised large-studio vacancies.'},
        {title:'UK Games Map', kind:'Employers and clusters', url:'https://ukie.org.uk/uk-games-map', note:'Find studios near you and compare regional opportunities.'}
      ],
      quiz: [
        {q:'Why compare three similar vacancies rather than one?', options:['Three adverts guarantee a job','Repeated requirements help distinguish broad market signals from project-specific requests','Employers copy each other exactly','It removes the need to research the company'], correct:1, feedback:'Triangulation makes career conclusions more defensible.'},
        {q:'A requirement appears in all three adverts but you have no evidence of it. What status should it receive?', options:['GREEN because you intend to learn it','AMBER because you have heard of it','RED because you cannot currently prove it','Ignore it because adverts are aspirational'], correct:2, feedback:'The matrix is evidence-based, not confidence- or intention-based.'},
        {q:'Why look at senior roles when you are applying for junior work?', options:['So you can apply for Lead immediately','To see how responsibility and capability develop over time','Because junior adverts are always wrong','To avoid making a portfolio'], correct:1, feedback:'Senior roles reveal progression and what the discipline values as autonomy increases.'},
        {q:'Which is the strongest reason to choose an employer?', options:['They make my favourite game, therefore nothing else matters','The role, mentorship, culture, location and project context fit my goals','Their logo is famous','They have the longest credits sequence'], correct:1, feedback:'Employer fit is broader than fandom or prestige.'},
        {q:'What does RED mean in this pathway?', options:['You are bad at the career','You currently lack convincing evidence for that requirement','You must change career immediately','The employer requirement is unreasonable'], correct:1, feedback:'RED is a useful target, not a judgement about your identity.'}
      ]
    },
    {
      id: 'prove', order: 6, icon: '◆', title: 'Prove It', slides: '137–157', time: '35–55 min planning + practical build',
      question: 'What evidence can you create next?',
      short: 'Turn a real employability gap into one focused, finishable portfolio challenge with clear evidence of process and ownership.',
      checkpoint: 'Choose a targeted portfolio challenge and record exactly which employer requirement it is designed to prove.',
      keyIdeas: [
        'A portfolio is selected evidence, not an archive of everything you have ever made.',
        'Small, focused, finished and explained can be much stronger than huge, vague and unfinished.',
        'Show ownership on team projects and show process when the role depends on design thinking, debugging, iteration or decision-making.',
        'The strongest challenge begins with an employer requirement and a gap, not simply “what would be fun to make?”.'
      ],
      cases: [
        {icon:'🌀', kicker:'PORTFOLIO EVIDENCE', title:'Portal began with something playable', body:'Narbacular Drop gave Valve direct evidence of design, programming, art, teamwork and the ability to finish a playable idea. You do not need to make Portal; you need to make your capability visible.', question:'What can a working prototype prove more convincingly than a paragraph on a CV?', sourceTitle:'DigiPen — Narbacular Drop', sourceUrl:'https://www.digipen.edu/showcase/student-games/narbacular-drop'},
        {icon:'✂', kicker:'QUALITY > QUANTITY', title:'Curate, do not dump', body:'Professional portfolio advice repeatedly emphasises relevance, quality and clarity of contribution. A weak piece can lower confidence in stronger work if the viewer cannot tell why it is included.', question:'Which three pieces best prove your target role — and what would you remove?', sourceTitle:'Into Games — Create your games industry portfolio', sourceUrl:'https://intogames.org/news/create-your-games-industry-portfolio'}
      ],
      sources: [
        {title:'GDC — Designing the Ideal Level Design Portfolio', kind:'Professional talk', url:'https://gdcvault.com/play/1035815/Designing-the-Ideal-Level-Design', note:'Current professional portfolio thinking around design decisions, ownership and iteration.'},
        {title:'Into Games — Create your portfolio', kind:'Portfolio guidance', url:'https://intogames.org/news/create-your-games-industry-portfolio', note:'Practical portfolio guidance across games careers.'},
        {title:'DigiPen — Narbacular Drop', kind:'Student evidence case', url:'https://www.digipen.edu/showcase/student-games/narbacular-drop', note:'A dramatic example of a student project functioning as career evidence.'}
      ],
      quiz: [
        {q:'An aspiring Level Designer has a beautiful environment but no route, metrics, testing or design explanation. What is missing?', options:['More foliage','Evidence of Level Design thinking and iteration','A 4K render','A studio logo'], correct:1, feedback:'The portfolio must prove the target discipline, not merely show an attractive result.'},
        {q:'Which is the strongest starting point for the mini portfolio piece?', options:['What looks fun today?','What requirement do employers repeat that I cannot currently prove?','What can become the biggest project possible?','What requires the most software?'], correct:1, feedback:'The project should close a specific evidence gap.'},
        {q:'What should a team project make clear?', options:['Only the final game title','Your individual contribution and ownership','That every team member did equal work','Nothing about process'], correct:1, feedback:'Employers need to know what evidence belongs to you.'},
        {q:'Why can a failed early version be useful in a portfolio?', options:['Failure is always impressive','It can show diagnosis, iteration and problem solving when clearly explained','It avoids making a final version','Employers do not care about results'], correct:1, feedback:'A clear before → problem → change → result story can demonstrate how you think.'},
        {q:'Which project is usually stronger evidence?', options:['A huge unfinished game with no explanation','A focused finished piece directly relevant to the target role and documented well','The project with the most purchased assets','The oldest project in the folder'], correct:1, feedback:'Relevance, finish and explanation usually beat uncontrolled scope.'}
      ]
    },
    {
      id: 'plan', order: 7, icon: '★', title: 'My Career Plan', slides: '158–182', time: '35–55 min',
      question: 'What happens next?',
      short: 'Turn the research, self-audit, vacancies and portfolio challenge into a defensible Level 4 career position and a measurable 6 / 12 / 24-month plan.',
      checkpoint: 'Save your 6, 12 and 24-month goals and generate your Assignment 1 career summary.',
      keyIdeas: [
        'A useful action plan creates evidence, deadlines and observable outcomes rather than vague intentions.',
        'Level 4 writing moves from description to analysis and evaluation: what, why, consequence, alternative and judgement.',
        'A claim becomes stronger when it is triangulated across professionals, industry frameworks, employers and your own evidence.',
        'The endpoint is not “I found my forever job”. It is a reasoned next direction that can change as evidence changes.'
      ],
      cases: [
        {icon:'↻', kicker:'CAREER ITERATION', title:'Your plan is allowed to change', body:'People in the case studies changed discipline, employer, route and even industry background. A career plan should be specific enough to act on, but flexible enough to update when better evidence appears.', question:'What new evidence would be strong enough to make you change your current target role?', sourceTitle:'BAFTA — Breaking into games', sourceUrl:'https://www.bafta.org/stories/breaking-into-the-games-industry/'},
        {icon:'🔎', kicker:'LEVEL 4', title:'Keep asking “so what?”', body:'“Sumo uses co-development” is a fact. The analysis starts when you explain what this means for staffing, specialisation, risk and the kinds of careers that exist inside studios whose name may never dominate the marketing.', question:'Can every paragraph in your final portfolio move from claim → evidence → consequence → judgement?', sourceTitle:'ScreenSkills Games Careers', sourceUrl:'https://www.screenskills.com/job-profiles/browse/games/'}
      ],
      sources: [
        {title:'BAFTA — Breaking into the games industry', kind:'Career reflection', url:'https://www.bafta.org/stories/breaking-into-the-games-industry/', note:'Useful reminder that routes are varied and learning continues throughout a career.'},
        {title:'ScreenSkills Games Careers', kind:'Role evidence', url:'https://www.screenskills.com/job-profiles/browse/games/', note:'Use current role evidence to keep career goals specific.'},
        {title:'Games Insights Database', kind:'Progression evidence', url:'https://gidb.uk/', note:'Revisit role progression as your skills develop.'}
      ],
      quiz: [
        {q:'Which is the strongest 6-month goal?', options:['Improve Unreal','Become employable','Build and document one Blueprint interaction system using interfaces, then get feedback before December','Learn everything about games'], correct:2, feedback:'A strong goal names the outcome, evidence and timeframe.'},
        {q:'What turns description into analysis?', options:['Adding more adjectives','Explaining why something happens, how roles connect and what consequences follow','Making the paragraph longer','Using only quotations'], correct:1, feedback:'Analysis explains relationships and consequences rather than only reporting facts.'},
        {q:'What is evaluation?', options:['Saying whether you personally like something','Using evidence to judge effectiveness, limitations, alternatives and fit','Listing three facts','Repeating the job description'], correct:1, feedback:'Evaluation requires a reasoned judgement supported by evidence.'},
        {q:'What is the best response if new evidence shows another role fits you better?', options:['Ignore it because the plan is finished','Update the plan and explain why your judgement changed','Delete all previous work','Choose both roles without analysis'], correct:1, feedback:'A career plan is an evidence-led working model, not a permanent identity label.'},
        {q:'Which final question best captures Assignment 1?', options:['Which game company is coolest?','What can I contribute, what evidence proves it, and what do I need to do next?','What is my personality type?','How many roles can I name?'], correct:1, feedback:'The assignment is about a reasoned professional position and a practical next move.'}
      ]
    }
  ],
  roles: [
    {id:'gameplay-designer', icon:'◇', discipline:'Design', title:'Gameplay Designer', problem:'How should the rules, mechanics and interactions create the intended play?', does:'Designs, prototypes, balances and iterates player-facing mechanics and systems.', collaborators:'Gameplay programmers, level designers, animation, audio, QA and production.', hard:['Systems thinking','Prototyping','Documentation','Engine literacy','Balancing / playtesting'], soft:['Communication','Iteration','Negotiation','Player empathy','Accepting feedback'], portfolio:'One focused mechanic with rules, prototype, test evidence, changes and final judgement.', source:'https://intogames.org/careers/role/gameplay-designer-games'},
    {id:'level-designer', icon:'⌖', discipline:'Design', title:'Level Designer', problem:'How should playable space shape player decisions, pacing, challenge and understanding?', does:'Blocks out spaces, scripts encounters, tests flow and iterates gameplay layouts.', collaborators:'Gameplay design, environment art, programming, lighting, audio and QA.', hard:['Greyboxing','Metrics','Scripting','Encounter design','Playtesting'], soft:['Communication','Player empathy','Iteration','Clarity','Receiving critique'], portfolio:'A playable greybox showing goals, routes, sightlines, metrics, testing and iteration.', source:'https://intogames.org/careers/role/level-designer'},
    {id:'gameplay-programmer', icon:'</>', discipline:'Programming', title:'Gameplay Programmer', problem:'How do we turn design intentions into reliable, maintainable player-facing systems?', does:'Implements gameplay mechanics, investigates technical problems, debugs and integrates work with wider code systems.', collaborators:'Designers, other programmers, animation, art, QA and production.', hard:['C++ / C# or engine scripting','Debugging','Architecture','Version control','Engine systems'], soft:['Communication','Logical reasoning','Code review','Patience','Teamwork'], portfolio:'A clean system with requirement, architecture, implementation, tests, debugging and explanation.', source:'https://intogames.org/careers/role/gameplay-programmer'},
    {id:'environment-artist', icon:'▧', discipline:'Art', title:'Environment Artist', problem:'How do we make the world visually convincing, readable and performant?', does:'Builds and implements environment assets, materials and set dressing while meeting artistic and technical targets.', collaborators:'Level design, concept art, lighting, Technical Art, VFX and production.', hard:['3D modelling','UVs','Materials','Texturing','Engine implementation','Optimisation'], soft:['Observation','Feedback','Craft discipline','Time management','Collaboration'], portfolio:'A small polished environment slice with reference, modelling, materials, engine shots and technical breakdown.', source:'https://intogames.org/news/what-does-a-games-environment-artist-do'},
    {id:'concept-artist', icon:'✎', discipline:'Art', title:'Concept Artist', problem:'How can we explore and communicate a visual solution before expensive production begins?', does:'Researches and develops characters, props, architecture, vehicles and visual language for production teams.', collaborators:'Art direction, 3D artists, environment / character teams, narrative and design.', hard:['Drawing / painting fundamentals','Research','Design sheets','Perspective','Visual communication'], soft:['Exploration','Communication','Taking direction','Iteration','Curiosity'], portfolio:'Design exploration that shows research, alternatives, function and clear production-facing sheets — not only finished paintings.', source:'https://intogames.org/news/how-do-you-become-a-concept-artist-for-videogames2'},
    {id:'technical-artist', icon:'⚙', discipline:'Technical Art', title:'Technical Artist', problem:'How do we help artists achieve the visual target efficiently inside technical constraints?', does:'Builds tools, shaders, pipelines and optimisation solutions across art and engineering.', collaborators:'Artists, animators, programmers, VFX, lighting and production.', hard:['Scripting','Shaders','Engine profiling','Pipelines','Maths / rendering fundamentals'], soft:['Translation between disciplines','Problem solving','Prioritisation','Support mindset','Communication'], portfolio:'A tool, shader or workflow that solves a real production problem, with old vs new process and measurable benefit.', source:'https://intogames.org/news/what-does-a-games-technical-artist-do-kristrun-fridriksdottir'},
    {id:'vfx-artist', icon:'✦', discipline:'Art', title:'VFX Artist', problem:'How do we create readable, exciting real-time effects without exceeding the performance budget?', does:'Creates particles, materials and animated effects for combat, environments, weather and feedback.', collaborators:'Design, art, Technical Art, programming, lighting and audio.', hard:['Niagara / particles','Materials','Texture creation','Timing','Profiling / optimisation'], soft:['Visual judgement','Iteration','Communication','Attention to gameplay readability','Problem solving'], portfolio:'A small connected effect set with breakdown, engine implementation, timing and performance evidence.', source:'https://intogames.org/news/how-do-you-become-a-vfx-artist-for-videogames'},
    {id:'animator', icon:'↝', discipline:'Animation', title:'Gameplay Animator', problem:'How should characters move clearly, believably and responsively inside gameplay systems?', does:'Creates and implements animation sets, transitions, reactions and gameplay timing.', collaborators:'Design, programming, character art, Technical Animation, audio and QA.', hard:['Animation fundamentals','Reference','Rig / engine workflow','State transitions','Gameplay implementation'], soft:['Observation','Feedback','Communication','Iteration','Timing judgement'], portfolio:'A compact gameplay animation set implemented in-engine with transitions and breakdown of decisions.', source:'https://intogames.org/news/how-do-you-become-an-animator-for-videogames'},
    {id:'audio-designer', icon:'♫', discipline:'Audio', title:'Audio Designer', problem:'How should sound communicate, react and reinforce the player experience?', does:'Creates, records, edits and implements music, dialogue, ambience, UI and gameplay sound.', collaborators:'Design, programming, narrative, animation, VFX, production and voice teams.', hard:['Recording / editing','Middleware / engine audio','Implementation logic','Mixing','Interactive audio'], soft:['Listening','Communication','Organisation','Creative judgement','Collaboration'], portfolio:'An interactive audio scene or system showing source creation, implementation logic and in-game result.', source:'https://intogames.org/news/what-does-games-audio-designer-ashton-mills'},
    {id:'ui-ux-designer', icon:'▤', discipline:'UI / UX', title:'UI / UX Designer', problem:'How can players understand information and complete actions clearly and comfortably?', does:'Designs interfaces, flows, information hierarchy and interaction patterns, often informed by research and testing.', collaborators:'Game design, art, programming, user research, accessibility and production.', hard:['Wireframing','Interaction flows','Visual hierarchy','Prototyping','Usability testing'], soft:['Player empathy','Communication','Analytical thinking','Feedback','Clarity'], portfolio:'A game UI flow from problem and wireframes through prototype, testing and iteration — not just pretty screens.', source:'https://intogames.org/news/how-do-you-become-a-ui-designer-for-videogames'},
    {id:'narrative-designer', icon:'¶', discipline:'Narrative', title:'Narrative Designer', problem:'How can story react to player state, choice and gameplay rather than exist separately from the game?', does:'Writes and implements dialogue, barks, quests, branching structures and environmental narrative.', collaborators:'Design, programming, cinematic teams, audio, art and QA.', hard:['Interactive writing','Scripting / implementation','Flow logic','Dialogue tools','Narrative systems'], soft:['Communication','Editing','Empathy','Collaboration','Accepting critique'], portfolio:'A small implemented interactive narrative showing state, branching, writing and the logic connecting them.', source:'https://intogames.org/news/what-does-a-games-narative-designer-do-sarah-longthorne'},
    {id:'qa-tester', icon:'✓', discipline:'QA', title:'QA Tester', problem:'How can we find, reproduce, communicate and verify faults before they damage the player experience?', does:'Plans tests, reproduces defects, writes reports, validates fixes and performs regression testing.', collaborators:'Every development discipline, especially programming, design and production.', hard:['Test design','Bug tracking','Reproduction steps','Regression testing','Platform / build knowledge'], soft:['Precision','Patience','Written communication','Curiosity','Persistence'], portfolio:'A professional test pack with plan, cases, bug reports, priorities, regression and release checks.', source:'https://intogames.org/careers/quality-assurance'},
    {id:'producer', icon:'☷', discipline:'Production', title:'Producer', problem:'How can the team deliver the right work with the time, people, dependencies and risks that actually exist?', does:'Coordinates schedules, priorities, dependencies, communication, milestones and risks.', collaborators:'All teams, leads, publishers, external studios and release stakeholders.', hard:['Planning tools','Backlogs / scheduling','Risk tracking','Milestones','Production methods'], soft:['Communication','Organisation','Negotiation','Prioritisation','Calm under pressure'], portfolio:'A production pack showing feature scope, tasks, dependencies, schedule, risk changes and retrospective.', source:'https://intogames.org/news/how-do-you-become-a-producer-for-videogames'}
  ],
  reflectionQuestions: [
    {q:'A project breaks the night before a milestone. Which part draws you in first?', options:[['Trace the system and find the failure','technical'],['Work out what can be cut or moved','production'],['Check what the player actually experiences','design'],['Find the visible/audio presentation problem','visual']]},
    {q:'You get two free hours on a project. What are you most likely to polish?', options:[['A mechanic that feels slightly wrong','design'],['A messy system or tool','technical'],['An environment / effect / animation that lacks finish','visual'],['The task board, risks and missing dependencies','production']]},
    {q:'Which compliment would mean the most?', options:[['“That system is really robust.”','technical'],['“I always know what is happening when you organise the work.”','production'],['“That feels great to play.”','design'],['“That looks / sounds incredible.”','visual']]},
    {q:'Which frustration bothers you most?', options:[['Logic that behaves unpredictably','technical'],['People discovering problems too late','production'],['Players misunderstanding what to do','design'],['Work that feels visually or aurally unfinished','visual']]},
    {q:'A teammate asks for help. Which request sounds most satisfying?', options:[['“Can you help me debug this?”','technical'],['“Can you help us plan how to finish?”','production'],['“Can you help make this encounter work?”','design'],['“Can you help improve how this reads / looks / sounds?”','visual']]},
    {q:'Which activity makes time disappear fastest?', options:[['Building and troubleshooting systems','technical'],['Organising a complicated project','production'],['Testing and refining player experience','design'],['Crafting visual / audio detail','visual']]},
    {q:'Which type of evidence would you most enjoy showing an employer?', options:[['A clean technical breakdown','technical'],['A project plan that survived change','production'],['A prototype before/after playtesting','design'],['A polished reel or art breakdown','visual']]},
    {q:'When feedback arrives, what do you naturally ask?', options:[['“What exactly caused that behaviour?”','technical'],['“What does this change affect downstream?”','production'],['“What did the player think was happening?”','design'],['“What specific part reads badly?”','visual']]},
    {q:'Which constraint sounds most interesting rather than annoying?', options:[['A hard memory / performance limit','technical'],['A fixed deadline with changing priorities','production'],['Only three player verbs','design'],['A strict visual style and performance budget','visual']]},
    {q:'If you joined a tiny indie team tomorrow, which gap would you volunteer to own?', options:[['Gameplay systems / tools','technical'],['Planning / coordination','production'],['Mechanics / levels / UX','design'],['Art / animation / VFX / audio presentation','visual']]},
    {q:'What do people most often ask you for help with now?', options:[['Software / logic / fixing things','technical'],['Keeping track / organising / getting things finished','production'],['Ideas / mechanics / player flow','design'],['Visual / art / animation / sound judgement','visual']]},
    {q:'Which sentence sounds most like the reputation you want?', options:[['“Give them the difficult technical problem.”','technical'],['“They keep the team moving.”','production'],['“They understand what makes the player experience work.”','design'],['“They make the game feel finished and distinctive.”','visual']]}
  ],
  hardSkills: ['Engine implementation','Blueprint / code / scripting','3D / art production','Design / greyboxing / prototyping','Version control','Testing / debugging','Documentation / breakdowns'],
  softSkills: ['Communication','Teamwork','Reliability','Organisation','Receiving feedback','Giving useful feedback','Adaptability','Problem solving'],
  stories: [
    {id:'narbacular', title:'Narbacular Drop → Portal', start:'A DigiPen student team builds a strange portal puzzle.', question:'Valve representatives see the student project. What is the most useful thing they can evaluate immediately?', options:['The students’ exam grades','A functioning idea, execution and teamwork','Their favourite games list'], correct:1, reveal:'Valve invited the team to present the project and then hired the entire development team to rebuild the concept. The useful principle is visible evidence, not the expectation that every student project becomes Portal.', source:'https://www.digipen.edu/showcase/student-games/narbacular-drop'},
    {id:'mel', title:'Transport Design → QA → Concept Art', start:'Mel Cummings trained in Transport Design but struggled to move directly into Concept Art.', question:'Is taking a QA role necessarily a dead end for the art career?', options:['Yes — every job must exactly match the final role','No — production knowledge, contacts and continued portfolio work can transfer','Only if the game is AAA'], correct:1, reveal:'Her route included QA at TT Games, VFX support and continued art development before freelance Concept Art. Earlier vehicle-design knowledge also remained relevant specialist knowledge.', source:'https://intogames.org/news/how-do-you-become-a-concept-artist-for-videogames2'},
    {id:'kristrun', title:'IT + Art → Technical Art', start:'Kristrun Fridriksdottir has experience spanning IT, modelling, rigging, sculpture, anatomy and teaching.', question:'What career could make that unusual mixture an advantage rather than a problem?', options:['A role that forces her to choose only art','Technical Art','A role with no communication'], correct:1, reveal:'Technical Art rewards exactly this kind of bridge between disciplines. Her advice warns against being defined too tightly by educational boxes.', source:'https://intogames.org/news/what-does-a-games-technical-artist-do-kristrun-fridriksdottir'},
    {id:'forgotten-city', title:'Lawyer → Modder → Studio Founder', start:'Nick Pearce builds The Forgotten City as a Skyrim mod while working in law.', question:'What makes the mod more than a hobby in career terms?', options:['It is public, finished evidence of writing, design and execution','It guarantees publisher finance','It removes the need to learn development'], correct:0, reveal:'The mod gained recognition and became the foundation for a standalone redevelopment. Pearce ultimately moved from law into full-time development and studio leadership.', source:'https://www.youtube.com/watch?v=CSqHTxgcXiI'}
  ],
  challenges: [
    {id:'level-design', roles:['level-designer','gameplay-designer'], icon:'⌖', title:'Playable Encounter', brief:'Build one short greybox encounter that proves player flow, pacing and iteration.', evidence:['Design goal + constraints','Initial blockout','Metrics / route / sightlines','At least one playtest','Before/after iteration','Playable final version','Short judgement: what changed and why']},
    {id:'programming', roles:['gameplay-programmer'], icon:'</>', title:'Focused Gameplay System', brief:'Build one clean, understandable gameplay system rather than a whole game.', evidence:['Requirement / problem','Logic or architecture plan','Implementation','Version-control / structure evidence where possible','A bug and how you diagnosed it','Tests','Short technical breakdown']},
    {id:'environment-art', roles:['environment-artist','concept-artist'], icon:'▧', title:'Small Polished Art Slice', brief:'Create one tightly scoped, role-relevant piece with professional process evidence.', evidence:['Reference and intention','Early exploration / blockout','Production stages','Engine / final implementation where relevant','Technical constraints','Final presentation','What you would improve']},
    {id:'technical-art', roles:['technical-artist'], icon:'⚙', title:'Make Someone Else Faster', brief:'Create a tool, shader or workflow that solves a real production problem for another developer.', evidence:['The original problem','Old workflow','Your solution','How another person uses it','Time / consistency / performance benefit','Limitations','Next version']},
    {id:'vfx-animation', roles:['vfx-artist','animator','audio-designer'], icon:'✦', title:'Gameplay Feedback Set', brief:'Create a small connected set of role-specific feedback that works in real gameplay.', evidence:['Reference','Purpose in play','Creation breakdown','Implementation','Timing / transitions','Performance / readability check','Final capture']},
    {id:'ui-narrative', roles:['ui-ux-designer','narrative-designer'], icon:'▤', title:'Interactive Flow', brief:'Build one interactive flow that responds to player input or state and test whether people understand it.', evidence:['User / narrative goal','Flow diagram','Prototype','Implementation','Test evidence','Iteration','Final explanation']},
    {id:'qa-production', roles:['qa-tester','producer'], icon:'✓', title:'Professional Process Pack', brief:'Produce a small but credible pack showing how you improve the reliability or delivery of a feature.', evidence:['Scope / feature definition','Plan','Risks or test cases','Real issue found','Action / prioritisation','Retest / retrospective','Clear professional documentation']}
  ]
};
