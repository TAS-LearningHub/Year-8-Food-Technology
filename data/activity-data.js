(function () {
  "use strict";

  const activities = [
    {
      id: "act-01-handwashing-sequence",
      module: 1,
      section: "Personal hygiene and handwashing",
      title: "Build the handwashing routine",
      mechanic: "sequence",
      placement: "After the section explanation and before students justify a hygiene decision.",
      practises: "Putting a complete handwashing routine in a logical order.",
      instructions: "Move the cards until the routine runs from preparation to clean, dry hands.",
      printable: "Number the six cards from 1 to 6, then explain why drying is part of the routine.",
      source: "Personal Hygiene teacher source; current official food-safety guidance controls technical wording.",
      items: [
        { id: "wet", text: "Wet hands with clean running water." },
        { id: "soap", text: "Apply soap." },
        { id: "rub", text: "Rub all hand surfaces thoroughly, including between fingers and around nails." },
        { id: "rinse", text: "Rinse away the soap under clean running water." },
        { id: "dry", text: "Dry hands thoroughly using the approved method." },
        { id: "ready", text: "Return to food preparation without touching an unclean surface." }
      ],
      startOrder: ["rub", "wet", "ready", "soap", "dry", "rinse"],
      correctOrder: ["wet", "soap", "rub", "rinse", "dry", "ready"],
      success: "The routine is complete and in a safe order.",
      review: "Look for the flow: wet, soap, rub, rinse, dry, then return without recontaminating hands."
    },
    {
      id: "act-02-hazard-control-match",
      module: 1,
      section: "Kitchen hazards and safe routines",
      title: "Match each hazard to an immediate response",
      mechanic: "match",
      placement: "After hazard spotting and before a practical-readiness discussion.",
      practises: "Recognising a hazard and choosing a proportionate first response.",
      instructions: "Choose the best immediate response for each classroom-kitchen situation.",
      printable: "Draw a line from each hazard to its response. Add one local rule after your teacher confirms it.",
      source: "What is WRONG with this Kitchen teaching intent; local kitchen procedures remain Teacher to confirm.",
      choices: ["Stop and alert the teacher", "Wipe it up using the approved routine", "Turn the handle away from the bench edge", "Keep the area clear and walk"],
      items: [
        { id: "spill", prompt: "Liquid is spilled on the floor.", answer: "Wipe it up using the approved routine", hint: "Prevent a slip while following the classroom clean-up routine." },
        { id: "pan", prompt: "A pan handle projects over the edge of a bench.", answer: "Turn the handle away from the bench edge", hint: "Reduce the chance of a knock or hot spill." },
        { id: "fault", prompt: "An appliance has a damaged cord.", answer: "Stop and alert the teacher", hint: "Do not use or attempt to repair damaged electrical equipment." },
        { id: "bag", prompt: "Bags are blocking a walkway.", answer: "Keep the area clear and walk", hint: "Remove trip hazards and move calmly." }
      ],
      success: "Each response deals with the immediate risk without inventing a local procedure.",
      review: "Choose the action that first prevents contact with the hazard; ask the teacher where a local procedure controls the next step."
    },
    {
      id: "act-03-clean-sanitise-sort",
      module: 1,
      section: "Washing up, cleaning and sanitising",
      title: "Clean, sanitise or store?",
      mechanic: "classify",
      placement: "After the washing-up sequence and before students explain why each step matters.",
      practises: "Distinguishing removal of soil, reduction of microorganisms and safe storage.",
      instructions: "Classify the main purpose of each action.",
      printable: "Write C, S or ST beside each action, then annotate the difference between cleaning and sanitising.",
      source: "W.S Washing up source; local chemicals, concentrations and dishwasher directions remain Teacher to confirm.",
      choices: ["Cleaning", "Sanitising", "Drying or storing"],
      items: [
        { id: "scrape", prompt: "Remove food scraps and wash away visible grease.", answer: "Cleaning", hint: "This action removes visible food and dirt." },
        { id: "approved", prompt: "Use the teacher-approved sanitising step on a food-contact surface.", answer: "Sanitising", hint: "This step follows cleaning and reduces microorganisms." },
        { id: "air", prompt: "Allow clean equipment to air-dry in the approved place.", answer: "Drying or storing", hint: "This protects clean equipment after washing." },
        { id: "shelf", prompt: "Return dry equipment to its labelled location.", answer: "Drying or storing", hint: "The equipment is already clean; this step keeps it ready for use." }
      ],
      success: "You separated the purposes of cleaning, sanitising and protected storage.",
      review: "Cleaning removes soil first. Sanitising follows on a clean surface. Drying and storage protect the result."
    },
    {
      id: "act-04-recipe-anatomy-label",
      module: 2,
      section: "Reading recipes and cooking terms",
      title: "Label the parts of a recipe",
      mechanic: "label",
      placement: "After reading a teacher-issued recipe and before planning a practical.",
      practises: "Finding the information needed to organise a recipe.",
      instructions: "Match each recipe feature to the question it answers.",
      printable: "Annotate a printed recipe with the five labels used here.",
      source: "INTRO FOOD TECH RECIPE BOOKLET and food terminology source.",
      choices: ["Yield", "Ingredients", "Method", "Equipment cue", "Time or temperature"],
      items: [
        { id: "serves", prompt: "How many portions will the recipe make?", answer: "Yield", hint: "Look for serves, makes or yield." },
        { id: "amounts", prompt: "What foods and measured amounts are needed?", answer: "Ingredients", hint: "This is usually a list before the steps." },
        { id: "steps", prompt: "What must happen, and in what order?", answer: "Method", hint: "Action verbs organise the production sequence." },
        { id: "oven", prompt: "How hot and how long?", answer: "Time or temperature", hint: "These details control cooking conditions." },
        { id: "tin", prompt: "Which tool or container is named in a step?", answer: "Equipment cue", hint: "Recipes often reveal equipment through verbs and container names." }
      ],
      success: "You can find the information that turns a recipe into an organised plan.",
      review: "Use the headings and action words: yield, ingredients, method, equipment cues, and time or temperature."
    },
    {
      id: "act-05-equipment-choice",
      module: 2,
      section: "Selecting equipment and techniques",
      title: "Choose equipment for the job",
      mechanic: "scenario",
      placement: "After equipment vocabulary and before the practical equipment list.",
      practises: "Selecting equipment by function rather than habit.",
      instructions: "Choose the most suitable item for each straightforward job. Follow local teacher directions during practical work.",
      printable: "Circle one choice and write the function that makes it suitable.",
      source: "Equipment descriptions and terms source; local equipment limits remain Teacher to confirm.",
      items: [
        { id: "dry", prompt: "Combine flour and other dry ingredients evenly.", choices: ["Mixing bowl and spoon", "Peeler", "Colander", "Rolling pin"], answer: "Mixing bowl and spoon", hint: "Choose equipment that contains the ingredients and allows even mixing." },
        { id: "drain", prompt: "Drain water from cooked pasta.", choices: ["Colander", "Measuring jug", "Pastry brush", "Whisk"], answer: "Colander", hint: "Look for holes that release liquid while holding the food." },
        { id: "volume", prompt: "Measure 250 mL of milk.", choices: ["Metric measuring jug", "Kitchen scales", "Spatula", "Baking tray"], answer: "Metric measuring jug", hint: "The quantity is a liquid volume." },
        { id: "mass", prompt: "Measure 150 g of flour accurately.", choices: ["Kitchen scales", "Metric measuring jug", "Tongs", "Sieve"], answer: "Kitchen scales", hint: "Grams are a measure of mass." }
      ],
      success: "Your choices match the function and measurement type.",
      review: "Ask what the equipment must do, then choose the item designed for that purpose."
    },
    {
      id: "act-06-conversion-retrieval",
      module: 2,
      section: "Measuring, converting and scaling",
      title: "Metric conversion quick check",
      mechanic: "retrieve",
      placement: "After a worked conversion and before recipe scaling.",
      practises: "Retrieving common metric relationships accurately.",
      instructions: "Type the number only. You may use a conversion chart before checking.",
      printable: "Complete the four conversions, showing one multiplication or division step.",
      source: "Food Conversion Worksheet.",
      items: [
        { id: "lml", prompt: "1 L = ___ mL", answers: ["1000", "1,000"], hint: "One litre contains one thousand millilitres." },
        { id: "kg", prompt: "1 kg = ___ g", answers: ["1000", "1,000"], hint: "One kilogram contains one thousand grams." },
        { id: "half", prompt: "0.5 L = ___ mL", answers: ["500"], hint: "Find half of one litre." },
        { id: "quarter", prompt: "250 g = ___ kg", answers: ["0.25", ".25", "1/4", "¼"], hint: "Divide grams by 1000." }
      ],
      success: "The metric relationships are accurate.",
      review: "Use 1000 mL = 1 L and 1000 g = 1 kg, then decide whether to multiply or divide."
    },
    {
      id: "act-07-contamination-pathway",
      module: 3,
      section: "Cross-contamination pathways",
      title: "Trace the contamination pathway",
      mechanic: "sequence",
      placement: "After the pathway diagram and before students propose controls.",
      practises: "Recognising how microorganisms can move from raw food to ready-to-eat food.",
      instructions: "Order the events from the first unsafe contact to the final exposure.",
      printable: "Draw arrows between the events and mark where the chain could be broken.",
      source: "Preventing cross-contamination source; exact chopping-board colours remain Teacher to confirm.",
      items: [
        { id: "raw", text: "Raw food contacts a preparation surface." },
        { id: "unclean", text: "The surface or utensil is not cleaned using the approved routine." },
        { id: "ready", text: "Ready-to-eat food contacts the same surface or utensil." },
        { id: "transfer", text: "Microorganisms are transferred to the ready-to-eat food." },
        { id: "eat", text: "The food is eaten without a further control step." }
      ],
      startOrder: ["eat", "raw", "transfer", "unclean", "ready"],
      correctOrder: ["raw", "unclean", "ready", "transfer", "eat"],
      success: "You traced the pathway from source to exposure.",
      review: "Follow the contact chain and identify the point where separation or approved cleaning would break it."
    },
    {
      id: "act-08-temperature-storage-decisions",
      module: 3,
      section: "Temperature control and storage",
      title: "Cold storage decisions",
      mechanic: "scenario",
      placement: "After official temperature guidance and before a storage plan.",
      practises: "Applying verified cold-storage and separation principles.",
      instructions: "Choose the safest response. School procedures and teacher directions still apply.",
      printable: "Circle the safest option and underline the evidence used.",
      source: "Party Task safety evidence; current NSW Food Authority and FSANZ guidance.",
      items: [
        { id: "fridge", prompt: "A fridge display reads above 5°C before ingredients are put away.", choices: ["Tell the teacher and follow the approved response", "Put everything away and ignore it", "Leave food on the bench", "Guess that the display is wrong"], answer: "Tell the teacher and follow the approved response", hint: "A student should not invent a repair or ignore a temperature concern." },
        { id: "rawlow", prompt: "Raw meat and ready-to-eat food must share a refrigerator.", choices: ["Keep raw meat contained below ready-to-eat food", "Place raw meat above uncovered ready-to-eat food", "Mix both in one open tray", "Choose any shelf"], answer: "Keep raw meat contained below ready-to-eat food", hint: "Contain drips and keep raw food separate." },
        { id: "label", prompt: "Two stored foods look alike but only one has a clear label and date.", choices: ["Use the labelled item and ask the teacher about the other", "Taste both to identify them", "Use the unlabelled item first", "Combine them"], answer: "Use the labelled item and ask the teacher about the other", hint: "Identification and traceability matter." }
      ],
      success: "You used temperature, separation and identification evidence.",
      review: "Keep cold food at 5°C or colder, separate raw from ready-to-eat food, and never guess about an unlabelled item."
    },
    {
      id: "act-09-allergen-communication",
      module: 3,
      section: "Allergens and safe food choices",
      title: "Allergen-safe communication",
      mechanic: "checklist",
      placement: "After allergen awareness and before choosing or adapting a recipe.",
      practises: "Selecting actions that support accurate allergen communication.",
      instructions: "Select every action that belongs in a responsible classroom response.",
      printable: "Tick the safe actions and explain why guessing is unsafe.",
      source: "Official allergen guidance; student-specific allergies, substitutions and school process remain Teacher to confirm.",
      prompt: "A class member reports a food allergy. Which actions are appropriate?",
      items: [
        { id: "tell", text: "Tell the teacher before ingredients or equipment are used.", correct: true, hint: "The teacher controls the classroom response." },
        { id: "label", text: "Check the complete ingredient label each time.", correct: true, hint: "Ingredients and warnings can change." },
        { id: "guess", text: "Guess that a small amount will be harmless.", correct: false, hint: "Never guess about an allergy." },
        { id: "separate", text: "Follow the confirmed separation and cleaning plan.", correct: true, hint: "Use the plan confirmed for this class and student." },
        { id: "remove", text: "Remove a visible ingredient and assume the meal is safe.", correct: false, hint: "Cross-contact and hidden ingredients may remain." }
      ],
      success: "You selected communication, label checking and the confirmed control plan.",
      review: "Tell the teacher, check complete labels, use the confirmed plan and never rely on guessing or simply removing a food."
    },
    {
      id: "act-10-nutrient-function-match",
      module: 4,
      section: "Six essential nutrients",
      title: "Match nutrients and key roles",
      mechanic: "match",
      placement: "After the six-nutrient overview and before analysing a meal.",
      practises: "Connecting each nutrient group with a clear main role.",
      instructions: "Choose the best broad role for each nutrient. Foods can contain more than one nutrient.",
      printable: "Match the pairs, then add one food source from the class resource.",
      source: "Nutrients and their functions teacher source, checked against current Australian guidance.",
      choices: ["Main source of energy", "Growth and repair", "Concentrated energy and body functions", "Support many body processes", "Body structure and processes", "Hydration and transport"],
      items: [
        { id: "carb", prompt: "Carbohydrate", answer: "Main source of energy", hint: "Think of the body's readily available fuel." },
        { id: "protein", prompt: "Protein", answer: "Growth and repair", hint: "Think about body tissues." },
        { id: "fat", prompt: "Fat", answer: "Concentrated energy and body functions", hint: "Fat has several roles and is energy-dense." },
        { id: "vit", prompt: "Vitamins", answer: "Support many body processes", hint: "Different vitamins have different regulatory roles." },
        { id: "min", prompt: "Minerals", answer: "Body structure and processes", hint: "Examples include roles in bones, blood and fluid balance." },
        { id: "water", prompt: "Water", answer: "Hydration and transport", hint: "Water supports temperature control and movement of substances." }
      ],
      success: "You matched all six nutrients with useful broad roles.",
      review: "Return to the six-nutrient table and distinguish fuel, growth, regulation, structure and hydration."
    },
    {
      id: "act-11-food-group-menu-sort",
      module: 4,
      section: "Food groups and balanced choices",
      title: "Sort foods by Australian Guide group",
      mechanic: "classify",
      placement: "After the food-group explanation and before reviewing a party menu.",
      practises: "Using the five food groups as an analysis tool.",
      instructions: "Classify each example by its main Australian Guide to Healthy Eating group.",
      printable: "Place each food in a five-column table, then identify which groups need more evidence in a draft menu.",
      source: "Current Australian dietary guidance.",
      choices: ["Vegetables and legumes/beans", "Fruit", "Grain foods", "Lean meats and alternatives", "Milk, yoghurt, cheese and alternatives"],
      items: [
        { id: "carrot", prompt: "Carrot sticks", answer: "Vegetables and legumes/beans", hint: "This is a vegetable." },
        { id: "apple", prompt: "Apple slices", answer: "Fruit", hint: "This is a whole fruit." },
        { id: "bread", prompt: "Wholegrain bread", answer: "Grain foods", hint: "Bread belongs to the grain-food group." },
        { id: "chickpea", prompt: "Chickpeas", answer: "Lean meats and alternatives", hint: "Legumes can appear in two groups; here they are acting as a protein-rich alternative." },
        { id: "yoghurt", prompt: "Plain yoghurt", answer: "Milk, yoghurt, cheese and alternatives", hint: "The group name includes yoghurt." }
      ],
      success: "You used the five groups to classify common menu ingredients.",
      review: "Use the official group names. Some foods, such as legumes, can serve more than one role depending on the meal."
    },
    {
      id: "act-12-media-claim-check",
      module: 4,
      section: "Added sugar and informed media choices",
      title: "Claim, evidence or opinion?",
      mechanic: "classify",
      placement: "After discussing added sugar and before responding to a media clip or article.",
      practises: "Separating a claim from evidence and personal reaction.",
      instructions: "Classify each statement by what it is doing.",
      printable: "Label C, E or O, then write one question you would ask about the source.",
      source: "That Sugar Film worksheet question intent only; the commercial film is not copied or embedded.",
      choices: ["Claim", "Evidence", "Opinion or reaction"],
      items: [
        { id: "claim", prompt: "This drink contains more added sugar than students expect.", answer: "Claim", hint: "It is an assertion that needs support." },
        { id: "evidence", prompt: "The ingredient list and nutrition information panel were recorded from the package.", answer: "Evidence", hint: "This identifies observable source information." },
        { id: "opinion", prompt: "I think the advertising is annoying.", answer: "Opinion or reaction", hint: "This describes a personal response." },
        { id: "question", prompt: "A comparison table shows serving size and sugars per 100 mL for three products.", answer: "Evidence", hint: "A consistent comparison can support a judgement." }
      ],
      success: "You separated assertions, support and personal reaction.",
      review: "A claim says something is true; evidence supports or challenges it; an opinion describes a response."
    },
    {
      id: "act-13-reasons-for-cooking",
      module: 5,
      section: "Reasons for cooking",
      title: "Reason for cooking matcher",
      mechanic: "match",
      placement: "After the reasons-for-cooking explanation and before analysing a recipe technique.",
      practises: "Linking a cooking action to its intended change.",
      instructions: "Choose the main reason described in each example.",
      printable: "Match the examples and add one example from a recipe you have used.",
      source: "Course program Weeks 3 and 7; recipe booklet examples.",
      choices: ["Improve safety", "Change texture", "Develop flavour or colour", "Make food easier to digest or eat", "Combine ingredients into a product"],
      items: [
        { id: "safe", prompt: "Cook a food using its verified safe method.", answer: "Improve safety", hint: "The purpose is to control a food-safety hazard." },
        { id: "soft", prompt: "Heat apple pieces until they soften for a filling.", answer: "Change texture", hint: "The noticeable change is softness." },
        { id: "brown", prompt: "Toast a surface to build colour and aroma.", answer: "Develop flavour or colour", hint: "Look for sensory development." },
        { id: "mix", prompt: "Bake a mixed dough so it becomes one stable product.", answer: "Combine ingredients into a product", hint: "Separate ingredients become a new food product." }
      ],
      success: "You connected each technique with a purposeful change.",
      review: "Ask what is meant to change: safety, texture, sensory quality, ease of eating or product structure."
    },
    {
      id: "act-14-food-science-classify",
      module: 5,
      section: "Denaturation, dextrinisation and emulsification",
      title: "Name the food-science change",
      mechanic: "classify",
      placement: "After teacher demonstrations and before students explain an observation.",
      practises: "Distinguishing three named functional-property changes.",
      instructions: "Classify the observation. Use the class investigation conditions rather than inventing temperatures or times.",
      printable: "Write D, DX or E beside each observation and underline the evidence word.",
      source: "Functional properties of food teacher source.",
      choices: ["Denaturation", "Dextrinisation", "Emulsification"],
      items: [
        { id: "egg", prompt: "Protein structure changes and an egg mixture becomes firmer during heating.", answer: "Denaturation", hint: "This change involves protein structure." },
        { id: "toast", prompt: "Dry heat changes starch at a bread surface, creating a browner toasted character.", answer: "Dextrinisation", hint: "This is a dry-heat change involving starch." },
        { id: "dressing", prompt: "Two liquids that normally separate are held together as a mixture with help from an emulsifier.", answer: "Emulsification", hint: "The key evidence is normally separating liquids held together." },
        { id: "whisk", prompt: "A sauce remains evenly mixed rather than forming oil and water layers.", answer: "Emulsification", hint: "Look for a stable mixture of liquids that tend to separate." }
      ],
      success: "You distinguished denaturation, dextrinisation and emulsification from the observation.",
      review: "Protein structure points to denaturation; dry-heated starch points to dextrinisation; normally separating liquids point to emulsification."
    },
    {
      id: "act-15-fair-test-sequence",
      module: 5,
      section: "Fair ingredient tests and observations",
      title: "Plan a fair ingredient test",
      mechanic: "sequence",
      placement: "Before a teacher-approved food-science investigation.",
      practises: "Planning a comparison in which one variable changes and evidence is recorded consistently.",
      instructions: "Order the planning and evidence steps.",
      printable: "Number the steps and identify the independent and controlled variables in the class test.",
      source: "Functional-properties investigation intent; exact ingredients and practical controls remain Teacher to confirm.",
      items: [
        { id: "question", text: "Write the comparison question." },
        { id: "change", text: "Name the one variable that will change." },
        { id: "same", text: "List the conditions that must stay the same." },
        { id: "measure", text: "Choose observable or measurable evidence." },
        { id: "conduct", text: "Follow the teacher-approved method and record results consistently." },
        { id: "conclude", text: "Use the results to answer the original question and note limitations." }
      ],
      startOrder: ["conduct", "question", "conclude", "same", "measure", "change"],
      correctOrder: ["question", "change", "same", "measure", "conduct", "conclude"],
      success: "The test moves from question and variables to evidence and a qualified conclusion.",
      review: "Plan first: question, one change, controlled conditions, evidence, conduct, then conclude."
    },
    {
      id: "act-16-five-senses-label",
      module: 6,
      section: "The five senses",
      title: "Which sense gives the evidence?",
      mechanic: "label",
      placement: "After introducing sensory evaluation and before a tasting record.",
      practises: "Linking observable food qualities to the sense used.",
      instructions: "Choose the sense that provides the clearest evidence for each observation.",
      printable: "Label each observation, then add one safe classroom example for every sense.",
      source: "Sensory Evaluations teacher source.",
      choices: ["Sight", "Smell", "Taste", "Touch", "Hearing"],
      items: [
        { id: "golden", prompt: "The surface is evenly golden.", answer: "Sight", hint: "This is a visible colour judgement." },
        { id: "aroma", prompt: "A toasted aroma is noticeable before tasting.", answer: "Smell", hint: "Aroma is detected through smell." },
        { id: "crisp", prompt: "The food makes a crisp sound when bitten.", answer: "Hearing", hint: "The evidence is a sound." },
        { id: "firm", prompt: "The food feels firm when gently pressed using the approved method.", answer: "Touch", hint: "The evidence comes from physical feel." },
        { id: "sour", prompt: "A sour flavour is detected during an approved tasting.", answer: "Taste", hint: "The evidence is a basic taste/flavour response." }
      ],
      success: "You matched sensory evidence to the sense that detects it.",
      review: "Find the evidence word: colour, aroma, sound, feel or taste."
    },
    {
      id: "act-17-descriptor-sort",
      module: 6,
      section: "Precise sensory language and fair comparisons",
      title: "Replace vague sensory words",
      mechanic: "match",
      placement: "Before students write a sensory comparison.",
      practises: "Replacing vague judgements with specific sensory evidence.",
      instructions: "Choose the most precise revision. This activity does not decide whether a food is good or bad.",
      printable: "Cross out each vague phrase and replace it with a specific descriptor.",
      source: "Sensory Evaluations teacher source and descriptor bank.",
      items: [
        { id: "nice", prompt: "It looked nice.", choices: ["The top was evenly golden with no burnt edges.", "It was good.", "I liked it.", "It was food."], answer: "The top was evenly golden with no burnt edges.", hint: "Use visible colour and consistency evidence." },
        { id: "yummy", prompt: "It tasted yummy.", choices: ["The filling was mildly sweet with a noticeable apple flavour.", "It was the best.", "Everyone liked it.", "It tasted normal."], answer: "The filling was mildly sweet with a noticeable apple flavour.", hint: "Name the intensity and flavour character." },
        { id: "weird", prompt: "The texture was weird.", choices: ["The base was crisp at the edge but soft in the centre.", "It felt bad.", "It was strange.", "I would not eat it."], answer: "The base was crisp at the edge but soft in the centre.", hint: "Describe the physical qualities and location." }
      ],
      success: "Your descriptions are specific enough for another person to understand the evidence.",
      review: "Replace liking words with observable qualities such as colour, intensity, crispness, softness or aroma."
    },
    {
      id: "act-18-sensory-improvement",
      module: 6,
      section: "Using evidence to improve food",
      title: "Evidence to improvement",
      mechanic: "scenario",
      placement: "After a sensory record and before a product evaluation.",
      practises: "Proposing a realistic change linked to sensory evidence.",
      instructions: "Choose the improvement that responds directly to the observation without changing several variables at once.",
      printable: "Draw an arrow from observation to change, then state what would be retested.",
      source: "Sensory Evaluations teacher source; recipe changes require teacher approval.",
      items: [
        { id: "uneven", prompt: "Observation: portions cooked unevenly because their sizes varied.", choices: ["Prepare more even portions next trial", "Add several new ingredients", "Change the whole recipe and oven at once", "Ignore the variation"], answer: "Prepare more even portions next trial", hint: "Change the factor identified by the evidence." },
        { id: "soggy", prompt: "Observation: a base became soggy after wet filling sat on it before cooking.", choices: ["Review the timing and moisture-control step with the teacher", "Use an unrelated garnish", "Make the portion larger", "Call it perfect"], answer: "Review the timing and moisture-control step with the teacher", hint: "The evidence points to moisture and timing." },
        { id: "bland", prompt: "Observation: a class panel consistently described the flavour as weak.", choices: ["Propose one teacher-approved flavour adjustment and retest", "Change texture, size, colour and cooking method together", "Discard the result without recording it", "Assume everyone is wrong"], answer: "Propose one teacher-approved flavour adjustment and retest", hint: "Make one controlled, approved change and collect new evidence." }
      ],
      success: "Each improvement is specific, evidence-linked and testable.",
      review: "State the observation, change one relevant factor with approval, then repeat the comparison."
    },
    {
      id: "act-19-farm-to-plate-sequence",
      module: 7,
      section: "Farm-to-plate systems",
      title: "Build a farm-to-plate chain",
      mechanic: "sequence",
      placement: "After the food-system diagram and before identifying impacts or vulnerabilities.",
      practises: "Following food through a simplified supply system.",
      instructions: "Put the broad stages in order. A real product may have additional or repeated stages.",
      printable: "Number the stages and add one possible input, job or resource at each stage.",
      source: "The importance of Food and Fibre Production in Australia source.",
      items: [
        { id: "produce", text: "Primary production" },
        { id: "process", text: "Processing or preparation" },
        { id: "transport", text: "Transport and distribution" },
        { id: "retail", text: "Retail or food service" },
        { id: "consume", text: "Purchase, preparation and consumption" },
        { id: "recover", text: "Waste prevention, recovery or disposal" }
      ],
      startOrder: ["retail", "produce", "recover", "transport", "consume", "process"],
      correctOrder: ["produce", "process", "transport", "retail", "consume", "recover"],
      success: "The chain follows food from production to use and end-of-life decisions.",
      review: "Start with production, then transformation, movement, access, use and what happens to leftovers or packaging."
    },
    {
      id: "act-20-production-role-match",
      module: 7,
      section: "Australian food and fibre production",
      title: "Who contributes to the food system?",
      mechanic: "match",
      placement: "After the Australian production reading and before a systems explanation.",
      practises: "Connecting roles to their contribution without oversimplifying the system.",
      instructions: "Match each broad role with its clearest contribution.",
      printable: "Match the roles, then add one technology used in a role from an authorised source.",
      source: "The importance of Food and Fibre Production in Australia source.",
      choices: ["Produces food or fibre", "Transforms or packages a product", "Moves products through the supply chain", "Sells or serves food", "Uses evidence to support safe or sustainable decisions"],
      items: [
        { id: "producer", prompt: "Primary producer", answer: "Produces food or fibre", hint: "This is where the raw food or fibre originates." },
        { id: "processor", prompt: "Food processor", answer: "Transforms or packages a product", hint: "This role changes or prepares the raw product." },
        { id: "logistics", prompt: "Transport and logistics worker", answer: "Moves products through the supply chain", hint: "This role connects locations and manages movement." },
        { id: "retailer", prompt: "Retailer or food-service worker", answer: "Sells or serves food", hint: "This role connects the product with consumers." },
        { id: "scientist", prompt: "Food scientist or sustainability specialist", answer: "Uses evidence to support safe or sustainable decisions", hint: "This role investigates and advises using evidence." }
      ],
      success: "You connected several roles in an interdependent Australian food system.",
      review: "Trace what each person mainly contributes: production, transformation, movement, access or evidence."
    },
    {
      id: "act-21-sustainability-decisions",
      module: 7,
      section: "Waste, food security and sustainable choices",
      title: "Reduce avoidable food waste",
      mechanic: "scenario",
      placement: "After sustainability concepts and before applying them to a menu plan.",
      practises: "Choosing feasible waste-reduction actions while considering safety and access.",
      instructions: "Choose the response that prevents waste without compromising food safety.",
      printable: "Circle an action and explain the trade-off it manages.",
      source: "Food and Fibre source and Food Technology 7–10 (2025) sustainability focus.",
      items: [
        { id: "portions", prompt: "A planned party menu produces far more portions than the brief needs.", choices: ["Recalculate portions before ordering", "Order everything and discard leftovers", "Remove all food choices", "Ignore the yield"], answer: "Recalculate portions before ordering", hint: "Planning can prevent excess before it occurs." },
        { id: "useby", prompt: "Two suitable products differ only in date and one must be used sooner.", choices: ["Plan to use the suitable earlier-date product first", "Hide the date", "Open both immediately", "Choose without checking"], answer: "Plan to use the suitable earlier-date product first", hint: "Stock rotation can reduce avoidable waste while respecting date labels." },
        { id: "unsafe", prompt: "A leftover has been stored in a way that the teacher cannot confirm as safe.", choices: ["Ask the teacher and follow the safe disposal decision", "Serve it to avoid waste", "Smell it and guess", "Mix it into a new dish"], answer: "Ask the teacher and follow the safe disposal decision", hint: "Waste reduction never overrides food safety." }
      ],
      success: "You balanced prevention, planning and food-safety boundaries.",
      review: "Prevent excess early, rotate suitable stock, and never use sustainability as a reason to take a food-safety risk."
    },
    {
      id: "act-22-user-constraint-sort",
      module: 8,
      section: "User needs and constraints",
      title: "Need, constraint or preference?",
      mechanic: "classify",
      placement: "After the design brief and before generating menu ideas.",
      practises: "Separating requirements from limits and optional preferences.",
      instructions: "Classify each example. The final Party Task brief and dietary requirements are Teacher to confirm.",
      printable: "Sort the cards into three columns and add one confirmed item from the issued brief.",
      source: "Party Task identity and workbook intent; final brief details remain Teacher to confirm.",
      choices: ["User need", "Constraint", "Preference"],
      items: [
        { id: "safe", prompt: "Food must be safe for the confirmed users.", answer: "User need", hint: "This is necessary for the intended users." },
        { id: "time", prompt: "Production must fit the lesson time confirmed by the teacher.", answer: "Constraint", hint: "This limits what can be produced." },
        { id: "colour", prompt: "The host likes a green colour theme.", answer: "Preference", hint: "This may guide style but is not automatically essential." },
        { id: "budget", prompt: "Ingredients must stay within the confirmed budget.", answer: "Constraint", hint: "A fixed budget limits choices." }
      ],
      success: "You separated essential user needs, limiting constraints and optional preferences.",
      review: "Needs must be met, constraints limit the solution, and preferences can guide choices when the brief allows."
    },
    {
      id: "act-23-costing-check",
      module: 8,
      section: "Menu balance and costing",
      title: "Costing method check",
      mechanic: "sequence",
      placement: "After a worked costing example and before the Party Task cost plan.",
      practises: "Building a traceable menu-cost calculation.",
      instructions: "Order the steps. Use current prices and the teacher-confirmed number of guests in the real task.",
      printable: "Number the steps and show one worked line using a current source.",
      source: "Party Task costing sheet intent; number of guests, budget and purchasing arrangement remain Teacher to confirm.",
      items: [
        { id: "yield", text: "Confirm the required number of portions." },
        { id: "quantity", text: "Calculate the ingredient quantity required." },
        { id: "price", text: "Record a current price and source." },
        { id: "line", text: "Calculate the cost for the amount used." },
        { id: "total", text: "Add line costs and check units." },
        { id: "review", text: "Compare the total with the confirmed budget and revise if needed." }
      ],
      startOrder: ["total", "price", "yield", "review", "quantity", "line"],
      correctOrder: ["yield", "quantity", "price", "line", "total", "review"],
      success: "The costing trail can be checked from portions to final budget review.",
      review: "Portions determine quantity; quantity and current price determine line cost; line costs determine the total."
    },
    {
      id: "act-24-criteria-quality-check",
      module: 8,
      section: "Ideas, criteria and responsible choices",
      title: "Turn vague wishes into testable criteria",
      mechanic: "match",
      placement: "After idea generation and before selecting a menu direction.",
      practises: "Writing observable criteria without inventing the formal rubric.",
      instructions: "Choose the version that could be checked with evidence. These are practice criteria, not the formal marking criteria.",
      printable: "Rewrite each vague wish as an observable practice criterion.",
      source: "Party Task design intent; formal assessment criteria remain Teacher to confirm.",
      items: [
        { id: "nice", prompt: "The food should be nice.", choices: ["The final product should meet three named sensory qualities from the class descriptor bank.", "Everyone must love it.", "It should look expensive.", "It should be perfect."], answer: "The final product should meet three named sensory qualities from the class descriptor bank.", hint: "A criterion should name evidence that can be observed." },
        { id: "cheap", prompt: "The menu should be cheap.", choices: ["The planned cost should remain within the teacher-confirmed budget.", "Spend almost nothing.", "Choose the lowest price without checking suitability.", "Ask someone else to pay."], answer: "The planned cost should remain within the teacher-confirmed budget.", hint: "Use the confirmed constraint and a checkable cost total." },
        { id: "safe", prompt: "The process should be safe.", choices: ["The plan should identify relevant hazards and the teacher-confirmed controls before production.", "Nothing can ever go wrong.", "Students should be careful.", "Safety is the teacher's job only."], answer: "The plan should identify relevant hazards and the teacher-confirmed controls before production.", hint: "Name the evidence a plan can contain without claiming observed competence." }
      ],
      success: "You turned vague language into observable practice criteria.",
      review: "A useful criterion identifies what evidence will show that the design brief has been met."
    },
    {
      id: "act-25-recipe-equipment-plan",
      module: 9,
      section: "Recipe and equipment selection",
      title: "Plan before you collect",
      mechanic: "checklist",
      placement: "After the teacher confirms a recipe and before equipment collection.",
      practises: "Selecting planning actions that reduce delay and unsafe improvisation.",
      instructions: "Select every action that belongs before production begins.",
      printable: "Tick the planning actions and add the teacher's local collection routine.",
      source: "Recipe booklet and Party recipes; final selection and local equipment controls remain Teacher to confirm.",
      prompt: "Which actions belong in a ready-to-produce plan?",
      items: [
        { id: "read", text: "Read the complete confirmed recipe, including yield and method.", correct: true, hint: "The whole sequence affects preparation." },
        { id: "list", text: "Create an equipment list from the method and quantities.", correct: true, hint: "Equipment should follow the work to be done." },
        { id: "guess", text: "Collect extra equipment at random in case it is useful.", correct: false, hint: "Unnecessary equipment creates clutter and delays." },
        { id: "check", text: "Check substitutions or dietary changes with the teacher.", correct: true, hint: "Never assume an adaptation is safe or workable." },
        { id: "ignore", text: "Ignore timing until cooking has started.", correct: false, hint: "Time-critical steps belong in the plan." }
      ],
      success: "You selected the planning actions that make equipment collection purposeful.",
      review: "Read, list, confirm and organise before collecting or starting."
    },
    {
      id: "act-26-workflow-sequence",
      module: 9,
      section: "Workflow and collaboration",
      title: "Build a usable workflow",
      mechanic: "sequence",
      placement: "After recipe selection and before the team allocates responsibilities.",
      practises: "Turning a recipe into an ordered, collaborative workflow.",
      instructions: "Order the planning actions. Actual times, people and practical procedures are Teacher to confirm.",
      printable: "Number the steps, then draft a table with time, task, equipment and person responsible.",
      source: "Party Task workflow-plan intent.",
      items: [
        { id: "read", text: "Read the recipe and identify time-critical steps." },
        { id: "prep", text: "Group preparation, cooking, presentation and clean-up tasks." },
        { id: "dependencies", text: "Identify which tasks must happen before others." },
        { id: "roles", text: "Allocate clear responsibilities and shared checks." },
        { id: "timing", text: "Add realistic teacher-confirmed times and checkpoints." },
        { id: "review", text: "Review the workflow for safety, clashes and clean-up." }
      ],
      startOrder: ["roles", "review", "read", "timing", "prep", "dependencies"],
      correctOrder: ["read", "prep", "dependencies", "roles", "timing", "review"],
      success: "The workflow moves from understanding the recipe to a checked team plan.",
      review: "Understand tasks first, find dependencies, then assign roles and times before the final check."
    },
    {
      id: "act-27-photo-evidence-choice",
      module: 9,
      section: "Presentation, styling and photography",
      title: "Choose purposeful photo evidence",
      mechanic: "scenario",
      placement: "Before students capture process or final-product evidence.",
      practises: "Selecting privacy-safe photographs that prove a process, decision or result.",
      instructions: "Choose the strongest evidence photo. Follow the school's permission and device rules.",
      printable: "Circle the strongest option and write a caption explaining what it proves.",
      source: "Party Task communication intent; school photo permissions and device procedures remain Teacher to confirm.",
      items: [
        { id: "process", prompt: "You need evidence of portion consistency.", choices: ["A close view of evenly portioned food with no faces or names", "A class selfie", "A blurry photo of the room", "A decorative stock photo"], answer: "A close view of evenly portioned food with no faces or names", hint: "The image should directly show the quality being discussed." },
        { id: "change", prompt: "You changed the layout after a presentation test.", choices: ["Before-and-after product views with clear captions", "A photo of an unrelated meal", "Only a photo of the recipe title", "A group photo with student names"], answer: "Before-and-after product views with clear captions", hint: "A comparison can prove the change and its effect." },
        { id: "final", prompt: "You need final-product evidence.", choices: ["A well-lit product photo and a caption tied to success criteria", "Ten duplicate photos without captions", "A social-media image copied from someone else", "A photo that identifies another student"], answer: "A well-lit product photo and a caption tied to success criteria", hint: "One clear, attributable image with an evidence caption is stronger than decoration." }
      ],
      success: "You chose photographs for evidence, clarity and privacy.",
      review: "Frame the food or process, exclude identifying information, and explain what the image proves."
    },
    {
      id: "act-28-criteria-test-match",
      module: 10,
      section: "Testing against criteria",
      title: "Match a criterion with evidence",
      mechanic: "match",
      placement: "Before writing the final evaluation.",
      practises: "Selecting evidence that can support a criterion-based judgement.",
      instructions: "Match each practice criterion with the strongest evidence type. These are not formal marking criteria.",
      printable: "Match the pairs and write met, partly met or not yet met beside one example, with a reason.",
      source: "Party Task evaluation intent; formal criteria remain Teacher to confirm.",
      choices: ["Costing table and confirmed budget", "Sensory comparison record", "Workflow and checkpoint notes", "Final product photo with evidence caption"],
      items: [
        { id: "budget", prompt: "The plan remains within the confirmed budget.", answer: "Costing table and confirmed budget", hint: "Use calculated cost evidence." },
        { id: "texture", prompt: "The product meets a named texture quality.", answer: "Sensory comparison record", hint: "Use specific sensory observations." },
        { id: "time", prompt: "The team follows an organised production sequence.", answer: "Workflow and checkpoint notes", hint: "Use plan-versus-process evidence." },
        { id: "appearance", prompt: "The final presentation matches the planned arrangement.", answer: "Final product photo with evidence caption", hint: "A clear comparison image can show visual correspondence." }
      ],
      success: "Each judgement can now point to evidence instead of relying on a vague opinion.",
      review: "Choose the evidence that measures the same quality named in the criterion."
    },
    {
      id: "act-29-source-record-sequence",
      module: 10,
      section: "Evidence, sources and bibliography",
      title: "Build a usable source record",
      mechanic: "sequence",
      placement: "After students find an authorised source and before they write the bibliography.",
      practises: "Recording source details while they are still available.",
      instructions: "Order the source-use routine.",
      printable: "Number the steps and complete one source record from your actual research.",
      source: "Party Task bibliography requirement.",
      items: [
        { id: "choose", text: "Choose an authorised, relevant source." },
        { id: "record", text: "Record the author or organisation, title, date and link or publication details." },
        { id: "notes", text: "Write brief notes in your own words and identify any direct quotation." },
        { id: "use", text: "Use the information for a specific design or food decision." },
        { id: "bibliography", text: "Add the full source to the bibliography in a consistent format." },
        { id: "check", text: "Check that every source used is listed and every listing can be found again." }
      ],
      startOrder: ["bibliography", "choose", "use", "record", "check", "notes"],
      correctOrder: ["choose", "record", "notes", "use", "bibliography", "check"],
      success: "The source trail is complete enough for another reader to locate and understand it.",
      review: "Record details early, take your own notes, use the source purposefully, then list and check it."
    },
    {
      id: "act-30-reflection-improvement",
      module: 10,
      section: "Reflection, improvement and communication",
      title: "Make reflection evidence-based",
      mechanic: "match",
      placement: "After testing and before the final Party Task communication.",
      practises: "Turning a vague reflection into a judgement, evidence and realistic improvement.",
      instructions: "Choose the stronger revision for each vague sentence.",
      printable: "Rewrite the three vague reflections using judgement, evidence and one next step.",
      source: "Party Task evaluation and communication intent.",
      items: [
        { id: "good", prompt: "It went good.", choices: ["The product met the portion and appearance criteria, shown by the final count and photograph.", "It was really good.", "Nothing went wrong.", "My group finished."], answer: "The product met the portion and appearance criteria, shown by the final count and photograph.", hint: "Name the judgement and the evidence." },
        { id: "hard", prompt: "The task was hard.", choices: ["The workflow became delayed at the shaping step because roles overlapped; next time I would separate those responsibilities before production.", "It was too hard for everyone.", "The recipe was bad.", "I would do everything differently."], answer: "The workflow became delayed at the shaping step because roles overlapped; next time I would separate those responsibilities before production.", hint: "Identify the point, cause and feasible improvement." },
        { id: "change", prompt: "I would make it better.", choices: ["I would test one smaller portion first so cooking consistency can be checked before the full batch.", "I would make it perfect.", "I would use expensive ingredients.", "I would copy another group's result."], answer: "I would test one smaller portion first so cooking consistency can be checked before the full batch.", hint: "Choose one specific action that could be tested." }
      ],
      success: "Your reflection now contains evidence and a realistic next action.",
      review: "A strong reflection says what happened, how you know, why it happened and what you would change."
    }
  ];

  window.FOOD_TECH_ACTIVITY_DATA = Object.freeze({
    schemaVersion: 1,
    courseId: "yr8-food-tech-2026",
    storageKey: "yr8foodtech2026:applied-activities:v1",
    bankRoute: "activities.html",
    recordBoundary: "Formative practice only. Saved results are not formal assessment, folio submission, teacher-observed practical evidence or proof of achievement.",
    activities
  });
})();
