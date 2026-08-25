(function () {
  "use strict";

  window.FOOD_TECH_FOLIO_DATA = Object.freeze({
    courseId: "yr8-food-tech-2026",
    projectId: "party-task",
    schemaVersion: 2,
    textStorageKey: "yr8foodtech2026:party-folio:text:v2",
    imageStorageKey: "yr8foodtech2026:party-folio:images:v2",
    legacyKeys: [
      "yr8foodtech2026:party-folio:v1",
      "yr8foodtech2026:folio:v1",
      "party_task_folio"
    ],
    maxImageBytes: 665600,
    acceptedImageTypes: ["image/jpeg", "image/png", "image/webp"],
    sourceVersion: {
      sourceMap: "source-map-v1.0",
      assessmentWorkbookDigest: "458a1e7a94c0a21eee1346039139360ebca02bce0ea711a32cdfff07505d614b",
      assessmentNoticeDigest: "c924856419a30600895e4f9ea91b2dd851a7dc79e9ab60d6c43c068ac42292e4",
      recipeBookletDigest: "af8bc6f3656a1a76528dccdae586ef6b9070bdeee6343bd29693cd8d7fee80e4"
    },
    orientation: {
      purpose: "This folio keeps selected evidence of your Party Task decisions, planning, production, testing and evaluation. It does not copy every lesson response or quiz.",
      saving: "Writing and imported images save only in this browser on this device until you download a backup or export.",
      assessmentBoundary: "The Party Task notification is awaiting teacher reissue for the 2025 syllabus. This folio is a source-grounded working record, not proof of submission or teacher-observed practical performance.",
      imagePrivacy: "Import only teacher-authorised images of your own food or work. Avoid faces, names, timetables, screens and identifying background details. Accepted images stay browser-local and are included in folio backup and self-contained export files."
    },
    stages: [
      {
        id: "stage-01-brief",
        number: 1,
        title: "Understand the need and brief",
        action: "Summarise the issued Party Task in your own words.",
        why: "A clear brief keeps later decisions focused on the actual user, purpose and constraints.",
        evidence: "A short need statement, intended user or occasion, and only the constraints confirmed by the teacher.",
        prompt: "What food-design problem are you solving, for whom, and what confirmed limits must your solution respect?",
        support: ["The purpose of my party-food solution is…", "The intended user or occasion is…", "The confirmed constraints are…"],
        source: "Party Task identity and teacher-issued brief. Final practical product, dietary requirements, budget and local conditions are Teacher to confirm.",
        activityIds: ["act-22-user-constraint-sort"],
        image: false,
        fields: [
          { id: "need", label: "Need and purpose", placeholder: "Explain the problem or purpose in 2–4 clear sentences.", minWords: 20 },
          { id: "user", label: "Intended user or occasion", placeholder: "Describe who the solution is for and what matters to them.", minWords: 15 },
          { id: "constraints", label: "Confirmed constraints only", placeholder: "List only details the teacher or issued brief has confirmed. Write Teacher to confirm beside anything unresolved.", minWords: 10 }
        ]
      },
      {
        id: "stage-02-criteria",
        number: 2,
        title: "Draft success criteria",
        action: "Turn the confirmed brief into a small set of observable practice criteria.",
        why: "Criteria give you something real to test instead of relying on whether the result simply feels good.",
        evidence: "Three or four draft criteria covering user need, sensory quality, planning or cost, and safe production evidence where relevant.",
        prompt: "What evidence would show that your solution meets the confirmed brief?",
        support: ["The solution should…", "I can test this by…", "Evidence will include…"],
        source: "Party Task design intent. These are student practice criteria; formal marking criteria remain Teacher to confirm.",
        activityIds: ["act-24-criteria-quality-check", "act-28-criteria-test-match"],
        image: false,
        fields: [
          { id: "criteria", label: "Three or four observable criteria", placeholder: "1. …\n2. …\n3. …\n4. …", minWords: 25 },
          { id: "testPlan", label: "How each criterion could be tested", placeholder: "Name a count, costing record, sensory observation, photograph or other relevant evidence.", minWords: 20 }
        ]
      },
      {
        id: "stage-03-research-ideas",
        number: 3,
        title: "Research and compare ideas",
        action: "Record useful research and compare at least two genuinely different menu or presentation ideas.",
        why: "Comparing alternatives makes the final choice defensible and helps expose problems early.",
        evidence: "Brief source notes, two different ideas, and a comparison linked to user needs and constraints.",
        prompt: "What did your sources teach you, and how do your two ideas respond differently to the brief?",
        support: ["A useful source showed…", "Idea A responds by…", "Idea B differs because…", "The important trade-off is…"],
        source: "Party Task invitation, menu, costing, food-choice and bibliography evidence intent. Do not reuse unclear-rights example images from the source workbook.",
        activityIds: ["act-12-media-claim-check", "act-23-costing-check"],
        image: true,
        imageLabel: "Optional image of your own sketch or idea comparison",
        fields: [
          { id: "research", label: "Useful research findings and source notes", placeholder: "Record findings in your own words and enough source details to locate them again.", minWords: 30 },
          { id: "ideaA", label: "Idea A", placeholder: "Describe the first menu or presentation direction.", minWords: 20 },
          { id: "ideaB", label: "Idea B", placeholder: "Describe a genuinely different direction.", minWords: 20 },
          { id: "comparison", label: "Comparison and trade-off", placeholder: "Compare the ideas using the need, constraints and draft criteria.", minWords: 30 }
        ]
      },
      {
        id: "stage-04-chosen-plan",
        number: 4,
        title: "Choose and plan the solution",
        action: "Justify the chosen direction and build a traceable menu, recipe, quantity and costing plan.",
        why: "A clear plan links the design decision to what must be ordered, prepared and checked.",
        evidence: "Chosen idea and reason, teacher-confirmed recipe choice, quantities or scaling, costing source and plan.",
        prompt: "Why is this direction the strongest fit, and what calculations or preparation decisions make it workable?",
        support: ["I selected… because…", "The strongest evidence is…", "The required yield is Teacher to confirm / confirmed as…", "My costing source is…"],
        source: "INTRO FOOD TECH RECIPE BOOKLET, Party recipes and Food Conversion Worksheet. Recipe choice, guest number, budget, substitutions and purchasing arrangements are Teacher to confirm.",
        activityIds: ["act-06-conversion-retrieval", "act-23-costing-check", "act-25-recipe-equipment-plan"],
        image: true,
        imageLabel: "Optional image of your own annotated menu or plan",
        fields: [
          { id: "choice", label: "Chosen direction and reason", placeholder: "State the choice and compare it with the alternative using evidence.", minWords: 35 },
          { id: "recipeScale", label: "Recipe, yield and scaling record", placeholder: "Record the confirmed recipe, original yield, required yield and scaling method. Use Teacher to confirm where needed.", minWords: 25 },
          { id: "costing", label: "Cost plan and source", placeholder: "Summarise quantities, current price source, line costs and total. Record the confirmed budget separately.", minWords: 25 },
          { id: "equipment", label: "Equipment and preparation decisions", placeholder: "List purposeful equipment and any teacher-confirmed preparation needs.", minWords: 15 }
        ]
      },
      {
        id: "stage-05-safe-readiness",
        number: 5,
        title: "Show safe-making readiness",
        action: "Explain relevant hazards, confirmed controls and one safety decision before production.",
        why: "Planning supports safe action, but only the teacher can confirm classroom readiness and observe practical performance.",
        evidence: "A source-linked hazard and control record plus a note of the teacher check or instruction received.",
        prompt: "What could cause harm or contamination, what confirmed control applies, and what will you do if conditions differ from the plan?",
        support: ["The hazard is…", "The confirmed control is…", "Before starting, I will ask the teacher to confirm…", "If conditions change, I will stop and…"],
        source: "Personal hygiene, washing up, cross-contamination and Party Task safety evidence. Local board colours, chemicals, appliance use, allergies and kitchen controls are Teacher to confirm.",
        activityIds: ["act-02-hazard-control-match", "act-07-contamination-pathway", "act-09-allergen-communication"],
        image: false,
        fields: [
          { id: "hazards", label: "Hazards and confirmed controls", placeholder: "Use a clear hazard → risk → control structure. Do not invent local rules.", minWords: 35 },
          { id: "teacherCheck", label: "Teacher check or instruction record", placeholder: "Record what was confirmed and when. This is your note, not proof of teacher-observed competence.", minWords: 10 },
          { id: "decision", label: "One applied safety or hygiene decision", placeholder: "Explain why the decision matters for this food and process.", minWords: 25 }
        ]
      },
      {
        id: "stage-06-production",
        number: 6,
        title: "Record production checkpoints",
        action: "Keep a concise workflow record and explain one problem, decision or approved change.",
        why: "Purposeful checkpoints show how the plan became a product without turning the folio into a minute-by-minute diary.",
        evidence: "Workflow or role record, one process image with caption, and one problem/change explanation.",
        prompt: "What happened at the important checkpoints, and how did evidence lead to a practical change?",
        support: ["The key checkpoint was…", "The evidence showed…", "We changed… after checking with…", "The result of the change was…"],
        source: "Party Task workflow-plan intent and recipe sources. Actual lesson time, pairings and teacher-controlled production conditions are Teacher to confirm.",
        activityIds: ["act-26-workflow-sequence", "act-27-photo-evidence-choice"],
        image: true,
        imageLabel: "Optional teacher-authorised process image",
        fields: [
          { id: "workflow", label: "Workflow and responsibilities", placeholder: "Summarise the important sequence, responsibilities and checks.", minWords: 30 },
          { id: "checkpoint", label: "Problem, decision or approved change", placeholder: "State the evidence, cause or reason, action and result.", minWords: 40 },
          { id: "caption", label: "Process-image caption", placeholder: "What does this image prove? Do not include names or identify other students.", minWords: 12 }
        ]
      },
      {
        id: "stage-07-testing",
        number: 7,
        title: "Test the result",
        action: "Use sensory and other relevant evidence to judge the result against the draft criteria.",
        why: "A criterion-by-criterion test produces a fairer evaluation than a vague statement about liking.",
        evidence: "Specific sensory observations, criterion judgements and one quality or workflow issue linked to evidence.",
        prompt: "Which criteria were met, partly met or not yet met, and what evidence supports each judgement?",
        support: ["Criterion… was met / partly met / not yet met because…", "The sensory evidence was…", "The photograph or count shows…", "A limitation of this test is…"],
        source: "Sensory Evaluations source and Party Task evaluation intent. Formal criteria remain Teacher to confirm.",
        activityIds: ["act-17-descriptor-sort", "act-18-sensory-improvement", "act-28-criteria-test-match"],
        image: true,
        imageLabel: "Optional teacher-authorised final product or comparison image",
        fields: [
          { id: "sensory", label: "Sensory evidence", placeholder: "Use precise appearance, aroma, texture, flavour or sound descriptors as relevant.", minWords: 35 },
          { id: "judgement", label: "Criteria judgements", placeholder: "Work through each draft criterion and cite the relevant evidence.", minWords: 45 },
          { id: "limitation", label: "Test limitation or uncertainty", placeholder: "Identify one factor that limits the strength of your conclusion.", minWords: 15 },
          { id: "caption", label: "Final/comparison image caption", placeholder: "Explain what the image proves and which criterion it relates to.", minWords: 12 }
        ]
      },
      {
        id: "stage-08-evaluation",
        number: 8,
        title: "Evaluate and communicate",
        action: "Make an overall evidence-based judgement, name one realistic improvement and complete the source record.",
        why: "The final evaluation shows what was learned and what should change next time.",
        evidence: "Overall judgement, best evidence, realistic improvement, final communication note and bibliography.",
        prompt: "How well did the solution meet the confirmed brief, what is your strongest evidence, and what would you improve next time?",
        support: ["Overall, the solution…", "The strongest evidence is…", "A realistic improvement is… because…", "My sources include…"],
        source: "Party Task evaluation, invitation/communication and bibliography evidence intent. Submission method and formal marking criteria are Teacher to confirm.",
        activityIds: ["act-29-source-record-sequence", "act-30-reflection-improvement"],
        image: true,
        imageLabel: "Optional final communication or product image",
        fields: [
          { id: "evaluation", label: "Overall evaluation against the brief", placeholder: "Make a judgement and support it with the strongest evidence from earlier stages.", minWords: 55 },
          { id: "improvement", label: "One realistic improvement", placeholder: "State the change, why it matters and how you would test it.", minWords: 30 },
          { id: "communication", label: "Final communication note", placeholder: "Explain how your invitation, presentation or final message suits the intended audience. Use only teacher-confirmed requirements.", minWords: 20 },
          { id: "bibliography", label: "Bibliography", placeholder: "List the author/organisation, title, date and link or publication details for every source used.", minWords: 15 },
          { id: "caption", label: "Final image caption", placeholder: "What does the image prove about the final result or communication?", minWords: 12 }
        ]
      }
    ]
  });
})();
