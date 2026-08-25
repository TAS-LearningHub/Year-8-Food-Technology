window.FOOD_TECH_CHECKS = Object.freeze({
  "version": "1.0.0",
  "courseId": "yr8-food-tech-2026",
  "evidenceLabel": "Formative learning evidence",
  "feedbackRule": "Show answer-specific reasoning only after the student checks a selection.",
  "helpRule": "Hints remain answer-neutral and point to an exact Stage 05 help anchor.",
  "checks": [
    {
      "sectionId": "m01-s01",
      "knowledgeCheckId": "kc-m01-s01",
      "title": "Personal hygiene and handwashing — knowledge check",
      "label": "Formative learning evidence",
      "theoryAnchors": [
        "help-m01-s01-contamination-barriers",
        "help-m01-s01-handwashing-sequence",
        "help-m01-s01-ready-to-cook"
      ],
      "sourceIds": [
        "safety-routines",
        "course-program"
      ],
      "hintPolicy": "answer-neutral",
      "feedbackTiming": "after check only",
      "questions": [
        {
          "id": "kc-m01-s01-q1",
          "label": "Formative learning evidence",
          "focus": "essential idea",
          "theoryAnchor": "help-m01-s01-contamination-barriers",
          "prompt": "A student is preparing to handle ready-to-eat food. Which preparation best shows that personal hygiene is being used as a set of contamination barriers rather than as one isolated action?",
          "hint": "Consider which choice combines the different ways a student can reduce contamination before food handling begins.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Wash hands carefully, wear a clean apron, tie back hair, cover cuts and report illness if unwell.",
              "correct": true,
              "feedback": "This combines several independent hygiene barriers, reducing opportunities for contaminants to move from the student to food or food-contact surfaces. Review how the barriers work together at help-m01-s01-contamination-barriers.",
              "helpAnchor": "help-m01-s01-contamination-barriers"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Wear a clean apron and rely on it to protect the food even if hands have not been washed.",
              "correct": false,
              "feedback": "A clean apron is useful, but it does not replace clean hands. Different hygiene barriers have different purposes. Review this relationship at help-m01-s01-contamination-barriers.",
              "helpAnchor": "help-m01-s01-contamination-barriers"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Tie back hair and begin cooking because hair control is the main hygiene requirement.",
              "correct": false,
              "feedback": "Tying back hair reduces one source of contamination, but it does not address hands, clothing, cuts or illness. Review the combined barriers at help-m01-s01-contamination-barriers.",
              "helpAnchor": "help-m01-s01-contamination-barriers"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Cover a cut and begin preparing food without checking the condition of hands or clothing.",
              "correct": false,
              "feedback": "Covering a cut is one useful barrier, but kitchen readiness requires several hygiene checks working together. Review the full set at help-m01-s01-contamination-barriers.",
              "helpAnchor": "help-m01-s01-contamination-barriers"
            }
          ]
        },
        {
          "id": "kc-m01-s01-q2",
          "label": "Formative learning evidence",
          "focus": "concept connection",
          "theoryAnchor": "help-m01-s01-handwashing-sequence",
          "prompt": "A student completes the handwashing sequence correctly, then adjusts their hair with their hands before portioning food. Which reasoning best connects handwashing with ongoing kitchen readiness?",
          "hint": "Think about whether completing a correct sequence once guarantees that hands remain in the same condition afterwards.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "The student should wash again because contact after washing can reintroduce contamination before food handling.",
              "correct": true,
              "feedback": "Correct handwashing creates a clean starting point, but later contact can change that condition. Rewashing restores the hygiene barrier before food handling. Review this connection at help-m01-s01-handwashing-sequence.",
              "helpAnchor": "help-m01-s01-handwashing-sequence"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "The student can continue because a correct handwashing sequence protects hands for the rest of the practical.",
              "correct": false,
              "feedback": "A correct sequence does not keep hands clean after later contact. Hands may need washing again when contamination could have been reintroduced. Review when to repeat the sequence at help-m01-s01-handwashing-sequence.",
              "helpAnchor": "help-m01-s01-handwashing-sequence"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "The student only needs to dry their hands again because the soap used earlier is still providing protection.",
              "correct": false,
              "feedback": "Drying alone does not remove contamination that may have been picked up after washing, and earlier soap does not provide continuing protection. Review the complete washing sequence at help-m01-s01-handwashing-sequence.",
              "helpAnchor": "help-m01-s01-handwashing-sequence"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "The student can continue if their apron is clean because clothing hygiene compensates for later hand contact.",
              "correct": false,
              "feedback": "A clean apron and clean hands are separate hygiene barriers. Clothing hygiene cannot restore hands after possible contamination. Review the handwashing requirement at help-m01-s01-handwashing-sequence.",
              "helpAnchor": "help-m01-s01-handwashing-sequence"
            }
          ]
        },
        {
          "id": "kc-m01-s01-q3",
          "label": "Formative learning evidence",
          "focus": "likely misconception",
          "theoryAnchor": "help-m01-s01-ready-to-cook",
          "prompt": "A student says that they washed their hands when they entered the kitchen, so checking a phone halfway through preparation does not affect their hygiene. Which response best challenges this misconception?",
          "hint": "Focus on what has happened to the condition of the hands since the original wash.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Touching the phone can reintroduce contamination, so the student should rewash before handling food.",
              "correct": true,
              "feedback": "Kitchen readiness must be reconsidered after contact that could contaminate clean hands. The phone changes the situation, so rewashing is needed before food handling. Review the readiness check at help-m01-s01-ready-to-cook.",
              "helpAnchor": "help-m01-s01-ready-to-cook"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "The original wash is enough because handwashing is only required when entering the kitchen.",
              "correct": false,
              "feedback": "Handwashing is not limited to the beginning of a practical. A later contact can mean the student is no longer ready to handle food. Review ongoing readiness at help-m01-s01-ready-to-cook.",
              "helpAnchor": "help-m01-s01-ready-to-cook"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "The phone only matters if it looks visibly dirty, so no action is needed when it appears clean.",
              "correct": false,
              "feedback": "A surface does not need visible dirt to present a contamination risk. The readiness check considers what has been touched, not only what can be seen. Review this decision point at help-m01-s01-ready-to-cook.",
              "helpAnchor": "help-m01-s01-ready-to-cook"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "The student can avoid rewashing by wiping their hands on a clean apron before returning to the food.",
              "correct": false,
              "feedback": "Wiping hands on an apron is not the approved handwashing sequence and does not reliably restore clean hands. Review how readiness is restored at help-m01-s01-ready-to-cook.",
              "helpAnchor": "help-m01-s01-ready-to-cook"
            }
          ]
        },
        {
          "id": "kc-m01-s01-q4",
          "label": "Formative learning evidence",
          "focus": "authentic practical/design decision",
          "theoryAnchor": "help-m01-s01-ready-to-cook",
          "prompt": "During preparation for the Food for Purpose / Party Task, a student washes and dries their hands correctly, checks a recipe on their phone, then needs to arrange food on a serving platter. What is the best practical decision before continuing?",
          "hint": "Choose the action that best preserves a hygiene barrier immediately before direct food handling.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Rewash and dry hands correctly, then arrange the food while the other personal hygiene barriers remain in place.",
              "correct": true,
              "feedback": "The phone contact may have reintroduced contamination, so repeating the full handwashing sequence restores an important barrier before direct food handling. Review the readiness decision at help-m01-s01-ready-to-cook.",
              "helpAnchor": "help-m01-s01-ready-to-cook"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Continue arranging the food because the student washed correctly before checking the recipe.",
              "correct": false,
              "feedback": "The earlier wash does not account for the later phone contact. Readiness should be checked again before handling the food. Review this practical situation at help-m01-s01-ready-to-cook.",
              "helpAnchor": "help-m01-s01-ready-to-cook"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Put on a second clean apron and continue without rewashing hands.",
              "correct": false,
              "feedback": "Adding another clothing barrier does not remove possible contamination from the hands. The relevant action is to restore hand hygiene. Review the different readiness barriers at help-m01-s01-ready-to-cook.",
              "helpAnchor": "help-m01-s01-ready-to-cook"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Rinse hands briefly with water, dry them and continue arranging the food.",
              "correct": false,
              "feedback": "A brief water rinse does not follow the required sequence of wetting, applying soap, rubbing all surfaces, rinsing and drying correctly. Review the sequence at help-m01-s01-handwashing-sequence.",
              "helpAnchor": "help-m01-s01-handwashing-sequence"
            }
          ]
        },
        {
          "id": "kc-m01-s01-q5",
          "label": "Formative learning evidence",
          "focus": "likely misconception",
          "theoryAnchor": "help-m01-s01-handwashing-sequence",
          "prompt": "During this situation — a student has prepared to handle party food but touches a phone after washing their hands. Which response best avoids the misconception that “Wearing a clean apron means hand hygiene is less important.”?",
          "hint": "Compare each option with the ideas under “Use a careful handwashing sequence”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Only “Personal hygiene creates barriers to contamination” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m01-s01-handwashing-sequence.",
              "helpAnchor": "help-m01-s01-handwashing-sequence"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "An apron and clean hands are different hygiene barriers. One does not replace the other.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to use a careful handwashing sequence. Revisit help-m01-s01-handwashing-sequence to consolidate the reasoning.",
              "helpAnchor": "help-m01-s01-handwashing-sequence"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Wearing a clean apron means hand hygiene is less important.",
              "correct": false,
              "feedback": "An apron and clean hands are different hygiene barriers. One does not replace the other. Revisit help-m01-s01-handwashing-sequence.",
              "helpAnchor": "help-m01-s01-handwashing-sequence"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in personal hygiene and handwashing. Revisit help-m01-s01-handwashing-sequence.",
              "helpAnchor": "help-m01-s01-handwashing-sequence"
            }
          ]
        },
        {
          "id": "kc-m01-s01-q6",
          "label": "Formative learning evidence",
          "focus": "terminology in context",
          "theoryAnchor": "help-m01-s01-contamination-barriers",
          "prompt": "Which option uses the term “personal hygiene” accurately in the context of personal hygiene and handwashing?",
          "hint": "Compare each option with the ideas under “Personal hygiene creates barriers to contamination”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "personal hygiene means practices that keep your body, hands and clothing clean to help reduce contamination during food preparation.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to personal hygiene creates barriers to contamination. Revisit help-m01-s01-contamination-barriers to consolidate the reasoning.",
              "helpAnchor": "help-m01-s01-contamination-barriers"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "personal hygiene is a general word for any food choice a person happens to like.",
              "correct": false,
              "feedback": "personal hygiene has a precise section meaning: Practices that keep your body, hands and clothing clean to help reduce contamination during food preparation. Revisit help-m01-s01-contamination-barriers.",
              "helpAnchor": "help-m01-s01-contamination-barriers"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "personal hygiene means the same as contamination in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m01-s01-contamination-barriers.",
              "helpAnchor": "help-m01-s01-contamination-barriers"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "The meaning of personal hygiene changes to match whichever answer is most convenient.",
              "correct": false,
              "feedback": "The section gives personal hygiene a precise meaning that should be applied consistently. Revisit help-m01-s01-contamination-barriers.",
              "helpAnchor": "help-m01-s01-contamination-barriers"
            }
          ]
        },
        {
          "id": "kc-m01-s01-q7",
          "label": "Formative learning evidence",
          "focus": "worked-example reasoning",
          "theoryAnchor": "help-m01-s01-ready-to-cook",
          "prompt": "A student has prepared to handle party food but touches a phone after washing their hands. Which conclusion is best supported by the worked example rather than by a guess?",
          "hint": "Compare each option with the ideas under “Check that you are ready to cook”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "If I washed my hands at the start of the practical, they stay clean for the whole lesson.",
              "correct": false,
              "feedback": "Hands can become contaminated again after touching items such as a phone, so they may need to be washed again before handling food. Revisit help-m01-s01-ready-to-cook.",
              "helpAnchor": "help-m01-s01-ready-to-cook"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m01-s01-ready-to-cook.",
              "helpAnchor": "help-m01-s01-ready-to-cook"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in personal hygiene and handwashing. Revisit help-m01-s01-ready-to-cook.",
              "helpAnchor": "help-m01-s01-ready-to-cook"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Being ready to cook is an ongoing condition, not a one-time check at the start of the lesson.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to check that you are ready to cook. Revisit help-m01-s01-ready-to-cook to consolidate the reasoning.",
              "helpAnchor": "help-m01-s01-ready-to-cook"
            }
          ]
        },
        {
          "id": "kc-m01-s01-q8",
          "label": "Formative learning evidence",
          "focus": "evidence selection",
          "theoryAnchor": "help-m01-s01-handwashing-sequence",
          "prompt": "A student has prepared to handle party food but touches a phone after washing their hands. Which evidence plan would most directly support a careful explanation?",
          "hint": "Compare each option with the ideas under “Use a careful handwashing sequence”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Record only a final opinion and leave out the observations, source details or reasoning that support it.",
              "correct": false,
              "feedback": "A final opinion without supporting evidence or reasoning cannot show how the conclusion was reached. Revisit help-m01-s01-handwashing-sequence.",
              "helpAnchor": "help-m01-s01-handwashing-sequence"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m01-s01-handwashing-sequence.",
              "helpAnchor": "help-m01-s01-handwashing-sequence"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Students can explain how personal hygiene reduces contamination and justify why hands should be rewashed after touching a phone before handling food.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to use a careful handwashing sequence. Revisit help-m01-s01-handwashing-sequence to consolidate the reasoning.",
              "helpAnchor": "help-m01-s01-handwashing-sequence"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m01-s01-handwashing-sequence.",
              "helpAnchor": "help-m01-s01-handwashing-sequence"
            }
          ]
        },
        {
          "id": "kc-m01-s01-q9",
          "label": "Formative learning evidence",
          "focus": "authentic practical/design decision",
          "theoryAnchor": "help-m01-s01-ready-to-cook",
          "prompt": "A student has prepared to handle party food but touches a phone after washing their hands. Which learning action would provide the most useful practice before writing the section capstone?",
          "hint": "Compare each option with the ideas under “Check that you are ready to cook”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Change several important factors at once, then assume which change caused the result.",
              "correct": false,
              "feedback": "Changing several factors together makes it difficult to identify which change influenced the result. Revisit help-m01-s01-ready-to-cook.",
              "helpAnchor": "help-m01-s01-ready-to-cook"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Have students apply a kitchen-readiness check to a realistic Food for Purpose / Party Task preparation sequence.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to check that you are ready to cook. Revisit help-m01-s01-ready-to-cook to consolidate the reasoning.",
              "helpAnchor": "help-m01-s01-ready-to-cook"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Skip the practice and copy a finished response without applying the idea to the situation.",
              "correct": false,
              "feedback": "The practice should require the student to apply the idea and rehearse their own reasoning before the capstone. Revisit help-m01-s01-ready-to-cook.",
              "helpAnchor": "help-m01-s01-ready-to-cook"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in personal hygiene and handwashing. Revisit help-m01-s01-ready-to-cook.",
              "helpAnchor": "help-m01-s01-ready-to-cook"
            }
          ]
        },
        {
          "id": "kc-m01-s01-q10",
          "label": "Formative learning evidence",
          "focus": "careful judgement",
          "theoryAnchor": "help-m01-s01-handwashing-sequence",
          "prompt": "A student has prepared to handle party food but touches a phone after washing their hands. Which final judgement is the most careful, balanced conclusion?",
          "hint": "Compare each option with the ideas under “Check that you are ready to cook”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Wash hands by wetting them, applying soap, rubbing all surfaces thoroughly, rinsing, then drying them with a clean single-use towel or approved hand-drying method.",
              "correct": true,
              "feedback": "This conclusion uses the section evidence carefully and connects it to “Use a careful handwashing sequence”. Revisit help-m01-s01-handwashing-sequence to consolidate the reasoning.",
              "helpAnchor": "help-m01-s01-handwashing-sequence"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Wearing a clean apron means hand hygiene is less important.",
              "correct": false,
              "feedback": "An apron and clean hands are different hygiene barriers. One does not replace the other. Revisit help-m01-s01-ready-to-cook. Review help-m01-s01-handwashing-sequence.",
              "helpAnchor": "help-m01-s01-handwashing-sequence"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m01-s01-ready-to-cook. Review help-m01-s01-handwashing-sequence.",
              "helpAnchor": "help-m01-s01-handwashing-sequence"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in personal hygiene and handwashing. Revisit help-m01-s01-ready-to-cook. Review help-m01-s01-handwashing-sequence.",
              "helpAnchor": "help-m01-s01-handwashing-sequence"
            }
          ]
        }
      ]
    },
    {
      "sectionId": "m01-s02",
      "knowledgeCheckId": "kc-m01-s02",
      "title": "Kitchen hazards and safe routines — knowledge check",
      "label": "Formative learning evidence",
      "theoryAnchors": [
        "help-m01-s02-hazards",
        "help-m01-s02-controls",
        "help-m01-s02-safe-routines"
      ],
      "sourceIds": [
        "course-program",
        "safety-routines"
      ],
      "hintPolicy": "answer-neutral",
      "feedbackTiming": "after check only",
      "questions": [
        {
          "id": "kc-m01-s02-q1",
          "label": "Formative learning evidence",
          "focus": "essential idea",
          "theoryAnchor": "help-m01-s02-hazards",
          "prompt": "During a busy practical, a student notices a clear walkway near their own bench but sees another group carrying equipment past a hotplate with a pan handle extending into the movement area. What best shows good kitchen hazard awareness?",
          "hint": "Think beyond the condition of one bench and consider how people, equipment and movement interact across the kitchen.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Recognise that the handle and nearby movement could combine to create a burn or spill risk, even though the student's own bench is clear.",
              "correct": true,
              "feedback": "Good hazard awareness includes noticing how movement, hot equipment and other people interact beyond your own workspace. Review common hazards and kitchen awareness at help-m01-s02-hazards.",
              "helpAnchor": "help-m01-s02-hazards"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Focus only on the student's own bench because each group is responsible for hazards in its own work area.",
              "correct": false,
              "feedback": "Kitchen awareness extends beyond one bench. Movement and hazards in shared areas can affect several groups, so students need to notice what is happening around them. Review this at help-m01-s02-hazards.",
              "helpAnchor": "help-m01-s02-hazards"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Assume there is no hazard unless someone has already been injured or equipment has been knocked over.",
              "correct": false,
              "feedback": "A hazard is something with the potential to cause harm, so it should be recognised before an accident occurs. Review the meaning and examples of hazards at help-m01-s02-hazards.",
              "helpAnchor": "help-m01-s02-hazards"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Treat only the hotplate as a hazard because normal movement through the kitchen does not contribute to accidents.",
              "correct": false,
              "feedback": "Movement can also create risk when people rush, carry equipment carelessly or pass close to poorly positioned objects. Review movement hazards at help-m01-s02-hazards.",
              "helpAnchor": "help-m01-s02-hazards"
            }
          ]
        },
        {
          "id": "kc-m01-s02-q2",
          "label": "Formative learning evidence",
          "focus": "concept connection",
          "theoryAnchor": "help-m01-s02-controls",
          "prompt": "A student sees liquid on the floor beside unfamiliar electrical equipment. Which response best connects hazard recognition with the notice, pause, control and report approach?",
          "hint": "Consider both the possible harm and whether this is a situation a student should try to control personally.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Pause, keep others away from the area and report the situation so it can be managed according to teacher directions.",
              "correct": true,
              "feedback": "The situation combines water and unfamiliar electrical equipment, so the student should avoid creating further risk and report it rather than attempting an unsafe control. Review when to control or report at help-m01-s02-controls.",
              "helpAnchor": "help-m01-s02-controls"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Immediately move the electrical equipment away from the liquid before telling anyone.",
              "correct": false,
              "feedback": "Acting immediately around unfamiliar electrical equipment could increase the danger. The safer reasoning is to pause, avoid handling what has not been demonstrated and report the hazard. Review this decision process at help-m01-s02-controls.",
              "helpAnchor": "help-m01-s02-controls"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Step over the liquid and continue working because the hazard only matters to the group using the equipment.",
              "correct": false,
              "feedback": "Ignoring the hazard leaves a possible slip and electrical risk unmanaged and may expose other people to harm. Reporting is part of safe kitchen behaviour. Review this at help-m01-s02-controls.",
              "helpAnchor": "help-m01-s02-controls"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Dry the liquid first and decide later whether the electrical equipment needs attention.",
              "correct": false,
              "feedback": "Trying to control part of the situation without first considering the electrical risk could be unsafe. Pause and judge whether the hazard can be handled safely before acting. Review the control and reporting approach at help-m01-s02-controls.",
              "helpAnchor": "help-m01-s02-controls"
            }
          ]
        },
        {
          "id": "kc-m01-s02-q3",
          "label": "Formative learning evidence",
          "focus": "likely misconception",
          "theoryAnchor": "help-m01-s02-controls",
          "prompt": "A student says that the safest response to any kitchen hazard is to fix it immediately before anyone else notices it. Which reasoning best corrects this misconception?",
          "hint": "Think about why pausing before acting can sometimes prevent a hazard from becoming more dangerous.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Some simple hazards can be controlled safely, but students should pause first and report hazards that are unfamiliar or cannot be managed safely through normal routines.",
              "correct": true,
              "feedback": "Safe action depends on the type of hazard and what the student can manage without creating more risk. Pausing and reporting when needed are essential parts of the response. Review help-m01-s02-controls.",
              "helpAnchor": "help-m01-s02-controls"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Students should always fix hazards themselves because reporting is only necessary after an accident.",
              "correct": false,
              "feedback": "Reporting is used to prevent harm as well as respond after an incident. Students should report situations they cannot safely control. Review the reporting guidance at help-m01-s02-controls.",
              "helpAnchor": "help-m01-s02-controls"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Students should never control any hazard because all safety decisions must be left entirely to the teacher.",
              "correct": false,
              "feedback": "Students can manage ordinary risks through safe routines, such as keeping a walkway clear, when it is safe to do so. The key is judging when control is appropriate and when reporting is needed. Review help-m01-s02-controls.",
              "helpAnchor": "help-m01-s02-controls"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Immediate action is safest as long as the student moves quickly enough to remove the hazard.",
              "correct": false,
              "feedback": "Speed does not guarantee safety and rushing can create additional hazards. Students should pause and consider what could happen before choosing an action. Review help-m01-s02-controls.",
              "helpAnchor": "help-m01-s02-controls"
            }
          ]
        },
        {
          "id": "kc-m01-s02-q4",
          "label": "Formative learning evidence",
          "focus": "authentic practical/design decision",
          "theoryAnchor": "help-m01-s02-safe-routines",
          "prompt": "During a pikelet practical, one student needs to carry a bowl to another bench while classmates are moving through the same area. A container partly blocks the walkway and a hot pan handle extends towards the path. What is the best practical decision?",
          "hint": "Choose the response that reduces foreseeable risk while allowing normal kitchen work to continue safely.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Pause the move, make sure the walkway and pan handle are safely managed through normal classroom routines, then carry the bowl carefully when the path is clear.",
              "correct": true,
              "feedback": "This uses safe routines to reduce trip, collision and hot-equipment risks without unnecessarily stopping the practical. It also checks the path before movement. Review help-m01-s02-safe-routines.",
              "helpAnchor": "help-m01-s02-safe-routines"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Carry the bowl quickly before more students enter the walkway so the trip takes less time.",
              "correct": false,
              "feedback": "Rushing increases the chance of unexpected movement, collisions and loss of control. Safe routines favour careful carrying and a clear path. Review help-m01-s02-safe-routines.",
              "helpAnchor": "help-m01-s02-safe-routines"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Step around the container while watching only the bowl so that nothing spills.",
              "correct": false,
              "feedback": "Watching only the bowl reduces awareness of other people, obstacles and hot equipment. Safe movement requires looking where you are going and checking the surrounding space. Review help-m01-s02-safe-routines.",
              "helpAnchor": "help-m01-s02-safe-routines"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Leave the container and pan handle as they are and ask classmates to avoid the area for the rest of the practical.",
              "correct": false,
              "feedback": "Avoiding an area does not remove simple hazards that can be safely managed through normal routines. Clear work areas and well-positioned handles support safer movement for everyone. Review help-m01-s02-safe-routines.",
              "helpAnchor": "help-m01-s02-safe-routines"
            }
          ]
        },
        {
          "id": "kc-m01-s02-q5",
          "label": "Formative learning evidence",
          "focus": "likely misconception",
          "theoryAnchor": "help-m01-s02-controls",
          "prompt": "During this situation — during a busy pikelet practical, a container blocks part of the walkway and a pan handle points into a movement area. Which response best avoids the misconception that “Kitchen safety mainly matters when using sharp or hot equipment.”?",
          "hint": "Compare each option with the ideas under “Use notice, pause, control and report”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Many accidents can also come from clutter, rushing, blocked walkways, careless carrying or failing to notice what other people are doing.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to use notice, pause, control and report. Revisit help-m01-s02-controls to consolidate the reasoning.",
              "helpAnchor": "help-m01-s02-controls"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Kitchen safety mainly matters when using sharp or hot equipment.",
              "correct": false,
              "feedback": "Many accidents can also come from clutter, rushing, blocked walkways, careless carrying or failing to notice what other people are doing. Revisit help-m01-s02-controls.",
              "helpAnchor": "help-m01-s02-controls"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in kitchen hazards and safe routines. Revisit help-m01-s02-controls.",
              "helpAnchor": "help-m01-s02-controls"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Only “Recognise common kitchen hazards” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m01-s02-controls.",
              "helpAnchor": "help-m01-s02-controls"
            }
          ]
        },
        {
          "id": "kc-m01-s02-q6",
          "label": "Formative learning evidence",
          "focus": "terminology in context",
          "theoryAnchor": "help-m01-s02-hazards",
          "prompt": "Which option uses the term “hazard” accurately in the context of kitchen hazards and safe routines?",
          "hint": "Compare each option with the ideas under “Recognise common kitchen hazards”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "hazard is a general word for any food choice a person happens to like.",
              "correct": false,
              "feedback": "hazard has a precise section meaning: Something with the potential to cause harm. Revisit help-m01-s02-hazards.",
              "helpAnchor": "help-m01-s02-hazards"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "hazard means the same as risk in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m01-s02-hazards.",
              "helpAnchor": "help-m01-s02-hazards"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "The meaning of hazard changes to match whichever answer is most convenient.",
              "correct": false,
              "feedback": "The section gives hazard a precise meaning that should be applied consistently. Revisit help-m01-s02-hazards.",
              "helpAnchor": "help-m01-s02-hazards"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "hazard means something with the potential to cause harm.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to recognise common kitchen hazards. Revisit help-m01-s02-hazards to consolidate the reasoning.",
              "helpAnchor": "help-m01-s02-hazards"
            }
          ]
        },
        {
          "id": "kc-m01-s02-q7",
          "label": "Formative learning evidence",
          "focus": "worked-example reasoning",
          "theoryAnchor": "help-m01-s02-safe-routines",
          "prompt": "During a busy pikelet practical, a container blocks part of the walkway and a pan handle points into a movement area. Which conclusion is best supported by the worked example rather than by a guess?",
          "hint": "Compare each option with the ideas under “Build safe routines into every practical”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m01-s02-safe-routines.",
              "helpAnchor": "help-m01-s02-safe-routines"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in kitchen hazards and safe routines. Revisit help-m01-s02-safe-routines.",
              "helpAnchor": "help-m01-s02-safe-routines"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Safe kitchen work comes from recognising hazards early and responding calmly before they turn into accidents.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to build safe routines into every practical. Revisit help-m01-s02-safe-routines to consolidate the reasoning.",
              "helpAnchor": "help-m01-s02-safe-routines"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "If I see a hazard, I should fix it immediately.",
              "correct": false,
              "feedback": "Pause first. Some hazards can be managed through simple safe routines, while others should be reported rather than handled by a student. Revisit help-m01-s02-safe-routines.",
              "helpAnchor": "help-m01-s02-safe-routines"
            }
          ]
        },
        {
          "id": "kc-m01-s02-q8",
          "label": "Formative learning evidence",
          "focus": "evidence selection",
          "theoryAnchor": "help-m01-s02-controls",
          "prompt": "During a busy pikelet practical, a container blocks part of the walkway and a pan handle points into a movement area. Which evidence plan would most directly support a careful explanation?",
          "hint": "Compare each option with the ideas under “Use notice, pause, control and report”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m01-s02-controls.",
              "helpAnchor": "help-m01-s02-controls"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Ask students to analyse the movement and equipment setup in a busy pikelet practical and justify three changes that would reduce risk without stopping normal kitchen work.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to use notice, pause, control and report. Revisit help-m01-s02-controls to consolidate the reasoning.",
              "helpAnchor": "help-m01-s02-controls"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m01-s02-controls.",
              "helpAnchor": "help-m01-s02-controls"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Record only a final opinion and leave out the observations, source details or reasoning that support it.",
              "correct": false,
              "feedback": "A final opinion without supporting evidence or reasoning cannot show how the conclusion was reached. Revisit help-m01-s02-controls.",
              "helpAnchor": "help-m01-s02-controls"
            }
          ]
        },
        {
          "id": "kc-m01-s02-q9",
          "label": "Formative learning evidence",
          "focus": "authentic practical/design decision",
          "theoryAnchor": "help-m01-s02-safe-routines",
          "prompt": "During a busy pikelet practical, a container blocks part of the walkway and a pan handle points into a movement area. Which learning action would provide the most useful practice before writing the section capstone?",
          "hint": "Compare each option with the ideas under “Build safe routines into every practical”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Give students several short kitchen scenarios and ask them to identify the hazard, explain the possible harm and choose an appropriate safe response.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to build safe routines into every practical. Revisit help-m01-s02-safe-routines to consolidate the reasoning.",
              "helpAnchor": "help-m01-s02-safe-routines"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Skip the practice and copy a finished response without applying the idea to the situation.",
              "correct": false,
              "feedback": "The practice should require the student to apply the idea and rehearse their own reasoning before the capstone. Revisit help-m01-s02-safe-routines.",
              "helpAnchor": "help-m01-s02-safe-routines"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in kitchen hazards and safe routines. Revisit help-m01-s02-safe-routines.",
              "helpAnchor": "help-m01-s02-safe-routines"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Change several important factors at once, then assume which change caused the result.",
              "correct": false,
              "feedback": "Changing several factors together makes it difficult to identify which change influenced the result. Revisit help-m01-s02-safe-routines.",
              "helpAnchor": "help-m01-s02-safe-routines"
            }
          ]
        },
        {
          "id": "kc-m01-s02-q10",
          "label": "Formative learning evidence",
          "focus": "careful judgement",
          "theoryAnchor": "help-m01-s02-controls",
          "prompt": "During a busy pikelet practical, a container blocks part of the walkway and a pan handle points into a movement area. Which final judgement is the most careful, balanced conclusion?",
          "hint": "Compare each option with the ideas under “Build safe routines into every practical”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Kitchen safety mainly matters when using sharp or hot equipment.",
              "correct": false,
              "feedback": "Many accidents can also come from clutter, rushing, blocked walkways, careless carrying or failing to notice what other people are doing. Revisit help-m01-s02-safe-routines. Review help-m01-s02-controls.",
              "helpAnchor": "help-m01-s02-controls"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m01-s02-safe-routines. Review help-m01-s02-controls.",
              "helpAnchor": "help-m01-s02-controls"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in kitchen hazards and safe routines. Revisit help-m01-s02-safe-routines. Review help-m01-s02-controls.",
              "helpAnchor": "help-m01-s02-controls"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Control simple risks through careful movement, clear walkways, organised work areas and well-managed handles.",
              "correct": true,
              "feedback": "This conclusion uses the section evidence carefully and connects it to “Use notice, pause, control and report”. Revisit help-m01-s02-controls to consolidate the reasoning.",
              "helpAnchor": "help-m01-s02-controls"
            }
          ]
        }
      ]
    },
    {
      "sectionId": "m01-s03",
      "knowledgeCheckId": "kc-m01-s03",
      "title": "Washing up, cleaning and sanitising — knowledge check",
      "theoryAnchors": [
        "help-m01-s03-clean-v-sanitise",
        "help-m01-s03-ordered-routine",
        "help-m01-s03-reset-kitchen"
      ],
      "sourceIds": [
        "safety-routines",
        "course-program"
      ],
      "hintPolicy": "answer-neutral",
      "feedbackTiming": "after check only",
      "questions": [
        {
          "id": "kc-m01-s03-q1",
          "focus": "essential idea",
          "theoryAnchor": "help-m01-s03-clean-v-sanitise",
          "prompt": "A group wipes visible food from a preparation bench and says the area is ready for the next class. Which decision best shows an understanding of the different purposes of cleaning and sanitising?",
          "hint": "Consider whether removing visible material completes every part of preparing a suitable surface for reuse.",
          "options": [
            {
              "id": "a",
              "text": "Clean the bench to remove remaining food and dirt, then sanitise it using the approved school method.",
              "correct": true,
              "feedback": "Removing visible material is part of cleaning, but sanitising is a separate step used afterwards to reduce microorganisms on the clean surface. Review the distinction at help-m01-s03-clean-v-sanitise.",
              "helpAnchor": "help-m01-s03-clean-v-sanitise",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Sanitise the bench immediately because sanitising will remove any remaining food residue as well.",
              "correct": false,
              "feedback": "Sanitising does not replace cleaning. Food, grease and dirt need to be removed before the approved sanitising step is used. Review the different purposes at help-m01-s03-clean-v-sanitise.",
              "helpAnchor": "help-m01-s03-clean-v-sanitise",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Leave the bench as it is because removing visible food means both cleaning and sanitising are complete.",
              "correct": false,
              "feedback": "A bench can look tidy without having completed the appropriate cleaning and sanitising process. Review why these are separate jobs at help-m01-s03-clean-v-sanitise.",
              "helpAnchor": "help-m01-s03-clean-v-sanitise",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Dry the bench thoroughly because drying performs the same job as sanitising once crumbs are gone.",
              "correct": false,
              "feedback": "Drying and sanitising have different purposes. Drying does not replace the approved sanitising step used after cleaning. Review the sequence at help-m01-s03-clean-v-sanitise.",
              "helpAnchor": "help-m01-s03-clean-v-sanitise",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m01-s03-q2",
          "focus": "concept connection",
          "theoryAnchor": "help-m01-s03-ordered-routine",
          "prompt": "At the end of a practical, a sink contains bowls, a saucepan and other utensils, while a knife is still on the bench with food scraps nearby. Which action best connects an orderly washing-up routine with safer equipment handling?",
          "hint": "Think about what should happen before ordinary washing begins and whether every item should be handled in the same way.",
          "options": [
            {
              "id": "a",
              "text": "Clear scraps, sort the equipment safely and keep the knife separate for the teacher-approved sharp-object method before washing ordinary items.",
              "correct": true,
              "feedback": "Clearing and sorting first creates an organised routine, while keeping the knife separate prevents a sharp object from becoming hidden among ordinary washing-up items. Review the ordered routine at help-m01-s03-ordered-routine.",
              "helpAnchor": "help-m01-s03-ordered-routine",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Place the knife underneath the bowls so that all equipment can soak together before washing.",
              "correct": false,
              "feedback": "A sharp object should not disappear beneath other equipment or washing-up water where it may be difficult to see. Review special handling at help-m01-s03-ordered-routine.",
              "helpAnchor": "help-m01-s03-ordered-routine",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Begin washing whichever item is closest and sort the remaining equipment after the sink is partly empty.",
              "correct": false,
              "feedback": "Starting randomly can leave scraps and unsafe equipment arrangements unresolved. Clearing and sorting before washing creates a safer and more efficient sequence. Review help-m01-s03-ordered-routine.",
              "helpAnchor": "help-m01-s03-ordered-routine",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Move every item into the sink first because having all equipment in one place makes the routine safer.",
              "correct": false,
              "feedback": "Putting everything together can hide sharp objects and create a crowded sink. Safe sorting should occur before ordinary washing. Review help-m01-s03-ordered-routine.",
              "helpAnchor": "help-m01-s03-ordered-routine",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m01-s03-q3",
          "focus": "likely misconception",
          "theoryAnchor": "help-m01-s03-clean-v-sanitise",
          "prompt": "A student says that sanitising a bowl with dried batter still stuck to the side will make it ready to use again. Which response best corrects this misconception?",
          "hint": "Consider what each process is designed to remove or reduce, and the order in which those jobs need to occur.",
          "options": [
            {
              "id": "a",
              "text": "The batter must be removed through cleaning first, and the clean bowl can then be sanitised using the approved method.",
              "correct": true,
              "feedback": "Sanitising is used after cleaning. It reduces microorganisms on a clean item but does not replace the physical removal of stuck food and dirt. Review help-m01-s03-clean-v-sanitise.",
              "helpAnchor": "help-m01-s03-clean-v-sanitise",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Sanitising is enough because it performs both the cleaning and microorganism-reduction jobs at the same time.",
              "correct": false,
              "feedback": "Cleaning and sanitising perform different jobs. Food residue must be physically removed before sanitising is appropriate. Review help-m01-s03-clean-v-sanitise.",
              "helpAnchor": "help-m01-s03-clean-v-sanitise",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "The bowl only needs rinsing because dried batter is harmless once the practical is finished.",
              "correct": false,
              "feedback": "Food residue still needs to be removed so the equipment is clean and usable. A rinse alone does not replace the required cleaning and sanitising process. Review help-m01-s03-clean-v-sanitise.",
              "helpAnchor": "help-m01-s03-clean-v-sanitise",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "The bowl should be dried first and sanitised afterwards without removing the batter.",
              "correct": false,
              "feedback": "Drying does not remove the stuck food that must be cleaned away before sanitising. Review the relationship between cleaning and sanitising at help-m01-s03-clean-v-sanitise.",
              "helpAnchor": "help-m01-s03-clean-v-sanitise",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m01-s03-q4",
          "focus": "authentic practical/design decision",
          "theoryAnchor": "help-m01-s03-reset-kitchen",
          "prompt": "A group has five minutes left after cooking. Their bench has food scraps, dirty bowls and a saucepan, the sink is cluttered and the bench still has food residue. Which plan is most likely to reset the kitchen safely and efficiently for the next group?",
          "hint": "Choose the plan that creates a logical flow and leaves both equipment and the shared workspace ready for reuse.",
          "options": [
            {
              "id": "a",
              "text": "Clear scraps and sort items first, wash ordinary equipment in the approved sequence, sanitise where required, dry appropriately, then finish the bench and sink reset.",
              "correct": true,
              "feedback": "This creates an orderly flow from clearing and sorting through cleaning, sanitising and drying, then leaves the shared workspace ready for the next group. Review help-m01-s03-reset-kitchen.",
              "helpAnchor": "help-m01-s03-reset-kitchen",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Have everyone wash different random items immediately while leaving scraps and utensils spread across the bench until the end.",
              "correct": false,
              "feedback": "Random washing can make the area more confusing and leaves clutter unresolved. Clearing and sorting first gives the group a safer and more efficient process. Review help-m01-s03-reset-kitchen.",
              "helpAnchor": "help-m01-s03-reset-kitchen",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Clean the bench first, then pile all dirty equipment into the sink so the work surface looks finished.",
              "correct": false,
              "feedback": "A tidy-looking bench does not mean the kitchen is reset if dirty equipment and a cluttered sink remain. The whole workspace needs to be returned to a usable condition. Review help-m01-s03-reset-kitchen.",
              "helpAnchor": "help-m01-s03-reset-kitchen",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Focus only on washing the equipment because benches and sinks can be left for the next group to organise.",
              "correct": false,
              "feedback": "The practical is not fully complete until equipment, appropriate bench surfaces and the sink area have been left clean and organised for reuse. Review help-m01-s03-reset-kitchen.",
              "helpAnchor": "help-m01-s03-reset-kitchen",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m01-s03-q5",
          "label": "Formative learning evidence",
          "focus": "likely misconception",
          "theoryAnchor": "help-m01-s03-ordered-routine",
          "prompt": "During this situation — at the end of a practical, bowls contain food residue, benches need attention and special items need separate handling. Which response best avoids the misconception that “Everything can be placed together in the sink and washed the same way.”?",
          "hint": "Compare each option with the ideas under “Follow an orderly washing-up routine”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Everything can be placed together in the sink and washed the same way.",
              "correct": false,
              "feedback": "Equipment should be sorted safely, and sharp objects or electrical items need the separate teacher-approved handling method. Revisit help-m01-s03-ordered-routine.",
              "helpAnchor": "help-m01-s03-ordered-routine"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in washing up, cleaning and sanitising. Revisit help-m01-s03-ordered-routine.",
              "helpAnchor": "help-m01-s03-ordered-routine"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Only “Cleaning and sanitising do different jobs” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m01-s03-ordered-routine.",
              "helpAnchor": "help-m01-s03-ordered-routine"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Equipment should be sorted safely, and sharp objects or electrical items need the separate teacher-approved handling method.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to follow an orderly washing-up routine. Revisit help-m01-s03-ordered-routine to consolidate the reasoning.",
              "helpAnchor": "help-m01-s03-ordered-routine"
            }
          ]
        },
        {
          "id": "kc-m01-s03-q6",
          "label": "Formative learning evidence",
          "focus": "terminology in context",
          "theoryAnchor": "help-m01-s03-clean-v-sanitise",
          "prompt": "Which option uses the term “cleaning” accurately in the context of washing up, cleaning and sanitising?",
          "hint": "Compare each option with the ideas under “Cleaning and sanitising do different jobs”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "cleaning means the same as sanitising in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m01-s03-clean-v-sanitise.",
              "helpAnchor": "help-m01-s03-clean-v-sanitise"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "The meaning of cleaning changes to match whichever answer is most convenient.",
              "correct": false,
              "feedback": "The section gives cleaning a precise meaning that should be applied consistently. Revisit help-m01-s03-clean-v-sanitise.",
              "helpAnchor": "help-m01-s03-clean-v-sanitise"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "cleaning means removing food, grease, dirt and other unwanted material from equipment or surfaces.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to cleaning and sanitising do different jobs. Revisit help-m01-s03-clean-v-sanitise to consolidate the reasoning.",
              "helpAnchor": "help-m01-s03-clean-v-sanitise"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "cleaning is a general word for any food choice a person happens to like.",
              "correct": false,
              "feedback": "cleaning has a precise section meaning: Removing food, grease, dirt and other unwanted material from equipment or surfaces. Revisit help-m01-s03-clean-v-sanitise.",
              "helpAnchor": "help-m01-s03-clean-v-sanitise"
            }
          ]
        },
        {
          "id": "kc-m01-s03-q7",
          "label": "Formative learning evidence",
          "focus": "worked-example reasoning",
          "theoryAnchor": "help-m01-s03-reset-kitchen",
          "prompt": "At the end of a practical, bowls contain food residue, benches need attention and special items need separate handling. Which conclusion is best supported by the worked example rather than by a guess?",
          "hint": "Compare each option with the ideas under “Reset the kitchen for the next group”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in washing up, cleaning and sanitising. Revisit help-m01-s03-reset-kitchen.",
              "helpAnchor": "help-m01-s03-reset-kitchen"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "A successful kitchen reset uses the correct order: remove dirt first, sanitise after cleaning, handle special items appropriately and finish with a usable workspace.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to reset the kitchen for the next group. Revisit help-m01-s03-reset-kitchen to consolidate the reasoning.",
              "helpAnchor": "help-m01-s03-reset-kitchen"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Cleaning and sanitising mean the same thing.",
              "correct": false,
              "feedback": "Cleaning removes food and dirt, while sanitising is a separate step used after cleaning to reduce microorganisms. Revisit help-m01-s03-reset-kitchen.",
              "helpAnchor": "help-m01-s03-reset-kitchen"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m01-s03-reset-kitchen.",
              "helpAnchor": "help-m01-s03-reset-kitchen"
            }
          ]
        },
        {
          "id": "kc-m01-s03-q8",
          "label": "Formative learning evidence",
          "focus": "evidence selection",
          "theoryAnchor": "help-m01-s03-ordered-routine",
          "prompt": "At the end of a practical, bowls contain food residue, benches need attention and special items need separate handling. Which evidence plan would most directly support a careful explanation?",
          "hint": "Compare each option with the ideas under “Follow an orderly washing-up routine”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Ask students to analyse a cluttered end-of-practical workspace and justify the order in which they would reset it, including where cleaning, sanitising and separate handling are required.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to follow an orderly washing-up routine. Revisit help-m01-s03-ordered-routine to consolidate the reasoning.",
              "helpAnchor": "help-m01-s03-ordered-routine"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m01-s03-ordered-routine.",
              "helpAnchor": "help-m01-s03-ordered-routine"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Record only a final opinion and leave out the observations, source details or reasoning that support it.",
              "correct": false,
              "feedback": "A final opinion without supporting evidence or reasoning cannot show how the conclusion was reached. Revisit help-m01-s03-ordered-routine.",
              "helpAnchor": "help-m01-s03-ordered-routine"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m01-s03-ordered-routine.",
              "helpAnchor": "help-m01-s03-ordered-routine"
            }
          ]
        },
        {
          "id": "kc-m01-s03-q9",
          "label": "Formative learning evidence",
          "focus": "authentic practical/design decision",
          "theoryAnchor": "help-m01-s03-reset-kitchen",
          "prompt": "At the end of a practical, bowls contain food residue, benches need attention and special items need separate handling. Which learning action would provide the most useful practice before writing the section capstone?",
          "hint": "Compare each option with the ideas under “Reset the kitchen for the next group”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Skip the practice and copy a finished response without applying the idea to the situation.",
              "correct": false,
              "feedback": "The practice should require the student to apply the idea and rehearse their own reasoning before the capstone. Revisit help-m01-s03-reset-kitchen.",
              "helpAnchor": "help-m01-s03-reset-kitchen"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in washing up, cleaning and sanitising. Revisit help-m01-s03-reset-kitchen.",
              "helpAnchor": "help-m01-s03-reset-kitchen"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Change several important factors at once, then assume which change caused the result.",
              "correct": false,
              "feedback": "Changing several factors together makes it difficult to identify which change influenced the result. Revisit help-m01-s03-reset-kitchen.",
              "helpAnchor": "help-m01-s03-reset-kitchen"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Give students a mixed list of end-of-practical tasks and have them arrange the tasks into a safe, logical cleaning and kitchen-reset sequence.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to reset the kitchen for the next group. Revisit help-m01-s03-reset-kitchen to consolidate the reasoning.",
              "helpAnchor": "help-m01-s03-reset-kitchen"
            }
          ]
        },
        {
          "id": "kc-m01-s03-q10",
          "label": "Formative learning evidence",
          "focus": "careful judgement",
          "theoryAnchor": "help-m01-s03-ordered-routine",
          "prompt": "At the end of a practical, bowls contain food residue, benches need attention and special items need separate handling. Which final judgement is the most careful, balanced conclusion?",
          "hint": "Compare each option with the ideas under “Reset the kitchen for the next group”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m01-s03-reset-kitchen. Review help-m01-s03-ordered-routine.",
              "helpAnchor": "help-m01-s03-ordered-routine"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in washing up, cleaning and sanitising. Revisit help-m01-s03-reset-kitchen. Review help-m01-s03-ordered-routine.",
              "helpAnchor": "help-m01-s03-ordered-routine"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Sharp objects and electrical items require separate teacher-approved handling rather than being treated like ordinary washing up.",
              "correct": true,
              "feedback": "This conclusion uses the section evidence carefully and connects it to “Follow an orderly washing-up routine”. Revisit help-m01-s03-ordered-routine to consolidate the reasoning.",
              "helpAnchor": "help-m01-s03-ordered-routine"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Everything can be placed together in the sink and washed the same way.",
              "correct": false,
              "feedback": "Equipment should be sorted safely, and sharp objects or electrical items need the separate teacher-approved handling method. Revisit help-m01-s03-reset-kitchen. Review help-m01-s03-ordered-routine.",
              "helpAnchor": "help-m01-s03-ordered-routine"
            }
          ]
        }
      ],
      "label": "Formative learning evidence"
    },
    {
      "sectionId": "m02-s01",
      "knowledgeCheckId": "kc-m02-s01",
      "title": "Reading recipes and cooking terms — knowledge check",
      "theoryAnchors": [
        "help-m02-s01-recipe-map",
        "help-m02-s01-action-verbs",
        "help-m02-s01-sequence-first"
      ],
      "sourceIds": [
        "recipe-booklet",
        "course-program"
      ],
      "hintPolicy": "answer-neutral",
      "feedbackTiming": "after check only",
      "questions": [
        {
          "id": "kc-m02-s01-q1",
          "focus": "essential idea",
          "theoryAnchor": "help-m02-s01-sequence-first",
          "prompt": "A student has all the ingredients for a practical and wants to begin immediately. What is the most useful action before touching the ingredients?",
          "hint": "Think about which action helps the student anticipate the whole practical rather than only the first task.",
          "options": [
            {
              "id": "a",
              "text": "Read the entire recipe, identify unfamiliar terms, and organise the ingredients and equipment needed.",
              "correct": true,
              "feedback": "This builds a plan for the whole practical before work begins, including sequence, unfamiliar terms and preparation. Review help-m02-s01-sequence-first.",
              "helpAnchor": "help-m02-s01-sequence-first",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Read only the first method step and collect equipment when each new step appears.",
              "correct": false,
              "feedback": "This can cause interruptions or rushing because later equipment and preparation needs have not been anticipated. Review help-m02-s01-sequence-first.",
              "helpAnchor": "help-m02-s01-sequence-first",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Measure every ingredient first without reading the method.",
              "correct": false,
              "feedback": "Measuring alone does not reveal the order of work, unfamiliar techniques or all equipment clues in the method. Review help-m02-s01-sequence-first.",
              "helpAnchor": "help-m02-s01-sequence-first",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Choose the cooking temperature first because it controls every other part of the recipe.",
              "correct": false,
              "feedback": "Temperature can be important when supplied, but it is only one part of the recipe and does not replace reading the full sequence. Review help-m02-s01-sequence-first.",
              "helpAnchor": "help-m02-s01-sequence-first",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m02-s01-q2",
          "focus": "concept connection",
          "theoryAnchor": "help-m02-s01-recipe-map",
          "prompt": "A method says to whisk a mixture, then bake it. What useful preparation can a student infer before starting?",
          "hint": "Connect the action words in the method with what must be ready in the workspace.",
          "options": [
            {
              "id": "a",
              "text": "Only the ingredient amounts matter because equipment cannot be predicted from method words.",
              "correct": false,
              "feedback": "Method words can provide equipment clues, so ignoring them removes useful preparation information. Review help-m02-s01-recipe-map.",
              "helpAnchor": "help-m02-s01-recipe-map",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Suitable whisking equipment and baking equipment should be identified and made ready before the steps begin.",
              "correct": true,
              "feedback": "The verbs give clues about the tools and equipment required, allowing the workspace to be organised before cooking. Review help-m02-s01-recipe-map.",
              "helpAnchor": "help-m02-s01-recipe-map",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "The student should decide whether to whisk or bake based on which equipment is easiest to find.",
              "correct": false,
              "feedback": "The method sequence determines the required actions; equipment should be organised to support that sequence rather than change it for convenience. Review help-m02-s01-recipe-map.",
              "helpAnchor": "help-m02-s01-recipe-map",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "The student needs to prepare only the baking equipment because whisking is an ingredient rather than a technique.",
              "correct": false,
              "feedback": "Whisking is a technique described by an action verb and may require suitable equipment before baking occurs. Review help-m02-s01-recipe-map.",
              "helpAnchor": "help-m02-s01-recipe-map",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m02-s01-q3",
          "focus": "likely misconception",
          "theoryAnchor": "help-m02-s01-action-verbs",
          "prompt": "A student sees the instruction fold the mixture but decides to whisk vigorously because both actions combine ingredients. What is the best reason to reconsider that decision?",
          "hint": "Consider whether two actions that both combine ingredients necessarily affect a mixture in the same way.",
          "options": [
            {
              "id": "a",
              "text": "Any mixing action is acceptable as long as the ingredients eventually look combined.",
              "correct": false,
              "feedback": "Different cooking verbs describe different techniques, so reaching a combined appearance does not mean the intended action has been followed. Review help-m02-s01-action-verbs.",
              "helpAnchor": "help-m02-s01-action-verbs",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Folding and whisking describe different techniques, so replacing one with the other can change the result.",
              "correct": true,
              "feedback": "The action verb communicates how the task should be performed, and changing the technique can affect the outcome. Review help-m02-s01-action-verbs.",
              "helpAnchor": "help-m02-s01-action-verbs",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Whisking should only be used after baking, so it cannot appear during preparation.",
              "correct": false,
              "feedback": "Whisking can be a preparation technique before cooking; the issue is that it is different from folding, not that it belongs after baking. Review help-m02-s01-action-verbs.",
              "helpAnchor": "help-m02-s01-action-verbs",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Folding is a heating method, so whisking cannot replace it because no heat is being used.",
              "correct": false,
              "feedback": "Folding is a gentle combining technique rather than a heating method. Review help-m02-s01-action-verbs.",
              "helpAnchor": "help-m02-s01-action-verbs",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m02-s01-q4",
          "focus": "authentic practical/design decision",
          "theoryAnchor": "help-m02-s01-sequence-first",
          "prompt": "During planning, a student notices that a later recipe step requires diced ingredients to be added immediately after another task. What is the most organised decision?",
          "hint": "Think about how reading ahead can reduce delays at a point where the method needs to keep moving.",
          "options": [
            {
              "id": "a",
              "text": "Wait until that later step begins, then stop and work out what dicing means.",
              "correct": false,
              "feedback": "Leaving an unfamiliar or time-sensitive task until the moment it is needed can interrupt the sequence and create rushing. Review help-m02-s01-sequence-first.",
              "helpAnchor": "help-m02-s01-sequence-first",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Skip the diced ingredient if preparing it would interrupt the method.",
              "correct": false,
              "feedback": "Skipping a required ingredient changes the recipe rather than solving the organisation problem. Reading ahead should help prepare for the step. Review help-m02-s01-sequence-first.",
              "helpAnchor": "help-m02-s01-sequence-first",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Identify the dicing technique and organise the ingredient and suitable equipment before beginning, ready for the required stage.",
              "correct": true,
              "feedback": "Reading ahead allows the student to resolve the technique and prepare what is needed so the method can proceed logically. Review help-m02-s01-sequence-first.",
              "helpAnchor": "help-m02-s01-sequence-first",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Move the dicing step to the end because preparation steps can be completed in any order.",
              "correct": false,
              "feedback": "Recipe steps are arranged in a purposeful sequence, so moving a required preparation step can affect later stages. Review help-m02-s01-sequence-first.",
              "helpAnchor": "help-m02-s01-sequence-first",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m02-s01-q5",
          "label": "Formative learning evidence",
          "focus": "likely misconception",
          "theoryAnchor": "help-m02-s01-action-verbs",
          "prompt": "During this situation — a team is about to begin a recipe but has not read the full method or identified its action verbs. Which response best avoids the misconception that “Cooking verbs are just different words for mixing or heating.”?",
          "hint": "Compare each option with the ideas under “Cooking verbs tell you how to act”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Words such as whisk, fold, knead, dice, simmer and bake describe different techniques, and using the wrong action can change the result.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to cooking verbs tell you how to act. Revisit help-m02-s01-action-verbs to consolidate the reasoning.",
              "helpAnchor": "help-m02-s01-action-verbs"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Cooking verbs are just different words for mixing or heating.",
              "correct": false,
              "feedback": "Words such as whisk, fold, knead, dice, simmer and bake describe different techniques, and using the wrong action can change the result. Revisit help-m02-s01-action-verbs.",
              "helpAnchor": "help-m02-s01-action-verbs"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in reading recipes and cooking terms. Revisit help-m02-s01-action-verbs.",
              "helpAnchor": "help-m02-s01-action-verbs"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Only “Use the recipe as a map” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m02-s01-action-verbs.",
              "helpAnchor": "help-m02-s01-action-verbs"
            }
          ]
        },
        {
          "id": "kc-m02-s01-q6",
          "label": "Formative learning evidence",
          "focus": "terminology in context",
          "theoryAnchor": "help-m02-s01-recipe-map",
          "prompt": "Which option uses the term “yield” accurately in the context of reading recipes and cooking terms?",
          "hint": "Compare each option with the ideas under “Use the recipe as a map”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "yield is a general word for any food choice a person happens to like.",
              "correct": false,
              "feedback": "yield has a precise section meaning: The amount of food a recipe is expected to produce. Revisit help-m02-s01-recipe-map.",
              "helpAnchor": "help-m02-s01-recipe-map"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "yield means the same as method in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m02-s01-recipe-map.",
              "helpAnchor": "help-m02-s01-recipe-map"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "The meaning of yield changes to match whichever answer is most convenient.",
              "correct": false,
              "feedback": "The section gives yield a precise meaning that should be applied consistently. Revisit help-m02-s01-recipe-map.",
              "helpAnchor": "help-m02-s01-recipe-map"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "yield means the amount of food a recipe is expected to produce.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to use the recipe as a map. Revisit help-m02-s01-recipe-map to consolidate the reasoning.",
              "helpAnchor": "help-m02-s01-recipe-map"
            }
          ]
        },
        {
          "id": "kc-m02-s01-q7",
          "label": "Formative learning evidence",
          "focus": "worked-example reasoning",
          "theoryAnchor": "help-m02-s01-sequence-first",
          "prompt": "A team is about to begin a recipe but has not read the full method or identified its action verbs. Which conclusion is best supported by the worked example rather than by a guess?",
          "hint": "Compare each option with the ideas under “Read the sequence before you start”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m02-s01-sequence-first.",
              "helpAnchor": "help-m02-s01-sequence-first"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in reading recipes and cooking terms. Revisit help-m02-s01-sequence-first.",
              "helpAnchor": "help-m02-s01-sequence-first"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Reading and organising first turns the recipe from a list of instructions into a clear plan for the practical.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to read the sequence before you start. Revisit help-m02-s01-sequence-first to consolidate the reasoning.",
              "helpAnchor": "help-m02-s01-sequence-first"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "I only need to read one recipe step at a time.",
              "correct": false,
              "feedback": "Reading the whole recipe first helps you understand the sequence, prepare equipment and ingredients, and identify unfamiliar terms before they cause problems. Revisit help-m02-s01-sequence-first.",
              "helpAnchor": "help-m02-s01-sequence-first"
            }
          ]
        },
        {
          "id": "kc-m02-s01-q8",
          "label": "Formative learning evidence",
          "focus": "evidence selection",
          "theoryAnchor": "help-m02-s01-action-verbs",
          "prompt": "A team is about to begin a recipe but has not read the full method or identified its action verbs. Which evidence plan would most directly support a careful explanation?",
          "hint": "Compare each option with the ideas under “Cooking verbs tell you how to act”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m02-s01-action-verbs.",
              "helpAnchor": "help-m02-s01-action-verbs"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Ask students to explain how misreading a cooking verb or skipping an early recipe step could affect the organisation and final result of a practical.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to cooking verbs tell you how to act. Revisit help-m02-s01-action-verbs to consolidate the reasoning.",
              "helpAnchor": "help-m02-s01-action-verbs"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m02-s01-action-verbs.",
              "helpAnchor": "help-m02-s01-action-verbs"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Record only a final opinion and leave out the observations, source details or reasoning that support it.",
              "correct": false,
              "feedback": "A final opinion without supporting evidence or reasoning cannot show how the conclusion was reached. Revisit help-m02-s01-action-verbs.",
              "helpAnchor": "help-m02-s01-action-verbs"
            }
          ]
        },
        {
          "id": "kc-m02-s01-q9",
          "label": "Formative learning evidence",
          "focus": "authentic practical/design decision",
          "theoryAnchor": "help-m02-s01-sequence-first",
          "prompt": "A team is about to begin a recipe but has not read the full method or identified its action verbs. Which learning action would provide the most useful practice before writing the section capstone?",
          "hint": "Compare each option with the ideas under “Read the sequence before you start”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Give students a short recipe and ask them to map its structure, identify action verbs, sequence the method and list the preparation they would complete before touching ingredients.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to read the sequence before you start. Revisit help-m02-s01-sequence-first to consolidate the reasoning.",
              "helpAnchor": "help-m02-s01-sequence-first"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Skip the practice and copy a finished response without applying the idea to the situation.",
              "correct": false,
              "feedback": "The practice should require the student to apply the idea and rehearse their own reasoning before the capstone. Revisit help-m02-s01-sequence-first.",
              "helpAnchor": "help-m02-s01-sequence-first"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in reading recipes and cooking terms. Revisit help-m02-s01-sequence-first.",
              "helpAnchor": "help-m02-s01-sequence-first"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Change several important factors at once, then assume which change caused the result.",
              "correct": false,
              "feedback": "Changing several factors together makes it difficult to identify which change influenced the result. Revisit help-m02-s01-sequence-first.",
              "helpAnchor": "help-m02-s01-sequence-first"
            }
          ]
        },
        {
          "id": "kc-m02-s01-q10",
          "label": "Formative learning evidence",
          "focus": "careful judgement",
          "theoryAnchor": "help-m02-s01-action-verbs",
          "prompt": "A team is about to begin a recipe but has not read the full method or identified its action verbs. Which final judgement is the most careful, balanced conclusion?",
          "hint": "Compare each option with the ideas under “Read the sequence before you start”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Cooking verbs are just different words for mixing or heating.",
              "correct": false,
              "feedback": "Words such as whisk, fold, knead, dice, simmer and bake describe different techniques, and using the wrong action can change the result. Revisit help-m02-s01-sequence-first. Review help-m02-s01-action-verbs.",
              "helpAnchor": "help-m02-s01-action-verbs"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m02-s01-sequence-first. Review help-m02-s01-action-verbs.",
              "helpAnchor": "help-m02-s01-action-verbs"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in reading recipes and cooking terms. Revisit help-m02-s01-sequence-first. Review help-m02-s01-action-verbs.",
              "helpAnchor": "help-m02-s01-action-verbs"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Reading the whole recipe first helps you understand the sequence and identify anything unfamiliar before starting.",
              "correct": true,
              "feedback": "This conclusion uses the section evidence carefully and connects it to “Cooking verbs tell you how to act”. Revisit help-m02-s01-action-verbs to consolidate the reasoning.",
              "helpAnchor": "help-m02-s01-action-verbs"
            }
          ]
        }
      ],
      "label": "Formative learning evidence"
    },
    {
      "sectionId": "m02-s02",
      "knowledgeCheckId": "kc-m02-s02",
      "title": "Selecting equipment and techniques — knowledge check",
      "theoryAnchors": [
        "help-m02-s02-task-to-tool",
        "help-m02-s02-technique-match",
        "help-m02-s02-safe-choice"
      ],
      "sourceIds": [
        "recipe-booklet",
        "course-program"
      ],
      "hintPolicy": "answer-neutral",
      "feedbackTiming": "after check only",
      "questions": [
        {
          "id": "kc-m02-s02-q1",
          "focus": "essential idea",
          "theoryAnchor": "help-m02-s02-task-to-tool",
          "prompt": "A student needs to prepare a small quantity of ingredients for a muffin recipe. Which approach is most likely to lead to an efficient equipment choice?",
          "hint": "Consider what information about the job should guide the choice before equipment is selected.",
          "options": [
            {
              "id": "a",
              "text": "Identify the task, quantity and required action, then choose equipment that suits those needs.",
              "correct": true,
              "feedback": "This uses the task, amount of food and required action to guide equipment selection rather than choosing equipment first. Review help-m02-s02-task-to-tool.",
              "helpAnchor": "help-m02-s02-task-to-tool",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Choose the largest available equipment because it can handle any quantity.",
              "correct": false,
              "feedback": "Oversized equipment can make a small task awkward, so size should match the quantity and job. Review help-m02-s02-task-to-tool.",
              "helpAnchor": "help-m02-s02-task-to-tool",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Choose the most complicated equipment because it is likely to complete the task more accurately.",
              "correct": false,
              "feedback": "Complexity does not guarantee suitability or accuracy. The equipment should match the food, quantity and action required. Review help-m02-s02-task-to-tool.",
              "helpAnchor": "help-m02-s02-task-to-tool",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Choose whichever tool is closest and adjust the recipe method to suit it.",
              "correct": false,
              "feedback": "Changing the method to suit a convenient tool reverses the decision process. The recipe task should guide equipment selection. Review help-m02-s02-task-to-tool.",
              "helpAnchor": "help-m02-s02-task-to-tool",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m02-s02-q2",
          "focus": "concept connection",
          "theoryAnchor": "help-m02-s02-safe-choice",
          "prompt": "A recipe lists flour by mass and a small amount of liquid by volume. Why would a student choose different measuring equipment for these two ingredients?",
          "hint": "Think about what each measurement is describing and how the equipment needs to match it.",
          "options": [
            {
              "id": "a",
              "text": "Different ingredients always require different tools, even when they use the same type of measurement.",
              "correct": false,
              "feedback": "The important link is the type of measurement required, not simply whether the ingredients are different. Review help-m02-s02-safe-choice.",
              "helpAnchor": "help-m02-s02-safe-choice",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Scales are suited to measuring mass, while measuring spoons can suit small volumes, so each tool matches the measurement required.",
              "correct": true,
              "feedback": "Matching equipment to mass or volume supports accurate measurement and helps the student follow the recipe. Review help-m02-s02-safe-choice.",
              "helpAnchor": "help-m02-s02-safe-choice",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Scales should be used for the larger quantity and spoons for the smaller quantity, regardless of whether the recipe gives mass or volume.",
              "correct": false,
              "feedback": "Quantity alone does not determine the measuring tool. The tool must also match whether the recipe specifies mass or volume. Review help-m02-s02-safe-choice.",
              "helpAnchor": "help-m02-s02-safe-choice",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Using two measuring tools is unnecessary because estimating one ingredient saves time without affecting accuracy.",
              "correct": false,
              "feedback": "Estimating can reduce accuracy when the recipe provides a specific measurement. Suitable measuring equipment helps follow the stated amount. Review help-m02-s02-safe-choice.",
              "helpAnchor": "help-m02-s02-safe-choice",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m02-s02-q3",
          "focus": "likely misconception",
          "theoryAnchor": "help-m02-s02-technique-match",
          "prompt": "A student selects a spatula for a recipe step that requires folding, but then stirs the mixture vigorously. What is the main problem with this choice?",
          "hint": "Separate the choice of equipment from the way that equipment is actually used.",
          "options": [
            {
              "id": "a",
              "text": "There is no problem because selecting the correct tool guarantees the correct result.",
              "correct": false,
              "feedback": "A suitable tool does not guarantee success if the action used with it does not match the required technique. Review help-m02-s02-technique-match.",
              "helpAnchor": "help-m02-s02-technique-match",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "The spatula should always be replaced with a whisk whenever ingredients need to be combined.",
              "correct": false,
              "feedback": "Different combining methods require different actions. A whisk is not automatically more suitable than a spatula. Review help-m02-s02-technique-match.",
              "helpAnchor": "help-m02-s02-technique-match",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "The equipment may be suitable, but the vigorous stirring does not match the gentle folding technique required by the method.",
              "correct": true,
              "feedback": "Equipment and technique need to work together. Using the right tool with the wrong action can affect the intended result. Review help-m02-s02-technique-match.",
              "helpAnchor": "help-m02-s02-technique-match",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "The problem is only the speed of the task, because folding and vigorous stirring use the same technique.",
              "correct": false,
              "feedback": "Folding and vigorous stirring are different actions, not simply different speeds of the same technique. Review help-m02-s02-technique-match.",
              "helpAnchor": "help-m02-s02-technique-match",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m02-s02-q4",
          "focus": "authentic practical/design decision",
          "theoryAnchor": "help-m02-s02-safe-choice",
          "prompt": "A student is setting up to prepare an ingredient that must be cut before it is added to muffin batter. The student is unsure which equipment and technique are appropriate. What is the best decision?",
          "hint": "Consider both control of the task and what to do when the correct technique is uncertain.",
          "options": [
            {
              "id": "a",
              "text": "Use any sharp kitchen tool available and work out a technique while cutting.",
              "correct": false,
              "feedback": "Improvising with poorly matched equipment or an uncertain technique reduces control. Review help-m02-s02-safe-choice.",
              "helpAnchor": "help-m02-s02-safe-choice",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Use a suitable board and knife and follow the demonstrated technique or teacher direction before proceeding.",
              "correct": true,
              "feedback": "This matches the preparation task with appropriate equipment and uses demonstrated guidance to support safe, controlled technique. Review help-m02-s02-safe-choice.",
              "helpAnchor": "help-m02-s02-safe-choice",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Choose the largest knife available because larger equipment is generally easier to control.",
              "correct": false,
              "feedback": "Equipment size should suit the task and food rather than being selected on the assumption that bigger is better. Review help-m02-s02-safe-choice.",
              "helpAnchor": "help-m02-s02-safe-choice",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Skip preparing the ingredient so there is no need to make an equipment decision.",
              "correct": false,
              "feedback": "Skipping a required preparation step changes the recipe instead of solving the equipment and technique decision. Review help-m02-s02-safe-choice.",
              "helpAnchor": "help-m02-s02-safe-choice",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m02-s02-q5",
          "label": "Formative learning evidence",
          "focus": "likely misconception",
          "theoryAnchor": "help-m02-s02-technique-match",
          "prompt": "During this situation — a muffin team has chosen several tools without matching them to quantity, accuracy or technique. Which response best avoids the misconception that “The biggest or most complicated piece of equipment is usually the best choice.”?",
          "hint": "Compare each option with the ideas under “Match the technique to the tool”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "The biggest or most complicated piece of equipment is usually the best choice.",
              "correct": false,
              "feedback": "The best choice is equipment that suits the task, quantity, required accuracy and technique. Revisit help-m02-s02-technique-match.",
              "helpAnchor": "help-m02-s02-technique-match"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in selecting equipment and techniques. Revisit help-m02-s02-technique-match.",
              "helpAnchor": "help-m02-s02-technique-match"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Only “Match the tool to the task” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m02-s02-technique-match.",
              "helpAnchor": "help-m02-s02-technique-match"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "The best choice is equipment that suits the task, quantity, required accuracy and technique.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to match the technique to the tool. Revisit help-m02-s02-technique-match to consolidate the reasoning.",
              "helpAnchor": "help-m02-s02-technique-match"
            }
          ]
        },
        {
          "id": "kc-m02-s02-q6",
          "label": "Formative learning evidence",
          "focus": "terminology in context",
          "theoryAnchor": "help-m02-s02-task-to-tool",
          "prompt": "Which option uses the term “equipment” accurately in the context of selecting equipment and techniques?",
          "hint": "Compare each option with the ideas under “Match the tool to the task”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "equipment means the same as technique in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m02-s02-task-to-tool.",
              "helpAnchor": "help-m02-s02-task-to-tool"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "The meaning of equipment changes to match whichever answer is most convenient.",
              "correct": false,
              "feedback": "The section gives equipment a precise meaning that should be applied consistently. Revisit help-m02-s02-task-to-tool.",
              "helpAnchor": "help-m02-s02-task-to-tool"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "equipment means the tools and items selected to complete food-preparation and cooking tasks.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to match the tool to the task. Revisit help-m02-s02-task-to-tool to consolidate the reasoning.",
              "helpAnchor": "help-m02-s02-task-to-tool"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "equipment is a general word for any food choice a person happens to like.",
              "correct": false,
              "feedback": "equipment has a precise section meaning: The tools and items selected to complete food-preparation and cooking tasks. Revisit help-m02-s02-task-to-tool.",
              "helpAnchor": "help-m02-s02-task-to-tool"
            }
          ]
        },
        {
          "id": "kc-m02-s02-q7",
          "label": "Formative learning evidence",
          "focus": "worked-example reasoning",
          "theoryAnchor": "help-m02-s02-safe-choice",
          "prompt": "A muffin team has chosen several tools without matching them to quantity, accuracy or technique. Which conclusion is best supported by the worked example rather than by a guess?",
          "hint": "Compare each option with the ideas under “Consider accuracy and safe technique”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in selecting equipment and techniques. Revisit help-m02-s02-safe-choice.",
              "helpAnchor": "help-m02-s02-safe-choice"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Good equipment selection starts with the task: identify what must happen, consider quantity and accuracy, then match both the tool and technique to the job.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to consider accuracy and safe technique. Revisit help-m02-s02-safe-choice to consolidate the reasoning.",
              "helpAnchor": "help-m02-s02-safe-choice"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "If I choose the correct tool, the technique does not matter.",
              "correct": false,
              "feedback": "Equipment and technique work together. A suitable tool used with the wrong action may not produce the intended result. Revisit help-m02-s02-safe-choice.",
              "helpAnchor": "help-m02-s02-safe-choice"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m02-s02-safe-choice.",
              "helpAnchor": "help-m02-s02-safe-choice"
            }
          ]
        },
        {
          "id": "kc-m02-s02-q8",
          "label": "Formative learning evidence",
          "focus": "evidence selection",
          "theoryAnchor": "help-m02-s02-technique-match",
          "prompt": "A muffin team has chosen several tools without matching them to quantity, accuracy or technique. Which evidence plan would most directly support a careful explanation?",
          "hint": "Compare each option with the ideas under “Match the technique to the tool”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Ask students to analyse an inefficient muffin-preparation setup and recommend better equipment and technique choices, justifying each change using task, quantity, accuracy and safe technique.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to match the technique to the tool. Revisit help-m02-s02-technique-match to consolidate the reasoning.",
              "helpAnchor": "help-m02-s02-technique-match"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m02-s02-technique-match.",
              "helpAnchor": "help-m02-s02-technique-match"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Record only a final opinion and leave out the observations, source details or reasoning that support it.",
              "correct": false,
              "feedback": "A final opinion without supporting evidence or reasoning cannot show how the conclusion was reached. Revisit help-m02-s02-technique-match.",
              "helpAnchor": "help-m02-s02-technique-match"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m02-s02-technique-match.",
              "helpAnchor": "help-m02-s02-technique-match"
            }
          ]
        },
        {
          "id": "kc-m02-s02-q9",
          "label": "Formative learning evidence",
          "focus": "authentic practical/design decision",
          "theoryAnchor": "help-m02-s02-safe-choice",
          "prompt": "A muffin team has chosen several tools without matching them to quantity, accuracy or technique. Which learning action would provide the most useful practice before writing the section capstone?",
          "hint": "Compare each option with the ideas under “Consider accuracy and safe technique”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Skip the practice and copy a finished response without applying the idea to the situation.",
              "correct": false,
              "feedback": "The practice should require the student to apply the idea and rehearse their own reasoning before the capstone. Revisit help-m02-s02-safe-choice.",
              "helpAnchor": "help-m02-s02-safe-choice"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in selecting equipment and techniques. Revisit help-m02-s02-safe-choice.",
              "helpAnchor": "help-m02-s02-safe-choice"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Change several important factors at once, then assume which change caused the result.",
              "correct": false,
              "feedback": "Changing several factors together makes it difficult to identify which change influenced the result. Revisit help-m02-s02-safe-choice.",
              "helpAnchor": "help-m02-s02-safe-choice"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Give students several recipe actions and quantities and ask them to select suitable equipment, name the matching technique and justify each choice.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to consider accuracy and safe technique. Revisit help-m02-s02-safe-choice to consolidate the reasoning.",
              "helpAnchor": "help-m02-s02-safe-choice"
            }
          ]
        },
        {
          "id": "kc-m02-s02-q10",
          "label": "Formative learning evidence",
          "focus": "careful judgement",
          "theoryAnchor": "help-m02-s02-technique-match",
          "prompt": "A muffin team has chosen several tools without matching them to quantity, accuracy or technique. Which final judgement is the most careful, balanced conclusion?",
          "hint": "Compare each option with the ideas under “Consider accuracy and safe technique”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m02-s02-safe-choice. Review help-m02-s02-technique-match.",
              "helpAnchor": "help-m02-s02-technique-match"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in selecting equipment and techniques. Revisit help-m02-s02-safe-choice. Review help-m02-s02-technique-match.",
              "helpAnchor": "help-m02-s02-technique-match"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "A suitable tool still needs the correct technique to produce the intended result.",
              "correct": true,
              "feedback": "This conclusion uses the section evidence carefully and connects it to “Match the technique to the tool”. Revisit help-m02-s02-technique-match to consolidate the reasoning.",
              "helpAnchor": "help-m02-s02-technique-match"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "The biggest or most complicated piece of equipment is usually the best choice.",
              "correct": false,
              "feedback": "The best choice is equipment that suits the task, quantity, required accuracy and technique. Revisit help-m02-s02-safe-choice. Review help-m02-s02-technique-match.",
              "helpAnchor": "help-m02-s02-technique-match"
            }
          ]
        }
      ],
      "label": "Formative learning evidence"
    },
    {
      "sectionId": "m02-s03",
      "knowledgeCheckId": "kc-m02-s03",
      "title": "Measuring, converting and scaling — knowledge check",
      "theoryAnchors": [
        "help-m02-s03-measure-accurately",
        "help-m02-s03-metric-links",
        "help-m02-s03-scaling-factor"
      ],
      "sourceIds": [
        "food-knowledge",
        "recipe-booklet"
      ],
      "hintPolicy": "answer-neutral",
      "feedbackTiming": "after check only",
      "questions": [
        {
          "id": "kc-m02-s03-q1",
          "focus": "essential idea",
          "theoryAnchor": "help-m02-s03-scaling-factor",
          "prompt": "A recipe makes 4 serves, but a group needs 6 serves. What is the most reliable way to keep the ingredient proportions consistent?",
          "hint": "Think about a method that changes every ingredient in the same proportional way.",
          "options": [
            {
              "id": "a",
              "text": "Calculate 6 divided by 4 and multiply every ingredient amount by the resulting factor.",
              "correct": true,
              "feedback": "This produces a scaling factor of 1.5 and applies the same proportional change to every ingredient. Review help-m02-s03-scaling-factor.",
              "helpAnchor": "help-m02-s03-scaling-factor",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Add the same extra amount to every ingredient because two extra serves are needed.",
              "correct": false,
              "feedback": "Ingredients begin with different quantities, so adding one fixed amount to each would change their proportions. Review help-m02-s03-scaling-factor.",
              "helpAnchor": "help-m02-s03-scaling-factor",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Increase only the largest ingredient because it contributes most of the total quantity.",
              "correct": false,
              "feedback": "Scaling only one ingredient changes its relationship with the others and does not preserve the original recipe proportions. Review help-m02-s03-scaling-factor.",
              "helpAnchor": "help-m02-s03-scaling-factor",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Multiply each ingredient by a different number depending on its original amount.",
              "correct": false,
              "feedback": "Using different factors changes the balance between ingredients. One scaling factor should be applied throughout. Review help-m02-s03-scaling-factor.",
              "helpAnchor": "help-m02-s03-scaling-factor",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m02-s03-q2",
          "focus": "concept connection",
          "theoryAnchor": "help-m02-s03-metric-links",
          "prompt": "A student converts 1.2 kg of an ingredient to grams before comparing it with another amount listed as 900 g. Why is converting the units useful?",
          "hint": "Consider what must be consistent before two measurements can be compared accurately.",
          "options": [
            {
              "id": "a",
              "text": "It places both masses in the same unit so their numerical amounts can be compared meaningfully.",
              "correct": true,
              "feedback": "Keeping units consistent makes the comparison clear because kilograms and grams describe mass using different-sized units. Review help-m02-s03-metric-links.",
              "helpAnchor": "help-m02-s03-metric-links",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "It changes the ingredient from a mass measurement into a volume measurement.",
              "correct": false,
              "feedback": "Converting kilograms to grams keeps the measurement as mass; it only changes the metric unit used to express it. Review help-m02-s03-metric-links.",
              "helpAnchor": "help-m02-s03-metric-links",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "It makes the ingredient lighter because grams are smaller units than kilograms.",
              "correct": false,
              "feedback": "Changing units does not change the actual mass of the ingredient; it changes only how that same mass is expressed. Review help-m02-s03-metric-links.",
              "helpAnchor": "help-m02-s03-metric-links",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "It removes the need to check units because the number becomes more important after conversion.",
              "correct": false,
              "feedback": "The unit remains essential because it gives the number meaning, even after a conversion has been completed. Review help-m02-s03-metric-links.",
              "helpAnchor": "help-m02-s03-metric-links",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m02-s03-q3",
          "focus": "likely misconception",
          "theoryAnchor": "help-m02-s03-metric-links",
          "prompt": "A student records an ingredient as 1 g even though the recipe requires 1 kg, and argues that the number is still correct. What is the best explanation of the error?",
          "hint": "Think about how much information is carried by the unit as well as by the number.",
          "options": [
            {
              "id": "a",
              "text": "There is no meaningful error because both measurements use the number 1.",
              "correct": false,
              "feedback": "The same number can represent very different amounts when it is attached to different units. Review help-m02-s03-metric-links.",
              "helpAnchor": "help-m02-s03-metric-links",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "The error matters because 1 kg equals 1000 g, so changing the unit without converting changes the intended mass.",
              "correct": true,
              "feedback": "The unit determines the size of the measurement, so 1 g and 1 kg are not interchangeable even though both use the number 1. Review help-m02-s03-metric-links.",
              "helpAnchor": "help-m02-s03-metric-links",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "The error matters only if the ingredient is a liquid because metric units apply mainly to volume.",
              "correct": false,
              "feedback": "Metric units are also used for mass, including milligrams, grams and kilograms. Review help-m02-s03-metric-links.",
              "helpAnchor": "help-m02-s03-metric-links",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "The number should stay as 1 because changing units never requires changing a numerical value.",
              "correct": false,
              "feedback": "Equivalent metric measurements often use different numerical values, such as 1 kg and 1000 g. Review help-m02-s03-metric-links.",
              "helpAnchor": "help-m02-s03-metric-links",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m02-s03-q4",
          "focus": "authentic practical/design decision",
          "theoryAnchor": "help-m02-s03-measure-accurately",
          "prompt": "A student needs to measure an ingredient accurately on digital scales, then measure a marked volume of liquid. Which setup best supports accurate results?",
          "hint": "Consider what could cause a reading to start incorrectly or appear different because of viewing position.",
          "options": [
            {
              "id": "a",
              "text": "Zero the digital scales before measuring and read the marked volume equipment at eye level.",
              "correct": true,
              "feedback": "Zeroing gives the mass measurement a correct starting point, while eye-level reading reduces errors caused by viewing the scale from an angle. Review help-m02-s03-measure-accurately.",
              "helpAnchor": "help-m02-s03-measure-accurately",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Leave the previous reading on the scales and read the liquid measurement from above to save time.",
              "correct": false,
              "feedback": "A non-zero starting point can affect the mass reading, and viewing marked equipment from an angle can reduce accuracy. Review help-m02-s03-measure-accurately.",
              "helpAnchor": "help-m02-s03-measure-accurately",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Estimate both amounts visually because careful measuring is only necessary when a recipe is being scaled.",
              "correct": false,
              "feedback": "Accurate measuring is important whenever a recipe provides specified amounts and units, not only during scaling. Review help-m02-s03-measure-accurately.",
              "helpAnchor": "help-m02-s03-measure-accurately",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Use the scales for both measurements because one accurate tool can measure mass and volume in the same way.",
              "correct": false,
              "feedback": "Mass and volume are different types of measurement, so the equipment needs to match what the recipe is asking you to measure. Review help-m02-s03-measure-accurately.",
              "helpAnchor": "help-m02-s03-measure-accurately",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m02-s03-q5",
          "label": "Formative learning evidence",
          "focus": "likely misconception",
          "theoryAnchor": "help-m02-s03-metric-links",
          "prompt": "During this situation — a four-serve recipe must be adjusted to six serves while keeping every ingredient in proportion. Which response best avoids the misconception that “The unit does not matter as long as the number is correct.”?",
          "hint": "Compare each option with the ideas under “Understand the metric links”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in measuring, converting and scaling. Revisit help-m02-s03-metric-links.",
              "helpAnchor": "help-m02-s03-metric-links"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Only “Measure accurately and consistently” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m02-s03-metric-links.",
              "helpAnchor": "help-m02-s03-metric-links"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "The unit gives the number its meaning. For example, 1 gram and 1 kilogram represent very different masses.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to understand the metric links. Revisit help-m02-s03-metric-links to consolidate the reasoning.",
              "helpAnchor": "help-m02-s03-metric-links"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "The unit does not matter as long as the number is correct.",
              "correct": false,
              "feedback": "The unit gives the number its meaning. For example, 1 gram and 1 kilogram represent very different masses. Revisit help-m02-s03-metric-links.",
              "helpAnchor": "help-m02-s03-metric-links"
            }
          ]
        },
        {
          "id": "kc-m02-s03-q6",
          "label": "Formative learning evidence",
          "focus": "terminology in context",
          "theoryAnchor": "help-m02-s03-measure-accurately",
          "prompt": "Which option uses the term “mass” accurately in the context of measuring, converting and scaling?",
          "hint": "Compare each option with the ideas under “Measure accurately and consistently”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "The meaning of mass changes to match whichever answer is most convenient.",
              "correct": false,
              "feedback": "The section gives mass a precise meaning that should be applied consistently. Revisit help-m02-s03-measure-accurately.",
              "helpAnchor": "help-m02-s03-measure-accurately"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "mass means the amount of matter in an ingredient, expressed using units such as milligrams, grams or kilograms.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to measure accurately and consistently. Revisit help-m02-s03-measure-accurately to consolidate the reasoning.",
              "helpAnchor": "help-m02-s03-measure-accurately"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "mass is a general word for any food choice a person happens to like.",
              "correct": false,
              "feedback": "mass has a precise section meaning: The amount of matter in an ingredient, expressed using units such as milligrams, grams or kilograms. Revisit help-m02-s03-measure-accurately.",
              "helpAnchor": "help-m02-s03-measure-accurately"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "mass means the same as volume in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m02-s03-measure-accurately.",
              "helpAnchor": "help-m02-s03-measure-accurately"
            }
          ]
        },
        {
          "id": "kc-m02-s03-q7",
          "label": "Formative learning evidence",
          "focus": "worked-example reasoning",
          "theoryAnchor": "help-m02-s03-scaling-factor",
          "prompt": "A four-serve recipe must be adjusted to six serves while keeping every ingredient in proportion. Which conclusion is best supported by the worked example rather than by a guess?",
          "hint": "Compare each option with the ideas under “Scale every ingredient by the same factor”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "To change a four-serve recipe to six serves without changing its proportions, multiply every ingredient amount by the same scaling factor of 1.5.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to scale every ingredient by the same factor. Revisit help-m02-s03-scaling-factor to consolidate the reasoning.",
              "helpAnchor": "help-m02-s03-scaling-factor"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "If a recipe needs two extra serves, I can simply add the same extra amount to every ingredient.",
              "correct": false,
              "feedback": "Different ingredients have different original amounts, so use a scaling factor and multiply every ingredient by that same factor. Revisit help-m02-s03-scaling-factor.",
              "helpAnchor": "help-m02-s03-scaling-factor"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m02-s03-scaling-factor.",
              "helpAnchor": "help-m02-s03-scaling-factor"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in measuring, converting and scaling. Revisit help-m02-s03-scaling-factor.",
              "helpAnchor": "help-m02-s03-scaling-factor"
            }
          ]
        },
        {
          "id": "kc-m02-s03-q8",
          "label": "Formative learning evidence",
          "focus": "evidence selection",
          "theoryAnchor": "help-m02-s03-metric-links",
          "prompt": "A four-serve recipe must be adjusted to six serves while keeping every ingredient in proportion. Which evidence plan would most directly support a careful explanation?",
          "hint": "Compare each option with the ideas under “Understand the metric links”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m02-s03-metric-links.",
              "helpAnchor": "help-m02-s03-metric-links"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Record only a final opinion and leave out the observations, source details or reasoning that support it.",
              "correct": false,
              "feedback": "A final opinion without supporting evidence or reasoning cannot show how the conclusion was reached. Revisit help-m02-s03-metric-links.",
              "helpAnchor": "help-m02-s03-metric-links"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m02-s03-metric-links.",
              "helpAnchor": "help-m02-s03-metric-links"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Ask students to analyse a six-serve recipe plan in which some ingredients were scaled correctly and others were not, identify the errors and justify the corrected amounts using the scaling factor.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to understand the metric links. Revisit help-m02-s03-metric-links to consolidate the reasoning.",
              "helpAnchor": "help-m02-s03-metric-links"
            }
          ]
        },
        {
          "id": "kc-m02-s03-q9",
          "label": "Formative learning evidence",
          "focus": "authentic practical/design decision",
          "theoryAnchor": "help-m02-s03-scaling-factor",
          "prompt": "A four-serve recipe must be adjusted to six serves while keeping every ingredient in proportion. Which learning action would provide the most useful practice before writing the section capstone?",
          "hint": "Compare each option with the ideas under “Scale every ingredient by the same factor”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in measuring, converting and scaling. Revisit help-m02-s03-scaling-factor.",
              "helpAnchor": "help-m02-s03-scaling-factor"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Change several important factors at once, then assume which change caused the result.",
              "correct": false,
              "feedback": "Changing several factors together makes it difficult to identify which change influenced the result. Revisit help-m02-s03-scaling-factor.",
              "helpAnchor": "help-m02-s03-scaling-factor"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Give students a short fictional ingredient list for four serves and have them calculate quantities for six serves using a scaling factor of 1.5, checking units and proportions.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to scale every ingredient by the same factor. Revisit help-m02-s03-scaling-factor to consolidate the reasoning.",
              "helpAnchor": "help-m02-s03-scaling-factor"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Skip the practice and copy a finished response without applying the idea to the situation.",
              "correct": false,
              "feedback": "The practice should require the student to apply the idea and rehearse their own reasoning before the capstone. Revisit help-m02-s03-scaling-factor.",
              "helpAnchor": "help-m02-s03-scaling-factor"
            }
          ]
        },
        {
          "id": "kc-m02-s03-q10",
          "label": "Formative learning evidence",
          "focus": "careful judgement",
          "theoryAnchor": "help-m02-s03-metric-links",
          "prompt": "A four-serve recipe must be adjusted to six serves while keeping every ingredient in proportion. Which final judgement is the most careful, balanced conclusion?",
          "hint": "Compare each option with the ideas under “Scale every ingredient by the same factor”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in measuring, converting and scaling. Revisit help-m02-s03-scaling-factor. Review help-m02-s03-metric-links.",
              "helpAnchor": "help-m02-s03-metric-links"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Key metric relationships are 1000 mg = 1 g, 1000 g = 1 kg and 1000 mL = 1 L.",
              "correct": true,
              "feedback": "This conclusion uses the section evidence carefully and connects it to “Understand the metric links”. Revisit help-m02-s03-metric-links to consolidate the reasoning.",
              "helpAnchor": "help-m02-s03-metric-links"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "The unit does not matter as long as the number is correct.",
              "correct": false,
              "feedback": "The unit gives the number its meaning. For example, 1 gram and 1 kilogram represent very different masses. Revisit help-m02-s03-scaling-factor. Review help-m02-s03-metric-links.",
              "helpAnchor": "help-m02-s03-metric-links"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m02-s03-scaling-factor. Review help-m02-s03-metric-links.",
              "helpAnchor": "help-m02-s03-metric-links"
            }
          ]
        }
      ],
      "label": "Formative learning evidence"
    },
    {
      "sectionId": "m03-s01",
      "knowledgeCheckId": "kc-m03-s01",
      "title": "Cross-contamination pathways — knowledge check",
      "theoryAnchors": [
        "help-m03-s01-pathways",
        "help-m03-s01-high-risk-links",
        "help-m03-s01-break-the-chain"
      ],
      "sourceIds": [
        "safety-routines",
        "assessment-workbook"
      ],
      "hintPolicy": "answer-neutral",
      "feedbackTiming": "after check only",
      "questions": [
        {
          "id": "kc-m03-s01-q1",
          "focus": "essential idea",
          "theoryAnchor": "help-m03-s01-pathways",
          "prompt": "During a practical, raw chicken juice reaches a chopping board. A student then uses that board for ready-to-eat salad without cleaning it. Which explanation best identifies the cross-contamination pathway?",
          "hint": "Trace the movement from the original source to the food that will be eaten without further cooking.",
          "options": [
            {
              "id": "a",
              "text": "The pathway is indirect because contamination moves from the raw chicken through the chopping board to the salad.",
              "correct": true,
              "feedback": "Correct. The chopping board acts as an intermediate link between the raw chicken and the ready-to-eat salad, making this an indirect pathway. Review help-m03-s01-pathways for how objects can carry contamination between foods.",
              "helpAnchor": "help-m03-s01-pathways",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "The pathway is direct because the chicken and salad are both prepared in the same kitchen.",
              "correct": false,
              "feedback": "Not quite. Being in the same kitchen does not make a pathway direct. A direct pathway involves direct contact, while this example includes the chopping board as another link. Review help-m03-s01-pathways.",
              "helpAnchor": "help-m03-s01-pathways",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "There is no pathway because the salad does not contain raw chicken.",
              "correct": false,
              "feedback": "Not quite. Cross-contamination does not require the source food to become an ingredient. Contamination can move through equipment such as a chopping board. Review help-m03-s01-pathways.",
              "helpAnchor": "help-m03-s01-pathways",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "There is no pathway if the student uses a clean knife on the salad.",
              "correct": false,
              "feedback": "Not quite. A clean knife does not remove contamination already present on the chopping board. Each object in the pathway needs to be considered. Review help-m03-s01-pathways.",
              "helpAnchor": "help-m03-s01-pathways",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m03-s01-q2",
          "focus": "concept connection",
          "theoryAnchor": "help-m03-s01-high-risk-links",
          "prompt": "A student handles raw mince, washes their hands, then touches a cupboard handle that they used earlier while their hands were contaminated. What should they recognise before preparing a ready-to-eat wrap?",
          "hint": "Consider whether an earlier contact can create a new link after handwashing.",
          "options": [
            {
              "id": "a",
              "text": "The earlier handwashing means the student can begin the wrap immediately because the contamination pathway has already ended.",
              "correct": false,
              "feedback": "Not quite. Touching a previously contaminated handle can create a new contact after handwashing. Review help-m03-s01-high-risk-links for how shared objects connect preparation tasks.",
              "helpAnchor": "help-m03-s01-high-risk-links",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "The cupboard handle may have become a link in the pathway, so the student should respond to that new contact before preparing the wrap.",
              "correct": true,
              "feedback": "Correct. The handle can connect the raw-food task to the next task, so the student needs to consider the new contact before handling ready-to-eat food. Review help-m03-s01-high-risk-links.",
              "helpAnchor": "help-m03-s01-high-risk-links",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Only the chopping board matters because fixed objects such as handles cannot transfer contamination.",
              "correct": false,
              "feedback": "Not quite. Handles and other shared objects can form indirect links between tasks when contaminated hands touch them. Review help-m03-s01-high-risk-links.",
              "helpAnchor": "help-m03-s01-high-risk-links",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "The wrap is safe as long as the raw mince is stored away before the student starts the next task.",
              "correct": false,
              "feedback": "Not quite. Separation of foods is useful, but it does not address contamination that may already be on the handle. Review help-m03-s01-high-risk-links.",
              "helpAnchor": "help-m03-s01-high-risk-links",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m03-s01-q3",
          "focus": "likely misconception",
          "theoryAnchor": "help-m03-s01-break-the-chain",
          "prompt": "A student says that changing to a clean knife after cutting raw chicken is enough to make the next salad-preparation task safe. Which response best challenges this idea?",
          "hint": "Think about all the possible links created during the raw-food task, not only the utensil being changed.",
          "options": [
            {
              "id": "a",
              "text": "Changing the knife is always enough because utensils are the only objects that can transfer contamination.",
              "correct": false,
              "feedback": "Not quite. Hands, boards, benches, handles and other objects can also become links in a pathway. Review help-m03-s01-break-the-chain for barriers that address different links.",
              "helpAnchor": "help-m03-s01-break-the-chain",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "The student should keep using the same knife so there are fewer pieces of equipment to clean later.",
              "correct": false,
              "feedback": "Not quite. Continuing with a contaminated utensil could extend the pathway to ready-to-eat food. Review help-m03-s01-break-the-chain for when changing or cleaning equipment is needed.",
              "helpAnchor": "help-m03-s01-break-the-chain",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Changing the knife can help, but the student must also consider whether hands, the board, surfaces or other touched objects are part of the pathway.",
              "correct": true,
              "feedback": "Correct. Changing one utensil can break one link, but other links may remain and need barriers such as handwashing, cleaning or separation. Review help-m03-s01-break-the-chain.",
              "helpAnchor": "help-m03-s01-break-the-chain",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "The student only needs to act if raw chicken directly touches the salad.",
              "correct": false,
              "feedback": "Not quite. Indirect pathways through hands, equipment and surfaces can transfer contamination without direct food-to-food contact. Review help-m03-s01-break-the-chain.",
              "helpAnchor": "help-m03-s01-break-the-chain",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m03-s01-q4",
          "focus": "authentic practical/design decision",
          "theoryAnchor": "help-m03-s01-break-the-chain",
          "prompt": "For the Food for Purpose / Party Task, a pair must prepare raw chicken skewers and a ready-to-eat salad in the same practical. Which plan best reduces cross-contamination risk between the two tasks?",
          "hint": "Choose the plan that places barriers at several likely transfer points between raw and ready-to-eat preparation.",
          "options": [
            {
              "id": "a",
              "text": "Prepare both foods on the same board but use different knives so the equipment is easier to organise.",
              "correct": false,
              "feedback": "Not quite. Different knives address only one possible link, while the shared board can still transfer contamination. Review help-m03-s01-break-the-chain for using multiple barriers.",
              "helpAnchor": "help-m03-s01-break-the-chain",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Prepare the salad beside the raw chicken so both students can share ingredients and equipment quickly.",
              "correct": false,
              "feedback": "Not quite. Close shared preparation increases opportunities for transfer through hands, tools and surfaces. Review help-m03-s01-break-the-chain for the value of separation.",
              "helpAnchor": "help-m03-s01-break-the-chain",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Separate the raw and ready-to-eat preparation, wash hands after handling raw chicken, and use clean equipment and a clean area for the salad.",
              "correct": true,
              "feedback": "Correct. This plan combines separation, handwashing and clean equipment and surfaces to interrupt several likely pathway links. Review help-m03-s01-break-the-chain.",
              "helpAnchor": "help-m03-s01-break-the-chain",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Prepare the raw chicken first and begin the salad immediately afterwards because completing one task before another prevents transfer.",
              "correct": false,
              "feedback": "Not quite. Completing tasks in sequence does not by itself remove contamination from hands, equipment or surfaces. Review help-m03-s01-break-the-chain for the barriers needed between tasks.",
              "helpAnchor": "help-m03-s01-break-the-chain",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m03-s01-q5",
          "label": "Formative learning evidence",
          "focus": "likely misconception",
          "theoryAnchor": "help-m03-s01-high-risk-links",
          "prompt": "During this situation — raw ingredients, ready-to-eat food, hands, a board, a knife and a handle form possible transfer links in one preparation sequence. Which response best avoids the misconception that “Using a different knife always solves the problem.”?",
          "hint": "Compare each option with the ideas under “Notice the links between tasks”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Using a different knife always solves the problem.",
              "correct": false,
              "feedback": "Changing a utensil is one barrier, but hands, surfaces, boards and other objects may also need attention if they are part of the pathway. Revisit help-m03-s01-high-risk-links.",
              "helpAnchor": "help-m03-s01-high-risk-links"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in cross-contamination pathways. Revisit help-m03-s01-high-risk-links.",
              "helpAnchor": "help-m03-s01-high-risk-links"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Only “Follow the pathway” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m03-s01-high-risk-links.",
              "helpAnchor": "help-m03-s01-high-risk-links"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Changing a utensil is one barrier, but hands, surfaces, boards and other objects may also need attention if they are part of the pathway.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to notice the links between tasks. Revisit help-m03-s01-high-risk-links to consolidate the reasoning.",
              "helpAnchor": "help-m03-s01-high-risk-links"
            }
          ]
        },
        {
          "id": "kc-m03-s01-q6",
          "label": "Formative learning evidence",
          "focus": "terminology in context",
          "theoryAnchor": "help-m03-s01-pathways",
          "prompt": "Which option uses the term “cross-contamination” accurately in the context of cross-contamination pathways?",
          "hint": "Compare each option with the ideas under “Follow the pathway”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "cross-contamination means the same as pathway in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m03-s01-pathways.",
              "helpAnchor": "help-m03-s01-pathways"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "The meaning of cross-contamination changes to match whichever answer is most convenient.",
              "correct": false,
              "feedback": "The section gives cross-contamination a precise meaning that should be applied consistently. Revisit help-m03-s01-pathways.",
              "helpAnchor": "help-m03-s01-pathways"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "cross-contamination means the movement of harmful microorganisms or allergens from one food, person, surface or object to another.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to follow the pathway. Revisit help-m03-s01-pathways to consolidate the reasoning.",
              "helpAnchor": "help-m03-s01-pathways"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "cross-contamination is a general word for any food choice a person happens to like.",
              "correct": false,
              "feedback": "cross-contamination has a precise section meaning: The movement of harmful microorganisms or allergens from one food, person, surface or object to another. Revisit help-m03-s01-pathways.",
              "helpAnchor": "help-m03-s01-pathways"
            }
          ]
        },
        {
          "id": "kc-m03-s01-q7",
          "label": "Formative learning evidence",
          "focus": "worked-example reasoning",
          "theoryAnchor": "help-m03-s01-break-the-chain",
          "prompt": "Raw ingredients, ready-to-eat food, hands, a board, a knife and a handle form possible transfer links in one preparation sequence. Which conclusion is best supported by the worked example rather than by a guess?",
          "hint": "Compare each option with the ideas under “Break the chain of contamination”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in cross-contamination pathways. Revisit help-m03-s01-break-the-chain.",
              "helpAnchor": "help-m03-s01-break-the-chain"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Cross-contamination can travel through several connected objects, so trace what has been touched and break the pathway before moving to the next food task.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to break the chain of contamination. Revisit help-m03-s01-break-the-chain to consolidate the reasoning.",
              "helpAnchor": "help-m03-s01-break-the-chain"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Cross-contamination only happens when two foods touch each other.",
              "correct": false,
              "feedback": "It can also happen indirectly through hands, boards, knives, cloths, handles, storage areas and other objects. Revisit help-m03-s01-break-the-chain.",
              "helpAnchor": "help-m03-s01-break-the-chain"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m03-s01-break-the-chain.",
              "helpAnchor": "help-m03-s01-break-the-chain"
            }
          ]
        },
        {
          "id": "kc-m03-s01-q8",
          "label": "Formative learning evidence",
          "focus": "evidence selection",
          "theoryAnchor": "help-m03-s01-high-risk-links",
          "prompt": "Raw ingredients, ready-to-eat food, hands, a board, a knife and a handle form possible transfer links in one preparation sequence. Which evidence plan would most directly support a careful explanation?",
          "hint": "Compare each option with the ideas under “Notice the links between tasks”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Students can explain a cross-contamination pathway and justify where practical barriers should be used to stop harmful microorganisms or allergens moving to another food or surface.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to notice the links between tasks. Revisit help-m03-s01-high-risk-links to consolidate the reasoning.",
              "helpAnchor": "help-m03-s01-high-risk-links"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m03-s01-high-risk-links.",
              "helpAnchor": "help-m03-s01-high-risk-links"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Record only a final opinion and leave out the observations, source details or reasoning that support it.",
              "correct": false,
              "feedback": "A final opinion without supporting evidence or reasoning cannot show how the conclusion was reached. Revisit help-m03-s01-high-risk-links.",
              "helpAnchor": "help-m03-s01-high-risk-links"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m03-s01-high-risk-links.",
              "helpAnchor": "help-m03-s01-high-risk-links"
            }
          ]
        },
        {
          "id": "kc-m03-s01-q9",
          "label": "Formative learning evidence",
          "focus": "authentic practical/design decision",
          "theoryAnchor": "help-m03-s01-break-the-chain",
          "prompt": "Raw ingredients, ready-to-eat food, hands, a board, a knife and a handle form possible transfer links in one preparation sequence. Which learning action would provide the most useful practice before writing the section capstone?",
          "hint": "Compare each option with the ideas under “Break the chain of contamination”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Skip the practice and copy a finished response without applying the idea to the situation.",
              "correct": false,
              "feedback": "The practice should require the student to apply the idea and rehearse their own reasoning before the capstone. Revisit help-m03-s01-break-the-chain.",
              "helpAnchor": "help-m03-s01-break-the-chain"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in cross-contamination pathways. Revisit help-m03-s01-break-the-chain.",
              "helpAnchor": "help-m03-s01-break-the-chain"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Change several important factors at once, then assume which change caused the result.",
              "correct": false,
              "feedback": "Changing several factors together makes it difficult to identify which change influenced the result. Revisit help-m03-s01-break-the-chain.",
              "helpAnchor": "help-m03-s01-break-the-chain"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Have students trace a realistic school-kitchen preparation sequence and identify where separation, cleaning, handwashing or changing utensils would break the pathway.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to break the chain of contamination. Revisit help-m03-s01-break-the-chain to consolidate the reasoning.",
              "helpAnchor": "help-m03-s01-break-the-chain"
            }
          ]
        },
        {
          "id": "kc-m03-s01-q10",
          "label": "Formative learning evidence",
          "focus": "careful judgement",
          "theoryAnchor": "help-m03-s01-high-risk-links",
          "prompt": "Raw ingredients, ready-to-eat food, hands, a board, a knife and a handle form possible transfer links in one preparation sequence. Which final judgement is the most careful, balanced conclusion?",
          "hint": "Compare each option with the ideas under “Break the chain of contamination”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m03-s01-break-the-chain. Review help-m03-s01-high-risk-links.",
              "helpAnchor": "help-m03-s01-high-risk-links"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in cross-contamination pathways. Revisit help-m03-s01-break-the-chain. Review help-m03-s01-high-risk-links.",
              "helpAnchor": "help-m03-s01-high-risk-links"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Raw and ready-to-eat foods should be kept separated to reduce opportunities for transfer.",
              "correct": true,
              "feedback": "This conclusion uses the section evidence carefully and connects it to “Notice the links between tasks”. Revisit help-m03-s01-high-risk-links to consolidate the reasoning.",
              "helpAnchor": "help-m03-s01-high-risk-links"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Using a different knife always solves the problem.",
              "correct": false,
              "feedback": "Changing a utensil is one barrier, but hands, surfaces, boards and other objects may also need attention if they are part of the pathway. Revisit help-m03-s01-break-the-chain. Review help-m03-s01-high-risk-links.",
              "helpAnchor": "help-m03-s01-high-risk-links"
            }
          ]
        }
      ],
      "label": "Formative learning evidence"
    },
    {
      "sectionId": "m03-s02",
      "knowledgeCheckId": "kc-m03-s02",
      "title": "Temperature control and storage — knowledge check",
      "theoryAnchors": [
        "help-m03-s02-time-temperature",
        "help-m03-s02-safe-storage",
        "help-m03-s02-decision-rule"
      ],
      "sourceIds": [
        "assessment-workbook",
        "official-food-safety-guidance"
      ],
      "hintPolicy": "answer-neutral",
      "feedbackTiming": "after check only",
      "questions": [
        {
          "id": "kc-m03-s02-q1",
          "focus": "essential idea",
          "theoryAnchor": "help-m03-s02-time-temperature",
          "prompt": "A tray of ready-to-eat potentially hazardous food has been out of refrigeration during preparation and is now waiting to be served. Which information is most important for making a safe temperature-control decision?",
          "hint": "Think about the evidence that shows both the conditions the food has experienced and how long those conditions lasted.",
          "options": [
            {
              "id": "a",
              "text": "The total time the food has spent between 5°C and 60°C, including earlier preparation time.",
              "correct": true,
              "feedback": "Correct. Safe temperature control depends on both temperature and cumulative time, so earlier periods in the danger zone must still be counted. Review help-m03-s02-time-temperature.",
              "helpAnchor": "help-m03-s02-time-temperature",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Whether the food still looks freshly prepared.",
              "correct": false,
              "feedback": "Not quite. Appearance does not show how long harmful microorganisms may have had suitable conditions for growth. Time and temperature evidence is needed. Review help-m03-s02-time-temperature.",
              "helpAnchor": "help-m03-s02-time-temperature",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Whether the tray will fit back into the refrigerator after serving.",
              "correct": false,
              "feedback": "Not quite. Available refrigerator space does not determine whether the food is safe to refrigerate again. The cumulative time and temperature history must be considered first. Review help-m03-s02-time-temperature.",
              "helpAnchor": "help-m03-s02-time-temperature",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Whether the food was prepared before or after another group started cooking.",
              "correct": false,
              "feedback": "Not quite. The relevant issue is the food's own cumulative time and temperature history rather than the order in which groups worked. Review help-m03-s02-time-temperature.",
              "helpAnchor": "help-m03-s02-time-temperature",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m03-s02-q2",
          "focus": "concept connection",
          "theoryAnchor": "help-m03-s02-safe-storage",
          "prompt": "A chilled ready-to-eat filling has been kept cold enough, but its uncovered container was stored directly beneath raw meat. Which conclusion best connects temperature control with safe storage?",
          "hint": "Consider whether controlling temperature deals with every type of food-safety risk during storage.",
          "options": [
            {
              "id": "a",
              "text": "The filling is automatically safe because correct refrigeration prevents all storage risks.",
              "correct": false,
              "feedback": "Not quite. Temperature control reduces microbial growth but does not prevent contamination from raw food or other contacts. Review help-m03-s02-safe-storage.",
              "helpAnchor": "help-m03-s02-safe-storage",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "The storage arrangement is still unsafe because separation and appropriate covering matter as well as temperature control.",
              "correct": true,
              "feedback": "Correct. Safe storage includes suitable temperature control and protection from contamination through covering and separation of raw and ready-to-eat foods. Review help-m03-s02-safe-storage.",
              "helpAnchor": "help-m03-s02-safe-storage",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "The filling only becomes unsafe if its use-by date changes while it is stored.",
              "correct": false,
              "feedback": "Not quite. Dates are important, but poor separation can create a contamination risk even when the date remains acceptable. Review help-m03-s02-safe-storage.",
              "helpAnchor": "help-m03-s02-safe-storage",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "The filling is safe if the raw meat container has a label identifying what it contains.",
              "correct": false,
              "feedback": "Not quite. Labelling helps with storage decisions but does not remove the need to separate ready-to-eat food from possible contamination sources. Review help-m03-s02-safe-storage.",
              "helpAnchor": "help-m03-s02-safe-storage",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m03-s02-q3",
          "focus": "likely misconception",
          "theoryAnchor": "help-m03-s02-decision-rule",
          "prompt": "A ready-to-eat potentially hazardous food spends 75 minutes in the temperature danger zone during preparation, is refrigerated, and later spends another 70 minutes on display. A student says the second period starts a new time count. Which response best addresses the mistake?",
          "hint": "Decide whether separate periods out of temperature control should be treated independently or combined.",
          "options": [
            {
              "id": "a",
              "text": "The student is correct because refrigeration resets the danger-zone time to zero.",
              "correct": false,
              "feedback": "Not quite. Refrigeration does not erase earlier time in the temperature danger zone. The separate periods must be added together. Review help-m03-s02-decision-rule.",
              "helpAnchor": "help-m03-s02-decision-rule",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Only the longer of the two periods needs to be counted because the food was chilled between them.",
              "correct": false,
              "feedback": "Not quite. The rule uses cumulative time, so both periods contribute to the total rather than only the longer one. Review help-m03-s02-decision-rule.",
              "helpAnchor": "help-m03-s02-decision-rule",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "The two periods must be added, giving a total of 145 minutes in the danger zone, so the decision should be based on that cumulative time.",
              "correct": true,
              "feedback": "Correct. Time between 5°C and 60°C is cumulative, so 75 minutes plus 70 minutes gives 145 minutes. That total must be used when applying the two-hour/four-hour rule. Review help-m03-s02-decision-rule.",
              "helpAnchor": "help-m03-s02-decision-rule",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "No time needs to be counted if the food still smells normal after display.",
              "correct": false,
              "feedback": "Not quite. Smell does not replace time and temperature evidence when applying the two-hour/four-hour rule. Review help-m03-s02-decision-rule.",
              "helpAnchor": "help-m03-s02-decision-rule",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m03-s02-q4",
          "focus": "authentic practical/design decision",
          "theoryAnchor": "help-m03-s02-decision-rule",
          "prompt": "During the Party Task, a ready-to-eat potentially hazardous platter has accumulated 3 hours in the temperature danger zone across preparation and display. The group has finished serving for now and wants to keep the remainder for later. What is the safest decision?",
          "hint": "Apply the cumulative time rule and distinguish between food that may be refrigerated again and food that must be used immediately.",
          "options": [
            {
              "id": "a",
              "text": "Return it to refrigeration because the total time is still under four hours.",
              "correct": false,
              "feedback": "Not quite. Food that has spent between two and less than four hours in the danger zone should be used immediately and should not be returned to refrigeration for later use. Review help-m03-s02-decision-rule.",
              "helpAnchor": "help-m03-s02-decision-rule",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Use it immediately if it is still suitable to serve, but do not refrigerate it again for later use.",
              "correct": true,
              "feedback": "Correct. At 3 hours cumulative time, the food falls between two and less than four hours, so it may be used immediately but not returned to refrigeration for later use. Review help-m03-s02-decision-rule.",
              "helpAnchor": "help-m03-s02-decision-rule",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Discard it immediately because any food held for more than two hours must be thrown away.",
              "correct": false,
              "feedback": "Not quite. Reaching two hours changes the available action, but disposal is required once cumulative time reaches four hours or more. Review help-m03-s02-decision-rule.",
              "helpAnchor": "help-m03-s02-decision-rule",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Keep it for later if the platter has remained covered throughout the display period.",
              "correct": false,
              "feedback": "Not quite. Covering supports safe storage but does not override the cumulative time limits in the two-hour/four-hour rule. Review help-m03-s02-decision-rule.",
              "helpAnchor": "help-m03-s02-decision-rule",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m03-s02-q5",
          "label": "Formative learning evidence",
          "focus": "likely misconception",
          "theoryAnchor": "help-m03-s02-safe-storage",
          "prompt": "During this situation — prepared party food has spent separate periods outside temperature control and the team must make a safe decision using the total time. Which response best avoids the misconception that “If prepared food looks and smells normal, it must be safe to serve.”?",
          "hint": "Compare each option with the ideas under “Store food safely”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in temperature control and storage. Revisit help-m03-s02-safe-storage.",
              "helpAnchor": "help-m03-s02-safe-storage"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Only “Control time and temperature” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m03-s02-safe-storage.",
              "helpAnchor": "help-m03-s02-safe-storage"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Safe decisions also require information about time, temperature, storage and handling; appearance alone does not provide that information.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to store food safely. Revisit help-m03-s02-safe-storage to consolidate the reasoning.",
              "helpAnchor": "help-m03-s02-safe-storage"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "If prepared food looks and smells normal, it must be safe to serve.",
              "correct": false,
              "feedback": "Safe decisions also require information about time, temperature, storage and handling; appearance alone does not provide that information. Revisit help-m03-s02-safe-storage.",
              "helpAnchor": "help-m03-s02-safe-storage"
            }
          ]
        },
        {
          "id": "kc-m03-s02-q6",
          "label": "Formative learning evidence",
          "focus": "terminology in context",
          "theoryAnchor": "help-m03-s02-time-temperature",
          "prompt": "Which option uses the term “temperature danger zone” accurately in the context of temperature control and storage?",
          "hint": "Compare each option with the ideas under “Control time and temperature”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "The meaning of temperature danger zone changes to match whichever answer is most convenient.",
              "correct": false,
              "feedback": "The section gives temperature danger zone a precise meaning that should be applied consistently. Revisit help-m03-s02-time-temperature.",
              "helpAnchor": "help-m03-s02-time-temperature"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "temperature danger zone means the range from 5°C to 60°C in which harmful microorganisms can grow in potentially hazardous food.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to control time and temperature. Revisit help-m03-s02-time-temperature to consolidate the reasoning.",
              "helpAnchor": "help-m03-s02-time-temperature"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "temperature danger zone is a general word for any food choice a person happens to like.",
              "correct": false,
              "feedback": "temperature danger zone has a precise section meaning: The range from 5°C to 60°C in which harmful microorganisms can grow in potentially hazardous food. Revisit help-m03-s02-time-temperature.",
              "helpAnchor": "help-m03-s02-time-temperature"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "temperature danger zone means the same as potentially hazardous food in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m03-s02-time-temperature.",
              "helpAnchor": "help-m03-s02-time-temperature"
            }
          ]
        },
        {
          "id": "kc-m03-s02-q7",
          "label": "Formative learning evidence",
          "focus": "worked-example reasoning",
          "theoryAnchor": "help-m03-s02-decision-rule",
          "prompt": "Prepared party food has spent separate periods outside temperature control and the team must make a safe decision using the total time. Which conclusion is best supported by the worked example rather than by a guess?",
          "hint": "Compare each option with the ideas under “Use the two-hour/four-hour rule”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "A safe decision needs evidence about both time and temperature; appearance alone cannot tell you how long food has been out of control.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to use the two-hour/four-hour rule. Revisit help-m03-s02-decision-rule to consolidate the reasoning.",
              "helpAnchor": "help-m03-s02-decision-rule"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Putting food back in the fridge resets its time on the bench to zero.",
              "correct": false,
              "feedback": "Time in the temperature danger zone is cumulative, so earlier periods must still be included in the total. Revisit help-m03-s02-decision-rule.",
              "helpAnchor": "help-m03-s02-decision-rule"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m03-s02-decision-rule.",
              "helpAnchor": "help-m03-s02-decision-rule"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in temperature control and storage. Revisit help-m03-s02-decision-rule.",
              "helpAnchor": "help-m03-s02-decision-rule"
            }
          ]
        },
        {
          "id": "kc-m03-s02-q8",
          "label": "Formative learning evidence",
          "focus": "evidence selection",
          "theoryAnchor": "help-m03-s02-safe-storage",
          "prompt": "Prepared party food has spent separate periods outside temperature control and the team must make a safe decision using the total time. Which evidence plan would most directly support a careful explanation?",
          "hint": "Compare each option with the ideas under “Store food safely”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m03-s02-safe-storage.",
              "helpAnchor": "help-m03-s02-safe-storage"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Record only a final opinion and leave out the observations, source details or reasoning that support it.",
              "correct": false,
              "feedback": "A final opinion without supporting evidence or reasoning cannot show how the conclusion was reached. Revisit help-m03-s02-safe-storage.",
              "helpAnchor": "help-m03-s02-safe-storage"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m03-s02-safe-storage.",
              "helpAnchor": "help-m03-s02-safe-storage"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Students can apply the two-hour/four-hour rule accurately and explain how temperature control, covered storage, separation, dates, labels and directions support safe food decisions.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to store food safely. Revisit help-m03-s02-safe-storage to consolidate the reasoning.",
              "helpAnchor": "help-m03-s02-safe-storage"
            }
          ]
        },
        {
          "id": "kc-m03-s02-q9",
          "label": "Formative learning evidence",
          "focus": "authentic practical/design decision",
          "theoryAnchor": "help-m03-s02-decision-rule",
          "prompt": "Prepared party food has spent separate periods outside temperature control and the team must make a safe decision using the total time. Which learning action would provide the most useful practice before writing the section capstone?",
          "hint": "Compare each option with the ideas under “Use the two-hour/four-hour rule”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in temperature control and storage. Revisit help-m03-s02-decision-rule.",
              "helpAnchor": "help-m03-s02-decision-rule"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Change several important factors at once, then assume which change caused the result.",
              "correct": false,
              "feedback": "Changing several factors together makes it difficult to identify which change influenced the result. Revisit help-m03-s02-decision-rule.",
              "helpAnchor": "help-m03-s02-decision-rule"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Have students interpret a realistic Party Task preparation timeline and decide which time, temperature and storage information matters before food is served or stored.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to use the two-hour/four-hour rule. Revisit help-m03-s02-decision-rule to consolidate the reasoning.",
              "helpAnchor": "help-m03-s02-decision-rule"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Skip the practice and copy a finished response without applying the idea to the situation.",
              "correct": false,
              "feedback": "The practice should require the student to apply the idea and rehearse their own reasoning before the capstone. Revisit help-m03-s02-decision-rule.",
              "helpAnchor": "help-m03-s02-decision-rule"
            }
          ]
        },
        {
          "id": "kc-m03-s02-q10",
          "label": "Formative learning evidence",
          "focus": "careful judgement",
          "theoryAnchor": "help-m03-s02-safe-storage",
          "prompt": "Prepared party food has spent separate periods outside temperature control and the team must make a safe decision using the total time. Which final judgement is the most careful, balanced conclusion?",
          "hint": "Compare each option with the ideas under “Use the two-hour/four-hour rule”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in temperature control and storage. Revisit help-m03-s02-decision-rule. Review help-m03-s02-safe-storage.",
              "helpAnchor": "help-m03-s02-safe-storage"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Under the two-hour/four-hour rule, less than two hours allows use or refrigeration, two to less than four hours means use immediately, and four hours or more means discard.",
              "correct": true,
              "feedback": "This conclusion uses the section evidence carefully and connects it to “Store food safely”. Revisit help-m03-s02-safe-storage to consolidate the reasoning.",
              "helpAnchor": "help-m03-s02-safe-storage"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "If prepared food looks and smells normal, it must be safe to serve.",
              "correct": false,
              "feedback": "Safe decisions also require information about time, temperature, storage and handling; appearance alone does not provide that information. Revisit help-m03-s02-decision-rule. Review help-m03-s02-safe-storage.",
              "helpAnchor": "help-m03-s02-safe-storage"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m03-s02-decision-rule. Review help-m03-s02-safe-storage.",
              "helpAnchor": "help-m03-s02-safe-storage"
            }
          ]
        }
      ],
      "label": "Formative learning evidence"
    },
    {
      "sectionId": "m03-s03",
      "knowledgeCheckId": "kc-m03-s03",
      "title": "Allergens and safe food choices — knowledge check",
      "theoryAnchors": [
        "help-m03-s03-allergy-v-intolerance",
        "help-m03-s03-cross-contact",
        "help-m03-s03-check-and-communicate"
      ],
      "sourceIds": [
        "assessment-workbook",
        "official-allergen-guidance"
      ],
      "hintPolicy": "answer-neutral",
      "feedbackTiming": "after check only",
      "questions": [
        {
          "id": "kc-m03-s03-q1",
          "focus": "essential idea",
          "theoryAnchor": "help-m03-s03-allergy-v-intolerance",
          "prompt": "A Party Task brief says that a guest has a dietary requirement, but the exact requirement has not yet been confirmed. What should the group do before choosing ingredients?",
          "hint": "Consider whether students have enough reliable information to make the choice themselves.",
          "options": [
            {
              "id": "a",
              "text": "Wait for the requirement to be confirmed and follow teacher and school directions before deciding what is suitable.",
              "correct": true,
              "feedback": "Correct. Students should work from confirmed dietary information rather than diagnosing, ranking or guessing a requirement. Review help-m03-s03-allergy-v-intolerance.",
              "helpAnchor": "help-m03-s03-allergy-v-intolerance",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Choose a recipe that seems mild because it is less likely to cause a reaction.",
              "correct": false,
              "feedback": "Not quite. How mild a food seems does not confirm whether it meets a particular dietary requirement. Students should use confirmed information and teacher directions. Review help-m03-s03-allergy-v-intolerance.",
              "helpAnchor": "help-m03-s03-allergy-v-intolerance",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Ask the group to decide whether the requirement is probably an allergy or an intolerance based on what usually happens to people.",
              "correct": false,
              "feedback": "Not quite. Students should not diagnose or interpret another person's condition from general assumptions. The requirement needs to be confirmed through the authorised school process. Review help-m03-s03-allergy-v-intolerance.",
              "helpAnchor": "help-m03-s03-allergy-v-intolerance",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Remove the ingredient that the group thinks is most likely to cause a problem and continue with the recipe.",
              "correct": false,
              "feedback": "Not quite. Removing a guessed ingredient does not establish that the food is suitable. The group first needs confirmed information and teacher or school direction. Review help-m03-s03-allergy-v-intolerance.",
              "helpAnchor": "help-m03-s03-allergy-v-intolerance",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m03-s03-q2",
          "focus": "concept connection",
          "theoryAnchor": "help-m03-s03-cross-contact",
          "prompt": "A student checks that a packaged ingredient is suitable for a stated requirement, then prepares it with a knife that was just used on another food containing the relevant allergen. What is the most important connection to recognise?",
          "hint": "Think beyond the ingredient label and trace what else can transfer material during preparation.",
          "options": [
            {
              "id": "a",
              "text": "The suitable ingredient can still be affected by allergen cross-contact through the shared knife.",
              "correct": true,
              "feedback": "Correct. A suitable ingredient can become unsafe for the stated requirement if allergen material is transferred through utensils, hands, surfaces or other objects. Review help-m03-s03-cross-contact.",
              "helpAnchor": "help-m03-s03-cross-contact",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "The ingredient remains suitable because its label has already been checked.",
              "correct": false,
              "feedback": "Not quite. Label checking provides ingredient information, but it does not prevent allergen material being transferred during preparation. Review help-m03-s03-cross-contact.",
              "helpAnchor": "help-m03-s03-cross-contact",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Cross-contact only matters when two foods visibly touch each other.",
              "correct": false,
              "feedback": "Not quite. Allergen material can move indirectly through utensils, hands, work surfaces and other objects even when foods do not visibly touch. Review help-m03-s03-cross-contact.",
              "helpAnchor": "help-m03-s03-cross-contact",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "A quick wipe of the knife is enough because the visible food has been removed.",
              "correct": false,
              "feedback": "Not quite. Removing visible residue does not prove that allergen material has been controlled. Equipment should be managed according to the required preparation controls. Review help-m03-s03-cross-contact.",
              "helpAnchor": "help-m03-s03-cross-contact",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m03-s03-q3",
          "focus": "likely misconception",
          "theoryAnchor": "help-m03-s03-check-and-communicate",
          "prompt": "A group used the same packaged sauce successfully in an earlier practical and wants to use a new bottle of it for a stated dietary requirement without reading the label. Which response best addresses this decision?",
          "hint": "Consider whether information from a previous product use is enough evidence for the product being used today.",
          "options": [
            {
              "id": "a",
              "text": "Use it without checking because products from the same brand keep the same ingredients.",
              "correct": false,
              "feedback": "Not quite. Ingredient information can change, so previous experience with a brand or product is not enough. Review help-m03-s03-check-and-communicate.",
              "helpAnchor": "help-m03-s03-check-and-communicate",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Check the label on the actual bottle being used and tell the teacher if anything relevant is unclear.",
              "correct": true,
              "feedback": "Correct. The actual product label should be checked every time, and uncertainty should be referred to the teacher before continuing. Review help-m03-s03-check-and-communicate.",
              "helpAnchor": "help-m03-s03-check-and-communicate",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Use the sauce if the packaging looks identical to the bottle used previously.",
              "correct": false,
              "feedback": "Not quite. Similar appearance does not confirm that ingredient information is unchanged. The current label needs to be checked. Review help-m03-s03-check-and-communicate.",
              "helpAnchor": "help-m03-s03-check-and-communicate",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Taste a small amount first because a familiar taste can confirm that the ingredients have not changed.",
              "correct": false,
              "feedback": "Not quite. Tasting is not an appropriate way to confirm ingredient suitability and must not replace label checking or teacher communication. Review help-m03-s03-check-and-communicate.",
              "helpAnchor": "help-m03-s03-check-and-communicate",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m03-s03-q4",
          "focus": "authentic practical/design decision",
          "theoryAnchor": "help-m03-s03-check-and-communicate",
          "prompt": "During the Party Task, a group has a confirmed dietary requirement and finds a possible substitute ingredient. Its label is difficult to interpret, and the shared bench has already been used to prepare food containing the relevant allergen. What is the best next step?",
          "hint": "Choose the response that deals with both uncertain information and preparation controls before work continues.",
          "options": [
            {
              "id": "a",
              "text": "Use the substitute because choosing a different ingredient removes the need to consider the earlier bench use.",
              "correct": false,
              "feedback": "Not quite. A substitute does not remove possible cross-contact from the preparation area, and unclear label information still needs to be resolved. Review help-m03-s03-check-and-communicate.",
              "helpAnchor": "help-m03-s03-check-and-communicate",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Remove any visible crumbs from the bench and continue if the substitute looks suitable.",
              "correct": false,
              "feedback": "Not quite. Visible cleanliness does not prove allergen cross-contact has been controlled, and appearance cannot resolve an unclear label. Review help-m03-s03-cross-contact.",
              "helpAnchor": "help-m03-s03-cross-contact",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Tell the teacher about the unclear label and possible cross-contact, then follow the teacher and school directions for any substitution and preparation controls.",
              "correct": true,
              "feedback": "Correct. Unclear ingredient information and possible cross-contact both need to be communicated before continuing, with substitutions and controls managed through teacher and school directions. Review help-m03-s03-check-and-communicate.",
              "helpAnchor": "help-m03-s03-check-and-communicate",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Ask another student whether they have used the substitute before and follow their judgement if they think it is safe.",
              "correct": false,
              "feedback": "Not quite. Another student's memory or opinion is not reliable evidence for a dietary requirement. Uncertainty should be referred to the teacher and the current product information checked. Review help-m03-s03-check-and-communicate.",
              "helpAnchor": "help-m03-s03-check-and-communicate",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m03-s03-q5",
          "label": "Formative learning evidence",
          "focus": "likely misconception",
          "theoryAnchor": "help-m03-s03-cross-contact",
          "prompt": "During this situation — a menu includes an unclear packaged ingredient and a student is tempted to rely on memory instead of the current label. Which response best avoids the misconception that “If I have used a product before, I do not need to check its label again.”?",
          "hint": "Compare each option with the ideas under “Prevent allergen cross-contact”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Only “Understand allergy and intolerance” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m03-s03-cross-contact.",
              "helpAnchor": "help-m03-s03-cross-contact"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Ingredient information can change, so check the label on the product every time it is used.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to prevent allergen cross-contact. Revisit help-m03-s03-cross-contact to consolidate the reasoning.",
              "helpAnchor": "help-m03-s03-cross-contact"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "If I have used a product before, I do not need to check its label again.",
              "correct": false,
              "feedback": "Ingredient information can change, so check the label on the product every time it is used. Revisit help-m03-s03-cross-contact.",
              "helpAnchor": "help-m03-s03-cross-contact"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in allergens and safe food choices. Revisit help-m03-s03-cross-contact.",
              "helpAnchor": "help-m03-s03-cross-contact"
            }
          ]
        },
        {
          "id": "kc-m03-s03-q6",
          "label": "Formative learning evidence",
          "focus": "terminology in context",
          "theoryAnchor": "help-m03-s03-allergy-v-intolerance",
          "prompt": "Which option uses the term “food allergy” accurately in the context of allergens and safe food choices?",
          "hint": "Compare each option with the ideas under “Understand allergy and intolerance”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "food allergy means an immune reaction to a particular food protein that requires careful avoidance according to confirmed information and directions.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to understand allergy and intolerance. Revisit help-m03-s03-allergy-v-intolerance to consolidate the reasoning.",
              "helpAnchor": "help-m03-s03-allergy-v-intolerance"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "food allergy is a general word for any food choice a person happens to like.",
              "correct": false,
              "feedback": "food allergy has a precise section meaning: An immune reaction to a particular food protein that requires careful avoidance according to confirmed information and directions. Revisit help-m03-s03-allergy-v-intolerance.",
              "helpAnchor": "help-m03-s03-allergy-v-intolerance"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "food allergy means the same as food intolerance in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m03-s03-allergy-v-intolerance.",
              "helpAnchor": "help-m03-s03-allergy-v-intolerance"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "The meaning of food allergy changes to match whichever answer is most convenient.",
              "correct": false,
              "feedback": "The section gives food allergy a precise meaning that should be applied consistently. Revisit help-m03-s03-allergy-v-intolerance.",
              "helpAnchor": "help-m03-s03-allergy-v-intolerance"
            }
          ]
        },
        {
          "id": "kc-m03-s03-q7",
          "label": "Formative learning evidence",
          "focus": "worked-example reasoning",
          "theoryAnchor": "help-m03-s03-check-and-communicate",
          "prompt": "A menu includes an unclear packaged ingredient and a student is tempted to rely on memory instead of the current label. Which conclusion is best supported by the worked example rather than by a guess?",
          "hint": "Compare each option with the ideas under “Check labels and communicate concerns”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "If I remove the ingredient someone cannot have, the rest of the food must be safe.",
              "correct": false,
              "feedback": "Removing one visible ingredient does not prove the food is safe because other ingredients or cross-contact may still matter. Revisit help-m03-s03-check-and-communicate.",
              "helpAnchor": "help-m03-s03-check-and-communicate"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m03-s03-check-and-communicate.",
              "helpAnchor": "help-m03-s03-check-and-communicate"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in allergens and safe food choices. Revisit help-m03-s03-check-and-communicate.",
              "helpAnchor": "help-m03-s03-check-and-communicate"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "A safe food choice comes from confirmed information, careful label checking and controlled preparation, not from assumptions.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to check labels and communicate concerns. Revisit help-m03-s03-check-and-communicate to consolidate the reasoning.",
              "helpAnchor": "help-m03-s03-check-and-communicate"
            }
          ]
        },
        {
          "id": "kc-m03-s03-q8",
          "label": "Formative learning evidence",
          "focus": "evidence selection",
          "theoryAnchor": "help-m03-s03-cross-contact",
          "prompt": "A menu includes an unclear packaged ingredient and a student is tempted to rely on memory instead of the current label. Which evidence plan would most directly support a careful explanation?",
          "hint": "Compare each option with the ideas under “Prevent allergen cross-contact”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Record only a final opinion and leave out the observations, source details or reasoning that support it.",
              "correct": false,
              "feedback": "A final opinion without supporting evidence or reasoning cannot show how the conclusion was reached. Revisit help-m03-s03-cross-contact.",
              "helpAnchor": "help-m03-s03-cross-contact"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m03-s03-cross-contact.",
              "helpAnchor": "help-m03-s03-cross-contact"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Students can distinguish allergy from intolerance in non-medical terms, explain allergen cross-contact and justify why labels, controlled preparation and teacher communication are essential.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to prevent allergen cross-contact. Revisit help-m03-s03-cross-contact to consolidate the reasoning.",
              "helpAnchor": "help-m03-s03-cross-contact"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m03-s03-cross-contact.",
              "helpAnchor": "help-m03-s03-cross-contact"
            }
          ]
        },
        {
          "id": "kc-m03-s03-q9",
          "label": "Formative learning evidence",
          "focus": "authentic practical/design decision",
          "theoryAnchor": "help-m03-s03-check-and-communicate",
          "prompt": "A menu includes an unclear packaged ingredient and a student is tempted to rely on memory instead of the current label. Which learning action would provide the most useful practice before writing the section capstone?",
          "hint": "Compare each option with the ideas under “Check labels and communicate concerns”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Change several important factors at once, then assume which change caused the result.",
              "correct": false,
              "feedback": "Changing several factors together makes it difficult to identify which change influenced the result. Revisit help-m03-s03-check-and-communicate.",
              "helpAnchor": "help-m03-s03-check-and-communicate"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Have students review a Party Task menu scenario and identify what information must be confirmed before selecting or preparing a safe food choice.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to check labels and communicate concerns. Revisit help-m03-s03-check-and-communicate to consolidate the reasoning.",
              "helpAnchor": "help-m03-s03-check-and-communicate"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Skip the practice and copy a finished response without applying the idea to the situation.",
              "correct": false,
              "feedback": "The practice should require the student to apply the idea and rehearse their own reasoning before the capstone. Revisit help-m03-s03-check-and-communicate.",
              "helpAnchor": "help-m03-s03-check-and-communicate"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in allergens and safe food choices. Revisit help-m03-s03-check-and-communicate.",
              "helpAnchor": "help-m03-s03-check-and-communicate"
            }
          ]
        },
        {
          "id": "kc-m03-s03-q10",
          "label": "Formative learning evidence",
          "focus": "careful judgement",
          "theoryAnchor": "help-m03-s03-cross-contact",
          "prompt": "A menu includes an unclear packaged ingredient and a student is tempted to rely on memory instead of the current label. Which final judgement is the most careful, balanced conclusion?",
          "hint": "Compare each option with the ideas under “Check labels and communicate concerns”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Ingredient labels should be checked every time, and students should never guess that a food is safe.",
              "correct": true,
              "feedback": "This conclusion uses the section evidence carefully and connects it to “Prevent allergen cross-contact”. Revisit help-m03-s03-cross-contact to consolidate the reasoning.",
              "helpAnchor": "help-m03-s03-cross-contact"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "If I have used a product before, I do not need to check its label again.",
              "correct": false,
              "feedback": "Ingredient information can change, so check the label on the product every time it is used. Revisit help-m03-s03-check-and-communicate. Review help-m03-s03-cross-contact.",
              "helpAnchor": "help-m03-s03-cross-contact"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m03-s03-check-and-communicate. Review help-m03-s03-cross-contact.",
              "helpAnchor": "help-m03-s03-cross-contact"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in allergens and safe food choices. Revisit help-m03-s03-check-and-communicate. Review help-m03-s03-cross-contact.",
              "helpAnchor": "help-m03-s03-cross-contact"
            }
          ]
        }
      ],
      "label": "Formative learning evidence"
    },
    {
      "sectionId": "m04-s01",
      "knowledgeCheckId": "kc-m04-s01",
      "title": "Six essential nutrients — knowledge check",
      "label": "Formative learning evidence",
      "storageKey": "yr8foodtech2026:checkset:m04-s01",
      "theoryAnchors": [
        "help-m04-s01-six-groups",
        "help-m04-s01-functions",
        "help-m04-s01-foods-as-packages"
      ],
      "sourceIds": [
        "food-knowledge",
        "student-nutrient-scaffold"
      ],
      "hintPolicy": "answer-neutral",
      "feedbackTiming": "after check only",
      "questions": [
        {
          "id": "kc-m04-s01-q1",
          "label": "Formative learning evidence",
          "storageKey": "yr8foodtech2026:check:m04-s01:q1",
          "focus": "essential idea",
          "theoryAnchor": "help-m04-s01-six-groups",
          "prompt": "Which statement best captures the main idea of the six essential nutrient groups?",
          "hint": "Think about both the names of the groups and the idea that each group contributes to body functions.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Carbohydrates, protein, fats, vitamins, minerals and water are all essential nutrient groups with important roles in the body.",
              "correct": true,
              "feedback": "Correct. These are the six essential nutrient groups, and each has important roles. Review help-m04-s01-six-groups for the group names and familiar food sources.",
              "helpAnchor": "help-m04-s01-six-groups"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Only carbohydrates, protein and fats are essential because the other groups do not affect body functions.",
              "correct": false,
              "feedback": "Not quite. Vitamins, minerals and water are also essential and support normal body processes. Review help-m04-s01-six-groups for all six groups.",
              "helpAnchor": "help-m04-s01-six-groups"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Every food provides all six nutrient groups in equal amounts.",
              "correct": false,
              "feedback": "Not quite. Foods can contain several nutrients, but not necessarily all six or in equal amounts. Review help-m04-s01-six-groups for the six groups and help-m04-s01-foods-as-packages for how foods contain different nutrient combinations.",
              "helpAnchor": "help-m04-s01-six-groups"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "The six nutrient groups are different types of foods that should always be eaten separately.",
              "correct": false,
              "feedback": "Not quite. Nutrient groups describe nutrients rather than separate food categories, and nutrients work together in foods and dishes. Review help-m04-s01-six-groups for the six nutrient groups.",
              "helpAnchor": "help-m04-s01-six-groups"
            }
          ]
        },
        {
          "id": "kc-m04-s01-q2",
          "label": "Formative learning evidence",
          "storageKey": "yr8foodtech2026:check:m04-s01:q2",
          "focus": "precise detail",
          "theoryAnchor": "help-m04-s01-functions",
          "prompt": "A student is identifying the nutrient especially associated with supplying materials for growth and repair. Which nutrient should they select?",
          "hint": "Focus on the function described, not simply whether the nutrient can provide energy.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Protein",
              "correct": true,
              "feedback": "Correct. Protein is especially important for growth and repair. Review help-m04-s01-functions for the different jobs of nutrients.",
              "helpAnchor": "help-m04-s01-functions"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Carbohydrate",
              "correct": false,
              "feedback": "Not quite. Carbohydrate is an important source of energy, while protein is especially linked with growth and repair. Review help-m04-s01-functions.",
              "helpAnchor": "help-m04-s01-functions"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Fat",
              "correct": false,
              "feedback": "Not quite. Fats provide concentrated energy and have other roles, but protein is especially important for growth and repair. Review help-m04-s01-functions.",
              "helpAnchor": "help-m04-s01-functions"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Water",
              "correct": false,
              "feedback": "Not quite. Water supports transport, chemical reactions and temperature regulation, while protein is especially important for growth and repair. Review help-m04-s01-functions.",
              "helpAnchor": "help-m04-s01-functions"
            }
          ]
        },
        {
          "id": "kc-m04-s01-q3",
          "label": "Formative learning evidence",
          "storageKey": "yr8foodtech2026:check:m04-s01:q3",
          "focus": "concept connection",
          "theoryAnchor": "help-m04-s01-functions",
          "prompt": "Why can a mixed dish provide broader nutritional contributions than an ingredient chosen for only one main function?",
          "hint": "Consider whether nutrients operate independently or alongside one another in a dish.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Different ingredients can contribute different nutrients, and the body uses nutrients together for several functions.",
              "correct": true,
              "feedback": "Correct. A varied dish can contribute several useful nutrients because nutrients have different roles and work together. Review help-m04-s01-functions.",
              "helpAnchor": "help-m04-s01-functions"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Mixing foods causes every nutrient to change into carbohydrate so the body can use it for energy.",
              "correct": false,
              "feedback": "Not quite. Nutrients keep their different roles; they do not all become carbohydrate. Review help-m04-s01-functions for how nutrient functions differ and overlap.",
              "helpAnchor": "help-m04-s01-functions"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "A mixed dish is useful only when every ingredient supplies exactly the same nutrients.",
              "correct": false,
              "feedback": "Not quite. The benefit can come from ingredients contributing different nutrients rather than identical ones. Review help-m04-s01-functions.",
              "helpAnchor": "help-m04-s01-functions"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Only one nutrient is active at a time, so a mixed dish lets the body choose which nutrient to use.",
              "correct": false,
              "feedback": "Not quite. The body uses nutrients together rather than relying on a single nutrient at a time. Review help-m04-s01-functions.",
              "helpAnchor": "help-m04-s01-functions"
            }
          ]
        },
        {
          "id": "kc-m04-s01-q4",
          "label": "Formative learning evidence",
          "storageKey": "yr8foodtech2026:check:m04-s01:q4",
          "focus": "process or sequence",
          "theoryAnchor": "help-m04-s01-foods-as-packages",
          "prompt": "When analysing the nutrient contribution of a new party-food recipe, which sequence best follows the section approach?",
          "hint": "Begin with what individual ingredients contribute, then move towards a judgement about the complete dish.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Identify likely nutrients in each ingredient, compare their contributions, then explain how the ingredients combine in the finished dish.",
              "correct": true,
              "feedback": "Correct. This sequence treats foods as nutrient packages before considering how the complete dish brings contributions together. Review help-m04-s01-foods-as-packages.",
              "helpAnchor": "help-m04-s01-foods-as-packages"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Label the whole dish as good or bad first, then choose one nutrient to justify that label.",
              "correct": false,
              "feedback": "Not quite. The section advises against starting with a simple good-or-bad label. First identify nutrient contributions and consider the whole dish. Review help-m04-s01-foods-as-packages.",
              "helpAnchor": "help-m04-s01-foods-as-packages"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Assign every ingredient to one nutrient group, ignore its other nutrients, then rank the ingredients from best to worst.",
              "correct": false,
              "feedback": "Not quite. Most foods contribute more than one nutrient, so forcing each ingredient into only one group loses useful information. Review help-m04-s01-foods-as-packages.",
              "helpAnchor": "help-m04-s01-foods-as-packages"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Choose the ingredient with the most water, then assume it determines the nutrient value of the entire dish.",
              "correct": false,
              "feedback": "Not quite. One ingredient or nutrient should not be treated as the whole story. Compare the contributions of multiple ingredients. Review help-m04-s01-foods-as-packages.",
              "helpAnchor": "help-m04-s01-foods-as-packages"
            }
          ]
        },
        {
          "id": "kc-m04-s01-q5",
          "label": "Formative learning evidence",
          "storageKey": "yr8foodtech2026:check:m04-s01:q5",
          "focus": "vocabulary in context",
          "theoryAnchor": "help-m04-s01-foods-as-packages",
          "prompt": "In this section, what does describing a food as a nutrient package mean?",
          "hint": "Think about whether one food normally contains a single nutrient or a combination.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "A food can contain several different nutrients in different amounts.",
              "correct": true,
              "feedback": "Correct. Nutrient package means that a food can provide a combination of nutrients rather than only one. Review help-m04-s01-foods-as-packages.",
              "helpAnchor": "help-m04-s01-foods-as-packages"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "A food has one main nutrient and contains no other nutrients worth considering.",
              "correct": false,
              "feedback": "Not quite. Even when one contribution stands out, a food can still contain several other nutrients. Review help-m04-s01-foods-as-packages.",
              "helpAnchor": "help-m04-s01-foods-as-packages"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "A packaged food automatically contains more nutrients than a food prepared from fresh ingredients.",
              "correct": false,
              "feedback": "Not quite. Nutrient package is a way of describing the combination of nutrients in a food, not whether it comes in commercial packaging. Review help-m04-s01-foods-as-packages.",
              "helpAnchor": "help-m04-s01-foods-as-packages"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "A food should be placed into whichever single nutrient group appears first on a recipe list.",
              "correct": false,
              "feedback": "Not quite. The idea of a nutrient package is that foods often contribute several nutrients, so they should not be forced into one group only. Review help-m04-s01-foods-as-packages.",
              "helpAnchor": "help-m04-s01-foods-as-packages"
            }
          ]
        },
        {
          "id": "kc-m04-s01-q6",
          "label": "Formative learning evidence",
          "storageKey": "yr8foodtech2026:check:m04-s01:q6",
          "focus": "worked-example interpretation",
          "theoryAnchor": "help-m04-s01-foods-as-packages",
          "prompt": "In the worked party-food example using wholegrain bread, egg, avocado, tomato and yoghurt, which interpretation best explains why the combination is more informative than ranking one ingredient as best?",
          "hint": "Consider the different nutrient contributions named across the five ingredients.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "The ingredients contribute overlapping and different nutrients, creating a wider nutrient mix in the complete dish.",
              "correct": true,
              "feedback": "Correct. Bread, egg, avocado, tomato and yoghurt each bring different and sometimes overlapping contributions, so the whole dish provides a broader mix. Review help-m04-s01-foods-as-packages.",
              "helpAnchor": "help-m04-s01-foods-as-packages"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Wholegrain bread is the only useful ingredient because carbohydrate is the only nutrient needed for a party food.",
              "correct": false,
              "feedback": "Not quite. Carbohydrate is important, but the other ingredients add protein, fats, vitamins, minerals and water. Review help-m04-s01-foods-as-packages.",
              "helpAnchor": "help-m04-s01-foods-as-packages"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Tomato should be ranked highest because foods containing water automatically provide every essential nutrient.",
              "correct": false,
              "feedback": "Not quite. Tomato contributes vitamins, minerals and water, but it does not automatically provide all six nutrient groups in useful amounts. Review help-m04-s01-foods-as-packages.",
              "helpAnchor": "help-m04-s01-foods-as-packages"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Egg and yoghurt make the other ingredients nutritionally unnecessary because protein replaces the functions of other nutrients.",
              "correct": false,
              "feedback": "Not quite. Protein has important roles, but it does not replace the functions of carbohydrates, fats, vitamins, minerals or water. Review help-m04-s01-foods-as-packages and help-m04-s01-functions.",
              "helpAnchor": "help-m04-s01-foods-as-packages"
            }
          ]
        },
        {
          "id": "kc-m04-s01-q7",
          "label": "Formative learning evidence",
          "storageKey": "yr8foodtech2026:check:m04-s01:q7",
          "focus": "likely misconception",
          "theoryAnchor": "help-m04-s01-foods-as-packages",
          "prompt": "A student says yoghurt belongs only in the protein group, so its other nutrient contributions can be ignored. Which response best corrects the misconception?",
          "hint": "Use the section idea that one food can make more than one nutrient contribution.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Yoghurt can contribute protein as well as water, vitamins and minerals, so it should not be treated as a one-nutrient food.",
              "correct": true,
              "feedback": "Correct. The section specifically treats foods as nutrient packages, and yoghurt can contribute several nutrients. Review help-m04-s01-foods-as-packages.",
              "helpAnchor": "help-m04-s01-foods-as-packages"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Yoghurt should be moved from protein to the water group because a food can belong to only one nutrient group.",
              "correct": false,
              "feedback": "Not quite. The problem is the assumption that a food must belong to only one group. Yoghurt can contribute several nutrients. Review help-m04-s01-foods-as-packages.",
              "helpAnchor": "help-m04-s01-foods-as-packages"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Yoghurt has no important protein because any food containing water must be classified only as a source of water.",
              "correct": false,
              "feedback": "Not quite. Water content does not cancel other nutrient contributions. Yoghurt can contribute both protein and water, among other nutrients. Review help-m04-s01-foods-as-packages.",
              "helpAnchor": "help-m04-s01-foods-as-packages"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "The student is correct because only the largest nutrient contribution in a food should be discussed.",
              "correct": false,
              "feedback": "Not quite. The section encourages identifying several nutrient contributions rather than reducing a food to only one. Review help-m04-s01-foods-as-packages.",
              "helpAnchor": "help-m04-s01-foods-as-packages"
            }
          ]
        },
        {
          "id": "kc-m04-s01-q8",
          "label": "Formative learning evidence",
          "storageKey": "yr8foodtech2026:check:m04-s01:q8",
          "focus": "authentic practical or design decision",
          "theoryAnchor": "help-m04-s01-six-groups",
          "prompt": "A class is adapting a simple party snack made from plain crackers and tomato. Which addition is most clearly justified if the design goal is to broaden the nutrient mix by adding a recognised protein source?",
          "hint": "Look for an ingredient identified in the section as a protein source, then consider what it adds to the existing snack.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Add hummus made from chickpeas and tahini.",
              "correct": true,
              "feedback": "Correct. Chickpeas are identified as a protein source, and hummus can also contribute carbohydrate, fats, vitamins and minerals. Review help-m04-s01-six-groups for protein sources.",
              "helpAnchor": "help-m04-s01-six-groups"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Add extra tomato only.",
              "correct": false,
              "feedback": "Not quite. Tomato can contribute vitamins, minerals and water, but it is not identified here as a main protein source. Review help-m04-s01-six-groups.",
              "helpAnchor": "help-m04-s01-six-groups"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Add a drizzle of oil only.",
              "correct": false,
              "feedback": "Not quite. Oil is a source of fat, so it does not directly meet the stated goal of adding a recognised protein source. Review help-m04-s01-six-groups.",
              "helpAnchor": "help-m04-s01-six-groups"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Replace the tomato with avocado only.",
              "correct": false,
              "feedback": "Not quite. Avocado is identified as a source of fats, so this change does not most directly meet the goal of adding a recognised protein source. Review help-m04-s01-six-groups.",
              "helpAnchor": "help-m04-s01-six-groups"
            }
          ]
        },
        {
          "id": "kc-m04-s01-q9",
          "label": "Formative learning evidence",
          "storageKey": "yr8foodtech2026:check:m04-s01:q9",
          "focus": "compare or evaluate",
          "theoryAnchor": "help-m04-s01-foods-as-packages",
          "prompt": "Two students compare snack fillings. Student A chooses avocado because it contributes fats. Student B chooses hummus because it can contribute carbohydrate, protein, fats, vitamins and minerals. Which evaluation best applies the section thinking?",
          "hint": "Avoid judging only by the number of nutrient groups. Think about the contribution of each ingredient and the rest of the dish.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Neither choice can be called automatically better; evaluate what each contributes and how it fits with the other ingredients in the complete snack.",
              "correct": true,
              "feedback": "Correct. The section recommends comparing nutrient contributions in the context of the whole dish rather than labelling one food as automatically best. Review help-m04-s01-foods-as-packages.",
              "helpAnchor": "help-m04-s01-foods-as-packages"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Hummus is always better because the ingredient linked with more nutrient groups must be the best choice in every dish.",
              "correct": false,
              "feedback": "Not quite. A wider range of contributions can be useful, but the section does not support an automatic best-food ranking without considering the whole dish. Review help-m04-s01-foods-as-packages.",
              "helpAnchor": "help-m04-s01-foods-as-packages"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Avocado is always better because fats provide concentrated energy and therefore make other nutrients unnecessary.",
              "correct": false,
              "feedback": "Not quite. Fats have important roles, but other nutrients also have important functions and are not made unnecessary. Review help-m04-s01-foods-as-packages and help-m04-s01-functions.",
              "helpAnchor": "help-m04-s01-foods-as-packages"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "The two ingredients should be considered identical because all foods contain exactly the same nutrients in the same amounts.",
              "correct": false,
              "feedback": "Not quite. Foods can contain different combinations and amounts of nutrients, which is why comparing their contributions is useful. Review help-m04-s01-foods-as-packages.",
              "helpAnchor": "help-m04-s01-foods-as-packages"
            }
          ]
        },
        {
          "id": "kc-m04-s01-q10",
          "label": "Formative learning evidence",
          "storageKey": "yr8foodtech2026:check:m04-s01:q10",
          "focus": "transfer to a fresh situation",
          "theoryAnchor": "help-m04-s01-functions",
          "prompt": "A student designs a breakfast bowl using oats, yoghurt, banana and seeds. Which explanation best transfers the section ideas to this new combination?",
          "hint": "Identify likely contributions from several ingredients rather than searching for one hero ingredient.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "The bowl can provide a mix of nutrients because oats and banana can contribute carbohydrate, yoghurt can contribute protein and water, and seeds can contribute fats along with other nutrients.",
              "correct": true,
              "feedback": "Correct. This applies the idea that varied ingredients can contribute overlapping and different nutrients that work together in the complete dish. Review help-m04-s01-functions.",
              "helpAnchor": "help-m04-s01-functions"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Only the oats need to be considered because carbohydrate is the only nutrient that matters at breakfast.",
              "correct": false,
              "feedback": "Not quite. Carbohydrate is important for energy, but protein, fats, vitamins, minerals and water also have important roles. Review help-m04-s01-functions.",
              "helpAnchor": "help-m04-s01-functions"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Each ingredient must be assigned to one nutrient group before the bowl can be described accurately.",
              "correct": false,
              "feedback": "Not quite. Foods commonly provide more than one nutrient, so assigning each ingredient to only one group can hide useful contributions. Review help-m04-s01-functions and help-m04-s01-foods-as-packages.",
              "helpAnchor": "help-m04-s01-functions"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "The bowl contains a useful nutrient mix only if every ingredient provides all six essential nutrients.",
              "correct": false,
              "feedback": "Not quite. Ingredients can contribute different nutrients, and their combined contributions can broaden the nutrient mix without every ingredient supplying all six groups. Review help-m04-s01-functions.",
              "helpAnchor": "help-m04-s01-functions"
            }
          ]
        }
      ]
    },
    {
      "sectionId": "m04-s02",
      "knowledgeCheckId": "kc-m04-s02",
      "title": "Food groups and balanced choices — knowledge check",
      "label": "Formative learning evidence",
      "theoryAnchors": [
        "help-m04-s02-five-food-groups",
        "help-m04-s02-balance-over-time",
        "help-m04-s02-menu-variety"
      ],
      "sourceIds": [
        "food-knowledge",
        "official-australian-dietary-guidance"
      ],
      "hintPolicy": "answer-neutral",
      "feedbackTiming": "after check only",
      "questions": [
        {
          "id": "kc-m04-s02-q1",
          "label": "Formative learning evidence",
          "focus": "essential idea",
          "theoryAnchor": "help-m04-s02-balance-over-time",
          "prompt": "Which statement best describes balance when reviewing a pattern of eating?",
          "hint": "Think about whether balance applies to one occasion or a broader pattern.",
          "options": [
            {
              "id": "a",
              "text": "Every snack must contain all five food groups",
              "correct": false,
              "feedback": "This treats each occasion as a perfect plate rather than considering balance across time. Review help-m04-s02-balance-over-time.",
              "helpAnchor": "help-m04-s02-balance-over-time",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Food choices should be considered across meals and time",
              "correct": true,
              "feedback": "Balance concerns the overall pattern across meals and time, not perfection at each occasion. Review help-m04-s02-balance-over-time.",
              "helpAnchor": "help-m04-s02-balance-over-time",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Each food group must appear in equal amounts",
              "correct": false,
              "feedback": "The groups do not need to appear in equal amounts at every eating occasion. Review help-m04-s02-balance-over-time.",
              "helpAnchor": "help-m04-s02-balance-over-time",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Only foods eaten at dinner determine balance",
              "correct": false,
              "feedback": "Considering dinner alone ignores the broader pattern of foods eaten across meals and time. Review help-m04-s02-balance-over-time.",
              "helpAnchor": "help-m04-s02-balance-over-time",
              "label": "Formative learning evidence"
            }
          ]
        },
        {
          "id": "kc-m04-s02-q2",
          "label": "Formative learning evidence",
          "focus": "precise detail",
          "theoryAnchor": "help-m04-s02-five-food-groups",
          "prompt": "Which choice correctly identifies water in the Australian Guide to Healthy Eating?",
          "hint": "Recall how drinks are represented alongside the five food groups.",
          "options": [
            {
              "id": "a",
              "text": "It forms a sixth food group",
              "correct": false,
              "feedback": "Water sits alongside the five food groups rather than forming a sixth group. Review help-m04-s02-five-food-groups.",
              "helpAnchor": "help-m04-s02-five-food-groups",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "It belongs in the fruit group",
              "correct": false,
              "feedback": "Fruit is one food group, while water is shown separately as the main drink. Review help-m04-s02-five-food-groups.",
              "helpAnchor": "help-m04-s02-five-food-groups",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "It is shown as the main drink",
              "correct": true,
              "feedback": "Water is shown alongside the five food groups as the main drink. Review help-m04-s02-five-food-groups.",
              "helpAnchor": "help-m04-s02-five-food-groups",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "It is classified as discretionary",
              "correct": false,
              "feedback": "Water is the main drink, unlike foods and drinks classified as discretionary choices. Review help-m04-s02-balance-over-time.",
              "helpAnchor": "help-m04-s02-balance-over-time",
              "label": "Formative learning evidence"
            }
          ]
        },
        {
          "id": "kc-m04-s02-q3",
          "label": "Formative learning evidence",
          "focus": "concept connection",
          "theoryAnchor": "help-m04-s02-menu-variety",
          "prompt": "Why can using carrot, cucumber and capsicum improve a vegetable wrap menu?",
          "hint": "Consider what changing ingredients within one food group can add.",
          "options": [
            {
              "id": "a",
              "text": "They create different colours, textures and variety",
              "correct": true,
              "feedback": "Different vegetables broaden colour, texture and variety within the same food group. Review help-m04-s02-menu-variety.",
              "helpAnchor": "help-m04-s02-menu-variety",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "They make other food groups unnecessary",
              "correct": false,
              "feedback": "Variety within vegetables does not replace contributions made by foods from other groups. Review help-m04-s02-menu-variety.",
              "helpAnchor": "help-m04-s02-menu-variety",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "They make every wrap nutritionally identical",
              "correct": false,
              "feedback": "Foods within a group are not identical and can contribute different nutrients and qualities. Review help-m04-s02-five-food-groups.",
              "helpAnchor": "help-m04-s02-five-food-groups",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "They turn the wrap into a discretionary choice",
              "correct": false,
              "feedback": "Adding varied vegetables does not make a wrap a discretionary choice. Review help-m04-s02-balance-over-time.",
              "helpAnchor": "help-m04-s02-balance-over-time",
              "label": "Formative learning evidence"
            }
          ]
        },
        {
          "id": "kc-m04-s02-q4",
          "label": "Formative learning evidence",
          "focus": "process or sequence",
          "theoryAnchor": "help-m04-s02-menu-variety",
          "prompt": "When reviewing a party menu, what is the most useful first step?",
          "hint": "Begin by establishing what the menu already contributes before judging its variety.",
          "options": [
            {
              "id": "a",
              "text": "Remove every discretionary food immediately",
              "correct": false,
              "feedback": "Discretionary choices can be considered within the overall pattern rather than automatically removed. Review help-m04-s02-balance-over-time.",
              "helpAnchor": "help-m04-s02-balance-over-time",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Identify which food groups the menu represents",
              "correct": true,
              "feedback": "Identifying represented food groups establishes a basis for reviewing variety, texture and enjoyment. Review help-m04-s02-menu-variety.",
              "helpAnchor": "help-m04-s02-menu-variety",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Require every item to contain five groups",
              "correct": false,
              "feedback": "Individual items do not need to contain every food group for an overall balanced pattern. Review help-m04-s02-balance-over-time.",
              "helpAnchor": "help-m04-s02-balance-over-time",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Judge the menu only by colour",
              "correct": false,
              "feedback": "Colour is useful, but menu review also considers ingredients, groups, tastes, textures and enjoyment. Review help-m04-s02-menu-variety.",
              "helpAnchor": "help-m04-s02-menu-variety",
              "label": "Formative learning evidence"
            }
          ]
        },
        {
          "id": "kc-m04-s02-q5",
          "label": "Formative learning evidence",
          "focus": "vocabulary in context",
          "theoryAnchor": "help-m04-s02-balance-over-time",
          "prompt": "At a celebration, what does describing chocolate as a discretionary choice mean?",
          "hint": "Focus on its place in an overall eating pattern rather than a judgement.",
          "options": [
            {
              "id": "a",
              "text": "It must never be included",
              "correct": false,
              "feedback": "Discretionary choices may be enjoyed sometimes within an overall varied eating pattern. Review help-m04-s02-balance-over-time.",
              "helpAnchor": "help-m04-s02-balance-over-time",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "It makes the entire menu unhealthy",
              "correct": false,
              "feedback": "One discretionary choice does not justify judging the whole menu with a simple label. Review help-m04-s02-balance-over-time.",
              "helpAnchor": "help-m04-s02-balance-over-time",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "It counts as one five-group serving",
              "correct": false,
              "feedback": "Discretionary choices sit outside the five food groups rather than counting as another group. Review help-m04-s02-balance-over-time.",
              "helpAnchor": "help-m04-s02-balance-over-time",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "It can fit sometimes within the overall pattern",
              "correct": true,
              "feedback": "A discretionary choice can be enjoyed sometimes while considering the overall pattern of eating. Review help-m04-s02-balance-over-time.",
              "helpAnchor": "help-m04-s02-balance-over-time",
              "label": "Formative learning evidence"
            }
          ]
        },
        {
          "id": "kc-m04-s02-q6",
          "label": "Formative learning evidence",
          "focus": "worked-example interpretation",
          "theoryAnchor": "help-m04-s02-menu-variety",
          "prompt": "What does the proposed party menu demonstrate through wraps, fruit, yoghurt, water and chocolate?",
          "hint": "Consider nourishment, sensory variety, drinks and celebration together.",
          "options": [
            {
              "id": "a",
              "text": "Only perfect individual foods create balance",
              "correct": false,
              "feedback": "The example evaluates the combined menu rather than requiring each individual food to be perfect. Review help-m04-s02-balance-over-time.",
              "helpAnchor": "help-m04-s02-balance-over-time",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Several groups, variety and enjoyment can coexist",
              "correct": true,
              "feedback": "The menu combines several food groups, varied sensory qualities and enjoyment within one celebration. Review help-m04-s02-menu-variety.",
              "helpAnchor": "help-m04-s02-menu-variety",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Chocolate should replace the fruit skewers",
              "correct": false,
              "feedback": "Chocolate is recognised as discretionary while fruit contributes to the fruit food group. Review help-m04-s02-balance-over-time.",
              "helpAnchor": "help-m04-s02-balance-over-time",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Water supplies the missing fifth food group",
              "correct": false,
              "feedback": "Water is the main drink and is not an additional food group. Review help-m04-s02-five-food-groups.",
              "helpAnchor": "help-m04-s02-five-food-groups",
              "label": "Formative learning evidence"
            }
          ]
        },
        {
          "id": "kc-m04-s02-q7",
          "label": "Formative learning evidence",
          "focus": "likely misconception",
          "theoryAnchor": "help-m04-s02-balance-over-time",
          "prompt": "A student says lunch is unbalanced because it lacks one food group. What is the best response?",
          "hint": "Check whether one eating occasion must contain everything.",
          "options": [
            {
              "id": "a",
              "text": "Every lunch must contain all five groups",
              "correct": false,
              "feedback": "Requiring all five groups at every lunch confuses one occasion with balance across time. Review help-m04-s02-balance-over-time.",
              "helpAnchor": "help-m04-s02-balance-over-time",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Missing one group makes lunch discretionary",
              "correct": false,
              "feedback": "A meal does not become discretionary simply because one food group is absent. Review help-m04-s02-balance-over-time.",
              "helpAnchor": "help-m04-s02-balance-over-time",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Consider lunch within the wider eating pattern",
              "correct": true,
              "feedback": "Balance is considered across meals and time, so lunch should be viewed within the wider pattern. Review help-m04-s02-balance-over-time.",
              "helpAnchor": "help-m04-s02-balance-over-time",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Add equal amounts from every group",
              "correct": false,
              "feedback": "Food groups do not need equal representation at each eating occasion. Review help-m04-s02-balance-over-time.",
              "helpAnchor": "help-m04-s02-balance-over-time",
              "label": "Formative learning evidence"
            }
          ]
        },
        {
          "id": "kc-m04-s02-q8",
          "label": "Formative learning evidence",
          "focus": "authentic practical or design decision",
          "theoryAnchor": "help-m04-s02-menu-variety",
          "prompt": "Which change best broadens a party wrap menu while keeping its design appealing?",
          "hint": "Look for a change that adds useful contrast and food-group variety.",
          "options": [
            {
              "id": "a",
              "text": "Use only one filling in every wrap",
              "correct": false,
              "feedback": "Repeating one filling limits the ingredient and sensory variety available across the menu. Review help-m04-s02-menu-variety.",
              "helpAnchor": "help-m04-s02-menu-variety",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Replace water with sugary drinks only",
              "correct": false,
              "feedback": "Water is identified as the main drink, while sugary drinks can be discretionary choices. Review help-m04-s02-balance-over-time.",
              "helpAnchor": "help-m04-s02-balance-over-time",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Remove vegetables to simplify colours",
              "correct": false,
              "feedback": "Removing vegetables reduces food-group representation and opportunities for colour and texture variety. Review help-m04-s02-menu-variety.",
              "helpAnchor": "help-m04-s02-menu-variety",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Offer varied vegetables and different suitable fillings",
              "correct": true,
              "feedback": "Varied vegetables and fillings can broaden food groups, colours, flavours and textures. Review help-m04-s02-menu-variety.",
              "helpAnchor": "help-m04-s02-menu-variety",
              "label": "Formative learning evidence"
            }
          ]
        },
        {
          "id": "kc-m04-s02-q9",
          "label": "Formative learning evidence",
          "focus": "compare or evaluate",
          "theoryAnchor": "help-m04-s02-menu-variety",
          "prompt": "Which menu shows greater variety within food groups and sensory qualities?",
          "hint": "Compare ingredient range as well as colours, tastes and textures.",
          "options": [
            {
              "id": "a",
              "text": "White rolls, plain crackers and water",
              "correct": false,
              "feedback": "This menu has limited ingredient, food-group and sensory variety compared with broader combinations. Review help-m04-s02-menu-variety.",
              "helpAnchor": "help-m04-s02-menu-variety",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Carrot wraps, carrot sticks and carrot salad",
              "correct": false,
              "feedback": "Repeated carrot provides less within-group variety than using different vegetables and other groups. Review help-m04-s02-menu-variety.",
              "helpAnchor": "help-m04-s02-menu-variety",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Vegetable wraps, fruit skewers, yoghurt dip and water",
              "correct": true,
              "feedback": "This combination offers several food groups plus contrasting colours, tastes and textures. Review help-m04-s02-menu-variety.",
              "helpAnchor": "help-m04-s02-menu-variety",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Cake, chips, confectionery and sugary drinks",
              "correct": false,
              "feedback": "Different discretionary foods do not provide the same food-group representation as a varied mixed menu. Review help-m04-s02-balance-over-time.",
              "helpAnchor": "help-m04-s02-balance-over-time",
              "label": "Formative learning evidence"
            }
          ]
        },
        {
          "id": "kc-m04-s02-q10",
          "label": "Formative learning evidence",
          "focus": "transfer to a fresh situation",
          "theoryAnchor": "help-m04-s02-five-food-groups",
          "prompt": "A breakfast has wholegrain toast, egg, berries and water. Which review is most accurate?",
          "hint": "Identify contributions first, then consider the meal within a wider pattern.",
          "options": [
            {
              "id": "a",
              "text": "It represents several groups within a wider pattern",
              "correct": true,
              "feedback": "Toast, egg and berries represent several groups, while water is the main drink. Review help-m04-s02-five-food-groups.",
              "helpAnchor": "help-m04-s02-five-food-groups",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "It fails because yoghurt is absent",
              "correct": false,
              "feedback": "One meal does not need every food group because balance is considered across meals and time. Review help-m04-s02-balance-over-time.",
              "helpAnchor": "help-m04-s02-balance-over-time",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Water counts as its fifth food group",
              "correct": false,
              "feedback": "Water is shown alongside the five groups as the main drink, not as another group. Review help-m04-s02-five-food-groups.",
              "helpAnchor": "help-m04-s02-five-food-groups",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "All four items belong to one group",
              "correct": false,
              "feedback": "Wholegrain toast, egg and berries belong to different food groups, with water shown separately. Review help-m04-s02-five-food-groups.",
              "helpAnchor": "help-m04-s02-five-food-groups",
              "label": "Formative learning evidence"
            }
          ]
        }
      ]
    },
    {
      "sectionId": "m04-s03",
      "knowledgeCheckId": "kc-m04-s03",
      "title": "Added sugar and informed media choices — knowledge check",
      "theoryAnchors": [
        "help-m04-s03-sugar-language",
        "help-m04-s03-label-reading",
        "help-m04-s03-media-lens"
      ],
      "sourceIds": [
        "sugar-media-study",
        "food-knowledge",
        "official-australian-dietary-guidance"
      ],
      "hintPolicy": "answer-neutral",
      "feedbackTiming": "after check only",
      "questions": [
        {
          "id": "kc-m04-s03-q1",
          "focus": "essential idea",
          "theoryAnchor": "help-m04-s03-sugar-language",
          "prompt": "Which statement best explains the difference between naturally occurring and added sugars?",
          "hint": "Think about where each type of sugar enters the food.",
          "options": [
            {
              "id": "a",
              "text": "Natural sugars occur in foods; added sugars enter during preparation or processing.",
              "correct": true,
              "feedback": "Correct: naturally occurring sugars are already present, while added sugars enter during manufacturing, cooking or preparation. Review help-m04-s03-sugar-language.",
              "helpAnchor": "help-m04-s03-sugar-language",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Natural sugars are unsweetened; added sugars always taste very sweet.",
              "correct": false,
              "feedback": "Taste does not determine whether sugar occurs naturally or was added during preparation or processing. Review help-m04-s03-sugar-language.",
              "helpAnchor": "help-m04-s03-sugar-language",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Natural sugars occur only in fruit; added sugars occur in milk.",
              "correct": false,
              "feedback": "Naturally occurring sugars can be present in both fruit and milk, so food type alone does not separate them. Review help-m04-s03-sugar-language.",
              "helpAnchor": "help-m04-s03-sugar-language",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Natural and added sugars are separately listed on every nutrition panel.",
              "correct": false,
              "feedback": "Nutrition Information Panels usually show total sugars rather than separating naturally occurring and added sugars. Review help-m04-s03-sugar-language.",
              "helpAnchor": "help-m04-s03-sugar-language",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m04-s03-q2",
          "focus": "precise detail",
          "theoryAnchor": "help-m04-s03-label-reading",
          "prompt": "What does an ingredient appearing early in an ingredient list usually indicate?",
          "hint": "Consider how ingredient lists are generally ordered.",
          "options": [
            {
              "id": "a",
              "text": "It was present in a larger amount by weight.",
              "correct": true,
              "feedback": "Correct: ingredients are generally listed in descending order by weight when the product was made. Review help-m04-s03-label-reading.",
              "helpAnchor": "help-m04-s03-label-reading",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "It provides the most energy per serving.",
              "correct": false,
              "feedback": "Ingredient order reflects weight during manufacture, not which ingredient provides the most energy. Review help-m04-s03-label-reading.",
              "helpAnchor": "help-m04-s03-label-reading",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "It is the healthiest ingredient in the product.",
              "correct": false,
              "feedback": "Ingredient position indicates relative weight, not whether an ingredient should be judged healthiest. Review help-m04-s03-label-reading.",
              "helpAnchor": "help-m04-s03-label-reading",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "It appears in the largest serving recommended.",
              "correct": false,
              "feedback": "Ingredient order relates to amounts used when made, not the recommended serving size. Review help-m04-s03-label-reading.",
              "helpAnchor": "help-m04-s03-label-reading",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m04-s03-q3",
          "focus": "concept connection",
          "theoryAnchor": "help-m04-s03-sugar-language",
          "prompt": "Why should total sugars and the ingredient list be considered together?",
          "hint": "Ask what each part of the label can and cannot show.",
          "options": [
            {
              "id": "a",
              "text": "Together they give more context about amount and possible sugar sources.",
              "correct": true,
              "feedback": "Correct: total sugars gives an amount while ingredients and food type help investigate where sugars may come from. Review help-m04-s03-sugar-language.",
              "helpAnchor": "help-m04-s03-sugar-language",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Together they reveal the exact amount of every added sugar.",
              "correct": false,
              "feedback": "The panel usually reports total sugars, so these sources do not reveal exact amounts of each added sugar. Review help-m04-s03-sugar-language.",
              "helpAnchor": "help-m04-s03-sugar-language",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Together they prove whether a food is good or bad.",
              "correct": false,
              "feedback": "Label evidence supports informed description and comparison rather than a simple good-or-bad judgement. Review help-m04-s03-sugar-language.",
              "helpAnchor": "help-m04-s03-sugar-language",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Together they show how persuasive the package design is.",
              "correct": false,
              "feedback": "Sugar information helps investigate the food, while persuasive design is examined using a media lens. Review help-m04-s03-media-lens.",
              "helpAnchor": "help-m04-s03-media-lens",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m04-s03-q4",
          "focus": "process or sequence",
          "theoryAnchor": "help-m04-s03-label-reading",
          "prompt": "Which approach gives the fairest comparison between two similar snack bars?",
          "hint": "Use the same evidence basis for both products.",
          "options": [
            {
              "id": "a",
              "text": "Compare sugars per 100 g, ingredients and serving context for both.",
              "correct": true,
              "feedback": "Correct: like products should be compared using consistent label information and their serving context. Review help-m04-s03-label-reading.",
              "helpAnchor": "help-m04-s03-label-reading",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Compare one front claim with the other product's serving size.",
              "correct": false,
              "feedback": "Using different evidence for each product prevents a consistent like-with-like comparison. Review help-m04-s03-label-reading.",
              "helpAnchor": "help-m04-s03-label-reading",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Choose whichever package looks more natural before checking labels.",
              "correct": false,
              "feedback": "Package impressions should not replace consistent label evidence when comparing similar products. Review help-m04-s03-label-reading.",
              "helpAnchor": "help-m04-s03-label-reading",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Compare sugars per serving even when serving sizes differ greatly.",
              "correct": false,
              "feedback": "Different package servings can distort comparisons, so a consistent basis such as per 100 g is more useful. Review help-m04-s03-label-reading.",
              "helpAnchor": "help-m04-s03-label-reading",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m04-s03-q5",
          "focus": "vocabulary in context",
          "theoryAnchor": "help-m04-s03-media-lens",
          "prompt": "In a media lens, what does source purpose mean?",
          "hint": "Consider what the communicator wants the audience to do or believe.",
          "options": [
            {
              "id": "a",
              "text": "What the source is trying to achieve through its message.",
              "correct": true,
              "feedback": "Correct: source purpose considers what the communicator is trying to achieve, including persuading people to choose a product. Review help-m04-s03-media-lens.",
              "helpAnchor": "help-m04-s03-media-lens",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "The amount of sugar shown per 100 g.",
              "correct": false,
              "feedback": "Sugar per 100 g is label evidence, not the purpose behind a media message. Review help-m04-s03-media-lens.",
              "helpAnchor": "help-m04-s03-media-lens",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "The order ingredients appear on the package.",
              "correct": false,
              "feedback": "Ingredient order provides product evidence, while source purpose examines what the message aims to achieve. Review help-m04-s03-media-lens.",
              "helpAnchor": "help-m04-s03-media-lens",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "The serving size a student personally prefers.",
              "correct": false,
              "feedback": "Personal serving choice provides context but does not explain the source's communication goal. Review help-m04-s03-media-lens.",
              "helpAnchor": "help-m04-s03-media-lens",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m04-s03-q6",
          "focus": "worked-example interpretation",
          "theoryAnchor": "help-m04-s03-media-lens",
          "prompt": "Why should the snack claims naturally delicious and made with wholegrains not decide the Party Task alone?",
          "hint": "Separate the impression created by a claim from supporting evidence.",
          "options": [
            {
              "id": "a",
              "text": "Both claims create impressions that need supporting label evidence.",
              "correct": true,
              "feedback": "Correct: front claims guide attention but require label evidence and context before supporting an informed comparison. Review help-m04-s03-media-lens.",
              "helpAnchor": "help-m04-s03-media-lens",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Both claims guarantee identical ingredient lists and nutrient profiles.",
              "correct": false,
              "feedback": "Different claims do not establish identical ingredients or complete nutrient profiles without further evidence. Review help-m04-s03-media-lens.",
              "helpAnchor": "help-m04-s03-media-lens",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Neither claim can influence how consumers view a product.",
              "correct": false,
              "feedback": "Advertising language can shape impressions, which is why its evidence and purpose should be examined. Review help-m04-s03-media-lens.",
              "helpAnchor": "help-m04-s03-media-lens",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Only the more colourful package provides useful product evidence.",
              "correct": false,
              "feedback": "Visual appeal may persuade, but useful comparison evidence comes from labels, reliable information and context. Review help-m04-s03-media-lens.",
              "helpAnchor": "help-m04-s03-media-lens",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m04-s03-q7",
          "focus": "likely misconception",
          "theoryAnchor": "help-m04-s03-sugar-language",
          "prompt": "A yoghurt lists 11 g total sugars per 100 g. What can you conclude from that figure alone?",
          "hint": "Focus on what total sugars reports rather than assuming its source.",
          "options": [
            {
              "id": "a",
              "text": "It reports total sugars, not necessarily how much was added.",
              "correct": true,
              "feedback": "Correct: total sugars may include naturally occurring and added sugars, so the figure alone cannot separate them. Review help-m04-s03-sugar-language.",
              "helpAnchor": "help-m04-s03-sugar-language",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Exactly 11 g of sugar was added during manufacture.",
              "correct": false,
              "feedback": "The total sugars figure does not tell you exactly how much sugar was added during manufacture. Review help-m04-s03-sugar-language.",
              "helpAnchor": "help-m04-s03-sugar-language",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "All 11 g must be naturally occurring milk sugar.",
              "correct": false,
              "feedback": "The figure alone cannot establish whether all sugars are naturally occurring because added sugars may also be present. Review help-m04-s03-sugar-language.",
              "helpAnchor": "help-m04-s03-sugar-language",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "The yoghurt is automatically unsuitable for a party menu.",
              "correct": false,
              "feedback": "A sugars figure alone does not establish suitability; ingredients, serving context and the whole menu also matter. Review help-m04-s03-sugar-language.",
              "helpAnchor": "help-m04-s03-sugar-language",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m04-s03-q8",
          "focus": "authentic practical or design decision",
          "theoryAnchor": "help-m04-s03-label-reading",
          "prompt": "Two cereals are being considered for a party menu. What evidence should guide the choice?",
          "hint": "Consider fair product evidence and how the food fits the menu.",
          "options": [
            {
              "id": "a",
              "text": "Comparable labels, ingredient lists and how each fits the menu.",
              "correct": true,
              "feedback": "Correct: compare similar products consistently and consider what each contributes within the overall menu. Review help-m04-s03-label-reading.",
              "helpAnchor": "help-m04-s03-label-reading",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Only the product with the smallest suggested serving.",
              "correct": false,
              "feedback": "Suggested servings may differ from actual amounts and should not be the sole basis for choosing. Review help-m04-s03-label-reading.",
              "helpAnchor": "help-m04-s03-label-reading",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Only whichever cereal uses the strongest health-sounding words.",
              "correct": false,
              "feedback": "Positive package language requires supporting evidence and should not determine a practical menu decision alone. Review help-m04-s03-media-lens.",
              "helpAnchor": "help-m04-s03-media-lens",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Whichever cereal has fruit pictures on its package.",
              "correct": false,
              "feedback": "Fruit images do not establish how much fruit is present, so check label evidence before deciding. Review help-m04-s03-media-lens.",
              "helpAnchor": "help-m04-s03-media-lens",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m04-s03-q9",
          "focus": "compare or evaluate",
          "theoryAnchor": "help-m04-s03-media-lens",
          "prompt": "Which evaluation best applies the five-part media lens to a wholesome energy claim?",
          "hint": "Look for reasoning that tests the message rather than accepting its tone.",
          "options": [
            {
              "id": "a",
              "text": "Check its evidence, emotion, omissions, claim and persuasive purpose.",
              "correct": true,
              "feedback": "Correct: the media lens examines claim, evidence, emotion, missing information and what the source aims to achieve. Review help-m04-s03-media-lens.",
              "helpAnchor": "help-m04-s03-media-lens",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Accept it because wholesome sounds positive and reassuring.",
              "correct": false,
              "feedback": "Positive emotional language is an impression, not evidence about the product's complete nutrient profile. Review help-m04-s03-media-lens.",
              "helpAnchor": "help-m04-s03-media-lens",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Reject it because all advertising claims must be false.",
              "correct": false,
              "feedback": "A media lens evaluates claims and evidence rather than assuming every advertising statement is false. Review help-m04-s03-media-lens.",
              "helpAnchor": "help-m04-s03-media-lens",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Judge it only by the package's fruit photographs.",
              "correct": false,
              "feedback": "Images can create impressions but do not establish ingredient quantities or the product's complete profile. Review help-m04-s03-media-lens.",
              "helpAnchor": "help-m04-s03-media-lens",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m04-s03-q10",
          "focus": "transfer to a fresh situation",
          "theoryAnchor": "help-m04-s03-media-lens",
          "prompt": "A new drink shows bright berries and says naturally refreshing. What is the strongest first investigation?",
          "hint": "Distinguish visual persuasion from evidence you can check.",
          "options": [
            {
              "id": "a",
              "text": "Identify the claim, then check ingredients and nutrition information.",
              "correct": true,
              "feedback": "Correct: identify what the message suggests, then test that impression using available product evidence. Review help-m04-s03-media-lens.",
              "helpAnchor": "help-m04-s03-media-lens",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Assume berries are the main ingredient because they dominate the image.",
              "correct": false,
              "feedback": "Bright fruit images do not establish how much fruit is present, so the ingredient list should be checked. Review help-m04-s03-media-lens.",
              "helpAnchor": "help-m04-s03-media-lens",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Assume naturally refreshing means no sugars were added.",
              "correct": false,
              "feedback": "A positive front claim does not establish whether sugars were added; investigate the label evidence. Review help-m04-s03-media-lens.",
              "helpAnchor": "help-m04-s03-media-lens",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Compare the drink with an unrelated yoghurt using package serving sizes.",
              "correct": false,
              "feedback": "Useful comparisons are like with like and use consistent information rather than unrelated foods and differing servings. Review help-m04-s03-label-reading.",
              "helpAnchor": "help-m04-s03-label-reading",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        }
      ],
      "label": "Formative learning evidence"
    },
    {
      "sectionId": "m05-s01",
      "knowledgeCheckId": "kc-m05-s01",
      "title": "Reasons for cooking — knowledge check",
      "theoryAnchors": [
        "help-m05-s01-why-cook",
        "help-m05-s01-heat-and-change",
        "help-m05-s01-method-choice"
      ],
      "sourceIds": [
        "course-program",
        "recipe-booklet",
        "food-knowledge"
      ],
      "hintPolicy": "answer-neutral",
      "feedbackTiming": "after check only",
      "label": "Formative learning evidence",
      "storageKey": "yr8foodtech2026:check:m05-s01",
      "questions": [
        {
          "id": "kc-m05-s01-q1",
          "focus": "essential idea",
          "theoryAnchor": "help-m05-s01-why-cook",
          "prompt": "Why might the same food be cooked for different purposes?",
          "hint": "Consider the different changes cooking can produce.",
          "options": [
            {
              "id": "a",
              "text": "Cooking can serve several purposes depending on the food",
              "correct": true,
              "feedback": "Correct: cooking purposes include safety where appropriate, eating quality, sensory changes, variety and sometimes longer useful life. Review help-m05-s01-why-cook.",
              "helpAnchor": "help-m05-s01-why-cook",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Cooking is always used mainly to improve nutrition",
              "correct": false,
              "feedback": "Cooking does not automatically improve nutritional value, and foods are cooked for several other purposes. Review help-m05-s01-why-cook.",
              "helpAnchor": "help-m05-s01-why-cook",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Every food is cooked primarily to extend useful life",
              "correct": false,
              "feedback": "Longer useful life is only a possible purpose for some foods, not the main purpose for every food. Review help-m05-s01-why-cook.",
              "helpAnchor": "help-m05-s01-why-cook",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "All foods need cooking before they are suitable to eat",
              "correct": false,
              "feedback": "Cooking can make particular foods more suitable for eating, but this does not apply universally. Review help-m05-s01-why-cook.",
              "helpAnchor": "help-m05-s01-why-cook",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m05-s01-q2",
          "focus": "precise detail",
          "theoryAnchor": "help-m05-s01-heat-and-change",
          "prompt": "In which direction does heat move when a hot pan heats batter?",
          "hint": "Compare the temperatures of the pan and batter.",
          "options": [
            {
              "id": "a",
              "text": "From the hotter pan into the cooler batter",
              "correct": true,
              "feedback": "Correct: heat moves from a hotter place to a cooler one. Review help-m05-s01-heat-and-change.",
              "helpAnchor": "help-m05-s01-heat-and-change",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "From the cooler batter into the hotter pan",
              "correct": false,
              "feedback": "This reverses the direction described: heat moves from hotter areas towards cooler areas. Review help-m05-s01-heat-and-change.",
              "helpAnchor": "help-m05-s01-heat-and-change",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Only sideways through the batter",
              "correct": false,
              "feedback": "Heat can move into and through food rather than travelling only sideways. Review help-m05-s01-heat-and-change.",
              "helpAnchor": "help-m05-s01-heat-and-change",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Equally in both directions from the start",
              "correct": false,
              "feedback": "The temperature difference drives heat from the hotter area towards the cooler area. Review help-m05-s01-heat-and-change.",
              "helpAnchor": "help-m05-s01-heat-and-change",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m05-s01-q3",
          "focus": "concept connection",
          "theoryAnchor": "help-m05-s01-method-choice",
          "prompt": "Why can similar ingredients develop different textures when cooked by different methods?",
          "hint": "Connect heat transfer with changes in food structure.",
          "options": [
            {
              "id": "a",
              "text": "Methods transfer heat differently and produce different changes",
              "correct": true,
              "feedback": "Correct: differences in heat transfer help produce different textures, colours, aromas and structures. Review help-m05-s01-method-choice.",
              "helpAnchor": "help-m05-s01-method-choice",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Ingredients stop responding to heat once mixed",
              "correct": false,
              "feedback": "Ingredients continue responding as heat enters the food and changes its structure. Review help-m05-s01-heat-and-change.",
              "helpAnchor": "help-m05-s01-heat-and-change",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Texture depends only on the starting ingredients",
              "correct": false,
              "feedback": "Method choice also affects texture because different methods apply heat differently. Review help-m05-s01-method-choice.",
              "helpAnchor": "help-m05-s01-method-choice",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "All methods eventually produce identical structures",
              "correct": false,
              "feedback": "Different methods can produce different structures even when starting ingredients are similar. Review help-m05-s01-method-choice.",
              "helpAnchor": "help-m05-s01-method-choice",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m05-s01-q4",
          "focus": "process or sequence",
          "theoryAnchor": "help-m05-s01-heat-and-change",
          "prompt": "Which sequence best explains what happens as food is heated?",
          "hint": "Think from energy movement to observable change.",
          "options": [
            {
              "id": "a",
              "text": "Heat enters, ingredients respond, structure changes",
              "correct": true,
              "feedback": "Correct: heat enters food, ingredients respond and changes such as setting or browning can follow. Review help-m05-s01-heat-and-change.",
              "helpAnchor": "help-m05-s01-heat-and-change",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Structure changes, heat disappears, ingredients cool",
              "correct": false,
              "feedback": "Structural change follows heat entering the food rather than heat disappearing first. Review help-m05-s01-heat-and-change.",
              "helpAnchor": "help-m05-s01-heat-and-change",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Ingredients cool, heat enters, structure returns unchanged",
              "correct": false,
              "feedback": "Heating can alter food structure rather than necessarily returning it unchanged. Review help-m05-s01-heat-and-change.",
              "helpAnchor": "help-m05-s01-heat-and-change",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Food browns, then heat begins moving into it",
              "correct": false,
              "feedback": "Heat must enter the food before heating-related surface changes such as browning develop. Review help-m05-s01-heat-and-change.",
              "helpAnchor": "help-m05-s01-heat-and-change",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m05-s01-q5",
          "focus": "vocabulary in context",
          "theoryAnchor": "help-m05-s01-why-cook",
          "prompt": "A runny mixture becomes firm during heating. Which word best describes this change?",
          "hint": "Choose the term for becoming firm rather than remaining runny.",
          "options": [
            {
              "id": "a",
              "text": "Setting",
              "correct": true,
              "feedback": "Correct: setting describes a mixture changing from runny towards firm during heating. Review help-m05-s01-why-cook.",
              "helpAnchor": "help-m05-s01-why-cook",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Spreading",
              "correct": false,
              "feedback": "Spreading describes movement across a surface rather than the mixture becoming firm. Review help-m05-s01-method-choice.",
              "helpAnchor": "help-m05-s01-method-choice",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Cooling",
              "correct": false,
              "feedback": "Cooling is not the heating-related change from a runny mixture to a firm structure. Review help-m05-s01-why-cook.",
              "helpAnchor": "help-m05-s01-why-cook",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Transferring",
              "correct": false,
              "feedback": "Heat transfers into food, but transferring does not name the mixture becoming firm. Review help-m05-s01-heat-and-change.",
              "helpAnchor": "help-m05-s01-heat-and-change",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m05-s01-q6",
          "focus": "worked-example interpretation",
          "theoryAnchor": "help-m05-s01-method-choice",
          "prompt": "Why does batter on a hot surface behave differently from shaped dough in an oven?",
          "hint": "Compare both the starting structures and how heat is applied.",
          "options": [
            {
              "id": "a",
              "text": "Batter spreads before setting while dough holds more shape",
              "correct": true,
              "feedback": "Correct: batter can spread before setting, while firmer dough usually retains more of its shape. Review help-m05-s01-method-choice.",
              "helpAnchor": "help-m05-s01-method-choice",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Oven dough receives no heat from its tray",
              "correct": false,
              "feedback": "Baked dough receives heat from surrounding hot air and also from the tray. Review help-m05-s01-method-choice.",
              "helpAnchor": "help-m05-s01-method-choice",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Batter cannot brown on a hot surface",
              "correct": false,
              "feedback": "Batter can brown where it contacts the hot surface. Review help-m05-s01-method-choice.",
              "helpAnchor": "help-m05-s01-method-choice",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Both foods must develop exactly the same surface",
              "correct": false,
              "feedback": "Different heating methods can produce different surface colour, firmness and texture. Review help-m05-s01-method-choice.",
              "helpAnchor": "help-m05-s01-method-choice",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m05-s01-q7",
          "focus": "likely misconception",
          "theoryAnchor": "help-m05-s01-why-cook",
          "prompt": "Which statement correctly challenges a common misconception about cooking?",
          "hint": "Avoid claims that apply to every food in every situation.",
          "options": [
            {
              "id": "a",
              "text": "Cooking can improve safety for some foods",
              "correct": true,
              "feedback": "Correct: safety can improve for some foods, but cooking does not automatically make every food safer. Review help-m05-s01-why-cook.",
              "helpAnchor": "help-m05-s01-why-cook",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Cooking always increases nutritional value",
              "correct": false,
              "feedback": "Cooking does not automatically increase nutritional value. Review help-m05-s01-why-cook.",
              "helpAnchor": "help-m05-s01-why-cook",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Cooking makes every food completely safe",
              "correct": false,
              "feedback": "The safety effect depends on the particular food, so this universal claim is incorrect. Review help-m05-s01-why-cook.",
              "helpAnchor": "help-m05-s01-why-cook",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Every cooking method creates identical changes",
              "correct": false,
              "feedback": "Different methods transfer heat differently and can create different changes. Review help-m05-s01-method-choice.",
              "helpAnchor": "help-m05-s01-method-choice",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m05-s01-q8",
          "focus": "authentic practical or design decision",
          "theoryAnchor": "help-m05-s01-method-choice",
          "prompt": "A student wants quick setting and browning underneath a batter. Which method best matches that purpose?",
          "hint": "Identify where strong direct surface heating would be useful.",
          "options": [
            {
              "id": "a",
              "text": "Cook it on a hot surface",
              "correct": true,
              "feedback": "Correct: direct hot-surface heating supports quick setting and browning where the batter contacts the surface. Review help-m05-s01-method-choice.",
              "helpAnchor": "help-m05-s01-method-choice",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Leave it unheated on the bench",
              "correct": false,
              "feedback": "Without heating, the intended heat-driven setting and browning would not occur. Review help-m05-s01-method-choice.",
              "helpAnchor": "help-m05-s01-method-choice",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Choose any method because results are identical",
              "correct": false,
              "feedback": "Method matters because different forms of heat transfer produce different results. Review help-m05-s01-method-choice.",
              "helpAnchor": "help-m05-s01-method-choice",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Cool it before allowing any heat transfer",
              "correct": false,
              "feedback": "Cooling does not provide the heating needed for quick setting and surface browning. Review help-m05-s01-method-choice.",
              "helpAnchor": "help-m05-s01-method-choice",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m05-s01-q9",
          "focus": "compare or evaluate",
          "theoryAnchor": "help-m05-s01-method-choice",
          "prompt": "Which comparison best evaluates hot-surface cooking and baking?",
          "hint": "Judge each method against the result it is intended to produce.",
          "options": [
            {
              "id": "a",
              "text": "Each suits different purposes because heat is applied differently",
              "correct": true,
              "feedback": "Correct: neither method is automatically better because suitability depends on the intended food result. Review help-m05-s01-method-choice.",
              "helpAnchor": "help-m05-s01-method-choice",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Baking is always better because it heats larger foods",
              "correct": false,
              "feedback": "No method is automatically better; suitability depends on the food and intended result. Review help-m05-s01-method-choice.",
              "helpAnchor": "help-m05-s01-method-choice",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Hot-surface cooking always produces better texture",
              "correct": false,
              "feedback": "Texture goals differ, so hot-surface cooking is not universally better. Review help-m05-s01-method-choice.",
              "helpAnchor": "help-m05-s01-method-choice",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Both methods transfer heat in exactly the same way",
              "correct": false,
              "feedback": "A hot surface and an oven apply heat differently, contributing to different food changes. Review help-m05-s01-method-choice.",
              "helpAnchor": "help-m05-s01-method-choice",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m05-s01-q10",
          "focus": "transfer to a fresh situation",
          "theoryAnchor": "help-m05-s01-method-choice",
          "prompt": "A thick shaped food needs gradual heating through its centre and a firmer outside. Which choice is most suitable?",
          "hint": "Match the food shape and desired changes with how heat surrounds it.",
          "options": [
            {
              "id": "a",
              "text": "Bake it in an oven",
              "correct": true,
              "feedback": "Correct: surrounding hot air can heat a thicker shaped food gradually while its outside also changes. Review help-m05-s01-method-choice.",
              "helpAnchor": "help-m05-s01-method-choice",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Keep it away from all heat",
              "correct": false,
              "feedback": "Without heat, the intended internal heating and firmer outside would not develop. Review help-m05-s01-method-choice.",
              "helpAnchor": "help-m05-s01-method-choice",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Choose solely by ingredient colour",
              "correct": false,
              "feedback": "Method choice should relate desired food changes to purpose rather than relying solely on starting colour. Review help-m05-s01-method-choice.",
              "helpAnchor": "help-m05-s01-method-choice",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Assume every heating method gives the same result",
              "correct": false,
              "feedback": "Different heating methods can create different textures, colours, aromas and structures. Review help-m05-s01-method-choice.",
              "helpAnchor": "help-m05-s01-method-choice",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        }
      ]
    },
    {
      "sectionId": "m05-s02",
      "knowledgeCheckId": "kc-m05-s02",
      "title": "Denaturation, dextrinisation and emulsification",
      "theoryAnchors": [
        "help-m05-s02-denaturation",
        "help-m05-s02-dextrinisation",
        "help-m05-s02-emulsification"
      ],
      "sourceIds": [
        "food-knowledge",
        "course-program"
      ],
      "hintPolicy": "answer-neutral",
      "feedbackTiming": "after check only",
      "questions": [
        {
          "id": "kc-m05-s02-q1",
          "focus": "essential idea",
          "theoryAnchor": "help-m05-s02-denaturation",
          "prompt": "Which statement best describes denaturation in food?",
          "hint": "Consider what changes within a protein.",
          "options": [
            {
              "id": "a",
              "text": "Protein structure changes through heat or agitation",
              "correct": true,
              "feedback": "Correct: denaturation changes protein structure through factors such as heat or agitation; review help-m05-s02-denaturation.",
              "helpAnchor": "help-m05-s02-denaturation",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Starch breaks into dextrins under dry heat",
              "correct": false,
              "feedback": "This describes dextrinisation rather than protein change; review help-m05-s02-dextrinisation.",
              "helpAnchor": "help-m05-s02-dextrinisation",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Oil permanently dissolves into water",
              "correct": false,
              "feedback": "Emulsification disperses liquids but does not mean permanent dissolving; review help-m05-s02-emulsification.",
              "helpAnchor": "help-m05-s02-emulsification",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Sugar alone melts and becomes brown",
              "correct": false,
              "feedback": "This does not describe denaturation because denaturation concerns proteins; review help-m05-s02-denaturation.",
              "helpAnchor": "help-m05-s02-denaturation",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m05-s02-q2",
          "focus": "precise detail",
          "theoryAnchor": "help-m05-s02-dextrinisation",
          "prompt": "What combination most directly supports dextrinisation?",
          "hint": "Focus on the food component and heating condition.",
          "options": [
            {
              "id": "a",
              "text": "Protein and vigorous whisking",
              "correct": false,
              "feedback": "Whisking can affect proteins, not produce starch dextrins; review help-m05-s02-denaturation.",
              "helpAnchor": "help-m05-s02-denaturation",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Starch and dry heat",
              "correct": true,
              "feedback": "Correct: dry heat can break starch into shorter dextrins; review help-m05-s02-dextrinisation.",
              "helpAnchor": "help-m05-s02-dextrinisation",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Oil and chilled water",
              "correct": false,
              "feedback": "Oil and water relate to dispersion and emulsification, not dextrinisation; review help-m05-s02-emulsification.",
              "helpAnchor": "help-m05-s02-emulsification",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Protein and cold storage",
              "correct": false,
              "feedback": "Cold storage is not the stated condition for starch dextrinisation; review help-m05-s02-dextrinisation.",
              "helpAnchor": "help-m05-s02-dextrinisation",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m05-s02-q3",
          "focus": "concept connection",
          "theoryAnchor": "help-m05-s02-emulsification",
          "prompt": "How are emulsification and denaturation alike?",
          "hint": "Look for a relationship that applies to both processes.",
          "options": [
            {
              "id": "a",
              "text": "Both always create browning",
              "correct": false,
              "feedback": "Browning is not defining evidence for either process; review help-m05-s02-denaturation.",
              "helpAnchor": "help-m05-s02-denaturation",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Both require starch",
              "correct": false,
              "feedback": "Neither process is defined by requiring starch; review help-m05-s02-emulsification.",
              "helpAnchor": "help-m05-s02-emulsification",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Both can produce observable food changes",
              "correct": true,
              "feedback": "Correct: both processes can produce evidence you can observe in foods; review help-m05-s02-emulsification.",
              "helpAnchor": "help-m05-s02-emulsification",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Both permanently combine oil and water",
              "correct": false,
              "feedback": "Permanent oil-water mixing is not guaranteed and does not describe denaturation; review help-m05-s02-emulsification.",
              "helpAnchor": "help-m05-s02-emulsification",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m05-s02-q4",
          "focus": "process or sequence",
          "theoryAnchor": "help-m05-s02-emulsification",
          "prompt": "A dressing is mixed, becomes dispersed, then separates later. Which sequence is most accurate?",
          "hint": "Track what is observed immediately and later.",
          "options": [
            {
              "id": "a",
              "text": "Mixing, dispersion, later separation",
              "correct": true,
              "feedback": "Correct: a temporary emulsion may disperse after mixing and separate later; review help-m05-s02-emulsification.",
              "helpAnchor": "help-m05-s02-emulsification",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Heating, browning, protein firming",
              "correct": false,
              "feedback": "That sequence does not match the observed oil-and-water dressing; review help-m05-s02-emulsification.",
              "helpAnchor": "help-m05-s02-emulsification",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Toasting, dextrin formation, permanent mixing",
              "correct": false,
              "feedback": "Dextrin formation belongs to dry-heated starch, not dressing dispersion; review help-m05-s02-dextrinisation.",
              "helpAnchor": "help-m05-s02-dextrinisation",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Cooling, dissolving, permanent stability",
              "correct": false,
              "feedback": "The later separation shows the mixture was not permanently stable; review help-m05-s02-emulsification.",
              "helpAnchor": "help-m05-s02-emulsification",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m05-s02-q5",
          "focus": "vocabulary in context",
          "theoryAnchor": "help-m05-s02-emulsification",
          "prompt": "In emulsification, what does dispersed mean?",
          "hint": "Think about how one liquid is distributed through another.",
          "options": [
            {
              "id": "a",
              "text": "Spread through another liquid as droplets",
              "correct": true,
              "feedback": "Correct: dispersed describes one liquid distributed through another, commonly as droplets; review help-m05-s02-emulsification.",
              "helpAnchor": "help-m05-s02-emulsification",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Changed from starch into dextrins",
              "correct": false,
              "feedback": "That meaning belongs to dextrinisation rather than dispersion; review help-m05-s02-dextrinisation.",
              "helpAnchor": "help-m05-s02-dextrinisation",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Firmed because protein structure changed",
              "correct": false,
              "feedback": "Protein firming can indicate denaturation, not the meaning of dispersed; review help-m05-s02-denaturation.",
              "helpAnchor": "help-m05-s02-denaturation",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Completely dissolved with no separation possible",
              "correct": false,
              "feedback": "Dispersion does not mean complete dissolving or guaranteed permanence; review help-m05-s02-emulsification.",
              "helpAnchor": "help-m05-s02-emulsification",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m05-s02-q6",
          "focus": "worked-example interpretation",
          "theoryAnchor": "help-m05-s02-denaturation",
          "prompt": "A cooked egg becomes firmer than the raw egg. Which process best explains this evidence?",
          "hint": "Identify the main food component undergoing structural change.",
          "options": [
            {
              "id": "a",
              "text": "Denaturation",
              "correct": true,
              "feedback": "Correct: egg firming provides evidence of changed protein structure; review help-m05-s02-denaturation.",
              "helpAnchor": "help-m05-s02-denaturation",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Dextrinisation",
              "correct": false,
              "feedback": "Dextrinisation concerns starch under dry heat, not egg protein firming; review help-m05-s02-dextrinisation.",
              "helpAnchor": "help-m05-s02-dextrinisation",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Emulsification",
              "correct": false,
              "feedback": "Emulsification concerns dispersion of liquids such as oil and water; review help-m05-s02-emulsification.",
              "helpAnchor": "help-m05-s02-emulsification",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Oil-water separation",
              "correct": false,
              "feedback": "Oil-water separation does not explain the egg becoming firmer; review help-m05-s02-denaturation.",
              "helpAnchor": "help-m05-s02-denaturation",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m05-s02-q7",
          "focus": "misconception",
          "theoryAnchor": "help-m05-s02-dextrinisation",
          "prompt": "A student says toasted bread browning must be gelatinisation. Which response is best?",
          "hint": "Distinguish the process using the heating condition and food component.",
          "options": [
            {
              "id": "a",
              "text": "Correct because all starch changes are gelatinisation",
              "correct": false,
              "feedback": "Different starch changes have different conditions, so this generalisation is incorrect; review help-m05-s02-dextrinisation.",
              "helpAnchor": "help-m05-s02-dextrinisation",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Incorrect because dry heat can cause dextrinisation",
              "correct": true,
              "feedback": "Correct: toasted starch can undergo dextrinisation under dry heat; review help-m05-s02-dextrinisation.",
              "helpAnchor": "help-m05-s02-dextrinisation",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Correct because browning always means gelatinisation",
              "correct": false,
              "feedback": "Browning alone does not establish gelatinisation and toast can show dextrinisation; review help-m05-s02-dextrinisation.",
              "helpAnchor": "help-m05-s02-dextrinisation",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Incorrect because toast shows only emulsification",
              "correct": false,
              "feedback": "Emulsification concerns dispersed liquids, not the starch change in toast; review help-m05-s02-emulsification.",
              "helpAnchor": "help-m05-s02-emulsification",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m05-s02-q8",
          "focus": "practical or design decision",
          "theoryAnchor": "help-m05-s02-emulsification",
          "prompt": "You are testing a dressing. Which observation should you record to judge emulsion stability?",
          "hint": "Choose evidence that reveals what happens over time.",
          "options": [
            {
              "id": "a",
              "text": "Whether layers reappear after standing",
              "correct": true,
              "feedback": "Correct: later layer formation provides evidence about emulsion stability; review help-m05-s02-emulsification.",
              "helpAnchor": "help-m05-s02-emulsification",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Whether bread browns beside it",
              "correct": false,
              "feedback": "Bread browning provides evidence about dextrinisation, not dressing stability; review help-m05-s02-dextrinisation.",
              "helpAnchor": "help-m05-s02-dextrinisation",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Whether an egg becomes firm",
              "correct": false,
              "feedback": "Egg firming provides evidence about protein denaturation, not emulsion stability; review help-m05-s02-denaturation.",
              "helpAnchor": "help-m05-s02-denaturation",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Whether starch receives dry heat",
              "correct": false,
              "feedback": "Dry-heated starch concerns dextrinisation rather than oil-water stability; review help-m05-s02-dextrinisation.",
              "helpAnchor": "help-m05-s02-dextrinisation",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m05-s02-q9",
          "focus": "compare or evaluate",
          "theoryAnchor": "help-m05-s02-dextrinisation",
          "prompt": "Which comparison uses the strongest evidence to distinguish toasted bread from cooked egg?",
          "hint": "Match each observation to the food component changing.",
          "options": [
            {
              "id": "a",
              "text": "Bread browns; egg firms",
              "correct": true,
              "feedback": "Correct: browning supports dextrinisation while firming supports protein denaturation; review help-m05-s02-dextrinisation.",
              "helpAnchor": "help-m05-s02-dextrinisation",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Both change, so processes match",
              "correct": false,
              "feedback": "Observable change alone cannot show that two foods underwent the same process; review help-m05-s02-denaturation.",
              "helpAnchor": "help-m05-s02-denaturation",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Bread firms; egg disperses oil",
              "correct": false,
              "feedback": "These observations do not accurately match the worked examples; review help-m05-s02-emulsification.",
              "helpAnchor": "help-m05-s02-emulsification",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Both brown, proving emulsification",
              "correct": false,
              "feedback": "Browning does not prove emulsification, which concerns liquid dispersion; review help-m05-s02-emulsification.",
              "helpAnchor": "help-m05-s02-emulsification",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m05-s02-q10",
          "focus": "transfer to a fresh situation",
          "theoryAnchor": "help-m05-s02-dextrinisation",
          "prompt": "A starchy cracker becomes browner and develops toasted flavour during dry baking. Which process is most likely?",
          "hint": "Use both the ingredient type and heating method.",
          "options": [
            {
              "id": "a",
              "text": "Dextrinisation",
              "correct": true,
              "feedback": "Correct: dry heat, starch, browning and flavour change support dextrinisation; review help-m05-s02-dextrinisation.",
              "helpAnchor": "help-m05-s02-dextrinisation",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Emulsification",
              "correct": false,
              "feedback": "No evidence describes liquids being dispersed through one another; review help-m05-s02-emulsification.",
              "helpAnchor": "help-m05-s02-emulsification",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Protein denaturation",
              "correct": false,
              "feedback": "The evidence centres on dry-heated starch rather than protein structure; review help-m05-s02-denaturation.",
              "helpAnchor": "help-m05-s02-denaturation",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Permanent oil-water mixing",
              "correct": false,
              "feedback": "Oil-water mixing is unrelated to the cracker evidence provided; review help-m05-s02-emulsification.",
              "helpAnchor": "help-m05-s02-emulsification",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        }
      ],
      "label": "Formative learning evidence"
    },
    {
      "sectionId": "m05-s03",
      "knowledgeCheckId": "kc-m05-s03",
      "title": "Fair ingredient tests and observations",
      "theoryAnchors": [
        "help-m05-s03-fair-test-plan",
        "help-m05-s03-observe-record",
        "help-m05-s03-conclude-carefully"
      ],
      "sourceIds": [
        "food-knowledge",
        "course-program"
      ],
      "hintPolicy": "answer-neutral",
      "feedbackTiming": "after check only",
      "questions": [
        {
          "id": "kc-m05-s03-q1",
          "focus": "essential idea",
          "theoryAnchor": "help-m05-s03-fair-test-plan",
          "prompt": "What makes an ingredient comparison most useful as a fair test?",
          "hint": "Consider what must change and what should stay consistent.",
          "options": [
            {
              "id": "a",
              "text": "Change one ingredient amount only",
              "correct": true,
              "feedback": "Changing one independent variable helps link that change with observed differences. Review help-m05-s03-fair-test-plan.",
              "helpAnchor": "help-m05-s03-fair-test-plan",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Change several ingredients together",
              "correct": false,
              "feedback": "Several changes make it unclear which ingredient difference influenced the result. Review help-m05-s03-fair-test-plan.",
              "helpAnchor": "help-m05-s03-fair-test-plan",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Use different cooking methods",
              "correct": false,
              "feedback": "Different cooking methods introduce another variable that can affect the comparison. Review help-m05-s03-fair-test-plan.",
              "helpAnchor": "help-m05-s03-fair-test-plan",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Judge whichever sample looks best",
              "correct": false,
              "feedback": "Preference alone does not establish a controlled comparison between ingredient amounts. Review help-m05-s03-fair-test-plan.",
              "helpAnchor": "help-m05-s03-fair-test-plan",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m05-s03-q2",
          "focus": "precise detail",
          "theoryAnchor": "help-m05-s03-observe-record",
          "prompt": "Which record is the most precise observation of two cooked samples?",
          "hint": "Look for directly observed evidence rather than an explanation.",
          "options": [
            {
              "id": "a",
              "text": "Sample A was definitely better",
              "correct": false,
              "feedback": "Better is a judgement without precise evidence describing the samples. Review help-m05-s03-observe-record.",
              "helpAnchor": "help-m05-s03-observe-record",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Sample B rose about 8 mm higher",
              "correct": true,
              "feedback": "A measured height difference provides precise evidence that can be compared. Review help-m05-s03-observe-record.",
              "helpAnchor": "help-m05-s03-observe-record",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Extra ingredient caused improvement",
              "correct": false,
              "feedback": "This interprets a cause rather than directly recording an observation. Review help-m05-s03-observe-record.",
              "helpAnchor": "help-m05-s03-observe-record",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Sample A seemed interesting",
              "correct": false,
              "feedback": "Interesting is too vague to provide comparable physical or sensory evidence. Review help-m05-s03-observe-record.",
              "helpAnchor": "help-m05-s03-observe-record",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m05-s03-q3",
          "focus": "concept connection",
          "theoryAnchor": "help-m05-s03-fair-test-plan",
          "prompt": "How do independent and controlled variables work together in a fair ingredient test?",
          "hint": "Think about separating the tested change from other influences.",
          "options": [
            {
              "id": "a",
              "text": "Both must change equally",
              "correct": false,
              "feedback": "Controlled variables should remain consistent rather than changing with the independent variable. Review help-m05-s03-fair-test-plan.",
              "helpAnchor": "help-m05-s03-fair-test-plan",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Both are measured outcomes",
              "correct": false,
              "feedback": "The dependent variable is measured or observed, not both independent and controlled variables. Review help-m05-s03-fair-test-plan.",
              "helpAnchor": "help-m05-s03-fair-test-plan",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "One changes; others stay consistent",
              "correct": true,
              "feedback": "The independent variable changes while controlled variables remain as consistent as practical. Review help-m05-s03-fair-test-plan.",
              "helpAnchor": "help-m05-s03-fair-test-plan",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Controls replace the tested ingredient",
              "correct": false,
              "feedback": "Controlled variables are consistent conditions, not replacements for the tested ingredient. Review help-m05-s03-fair-test-plan.",
              "helpAnchor": "help-m05-s03-fair-test-plan",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m05-s03-q4",
          "focus": "process or sequence",
          "theoryAnchor": "help-m05-s03-conclude-carefully",
          "prompt": "After cooking both controlled samples, what should students do before forming a conclusion?",
          "hint": "A conclusion needs something recorded first.",
          "options": [
            {
              "id": "a",
              "text": "Change another ingredient",
              "correct": false,
              "feedback": "Adding another change weakens the planned comparison instead of preparing evidence for a conclusion. Review help-m05-s03-fair-test-plan.",
              "helpAnchor": "help-m05-s03-fair-test-plan",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Record comparable observations",
              "correct": true,
              "feedback": "Comparable observations provide the evidence needed before an evidence-based conclusion is formed. Review help-m05-s03-observe-record.",
              "helpAnchor": "help-m05-s03-observe-record",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Generalise to every recipe",
              "correct": false,
              "feedback": "A universal generalisation is not justified by one small classroom test. Review help-m05-s03-conclude-carefully.",
              "helpAnchor": "help-m05-s03-conclude-carefully",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Choose the preferred result",
              "correct": false,
              "feedback": "Choosing a preference does not replace recording evidence from both samples. Review help-m05-s03-observe-record.",
              "helpAnchor": "help-m05-s03-observe-record",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m05-s03-q5",
          "focus": "vocabulary in context",
          "theoryAnchor": "help-m05-s03-fair-test-plan",
          "prompt": "Students vary flour quantity and measure biscuit spread. What is biscuit spread?",
          "hint": "Identify the feature measured because of the planned change.",
          "options": [
            {
              "id": "a",
              "text": "Independent variable",
              "correct": false,
              "feedback": "Flour quantity is the independent variable because students deliberately change it. Review help-m05-s03-fair-test-plan.",
              "helpAnchor": "help-m05-s03-fair-test-plan",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Controlled variable",
              "correct": false,
              "feedback": "A controlled variable is kept consistent rather than measured as the outcome. Review help-m05-s03-fair-test-plan.",
              "helpAnchor": "help-m05-s03-fair-test-plan",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Dependent variable",
              "correct": true,
              "feedback": "Biscuit spread is the dependent variable because it is measured as the outcome. Review help-m05-s03-fair-test-plan.",
              "helpAnchor": "help-m05-s03-fair-test-plan",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Universal conclusion",
              "correct": false,
              "feedback": "Biscuit spread is an observed outcome, not a conclusion extending beyond the test. Review help-m05-s03-conclude-carefully.",
              "helpAnchor": "help-m05-s03-conclude-carefully",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m05-s03-q6",
          "focus": "worked-example interpretation",
          "theoryAnchor": "help-m05-s03-fair-test-plan",
          "prompt": "In the one-ingredient comparison, which plan best matches the worked example?",
          "hint": "Focus on isolating one ingredient change within a consistent method.",
          "options": [
            {
              "id": "a",
              "text": "Vary sugar and oven temperature",
              "correct": false,
              "feedback": "Changing sugar and temperature introduces two independent changes into the comparison. Review help-m05-s03-fair-test-plan.",
              "helpAnchor": "help-m05-s03-fair-test-plan",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Vary sugar; keep method consistent",
              "correct": true,
              "feedback": "Varying one ingredient while maintaining the method supports a fair comparison. Review help-m05-s03-fair-test-plan.",
              "helpAnchor": "help-m05-s03-fair-test-plan",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Vary mixing time between samples",
              "correct": false,
              "feedback": "Different mixing times add another factor that could influence the observed result. Review help-m05-s03-fair-test-plan.",
              "helpAnchor": "help-m05-s03-fair-test-plan",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Use unrelated recipes for comparison",
              "correct": false,
              "feedback": "Unrelated recipes contain many differences, preventing a clear one-ingredient comparison. Review help-m05-s03-fair-test-plan.",
              "helpAnchor": "help-m05-s03-fair-test-plan",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m05-s03-q7",
          "focus": "misconception",
          "theoryAnchor": "help-m05-s03-conclude-carefully",
          "prompt": "One test finds extra water made this dough softer. Which conclusion is appropriately limited?",
          "hint": "Consider what the evidence can support beyond these tested conditions.",
          "options": [
            {
              "id": "a",
              "text": "Extra water always softens dough",
              "correct": false,
              "feedback": "Always turns one classroom result into an unsupported universal rule. Review help-m05-s03-conclude-carefully.",
              "helpAnchor": "help-m05-s03-conclude-carefully",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Water controls every dough property",
              "correct": false,
              "feedback": "The evidence concerns the observed softness, not every possible dough property. Review help-m05-s03-conclude-carefully.",
              "helpAnchor": "help-m05-s03-conclude-carefully",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "These samples showed increased softness",
              "correct": true,
              "feedback": "This conclusion stays within the samples and evidence actually observed. Review help-m05-s03-conclude-carefully.",
              "helpAnchor": "help-m05-s03-conclude-carefully",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "All recipes need extra water",
              "correct": false,
              "feedback": "The test cannot justify a recommendation for all recipes and conditions. Review help-m05-s03-conclude-carefully.",
              "helpAnchor": "help-m05-s03-conclude-carefully",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m05-s03-q8",
          "focus": "practical or design decision",
          "theoryAnchor": "help-m05-s03-fair-test-plan",
          "prompt": "Students compare oil amounts in muffins. Which decision best improves fairness?",
          "hint": "Choose the decision that reduces another possible influence.",
          "options": [
            {
              "id": "a",
              "text": "Use equal baking times",
              "correct": true,
              "feedback": "Equal baking times control a factor that could otherwise affect muffin results. Review help-m05-s03-fair-test-plan.",
              "helpAnchor": "help-m05-s03-fair-test-plan",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Use different oven shelves",
              "correct": false,
              "feedback": "Different oven positions may expose samples to different cooking conditions. Review help-m05-s03-fair-test-plan.",
              "helpAnchor": "help-m05-s03-fair-test-plan",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Change muffin sizes",
              "correct": false,
              "feedback": "Different muffin sizes can affect cooking and introduce another variable. Review help-m05-s03-fair-test-plan.",
              "helpAnchor": "help-m05-s03-fair-test-plan",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Mix one batch longer",
              "correct": false,
              "feedback": "Different mixing times may influence texture and weaken the ingredient comparison. Review help-m05-s03-fair-test-plan.",
              "helpAnchor": "help-m05-s03-fair-test-plan",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m05-s03-q9",
          "focus": "compare or evaluate",
          "theoryAnchor": "help-m05-s03-observe-record",
          "prompt": "Which evidence would better support comparing crispness between two cracker samples?",
          "hint": "Prefer evidence that makes the samples directly comparable.",
          "options": [
            {
              "id": "a",
              "text": "A was nice and crispy",
              "correct": false,
              "feedback": "Nice is subjective and provides limited detail for comparing crispness. Review help-m05-s03-observe-record.",
              "helpAnchor": "help-m05-s03-observe-record",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "B looked like a cracker",
              "correct": false,
              "feedback": "Appearance as a cracker does not provide evidence specifically comparing crispness. Review help-m05-s03-observe-record.",
              "helpAnchor": "help-m05-s03-observe-record",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "A snapped; B bent first",
              "correct": true,
              "feedback": "The contrasting physical responses provide specific evidence relevant to crispness. Review help-m05-s03-observe-record.",
              "helpAnchor": "help-m05-s03-observe-record",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "B probably contained less moisture",
              "correct": false,
              "feedback": "This proposes an explanation rather than recording direct evidence of crispness. Review help-m05-s03-observe-record.",
              "helpAnchor": "help-m05-s03-observe-record",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m05-s03-q10",
          "focus": "transfer to a fresh situation",
          "theoryAnchor": "help-m05-s03-conclude-carefully",
          "prompt": "A group tests two salt amounts in soup. Which approach transfers fair-testing principles best?",
          "hint": "Combine controlled preparation, comparable evidence and a careful conclusion.",
          "options": [
            {
              "id": "a",
              "text": "Change salt and stock together",
              "correct": false,
              "feedback": "Changing two ingredients prevents a clear link between salt amount and observations. Review help-m05-s03-fair-test-plan.",
              "helpAnchor": "help-m05-s03-fair-test-plan",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Taste once and claim a rule",
              "correct": false,
              "feedback": "One observation cannot support a universal claim about every soup. Review help-m05-s03-conclude-carefully.",
              "helpAnchor": "help-m05-s03-conclude-carefully",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Control method, record, conclude cautiously",
              "correct": true,
              "feedback": "Consistent conditions, recorded evidence and a limited conclusion combine the key fair-testing principles. Review help-m05-s03-conclude-carefully.",
              "helpAnchor": "help-m05-s03-conclude-carefully",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Choose the saltiest sample immediately",
              "correct": false,
              "feedback": "Immediate preference does not demonstrate controlled testing and evidence-based reasoning. Review help-m05-s03-observe-record.",
              "helpAnchor": "help-m05-s03-observe-record",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        }
      ],
      "label": "Formative learning evidence"
    },
    {
      "sectionId": "m06-s01",
      "knowledgeCheckId": "kc-m06-s01",
      "title": "The five senses knowledge check",
      "theoryAnchors": [
        "help-m06-s01-sense-evidence",
        "help-m06-s01-taste-v-flavour",
        "help-m06-s01-sensory-headings"
      ],
      "sourceIds": [
        "food-knowledge",
        "assessment-workbook"
      ],
      "hintPolicy": "answer-neutral",
      "feedbackTiming": "after check only",
      "questions": [
        {
          "id": "kc-m06-s01-q1",
          "focus": "essential idea",
          "theoryAnchor": "help-m06-s01-sense-evidence",
          "prompt": "Which statement best describes sensory evidence in food evaluation?",
          "hint": "Think about observations, not preferences.",
          "options": [
            {
              "id": "a",
              "text": "Specific observations gathered through permitted senses",
              "correct": true,
              "feedback": "Correct: sensory evidence records specific observations from safe, permitted senses. Review help-m06-s01-sense-evidence.",
              "helpAnchor": "help-m06-s01-sense-evidence",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "A score showing how much the evaluator likes it",
              "correct": false,
              "feedback": "Preference scores show liking, not specific sensory evidence. Review help-m06-s01-sense-evidence.",
              "helpAnchor": "help-m06-s01-sense-evidence",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "A list of ingredients used in the recipe",
              "correct": false,
              "feedback": "Ingredients describe composition, not what the senses directly detect. Review help-m06-s01-sense-evidence.",
              "helpAnchor": "help-m06-s01-sense-evidence",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "A judgement based only on the food name",
              "correct": false,
              "feedback": "A food name cannot provide direct sensory observations. Review help-m06-s01-sense-evidence.",
              "helpAnchor": "help-m06-s01-sense-evidence",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m06-s01-q2",
          "focus": "precise detail",
          "theoryAnchor": "help-m06-s01-taste-v-flavour",
          "prompt": "Which detail most accurately distinguishes taste from flavour?",
          "hint": "Consider what aroma contributes while eating.",
          "options": [
            {
              "id": "a",
              "text": "Taste includes aroma, while flavour excludes it",
              "correct": false,
              "feedback": "This reverses the relationship because flavour includes aroma as well as taste. Review help-m06-s01-taste-v-flavour.",
              "helpAnchor": "help-m06-s01-taste-v-flavour",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Flavour combines taste, aroma and other sensations",
              "correct": true,
              "feedback": "Correct: flavour combines taste with aroma and other sensations experienced while eating. Review help-m06-s01-taste-v-flavour.",
              "helpAnchor": "help-m06-s01-taste-v-flavour",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Taste and flavour are interchangeable sensory terms",
              "correct": false,
              "feedback": "Taste is only one component of the broader experience called flavour. Review help-m06-s01-taste-v-flavour.",
              "helpAnchor": "help-m06-s01-taste-v-flavour",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Flavour describes appearance before eating",
              "correct": false,
              "feedback": "Appearance is visual evidence, whereas flavour develops through taste, aroma and other eating sensations. Review help-m06-s01-taste-v-flavour.",
              "helpAnchor": "help-m06-s01-taste-v-flavour",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m06-s01-q3",
          "focus": "concept connection",
          "theoryAnchor": "help-m06-s01-sensory-headings",
          "prompt": "A student notes golden edges, toasted smell and a crisp base. Which headings organise these observations respectively?",
          "hint": "Match each observation to its sensory category.",
          "options": [
            {
              "id": "a",
              "text": "Appearance, aroma, texture",
              "correct": true,
              "feedback": "Correct: golden edges are appearance, toasted smell is aroma, and crispness is texture. Review help-m06-s01-sensory-headings.",
              "helpAnchor": "help-m06-s01-sensory-headings",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Aroma, flavour, appearance",
              "correct": false,
              "feedback": "Golden edges are visual, while crispness belongs under texture. Review help-m06-s01-sensory-headings.",
              "helpAnchor": "help-m06-s01-sensory-headings",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Texture, appearance, flavour",
              "correct": false,
              "feedback": "This mismatches each observation with the sense providing the evidence. Review help-m06-s01-sensory-headings.",
              "helpAnchor": "help-m06-s01-sensory-headings",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Flavour, texture, aroma",
              "correct": false,
              "feedback": "These headings do not match sight, smell and crispness in that order. Review help-m06-s01-sensory-headings.",
              "helpAnchor": "help-m06-s01-sensory-headings",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m06-s01-q4",
          "focus": "process or sequence",
          "theoryAnchor": "help-m06-s01-sensory-headings",
          "prompt": "Which approach best supports an organised sensory evaluation?",
          "hint": "Use headings before turning observations into conclusions.",
          "options": [
            {
              "id": "a",
              "text": "Record observations under suitable sensory headings",
              "correct": true,
              "feedback": "Correct: organising observations under sensory headings makes evidence clear and specific. Review help-m06-s01-sensory-headings.",
              "helpAnchor": "help-m06-s01-sensory-headings",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Decide quality first, then invent supporting details",
              "correct": false,
              "feedback": "Evidence should inform a judgement rather than be invented after it. Review help-m06-s01-sense-evidence.",
              "helpAnchor": "help-m06-s01-sense-evidence",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Write overall liking before making observations",
              "correct": false,
              "feedback": "Personal liking should not replace organised sensory observations. Review help-m06-s01-sensory-headings.",
              "helpAnchor": "help-m06-s01-sensory-headings",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Use every sense even when unsafe or unhelpful",
              "correct": false,
              "feedback": "Only safe, permitted and relevant senses should contribute evidence. Review help-m06-s01-sense-evidence.",
              "helpAnchor": "help-m06-s01-sense-evidence",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m06-s01-q5",
          "focus": "vocabulary in context",
          "theoryAnchor": "help-m06-s01-taste-v-flavour",
          "prompt": "In the note rich tomato, herb aroma and savoury taste combine while eating, what does rich tomato best describe?",
          "hint": "Identify the broader eating experience.",
          "options": [
            {
              "id": "a",
              "text": "Appearance",
              "correct": false,
              "feedback": "Appearance concerns what is seen, not the combined eating experience. Review help-m06-s01-sensory-headings.",
              "helpAnchor": "help-m06-s01-sensory-headings",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Flavour",
              "correct": true,
              "feedback": "Correct: flavour can combine taste, aroma and other sensations while eating. Review help-m06-s01-taste-v-flavour.",
              "helpAnchor": "help-m06-s01-taste-v-flavour",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Preference",
              "correct": false,
              "feedback": "Preference expresses liking, while this note describes a sensory characteristic. Review help-m06-s01-sense-evidence.",
              "helpAnchor": "help-m06-s01-sense-evidence",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Hearing",
              "correct": false,
              "feedback": "Hearing can support crispness evidence but does not describe this combined sensation. Review help-m06-s01-sense-evidence.",
              "helpAnchor": "help-m06-s01-sense-evidence",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m06-s01-q6",
          "focus": "worked-example interpretation",
          "theoryAnchor": "help-m06-s01-sense-evidence",
          "prompt": "For the mini pizza, which observation is strongest sensory evidence rather than a vague judgement?",
          "hint": "Choose wording that reports something directly noticed.",
          "options": [
            {
              "id": "a",
              "text": "It was really good",
              "correct": false,
              "feedback": "Really good states a judgement without specific sensory evidence. Review help-m06-s01-sense-evidence.",
              "helpAnchor": "help-m06-s01-sense-evidence",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "I would buy it again",
              "correct": false,
              "feedback": "Buying intention shows preference rather than a direct sensory observation. Review help-m06-s01-sense-evidence.",
              "helpAnchor": "help-m06-s01-sense-evidence",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "The base cracked audibly and felt crisp",
              "correct": true,
              "feedback": "Correct: this gives specific hearing and touch evidence supporting crispness. Review help-m06-s01-sense-evidence.",
              "helpAnchor": "help-m06-s01-sense-evidence",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Pizza is usually a popular party food",
              "correct": false,
              "feedback": "General popularity does not report evidence from evaluating this mini pizza. Review help-m06-s01-sense-evidence.",
              "helpAnchor": "help-m06-s01-sense-evidence",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m06-s01-q7",
          "focus": "misconception",
          "theoryAnchor": "help-m06-s01-sense-evidence",
          "prompt": "A student says, I loved it, so it is high quality. What is the main problem?",
          "hint": "Separate personal liking from observable evidence.",
          "options": [
            {
              "id": "a",
              "text": "Liking alone does not establish quality",
              "correct": true,
              "feedback": "Correct: preference is personal, so quality needs specific sensory evidence. Review help-m06-s01-sense-evidence.",
              "helpAnchor": "help-m06-s01-sense-evidence",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Quality can only be judged through sight",
              "correct": false,
              "feedback": "Quality evidence may draw on several safe, permitted senses. Review help-m06-s01-sense-evidence.",
              "helpAnchor": "help-m06-s01-sense-evidence",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "High-quality food must be disliked",
              "correct": false,
              "feedback": "Liking may occur, but it neither proves nor disproves quality. Review help-m06-s01-sense-evidence.",
              "helpAnchor": "help-m06-s01-sense-evidence",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Personal preference is a type of aroma",
              "correct": false,
              "feedback": "Preference is a personal judgement, not an aroma observation. Review help-m06-s01-sense-evidence.",
              "helpAnchor": "help-m06-s01-sense-evidence",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m06-s01-q8",
          "focus": "practical or design decision",
          "theoryAnchor": "help-m06-s01-sense-evidence",
          "prompt": "A cracker sounds sharp when bitten and breaks cleanly. How should hearing be used?",
          "hint": "Use hearing when it strengthens a relevant observation.",
          "options": [
            {
              "id": "a",
              "text": "As supporting evidence for crisp texture",
              "correct": true,
              "feedback": "Correct: the sound can support a texture observation about crispness. Review help-m06-s01-sense-evidence.",
              "helpAnchor": "help-m06-s01-sense-evidence",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "As proof that the flavour is savoury",
              "correct": false,
              "feedback": "Sound may support texture evidence but cannot prove a savoury flavour. Review help-m06-s01-sense-evidence.",
              "helpAnchor": "help-m06-s01-sense-evidence",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "To replace all texture observations",
              "correct": false,
              "feedback": "Hearing can support crispness, but texture should still use relevant sensory observations. Review help-m06-s01-sense-evidence.",
              "helpAnchor": "help-m06-s01-sense-evidence",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "It must be ignored in every evaluation",
              "correct": false,
              "feedback": "Hearing can contribute when it safely supports observations such as crispness. Review help-m06-s01-sense-evidence.",
              "helpAnchor": "help-m06-s01-sense-evidence",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m06-s01-q9",
          "focus": "compare or evaluate",
          "theoryAnchor": "help-m06-s01-sense-evidence",
          "prompt": "Which pair better separates sensory evidence from personal preference?",
          "hint": "Look for one observable description and one liking statement.",
          "options": [
            {
              "id": "a",
              "text": "Crisp base; I prefer softer bases",
              "correct": true,
              "feedback": "Correct: crisp base is evidence, while preferring softness clearly states personal preference. Review help-m06-s01-sense-evidence.",
              "helpAnchor": "help-m06-s01-sense-evidence",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Delicious flavour; excellent quality",
              "correct": false,
              "feedback": "Both are broad judgements without enough specific sensory evidence. Review help-m06-s01-sense-evidence.",
              "helpAnchor": "help-m06-s01-sense-evidence",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "My favourite; everyone will enjoy it",
              "correct": false,
              "feedback": "Both claims concern preference and unsupported assumptions about others. Review help-m06-s01-sense-evidence.",
              "helpAnchor": "help-m06-s01-sense-evidence",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Perfect texture; best pizza ever",
              "correct": false,
              "feedback": "Both are subjective judgements rather than specific observations. Review help-m06-s01-sense-evidence.",
              "helpAnchor": "help-m06-s01-sense-evidence",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m06-s01-q10",
          "focus": "transfer to a fresh situation",
          "theoryAnchor": "help-m06-s01-sensory-headings",
          "prompt": "A student evaluates vegetable fritters. Which set best fits appearance, aroma, flavour and texture headings?",
          "hint": "Choose specific observations matching all four headings.",
          "options": [
            {
              "id": "a",
              "text": "Golden; herby; savoury; crisp-edged",
              "correct": true,
              "feedback": "Correct: each specific descriptor aligns with appearance, aroma, flavour and texture respectively. Review help-m06-s01-sensory-headings.",
              "helpAnchor": "help-m06-s01-sensory-headings",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Tasty; nice; yummy; excellent",
              "correct": false,
              "feedback": "These are vague judgements rather than specific observations under sensory headings. Review help-m06-s01-sensory-headings.",
              "helpAnchor": "help-m06-s01-sensory-headings",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Crunchy; golden; fragrant; salty",
              "correct": false,
              "feedback": "These observations are useful but do not follow the requested heading order. Review help-m06-s01-sensory-headings.",
              "helpAnchor": "help-m06-s01-sensory-headings",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Popular; healthy; cheap; filling",
              "correct": false,
              "feedback": "These claims do not provide the requested appearance, aroma, flavour and texture evidence. Review help-m06-s01-sensory-headings.",
              "helpAnchor": "help-m06-s01-sensory-headings",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        }
      ],
      "label": "Formative learning evidence"
    },
    {
      "sectionId": "m06-s02",
      "knowledgeCheckId": "kc-m06-s02",
      "title": "Precise sensory language and fair comparisons",
      "theoryAnchors": [
        "help-m06-s02-descriptor-bank",
        "help-m06-s02-fair-comparison",
        "help-m06-s02-neutral-recording"
      ],
      "sourceIds": [
        "food-knowledge",
        "assessment-workbook"
      ],
      "hintPolicy": "answer-neutral",
      "feedbackTiming": "after check only",
      "questions": [
        {
          "id": "kc-m06-s02-q1",
          "focus": "essential idea",
          "theoryAnchor": "help-m06-s02-descriptor-bank",
          "prompt": "Which observation provides the strongest sensory evidence about a muffin?",
          "hint": "Look for information describing a specific sensory quality.",
          "options": [
            {
              "id": "a",
              "text": "It is a good muffin.",
              "correct": false,
              "feedback": "Good gives approval but no specific sensory quality, so use precise descriptors instead. Review help-m06-s02-descriptor-bank.",
              "helpAnchor": "help-m06-s02-descriptor-bank",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Its crumb feels soft and springy.",
              "correct": true,
              "feedback": "Soft and springy precisely describe texture and provide useful sensory evidence. Review help-m06-s02-descriptor-bank.",
              "helpAnchor": "help-m06-s02-descriptor-bank",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "I would buy this one.",
              "correct": false,
              "feedback": "Buying intention expresses preference rather than describing a sensory quality. Review help-m06-s02-descriptor-bank.",
              "helpAnchor": "help-m06-s02-descriptor-bank",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "My friend likes this sample.",
              "correct": false,
              "feedback": "Another person's preference does not provide a precise sensory observation. Review help-m06-s02-descriptor-bank.",
              "helpAnchor": "help-m06-s02-descriptor-bank",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m06-s02-q2",
          "focus": "precise detail",
          "theoryAnchor": "help-m06-s02-descriptor-bank",
          "prompt": "Which wording most precisely compares the aroma of two samples?",
          "hint": "Choose wording that identifies both a sensory attribute and difference.",
          "options": [
            {
              "id": "a",
              "text": "Sample A is nicer.",
              "correct": false,
              "feedback": "Nicer is vague approval and does not identify the aroma difference. Review help-m06-s02-descriptor-bank.",
              "helpAnchor": "help-m06-s02-descriptor-bank",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Both samples smell fine.",
              "correct": false,
              "feedback": "Fine is vague and does not precisely compare aroma intensity. Review help-m06-s02-descriptor-bank.",
              "helpAnchor": "help-m06-s02-descriptor-bank",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Sample A has a stronger cinnamon aroma.",
              "correct": true,
              "feedback": "Stronger cinnamon aroma identifies the attribute and clearly communicates the difference. Review help-m06-s02-descriptor-bank.",
              "helpAnchor": "help-m06-s02-descriptor-bank",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Sample B seems better.",
              "correct": false,
              "feedback": "Better gives a judgement without specifying what differs about aroma. Review help-m06-s02-descriptor-bank.",
              "helpAnchor": "help-m06-s02-descriptor-bank",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m06-s02-q3",
          "focus": "concept connection",
          "theoryAnchor": "help-m06-s02-neutral-recording",
          "prompt": "Why should preference be recorded separately from sensory evidence?",
          "hint": "Consider the difference between personal liking and observable qualities.",
          "options": [
            {
              "id": "a",
              "text": "Preference can replace texture observations.",
              "correct": false,
              "feedback": "Preference cannot replace recorded sensory qualities such as texture. Review help-m06-s02-neutral-recording.",
              "helpAnchor": "help-m06-s02-neutral-recording",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Preference proves which recipe is correct.",
              "correct": false,
              "feedback": "Personal liking does not prove that one recipe has higher sensory quality. Review help-m06-s02-neutral-recording.",
              "helpAnchor": "help-m06-s02-neutral-recording",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Preference is personal, while evidence describes qualities.",
              "correct": true,
              "feedback": "Separating preference helps conclusions remain based on recorded sensory qualities. Review help-m06-s02-neutral-recording.",
              "helpAnchor": "help-m06-s02-neutral-recording",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Preference matters only for appearance.",
              "correct": false,
              "feedback": "Preference can involve many sensory attributes, so it should remain separate from evidence. Review help-m06-s02-neutral-recording.",
              "helpAnchor": "help-m06-s02-neutral-recording",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m06-s02-q4",
          "focus": "process or sequence",
          "theoryAnchor": "help-m06-s02-fair-comparison",
          "prompt": "Before comparing two coded muffin samples, what should the group establish first?",
          "hint": "Think about conditions needed before useful observations are collected.",
          "options": [
            {
              "id": "a",
              "text": "Which sample everyone expects to prefer.",
              "correct": false,
              "feedback": "Predicting preference can introduce expectations rather than establish fair comparison conditions. Review help-m06-s02-fair-comparison.",
              "helpAnchor": "help-m06-s02-fair-comparison",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Similar portions and serving conditions.",
              "correct": true,
              "feedback": "Similar portions and serving conditions help isolate the planned difference fairly. Review help-m06-s02-fair-comparison.",
              "helpAnchor": "help-m06-s02-fair-comparison",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "The brand of each ingredient.",
              "correct": false,
              "feedback": "Brand information can create expectations and is unnecessary for establishing fair serving conditions. Review help-m06-s02-fair-comparison.",
              "helpAnchor": "help-m06-s02-fair-comparison",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "A winner before tasting begins.",
              "correct": false,
              "feedback": "Choosing a winner beforehand introduces bias instead of supporting a fair comparison. Review help-m06-s02-fair-comparison.",
              "helpAnchor": "help-m06-s02-fair-comparison",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m06-s02-q5",
          "focus": "vocabulary in context",
          "theoryAnchor": "help-m06-s02-descriptor-bank",
          "prompt": "In a sensory comparison, which word is a comparative texture descriptor?",
          "hint": "Find the word that directly expresses a difference in texture.",
          "options": [
            {
              "id": "a",
              "text": "Softer",
              "correct": true,
              "feedback": "Softer compares texture by indicating a relative difference between samples. Review help-m06-s02-descriptor-bank.",
              "helpAnchor": "help-m06-s02-descriptor-bank",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Delicious",
              "correct": false,
              "feedback": "Delicious expresses approval rather than a specific comparative texture quality. Review help-m06-s02-descriptor-bank.",
              "helpAnchor": "help-m06-s02-descriptor-bank",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Favourite",
              "correct": false,
              "feedback": "Favourite expresses personal preference rather than comparative sensory texture. Review help-m06-s02-descriptor-bank.",
              "helpAnchor": "help-m06-s02-descriptor-bank",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Acceptable",
              "correct": false,
              "feedback": "Acceptable gives a judgement but does not describe a specific texture difference. Review help-m06-s02-descriptor-bank.",
              "helpAnchor": "help-m06-s02-descriptor-bank",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m06-s02-q6",
          "focus": "worked-example interpretation",
          "theoryAnchor": "help-m06-s02-fair-comparison",
          "prompt": "In the muffin example, why should an unrelated appearance difference be controlled?",
          "hint": "Focus on what must remain comparable when examining one planned difference.",
          "options": [
            {
              "id": "a",
              "text": "It could influence conclusions about the planned difference.",
              "correct": true,
              "feedback": "An unrelated appearance difference could confound observations and weaken the fairness of the comparison. Review help-m06-s02-fair-comparison.",
              "helpAnchor": "help-m06-s02-fair-comparison",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Appearance can never be sensory evidence.",
              "correct": false,
              "feedback": "Appearance is valid sensory evidence when it is relevant to the comparison. Review help-m06-s02-fair-comparison.",
              "helpAnchor": "help-m06-s02-fair-comparison",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "All muffins must look identical.",
              "correct": false,
              "feedback": "Samples need controlled conditions, not complete visual identity, when examining a planned difference. Review help-m06-s02-fair-comparison.",
              "helpAnchor": "help-m06-s02-fair-comparison",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Students should judge brands instead.",
              "correct": false,
              "feedback": "Brand judgement can introduce expectations rather than control the planned comparison. Review help-m06-s02-fair-comparison.",
              "helpAnchor": "help-m06-s02-fair-comparison",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m06-s02-q7",
          "focus": "misconception",
          "theoryAnchor": "help-m06-s02-neutral-recording",
          "prompt": "A student prefers Sample B. Which conclusion best avoids the preference misconception?",
          "hint": "Choose a conclusion supported by evidence rather than personal liking.",
          "options": [
            {
              "id": "a",
              "text": "Sample B is automatically higher quality.",
              "correct": false,
              "feedback": "Preference alone cannot establish higher sensory quality without recorded evidence. Review help-m06-s02-neutral-recording.",
              "helpAnchor": "help-m06-s02-neutral-recording",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Sample A must have failed.",
              "correct": false,
              "feedback": "Disliking a sample does not show that it failed sensory quality requirements. Review help-m06-s02-neutral-recording.",
              "helpAnchor": "help-m06-s02-neutral-recording",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Sample B wins because I liked it.",
              "correct": false,
              "feedback": "This conclusion substitutes personal preference for neutral sensory evidence. Review help-m06-s02-neutral-recording.",
              "helpAnchor": "help-m06-s02-neutral-recording",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "I prefer B, but evidence should support quality claims.",
              "correct": true,
              "feedback": "This separates personal preference from conclusions based on recorded sensory evidence. Review help-m06-s02-neutral-recording.",
              "helpAnchor": "help-m06-s02-neutral-recording",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m06-s02-q8",
          "focus": "practical or design decision",
          "theoryAnchor": "help-m06-s02-fair-comparison",
          "prompt": "Which setup best tests one planned recipe difference between two food samples?",
          "hint": "Look for the setup that changes one factor while controlling others.",
          "options": [
            {
              "id": "a",
              "text": "Different portions served at different temperatures.",
              "correct": false,
              "feedback": "Changing portion and temperature adds factors that can affect the comparison. Review help-m06-s02-fair-comparison.",
              "helpAnchor": "help-m06-s02-fair-comparison",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Similar portions with one recipe variable changed.",
              "correct": true,
              "feedback": "Controlling portions while changing one variable supports a fair comparison. Review help-m06-s02-fair-comparison.",
              "helpAnchor": "help-m06-s02-fair-comparison",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Named brands displayed beside unequal portions.",
              "correct": false,
              "feedback": "Visible brands and unequal portions can introduce expectations and uncontrolled differences. Review help-m06-s02-fair-comparison.",
              "helpAnchor": "help-m06-s02-fair-comparison",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Several ingredients changed between samples.",
              "correct": false,
              "feedback": "Changing several ingredients makes it difficult to link sensory differences to one variable. Review help-m06-s02-fair-comparison.",
              "helpAnchor": "help-m06-s02-fair-comparison",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m06-s02-q9",
          "focus": "compare or evaluate",
          "theoryAnchor": "help-m06-s02-neutral-recording",
          "prompt": "Which record best supports a neutral comparison of flavour?",
          "hint": "Select matched evidence that describes both samples without ranking preference.",
          "options": [
            {
              "id": "a",
              "text": "A: best; B: disappointing.",
              "correct": false,
              "feedback": "Best and disappointing are judgements rather than matched flavour evidence. Review help-m06-s02-neutral-recording.",
              "helpAnchor": "help-m06-s02-neutral-recording",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "A: sweeter; B: less sweet.",
              "correct": true,
              "feedback": "These matched comparative descriptors record the flavour difference without adding personal preference. Review help-m06-s02-neutral-recording.",
              "helpAnchor": "help-m06-s02-neutral-recording",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "A: favourite; B: not favourite.",
              "correct": false,
              "feedback": "Favourite records personal liking rather than neutral flavour evidence. Review help-m06-s02-neutral-recording.",
              "helpAnchor": "help-m06-s02-neutral-recording",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "A: good; B: bad.",
              "correct": false,
              "feedback": "Good and bad are vague judgements that do not identify the flavour difference. Review help-m06-s02-neutral-recording.",
              "helpAnchor": "help-m06-s02-neutral-recording",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m06-s02-q10",
          "focus": "transfer to a fresh situation",
          "theoryAnchor": "help-m06-s02-fair-comparison",
          "prompt": "Two crackers differ only in baking time. Which approach gives the fairest texture comparison?",
          "hint": "Apply the same fair-comparison principles to this new food.",
          "options": [
            {
              "id": "a",
              "text": "Serve similar pieces under matching conditions.",
              "correct": true,
              "feedback": "Matching portions and conditions helps link texture differences to baking time. Review help-m06-s02-fair-comparison.",
              "helpAnchor": "help-m06-s02-fair-comparison",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Reveal brands before students compare them.",
              "correct": false,
              "feedback": "Brand information may create expectations that influence sensory judgements. Review help-m06-s02-fair-comparison.",
              "helpAnchor": "help-m06-s02-fair-comparison",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Serve one warm and one chilled.",
              "correct": false,
              "feedback": "Different serving temperatures introduce another variable that may affect texture. Review help-m06-s02-fair-comparison.",
              "helpAnchor": "help-m06-s02-fair-comparison",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Add seasoning to only one sample.",
              "correct": false,
              "feedback": "Extra seasoning introduces an unrelated difference and reduces comparison fairness. Review help-m06-s02-fair-comparison.",
              "helpAnchor": "help-m06-s02-fair-comparison",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        }
      ],
      "label": "Formative learning evidence"
    },
    {
      "sectionId": "m06-s03",
      "knowledgeCheckId": "kc-m06-s03",
      "title": "Using evidence to improve food",
      "theoryAnchors": [
        "help-m06-s03-evidence-patterns",
        "help-m06-s03-criterion-to-change",
        "help-m06-s03-next-trial"
      ],
      "sourceIds": [
        "food-knowledge",
        "assessment-workbook"
      ],
      "hintPolicy": "answer-neutral",
      "feedbackTiming": "after check only",
      "questions": [
        {
          "id": "kc-m06-s03-q1",
          "focus": "essential idea",
          "theoryAnchor": "help-m06-s03-evidence-patterns",
          "prompt": "Why compare sensory observations with clear criteria when planning an improvement?",
          "hint": "Consider what makes evidence useful for deciding a change.",
          "options": [
            {
              "id": "a",
              "text": "To connect evidence with intended qualities",
              "correct": true,
              "feedback": "Correct: criteria give observations a relevant basis for identifying improvement needs. Review help-m06-s03-evidence-patterns.",
              "helpAnchor": "help-m06-s03-evidence-patterns",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "To guarantee the next trial succeeds",
              "correct": false,
              "feedback": "Classroom sensory evidence guides a next trial but cannot guarantee its result. Review help-m06-s03-next-trial.",
              "helpAnchor": "help-m06-s03-next-trial",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "To select the most popular food",
              "correct": false,
              "feedback": "Popularity reflects preference, not necessarily whether intended sensory criteria were achieved. Review help-m06-s03-evidence-patterns.",
              "helpAnchor": "help-m06-s03-evidence-patterns",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "To change every feature together",
              "correct": false,
              "feedback": "Changing many features weakens the ability to link evidence with one controllable improvement. Review help-m06-s03-criterion-to-change.",
              "helpAnchor": "help-m06-s03-criterion-to-change",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m06-s03-q2",
          "focus": "precise detail",
          "theoryAnchor": "help-m06-s03-evidence-patterns",
          "prompt": "Which evidence provides stronger support for investigating uneven appearance?",
          "hint": "Look for evidence that occurs consistently rather than once.",
          "options": [
            {
              "id": "a",
              "text": "One person preferred another food",
              "correct": false,
              "feedback": "A single preference comment does not directly establish a pattern about appearance. Review help-m06-s03-evidence-patterns.",
              "helpAnchor": "help-m06-s03-evidence-patterns",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Several notes identify uneven appearance",
              "correct": true,
              "feedback": "Repeated observations about uneven appearance form a relevant pattern linked to that quality. Review help-m06-s03-evidence-patterns.",
              "helpAnchor": "help-m06-s03-evidence-patterns",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "One person liked the flavour",
              "correct": false,
              "feedback": "A flavour comment does not provide direct evidence about the appearance criterion. Review help-m06-s03-evidence-patterns.",
              "helpAnchor": "help-m06-s03-evidence-patterns",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "The group wants rapid improvement",
              "correct": false,
              "feedback": "A group intention is not sensory evidence showing a pattern in appearance. Review help-m06-s03-evidence-patterns.",
              "helpAnchor": "help-m06-s03-evidence-patterns",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m06-s03-q3",
          "focus": "concept connection",
          "theoryAnchor": "help-m06-s03-criterion-to-change",
          "prompt": "How should an identified evidence pattern connect to a proposed food improvement?",
          "hint": "Think about the link between observations, criteria and control.",
          "options": [
            {
              "id": "a",
              "text": "It should identify a controllable feature",
              "correct": true,
              "feedback": "Correct: a useful change targets a controllable feature connected to relevant evidence and criteria. Review help-m06-s03-criterion-to-change.",
              "helpAnchor": "help-m06-s03-criterion-to-change",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "It should follow personal preference only",
              "correct": false,
              "feedback": "Preference alone may not show which controllable feature relates to the intended criterion. Review help-m06-s03-criterion-to-change.",
              "helpAnchor": "help-m06-s03-criterion-to-change",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "It should remove all uncertainty",
              "correct": false,
              "feedback": "A proposed change supports another trial rather than removing uncertainty about future results. Review help-m06-s03-next-trial.",
              "helpAnchor": "help-m06-s03-next-trial",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "It should alter unrelated qualities",
              "correct": false,
              "feedback": "Unrelated changes do not create a justified connection between the evidence and criterion. Review help-m06-s03-criterion-to-change.",
              "helpAnchor": "help-m06-s03-criterion-to-change",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m06-s03-q4",
          "focus": "process or sequence",
          "theoryAnchor": "help-m06-s03-next-trial",
          "prompt": "After finding a repeated sensory issue and linking it to a criterion, what should happen next?",
          "hint": "Choose the next step that enables useful comparison.",
          "options": [
            {
              "id": "a",
              "text": "Plan one controllable change for trial",
              "correct": true,
              "feedback": "Correct: one main controllable change allows its influence to be examined in the next trial. Review help-m06-s03-next-trial.",
              "helpAnchor": "help-m06-s03-next-trial",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Declare the final solution proven",
              "correct": false,
              "feedback": "Existing classroom evidence supports another trial, not certainty that a solution is proven. Review help-m06-s03-next-trial.",
              "helpAnchor": "help-m06-s03-next-trial",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Ignore limitations in the evidence",
              "correct": false,
              "feedback": "Limitations matter when deciding how confidently evidence can support a next trial. Review help-m06-s03-next-trial.",
              "helpAnchor": "help-m06-s03-next-trial",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Change several features simultaneously",
              "correct": false,
              "feedback": "Multiple simultaneous changes make it harder to judge which change influenced the result. Review help-m06-s03-next-trial.",
              "helpAnchor": "help-m06-s03-next-trial",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m06-s03-q5",
          "focus": "vocabulary in context",
          "theoryAnchor": "help-m06-s03-criterion-to-change",
          "prompt": "In this evaluation, what does controllable mean when describing a feature?",
          "hint": "Consider what the group can deliberately adjust.",
          "options": [
            {
              "id": "a",
              "text": "A feature the group can change",
              "correct": true,
              "feedback": "Correct: a controllable feature can be deliberately adjusted when planning the next trial. Review help-m06-s03-criterion-to-change.",
              "helpAnchor": "help-m06-s03-criterion-to-change",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "A preference shared by everyone",
              "correct": false,
              "feedback": "Agreement about preference is evidence from people, not a feature the group directly controls. Review help-m06-s03-criterion-to-change.",
              "helpAnchor": "help-m06-s03-criterion-to-change",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "A result certain to occur",
              "correct": false,
              "feedback": "Controllable describes what can be adjusted, not whether a future result is certain. Review help-m06-s03-next-trial.",
              "helpAnchor": "help-m06-s03-next-trial",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "An observation recorded repeatedly",
              "correct": false,
              "feedback": "Repeated observations form an evidence pattern but are not themselves a controllable feature. Review help-m06-s03-evidence-patterns.",
              "helpAnchor": "help-m06-s03-evidence-patterns",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m06-s03-q6",
          "focus": "worked-example interpretation",
          "theoryAnchor": "help-m06-s03-criterion-to-change",
          "prompt": "Several party-food notes report a soft outer texture. Which response best uses the worked-example approach?",
          "hint": "Match the evidence to an intended quality before changing something.",
          "options": [
            {
              "id": "a",
              "text": "Investigate one factor affecting crispness",
              "correct": true,
              "feedback": "Correct: repeated texture evidence can justify investigating one controllable factor related to crispness. Review help-m06-s03-criterion-to-change.",
              "helpAnchor": "help-m06-s03-criterion-to-change",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Change appearance and texture together",
              "correct": false,
              "feedback": "Changing two qualities together makes the influence of each change harder to interpret. Review help-m06-s03-next-trial.",
              "helpAnchor": "help-m06-s03-next-trial",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Assume every taster disliked it",
              "correct": false,
              "feedback": "Soft-texture observations do not establish an unrecorded preference for every taster. Review help-m06-s03-evidence-patterns.",
              "helpAnchor": "help-m06-s03-evidence-patterns",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Claim the next version will crisp",
              "correct": false,
              "feedback": "The evidence can justify a trial but cannot establish an unrecorded future result. Review help-m06-s03-next-trial.",
              "helpAnchor": "help-m06-s03-next-trial",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m06-s03-q7",
          "focus": "misconception",
          "theoryAnchor": "help-m06-s03-evidence-patterns",
          "prompt": "Most tasters prefer Sample A, but repeated notes show it misses an intended texture criterion. What matters for improvement?",
          "hint": "Separate general preference from evidence about intended qualities.",
          "options": [
            {
              "id": "a",
              "text": "Preference and relevant sensory evidence",
              "correct": true,
              "feedback": "Correct: improvement decisions should consider preference alongside sensory evidence linked to intended criteria. Review help-m06-s03-evidence-patterns.",
              "helpAnchor": "help-m06-s03-evidence-patterns",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Preference alone decides every change",
              "correct": false,
              "feedback": "Popularity alone does not identify whether an intended sensory criterion needs improvement. Review help-m06-s03-evidence-patterns.",
              "helpAnchor": "help-m06-s03-evidence-patterns",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "The texture evidence should be discarded",
              "correct": false,
              "feedback": "Repeated texture observations remain relevant evidence when texture is an intended criterion. Review help-m06-s03-evidence-patterns.",
              "helpAnchor": "help-m06-s03-evidence-patterns",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "All product features need changing",
              "correct": false,
              "feedback": "Evidence about one criterion does not justify changing every feature of the product. Review help-m06-s03-criterion-to-change.",
              "helpAnchor": "help-m06-s03-criterion-to-change",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m06-s03-q8",
          "focus": "practical or design decision",
          "theoryAnchor": "help-m06-s03-next-trial",
          "prompt": "A group wants to test whether portion thickness affects crispness. Which next-trial plan is most useful?",
          "hint": "Think about isolating the feature being investigated.",
          "options": [
            {
              "id": "a",
              "text": "Change thickness while holding others steady",
              "correct": true,
              "feedback": "Correct: isolating thickness makes its possible influence on crispness easier to judge. Review help-m06-s03-next-trial.",
              "helpAnchor": "help-m06-s03-next-trial",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Change thickness, ingredients and cooking method",
              "correct": false,
              "feedback": "Several changes together make it difficult to identify what influenced crispness. Review help-m06-s03-next-trial.",
              "helpAnchor": "help-m06-s03-next-trial",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Keep everything identical without another trial",
              "correct": false,
              "feedback": "Without testing the proposed change, the group cannot gather new evidence about its influence. Review help-m06-s03-next-trial.",
              "helpAnchor": "help-m06-s03-next-trial",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Choose thickness from popularity comments",
              "correct": false,
              "feedback": "General popularity comments do not directly show how thickness influences the crispness criterion. Review help-m06-s03-criterion-to-change.",
              "helpAnchor": "help-m06-s03-criterion-to-change",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m06-s03-q9",
          "focus": "compare or evaluate",
          "theoryAnchor": "help-m06-s03-evidence-patterns",
          "prompt": "Which evidence set gives the stronger basis for changing an uneven appearance?",
          "hint": "Compare relevance and repetition across the evidence sets.",
          "options": [
            {
              "id": "a",
              "text": "Several repeated notes about uneven appearance",
              "correct": true,
              "feedback": "Correct: repeated observations directly linked to appearance provide stronger relevant support for investigating it. Review help-m06-s03-evidence-patterns.",
              "helpAnchor": "help-m06-s03-evidence-patterns",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "One comment praising the aroma",
              "correct": false,
              "feedback": "One aroma comment is isolated and does not address the appearance criterion. Review help-m06-s03-evidence-patterns.",
              "helpAnchor": "help-m06-s03-evidence-patterns",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "A vote for favourite sample",
              "correct": false,
              "feedback": "A favourite-sample vote indicates preference without explaining whether appearance met its criterion. Review help-m06-s03-evidence-patterns.",
              "helpAnchor": "help-m06-s03-evidence-patterns",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "A prediction about future colour",
              "correct": false,
              "feedback": "A prediction is not recorded sensory evidence about the current appearance. Review help-m06-s03-evidence-patterns.",
              "helpAnchor": "help-m06-s03-evidence-patterns",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m06-s03-q10",
          "focus": "transfer to a fresh situation",
          "theoryAnchor": "help-m06-s03-criterion-to-change",
          "prompt": "A baked snack should be evenly browned, but several notes report pale centres. Which proposal is best justified?",
          "hint": "Use the criterion and pattern to select one testable direction.",
          "options": [
            {
              "id": "a",
              "text": "Trial one controllable browning-related factor",
              "correct": true,
              "feedback": "Correct: the repeated browning evidence supports testing one controllable factor linked to even appearance. Review help-m06-s03-criterion-to-change.",
              "helpAnchor": "help-m06-s03-criterion-to-change",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Replace the snack because one taster objects",
              "correct": false,
              "feedback": "One preference does not outweigh the relevant repeated evidence about the intended appearance criterion. Review help-m06-s03-evidence-patterns.",
              "helpAnchor": "help-m06-s03-evidence-patterns",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Change every preparation variable together",
              "correct": false,
              "feedback": "Changing every variable prevents a clear judgement about which factor influenced the next result. Review help-m06-s03-next-trial.",
              "helpAnchor": "help-m06-s03-next-trial",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Guarantee darker centres next time",
              "correct": false,
              "feedback": "Current observations can guide a trial but cannot guarantee the next sensory result. Review help-m06-s03-next-trial.",
              "helpAnchor": "help-m06-s03-next-trial",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        }
      ],
      "label": "Formative learning evidence"
    },
    {
      "sectionId": "m07-s01",
      "knowledgeCheckId": "kc-m07-s01",
      "title": "Farm-to-plate systems knowledge check",
      "theoryAnchors": [
        "help-m07-s01-system-stages",
        "help-m07-s01-connections",
        "help-m07-s01-trace-the-product"
      ],
      "sourceIds": [
        "food-knowledge",
        "course-program"
      ],
      "hintPolicy": "answer-neutral",
      "feedbackTiming": "after check only",
      "questions": [
        {
          "id": "kc-m07-s01-q1",
          "focus": "essential idea",
          "theoryAnchor": "help-m07-s01-system-stages",
          "prompt": "What is the essential idea of a farm-to-plate food system?",
          "hint": "Think beyond cooking to connected stages before and after eating.",
          "options": [
            {
              "id": "a",
              "text": "It connects food stages from inputs through recovery",
              "correct": true,
              "feedback": "Correct: food systems connect multiple stages from inputs through consumption and recovery; see help-m07-s01-system-stages.",
              "helpAnchor": "help-m07-s01-system-stages",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "It describes only how farms produce ingredients",
              "correct": false,
              "feedback": "Farming is one part, not the whole connected system; see help-m07-s01-system-stages.",
              "helpAnchor": "help-m07-s01-system-stages",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "It begins when ingredients enter the kitchen",
              "correct": false,
              "feedback": "Important production and movement stages occur before kitchen preparation; see help-m07-s01-system-stages.",
              "helpAnchor": "help-m07-s01-system-stages",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "It finishes when customers buy the food",
              "correct": false,
              "feedback": "Consumption, waste and recovery can occur after purchase; see help-m07-s01-system-stages.",
              "helpAnchor": "help-m07-s01-system-stages",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m07-s01-q2",
          "focus": "precise detail",
          "theoryAnchor": "help-m07-s01-system-stages",
          "prompt": "Which stage can occur between primary production and retail for canned tomatoes?",
          "hint": "Consider what changes a harvested tomato before sale.",
          "options": [
            {
              "id": "a",
              "text": "Consumption",
              "correct": false,
              "feedback": "Consumption occurs when food is eaten, not while tomatoes are being changed for sale; see help-m07-s01-system-stages.",
              "helpAnchor": "help-m07-s01-system-stages",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Processing",
              "correct": true,
              "feedback": "Correct: processing can transform harvested tomatoes into a canned product before retail; see help-m07-s01-system-stages.",
              "helpAnchor": "help-m07-s01-system-stages",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Recovery",
              "correct": false,
              "feedback": "Recovery concerns materials after use rather than transforming tomatoes for retail; see help-m07-s01-system-stages.",
              "helpAnchor": "help-m07-s01-system-stages",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Preparation for eating",
              "correct": false,
              "feedback": "Preparation for eating usually occurs later than processing for retail; see help-m07-s01-system-stages.",
              "helpAnchor": "help-m07-s01-system-stages",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m07-s01-q3",
          "focus": "concept connection",
          "theoryAnchor": "help-m07-s01-connections",
          "prompt": "How could changing transport refrigeration affect another part of a food system?",
          "hint": "Connect one stage decision with quality, safety, cost, people or environment.",
          "options": [
            {
              "id": "a",
              "text": "It could alter food safety and energy use",
              "correct": true,
              "feedback": "Correct: refrigeration decisions can affect safety and environmental impacts elsewhere; see help-m07-s01-connections.",
              "helpAnchor": "help-m07-s01-connections",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "It guarantees lower prices at retail",
              "correct": false,
              "feedback": "Transport choices can influence cost but cannot guarantee a lower retail price; see help-m07-s01-connections.",
              "helpAnchor": "help-m07-s01-connections",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "It changes only the transport stage",
              "correct": false,
              "feedback": "A transport decision can create consequences across connected stages; see help-m07-s01-connections.",
              "helpAnchor": "help-m07-s01-connections",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "It removes the need for packaging",
              "correct": false,
              "feedback": "Refrigeration does not automatically remove packaging requirements or impacts; see help-m07-s01-connections.",
              "helpAnchor": "help-m07-s01-connections",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m07-s01-q4",
          "focus": "process or sequence",
          "theoryAnchor": "help-m07-s01-trace-the-product",
          "prompt": "Which sequence best traces fresh lettuce used in a school sandwich?",
          "hint": "Follow the ingredient from production towards use and what happens afterwards.",
          "options": [
            {
              "id": "a",
              "text": "Farm, transport, retail, preparation, consumption, scraps",
              "correct": true,
              "feedback": "Correct: this sequence follows relevant stages from production through use and remaining scraps; see help-m07-s01-trace-the-product.",
              "helpAnchor": "help-m07-s01-trace-the-product",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Retail, farm, preparation, transport, consumption, scraps",
              "correct": false,
              "feedback": "This places farming and transport after retail rather than tracing the ingredient logically; see help-m07-s01-trace-the-product.",
              "helpAnchor": "help-m07-s01-trace-the-product",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Preparation, retail, farm, consumption, transport, scraps",
              "correct": false,
              "feedback": "Preparation cannot sensibly precede the production and retail stages in this trace; see help-m07-s01-trace-the-product.",
              "helpAnchor": "help-m07-s01-trace-the-product",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Farm, consumption, transport, retail, preparation, scraps",
              "correct": false,
              "feedback": "Consumption occurs after the lettuce reaches preparation, not directly after farming; see help-m07-s01-trace-the-product.",
              "helpAnchor": "help-m07-s01-trace-the-product",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m07-s01-q5",
          "focus": "vocabulary in context",
          "theoryAnchor": "help-m07-s01-system-stages",
          "prompt": "A school composts vegetable peelings after cooking. Which food-system term best describes this?",
          "hint": "Identify what happens to materials remaining after preparation.",
          "options": [
            {
              "id": "a",
              "text": "Primary production",
              "correct": false,
              "feedback": "Primary production creates food ingredients rather than managing kitchen peelings; see help-m07-s01-system-stages.",
              "helpAnchor": "help-m07-s01-system-stages",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Retail",
              "correct": false,
              "feedback": "Retail involves supplying or selling food, not managing preparation scraps; see help-m07-s01-system-stages.",
              "helpAnchor": "help-m07-s01-system-stages",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Recovery",
              "correct": true,
              "feedback": "Correct: composting recovers value from food scraps rather than simply discarding them; see help-m07-s01-system-stages.",
              "helpAnchor": "help-m07-s01-system-stages",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Packaging",
              "correct": false,
              "feedback": "Packaging contains or protects products and does not describe composting peelings; see help-m07-s01-system-stages.",
              "helpAnchor": "help-m07-s01-system-stages",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m07-s01-q6",
          "focus": "worked-example interpretation",
          "theoryAnchor": "help-m07-s01-trace-the-product",
          "prompt": "For the tomato pasta example, which investigation best matches the worked example?",
          "hint": "The example asks you to trace rather than focus on one kitchen task.",
          "options": [
            {
              "id": "a",
              "text": "Compare only two pasta cooking times",
              "correct": false,
              "feedback": "Cooking times examine preparation only rather than tracing the tomato system; see help-m07-s01-trace-the-product.",
              "helpAnchor": "help-m07-s01-trace-the-product",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Trace tomatoes from production through leftovers or recovery",
              "correct": true,
              "feedback": "Correct: this follows the tomato through relevant connected stages beyond cooking; see help-m07-s01-trace-the-product.",
              "helpAnchor": "help-m07-s01-trace-the-product",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Measure only the finished sauce temperature",
              "correct": false,
              "feedback": "Sauce temperature provides preparation evidence but does not trace the tomato system; see help-m07-s01-trace-the-product.",
              "helpAnchor": "help-m07-s01-trace-the-product",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Judge only the flavour of cooked tomatoes",
              "correct": false,
              "feedback": "Flavour evaluation focuses on the finished food rather than connected system stages; see help-m07-s01-trace-the-product.",
              "helpAnchor": "help-m07-s01-trace-the-product",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m07-s01-q7",
          "focus": "misconception",
          "theoryAnchor": "help-m07-s01-system-stages",
          "prompt": "Why is one identical farm-to-plate chain unsuitable for tracing every food?",
          "hint": "Consider whether all ingredients undergo the same stages.",
          "options": [
            {
              "id": "a",
              "text": "Food systems vary with the particular product",
              "correct": true,
              "feedback": "Correct: relevant stages differ between ingredients and products; see help-m07-s01-system-stages.",
              "helpAnchor": "help-m07-s01-system-stages",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Only processed foods have food systems",
              "correct": false,
              "feedback": "Fresh and processed foods both have systems, although their relevant stages can differ; see help-m07-s01-system-stages.",
              "helpAnchor": "help-m07-s01-system-stages",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Every ingredient skips primary production",
              "correct": false,
              "feedback": "Many ingredients involve primary production, although their later pathways may differ; see help-m07-s01-system-stages.",
              "helpAnchor": "help-m07-s01-system-stages",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Food systems describe recipes rather than ingredients",
              "correct": false,
              "feedback": "Food systems can trace individual ingredients and products beyond recipe preparation; see help-m07-s01-system-stages.",
              "helpAnchor": "help-m07-s01-system-stages",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m07-s01-q8",
          "focus": "practical or design decision",
          "theoryAnchor": "help-m07-s01-connections",
          "prompt": "A school wants less packaging waste from recipe ingredients. Which decision most directly addresses this?",
          "hint": "Choose a decision connected directly to packaging entering the kitchen.",
          "options": [
            {
              "id": "a",
              "text": "Buy suitable ingredients in larger pack sizes",
              "correct": true,
              "feedback": "Correct: suitable larger packs can reduce packaging units entering the kitchen; see help-m07-s01-connections.",
              "helpAnchor": "help-m07-s01-connections",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Cook every dish at higher temperatures",
              "correct": false,
              "feedback": "Higher cooking temperatures do not directly reduce ingredient packaging waste; see help-m07-s01-connections.",
              "helpAnchor": "help-m07-s01-connections",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Transport finished meals between classrooms",
              "correct": false,
              "feedback": "Moving meals between classrooms does not directly reduce incoming ingredient packaging; see help-m07-s01-connections.",
              "helpAnchor": "help-m07-s01-connections",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Add more ingredients to each recipe",
              "correct": false,
              "feedback": "Adding ingredients may increase rather than directly reduce packaging entering the kitchen; see help-m07-s01-connections.",
              "helpAnchor": "help-m07-s01-connections",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m07-s01-q9",
          "focus": "compare or evaluate",
          "theoryAnchor": "help-m07-s01-connections",
          "prompt": "Which comparison best evaluates two tomato supply options as connected systems?",
          "hint": "A strong comparison considers consequences across more than one stage.",
          "options": [
            {
              "id": "a",
              "text": "Compare only the colour of each tomato",
              "correct": false,
              "feedback": "Colour considers one quality feature without evaluating wider system consequences; see help-m07-s01-connections.",
              "helpAnchor": "help-m07-s01-connections",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Compare transport, packaging, cost, quality and waste",
              "correct": true,
              "feedback": "Correct: these factors reveal consequences across several connected system stages; see help-m07-s01-connections.",
              "helpAnchor": "help-m07-s01-connections",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Choose whichever tomato has brighter packaging",
              "correct": false,
              "feedback": "Package appearance alone provides too little evidence for a system comparison; see help-m07-s01-connections.",
              "helpAnchor": "help-m07-s01-connections",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Compare only their preparation knife skills",
              "correct": false,
              "feedback": "Knife skills concern preparation rather than comparing wider supply-system consequences; see help-m07-s01-connections.",
              "helpAnchor": "help-m07-s01-connections",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        },
        {
          "id": "kc-m07-s01-q10",
          "focus": "transfer to a fresh situation",
          "theoryAnchor": "help-m07-s01-trace-the-product",
          "prompt": "Your class uses frozen peas in soup. What is the strongest system trace?",
          "hint": "Include stages that are specifically relevant to this different product.",
          "options": [
            {
              "id": "a",
              "text": "Growing, processing, freezing, transport, preparation, recovery",
              "correct": true,
              "feedback": "Correct: the trace includes stages relevant to frozen peas and what happens after preparation; see help-m07-s01-trace-the-product.",
              "helpAnchor": "help-m07-s01-trace-the-product",
              "label": "Formative learning evidence"
            },
            {
              "id": "b",
              "text": "Growing, preparation, growing, retail, freezing, eating",
              "correct": false,
              "feedback": "This sequence repeats production and places freezing too late for frozen peas; see help-m07-s01-trace-the-product.",
              "helpAnchor": "help-m07-s01-trace-the-product",
              "label": "Formative learning evidence"
            },
            {
              "id": "c",
              "text": "Freezing, growing, eating, transport, preparation, packaging",
              "correct": false,
              "feedback": "This order does not trace peas logically from production towards consumption; see help-m07-s01-trace-the-product.",
              "helpAnchor": "help-m07-s01-trace-the-product",
              "label": "Formative learning evidence"
            },
            {
              "id": "d",
              "text": "Growing, eating, waste, processing, transport, preparation",
              "correct": false,
              "feedback": "Eating and waste cannot sensibly precede processing, transport and preparation in this trace; see help-m07-s01-trace-the-product.",
              "helpAnchor": "help-m07-s01-trace-the-product",
              "label": "Formative learning evidence"
            }
          ],
          "label": "Formative learning evidence"
        }
      ],
      "label": "Formative learning evidence"
    },
    {
      "sectionId": "m07-s02",
      "knowledgeCheckId": "kc-m07-s02",
      "title": "Australian food and fibre production — knowledge check",
      "label": "Formative learning evidence",
      "theoryAnchors": [
        "help-m07-s02-production-diversity",
        "help-m07-s02-conditions-and-decisions",
        "help-m07-s02-continuing-knowledge"
      ],
      "sourceIds": [
        "food-knowledge",
        "official-australian-production-guidance"
      ],
      "hintPolicy": "answer-neutral",
      "feedbackTiming": "after check only",
      "questions": [
        {
          "id": "kc-m07-s02-q1",
          "label": "Formative learning evidence",
          "focus": "essential idea",
          "theoryAnchor": "help-m07-s02-production-diversity",
          "prompt": "A class traces an Australian-grown carrot from production towards a vegetable wrap without assuming every producer uses the same system. Which statement gives the strongest starting explanation of Australian food and fibre production?",
          "hint": "Compare each option with the ideas under “People across Australian production”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Australian food production depends only on natural resources.",
              "correct": false,
              "feedback": "Environmental conditions matter, but production also depends on people, knowledge, skills, technologies, processing, distribution and markets. Revisit help-m07-s02-production-diversity.",
              "helpAnchor": "help-m07-s02-production-diversity"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in australian food and fibre production. Revisit help-m07-s02-production-diversity.",
              "helpAnchor": "help-m07-s02-production-diversity"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Australian food and fibre production includes people working in farming, fishing, horticulture, processing and distribution.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to people across australian production. Revisit help-m07-s02-production-diversity to consolidate the reasoning.",
              "helpAnchor": "help-m07-s02-production-diversity"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Food production is the same across Australia.",
              "correct": false,
              "feedback": "Production varies between ingredients, environments, regions, producers and systems, so examples should not be treated as applying everywhere. Revisit help-m07-s02-production-diversity.",
              "helpAnchor": "help-m07-s02-production-diversity"
            }
          ]
        },
        {
          "id": "kc-m07-s02-q2",
          "label": "Formative learning evidence",
          "focus": "concept connection",
          "theoryAnchor": "help-m07-s02-conditions-and-decisions",
          "prompt": "A class traces an Australian-grown carrot from production towards a vegetable wrap without assuming every producer uses the same system. Which response best connects “People across Australian production” with “Conditions that shape production”?",
          "hint": "Compare each option with the ideas under “Conditions that shape production”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Food production is the same across Australia.",
              "correct": false,
              "feedback": "Production varies between ingredients, environments, regions, producers and systems, so examples should not be treated as applying everywhere. Revisit help-m07-s02-conditions-and-decisions.",
              "helpAnchor": "help-m07-s02-conditions-and-decisions"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Climate, water, soil, technology, skills and markets can influence what is produced and how production decisions are made.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to conditions that shape production. Revisit help-m07-s02-conditions-and-decisions to consolidate the reasoning.",
              "helpAnchor": "help-m07-s02-conditions-and-decisions"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Only “People across Australian production” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m07-s02-conditions-and-decisions.",
              "helpAnchor": "help-m07-s02-conditions-and-decisions"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m07-s02-conditions-and-decisions.",
              "helpAnchor": "help-m07-s02-conditions-and-decisions"
            }
          ]
        },
        {
          "id": "kc-m07-s02-q3",
          "label": "Formative learning evidence",
          "focus": "concept application",
          "theoryAnchor": "help-m07-s02-continuing-knowledge",
          "prompt": "A class traces an Australian-grown carrot from production towards a vegetable wrap without assuming every producer uses the same system. Which response applies the section's third idea, “First producers and continuing knowledge”, most accurately?",
          "hint": "Compare each option with the ideas under “First producers and continuing knowledge”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Aboriginal and Torres Strait Islander Peoples are the first food and fibre producers and continuing knowledge holders, and Cultural Knowledge must be approached respectfully and with appropriate authority.",
              "correct": true,
              "feedback": "This response accurately applies “First producers and continuing knowledge” to the situation. Revisit help-m07-s02-continuing-knowledge to consolidate the reasoning.",
              "helpAnchor": "help-m07-s02-continuing-knowledge"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Australian food production depends only on natural resources.",
              "correct": false,
              "feedback": "Environmental conditions matter, but production also depends on people, knowledge, skills, technologies, processing, distribution and markets. Revisit help-m07-s02-continuing-knowledge.",
              "helpAnchor": "help-m07-s02-continuing-knowledge"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m07-s02-continuing-knowledge.",
              "helpAnchor": "help-m07-s02-continuing-knowledge"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Only “Conditions that shape production” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m07-s02-continuing-knowledge.",
              "helpAnchor": "help-m07-s02-continuing-knowledge"
            }
          ]
        },
        {
          "id": "kc-m07-s02-q4",
          "label": "Formative learning evidence",
          "focus": "likely misconception",
          "theoryAnchor": "help-m07-s02-production-diversity",
          "prompt": "A student makes this claim about Australian food and fibre production: “Food production is the same across Australia.” Which response corrects the reasoning?",
          "hint": "Compare each option with the ideas under “People across Australian production”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Food production is the same across Australia.",
              "correct": false,
              "feedback": "Production varies between ingredients, environments, regions, producers and systems, so examples should not be treated as applying everywhere. Revisit help-m07-s02-production-diversity.",
              "helpAnchor": "help-m07-s02-production-diversity"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m07-s02-production-diversity.",
              "helpAnchor": "help-m07-s02-production-diversity"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m07-s02-production-diversity.",
              "helpAnchor": "help-m07-s02-production-diversity"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Production varies between ingredients, environments, regions, producers and systems, so examples should not be treated as applying everywhere.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to people across australian production. Revisit help-m07-s02-production-diversity to consolidate the reasoning.",
              "helpAnchor": "help-m07-s02-production-diversity"
            }
          ]
        },
        {
          "id": "kc-m07-s02-q5",
          "label": "Formative learning evidence",
          "focus": "likely misconception",
          "theoryAnchor": "help-m07-s02-conditions-and-decisions",
          "prompt": "During this situation — a class traces an Australian-grown carrot from production towards a vegetable wrap without assuming every producer uses the same system. Which response best avoids the misconception that “Australian food production depends only on natural resources.”?",
          "hint": "Compare each option with the ideas under “Conditions that shape production”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in australian food and fibre production. Revisit help-m07-s02-conditions-and-decisions.",
              "helpAnchor": "help-m07-s02-conditions-and-decisions"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Only “People across Australian production” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m07-s02-conditions-and-decisions.",
              "helpAnchor": "help-m07-s02-conditions-and-decisions"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Environmental conditions matter, but production also depends on people, knowledge, skills, technologies, processing, distribution and markets.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to conditions that shape production. Revisit help-m07-s02-conditions-and-decisions to consolidate the reasoning.",
              "helpAnchor": "help-m07-s02-conditions-and-decisions"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Australian food production depends only on natural resources.",
              "correct": false,
              "feedback": "Environmental conditions matter, but production also depends on people, knowledge, skills, technologies, processing, distribution and markets. Revisit help-m07-s02-conditions-and-decisions.",
              "helpAnchor": "help-m07-s02-conditions-and-decisions"
            }
          ]
        },
        {
          "id": "kc-m07-s02-q6",
          "label": "Formative learning evidence",
          "focus": "terminology in context",
          "theoryAnchor": "help-m07-s02-production-diversity",
          "prompt": "Which option uses the term “primary producer” accurately in the context of Australian food and fibre production?",
          "hint": "Compare each option with the ideas under “People across Australian production”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "The meaning of primary producer changes to match whichever answer is most convenient.",
              "correct": false,
              "feedback": "The section gives primary producer a precise meaning that should be applied consistently. Revisit help-m07-s02-production-diversity.",
              "helpAnchor": "help-m07-s02-production-diversity"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "primary producer means a person or group involved in producing food or fibre through activities such as farming, fishing or horticulture.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to people across australian production. Revisit help-m07-s02-production-diversity to consolidate the reasoning.",
              "helpAnchor": "help-m07-s02-production-diversity"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "primary producer is a general word for any food choice a person happens to like.",
              "correct": false,
              "feedback": "primary producer has a precise section meaning: A person or group involved in producing food or fibre through activities such as farming, fishing or horticulture. Revisit help-m07-s02-production-diversity.",
              "helpAnchor": "help-m07-s02-production-diversity"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "primary producer means the same as horticulture in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m07-s02-production-diversity.",
              "helpAnchor": "help-m07-s02-production-diversity"
            }
          ]
        },
        {
          "id": "kc-m07-s02-q7",
          "label": "Formative learning evidence",
          "focus": "worked-example reasoning",
          "theoryAnchor": "help-m07-s02-continuing-knowledge",
          "prompt": "A class traces an Australian-grown carrot from production towards a vegetable wrap without assuming every producer uses the same system. Which conclusion is best supported by the worked example rather than by a guess?",
          "hint": "Compare each option with the ideas under “First producers and continuing knowledge”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "A familiar ingredient depends on more than one producer or place; it is connected to people, environmental conditions, skills, technologies and decisions across a broader Australian food system.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to first producers and continuing knowledge. Revisit help-m07-s02-continuing-knowledge to consolidate the reasoning.",
              "helpAnchor": "help-m07-s02-continuing-knowledge"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Food production is the same across Australia.",
              "correct": false,
              "feedback": "Production varies between ingredients, environments, regions, producers and systems, so examples should not be treated as applying everywhere. Revisit help-m07-s02-continuing-knowledge.",
              "helpAnchor": "help-m07-s02-continuing-knowledge"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m07-s02-continuing-knowledge.",
              "helpAnchor": "help-m07-s02-continuing-knowledge"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in australian food and fibre production. Revisit help-m07-s02-continuing-knowledge.",
              "helpAnchor": "help-m07-s02-continuing-knowledge"
            }
          ]
        },
        {
          "id": "kc-m07-s02-q8",
          "label": "Formative learning evidence",
          "focus": "evidence selection",
          "theoryAnchor": "help-m07-s02-conditions-and-decisions",
          "prompt": "A class traces an Australian-grown carrot from production towards a vegetable wrap without assuming every producer uses the same system. Which evidence plan would most directly support a careful explanation?",
          "hint": "Compare each option with the ideas under “Conditions that shape production”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m07-s02-conditions-and-decisions.",
              "helpAnchor": "help-m07-s02-conditions-and-decisions"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Record only a final opinion and leave out the observations, source details or reasoning that support it.",
              "correct": false,
              "feedback": "A final opinion without supporting evidence or reasoning cannot show how the conclusion was reached. Revisit help-m07-s02-conditions-and-decisions.",
              "helpAnchor": "help-m07-s02-conditions-and-decisions"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m07-s02-conditions-and-decisions.",
              "helpAnchor": "help-m07-s02-conditions-and-decisions"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Identify reliable evidence for the relevant production type and explain which factors, such as climate, water, soil, technology, skills or markets, influence the ingredient without inventing statistics or unsupported local claims.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to conditions that shape production. Revisit help-m07-s02-conditions-and-decisions to consolidate the reasoning.",
              "helpAnchor": "help-m07-s02-conditions-and-decisions"
            }
          ]
        },
        {
          "id": "kc-m07-s02-q9",
          "label": "Formative learning evidence",
          "focus": "authentic practical/design decision",
          "theoryAnchor": "help-m07-s02-continuing-knowledge",
          "prompt": "A class traces an Australian-grown carrot from production towards a vegetable wrap without assuming every producer uses the same system. Which learning action would provide the most useful practice before writing the section capstone?",
          "hint": "Compare each option with the ideas under “First producers and continuing knowledge”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in australian food and fibre production. Revisit help-m07-s02-continuing-knowledge.",
              "helpAnchor": "help-m07-s02-continuing-knowledge"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Change several important factors at once, then assume which change caused the result.",
              "correct": false,
              "feedback": "Changing several factors together makes it difficult to identify which change influenced the result. Revisit help-m07-s02-continuing-knowledge.",
              "helpAnchor": "help-m07-s02-continuing-knowledge"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Choose one ingredient from a school-kitchen recipe and map the people, environments, knowledge and technologies that may contribute to its journey through Australian production.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to first producers and continuing knowledge. Revisit help-m07-s02-continuing-knowledge to consolidate the reasoning.",
              "helpAnchor": "help-m07-s02-continuing-knowledge"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Skip the practice and copy a finished response without applying the idea to the situation.",
              "correct": false,
              "feedback": "The practice should require the student to apply the idea and rehearse their own reasoning before the capstone. Revisit help-m07-s02-continuing-knowledge.",
              "helpAnchor": "help-m07-s02-continuing-knowledge"
            }
          ]
        },
        {
          "id": "kc-m07-s02-q10",
          "label": "Formative learning evidence",
          "focus": "careful judgement",
          "theoryAnchor": "help-m07-s02-conditions-and-decisions",
          "prompt": "A class traces an Australian-grown carrot from production towards a vegetable wrap without assuming every producer uses the same system. Which final judgement is the most careful, balanced conclusion?",
          "hint": "Compare each option with the ideas under “First producers and continuing knowledge”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in australian food and fibre production. Revisit help-m07-s02-continuing-knowledge. Review help-m07-s02-conditions-and-decisions.",
              "helpAnchor": "help-m07-s02-conditions-and-decisions"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Different Australian ingredients and regions have different production conditions, so one example should not be treated as universal.",
              "correct": true,
              "feedback": "This conclusion uses the section evidence carefully and connects it to “Conditions that shape production”. Revisit help-m07-s02-conditions-and-decisions to consolidate the reasoning.",
              "helpAnchor": "help-m07-s02-conditions-and-decisions"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Australian food production depends only on natural resources.",
              "correct": false,
              "feedback": "Environmental conditions matter, but production also depends on people, knowledge, skills, technologies, processing, distribution and markets. Revisit help-m07-s02-continuing-knowledge. Review help-m07-s02-conditions-and-decisions.",
              "helpAnchor": "help-m07-s02-conditions-and-decisions"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m07-s02-continuing-knowledge. Review help-m07-s02-conditions-and-decisions.",
              "helpAnchor": "help-m07-s02-conditions-and-decisions"
            }
          ]
        }
      ]
    },
    {
      "sectionId": "m07-s03",
      "knowledgeCheckId": "kc-m07-s03",
      "title": "Waste, food security and sustainable choices — knowledge check",
      "label": "Formative learning evidence",
      "theoryAnchors": [
        "help-m07-s03-food-security",
        "help-m07-s03-waste-pathways",
        "help-m07-s03-trade-offs"
      ],
      "sourceIds": [
        "food-knowledge",
        "official-sustainability-guidance"
      ],
      "hintPolicy": "answer-neutral",
      "feedbackTiming": "after check only",
      "questions": [
        {
          "id": "kc-m07-s03-q1",
          "label": "Formative learning evidence",
          "focus": "essential idea",
          "theoryAnchor": "help-m07-s03-food-security",
          "prompt": "A party-menu team compares packaging, portion size, ingredient quantities, food safety, cost and user needs. Which statement gives the strongest starting explanation of waste, food security and sustainable choices?",
          "hint": "Compare each option with the ideas under “Understanding food security”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in waste, food security and sustainable choices. Revisit help-m07-s03-food-security.",
              "helpAnchor": "help-m07-s03-food-security"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Food security means reliable physical and economic access to sufficient, safe and suitable food.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to understanding food security. Revisit help-m07-s03-food-security to consolidate the reasoning.",
              "helpAnchor": "help-m07-s03-food-security"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "The most sustainable food choice is always the local option.",
              "correct": false,
              "feedback": "Location is only one factor. Sustainability should be considered through relevant trade-offs such as waste, packaging, safety, cost, production and user needs. Revisit help-m07-s03-food-security.",
              "helpAnchor": "help-m07-s03-food-security"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Reducing waste means every leftover should be saved and eaten later.",
              "correct": false,
              "feedback": "Food safety comes first. Only suitable leftovers should be used under safe guidance, and unsafe food should not be kept simply to avoid waste. Revisit help-m07-s03-food-security.",
              "helpAnchor": "help-m07-s03-food-security"
            }
          ]
        },
        {
          "id": "kc-m07-s03-q2",
          "label": "Formative learning evidence",
          "focus": "concept connection",
          "theoryAnchor": "help-m07-s03-waste-pathways",
          "prompt": "A party-menu team compares packaging, portion size, ingredient quantities, food safety, cost and user needs. Which response best connects “Understanding food security” with “Preventing and managing food waste”?",
          "hint": "Compare each option with the ideas under “Preventing and managing food waste”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Avoidable food waste can often be reduced through planning, correct storage, suitable portions and safe management of appropriate leftovers.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to preventing and managing food waste. Revisit help-m07-s03-waste-pathways to consolidate the reasoning.",
              "helpAnchor": "help-m07-s03-waste-pathways"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Only “Understanding food security” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m07-s03-waste-pathways.",
              "helpAnchor": "help-m07-s03-waste-pathways"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m07-s03-waste-pathways.",
              "helpAnchor": "help-m07-s03-waste-pathways"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "The most sustainable food choice is always the local option.",
              "correct": false,
              "feedback": "Location is only one factor. Sustainability should be considered through relevant trade-offs such as waste, packaging, safety, cost, production and user needs. Revisit help-m07-s03-waste-pathways.",
              "helpAnchor": "help-m07-s03-waste-pathways"
            }
          ]
        },
        {
          "id": "kc-m07-s03-q3",
          "label": "Formative learning evidence",
          "focus": "concept application",
          "theoryAnchor": "help-m07-s03-trade-offs",
          "prompt": "A party-menu team compares packaging, portion size, ingredient quantities, food safety, cost and user needs. Which response applies the section's third idea, “Making choices through trade-offs”, most accurately?",
          "hint": "Compare each option with the ideas under “Making choices through trade-offs”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Reducing waste means every leftover should be saved and eaten later.",
              "correct": false,
              "feedback": "Food safety comes first. Only suitable leftovers should be used under safe guidance, and unsafe food should not be kept simply to avoid waste. Revisit help-m07-s03-trade-offs.",
              "helpAnchor": "help-m07-s03-trade-offs"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m07-s03-trade-offs.",
              "helpAnchor": "help-m07-s03-trade-offs"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Only “Preventing and managing food waste” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m07-s03-trade-offs.",
              "helpAnchor": "help-m07-s03-trade-offs"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Sustainable food choices involve trade-offs between factors such as waste, packaging, safety, cost and user needs rather than one universal rule.",
              "correct": true,
              "feedback": "This response accurately applies “Making choices through trade-offs” to the situation. Revisit help-m07-s03-trade-offs to consolidate the reasoning.",
              "helpAnchor": "help-m07-s03-trade-offs"
            }
          ]
        },
        {
          "id": "kc-m07-s03-q4",
          "label": "Formative learning evidence",
          "focus": "likely misconception",
          "theoryAnchor": "help-m07-s03-food-security",
          "prompt": "A student makes this claim about waste, food security and sustainable choices: “The most sustainable food choice is always the local option.” Which response corrects the reasoning?",
          "hint": "Compare each option with the ideas under “Understanding food security”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m07-s03-food-security.",
              "helpAnchor": "help-m07-s03-food-security"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m07-s03-food-security.",
              "helpAnchor": "help-m07-s03-food-security"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Location is only one factor. Sustainability should be considered through relevant trade-offs such as waste, packaging, safety, cost, production and user needs.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to understanding food security. Revisit help-m07-s03-food-security to consolidate the reasoning.",
              "helpAnchor": "help-m07-s03-food-security"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "The most sustainable food choice is always the local option.",
              "correct": false,
              "feedback": "Location is only one factor. Sustainability should be considered through relevant trade-offs such as waste, packaging, safety, cost, production and user needs. Revisit help-m07-s03-food-security.",
              "helpAnchor": "help-m07-s03-food-security"
            }
          ]
        },
        {
          "id": "kc-m07-s03-q5",
          "label": "Formative learning evidence",
          "focus": "likely misconception",
          "theoryAnchor": "help-m07-s03-waste-pathways",
          "prompt": "During this situation — a party-menu team compares packaging, portion size, ingredient quantities, food safety, cost and user needs. Which response best avoids the misconception that “Reducing waste means every leftover should be saved and eaten later.”?",
          "hint": "Compare each option with the ideas under “Preventing and managing food waste”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Only “Understanding food security” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m07-s03-waste-pathways.",
              "helpAnchor": "help-m07-s03-waste-pathways"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Food safety comes first. Only suitable leftovers should be used under safe guidance, and unsafe food should not be kept simply to avoid waste.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to preventing and managing food waste. Revisit help-m07-s03-waste-pathways to consolidate the reasoning.",
              "helpAnchor": "help-m07-s03-waste-pathways"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Reducing waste means every leftover should be saved and eaten later.",
              "correct": false,
              "feedback": "Food safety comes first. Only suitable leftovers should be used under safe guidance, and unsafe food should not be kept simply to avoid waste. Revisit help-m07-s03-waste-pathways.",
              "helpAnchor": "help-m07-s03-waste-pathways"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in waste, food security and sustainable choices. Revisit help-m07-s03-waste-pathways.",
              "helpAnchor": "help-m07-s03-waste-pathways"
            }
          ]
        },
        {
          "id": "kc-m07-s03-q6",
          "label": "Formative learning evidence",
          "focus": "terminology in context",
          "theoryAnchor": "help-m07-s03-food-security",
          "prompt": "Which option uses the term “food security” accurately in the context of waste, food security and sustainable choices?",
          "hint": "Compare each option with the ideas under “Understanding food security”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "food security means reliable physical and economic access to sufficient, safe and suitable food.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to understanding food security. Revisit help-m07-s03-food-security to consolidate the reasoning.",
              "helpAnchor": "help-m07-s03-food-security"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "food security is a general word for any food choice a person happens to like.",
              "correct": false,
              "feedback": "food security has a precise section meaning: Reliable physical and economic access to sufficient, safe and suitable food. Revisit help-m07-s03-food-security.",
              "helpAnchor": "help-m07-s03-food-security"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "food security means the same as avoidable food waste in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m07-s03-food-security.",
              "helpAnchor": "help-m07-s03-food-security"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "The meaning of food security changes to match whichever answer is most convenient.",
              "correct": false,
              "feedback": "The section gives food security a precise meaning that should be applied consistently. Revisit help-m07-s03-food-security.",
              "helpAnchor": "help-m07-s03-food-security"
            }
          ]
        },
        {
          "id": "kc-m07-s03-q7",
          "label": "Formative learning evidence",
          "focus": "worked-example reasoning",
          "theoryAnchor": "help-m07-s03-trade-offs",
          "prompt": "A party-menu team compares packaging, portion size, ingredient quantities, food safety, cost and user needs. Which conclusion is best supported by the worked example rather than by a guess?",
          "hint": "Compare each option with the ideas under “Making choices through trade-offs”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "The most sustainable food choice is always the local option.",
              "correct": false,
              "feedback": "Location is only one factor. Sustainability should be considered through relevant trade-offs such as waste, packaging, safety, cost, production and user needs. Revisit help-m07-s03-trade-offs.",
              "helpAnchor": "help-m07-s03-trade-offs"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m07-s03-trade-offs.",
              "helpAnchor": "help-m07-s03-trade-offs"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in waste, food security and sustainable choices. Revisit help-m07-s03-trade-offs.",
              "helpAnchor": "help-m07-s03-trade-offs"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "A sustainable decision is supported by evidence and trade-offs, not by a single slogan or one feature of a product.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to making choices through trade-offs. Revisit help-m07-s03-trade-offs to consolidate the reasoning.",
              "helpAnchor": "help-m07-s03-trade-offs"
            }
          ]
        },
        {
          "id": "kc-m07-s03-q8",
          "label": "Formative learning evidence",
          "focus": "evidence selection",
          "theoryAnchor": "help-m07-s03-waste-pathways",
          "prompt": "A party-menu team compares packaging, portion size, ingredient quantities, food safety, cost and user needs. Which evidence plan would most directly support a careful explanation?",
          "hint": "Compare each option with the ideas under “Preventing and managing food waste”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Record only a final opinion and leave out the observations, source details or reasoning that support it.",
              "correct": false,
              "feedback": "A final opinion without supporting evidence or reasoning cannot show how the conclusion was reached. Revisit help-m07-s03-waste-pathways.",
              "helpAnchor": "help-m07-s03-waste-pathways"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m07-s03-waste-pathways.",
              "helpAnchor": "help-m07-s03-waste-pathways"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Record evidence for each comparison factor and explain both an advantage and a limitation of the preferred option rather than relying on a sustainability slogan.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to preventing and managing food waste. Revisit help-m07-s03-waste-pathways to consolidate the reasoning.",
              "helpAnchor": "help-m07-s03-waste-pathways"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m07-s03-waste-pathways.",
              "helpAnchor": "help-m07-s03-waste-pathways"
            }
          ]
        },
        {
          "id": "kc-m07-s03-q9",
          "label": "Formative learning evidence",
          "focus": "authentic practical/design decision",
          "theoryAnchor": "help-m07-s03-trade-offs",
          "prompt": "A party-menu team compares packaging, portion size, ingredient quantities, food safety, cost and user needs. Which learning action would provide the most useful practice before writing the section capstone?",
          "hint": "Compare each option with the ideas under “Making choices through trade-offs”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Change several important factors at once, then assume which change caused the result.",
              "correct": false,
              "feedback": "Changing several factors together makes it difficult to identify which change influenced the result. Revisit help-m07-s03-trade-offs.",
              "helpAnchor": "help-m07-s03-trade-offs"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Compare two party-menu choices for packaging, portion size and ingredient use, then justify which option better balances waste prevention, safety, cost and user needs.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to making choices through trade-offs. Revisit help-m07-s03-trade-offs to consolidate the reasoning.",
              "helpAnchor": "help-m07-s03-trade-offs"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Skip the practice and copy a finished response without applying the idea to the situation.",
              "correct": false,
              "feedback": "The practice should require the student to apply the idea and rehearse their own reasoning before the capstone. Revisit help-m07-s03-trade-offs.",
              "helpAnchor": "help-m07-s03-trade-offs"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in waste, food security and sustainable choices. Revisit help-m07-s03-trade-offs.",
              "helpAnchor": "help-m07-s03-trade-offs"
            }
          ]
        },
        {
          "id": "kc-m07-s03-q10",
          "label": "Formative learning evidence",
          "focus": "careful judgement",
          "theoryAnchor": "help-m07-s03-waste-pathways",
          "prompt": "A party-menu team compares packaging, portion size, ingredient quantities, food safety, cost and user needs. Which final judgement is the most careful, balanced conclusion?",
          "hint": "Compare each option with the ideas under “Making choices through trade-offs”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Unavoidable scraps are different from edible food that is unnecessarily discarded and may be sorted for recovery where suitable systems exist.",
              "correct": true,
              "feedback": "This conclusion uses the section evidence carefully and connects it to “Preventing and managing food waste”. Revisit help-m07-s03-waste-pathways to consolidate the reasoning.",
              "helpAnchor": "help-m07-s03-waste-pathways"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Reducing waste means every leftover should be saved and eaten later.",
              "correct": false,
              "feedback": "Food safety comes first. Only suitable leftovers should be used under safe guidance, and unsafe food should not be kept simply to avoid waste. Revisit help-m07-s03-trade-offs. Review help-m07-s03-waste-pathways.",
              "helpAnchor": "help-m07-s03-waste-pathways"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m07-s03-trade-offs. Review help-m07-s03-waste-pathways.",
              "helpAnchor": "help-m07-s03-waste-pathways"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in waste, food security and sustainable choices. Revisit help-m07-s03-trade-offs. Review help-m07-s03-waste-pathways.",
              "helpAnchor": "help-m07-s03-waste-pathways"
            }
          ]
        }
      ]
    },
    {
      "sectionId": "m08-s01",
      "knowledgeCheckId": "kc-m08-s01",
      "title": "User needs and constraints — knowledge check",
      "label": "Formative learning evidence",
      "theoryAnchors": [
        "help-m08-s01-design-brief",
        "help-m08-s01-user-evidence",
        "help-m08-s01-constraints"
      ],
      "sourceIds": [
        "assessment-workbook",
        "party-recipes",
        "course-program"
      ],
      "hintPolicy": "answer-neutral",
      "feedbackTiming": "after check only",
      "questions": [
        {
          "id": "kc-m08-s01-q1",
          "label": "Formative learning evidence",
          "focus": "essential idea",
          "theoryAnchor": "help-m08-s01-design-brief",
          "prompt": "A team has several party-food ideas but still needs to separate confirmed user information from assumptions and questions. Which statement gives the strongest starting explanation of user needs and constraints?",
          "hint": "Compare each option with the ideas under “Understand the design brief”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "The best party menu is simply the set of recipes the team likes most.",
              "correct": false,
              "feedback": "Menu choices should respond to the design brief, confirmed user needs, constraints and success criteria. Revisit help-m08-s01-design-brief.",
              "helpAnchor": "help-m08-s01-design-brief"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in user needs and constraints. Revisit help-m08-s01-design-brief.",
              "helpAnchor": "help-m08-s01-design-brief"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "A design brief explains the user, need and purpose of a design problem.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to understand the design brief. Revisit help-m08-s01-design-brief to consolidate the reasoning.",
              "helpAnchor": "help-m08-s01-design-brief"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "If a constraint seems likely, the team can treat it as a fact.",
              "correct": false,
              "feedback": "Possible constraints should be identified, but important details must be confirmed before they guide design decisions. Revisit help-m08-s01-design-brief.",
              "helpAnchor": "help-m08-s01-design-brief"
            }
          ]
        },
        {
          "id": "kc-m08-s01-q2",
          "label": "Formative learning evidence",
          "focus": "concept connection",
          "theoryAnchor": "help-m08-s01-user-evidence",
          "prompt": "A team has several party-food ideas but still needs to separate confirmed user information from assumptions and questions. Which response best connects “Understand the design brief” with “Use evidence about the user”?",
          "hint": "Compare each option with the ideas under “Use evidence about the user”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "If a constraint seems likely, the team can treat it as a fact.",
              "correct": false,
              "feedback": "Possible constraints should be identified, but important details must be confirmed before they guide design decisions. Revisit help-m08-s01-user-evidence.",
              "helpAnchor": "help-m08-s01-user-evidence"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Success criteria describe what the finished solution should achieve and should be based on confirmed information.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to use evidence about the user. Revisit help-m08-s01-user-evidence to consolidate the reasoning.",
              "helpAnchor": "help-m08-s01-user-evidence"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Only “Understand the design brief” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m08-s01-user-evidence.",
              "helpAnchor": "help-m08-s01-user-evidence"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m08-s01-user-evidence.",
              "helpAnchor": "help-m08-s01-user-evidence"
            }
          ]
        },
        {
          "id": "kc-m08-s01-q3",
          "label": "Formative learning evidence",
          "focus": "concept application",
          "theoryAnchor": "help-m08-s01-constraints",
          "prompt": "A team has several party-food ideas but still needs to separate confirmed user information from assumptions and questions. Which response applies the section's third idea, “Confirm constraints before designing”, most accurately?",
          "hint": "Compare each option with the ideas under “Confirm constraints before designing”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Respectful questions and accurate records help a team distinguish reliable facts from assumptions.",
              "correct": true,
              "feedback": "This response accurately applies “Confirm constraints before designing” to the situation. Revisit help-m08-s01-constraints to consolidate the reasoning.",
              "helpAnchor": "help-m08-s01-constraints"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "The best party menu is simply the set of recipes the team likes most.",
              "correct": false,
              "feedback": "Menu choices should respond to the design brief, confirmed user needs, constraints and success criteria. Revisit help-m08-s01-constraints.",
              "helpAnchor": "help-m08-s01-constraints"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m08-s01-constraints.",
              "helpAnchor": "help-m08-s01-constraints"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Only “Use evidence about the user” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m08-s01-constraints.",
              "helpAnchor": "help-m08-s01-constraints"
            }
          ]
        },
        {
          "id": "kc-m08-s01-q4",
          "label": "Formative learning evidence",
          "focus": "likely misconception",
          "theoryAnchor": "help-m08-s01-design-brief",
          "prompt": "A student makes this claim about user needs and constraints: “If a constraint seems likely, the team can treat it as a fact.” Which response corrects the reasoning?",
          "hint": "Compare each option with the ideas under “Understand the design brief”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "If a constraint seems likely, the team can treat it as a fact.",
              "correct": false,
              "feedback": "Possible constraints should be identified, but important details must be confirmed before they guide design decisions. Revisit help-m08-s01-design-brief.",
              "helpAnchor": "help-m08-s01-design-brief"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m08-s01-design-brief.",
              "helpAnchor": "help-m08-s01-design-brief"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m08-s01-design-brief.",
              "helpAnchor": "help-m08-s01-design-brief"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Possible constraints should be identified, but important details must be confirmed before they guide design decisions.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to understand the design brief. Revisit help-m08-s01-design-brief to consolidate the reasoning.",
              "helpAnchor": "help-m08-s01-design-brief"
            }
          ]
        },
        {
          "id": "kc-m08-s01-q5",
          "label": "Formative learning evidence",
          "focus": "likely misconception",
          "theoryAnchor": "help-m08-s01-user-evidence",
          "prompt": "During this situation — a team has several party-food ideas but still needs to separate confirmed user information from assumptions and questions. Which response best avoids the misconception that “The best party menu is simply the set of recipes the team likes most.”?",
          "hint": "Compare each option with the ideas under “Use evidence about the user”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in user needs and constraints. Revisit help-m08-s01-user-evidence.",
              "helpAnchor": "help-m08-s01-user-evidence"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Only “Understand the design brief” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m08-s01-user-evidence.",
              "helpAnchor": "help-m08-s01-user-evidence"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Menu choices should respond to the design brief, confirmed user needs, constraints and success criteria.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to use evidence about the user. Revisit help-m08-s01-user-evidence to consolidate the reasoning.",
              "helpAnchor": "help-m08-s01-user-evidence"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "The best party menu is simply the set of recipes the team likes most.",
              "correct": false,
              "feedback": "Menu choices should respond to the design brief, confirmed user needs, constraints and success criteria. Revisit help-m08-s01-user-evidence.",
              "helpAnchor": "help-m08-s01-user-evidence"
            }
          ]
        },
        {
          "id": "kc-m08-s01-q6",
          "label": "Formative learning evidence",
          "focus": "terminology in context",
          "theoryAnchor": "help-m08-s01-design-brief",
          "prompt": "Which option uses the term “Design brief” accurately in the context of user needs and constraints?",
          "hint": "Compare each option with the ideas under “Understand the design brief”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "The meaning of Design brief changes to match whichever answer is most convenient.",
              "correct": false,
              "feedback": "The section gives Design brief a precise meaning that should be applied consistently. Revisit help-m08-s01-design-brief.",
              "helpAnchor": "help-m08-s01-design-brief"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Design brief means a concise statement explaining the design problem, including the user, need and purpose.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to understand the design brief. Revisit help-m08-s01-design-brief to consolidate the reasoning.",
              "helpAnchor": "help-m08-s01-design-brief"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Design brief is a general word for any food choice a person happens to like.",
              "correct": false,
              "feedback": "Design brief has a precise section meaning: A concise statement explaining the design problem, including the user, need and purpose. Revisit help-m08-s01-design-brief.",
              "helpAnchor": "help-m08-s01-design-brief"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Design brief means the same as User in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m08-s01-design-brief.",
              "helpAnchor": "help-m08-s01-design-brief"
            }
          ]
        },
        {
          "id": "kc-m08-s01-q7",
          "label": "Formative learning evidence",
          "focus": "worked-example reasoning",
          "theoryAnchor": "help-m08-s01-constraints",
          "prompt": "A team has several party-food ideas but still needs to separate confirmed user information from assumptions and questions. Which conclusion is best supported by the worked example rather than by a guess?",
          "hint": "Compare each option with the ideas under “Confirm constraints before designing”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Strong design decisions are based on evidence. Separate facts from assumptions before choosing or rejecting recipes.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to confirm constraints before designing. Revisit help-m08-s01-constraints to consolidate the reasoning.",
              "helpAnchor": "help-m08-s01-constraints"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "If a constraint seems likely, the team can treat it as a fact.",
              "correct": false,
              "feedback": "Possible constraints should be identified, but important details must be confirmed before they guide design decisions. Revisit help-m08-s01-constraints.",
              "helpAnchor": "help-m08-s01-constraints"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m08-s01-constraints.",
              "helpAnchor": "help-m08-s01-constraints"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in user needs and constraints. Revisit help-m08-s01-constraints.",
              "helpAnchor": "help-m08-s01-constraints"
            }
          ]
        },
        {
          "id": "kc-m08-s01-q8",
          "label": "Formative learning evidence",
          "focus": "evidence selection",
          "theoryAnchor": "help-m08-s01-user-evidence",
          "prompt": "A team has several party-food ideas but still needs to separate confirmed user information from assumptions and questions. Which evidence plan would most directly support a careful explanation?",
          "hint": "Compare each option with the ideas under “Use evidence about the user”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m08-s01-user-evidence.",
              "helpAnchor": "help-m08-s01-user-evidence"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Record only a final opinion and leave out the observations, source details or reasoning that support it.",
              "correct": false,
              "feedback": "A final opinion without supporting evidence or reasoning cannot show how the conclusion was reached. Revisit help-m08-s01-user-evidence.",
              "helpAnchor": "help-m08-s01-user-evidence"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m08-s01-user-evidence.",
              "helpAnchor": "help-m08-s01-user-evidence"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "For each menu decision, record the confirmed fact or success criterion that supports the choice.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to use evidence about the user. Revisit help-m08-s01-user-evidence to consolidate the reasoning.",
              "helpAnchor": "help-m08-s01-user-evidence"
            }
          ]
        },
        {
          "id": "kc-m08-s01-q9",
          "label": "Formative learning evidence",
          "focus": "authentic practical/design decision",
          "theoryAnchor": "help-m08-s01-constraints",
          "prompt": "A team has several party-food ideas but still needs to separate confirmed user information from assumptions and questions. Which learning action would provide the most useful practice before writing the section capstone?",
          "hint": "Compare each option with the ideas under “Confirm constraints before designing”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in user needs and constraints. Revisit help-m08-s01-constraints.",
              "helpAnchor": "help-m08-s01-constraints"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Change several important factors at once, then assume which change caused the result.",
              "correct": false,
              "feedback": "Changing several factors together makes it difficult to identify which change influenced the result. Revisit help-m08-s01-constraints.",
              "helpAnchor": "help-m08-s01-constraints"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Sort sample planning statements into confirmed facts, assumptions and questions requiring confirmation.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to confirm constraints before designing. Revisit help-m08-s01-constraints to consolidate the reasoning.",
              "helpAnchor": "help-m08-s01-constraints"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Skip the practice and copy a finished response without applying the idea to the situation.",
              "correct": false,
              "feedback": "The practice should require the student to apply the idea and rehearse their own reasoning before the capstone. Revisit help-m08-s01-constraints.",
              "helpAnchor": "help-m08-s01-constraints"
            }
          ]
        },
        {
          "id": "kc-m08-s01-q10",
          "label": "Formative learning evidence",
          "focus": "careful judgement",
          "theoryAnchor": "help-m08-s01-user-evidence",
          "prompt": "A team has several party-food ideas but still needs to separate confirmed user information from assumptions and questions. Which final judgement is the most careful, balanced conclusion?",
          "hint": "Compare each option with the ideas under “Confirm constraints before designing”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in user needs and constraints. Revisit help-m08-s01-constraints. Review help-m08-s01-user-evidence.",
              "helpAnchor": "help-m08-s01-user-evidence"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Constraints can include dietary needs, allergies, accessibility, time, skill, equipment, budget and serving context, but they must be checked rather than assumed.",
              "correct": true,
              "feedback": "This conclusion uses the section evidence carefully and connects it to “Use evidence about the user”. Revisit help-m08-s01-user-evidence to consolidate the reasoning.",
              "helpAnchor": "help-m08-s01-user-evidence"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "The best party menu is simply the set of recipes the team likes most.",
              "correct": false,
              "feedback": "Menu choices should respond to the design brief, confirmed user needs, constraints and success criteria. Revisit help-m08-s01-constraints. Review help-m08-s01-user-evidence.",
              "helpAnchor": "help-m08-s01-user-evidence"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m08-s01-constraints. Review help-m08-s01-user-evidence.",
              "helpAnchor": "help-m08-s01-user-evidence"
            }
          ]
        }
      ]
    },
    {
      "sectionId": "m08-s02",
      "knowledgeCheckId": "kc-m08-s02",
      "title": "Menu balance and costing — knowledge check",
      "label": "Formative learning evidence",
      "theoryAnchors": [
        "help-m08-s02-menu-balance",
        "help-m08-s02-cost-method",
        "help-m08-s02-cost-per-serve"
      ],
      "sourceIds": [
        "assessment-workbook",
        "party-recipes",
        "food-knowledge"
      ],
      "hintPolicy": "answer-neutral",
      "feedbackTiming": "after check only",
      "questions": [
        {
          "id": "kc-m08-s02-q1",
          "label": "Formative learning evidence",
          "focus": "essential idea",
          "theoryAnchor": "help-m08-s02-menu-balance",
          "prompt": "A team compares two menu combinations and calculates the cost of the quantity of each ingredient actually used. Which statement gives the strongest starting explanation of menu balance and costing?",
          "hint": "Compare each option with the ideas under “Build balance across the menu”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in menu balance and costing. Revisit help-m08-s02-menu-balance.",
              "helpAnchor": "help-m08-s02-menu-balance"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Menu balance considers flavour, texture, colour, temperature, nutrition, portion and user appeal.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to build balance across the menu. Revisit help-m08-s02-menu-balance to consolidate the reasoning.",
              "helpAnchor": "help-m08-s02-menu-balance"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "The whole package price should always be counted as the recipe ingredient cost.",
              "correct": false,
              "feedback": "Calculate the cost of the quantity used unless the entire package is required for the recipe. Revisit help-m08-s02-menu-balance.",
              "helpAnchor": "help-m08-s02-menu-balance"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "The cheapest menu combination is automatically the best choice.",
              "correct": false,
              "feedback": "Cost matters, but menu decisions should also consider balance, nutrition, portions, user appeal and other confirmed requirements. Revisit help-m08-s02-menu-balance.",
              "helpAnchor": "help-m08-s02-menu-balance"
            }
          ]
        },
        {
          "id": "kc-m08-s02-q2",
          "label": "Formative learning evidence",
          "focus": "concept connection",
          "theoryAnchor": "help-m08-s02-cost-method",
          "prompt": "A team compares two menu combinations and calculates the cost of the quantity of each ingredient actually used. Which response best connects “Build balance across the menu” with “Calculate ingredient costs carefully”?",
          "hint": "Compare each option with the ideas under “Calculate ingredient costs carefully”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Ingredient costing should use compatible units and the cost of the quantity actually used.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to calculate ingredient costs carefully. Revisit help-m08-s02-cost-method to consolidate the reasoning.",
              "helpAnchor": "help-m08-s02-cost-method"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Only “Build balance across the menu” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m08-s02-cost-method.",
              "helpAnchor": "help-m08-s02-cost-method"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m08-s02-cost-method.",
              "helpAnchor": "help-m08-s02-cost-method"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "The whole package price should always be counted as the recipe ingredient cost.",
              "correct": false,
              "feedback": "Calculate the cost of the quantity used unless the entire package is required for the recipe. Revisit help-m08-s02-cost-method.",
              "helpAnchor": "help-m08-s02-cost-method"
            }
          ]
        },
        {
          "id": "kc-m08-s02-q3",
          "label": "Formative learning evidence",
          "focus": "concept application",
          "theoryAnchor": "help-m08-s02-cost-per-serve",
          "prompt": "A team compares two menu combinations and calculates the cost of the quantity of each ingredient actually used. Which response applies the section's third idea, “Find and compare cost per serve”, most accurately?",
          "hint": "Compare each option with the ideas under “Find and compare cost per serve”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "The cheapest menu combination is automatically the best choice.",
              "correct": false,
              "feedback": "Cost matters, but menu decisions should also consider balance, nutrition, portions, user appeal and other confirmed requirements. Revisit help-m08-s02-cost-per-serve.",
              "helpAnchor": "help-m08-s02-cost-per-serve"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m08-s02-cost-per-serve.",
              "helpAnchor": "help-m08-s02-cost-per-serve"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Only “Calculate ingredient costs carefully” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m08-s02-cost-per-serve.",
              "helpAnchor": "help-m08-s02-cost-per-serve"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Cost per serve is found by dividing total recipe cost by the confirmed number of serves.",
              "correct": true,
              "feedback": "This response accurately applies “Find and compare cost per serve” to the situation. Revisit help-m08-s02-cost-per-serve to consolidate the reasoning.",
              "helpAnchor": "help-m08-s02-cost-per-serve"
            }
          ]
        },
        {
          "id": "kc-m08-s02-q4",
          "label": "Formative learning evidence",
          "focus": "likely misconception",
          "theoryAnchor": "help-m08-s02-menu-balance",
          "prompt": "A student makes this claim about menu balance and costing: “The whole package price should always be counted as the recipe ingredient cost.” Which response corrects the reasoning?",
          "hint": "Compare each option with the ideas under “Build balance across the menu”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m08-s02-menu-balance.",
              "helpAnchor": "help-m08-s02-menu-balance"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m08-s02-menu-balance.",
              "helpAnchor": "help-m08-s02-menu-balance"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Calculate the cost of the quantity used unless the entire package is required for the recipe.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to build balance across the menu. Revisit help-m08-s02-menu-balance to consolidate the reasoning.",
              "helpAnchor": "help-m08-s02-menu-balance"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "The whole package price should always be counted as the recipe ingredient cost.",
              "correct": false,
              "feedback": "Calculate the cost of the quantity used unless the entire package is required for the recipe. Revisit help-m08-s02-menu-balance.",
              "helpAnchor": "help-m08-s02-menu-balance"
            }
          ]
        },
        {
          "id": "kc-m08-s02-q5",
          "label": "Formative learning evidence",
          "focus": "likely misconception",
          "theoryAnchor": "help-m08-s02-cost-method",
          "prompt": "During this situation — a team compares two menu combinations and calculates the cost of the quantity of each ingredient actually used. Which response best avoids the misconception that “The cheapest menu combination is automatically the best choice.”?",
          "hint": "Compare each option with the ideas under “Calculate ingredient costs carefully”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Only “Build balance across the menu” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m08-s02-cost-method.",
              "helpAnchor": "help-m08-s02-cost-method"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Cost matters, but menu decisions should also consider balance, nutrition, portions, user appeal and other confirmed requirements.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to calculate ingredient costs carefully. Revisit help-m08-s02-cost-method to consolidate the reasoning.",
              "helpAnchor": "help-m08-s02-cost-method"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "The cheapest menu combination is automatically the best choice.",
              "correct": false,
              "feedback": "Cost matters, but menu decisions should also consider balance, nutrition, portions, user appeal and other confirmed requirements. Revisit help-m08-s02-cost-method.",
              "helpAnchor": "help-m08-s02-cost-method"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in menu balance and costing. Revisit help-m08-s02-cost-method.",
              "helpAnchor": "help-m08-s02-cost-method"
            }
          ]
        },
        {
          "id": "kc-m08-s02-q6",
          "label": "Formative learning evidence",
          "focus": "terminology in context",
          "theoryAnchor": "help-m08-s02-menu-balance",
          "prompt": "Which option uses the term “Menu balance” accurately in the context of menu balance and costing?",
          "hint": "Compare each option with the ideas under “Build balance across the menu”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Menu balance means the way different foods work together across flavour, texture, colour, temperature, nutrition, portion and user appeal.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to build balance across the menu. Revisit help-m08-s02-menu-balance to consolidate the reasoning.",
              "helpAnchor": "help-m08-s02-menu-balance"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Menu balance is a general word for any food choice a person happens to like.",
              "correct": false,
              "feedback": "Menu balance has a precise section meaning: The way different foods work together across flavour, texture, colour, temperature, nutrition, portion and user appeal. Revisit help-m08-s02-menu-balance.",
              "helpAnchor": "help-m08-s02-menu-balance"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Menu balance means the same as Unit price in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m08-s02-menu-balance.",
              "helpAnchor": "help-m08-s02-menu-balance"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "The meaning of Menu balance changes to match whichever answer is most convenient.",
              "correct": false,
              "feedback": "The section gives Menu balance a precise meaning that should be applied consistently. Revisit help-m08-s02-menu-balance.",
              "helpAnchor": "help-m08-s02-menu-balance"
            }
          ]
        },
        {
          "id": "kc-m08-s02-q7",
          "label": "Formative learning evidence",
          "focus": "worked-example reasoning",
          "theoryAnchor": "help-m08-s02-cost-per-serve",
          "prompt": "A team compares two menu combinations and calculates the cost of the quantity of each ingredient actually used. Which conclusion is best supported by the worked example rather than by a guess?",
          "hint": "Compare each option with the ideas under “Find and compare cost per serve”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "The whole package price should always be counted as the recipe ingredient cost.",
              "correct": false,
              "feedback": "Calculate the cost of the quantity used unless the entire package is required for the recipe. Revisit help-m08-s02-cost-per-serve.",
              "helpAnchor": "help-m08-s02-cost-per-serve"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m08-s02-cost-per-serve.",
              "helpAnchor": "help-m08-s02-cost-per-serve"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in menu balance and costing. Revisit help-m08-s02-cost-per-serve.",
              "helpAnchor": "help-m08-s02-cost-per-serve"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Use menu balance and costing together. Check units, calculate the amount actually used and compare cost with flavour, texture, colour, temperature, nutrition, portion and user appeal.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to find and compare cost per serve. Revisit help-m08-s02-cost-per-serve to consolidate the reasoning.",
              "helpAnchor": "help-m08-s02-cost-per-serve"
            }
          ]
        },
        {
          "id": "kc-m08-s02-q8",
          "label": "Formative learning evidence",
          "focus": "evidence selection",
          "theoryAnchor": "help-m08-s02-cost-method",
          "prompt": "A team compares two menu combinations and calculates the cost of the quantity of each ingredient actually used. Which evidence plan would most directly support a careful explanation?",
          "hint": "Compare each option with the ideas under “Calculate ingredient costs carefully”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Record only a final opinion and leave out the observations, source details or reasoning that support it.",
              "correct": false,
              "feedback": "A final opinion without supporting evidence or reasoning cannot show how the conclusion was reached. Revisit help-m08-s02-cost-method.",
              "helpAnchor": "help-m08-s02-cost-method"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m08-s02-cost-method.",
              "helpAnchor": "help-m08-s02-cost-method"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Record the balance feature or costing calculation that supports each menu decision, including unit conversions and the quantity actually used.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to calculate ingredient costs carefully. Revisit help-m08-s02-cost-method to consolidate the reasoning.",
              "helpAnchor": "help-m08-s02-cost-method"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m08-s02-cost-method.",
              "helpAnchor": "help-m08-s02-cost-method"
            }
          ]
        },
        {
          "id": "kc-m08-s02-q9",
          "label": "Formative learning evidence",
          "focus": "authentic practical/design decision",
          "theoryAnchor": "help-m08-s02-cost-per-serve",
          "prompt": "A team compares two menu combinations and calculates the cost of the quantity of each ingredient actually used. Which learning action would provide the most useful practice before writing the section capstone?",
          "hint": "Compare each option with the ideas under “Find and compare cost per serve”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Change several important factors at once, then assume which change caused the result.",
              "correct": false,
              "feedback": "Changing several factors together makes it difficult to identify which change influenced the result. Revisit help-m08-s02-cost-per-serve.",
              "helpAnchor": "help-m08-s02-cost-per-serve"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Compare two sample menu combinations for balance, then complete a short fictional costing calculation using clearly supplied quantities and prices.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to find and compare cost per serve. Revisit help-m08-s02-cost-per-serve to consolidate the reasoning.",
              "helpAnchor": "help-m08-s02-cost-per-serve"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Skip the practice and copy a finished response without applying the idea to the situation.",
              "correct": false,
              "feedback": "The practice should require the student to apply the idea and rehearse their own reasoning before the capstone. Revisit help-m08-s02-cost-per-serve.",
              "helpAnchor": "help-m08-s02-cost-per-serve"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in menu balance and costing. Revisit help-m08-s02-cost-per-serve.",
              "helpAnchor": "help-m08-s02-cost-per-serve"
            }
          ]
        },
        {
          "id": "kc-m08-s02-q10",
          "label": "Formative learning evidence",
          "focus": "careful judgement",
          "theoryAnchor": "help-m08-s02-cost-method",
          "prompt": "A team compares two menu combinations and calculates the cost of the quantity of each ingredient actually used. Which final judgement is the most careful, balanced conclusion?",
          "hint": "Compare each option with the ideas under “Find and compare cost per serve”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Total recipe cost is the sum of all ingredient costs for that recipe.",
              "correct": true,
              "feedback": "This conclusion uses the section evidence carefully and connects it to “Calculate ingredient costs carefully”. Revisit help-m08-s02-cost-method to consolidate the reasoning.",
              "helpAnchor": "help-m08-s02-cost-method"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "The cheapest menu combination is automatically the best choice.",
              "correct": false,
              "feedback": "Cost matters, but menu decisions should also consider balance, nutrition, portions, user appeal and other confirmed requirements. Revisit help-m08-s02-cost-per-serve. Review help-m08-s02-cost-method.",
              "helpAnchor": "help-m08-s02-cost-method"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m08-s02-cost-per-serve. Review help-m08-s02-cost-method.",
              "helpAnchor": "help-m08-s02-cost-method"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in menu balance and costing. Revisit help-m08-s02-cost-per-serve. Review help-m08-s02-cost-method.",
              "helpAnchor": "help-m08-s02-cost-method"
            }
          ]
        }
      ]
    },
    {
      "sectionId": "m08-s03",
      "knowledgeCheckId": "kc-m08-s03",
      "title": "Ideas, criteria and responsible choices — knowledge check",
      "label": "Formative learning evidence",
      "theoryAnchors": [
        "help-m08-s03-generate-ideas",
        "help-m08-s03-criteria-v-constraints",
        "help-m08-s03-decision-matrix"
      ],
      "sourceIds": [
        "assessment-workbook",
        "party-recipes",
        "food-knowledge"
      ],
      "hintPolicy": "answer-neutral",
      "feedbackTiming": "after check only",
      "questions": [
        {
          "id": "kc-m08-s03-q1",
          "label": "Formative learning evidence",
          "focus": "essential idea",
          "theoryAnchor": "help-m08-s03-generate-ideas",
          "prompt": "A team has three realistic ideas and a decision matrix based on confirmed criteria and constraints. Which statement gives the strongest starting explanation of ideas, criteria and responsible choices?",
          "hint": "Compare each option with the ideas under “Generate several ideas before deciding”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Generate several realistic ideas before choosing a preferred solution.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to generate several ideas before deciding. Revisit help-m08-s03-generate-ideas to consolidate the reasoning.",
              "helpAnchor": "help-m08-s03-generate-ideas"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "The first suitable idea should be selected immediately.",
              "correct": false,
              "feedback": "Generating and comparing several realistic ideas gives stronger evidence for a final design decision. Revisit help-m08-s03-generate-ideas.",
              "helpAnchor": "help-m08-s03-generate-ideas"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "The idea with the highest decision-matrix score must always be chosen.",
              "correct": false,
              "feedback": "A matrix supports judgement, but the final choice should consider evidence, important criteria and any trade-offs. Revisit help-m08-s03-generate-ideas.",
              "helpAnchor": "help-m08-s03-generate-ideas"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in ideas, criteria and responsible choices. Revisit help-m08-s03-generate-ideas.",
              "helpAnchor": "help-m08-s03-generate-ideas"
            }
          ]
        },
        {
          "id": "kc-m08-s03-q2",
          "label": "Formative learning evidence",
          "focus": "concept connection",
          "theoryAnchor": "help-m08-s03-criteria-v-constraints",
          "prompt": "A team has three realistic ideas and a decision matrix based on confirmed criteria and constraints. Which response best connects “Generate several ideas before deciding” with “Separate criteria from constraints”?",
          "hint": "Compare each option with the ideas under “Separate criteria from constraints”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Only “Generate several ideas before deciding” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m08-s03-criteria-v-constraints.",
              "helpAnchor": "help-m08-s03-criteria-v-constraints"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m08-s03-criteria-v-constraints.",
              "helpAnchor": "help-m08-s03-criteria-v-constraints"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "The first suitable idea should be selected immediately.",
              "correct": false,
              "feedback": "Generating and comparing several realistic ideas gives stronger evidence for a final design decision. Revisit help-m08-s03-criteria-v-constraints.",
              "helpAnchor": "help-m08-s03-criteria-v-constraints"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Criteria judge how well an idea meets its purpose, while constraints set limits or conditions.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to separate criteria from constraints. Revisit help-m08-s03-criteria-v-constraints to consolidate the reasoning.",
              "helpAnchor": "help-m08-s03-criteria-v-constraints"
            }
          ]
        },
        {
          "id": "kc-m08-s03-q3",
          "label": "Formative learning evidence",
          "focus": "concept application",
          "theoryAnchor": "help-m08-s03-decision-matrix",
          "prompt": "A team has three realistic ideas and a decision matrix based on confirmed criteria and constraints. Which response applies the section's third idea, “Use a decision matrix as a thinking tool”, most accurately?",
          "hint": "Compare each option with the ideas under “Use a decision matrix as a thinking tool”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m08-s03-decision-matrix.",
              "helpAnchor": "help-m08-s03-decision-matrix"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Only “Separate criteria from constraints” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m08-s03-decision-matrix.",
              "helpAnchor": "help-m08-s03-decision-matrix"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "A decision matrix supports comparison and discussion but does not make the final decision for you.",
              "correct": true,
              "feedback": "This response accurately applies “Use a decision matrix as a thinking tool” to the situation. Revisit help-m08-s03-decision-matrix to consolidate the reasoning.",
              "helpAnchor": "help-m08-s03-decision-matrix"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "The idea with the highest decision-matrix score must always be chosen.",
              "correct": false,
              "feedback": "A matrix supports judgement, but the final choice should consider evidence, important criteria and any trade-offs. Revisit help-m08-s03-decision-matrix.",
              "helpAnchor": "help-m08-s03-decision-matrix"
            }
          ]
        },
        {
          "id": "kc-m08-s03-q4",
          "label": "Formative learning evidence",
          "focus": "likely misconception",
          "theoryAnchor": "help-m08-s03-generate-ideas",
          "prompt": "A student makes this claim about ideas, criteria and responsible choices: “The first suitable idea should be selected immediately.” Which response corrects the reasoning?",
          "hint": "Compare each option with the ideas under “Generate several ideas before deciding”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m08-s03-generate-ideas.",
              "helpAnchor": "help-m08-s03-generate-ideas"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Generating and comparing several realistic ideas gives stronger evidence for a final design decision.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to generate several ideas before deciding. Revisit help-m08-s03-generate-ideas to consolidate the reasoning.",
              "helpAnchor": "help-m08-s03-generate-ideas"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "The first suitable idea should be selected immediately.",
              "correct": false,
              "feedback": "Generating and comparing several realistic ideas gives stronger evidence for a final design decision. Revisit help-m08-s03-generate-ideas.",
              "helpAnchor": "help-m08-s03-generate-ideas"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m08-s03-generate-ideas.",
              "helpAnchor": "help-m08-s03-generate-ideas"
            }
          ]
        },
        {
          "id": "kc-m08-s03-q5",
          "label": "Formative learning evidence",
          "focus": "likely misconception",
          "theoryAnchor": "help-m08-s03-criteria-v-constraints",
          "prompt": "During this situation — a team has three realistic ideas and a decision matrix based on confirmed criteria and constraints. Which response best avoids the misconception that “The idea with the highest decision-matrix score must always be chosen.”?",
          "hint": "Compare each option with the ideas under “Separate criteria from constraints”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "A matrix supports judgement, but the final choice should consider evidence, important criteria and any trade-offs.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to separate criteria from constraints. Revisit help-m08-s03-criteria-v-constraints to consolidate the reasoning.",
              "helpAnchor": "help-m08-s03-criteria-v-constraints"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "The idea with the highest decision-matrix score must always be chosen.",
              "correct": false,
              "feedback": "A matrix supports judgement, but the final choice should consider evidence, important criteria and any trade-offs. Revisit help-m08-s03-criteria-v-constraints.",
              "helpAnchor": "help-m08-s03-criteria-v-constraints"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in ideas, criteria and responsible choices. Revisit help-m08-s03-criteria-v-constraints.",
              "helpAnchor": "help-m08-s03-criteria-v-constraints"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Only “Generate several ideas before deciding” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m08-s03-criteria-v-constraints.",
              "helpAnchor": "help-m08-s03-criteria-v-constraints"
            }
          ]
        },
        {
          "id": "kc-m08-s03-q6",
          "label": "Formative learning evidence",
          "focus": "terminology in context",
          "theoryAnchor": "help-m08-s03-generate-ideas",
          "prompt": "Which option uses the term “Design idea” accurately in the context of ideas, criteria and responsible choices?",
          "hint": "Compare each option with the ideas under “Generate several ideas before deciding”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Design idea is a general word for any food choice a person happens to like.",
              "correct": false,
              "feedback": "Design idea has a precise section meaning: A possible solution that can be investigated and compared before a final choice is made. Revisit help-m08-s03-generate-ideas.",
              "helpAnchor": "help-m08-s03-generate-ideas"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Design idea means the same as Criterion in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m08-s03-generate-ideas.",
              "helpAnchor": "help-m08-s03-generate-ideas"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "The meaning of Design idea changes to match whichever answer is most convenient.",
              "correct": false,
              "feedback": "The section gives Design idea a precise meaning that should be applied consistently. Revisit help-m08-s03-generate-ideas.",
              "helpAnchor": "help-m08-s03-generate-ideas"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Design idea means a possible solution that can be investigated and compared before a final choice is made.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to generate several ideas before deciding. Revisit help-m08-s03-generate-ideas to consolidate the reasoning.",
              "helpAnchor": "help-m08-s03-generate-ideas"
            }
          ]
        },
        {
          "id": "kc-m08-s03-q7",
          "label": "Formative learning evidence",
          "focus": "worked-example reasoning",
          "theoryAnchor": "help-m08-s03-decision-matrix",
          "prompt": "A team has three realistic ideas and a decision matrix based on confirmed criteria and constraints. Which conclusion is best supported by the worked example rather than by a guess?",
          "hint": "Compare each option with the ideas under “Use a decision matrix as a thinking tool”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m08-s03-decision-matrix.",
              "helpAnchor": "help-m08-s03-decision-matrix"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in ideas, criteria and responsible choices. Revisit help-m08-s03-decision-matrix.",
              "helpAnchor": "help-m08-s03-decision-matrix"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Responsible selection means comparing several realistic ideas against confirmed criteria and explaining why the chosen option is fit for purpose.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to use a decision matrix as a thinking tool. Revisit help-m08-s03-decision-matrix to consolidate the reasoning.",
              "helpAnchor": "help-m08-s03-decision-matrix"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "The first suitable idea should be selected immediately.",
              "correct": false,
              "feedback": "Generating and comparing several realistic ideas gives stronger evidence for a final design decision. Revisit help-m08-s03-decision-matrix.",
              "helpAnchor": "help-m08-s03-decision-matrix"
            }
          ]
        },
        {
          "id": "kc-m08-s03-q8",
          "label": "Formative learning evidence",
          "focus": "evidence selection",
          "theoryAnchor": "help-m08-s03-criteria-v-constraints",
          "prompt": "A team has three realistic ideas and a decision matrix based on confirmed criteria and constraints. Which evidence plan would most directly support a careful explanation?",
          "hint": "Compare each option with the ideas under “Separate criteria from constraints”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m08-s03-criteria-v-constraints.",
              "helpAnchor": "help-m08-s03-criteria-v-constraints"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "For the selected idea, identify the confirmed criteria it meets and the evidence that supports each important judgement.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to separate criteria from constraints. Revisit help-m08-s03-criteria-v-constraints to consolidate the reasoning.",
              "helpAnchor": "help-m08-s03-criteria-v-constraints"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m08-s03-criteria-v-constraints.",
              "helpAnchor": "help-m08-s03-criteria-v-constraints"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Record only a final opinion and leave out the observations, source details or reasoning that support it.",
              "correct": false,
              "feedback": "A final opinion without supporting evidence or reasoning cannot show how the conclusion was reached. Revisit help-m08-s03-criteria-v-constraints.",
              "helpAnchor": "help-m08-s03-criteria-v-constraints"
            }
          ]
        },
        {
          "id": "kc-m08-s03-q9",
          "label": "Formative learning evidence",
          "focus": "authentic practical/design decision",
          "theoryAnchor": "help-m08-s03-decision-matrix",
          "prompt": "A team has three realistic ideas and a decision matrix based on confirmed criteria and constraints. Which learning action would provide the most useful practice before writing the section capstone?",
          "hint": "Compare each option with the ideas under “Use a decision matrix as a thinking tool”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Compare three fictional party-food ideas against a supplied set of confirmed criteria and record evidence for the ratings.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to use a decision matrix as a thinking tool. Revisit help-m08-s03-decision-matrix to consolidate the reasoning.",
              "helpAnchor": "help-m08-s03-decision-matrix"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Skip the practice and copy a finished response without applying the idea to the situation.",
              "correct": false,
              "feedback": "The practice should require the student to apply the idea and rehearse their own reasoning before the capstone. Revisit help-m08-s03-decision-matrix.",
              "helpAnchor": "help-m08-s03-decision-matrix"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in ideas, criteria and responsible choices. Revisit help-m08-s03-decision-matrix.",
              "helpAnchor": "help-m08-s03-decision-matrix"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Change several important factors at once, then assume which change caused the result.",
              "correct": false,
              "feedback": "Changing several factors together makes it difficult to identify which change influenced the result. Revisit help-m08-s03-decision-matrix.",
              "helpAnchor": "help-m08-s03-decision-matrix"
            }
          ]
        },
        {
          "id": "kc-m08-s03-q10",
          "label": "Formative learning evidence",
          "focus": "careful judgement",
          "theoryAnchor": "help-m08-s03-criteria-v-constraints",
          "prompt": "A team has three realistic ideas and a decision matrix based on confirmed criteria and constraints. Which final judgement is the most careful, balanced conclusion?",
          "hint": "Compare each option with the ideas under “Use a decision matrix as a thinking tool”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "The idea with the highest decision-matrix score must always be chosen.",
              "correct": false,
              "feedback": "A matrix supports judgement, but the final choice should consider evidence, important criteria and any trade-offs. Revisit help-m08-s03-decision-matrix. Review help-m08-s03-criteria-v-constraints.",
              "helpAnchor": "help-m08-s03-criteria-v-constraints"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m08-s03-decision-matrix. Review help-m08-s03-criteria-v-constraints.",
              "helpAnchor": "help-m08-s03-criteria-v-constraints"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in ideas, criteria and responsible choices. Revisit help-m08-s03-decision-matrix. Review help-m08-s03-criteria-v-constraints.",
              "helpAnchor": "help-m08-s03-criteria-v-constraints"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Safety, user needs, nutrition, cost, sustainability, time, skill and presentation can be useful lenses when they are confirmed as relevant.",
              "correct": true,
              "feedback": "This conclusion uses the section evidence carefully and connects it to “Separate criteria from constraints”. Revisit help-m08-s03-criteria-v-constraints to consolidate the reasoning.",
              "helpAnchor": "help-m08-s03-criteria-v-constraints"
            }
          ]
        }
      ]
    },
    {
      "sectionId": "m09-s01",
      "knowledgeCheckId": "kc-m09-s01",
      "title": "Recipe and equipment selection — knowledge check",
      "label": "Formative learning evidence",
      "theoryAnchors": [
        "help-m09-s01-selection-lenses",
        "help-m09-s01-method-to-equipment",
        "help-m09-s01-justify-choice"
      ],
      "sourceIds": [
        "recipe-booklet",
        "party-recipes",
        "assessment-workbook"
      ],
      "hintPolicy": "answer-neutral",
      "feedbackTiming": "after check only",
      "questions": [
        {
          "id": "kc-m09-s01-q1",
          "label": "Formative learning evidence",
          "focus": "essential idea",
          "theoryAnchor": "help-m09-s01-selection-lenses",
          "prompt": "A team must choose an evidenced recipe and derive an equipment list from the actions in its method. Which statement gives the strongest starting explanation of recipe and equipment selection?",
          "hint": "Compare each option with the ideas under “Use selection lenses”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in recipe and equipment selection. Revisit help-m09-s01-selection-lenses.",
              "helpAnchor": "help-m09-s01-selection-lenses"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Select recipes by considering users, serving context, skill, time, ingredients, cost, dietary safety and presentation potential.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to use selection lenses. Revisit help-m09-s01-selection-lenses to consolidate the reasoning.",
              "helpAnchor": "help-m09-s01-selection-lenses"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "The best party recipe is simply the one that looks most impressive.",
              "correct": false,
              "feedback": "Presentation matters, but the choice should also suit users, time, skill, ingredients, cost, dietary safety and serving context. Revisit help-m09-s01-selection-lenses.",
              "helpAnchor": "help-m09-s01-selection-lenses"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "An equipment list can be written from memory before reading the method.",
              "correct": false,
              "feedback": "Equipment should be identified from each method action so the list reflects the actual recipe requirements. Revisit help-m09-s01-selection-lenses.",
              "helpAnchor": "help-m09-s01-selection-lenses"
            }
          ]
        },
        {
          "id": "kc-m09-s01-q2",
          "label": "Formative learning evidence",
          "focus": "concept connection",
          "theoryAnchor": "help-m09-s01-method-to-equipment",
          "prompt": "A team must choose an evidenced recipe and derive an equipment list from the actions in its method. Which response best connects “Use selection lenses” with “Turn the method into an equipment list”?",
          "hint": "Compare each option with the ideas under “Turn the method into an equipment list”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Check recipe details against the available evidence instead of relying on assumptions.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to turn the method into an equipment list. Revisit help-m09-s01-method-to-equipment to consolidate the reasoning.",
              "helpAnchor": "help-m09-s01-method-to-equipment"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Only “Use selection lenses” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m09-s01-method-to-equipment.",
              "helpAnchor": "help-m09-s01-method-to-equipment"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m09-s01-method-to-equipment.",
              "helpAnchor": "help-m09-s01-method-to-equipment"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "The best party recipe is simply the one that looks most impressive.",
              "correct": false,
              "feedback": "Presentation matters, but the choice should also suit users, time, skill, ingredients, cost, dietary safety and serving context. Revisit help-m09-s01-method-to-equipment.",
              "helpAnchor": "help-m09-s01-method-to-equipment"
            }
          ]
        },
        {
          "id": "kc-m09-s01-q3",
          "label": "Formative learning evidence",
          "focus": "concept application",
          "theoryAnchor": "help-m09-s01-justify-choice",
          "prompt": "A team must choose an evidenced recipe and derive an equipment list from the actions in its method. Which response applies the section's third idea, “Justify the recipe choice”, most accurately?",
          "hint": "Compare each option with the ideas under “Justify the recipe choice”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "An equipment list can be written from memory before reading the method.",
              "correct": false,
              "feedback": "Equipment should be identified from each method action so the list reflects the actual recipe requirements. Revisit help-m09-s01-justify-choice.",
              "helpAnchor": "help-m09-s01-justify-choice"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m09-s01-justify-choice.",
              "helpAnchor": "help-m09-s01-justify-choice"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Only “Turn the method into an equipment list” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m09-s01-justify-choice.",
              "helpAnchor": "help-m09-s01-justify-choice"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Justify a choice with specific practical reasons linked to the task purpose.",
              "correct": true,
              "feedback": "This response accurately applies “Justify the recipe choice” to the situation. Revisit help-m09-s01-justify-choice to consolidate the reasoning.",
              "helpAnchor": "help-m09-s01-justify-choice"
            }
          ]
        },
        {
          "id": "kc-m09-s01-q4",
          "label": "Formative learning evidence",
          "focus": "likely misconception",
          "theoryAnchor": "help-m09-s01-selection-lenses",
          "prompt": "A student makes this claim about recipe and equipment selection: “The best party recipe is simply the one that looks most impressive.” Which response corrects the reasoning?",
          "hint": "Compare each option with the ideas under “Use selection lenses”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m09-s01-selection-lenses.",
              "helpAnchor": "help-m09-s01-selection-lenses"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m09-s01-selection-lenses.",
              "helpAnchor": "help-m09-s01-selection-lenses"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Presentation matters, but the choice should also suit users, time, skill, ingredients, cost, dietary safety and serving context.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to use selection lenses. Revisit help-m09-s01-selection-lenses to consolidate the reasoning.",
              "helpAnchor": "help-m09-s01-selection-lenses"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "The best party recipe is simply the one that looks most impressive.",
              "correct": false,
              "feedback": "Presentation matters, but the choice should also suit users, time, skill, ingredients, cost, dietary safety and serving context. Revisit help-m09-s01-selection-lenses.",
              "helpAnchor": "help-m09-s01-selection-lenses"
            }
          ]
        },
        {
          "id": "kc-m09-s01-q5",
          "label": "Formative learning evidence",
          "focus": "likely misconception",
          "theoryAnchor": "help-m09-s01-method-to-equipment",
          "prompt": "During this situation — a team must choose an evidenced recipe and derive an equipment list from the actions in its method. Which response best avoids the misconception that “An equipment list can be written from memory before reading the method.”?",
          "hint": "Compare each option with the ideas under “Turn the method into an equipment list”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Only “Use selection lenses” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m09-s01-method-to-equipment.",
              "helpAnchor": "help-m09-s01-method-to-equipment"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Equipment should be identified from each method action so the list reflects the actual recipe requirements.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to turn the method into an equipment list. Revisit help-m09-s01-method-to-equipment to consolidate the reasoning.",
              "helpAnchor": "help-m09-s01-method-to-equipment"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "An equipment list can be written from memory before reading the method.",
              "correct": false,
              "feedback": "Equipment should be identified from each method action so the list reflects the actual recipe requirements. Revisit help-m09-s01-method-to-equipment.",
              "helpAnchor": "help-m09-s01-method-to-equipment"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in recipe and equipment selection. Revisit help-m09-s01-method-to-equipment.",
              "helpAnchor": "help-m09-s01-method-to-equipment"
            }
          ]
        },
        {
          "id": "kc-m09-s01-q6",
          "label": "Formative learning evidence",
          "focus": "terminology in context",
          "theoryAnchor": "help-m09-s01-selection-lenses",
          "prompt": "Which option uses the term “serving context” accurately in the context of recipe and equipment selection?",
          "hint": "Compare each option with the ideas under “Use selection lenses”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "serving context means the situation in which food will be presented, portioned and eaten.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to use selection lenses. Revisit help-m09-s01-selection-lenses to consolidate the reasoning.",
              "helpAnchor": "help-m09-s01-selection-lenses"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "serving context is a general word for any food choice a person happens to like.",
              "correct": false,
              "feedback": "serving context has a precise section meaning: The situation in which food will be presented, portioned and eaten. Revisit help-m09-s01-selection-lenses.",
              "helpAnchor": "help-m09-s01-selection-lenses"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "serving context means the same as selection criteria in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m09-s01-selection-lenses.",
              "helpAnchor": "help-m09-s01-selection-lenses"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "The meaning of serving context changes to match whichever answer is most convenient.",
              "correct": false,
              "feedback": "The section gives serving context a precise meaning that should be applied consistently. Revisit help-m09-s01-selection-lenses.",
              "helpAnchor": "help-m09-s01-selection-lenses"
            }
          ]
        },
        {
          "id": "kc-m09-s01-q7",
          "label": "Formative learning evidence",
          "focus": "worked-example reasoning",
          "theoryAnchor": "help-m09-s01-justify-choice",
          "prompt": "A team must choose an evidenced recipe and derive an equipment list from the actions in its method. Which conclusion is best supported by the worked example rather than by a guess?",
          "hint": "Compare each option with the ideas under “Justify the recipe choice”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "The best party recipe is simply the one that looks most impressive.",
              "correct": false,
              "feedback": "Presentation matters, but the choice should also suit users, time, skill, ingredients, cost, dietary safety and serving context. Revisit help-m09-s01-justify-choice.",
              "helpAnchor": "help-m09-s01-justify-choice"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m09-s01-justify-choice.",
              "helpAnchor": "help-m09-s01-justify-choice"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in recipe and equipment selection. Revisit help-m09-s01-justify-choice.",
              "helpAnchor": "help-m09-s01-justify-choice"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "A sound recipe choice is supported by several practical criteria, and the equipment list should be traceable to the written method.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to justify the recipe choice. Revisit help-m09-s01-justify-choice to consolidate the reasoning.",
              "helpAnchor": "help-m09-s01-justify-choice"
            }
          ]
        },
        {
          "id": "kc-m09-s01-q8",
          "label": "Formative learning evidence",
          "focus": "evidence selection",
          "theoryAnchor": "help-m09-s01-method-to-equipment",
          "prompt": "A team must choose an evidenced recipe and derive an equipment list from the actions in its method. Which evidence plan would most directly support a careful explanation?",
          "hint": "Compare each option with the ideas under “Turn the method into an equipment list”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Record only a final opinion and leave out the observations, source details or reasoning that support it.",
              "correct": false,
              "feedback": "A final opinion without supporting evidence or reasoning cannot show how the conclusion was reached. Revisit help-m09-s01-method-to-equipment.",
              "helpAnchor": "help-m09-s01-method-to-equipment"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m09-s01-method-to-equipment.",
              "helpAnchor": "help-m09-s01-method-to-equipment"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "For each decision, identify which detail from the authorised recipe and project sources supports the reasoning.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to turn the method into an equipment list. Revisit help-m09-s01-method-to-equipment to consolidate the reasoning.",
              "helpAnchor": "help-m09-s01-method-to-equipment"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m09-s01-method-to-equipment.",
              "helpAnchor": "help-m09-s01-method-to-equipment"
            }
          ]
        },
        {
          "id": "kc-m09-s01-q9",
          "label": "Formative learning evidence",
          "focus": "authentic practical/design decision",
          "theoryAnchor": "help-m09-s01-justify-choice",
          "prompt": "A team must choose an evidenced recipe and derive an equipment list from the actions in its method. Which learning action would provide the most useful practice before writing the section capstone?",
          "hint": "Compare each option with the ideas under “Justify the recipe choice”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Change several important factors at once, then assume which change caused the result.",
              "correct": false,
              "feedback": "Changing several factors together makes it difficult to identify which change influenced the result. Revisit help-m09-s01-justify-choice.",
              "helpAnchor": "help-m09-s01-justify-choice"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Have students compare evidenced recipe options using the selection lenses, then create an equipment list from one selected method.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to justify the recipe choice. Revisit help-m09-s01-justify-choice to consolidate the reasoning.",
              "helpAnchor": "help-m09-s01-justify-choice"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Skip the practice and copy a finished response without applying the idea to the situation.",
              "correct": false,
              "feedback": "The practice should require the student to apply the idea and rehearse their own reasoning before the capstone. Revisit help-m09-s01-justify-choice.",
              "helpAnchor": "help-m09-s01-justify-choice"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in recipe and equipment selection. Revisit help-m09-s01-justify-choice.",
              "helpAnchor": "help-m09-s01-justify-choice"
            }
          ]
        },
        {
          "id": "kc-m09-s01-q10",
          "label": "Formative learning evidence",
          "focus": "careful judgement",
          "theoryAnchor": "help-m09-s01-method-to-equipment",
          "prompt": "A team must choose an evidenced recipe and derive an equipment list from the actions in its method. Which final judgement is the most careful, balanced conclusion?",
          "hint": "Compare each option with the ideas under “Justify the recipe choice”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Build the equipment list by matching equipment to each action in the recipe method.",
              "correct": true,
              "feedback": "This conclusion uses the section evidence carefully and connects it to “Turn the method into an equipment list”. Revisit help-m09-s01-method-to-equipment to consolidate the reasoning.",
              "helpAnchor": "help-m09-s01-method-to-equipment"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "An equipment list can be written from memory before reading the method.",
              "correct": false,
              "feedback": "Equipment should be identified from each method action so the list reflects the actual recipe requirements. Revisit help-m09-s01-justify-choice. Review help-m09-s01-method-to-equipment.",
              "helpAnchor": "help-m09-s01-method-to-equipment"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m09-s01-justify-choice. Review help-m09-s01-method-to-equipment.",
              "helpAnchor": "help-m09-s01-method-to-equipment"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in recipe and equipment selection. Revisit help-m09-s01-justify-choice. Review help-m09-s01-method-to-equipment.",
              "helpAnchor": "help-m09-s01-method-to-equipment"
            }
          ]
        }
      ]
    },
    {
      "sectionId": "m09-s02",
      "knowledgeCheckId": "kc-m09-s02",
      "title": "Workflow and collaboration — knowledge check",
      "label": "Formative learning evidence",
      "theoryAnchors": [
        "help-m09-s02-workflow-map",
        "help-m09-s02-dependencies",
        "help-m09-s02-team-communication"
      ],
      "sourceIds": [
        "assessment-workbook",
        "recipe-booklet",
        "course-program"
      ],
      "hintPolicy": "answer-neutral",
      "feedbackTiming": "after check only",
      "questions": [
        {
          "id": "kc-m09-s02-q1",
          "label": "Formative learning evidence",
          "focus": "essential idea",
          "theoryAnchor": "help-m09-s02-workflow-map",
          "prompt": "Two students turn a recipe into a workflow with durations, dependencies, checkpoints, roles and clean-as-you-go actions. Which statement gives the strongest starting explanation of workflow and collaboration?",
          "hint": "Compare each option with the ideas under “Map the whole workflow”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "A workflow plan records tasks, order, estimated duration, dependencies, checkpoints and clean-as-you-go actions.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to map the whole workflow. Revisit help-m09-s02-workflow-map to consolidate the reasoning.",
              "helpAnchor": "help-m09-s02-workflow-map"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "A good workflow is simply the recipe method copied into a timetable.",
              "correct": false,
              "feedback": "A workflow also includes estimated durations, dependencies, checkpoints, role allocation and cleaning actions. Revisit help-m09-s02-workflow-map.",
              "helpAnchor": "help-m09-s02-workflow-map"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Once roles are allocated, each student should only focus on their own jobs.",
              "correct": false,
              "feedback": "Both students share responsibility for progress and should communicate, adapt and support the next priority when needed. Revisit help-m09-s02-workflow-map.",
              "helpAnchor": "help-m09-s02-workflow-map"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in workflow and collaboration. Revisit help-m09-s02-workflow-map.",
              "helpAnchor": "help-m09-s02-workflow-map"
            }
          ]
        },
        {
          "id": "kc-m09-s02-q2",
          "label": "Formative learning evidence",
          "focus": "concept connection",
          "theoryAnchor": "help-m09-s02-dependencies",
          "prompt": "Two students turn a recipe into a workflow with durations, dependencies, checkpoints, roles and clean-as-you-go actions. Which response best connects “Map the whole workflow” with “Recognise dependencies and adjust”?",
          "hint": "Compare each option with the ideas under “Recognise dependencies and adjust”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Only “Map the whole workflow” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m09-s02-dependencies.",
              "helpAnchor": "help-m09-s02-dependencies"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m09-s02-dependencies.",
              "helpAnchor": "help-m09-s02-dependencies"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "A good workflow is simply the recipe method copied into a timetable.",
              "correct": false,
              "feedback": "A workflow also includes estimated durations, dependencies, checkpoints, role allocation and cleaning actions. Revisit help-m09-s02-dependencies.",
              "helpAnchor": "help-m09-s02-dependencies"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Dependencies show which tasks rely on earlier steps and help prevent unrealistic sequencing.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to recognise dependencies and adjust. Revisit help-m09-s02-dependencies to consolidate the reasoning.",
              "helpAnchor": "help-m09-s02-dependencies"
            }
          ]
        },
        {
          "id": "kc-m09-s02-q3",
          "label": "Formative learning evidence",
          "focus": "concept application",
          "theoryAnchor": "help-m09-s02-team-communication",
          "prompt": "Two students turn a recipe into a workflow with durations, dependencies, checkpoints, roles and clean-as-you-go actions. Which response applies the section's third idea, “Share roles and communicate clearly”, most accurately?",
          "hint": "Compare each option with the ideas under “Share roles and communicate clearly”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m09-s02-team-communication.",
              "helpAnchor": "help-m09-s02-team-communication"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Only “Recognise dependencies and adjust” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m09-s02-team-communication.",
              "helpAnchor": "help-m09-s02-team-communication"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Clear call-outs and flexible task changes help a pair respond when practical work takes longer than planned.",
              "correct": true,
              "feedback": "This response accurately applies “Share roles and communicate clearly” to the situation. Revisit help-m09-s02-team-communication to consolidate the reasoning.",
              "helpAnchor": "help-m09-s02-team-communication"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Once roles are allocated, each student should only focus on their own jobs.",
              "correct": false,
              "feedback": "Both students share responsibility for progress and should communicate, adapt and support the next priority when needed. Revisit help-m09-s02-team-communication.",
              "helpAnchor": "help-m09-s02-team-communication"
            }
          ]
        },
        {
          "id": "kc-m09-s02-q4",
          "label": "Formative learning evidence",
          "focus": "likely misconception",
          "theoryAnchor": "help-m09-s02-workflow-map",
          "prompt": "A student makes this claim about workflow and collaboration: “A good workflow is simply the recipe method copied into a timetable.” Which response corrects the reasoning?",
          "hint": "Compare each option with the ideas under “Map the whole workflow”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m09-s02-workflow-map.",
              "helpAnchor": "help-m09-s02-workflow-map"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "A workflow also includes estimated durations, dependencies, checkpoints, role allocation and cleaning actions.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to map the whole workflow. Revisit help-m09-s02-workflow-map to consolidate the reasoning.",
              "helpAnchor": "help-m09-s02-workflow-map"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "A good workflow is simply the recipe method copied into a timetable.",
              "correct": false,
              "feedback": "A workflow also includes estimated durations, dependencies, checkpoints, role allocation and cleaning actions. Revisit help-m09-s02-workflow-map.",
              "helpAnchor": "help-m09-s02-workflow-map"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m09-s02-workflow-map.",
              "helpAnchor": "help-m09-s02-workflow-map"
            }
          ]
        },
        {
          "id": "kc-m09-s02-q5",
          "label": "Formative learning evidence",
          "focus": "likely misconception",
          "theoryAnchor": "help-m09-s02-dependencies",
          "prompt": "During this situation — two students turn a recipe into a workflow with durations, dependencies, checkpoints, roles and clean-as-you-go actions. Which response best avoids the misconception that “Once roles are allocated, each student should only focus on their own jobs.”?",
          "hint": "Compare each option with the ideas under “Recognise dependencies and adjust”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Both students share responsibility for progress and should communicate, adapt and support the next priority when needed.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to recognise dependencies and adjust. Revisit help-m09-s02-dependencies to consolidate the reasoning.",
              "helpAnchor": "help-m09-s02-dependencies"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Once roles are allocated, each student should only focus on their own jobs.",
              "correct": false,
              "feedback": "Both students share responsibility for progress and should communicate, adapt and support the next priority when needed. Revisit help-m09-s02-dependencies.",
              "helpAnchor": "help-m09-s02-dependencies"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in workflow and collaboration. Revisit help-m09-s02-dependencies.",
              "helpAnchor": "help-m09-s02-dependencies"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Only “Map the whole workflow” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m09-s02-dependencies.",
              "helpAnchor": "help-m09-s02-dependencies"
            }
          ]
        },
        {
          "id": "kc-m09-s02-q6",
          "label": "Formative learning evidence",
          "focus": "terminology in context",
          "theoryAnchor": "help-m09-s02-workflow-map",
          "prompt": "Which option uses the term “workflow” accurately in the context of workflow and collaboration?",
          "hint": "Compare each option with the ideas under “Map the whole workflow”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "workflow is a general word for any food choice a person happens to like.",
              "correct": false,
              "feedback": "workflow has a precise section meaning: An organised sequence of tasks used to complete practical work from beginning to end. Revisit help-m09-s02-workflow-map.",
              "helpAnchor": "help-m09-s02-workflow-map"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "workflow means the same as dependency in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m09-s02-workflow-map.",
              "helpAnchor": "help-m09-s02-workflow-map"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "The meaning of workflow changes to match whichever answer is most convenient.",
              "correct": false,
              "feedback": "The section gives workflow a precise meaning that should be applied consistently. Revisit help-m09-s02-workflow-map.",
              "helpAnchor": "help-m09-s02-workflow-map"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "workflow means an organised sequence of tasks used to complete practical work from beginning to end.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to map the whole workflow. Revisit help-m09-s02-workflow-map to consolidate the reasoning.",
              "helpAnchor": "help-m09-s02-workflow-map"
            }
          ]
        },
        {
          "id": "kc-m09-s02-q7",
          "label": "Formative learning evidence",
          "focus": "worked-example reasoning",
          "theoryAnchor": "help-m09-s02-team-communication",
          "prompt": "Two students turn a recipe into a workflow with durations, dependencies, checkpoints, roles and clean-as-you-go actions. Which conclusion is best supported by the worked example rather than by a guess?",
          "hint": "Compare each option with the ideas under “Share roles and communicate clearly”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m09-s02-team-communication.",
              "helpAnchor": "help-m09-s02-team-communication"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in workflow and collaboration. Revisit help-m09-s02-team-communication.",
              "helpAnchor": "help-m09-s02-team-communication"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Backwards planning keeps the final goal visible and helps a pair organise tasks, dependencies, communication and clean-up as one connected workflow.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to share roles and communicate clearly. Revisit help-m09-s02-team-communication to consolidate the reasoning.",
              "helpAnchor": "help-m09-s02-team-communication"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "A good workflow is simply the recipe method copied into a timetable.",
              "correct": false,
              "feedback": "A workflow also includes estimated durations, dependencies, checkpoints, role allocation and cleaning actions. Revisit help-m09-s02-team-communication.",
              "helpAnchor": "help-m09-s02-team-communication"
            }
          ]
        },
        {
          "id": "kc-m09-s02-q8",
          "label": "Formative learning evidence",
          "focus": "evidence selection",
          "theoryAnchor": "help-m09-s02-dependencies",
          "prompt": "Two students turn a recipe into a workflow with durations, dependencies, checkpoints, roles and clean-as-you-go actions. Which evidence plan would most directly support a careful explanation?",
          "hint": "Compare each option with the ideas under “Recognise dependencies and adjust”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m09-s02-dependencies.",
              "helpAnchor": "help-m09-s02-dependencies"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Use details from the authorised project, recipe and course sources to support the planned task sequence without adding unconfirmed lesson conditions or local requirements.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to recognise dependencies and adjust. Revisit help-m09-s02-dependencies to consolidate the reasoning.",
              "helpAnchor": "help-m09-s02-dependencies"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m09-s02-dependencies.",
              "helpAnchor": "help-m09-s02-dependencies"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Record only a final opinion and leave out the observations, source details or reasoning that support it.",
              "correct": false,
              "feedback": "A final opinion without supporting evidence or reasoning cannot show how the conclusion was reached. Revisit help-m09-s02-dependencies.",
              "helpAnchor": "help-m09-s02-dependencies"
            }
          ]
        },
        {
          "id": "kc-m09-s02-q9",
          "label": "Formative learning evidence",
          "focus": "authentic practical/design decision",
          "theoryAnchor": "help-m09-s02-team-communication",
          "prompt": "Two students turn a recipe into a workflow with durations, dependencies, checkpoints, roles and clean-as-you-go actions. Which learning action would provide the most useful practice before writing the section capstone?",
          "hint": "Compare each option with the ideas under “Share roles and communicate clearly”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Have students turn an evidenced recipe into a fictional two-person backwards plan that finishes with presentation and a workspace-ready condition.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to share roles and communicate clearly. Revisit help-m09-s02-team-communication to consolidate the reasoning.",
              "helpAnchor": "help-m09-s02-team-communication"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Skip the practice and copy a finished response without applying the idea to the situation.",
              "correct": false,
              "feedback": "The practice should require the student to apply the idea and rehearse their own reasoning before the capstone. Revisit help-m09-s02-team-communication.",
              "helpAnchor": "help-m09-s02-team-communication"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in workflow and collaboration. Revisit help-m09-s02-team-communication.",
              "helpAnchor": "help-m09-s02-team-communication"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Change several important factors at once, then assume which change caused the result.",
              "correct": false,
              "feedback": "Changing several factors together makes it difficult to identify which change influenced the result. Revisit help-m09-s02-team-communication.",
              "helpAnchor": "help-m09-s02-team-communication"
            }
          ]
        },
        {
          "id": "kc-m09-s02-q10",
          "label": "Formative learning evidence",
          "focus": "careful judgement",
          "theoryAnchor": "help-m09-s02-dependencies",
          "prompt": "Two students turn a recipe into a workflow with durations, dependencies, checkpoints, roles and clean-as-you-go actions. Which final judgement is the most careful, balanced conclusion?",
          "hint": "Compare each option with the ideas under “Share roles and communicate clearly”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Once roles are allocated, each student should only focus on their own jobs.",
              "correct": false,
              "feedback": "Both students share responsibility for progress and should communicate, adapt and support the next priority when needed. Revisit help-m09-s02-team-communication. Review help-m09-s02-dependencies.",
              "helpAnchor": "help-m09-s02-dependencies"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m09-s02-team-communication. Review help-m09-s02-dependencies.",
              "helpAnchor": "help-m09-s02-dependencies"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in workflow and collaboration. Revisit help-m09-s02-team-communication. Review help-m09-s02-dependencies.",
              "helpAnchor": "help-m09-s02-dependencies"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Fair collaboration gives both students meaningful responsibilities and keeps the whole task shared.",
              "correct": true,
              "feedback": "This conclusion uses the section evidence carefully and connects it to “Recognise dependencies and adjust”. Revisit help-m09-s02-dependencies to consolidate the reasoning.",
              "helpAnchor": "help-m09-s02-dependencies"
            }
          ]
        }
      ]
    },
    {
      "sectionId": "m09-s03",
      "knowledgeCheckId": "kc-m09-s03",
      "title": "Presentation, styling and photography — knowledge check",
      "label": "Formative learning evidence",
      "theoryAnchors": [
        "help-m09-s03-purposeful-plating",
        "help-m09-s03-safe-finish",
        "help-m09-s03-truthful-photo"
      ],
      "sourceIds": [
        "assessment-workbook",
        "recipe-booklet"
      ],
      "hintPolicy": "answer-neutral",
      "feedbackTiming": "after check only",
      "questions": [
        {
          "id": "kc-m09-s03-q1",
          "label": "Formative learning evidence",
          "focus": "essential idea",
          "theoryAnchor": "help-m09-s03-purposeful-plating",
          "prompt": "A team plates its finished food and needs one clear, truthful photograph without faces, names or private information. Which statement gives the strongest starting explanation of presentation, styling and photography?",
          "hint": "Compare each option with the ideas under “Build a purposeful plate”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "A plate looks better when every empty space is filled with food or decoration.",
              "correct": false,
              "feedback": "Purposeful spacing can make the portion clearer and more organised, and extra garnish should only be added when it is edible and relevant. Revisit help-m09-s03-purposeful-plating.",
              "helpAnchor": "help-m09-s03-purposeful-plating"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Editing a photograph is acceptable if it makes the final food look more impressive.",
              "correct": false,
              "feedback": "The image should represent the product truthfully and should not add, remove or change important food features in a deceptive way. Revisit help-m09-s03-purposeful-plating.",
              "helpAnchor": "help-m09-s03-purposeful-plating"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in presentation, styling and photography. Revisit help-m09-s03-purposeful-plating.",
              "helpAnchor": "help-m09-s03-purposeful-plating"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Purposeful plating uses portion, shape, colour, texture, height and spacing to support the food and intended user.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to build a purposeful plate. Revisit help-m09-s03-purposeful-plating to consolidate the reasoning.",
              "helpAnchor": "help-m09-s03-purposeful-plating"
            }
          ]
        },
        {
          "id": "kc-m09-s03-q2",
          "label": "Formative learning evidence",
          "focus": "concept connection",
          "theoryAnchor": "help-m09-s03-safe-finish",
          "prompt": "A team plates its finished food and needs one clear, truthful photograph without faces, names or private information. Which response best connects “Build a purposeful plate” with “Finish and present food safely”?",
          "hint": "Compare each option with the ideas under “Finish and present food safely”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m09-s03-safe-finish.",
              "helpAnchor": "help-m09-s03-safe-finish"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "A plate looks better when every empty space is filled with food or decoration.",
              "correct": false,
              "feedback": "Purposeful spacing can make the portion clearer and more organised, and extra garnish should only be added when it is edible and relevant. Revisit help-m09-s03-safe-finish.",
              "helpAnchor": "help-m09-s03-safe-finish"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "An edible garnish is suitable only when it is relevant to the food and contributes meaningfully to the presentation.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to finish and present food safely. Revisit help-m09-s03-safe-finish to consolidate the reasoning.",
              "helpAnchor": "help-m09-s03-safe-finish"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Only “Build a purposeful plate” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m09-s03-safe-finish.",
              "helpAnchor": "help-m09-s03-safe-finish"
            }
          ]
        },
        {
          "id": "kc-m09-s03-q3",
          "label": "Formative learning evidence",
          "focus": "concept application",
          "theoryAnchor": "help-m09-s03-truthful-photo",
          "prompt": "A team plates its finished food and needs one clear, truthful photograph without faces, names or private information. Which response applies the section's third idea, “Take a clear and truthful photograph”, most accurately?",
          "hint": "Compare each option with the ideas under “Take a clear and truthful photograph”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Only “Finish and present food safely” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m09-s03-truthful-photo.",
              "helpAnchor": "help-m09-s03-truthful-photo"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "A truthful photograph uses stable light, a clear angle and an uncluttered background without deceptive editing or identifying information.",
              "correct": true,
              "feedback": "This response accurately applies “Take a clear and truthful photograph” to the situation. Revisit help-m09-s03-truthful-photo to consolidate the reasoning.",
              "helpAnchor": "help-m09-s03-truthful-photo"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Editing a photograph is acceptable if it makes the final food look more impressive.",
              "correct": false,
              "feedback": "The image should represent the product truthfully and should not add, remove or change important food features in a deceptive way. Revisit help-m09-s03-truthful-photo.",
              "helpAnchor": "help-m09-s03-truthful-photo"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m09-s03-truthful-photo.",
              "helpAnchor": "help-m09-s03-truthful-photo"
            }
          ]
        },
        {
          "id": "kc-m09-s03-q4",
          "label": "Formative learning evidence",
          "focus": "likely misconception",
          "theoryAnchor": "help-m09-s03-purposeful-plating",
          "prompt": "A student makes this claim about presentation, styling and photography: “A plate looks better when every empty space is filled with food or decoration.” Which response corrects the reasoning?",
          "hint": "Compare each option with the ideas under “Build a purposeful plate”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Purposeful spacing can make the portion clearer and more organised, and extra garnish should only be added when it is edible and relevant.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to build a purposeful plate. Revisit help-m09-s03-purposeful-plating to consolidate the reasoning.",
              "helpAnchor": "help-m09-s03-purposeful-plating"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "A plate looks better when every empty space is filled with food or decoration.",
              "correct": false,
              "feedback": "Purposeful spacing can make the portion clearer and more organised, and extra garnish should only be added when it is edible and relevant. Revisit help-m09-s03-purposeful-plating.",
              "helpAnchor": "help-m09-s03-purposeful-plating"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m09-s03-purposeful-plating.",
              "helpAnchor": "help-m09-s03-purposeful-plating"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m09-s03-purposeful-plating.",
              "helpAnchor": "help-m09-s03-purposeful-plating"
            }
          ]
        },
        {
          "id": "kc-m09-s03-q5",
          "label": "Formative learning evidence",
          "focus": "likely misconception",
          "theoryAnchor": "help-m09-s03-safe-finish",
          "prompt": "During this situation — a team plates its finished food and needs one clear, truthful photograph without faces, names or private information. Which response best avoids the misconception that “Editing a photograph is acceptable if it makes the final food look more impressive.”?",
          "hint": "Compare each option with the ideas under “Finish and present food safely”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Editing a photograph is acceptable if it makes the final food look more impressive.",
              "correct": false,
              "feedback": "The image should represent the product truthfully and should not add, remove or change important food features in a deceptive way. Revisit help-m09-s03-safe-finish.",
              "helpAnchor": "help-m09-s03-safe-finish"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in presentation, styling and photography. Revisit help-m09-s03-safe-finish.",
              "helpAnchor": "help-m09-s03-safe-finish"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Only “Build a purposeful plate” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m09-s03-safe-finish.",
              "helpAnchor": "help-m09-s03-safe-finish"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "The image should represent the product truthfully and should not add, remove or change important food features in a deceptive way.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to finish and present food safely. Revisit help-m09-s03-safe-finish to consolidate the reasoning.",
              "helpAnchor": "help-m09-s03-safe-finish"
            }
          ]
        },
        {
          "id": "kc-m09-s03-q6",
          "label": "Formative learning evidence",
          "focus": "terminology in context",
          "theoryAnchor": "help-m09-s03-purposeful-plating",
          "prompt": "Which option uses the term “plating” accurately in the context of presentation, styling and photography?",
          "hint": "Compare each option with the ideas under “Build a purposeful plate”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "plating means the same as garnish in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m09-s03-purposeful-plating.",
              "helpAnchor": "help-m09-s03-purposeful-plating"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "The meaning of plating changes to match whichever answer is most convenient.",
              "correct": false,
              "feedback": "The section gives plating a precise meaning that should be applied consistently. Revisit help-m09-s03-purposeful-plating.",
              "helpAnchor": "help-m09-s03-purposeful-plating"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "plating means the deliberate arrangement of a food portion for presentation and serving.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to build a purposeful plate. Revisit help-m09-s03-purposeful-plating to consolidate the reasoning.",
              "helpAnchor": "help-m09-s03-purposeful-plating"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "plating is a general word for any food choice a person happens to like.",
              "correct": false,
              "feedback": "plating has a precise section meaning: The deliberate arrangement of a food portion for presentation and serving. Revisit help-m09-s03-purposeful-plating.",
              "helpAnchor": "help-m09-s03-purposeful-plating"
            }
          ]
        },
        {
          "id": "kc-m09-s03-q7",
          "label": "Formative learning evidence",
          "focus": "worked-example reasoning",
          "theoryAnchor": "help-m09-s03-truthful-photo",
          "prompt": "A team plates its finished food and needs one clear, truthful photograph without faces, names or private information. Which conclusion is best supported by the worked example rather than by a guess?",
          "hint": "Compare each option with the ideas under “Take a clear and truthful photograph”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in presentation, styling and photography. Revisit help-m09-s03-truthful-photo.",
              "helpAnchor": "help-m09-s03-truthful-photo"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Good presentation combines purposeful food styling, safe handling and truthful visual documentation of the product that was actually made.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to take a clear and truthful photograph. Revisit help-m09-s03-truthful-photo to consolidate the reasoning.",
              "helpAnchor": "help-m09-s03-truthful-photo"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "A plate looks better when every empty space is filled with food or decoration.",
              "correct": false,
              "feedback": "Purposeful spacing can make the portion clearer and more organised, and extra garnish should only be added when it is edible and relevant. Revisit help-m09-s03-truthful-photo.",
              "helpAnchor": "help-m09-s03-truthful-photo"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m09-s03-truthful-photo.",
              "helpAnchor": "help-m09-s03-truthful-photo"
            }
          ]
        },
        {
          "id": "kc-m09-s03-q8",
          "label": "Formative learning evidence",
          "focus": "evidence selection",
          "theoryAnchor": "help-m09-s03-safe-finish",
          "prompt": "A team plates its finished food and needs one clear, truthful photograph without faces, names or private information. Which evidence plan would most directly support a careful explanation?",
          "hint": "Compare each option with the ideas under “Finish and present food safely”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Use the authorised project and recipe sources to connect presentation choices to the intended food and user without inventing additional task requirements.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to finish and present food safely. Revisit help-m09-s03-safe-finish to consolidate the reasoning.",
              "helpAnchor": "help-m09-s03-safe-finish"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m09-s03-safe-finish.",
              "helpAnchor": "help-m09-s03-safe-finish"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Record only a final opinion and leave out the observations, source details or reasoning that support it.",
              "correct": false,
              "feedback": "A final opinion without supporting evidence or reasoning cannot show how the conclusion was reached. Revisit help-m09-s03-safe-finish.",
              "helpAnchor": "help-m09-s03-safe-finish"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m09-s03-safe-finish.",
              "helpAnchor": "help-m09-s03-safe-finish"
            }
          ]
        },
        {
          "id": "kc-m09-s03-q9",
          "label": "Formative learning evidence",
          "focus": "authentic practical/design decision",
          "theoryAnchor": "help-m09-s03-truthful-photo",
          "prompt": "A team plates its finished food and needs one clear, truthful photograph without faces, names or private information. Which learning action would provide the most useful practice before writing the section capstone?",
          "hint": "Compare each option with the ideas under “Take a clear and truthful photograph”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Skip the practice and copy a finished response without applying the idea to the situation.",
              "correct": false,
              "feedback": "The practice should require the student to apply the idea and rehearse their own reasoning before the capstone. Revisit help-m09-s03-truthful-photo.",
              "helpAnchor": "help-m09-s03-truthful-photo"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in presentation, styling and photography. Revisit help-m09-s03-truthful-photo.",
              "helpAnchor": "help-m09-s03-truthful-photo"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Change several important factors at once, then assume which change caused the result.",
              "correct": false,
              "feedback": "Changing several factors together makes it difficult to identify which change influenced the result. Revisit help-m09-s03-truthful-photo.",
              "helpAnchor": "help-m09-s03-truthful-photo"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Have students plan a suitable plate arrangement for an evidenced recipe, then practise framing one truthful final-product photograph without faces, names or private information.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to take a clear and truthful photograph. Revisit help-m09-s03-truthful-photo to consolidate the reasoning.",
              "helpAnchor": "help-m09-s03-truthful-photo"
            }
          ]
        },
        {
          "id": "kc-m09-s03-q10",
          "label": "Formative learning evidence",
          "focus": "careful judgement",
          "theoryAnchor": "help-m09-s03-safe-finish",
          "prompt": "A team plates its finished food and needs one clear, truthful photograph without faces, names or private information. Which final judgement is the most careful, balanced conclusion?",
          "hint": "Compare each option with the ideas under “Take a clear and truthful photograph”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m09-s03-truthful-photo. Review help-m09-s03-safe-finish.",
              "helpAnchor": "help-m09-s03-safe-finish"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in presentation, styling and photography. Revisit help-m09-s03-truthful-photo. Review help-m09-s03-safe-finish.",
              "helpAnchor": "help-m09-s03-safe-finish"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Food-safe handling continues during plating, and presentation or photography should not create unnecessary delays.",
              "correct": true,
              "feedback": "This conclusion uses the section evidence carefully and connects it to “Finish and present food safely”. Revisit help-m09-s03-safe-finish to consolidate the reasoning.",
              "helpAnchor": "help-m09-s03-safe-finish"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Editing a photograph is acceptable if it makes the final food look more impressive.",
              "correct": false,
              "feedback": "The image should represent the product truthfully and should not add, remove or change important food features in a deceptive way. Revisit help-m09-s03-truthful-photo. Review help-m09-s03-safe-finish.",
              "helpAnchor": "help-m09-s03-safe-finish"
            }
          ]
        }
      ]
    },
    {
      "sectionId": "m10-s01",
      "knowledgeCheckId": "kc-m10-s01",
      "title": "Testing against criteria — knowledge check",
      "label": "Formative learning evidence",
      "theoryAnchors": [
        "help-m10-s01-criterion-evidence",
        "help-m10-s01-reasoned-judgement",
        "help-m10-s01-trade-offs"
      ],
      "sourceIds": [
        "assessment-workbook",
        "course-program"
      ],
      "hintPolicy": "answer-neutral",
      "feedbackTiming": "after check only",
      "questions": [
        {
          "id": "kc-m10-s01-q1",
          "label": "Formative learning evidence",
          "focus": "essential idea",
          "theoryAnchor": "help-m10-s01-criterion-evidence",
          "prompt": "A student evaluates a party-food platter using criteria for safe production, user suitability and presentation. Which statement gives the strongest starting explanation of testing against criteria?",
          "hint": "Compare each option with the ideas under “Match evidence to each criterion”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Evaluation compares evidence with stated criteria rather than simply describing the food.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to match evidence to each criterion. Revisit help-m10-s01-criterion-evidence to consolidate the reasoning.",
              "helpAnchor": "help-m10-s01-criterion-evidence"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Evaluation means describing what the finished food looks and tastes like.",
              "correct": false,
              "feedback": "Description can provide evidence, but evaluation also compares that evidence with a stated criterion and reaches a supported judgement. Revisit help-m10-s01-criterion-evidence.",
              "helpAnchor": "help-m10-s01-criterion-evidence"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "A successful evaluation must show that every criterion was completely met.",
              "correct": false,
              "feedback": "Evaluation can identify partial success and trade-offs when the evidence shows that some aspects worked better than others. Revisit help-m10-s01-criterion-evidence.",
              "helpAnchor": "help-m10-s01-criterion-evidence"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in testing against criteria. Revisit help-m10-s01-criterion-evidence.",
              "helpAnchor": "help-m10-s01-criterion-evidence"
            }
          ]
        },
        {
          "id": "kc-m10-s01-q2",
          "label": "Formative learning evidence",
          "focus": "concept connection",
          "theoryAnchor": "help-m10-s01-reasoned-judgement",
          "prompt": "A student evaluates a party-food platter using criteria for safe production, user suitability and presentation. Which response best connects “Match evidence to each criterion” with “Make a reasoned judgement”?",
          "hint": "Compare each option with the ideas under “Make a reasoned judgement”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Only “Match evidence to each criterion” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m10-s01-reasoned-judgement.",
              "helpAnchor": "help-m10-s01-reasoned-judgement"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m10-s01-reasoned-judgement.",
              "helpAnchor": "help-m10-s01-reasoned-judgement"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Evaluation means describing what the finished food looks and tastes like.",
              "correct": false,
              "feedback": "Description can provide evidence, but evaluation also compares that evidence with a stated criterion and reaches a supported judgement. Revisit help-m10-s01-reasoned-judgement.",
              "helpAnchor": "help-m10-s01-reasoned-judgement"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Relevant evidence can come from observations, measurements, authorised user feedback and production records.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to make a reasoned judgement. Revisit help-m10-s01-reasoned-judgement to consolidate the reasoning.",
              "helpAnchor": "help-m10-s01-reasoned-judgement"
            }
          ]
        },
        {
          "id": "kc-m10-s01-q3",
          "label": "Formative learning evidence",
          "focus": "concept application",
          "theoryAnchor": "help-m10-s01-trade-offs",
          "prompt": "A student evaluates a party-food platter using criteria for safe production, user suitability and presentation. Which response applies the section's third idea, “Recognise trade-offs”, most accurately?",
          "hint": "Compare each option with the ideas under “Recognise trade-offs”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m10-s01-trade-offs.",
              "helpAnchor": "help-m10-s01-trade-offs"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Only “Make a reasoned judgement” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m10-s01-trade-offs.",
              "helpAnchor": "help-m10-s01-trade-offs"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Partial success and trade-offs should be explained when different features of the outcome perform differently.",
              "correct": true,
              "feedback": "This response accurately applies “Recognise trade-offs” to the situation. Revisit help-m10-s01-trade-offs to consolidate the reasoning.",
              "helpAnchor": "help-m10-s01-trade-offs"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "A successful evaluation must show that every criterion was completely met.",
              "correct": false,
              "feedback": "Evaluation can identify partial success and trade-offs when the evidence shows that some aspects worked better than others. Revisit help-m10-s01-trade-offs.",
              "helpAnchor": "help-m10-s01-trade-offs"
            }
          ]
        },
        {
          "id": "kc-m10-s01-q4",
          "label": "Formative learning evidence",
          "focus": "likely misconception",
          "theoryAnchor": "help-m10-s01-criterion-evidence",
          "prompt": "A student makes this claim about testing against criteria: “Evaluation means describing what the finished food looks and tastes like.” Which response corrects the reasoning?",
          "hint": "Compare each option with the ideas under “Match evidence to each criterion”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m10-s01-criterion-evidence.",
              "helpAnchor": "help-m10-s01-criterion-evidence"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Description can provide evidence, but evaluation also compares that evidence with a stated criterion and reaches a supported judgement.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to match evidence to each criterion. Revisit help-m10-s01-criterion-evidence to consolidate the reasoning.",
              "helpAnchor": "help-m10-s01-criterion-evidence"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Evaluation means describing what the finished food looks and tastes like.",
              "correct": false,
              "feedback": "Description can provide evidence, but evaluation also compares that evidence with a stated criterion and reaches a supported judgement. Revisit help-m10-s01-criterion-evidence.",
              "helpAnchor": "help-m10-s01-criterion-evidence"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m10-s01-criterion-evidence.",
              "helpAnchor": "help-m10-s01-criterion-evidence"
            }
          ]
        },
        {
          "id": "kc-m10-s01-q5",
          "label": "Formative learning evidence",
          "focus": "likely misconception",
          "theoryAnchor": "help-m10-s01-reasoned-judgement",
          "prompt": "During this situation — a student evaluates a party-food platter using criteria for safe production, user suitability and presentation. Which response best avoids the misconception that “A successful evaluation must show that every criterion was completely met.”?",
          "hint": "Compare each option with the ideas under “Make a reasoned judgement”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Evaluation can identify partial success and trade-offs when the evidence shows that some aspects worked better than others.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to make a reasoned judgement. Revisit help-m10-s01-reasoned-judgement to consolidate the reasoning.",
              "helpAnchor": "help-m10-s01-reasoned-judgement"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "A successful evaluation must show that every criterion was completely met.",
              "correct": false,
              "feedback": "Evaluation can identify partial success and trade-offs when the evidence shows that some aspects worked better than others. Revisit help-m10-s01-reasoned-judgement.",
              "helpAnchor": "help-m10-s01-reasoned-judgement"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in testing against criteria. Revisit help-m10-s01-reasoned-judgement.",
              "helpAnchor": "help-m10-s01-reasoned-judgement"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Only “Match evidence to each criterion” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m10-s01-reasoned-judgement.",
              "helpAnchor": "help-m10-s01-reasoned-judgement"
            }
          ]
        },
        {
          "id": "kc-m10-s01-q6",
          "label": "Formative learning evidence",
          "focus": "terminology in context",
          "theoryAnchor": "help-m10-s01-criterion-evidence",
          "prompt": "Which option uses the term “criterion” accurately in the context of testing against criteria?",
          "hint": "Compare each option with the ideas under “Match evidence to each criterion”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "criterion is a general word for any food choice a person happens to like.",
              "correct": false,
              "feedback": "criterion has a precise section meaning: A stated feature or condition used to judge how successfully an outcome meets its intended purpose. Revisit help-m10-s01-criterion-evidence.",
              "helpAnchor": "help-m10-s01-criterion-evidence"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "criterion means the same as evidence in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m10-s01-criterion-evidence.",
              "helpAnchor": "help-m10-s01-criterion-evidence"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "The meaning of criterion changes to match whichever answer is most convenient.",
              "correct": false,
              "feedback": "The section gives criterion a precise meaning that should be applied consistently. Revisit help-m10-s01-criterion-evidence.",
              "helpAnchor": "help-m10-s01-criterion-evidence"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "criterion means a stated feature or condition used to judge how successfully an outcome meets its intended purpose.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to match evidence to each criterion. Revisit help-m10-s01-criterion-evidence to consolidate the reasoning.",
              "helpAnchor": "help-m10-s01-criterion-evidence"
            }
          ]
        },
        {
          "id": "kc-m10-s01-q7",
          "label": "Formative learning evidence",
          "focus": "worked-example reasoning",
          "theoryAnchor": "help-m10-s01-trade-offs",
          "prompt": "A student evaluates a party-food platter using criteria for safe production, user suitability and presentation. Which conclusion is best supported by the worked example rather than by a guess?",
          "hint": "Compare each option with the ideas under “Recognise trade-offs”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m10-s01-trade-offs.",
              "helpAnchor": "help-m10-s01-trade-offs"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in testing against criteria. Revisit help-m10-s01-trade-offs.",
              "helpAnchor": "help-m10-s01-trade-offs"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "A strong evaluation explains the degree of success by connecting each judgement to specific evidence rather than relying on description or personal preference.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to recognise trade-offs. Revisit help-m10-s01-trade-offs to consolidate the reasoning.",
              "helpAnchor": "help-m10-s01-trade-offs"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Evaluation means describing what the finished food looks and tastes like.",
              "correct": false,
              "feedback": "Description can provide evidence, but evaluation also compares that evidence with a stated criterion and reaches a supported judgement. Revisit help-m10-s01-trade-offs.",
              "helpAnchor": "help-m10-s01-trade-offs"
            }
          ]
        },
        {
          "id": "kc-m10-s01-q8",
          "label": "Formative learning evidence",
          "focus": "evidence selection",
          "theoryAnchor": "help-m10-s01-reasoned-judgement",
          "prompt": "A student evaluates a party-food platter using criteria for safe production, user suitability and presentation. Which evidence plan would most directly support a careful explanation?",
          "hint": "Compare each option with the ideas under “Make a reasoned judgement”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m10-s01-reasoned-judgement.",
              "helpAnchor": "help-m10-s01-reasoned-judgement"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "For each criterion, identify the most relevant evidence and explain what that evidence shows about success, partial success or a trade-off.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to make a reasoned judgement. Revisit help-m10-s01-reasoned-judgement to consolidate the reasoning.",
              "helpAnchor": "help-m10-s01-reasoned-judgement"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m10-s01-reasoned-judgement.",
              "helpAnchor": "help-m10-s01-reasoned-judgement"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Record only a final opinion and leave out the observations, source details or reasoning that support it.",
              "correct": false,
              "feedback": "A final opinion without supporting evidence or reasoning cannot show how the conclusion was reached. Revisit help-m10-s01-reasoned-judgement.",
              "helpAnchor": "help-m10-s01-reasoned-judgement"
            }
          ]
        },
        {
          "id": "kc-m10-s01-q9",
          "label": "Formative learning evidence",
          "focus": "authentic practical/design decision",
          "theoryAnchor": "help-m10-s01-trade-offs",
          "prompt": "A student evaluates a party-food platter using criteria for safe production, user suitability and presentation. Which learning action would provide the most useful practice before writing the section capstone?",
          "hint": "Compare each option with the ideas under “Recognise trade-offs”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Sort concrete party-food evidence under three student-written practice criteria, then use each group of evidence to form a reasoned judgement.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to recognise trade-offs. Revisit help-m10-s01-trade-offs to consolidate the reasoning.",
              "helpAnchor": "help-m10-s01-trade-offs"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Skip the practice and copy a finished response without applying the idea to the situation.",
              "correct": false,
              "feedback": "The practice should require the student to apply the idea and rehearse their own reasoning before the capstone. Revisit help-m10-s01-trade-offs.",
              "helpAnchor": "help-m10-s01-trade-offs"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in testing against criteria. Revisit help-m10-s01-trade-offs.",
              "helpAnchor": "help-m10-s01-trade-offs"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Change several important factors at once, then assume which change caused the result.",
              "correct": false,
              "feedback": "Changing several factors together makes it difficult to identify which change influenced the result. Revisit help-m10-s01-trade-offs.",
              "helpAnchor": "help-m10-s01-trade-offs"
            }
          ]
        },
        {
          "id": "kc-m10-s01-q10",
          "label": "Formative learning evidence",
          "focus": "careful judgement",
          "theoryAnchor": "help-m10-s01-reasoned-judgement",
          "prompt": "A student evaluates a party-food platter using criteria for safe production, user suitability and presentation. Which final judgement is the most careful, balanced conclusion?",
          "hint": "Compare each option with the ideas under “Recognise trade-offs”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "A successful evaluation must show that every criterion was completely met.",
              "correct": false,
              "feedback": "Evaluation can identify partial success and trade-offs when the evidence shows that some aspects worked better than others. Revisit help-m10-s01-trade-offs. Review help-m10-s01-reasoned-judgement.",
              "helpAnchor": "help-m10-s01-reasoned-judgement"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m10-s01-trade-offs. Review help-m10-s01-reasoned-judgement.",
              "helpAnchor": "help-m10-s01-reasoned-judgement"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in testing against criteria. Revisit help-m10-s01-trade-offs. Review help-m10-s01-reasoned-judgement.",
              "helpAnchor": "help-m10-s01-reasoned-judgement"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "A reasoned judgement explains whether and how strongly the evidence shows that a criterion was met.",
              "correct": true,
              "feedback": "This conclusion uses the section evidence carefully and connects it to “Make a reasoned judgement”. Revisit help-m10-s01-reasoned-judgement to consolidate the reasoning.",
              "helpAnchor": "help-m10-s01-reasoned-judgement"
            }
          ]
        }
      ]
    },
    {
      "sectionId": "m10-s02",
      "knowledgeCheckId": "kc-m10-s02",
      "title": "Evidence, sources and bibliography — knowledge check",
      "label": "Formative learning evidence",
      "theoryAnchors": [
        "help-m10-s02-evidence-types",
        "help-m10-s02-paraphrase-and-credit",
        "help-m10-s02-bibliography-record"
      ],
      "sourceIds": [
        "assessment-workbook",
        "course-program"
      ],
      "hintPolicy": "answer-neutral",
      "feedbackTiming": "after check only",
      "questions": [
        {
          "id": "kc-m10-s02-q1",
          "label": "Formative learning evidence",
          "focus": "essential idea",
          "theoryAnchor": "help-m10-s02-evidence-types",
          "prompt": "A student combines sensory observations, a teacher source and an official webpage in a design explanation. Which statement gives the strongest starting explanation of evidence, sources and bibliography?",
          "hint": "Compare each option with the ideas under “Choose useful evidence and sources”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "If information is on a website, it is automatically reliable and suitable to use.",
              "correct": false,
              "feedback": "A source should be checked for credibility and relevance before its information is used. Revisit help-m10-s02-evidence-types.",
              "helpAnchor": "help-m10-s02-evidence-types"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Having the link to an online image means you have permission to use it.",
              "correct": false,
              "feedback": "A link identifies where an image was found, but permission depends on the image rights or stated conditions of use. Revisit help-m10-s02-evidence-types.",
              "helpAnchor": "help-m10-s02-evidence-types"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in evidence, sources and bibliography. Revisit help-m10-s02-evidence-types.",
              "helpAnchor": "help-m10-s02-evidence-types"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Primary evidence is collected directly by you, while secondary evidence comes from existing sources.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to choose useful evidence and sources. Revisit help-m10-s02-evidence-types to consolidate the reasoning.",
              "helpAnchor": "help-m10-s02-evidence-types"
            }
          ]
        },
        {
          "id": "kc-m10-s02-q2",
          "label": "Formative learning evidence",
          "focus": "concept connection",
          "theoryAnchor": "help-m10-s02-paraphrase-and-credit",
          "prompt": "A student combines sensory observations, a teacher source and an official webpage in a design explanation. Which response best connects “Choose useful evidence and sources” with “Paraphrase, quote briefly and give credit”?",
          "hint": "Compare each option with the ideas under “Paraphrase, quote briefly and give credit”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m10-s02-paraphrase-and-credit.",
              "helpAnchor": "help-m10-s02-paraphrase-and-credit"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "If information is on a website, it is automatically reliable and suitable to use.",
              "correct": false,
              "feedback": "A source should be checked for credibility and relevance before its information is used. Revisit help-m10-s02-paraphrase-and-credit.",
              "helpAnchor": "help-m10-s02-paraphrase-and-credit"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Sources should be credible enough to trust and relevant to the design or production point being explained.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to paraphrase, quote briefly and give credit. Revisit help-m10-s02-paraphrase-and-credit to consolidate the reasoning.",
              "helpAnchor": "help-m10-s02-paraphrase-and-credit"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Only “Choose useful evidence and sources” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m10-s02-paraphrase-and-credit.",
              "helpAnchor": "help-m10-s02-paraphrase-and-credit"
            }
          ]
        },
        {
          "id": "kc-m10-s02-q3",
          "label": "Formative learning evidence",
          "focus": "concept application",
          "theoryAnchor": "help-m10-s02-bibliography-record",
          "prompt": "A student combines sensory observations, a teacher source and an official webpage in a design explanation. Which response applies the section's third idea, “Record details as you research”, most accurately?",
          "hint": "Compare each option with the ideas under “Record details as you research”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Only “Paraphrase, quote briefly and give credit” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m10-s02-bibliography-record.",
              "helpAnchor": "help-m10-s02-bibliography-record"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Record source details during research, check image rights and list the sources you used in a simple bibliography.",
              "correct": true,
              "feedback": "This response accurately applies “Record details as you research” to the situation. Revisit help-m10-s02-bibliography-record to consolidate the reasoning.",
              "helpAnchor": "help-m10-s02-bibliography-record"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Having the link to an online image means you have permission to use it.",
              "correct": false,
              "feedback": "A link identifies where an image was found, but permission depends on the image rights or stated conditions of use. Revisit help-m10-s02-bibliography-record.",
              "helpAnchor": "help-m10-s02-bibliography-record"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m10-s02-bibliography-record.",
              "helpAnchor": "help-m10-s02-bibliography-record"
            }
          ]
        },
        {
          "id": "kc-m10-s02-q4",
          "label": "Formative learning evidence",
          "focus": "likely misconception",
          "theoryAnchor": "help-m10-s02-evidence-types",
          "prompt": "A student makes this claim about evidence, sources and bibliography: “If information is on a website, it is automatically reliable and suitable to use.” Which response corrects the reasoning?",
          "hint": "Compare each option with the ideas under “Choose useful evidence and sources”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "A source should be checked for credibility and relevance before its information is used.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to choose useful evidence and sources. Revisit help-m10-s02-evidence-types to consolidate the reasoning.",
              "helpAnchor": "help-m10-s02-evidence-types"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "If information is on a website, it is automatically reliable and suitable to use.",
              "correct": false,
              "feedback": "A source should be checked for credibility and relevance before its information is used. Revisit help-m10-s02-evidence-types.",
              "helpAnchor": "help-m10-s02-evidence-types"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m10-s02-evidence-types.",
              "helpAnchor": "help-m10-s02-evidence-types"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m10-s02-evidence-types.",
              "helpAnchor": "help-m10-s02-evidence-types"
            }
          ]
        },
        {
          "id": "kc-m10-s02-q5",
          "label": "Formative learning evidence",
          "focus": "likely misconception",
          "theoryAnchor": "help-m10-s02-paraphrase-and-credit",
          "prompt": "During this situation — a student combines sensory observations, a teacher source and an official webpage in a design explanation. Which response best avoids the misconception that “Having the link to an online image means you have permission to use it.”?",
          "hint": "Compare each option with the ideas under “Paraphrase, quote briefly and give credit”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Having the link to an online image means you have permission to use it.",
              "correct": false,
              "feedback": "A link identifies where an image was found, but permission depends on the image rights or stated conditions of use. Revisit help-m10-s02-paraphrase-and-credit.",
              "helpAnchor": "help-m10-s02-paraphrase-and-credit"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in evidence, sources and bibliography. Revisit help-m10-s02-paraphrase-and-credit.",
              "helpAnchor": "help-m10-s02-paraphrase-and-credit"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Only “Choose useful evidence and sources” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m10-s02-paraphrase-and-credit.",
              "helpAnchor": "help-m10-s02-paraphrase-and-credit"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "A link identifies where an image was found, but permission depends on the image rights or stated conditions of use.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to paraphrase, quote briefly and give credit. Revisit help-m10-s02-paraphrase-and-credit to consolidate the reasoning.",
              "helpAnchor": "help-m10-s02-paraphrase-and-credit"
            }
          ]
        },
        {
          "id": "kc-m10-s02-q6",
          "label": "Formative learning evidence",
          "focus": "terminology in context",
          "theoryAnchor": "help-m10-s02-evidence-types",
          "prompt": "Which option uses the term “primary evidence” accurately in the context of evidence, sources and bibliography?",
          "hint": "Compare each option with the ideas under “Choose useful evidence and sources”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "primary evidence means the same as secondary evidence in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m10-s02-evidence-types.",
              "helpAnchor": "help-m10-s02-evidence-types"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "The meaning of primary evidence changes to match whichever answer is most convenient.",
              "correct": false,
              "feedback": "The section gives primary evidence a precise meaning that should be applied consistently. Revisit help-m10-s02-evidence-types.",
              "helpAnchor": "help-m10-s02-evidence-types"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "primary evidence means information you collect directly through your own investigation, observations or practical work.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to choose useful evidence and sources. Revisit help-m10-s02-evidence-types to consolidate the reasoning.",
              "helpAnchor": "help-m10-s02-evidence-types"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "primary evidence is a general word for any food choice a person happens to like.",
              "correct": false,
              "feedback": "primary evidence has a precise section meaning: Information you collect directly through your own investigation, observations or practical work. Revisit help-m10-s02-evidence-types.",
              "helpAnchor": "help-m10-s02-evidence-types"
            }
          ]
        },
        {
          "id": "kc-m10-s02-q7",
          "label": "Formative learning evidence",
          "focus": "worked-example reasoning",
          "theoryAnchor": "help-m10-s02-bibliography-record",
          "prompt": "A student combines sensory observations, a teacher source and an official webpage in a design explanation. Which conclusion is best supported by the worked example rather than by a guess?",
          "hint": "Compare each option with the ideas under “Record details as you research”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in evidence, sources and bibliography. Revisit help-m10-s02-bibliography-record.",
              "helpAnchor": "help-m10-s02-bibliography-record"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Strong design explanations combine appropriate primary and secondary evidence while making it clear where borrowed information came from.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to record details as you research. Revisit help-m10-s02-bibliography-record to consolidate the reasoning.",
              "helpAnchor": "help-m10-s02-bibliography-record"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "If information is on a website, it is automatically reliable and suitable to use.",
              "correct": false,
              "feedback": "A source should be checked for credibility and relevance before its information is used. Revisit help-m10-s02-bibliography-record.",
              "helpAnchor": "help-m10-s02-bibliography-record"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m10-s02-bibliography-record.",
              "helpAnchor": "help-m10-s02-bibliography-record"
            }
          ]
        },
        {
          "id": "kc-m10-s02-q8",
          "label": "Formative learning evidence",
          "focus": "evidence selection",
          "theoryAnchor": "help-m10-s02-paraphrase-and-credit",
          "prompt": "A student combines sensory observations, a teacher source and an official webpage in a design explanation. Which evidence plan would most directly support a careful explanation?",
          "hint": "Compare each option with the ideas under “Paraphrase, quote briefly and give credit”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "For each idea in your design explanation, identify whether the evidence is your own or comes from another source, and record enough information to acknowledge that source clearly.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to paraphrase, quote briefly and give credit. Revisit help-m10-s02-paraphrase-and-credit to consolidate the reasoning.",
              "helpAnchor": "help-m10-s02-paraphrase-and-credit"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m10-s02-paraphrase-and-credit.",
              "helpAnchor": "help-m10-s02-paraphrase-and-credit"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Record only a final opinion and leave out the observations, source details or reasoning that support it.",
              "correct": false,
              "feedback": "A final opinion without supporting evidence or reasoning cannot show how the conclusion was reached. Revisit help-m10-s02-paraphrase-and-credit.",
              "helpAnchor": "help-m10-s02-paraphrase-and-credit"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m10-s02-paraphrase-and-credit.",
              "helpAnchor": "help-m10-s02-paraphrase-and-credit"
            }
          ]
        },
        {
          "id": "kc-m10-s02-q9",
          "label": "Formative learning evidence",
          "focus": "authentic practical/design decision",
          "theoryAnchor": "help-m10-s02-bibliography-record",
          "prompt": "A student combines sensory observations, a teacher source and an official webpage in a design explanation. Which learning action would provide the most useful practice before writing the section capstone?",
          "hint": "Compare each option with the ideas under “Record details as you research”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Skip the practice and copy a finished response without applying the idea to the situation.",
              "correct": false,
              "feedback": "The practice should require the student to apply the idea and rehearse their own reasoning before the capstone. Revisit help-m10-s02-bibliography-record.",
              "helpAnchor": "help-m10-s02-bibliography-record"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in evidence, sources and bibliography. Revisit help-m10-s02-bibliography-record.",
              "helpAnchor": "help-m10-s02-bibliography-record"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Change several important factors at once, then assume which change caused the result.",
              "correct": false,
              "feedback": "Changing several factors together makes it difficult to identify which change influenced the result. Revisit help-m10-s02-bibliography-record.",
              "helpAnchor": "help-m10-s02-bibliography-record"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Sort sample evidence from a Party Task into primary and secondary evidence, then identify which secondary sources are credible and relevant to particular design decisions.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to record details as you research. Revisit help-m10-s02-bibliography-record to consolidate the reasoning.",
              "helpAnchor": "help-m10-s02-bibliography-record"
            }
          ]
        },
        {
          "id": "kc-m10-s02-q10",
          "label": "Formative learning evidence",
          "focus": "careful judgement",
          "theoryAnchor": "help-m10-s02-paraphrase-and-credit",
          "prompt": "A student combines sensory observations, a teacher source and an official webpage in a design explanation. Which final judgement is the most careful, balanced conclusion?",
          "hint": "Compare each option with the ideas under “Record details as you research”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m10-s02-bibliography-record. Review help-m10-s02-paraphrase-and-credit.",
              "helpAnchor": "help-m10-s02-paraphrase-and-credit"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in evidence, sources and bibliography. Revisit help-m10-s02-bibliography-record. Review help-m10-s02-paraphrase-and-credit.",
              "helpAnchor": "help-m10-s02-paraphrase-and-credit"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Paraphrase information in your own words, use only short quotations when necessary and acknowledge borrowed ideas in the text.",
              "correct": true,
              "feedback": "This conclusion uses the section evidence carefully and connects it to “Paraphrase, quote briefly and give credit”. Revisit help-m10-s02-paraphrase-and-credit to consolidate the reasoning.",
              "helpAnchor": "help-m10-s02-paraphrase-and-credit"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Having the link to an online image means you have permission to use it.",
              "correct": false,
              "feedback": "A link identifies where an image was found, but permission depends on the image rights or stated conditions of use. Revisit help-m10-s02-bibliography-record. Review help-m10-s02-paraphrase-and-credit.",
              "helpAnchor": "help-m10-s02-paraphrase-and-credit"
            }
          ]
        }
      ]
    },
    {
      "sectionId": "m10-s03",
      "knowledgeCheckId": "kc-m10-s03",
      "title": "Reflection, improvement and communication — knowledge check",
      "label": "Formative learning evidence",
      "theoryAnchors": [
        "help-m10-s03-reflect-with-evidence",
        "help-m10-s03-specific-improvement",
        "help-m10-s03-audience-and-feedback"
      ],
      "sourceIds": [
        "assessment-workbook",
        "course-program"
      ],
      "hintPolicy": "answer-neutral",
      "feedbackTiming": "after check only",
      "questions": [
        {
          "id": "kc-m10-s03-q1",
          "label": "Formative learning evidence",
          "focus": "essential idea",
          "theoryAnchor": "help-m10-s03-reflect-with-evidence",
          "prompt": "A student reflects on uneven portion sizes and different browning across a finished batch. Which statement gives the strongest starting explanation of reflection, improvement and communication?",
          "hint": "Compare each option with the ideas under “Reflect with evidence”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Any feedback should automatically be followed next time.",
              "correct": false,
              "feedback": "Feedback should be considered critically by checking whether it is relevant, supported and useful for the intended purpose. Revisit help-m10-s03-reflect-with-evidence.",
              "helpAnchor": "help-m10-s03-reflect-with-evidence"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in reflection, improvement and communication. Revisit help-m10-s03-reflect-with-evidence.",
              "helpAnchor": "help-m10-s03-reflect-with-evidence"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Strong reflection moves from what happened to evidence, explanation, judgement and a specific next step.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to reflect with evidence. Revisit help-m10-s03-reflect-with-evidence to consolidate the reasoning.",
              "helpAnchor": "help-m10-s03-reflect-with-evidence"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Reflection means writing a timeline of everything that happened during the practical lesson.",
              "correct": false,
              "feedback": "A strong reflection selects the most relevant events and connects them with evidence, reasoning, judgement and future action. Revisit help-m10-s03-reflect-with-evidence.",
              "helpAnchor": "help-m10-s03-reflect-with-evidence"
            }
          ]
        },
        {
          "id": "kc-m10-s03-q2",
          "label": "Formative learning evidence",
          "focus": "concept connection",
          "theoryAnchor": "help-m10-s03-specific-improvement",
          "prompt": "A student reflects on uneven portion sizes and different browning across a finished batch. Which response best connects “Reflect with evidence” with “Turn reflection into a specific improvement”?",
          "hint": "Compare each option with the ideas under “Turn reflection into a specific improvement”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Reflection means writing a timeline of everything that happened during the practical lesson.",
              "correct": false,
              "feedback": "A strong reflection selects the most relevant events and connects them with evidence, reasoning, judgement and future action. Revisit help-m10-s03-specific-improvement.",
              "helpAnchor": "help-m10-s03-specific-improvement"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Evidence makes a reflection more convincing because it supports claims about what worked or needs improvement.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to turn reflection into a specific improvement. Revisit help-m10-s03-specific-improvement to consolidate the reasoning.",
              "helpAnchor": "help-m10-s03-specific-improvement"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Only “Reflect with evidence” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m10-s03-specific-improvement.",
              "helpAnchor": "help-m10-s03-specific-improvement"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m10-s03-specific-improvement.",
              "helpAnchor": "help-m10-s03-specific-improvement"
            }
          ]
        },
        {
          "id": "kc-m10-s03-q3",
          "label": "Formative learning evidence",
          "focus": "concept application",
          "theoryAnchor": "help-m10-s03-audience-and-feedback",
          "prompt": "A student reflects on uneven portion sizes and different browning across a finished batch. Which response applies the section's third idea, “Communicate for your audience and use feedback critically”, most accurately?",
          "hint": "Compare each option with the ideas under “Communicate for your audience and use feedback critically”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Communication should suit the intended audience, and feedback should be considered for its relevance, evidence and usefulness.",
              "correct": true,
              "feedback": "This response accurately applies “Communicate for your audience and use feedback critically” to the situation. Revisit help-m10-s03-audience-and-feedback to consolidate the reasoning.",
              "helpAnchor": "help-m10-s03-audience-and-feedback"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Any feedback should automatically be followed next time.",
              "correct": false,
              "feedback": "Feedback should be considered critically by checking whether it is relevant, supported and useful for the intended purpose. Revisit help-m10-s03-audience-and-feedback.",
              "helpAnchor": "help-m10-s03-audience-and-feedback"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m10-s03-audience-and-feedback.",
              "helpAnchor": "help-m10-s03-audience-and-feedback"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Only “Turn reflection into a specific improvement” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m10-s03-audience-and-feedback.",
              "helpAnchor": "help-m10-s03-audience-and-feedback"
            }
          ]
        },
        {
          "id": "kc-m10-s03-q4",
          "label": "Formative learning evidence",
          "focus": "likely misconception",
          "theoryAnchor": "help-m10-s03-reflect-with-evidence",
          "prompt": "A student makes this claim about reflection, improvement and communication: “Reflection means writing a timeline of everything that happened during the practical lesson.” Which response corrects the reasoning?",
          "hint": "Compare each option with the ideas under “Reflect with evidence”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Reflection means writing a timeline of everything that happened during the practical lesson.",
              "correct": false,
              "feedback": "A strong reflection selects the most relevant events and connects them with evidence, reasoning, judgement and future action. Revisit help-m10-s03-reflect-with-evidence.",
              "helpAnchor": "help-m10-s03-reflect-with-evidence"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m10-s03-reflect-with-evidence.",
              "helpAnchor": "help-m10-s03-reflect-with-evidence"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m10-s03-reflect-with-evidence.",
              "helpAnchor": "help-m10-s03-reflect-with-evidence"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "A strong reflection selects the most relevant events and connects them with evidence, reasoning, judgement and future action.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to reflect with evidence. Revisit help-m10-s03-reflect-with-evidence to consolidate the reasoning.",
              "helpAnchor": "help-m10-s03-reflect-with-evidence"
            }
          ]
        },
        {
          "id": "kc-m10-s03-q5",
          "label": "Formative learning evidence",
          "focus": "likely misconception",
          "theoryAnchor": "help-m10-s03-specific-improvement",
          "prompt": "During this situation — a student reflects on uneven portion sizes and different browning across a finished batch. Which response best avoids the misconception that “Any feedback should automatically be followed next time.”?",
          "hint": "Compare each option with the ideas under “Turn reflection into a specific improvement”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in reflection, improvement and communication. Revisit help-m10-s03-specific-improvement.",
              "helpAnchor": "help-m10-s03-specific-improvement"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Only “Reflect with evidence” matters; the other evidence and conditions can be ignored.",
              "correct": false,
              "feedback": "The section concepts work together, so ignoring the other evidence or conditions produces an incomplete decision. Revisit help-m10-s03-specific-improvement.",
              "helpAnchor": "help-m10-s03-specific-improvement"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Feedback should be considered critically by checking whether it is relevant, supported and useful for the intended purpose.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to turn reflection into a specific improvement. Revisit help-m10-s03-specific-improvement to consolidate the reasoning.",
              "helpAnchor": "help-m10-s03-specific-improvement"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Any feedback should automatically be followed next time.",
              "correct": false,
              "feedback": "Feedback should be considered critically by checking whether it is relevant, supported and useful for the intended purpose. Revisit help-m10-s03-specific-improvement.",
              "helpAnchor": "help-m10-s03-specific-improvement"
            }
          ]
        },
        {
          "id": "kc-m10-s03-q6",
          "label": "Formative learning evidence",
          "focus": "terminology in context",
          "theoryAnchor": "help-m10-s03-reflect-with-evidence",
          "prompt": "Which option uses the term “reflection” accurately in the context of reflection, improvement and communication?",
          "hint": "Compare each option with the ideas under “Reflect with evidence”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "The meaning of reflection changes to match whichever answer is most convenient.",
              "correct": false,
              "feedback": "The section gives reflection a precise meaning that should be applied consistently. Revisit help-m10-s03-reflect-with-evidence.",
              "helpAnchor": "help-m10-s03-reflect-with-evidence"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "reflection means a reasoned explanation of what happened, what the evidence shows and what can be learned for future action.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to reflect with evidence. Revisit help-m10-s03-reflect-with-evidence to consolidate the reasoning.",
              "helpAnchor": "help-m10-s03-reflect-with-evidence"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "reflection is a general word for any food choice a person happens to like.",
              "correct": false,
              "feedback": "reflection has a precise section meaning: A reasoned explanation of what happened, what the evidence shows and what can be learned for future action. Revisit help-m10-s03-reflect-with-evidence.",
              "helpAnchor": "help-m10-s03-reflect-with-evidence"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "reflection means the same as judgement in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m10-s03-reflect-with-evidence.",
              "helpAnchor": "help-m10-s03-reflect-with-evidence"
            }
          ]
        },
        {
          "id": "kc-m10-s03-q7",
          "label": "Formative learning evidence",
          "focus": "worked-example reasoning",
          "theoryAnchor": "help-m10-s03-audience-and-feedback",
          "prompt": "A student reflects on uneven portion sizes and different browning across a finished batch. Which conclusion is best supported by the worked example rather than by a guess?",
          "hint": "Compare each option with the ideas under “Communicate for your audience and use feedback critically”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Effective reflection connects what happened with evidence, explains its significance, makes a judgement and identifies a realistic improvement for next time.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to communicate for your audience and use feedback critically. Revisit help-m10-s03-audience-and-feedback to consolidate the reasoning.",
              "helpAnchor": "help-m10-s03-audience-and-feedback"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Reflection means writing a timeline of everything that happened during the practical lesson.",
              "correct": false,
              "feedback": "A strong reflection selects the most relevant events and connects them with evidence, reasoning, judgement and future action. Revisit help-m10-s03-audience-and-feedback.",
              "helpAnchor": "help-m10-s03-audience-and-feedback"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m10-s03-audience-and-feedback.",
              "helpAnchor": "help-m10-s03-audience-and-feedback"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in reflection, improvement and communication. Revisit help-m10-s03-audience-and-feedback.",
              "helpAnchor": "help-m10-s03-audience-and-feedback"
            }
          ]
        },
        {
          "id": "kc-m10-s03-q8",
          "label": "Formative learning evidence",
          "focus": "evidence selection",
          "theoryAnchor": "help-m10-s03-specific-improvement",
          "prompt": "A student reflects on uneven portion sizes and different browning across a finished batch. Which evidence plan would most directly support a careful explanation?",
          "hint": "Compare each option with the ideas under “Turn reflection into a specific improvement”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Use the first familiar option without checking the section evidence, because a plausible choice is enough.",
              "correct": false,
              "feedback": "A plausible first choice still needs to be checked against the section concepts and the available evidence. Revisit help-m10-s03-specific-improvement.",
              "helpAnchor": "help-m10-s03-specific-improvement"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Record only a final opinion and leave out the observations, source details or reasoning that support it.",
              "correct": false,
              "feedback": "A final opinion without supporting evidence or reasoning cannot show how the conclusion was reached. Revisit help-m10-s03-specific-improvement.",
              "helpAnchor": "help-m10-s03-specific-improvement"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m10-s03-specific-improvement.",
              "helpAnchor": "help-m10-s03-specific-improvement"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Identify one practical result, the evidence that supports your view of it, why that evidence matters and the specific action you would take next time.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to turn reflection into a specific improvement. Revisit help-m10-s03-specific-improvement to consolidate the reasoning.",
              "helpAnchor": "help-m10-s03-specific-improvement"
            }
          ]
        },
        {
          "id": "kc-m10-s03-q9",
          "label": "Formative learning evidence",
          "focus": "authentic practical/design decision",
          "theoryAnchor": "help-m10-s03-audience-and-feedback",
          "prompt": "A student reflects on uneven portion sizes and different browning across a finished batch. Which learning action would provide the most useful practice before writing the section capstone?",
          "hint": "Compare each option with the ideas under “Communicate for your audience and use feedback critically”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in reflection, improvement and communication. Revisit help-m10-s03-audience-and-feedback.",
              "helpAnchor": "help-m10-s03-audience-and-feedback"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "Change several important factors at once, then assume which change caused the result.",
              "correct": false,
              "feedback": "Changing several factors together makes it difficult to identify which change influenced the result. Revisit help-m10-s03-audience-and-feedback.",
              "helpAnchor": "help-m10-s03-audience-and-feedback"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Use practical evidence from a Party Task to build a reflection sequence that separates description, evidence, explanation, judgement and improvement.",
              "correct": true,
              "feedback": "This response uses the section evidence accurately and connects the decision to communicate for your audience and use feedback critically. Revisit help-m10-s03-audience-and-feedback to consolidate the reasoning.",
              "helpAnchor": "help-m10-s03-audience-and-feedback"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Skip the practice and copy a finished response without applying the idea to the situation.",
              "correct": false,
              "feedback": "The practice should require the student to apply the idea and rehearse their own reasoning before the capstone. Revisit help-m10-s03-audience-and-feedback.",
              "helpAnchor": "help-m10-s03-audience-and-feedback"
            }
          ]
        },
        {
          "id": "kc-m10-s03-q10",
          "label": "Formative learning evidence",
          "focus": "careful judgement",
          "theoryAnchor": "help-m10-s03-specific-improvement",
          "prompt": "A student reflects on uneven portion sizes and different browning across a finished batch. Which final judgement is the most careful, balanced conclusion?",
          "hint": "Compare each option with the ideas under “Communicate for your audience and use feedback critically”. Look for the response that uses evidence and context rather than a shortcut or absolute claim.",
          "options": [
            {
              "id": "a",
              "label": "Formative learning evidence",
              "text": "Decide from personal preference alone and do not connect the choice to the purpose, evidence or user.",
              "correct": false,
              "feedback": "Personal preference may be recorded where relevant, but it cannot replace evidence, purpose and reasoned judgement in reflection, improvement and communication. Revisit help-m10-s03-audience-and-feedback. Review help-m10-s03-specific-improvement.",
              "helpAnchor": "help-m10-s03-specific-improvement"
            },
            {
              "id": "b",
              "label": "Formative learning evidence",
              "text": "An improvement proposes a realistic action for next time, while an excuse does not clearly show how future practice could change.",
              "correct": true,
              "feedback": "This conclusion uses the section evidence carefully and connects it to “Turn reflection into a specific improvement”. Revisit help-m10-s03-specific-improvement to consolidate the reasoning.",
              "helpAnchor": "help-m10-s03-specific-improvement"
            },
            {
              "id": "c",
              "label": "Formative learning evidence",
              "text": "Any feedback should automatically be followed next time.",
              "correct": false,
              "feedback": "Feedback should be considered critically by checking whether it is relevant, supported and useful for the intended purpose. Revisit help-m10-s03-audience-and-feedback. Review help-m10-s03-specific-improvement.",
              "helpAnchor": "help-m10-s03-specific-improvement"
            },
            {
              "id": "d",
              "label": "Formative learning evidence",
              "text": "Treat one observation or example as proof that the same conclusion applies in every situation.",
              "correct": false,
              "feedback": "One example supports a limited conclusion about the evidence available; it does not prove a universal rule. Revisit help-m10-s03-audience-and-feedback. Review help-m10-s03-specific-improvement.",
              "helpAnchor": "help-m10-s03-specific-improvement"
            }
          ]
        }
      ]
    }
  ]
});
