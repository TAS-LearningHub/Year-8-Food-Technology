(function () {
  "use strict";

  const verifiedAt = "2026-08-25T10:53:17+10:00";
  const videos = [
    {
      sectionId: "m01-s01", module: 1, moduleTitle: "Kitchen Ready", section: 1,
      sectionTitle: "Personal hygiene and handwashing", outcome: "MATCHED",
      videoId: "RUeVNCEDbCo", title: "Four Golden Rules of food safety", channel: "NSWFoodAuthority",
      duration: "1:46", durationSeconds: 106, sampledSegment: "0:12–1:38",
      purpose: "Connect personal hygiene and handwashing to four food-safety actions used before and during practical work.",
      watchFor: "Which of the four rules depends on clean hands, and when would you apply it in the school kitchen?",
      evidenceTarget: "Identify a safe personal-hygiene action and justify when it is needed.",
      alternative: "Read the adjacent Personal hygiene and handwashing explanation, study the handwashing pathway visual, record one hygiene action and when it is needed, then complete the section check.",
      theoryLink: "modules/module-01.html#section-1"
    },
    {
      sectionId: "m01-s02", module: 1, moduleTitle: "Kitchen Ready", section: 2,
      sectionTitle: "Kitchen hazards and safe routines", outcome: "MATCHED",
      videoId: "VHGtPeH4tCg", title: "Kitchen Safety: Focusing on Safety (1 of 7) | WorkSafeBC", channel: "WorkSafeBC",
      duration: "2:39", durationSeconds: 159, sampledSegment: "0:18–2:20",
      purpose: "Make common kitchen hazards visible and connect injury prevention to attention, setup and routine.",
      watchFor: "Choose one hazard and one worker behaviour that reduces the chance of harm.",
      evidenceTarget: "Recognise a kitchen hazard and match it to a sensible control.",
      alternative: "Read the adjacent Kitchen hazards and safe routines explanation, inspect the original hazard map and complete the hazard-control check.",
      theoryLink: "modules/module-01.html#section-2"
    },
    {
      sectionId: "m01-s03", module: 1, moduleTitle: "Kitchen Ready", section: 3,
      sectionTitle: "Washing up, cleaning and sanitising", outcome: "MATCHED",
      videoId: "bRh1N1My4GY", title: "Food safety coaching (Part 6): Cleaning effectively", channel: "FoodStandardsAgency",
      duration: "1:36", durationSeconds: 96, sampledSegment: "0:08–1:25",
      purpose: "Show the two-stage logic of removing visible contamination before sanitising a food-contact surface.",
      watchFor: "Why does the first cleaning stage need to happen before the sanitising stage?",
      evidenceTarget: "Sequence cleaning and sanitising steps for a food-contact surface.",
      alternative: "Read the adjacent Washing up, cleaning and sanitising explanation and follow its clean–rinse–sanitise–air-dry sequence diagram. Local chemicals remain Teacher to confirm.",
      theoryLink: "modules/module-01.html#section-3"
    },
    {
      sectionId: "m02-s01", module: 2, moduleTitle: "Recipes, Equipment and Measurement", section: 1,
      sectionTitle: "Reading recipes and cooking terms", outcome: "MATCHED",
      videoId: "zOeyz25Flzo", title: "How to (Actually) Follow a Recipe  | Techniquely with Lan Lam", channel: "America's Test Kitchen",
      duration: "9:54", durationSeconds: 594, sampledSegment: "0:35–3:45",
      purpose: "Model active recipe reading before cooking: scan the whole method, notice timing and prepare ingredients and equipment.",
      watchFor: "What does the cook check before starting, rather than discovering halfway through the method?",
      evidenceTarget: "Annotate a recipe with preparation, timing, equipment and cooking-term information.",
      alternative: "Read the adjacent Reading recipes and cooking terms explanation and use its recipe anatomy guide to annotate the supplied practice recipe.",
      theoryLink: "modules/module-02.html#section-1"
    },
    {
      sectionId: "m02-s02", module: 2, moduleTitle: "Recipes, Equipment and Measurement", section: 2,
      sectionTitle: "Selecting equipment and techniques", outcome: "MATCHED",
      videoId: "-av6cz9upO0", title: "Gordon Ramsay's Kitchen Kit | What You Need To Be A Better Chef", channel: "Gordon Ramsay",
      duration: "7:01", durationSeconds: 421, sampledSegment: "0:25–2:55",
      purpose: "Compare equipment by function, control and suitability instead of choosing a tool because it looks impressive.",
      watchFor: "What feature makes one tool suitable for its job, and what could go wrong with a poor match?",
      evidenceTarget: "Select suitable equipment for a named recipe step and explain the choice.",
      alternative: "Read the adjacent Selecting equipment and techniques explanation and use the tool–task matching diagram to justify three equipment choices.",
      theoryLink: "modules/module-02.html#section-2"
    },
    {
      sectionId: "m02-s03", module: 2, moduleTitle: "Recipes, Equipment and Measurement", section: 3,
      sectionTitle: "Measuring, converting and scaling", outcome: "MATCHED",
      videoId: "a2RAbjkbbMo", title: "Cooking Techniques: Converting Recipe Yields", channel: "ILExtensionHMRS",
      duration: "2:09", durationSeconds: 129, sampledSegment: "0:15–1:58",
      purpose: "Demonstrate the conversion-factor method that keeps ingredient proportions consistent when a recipe yield changes.",
      watchFor: "Which number is divided by which to create the scaling factor, and where is that factor used next?",
      evidenceTarget: "Calculate and apply a recipe scaling factor accurately.",
      alternative: "Read the adjacent Measuring, converting and scaling explanation and work through the shown yield-factor example before completing the scaling check.",
      theoryLink: "modules/module-02.html#section-3"
    },
    {
      sectionId: "m03-s01", module: 3, moduleTitle: "Food Safety in Action", section: 1,
      sectionTitle: "Cross-contamination pathways", outcome: "MATCHED",
      videoId: "Xm_X5LJmrbw", title: "How Does Cross-Contamination Happen?", channel: "USDAFoodSafety",
      duration: "3:12", durationSeconds: 192, sampledSegment: "0:22–2:38",
      purpose: "Trace how microorganisms can move through hands, food, equipment and surfaces to ready-to-eat food.",
      watchFor: "Follow one contamination pathway and name the action that would break the chain.",
      evidenceTarget: "Trace and interrupt a cross-contamination pathway.",
      alternative: "Read the adjacent Cross-contamination pathways explanation and follow the source-to-food pathway diagram before completing the break-the-chain check.",
      theoryLink: "modules/module-03.html#section-1"
    },
    {
      sectionId: "m03-s02", module: 3, moduleTitle: "Food Safety in Action", section: 2,
      sectionTitle: "Temperature control and storage", outcome: "MATCHED",
      videoId: "y-XdLIHA-Yc", title: "What is the food temperature danger zone?", channel: "NSWFoodAuthority",
      duration: "1:26", durationSeconds: 86, sampledSegment: "0:18–1:17",
      purpose: "Explain why potentially hazardous food needs controlled time and temperature, including a fridge at 5°C or below.",
      watchFor: "What fridge temperature is named, and which everyday action helps keep the fridge at that temperature?",
      evidenceTarget: "Use current temperature guidance to make a safe storage decision.",
      alternative: "Read the adjacent Temperature control and storage explanation and use its time–temperature diagram. Follow the teacher's local storage and equipment directions.",
      theoryLink: "modules/module-03.html#section-2"
    },
    {
      sectionId: "m03-s03", module: 3, moduleTitle: "Food Safety in Action", section: 3,
      sectionTitle: "Allergens and safe food choices", outcome: "MATCHED",
      videoId: "xC4j6J9XcZo", title: "Eating Safely with Food Allergies - Food Allergy Canada Teen Video Series", channel: "Food Allergy Canada",
      duration: "3:35", durationSeconds: 215, sampledSegment: "0:26–2:58",
      purpose: "Show why labels, communication and avoiding allergen cross-contact matter when another person will eat the food.",
      watchFor: "Which safety action depends on clear communication, and which action prevents allergen cross-contact?",
      evidenceTarget: "Recognise that allergen safety needs verified information and controlled preparation.",
      alternative: "Read the adjacent Allergens and safe food choices explanation and use its ask–check–separate–communicate flow. Individual allergies and substitutions remain teacher controlled.",
      theoryLink: "modules/module-03.html#section-3"
    },
    {
      sectionId: "m04-s01", module: 4, moduleTitle: "Nutrients and Food Choices", section: 1,
      sectionTitle: "Six essential nutrients", outcome: "MATCHED",
      videoId: "kFaZugbkdjA", title: "The 6 essential nutrients.", channel: "Cleveland Clinic",
      duration: "1:06", durationSeconds: 66, sampledSegment: "0:05–0:59",
      purpose: "Introduce the six nutrient groups before the adjacent theory explains their functions and food sources.",
      watchFor: "Can you record all six nutrient groups without adding a food group or a specific vitamin?",
      evidenceTarget: "Name the six essential nutrient groups and connect each to a broad function.",
      alternative: "Read the adjacent Six essential nutrients explanation, study the nutrient-jobs visual, make your own six-row note linking each nutrient group to one broad function and food source from the explanation, then complete the section check.",
      theoryLink: "modules/module-04.html#section-1"
    },
    {
      sectionId: "m04-s02", module: 4, moduleTitle: "Nutrients and Food Choices", section: 2,
      sectionTitle: "Food groups and balanced choices", outcome: "MATCHED",
      videoId: "7rgI5q-XnKg", title: "Facts about the Australian Guide to Healthy Eating (AGHE) - Refresh.ED", channel: "Edith Cowan University",
      duration: "2:26", durationSeconds: 146, sampledSegment: "0:14–2:08",
      purpose: "Use the Australian Guide to Healthy Eating to interpret food groups, proportions, variety and discretionary choices.",
      watchFor: "How do the guide's segment sizes and placement communicate proportion and variety?",
      evidenceTarget: "Use the Australian guide to justify a more balanced food choice.",
      alternative: "Read the adjacent Food groups and balanced choices explanation and inspect the original Australian-guide interpretation diagram before completing the comparison.",
      theoryLink: "modules/module-04.html#section-2"
    },
    {
      sectionId: "m04-s03", module: 4, moduleTitle: "Nutrients and Food Choices", section: 3,
      sectionTitle: "Added sugar and informed media choices", outcome: "MATCHED",
      videoId: "Q4CZ81EmAsw", title: "Sugar: Hiding in plain sight - Robert Lustig", channel: "TED-Ed",
      duration: "4:04", durationSeconds: 244, sampledSegment: "0:28–3:30",
      purpose: "Show how added sugar can appear under varied names so students can check labels and question a media claim.",
      watchFor: "Which label clues help you recognise added sugar even when the word sugar is not prominent?",
      evidenceTarget: "Use label evidence to examine an added-sugar claim instead of accepting a headline.",
      alternative: "Read the adjacent Added sugar and informed media choices explanation, use the claim-check visual to identify the claim, source, evidence and context limit in one example, then complete the section check.",
      theoryLink: "modules/module-04.html#section-3"
    },
    {
      sectionId: "m05-s01", module: 5, moduleTitle: "Food Science", section: 1,
      sectionTitle: "Reasons for cooking", outcome: "MATCHED",
      videoId: "n2LR7fOPwOU", title: "WJEC GCSE Home Economics Food & Nutrition Topic 10 Cooking Food", channel: "LeRocquier Food",
      duration: "10:51", durationSeconds: 651, sampledSegment: "0:25–4:45",
      durationRationale: "The clip is 51 seconds over the preferred limit. The focused first segment directly joins safety, sensory and physical-change reasons for cooking; students are not asked to view the whole clip.",
      purpose: "Connect cooking to safety, palatability, texture, flavour and physical or chemical change.",
      watchFor: "Record two different reasons for cooking and the change in food that supports each reason.",
      evidenceTarget: "Explain why a chosen cooking method is used for a particular food.",
      alternative: "Read the adjacent Reasons for cooking explanation and use the reason–change–example table before completing the method-choice check.",
      theoryLink: "modules/module-05.html#section-1"
    },
    {
      sectionId: "m05-s02", module: 5, moduleTitle: "Food Science", section: 2,
      sectionTitle: "Denaturation, dextrinisation and emulsification", outcome: "MATCHED",
      videoId: "WFmgPrZ02Yg", title: "What is Protein Denaturation? - Food Science", channel: "Kiki Sanford",
      duration: "3:43", durationSeconds: 223, sampledSegment: "0:22–3:28",
      purpose: "Make protein denaturation visible as one functional-property example, ready to compare with dextrinisation and emulsification in the theory.",
      watchFor: "What causes a protein to change shape, and what observable cooking change follows?",
      evidenceTarget: "Link an observable food change to a named functional property.",
      alternative: "Read the adjacent functional-properties explanation and compare the denaturation, dextrinisation and emulsification diagrams and examples.",
      theoryLink: "modules/module-05.html#section-2"
    },
    {
      sectionId: "m05-s03", module: 5, moduleTitle: "Food Science", section: 3,
      sectionTitle: "Fair ingredient tests and observations", outcome: "MATCHED",
      videoId: "yYMPbKbK1yo", title: "Fair Tests", channel: "ESB Science Blast",
      duration: "5:28", durationSeconds: 328, sampledSegment: "0:38–4:38",
      purpose: "Reinforce changing one independent variable, controlling the rest and recording observations consistently.",
      watchFor: "Which variable is deliberately changed, and which conditions must stay the same for the comparison to be fair?",
      evidenceTarget: "Plan a fair ingredient test with variables, controls and observable evidence.",
      alternative: "Read the adjacent Fair ingredient tests and observations explanation and use the change–measure–control planner before drafting the investigation.",
      theoryLink: "modules/module-05.html#section-3"
    },
    {
      sectionId: "m06-s01", module: 6, moduleTitle: "Sensory Evaluation and Quality", section: 1,
      sectionTitle: "The five senses", outcome: "MATCHED",
      videoId: "UuqeoXr7icM", title: "Episode 9: Eating With The 5 Senses", channel: "Dairy Council of California",
      duration: "9:48", durationSeconds: 588, sampledSegment: "1:05–6:05",
      purpose: "Demonstrate how sight, smell, hearing, touch and taste combine to shape a food experience.",
      watchFor: "Find one moment when a sense other than taste changes what the eater notices about the food.",
      evidenceTarget: "Connect a sensory observation to the sense or senses that produced it.",
      alternative: "Read the adjacent The five senses explanation and use its multi-sense observation wheel during the still-image food comparison.",
      theoryLink: "modules/module-06.html#section-1"
    },
    {
      sectionId: "m06-s02", module: 6, moduleTitle: "Sensory Evaluation and Quality", section: 2,
      sectionTitle: "Precise sensory language and fair comparisons", outcome: "MATCHED",
      videoId: "Aaqoi6bo15Y", title: "Organising a sensory evaluation", channel: "BritishNutrition",
      duration: "4:05", durationSeconds: 245, sampledSegment: "0:25–3:40",
      purpose: "Show how samples, testing conditions, descriptors and recording methods are organised for a fair sensory comparison.",
      watchFor: "Which part of the setup prevents the tester from being influenced by information that is not a sensory property?",
      evidenceTarget: "Use precise descriptors and control a sensory comparison fairly.",
      alternative: "Read the adjacent Precise sensory language and fair comparisons explanation and use the coded-sample plan and descriptor bank.",
      theoryLink: "modules/module-06.html#section-2"
    },
    {
      sectionId: "m06-s03", module: 6, moduleTitle: "Sensory Evaluation and Quality", section: 3,
      sectionTitle: "Using evidence to improve food", outcome: "MATCHED",
      videoId: "lVe25lpVK0c", title: "What It's Like To Be Paid To Taste Food", channel: "Insider",
      duration: "4:51", durationSeconds: 291, sampledSegment: "0:42–2:46",
      purpose: "Connect trained sensory evidence to decisions about ingredient substitutions and product improvement.",
      watchFor: "How does the evaluator decide whether a changed product still achieves its intended sensory qualities?",
      evidenceTarget: "Turn sensory results into one justified product improvement.",
      alternative: "Read the adjacent Using evidence to improve food explanation and use the observation–criterion–change reasoning frame.",
      theoryLink: "modules/module-06.html#section-3"
    },
    {
      sectionId: "m07-s01", module: 7, moduleTitle: "Food Systems and Sustainability", section: 1,
      sectionTitle: "Farm-to-plate systems", outcome: "MATCHED",
      videoId: "WazK8e88axE", title: "Farms and Food for Kids | Learn how food comes from a farm to your table", channel: "Learn Bright",
      duration: "6:42", durationSeconds: 402, sampledSegment: "2:00–4:48",
      purpose: "Trace production, harvesting, storage, processing, transport and retail stages in a food system.",
      watchFor: "Which stages happen between harvest and the point where a consumer buys the food?",
      evidenceTarget: "Map a food from primary production to the point of consumption.",
      alternative: "Read the adjacent Farm-to-plate systems explanation and follow the original system-flow diagram before mapping one recipe ingredient.",
      theoryLink: "modules/module-07.html#section-1"
    },
    {
      sectionId: "m07-s02", module: 7, moduleTitle: "Food Systems and Sustainability", section: 2,
      sectionTitle: "Australian food and fibre production", outcome: "MATCHED",
      videoId: "7FDVRQ98O7c", title: "Where Does Our Food Come From? - Behind the News", channel: "Behind the News",
      duration: "3:17", durationSeconds: 197, sampledSegment: "0:28–2:44",
      purpose: "Connect familiar foods to Australian primary production and challenge the idea that food begins at a supermarket.",
      watchFor: "Which food origin surprised the students, and what primary-production knowledge would correct the misunderstanding?",
      evidenceTarget: "Identify the primary-production origin of a familiar food or fibre product.",
      alternative: "Read the adjacent Australian food and fibre production explanation, study the reliable-food-supply visual, choose one connection and explain how a disruption could affect a familiar food. Local Cultural Knowledge is not inferred.",
      theoryLink: "modules/module-07.html#section-2"
    },
    {
      sectionId: "m07-s03", module: 7, moduleTitle: "Food Systems and Sustainability", section: 3,
      sectionTitle: "Waste, food security and sustainable choices", outcome: "MATCHED",
      videoId: "wgLuXvtaLyQ", title: "Food Waste Explained | Why Wasting Food is Wasting Everything | OzHarvest", channel: "OzHarvest",
      duration: "2:12", durationSeconds: 132, sampledSegment: "0:18–1:58",
      purpose: "Connect wasted food to wasted resources, landfill impacts and practical use-it-up choices in an Australian context.",
      watchFor: "Which household action prevents waste before food reaches the bin, and what resource does it protect?",
      evidenceTarget: "Justify one realistic food-waste reduction action using a system consequence.",
      alternative: "Read the adjacent Waste, food security and sustainable choices explanation and use the prevent–reuse–recover hierarchy. Changing headline statistics are not assessed.",
      theoryLink: "modules/module-07.html#section-3"
    },
    {
      sectionId: "m08-s01", module: 8, moduleTitle: "Design a Party Menu", section: 1,
      sectionTitle: "User needs and constraints", outcome: "MATCHED",
      videoId: "rmM0kRf8Dbk", title: "Principles of Human-Centered Design (Don Norman)", channel: "NNgroup",
      duration: "2:56", durationSeconds: 176, sampledSegment: "0:15–2:35",
      purpose: "Frame menu design around real people, the real problem and the wider system rather than assumptions about a generic user.",
      watchFor: "What is the difference between solving a visible symptom and finding the user's real problem?",
      evidenceTarget: "Translate verified user needs into a focused menu-design requirement.",
      alternative: "Read the adjacent User needs and constraints explanation and use the person–need–evidence–limit planning frame.",
      theoryLink: "modules/module-08.html#section-1"
    },
    {
      sectionId: "m08-s02", module: 8, moduleTitle: "Design a Party Menu", section: 2,
      sectionTitle: "Menu balance and costing", outcome: "MATCHED",
      videoId: "wPJjCE3OZ3U", title: "Hacks for Healthy Eating on a Budget | The Cooking Doc®", channel: "The Cooking Doc",
      duration: "7:15", durationSeconds: 435, sampledSegment: "1:05–5:55",
      purpose: "Show that nutrition and budget decisions can be considered together by comparing practical ingredient choices.",
      watchFor: "Which suggested swap changes both nutritional value and cost, and what would you check before using it in a party menu?",
      evidenceTarget: "Balance food-group contribution, user needs and calculated cost per serve.",
      alternative: "Read the adjacent Menu balance and costing explanation, study the menu-balance visual and the fictional cost-per-serve demonstration, then record one balance feature and one cost result before completing the section check.",
      theoryLink: "modules/module-08.html#section-2"
    },
    {
      sectionId: "m08-s03", module: 8, moduleTitle: "Design a Party Menu", section: 3,
      sectionTitle: "Ideas, criteria and responsible choices", outcome: "MATCHED",
      videoId: "SIj7CuwdVDA", title: "Understanding Criteria and Constraints", channel: "Chorus Educational K-12 Content",
      duration: "1:59", durationSeconds: 119, sampledSegment: "0:15–1:42",
      purpose: "Separate testable success criteria from fixed constraints before ideas are compared.",
      watchFor: "Which example is a criterion and which is a constraint, and how would each affect a menu idea?",
      evidenceTarget: "Write a testable criterion and distinguish it from a design constraint.",
      alternative: "Read the adjacent Ideas, criteria and responsible choices explanation, study the design-criteria visual, then write two fixed constraints and two measurable success criteria before completing the section check.",
      theoryLink: "modules/module-08.html#section-3"
    },
    {
      sectionId: "m09-s01", module: 9, moduleTitle: "Plan, Produce and Present", section: 1,
      sectionTitle: "Recipe and equipment selection", outcome: "MATCHED",
      videoId: "4h1imzBn8pE", title: "Master the Art of Mise En Place: Organize Like a Pro", channel: "WebstaurantStore",
      duration: "1:13", durationSeconds: 73, sampledSegment: "0:10–1:02",
      purpose: "Show how checking the recipe, ingredients and equipment before cooking creates a controlled mise en place.",
      watchFor: "What is organised before heat is applied, and how does that reduce interruption during production?",
      evidenceTarget: "Prepare a recipe-linked ingredient and equipment checklist.",
      alternative: "Read the adjacent Recipe and equipment selection explanation and use the mise-en-place checklist to audit the proposed practical setup.",
      theoryLink: "modules/module-09.html#section-1"
    },
    {
      sectionId: "m09-s02", module: 9, moduleTitle: "Plan, Produce and Present", section: 2,
      sectionTitle: "Workflow and collaboration", outcome: "MATCHED",
      videoId: "0vICpqEVK8o", title: "How to Write a Time Plan || Food, Nutrition and Health || Eps 3", channel: "The Foods Teacher",
      duration: "9:31", durationSeconds: 571, sampledSegment: "0:45–5:50",
      purpose: "Turn a recipe method into a timed workflow with setup, overlapping tasks, quality checks and cleaning.",
      watchFor: "Which tasks can overlap safely, and where should a check or cleaning step be protected in the plan?",
      evidenceTarget: "Build a workable team time plan with named responsibilities and safe dependencies.",
      alternative: "Read the adjacent Workflow and collaboration explanation and use its who–what–when–check time-plan scaffold.",
      theoryLink: "modules/module-09.html#section-2"
    },
    {
      sectionId: "m09-s03", module: 9, moduleTitle: "Plan, Produce and Present", section: 3,
      sectionTitle: "Presentation, styling and photography", outcome: "MATCHED",
      videoId: "WKigLV90j3Y", title: "3 Food Photography Angles You MUST Know", channel: "V-Flat World",
      duration: "4:09", durationSeconds: 249, sampledSegment: "0:35–3:48",
      purpose: "Compare overhead, three-quarter and eye-level angles so photographs communicate the finished food honestly and clearly.",
      watchFor: "Which angle best shows height, arrangement or surface detail, and why?",
      evidenceTarget: "Choose and justify a camera angle that records useful product evidence.",
      alternative: "Read the adjacent Presentation, styling and photography explanation, study the product-evidence visual, then choose an overhead, three-quarter or eye-level angle and justify what it would show before planning the evidence photo.",
      theoryLink: "modules/module-09.html#section-3"
    },
    {
      sectionId: "m10-s01", module: 10, moduleTitle: "Evaluate and Communicate", section: 1,
      sectionTitle: "Testing against criteria", outcome: "MATCHED",
      videoId: "IqUjftjsnyI", title: "How to Evaluate Design Solutions", channel: "Chorus Educational K-12 Content",
      duration: "2:04", durationSeconds: 124, sampledSegment: "0:18–1:45",
      purpose: "Connect evaluation judgements to criteria, constraints, testing and comparative evidence.",
      watchFor: "What evidence allows a designer to say one solution meets a criterion more successfully than another?",
      evidenceTarget: "Judge a food solution against a named criterion using specific evidence.",
      alternative: "Read the adjacent Testing against criteria explanation and use the criterion–evidence–judgement frame.",
      theoryLink: "modules/module-10.html#section-1"
    },
    {
      sectionId: "m10-s02", module: 10, moduleTitle: "Evaluate and Communicate", section: 2,
      sectionTitle: "Evidence, sources and bibliography", outcome: "MATCHED",
      videoId: "-JV9cLDCgas", title: "Citing Sources: Why & How to Do It", channel: "OSLIS Elementary Videos",
      duration: "5:38", durationSeconds: 338, sampledSegment: "0:40–4:50",
      purpose: "Explain why sources need acknowledgement and which details make a bibliography entry traceable.",
      watchFor: "Which source details would another person need to find the information again?",
      evidenceTarget: "Record and format sufficient source details for a simple bibliography.",
      alternative: "Read the adjacent Evidence, sources and bibliography explanation, study the source-to-bibliography pathway visual, then draft one traceable source record using only the identifying details actually available.",
      theoryLink: "modules/module-10.html#section-2"
    },
    {
      sectionId: "m10-s03", module: 10, moduleTitle: "Evaluate and Communicate", section: 3,
      sectionTitle: "Reflection, improvement and communication", outcome: "MATCHED",
      videoId: "toowMhFRjH4", title: "Reflecting on Learning in Design Thinking", channel: "David Lee | Learning in Perpetual Beta",
      duration: "2:34", durationSeconds: 154, sampledSegment: "0:18–2:18",
      purpose: "Distinguish a useful reflection from a simple recount by linking evidence, learning and a specific next improvement.",
      watchFor: "What makes reflection part of the design process rather than something added only at the end?",
      evidenceTarget: "Communicate one evidence-based improvement and explain why it should work.",
      alternative: "Read the adjacent Reflection, improvement and communication explanation and use the evidence–learning–next-step frame.",
      theoryLink: "modules/module-10.html#section-3"
    }
  ].map((video) => Object.freeze({
    ...video,
    url: `https://www.youtube.com/watch?v=${video.videoId}`,
    thumbnail: `https://i.ytimg.com/vi/${video.videoId}/mqdefault.jpg`,
    intelligibility: "PASS — clear student-accessible English speech in the sampled segment; English captions are available.",
    placement: `Module ${video.module}, section ${video.section}, immediately after the adjacent explanation and visual`,
    verifiedAt,
    validation: Object.freeze({
      watchPage: "OK",
      playableInEmbed: true,
      privacyEmbedStatus: 200,
      oEmbedMetadata: "PASS",
      thumbnailStatus: 200,
      thumbnailNaturalSize: "320×180",
      captionsAvailable: true
    })
  }));

  const bySection = Object.freeze(Object.fromEntries(videos.map((video) => [video.sectionId, video])));
  window.FOOD_TECH_VIDEOS = Object.freeze({
    version: "1.0.0",
    courseId: "yr8-food-tech-2026",
    verifiedAt,
    outcomes: Object.freeze({ matched: 30, exception: 0, gap: 0, rework: 0, blocked: 0 }),
    videos: Object.freeze(videos),
    bySection
  });
})();
