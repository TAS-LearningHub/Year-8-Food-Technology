(function () {
  "use strict";

  window.FOOD_TECH_ASSESSMENT_DATA = Object.freeze({
    schemaVersion: 1,
    courseId: "yr8-food-tech-2026",
    verifiedAt: "2026-08-25",
    handbookHub: {
      title: "WWHS Assessment Handbooks",
      url: "https://sites.google.com/education.nsw.gov.au/wwhsstudentparentinformation/curriculum-information/assessment-handbooks",
      httpStatus: "success",
      statement: "The hub identifies cohort handbooks as the source of school assessment policies, procedures, rules and schedules."
    },
    handbook: {
      source_id: "wwhs-year8-assessment-handbook-2026",
      source_type: "official cohort assessment handbook PDF",
      title: "Year 8 Assessment Booklet 2026",
      cohort: "Year 8",
      course: "Food Technology",
      published_year: 2026,
      source_url: "https://drive.google.com/file/d/1CB0zF0ebeWrS2istL6cT7RX8tcgW6pae/view",
      retrieved_at: "2026-08-25",
      local_filename: "tmp/pdfs/Year-8-Assessment-Booklet-2026.pdf",
      page_count: 34,
      relevant_page: 24,
      sha256: "33d4275c3f773c96e66bebe7b84b4e740ed686232d46c20d82766fdbfb99c4c",
      pdf_signature: "%PDF-",
      authority_status: "Confirmed current official Year 8 schedule source",
      notes: "Food Technology page visually inspected. Schedule totals 100%. Its FT4 outcome-code family conflicts with the requested 2025-syllabus early-adoption build and must not be copied into the new teacher program."
    },
    schedule: [
      { task: "1", nature: "Practical", due: "Ongoing", outcomes: "FT4-1, FT4-2, FT4-3, FT4-5, FT4-10", weighting: "60%", status: "Official 2026 handbook row" },
      { task: "2", nature: "Safety", due: "Ongoing", outcomes: "FT4-2, FT4-9", weighting: "20%", status: "Official 2026 handbook row" },
      { task: "3", nature: "Knowledge", due: "Ongoing", outcomes: "FT4-4, FT4-6, FT4-7, FT4-8", weighting: "20%", status: "Official 2026 handbook row" }
    ],
    scheduleTotal: "100%",
    syllabusConflict: {
      status: "Teacher to confirm",
      statement: "The official 2026 Year 8 schedule uses the FT4 outcome-code family, while this site is being built as a Food Technology 7–10 Syllabus (2025) early-adoption candidate. The formal schedule, Party Task notice and new outcome mapping must be reconciled by the school before student release.",
      doNotDo: "Do not silently replace the handbook outcomes, combine code families or treat the draft website mapping as an approved assessment schedule."
    },
    partyTaskSource: {
      title: "Assessment Party task 2025",
      authority_status: "Current teacher-posted source with unresolved conflict; not a reissued 2025-syllabus notification",
      review_only_claims: "The teacher source contains a historical task number, issue/due dates, combined weighting, older outcome codes and mark allocation that must not be treated as current requirements.",
      conflict: "The teacher notice and official handbook disagree about the Party Task schedule and weighting. Its outcome codes also do not belong to either the handbook FT4 family or the requested 2025 syllabus family.",
      preservation: "Exact claims are retained only in the teacher-facing assessment manifest for reconciliation and are not shipped in this public course data file."
    },
    confirmationStatus: [
      { domain: "2026 Year 8 schedule", status: "Confirmed", detail: "Current official handbook found, downloaded, hashed and Food Technology page visually inspected." },
      { domain: "Current standard notification template", status: "Teacher to confirm", detail: "No independently verified current blank standard template was recovered from the authorised course pack." },
      { domain: "Party Task formal status and task number", status: "Teacher to confirm", detail: "The teacher notice and official schedule do not reconcile; a reissued notice is required." },
      { domain: "Issue date and due date", status: "Teacher to confirm", detail: "The teacher source contains dates, but the frozen source map requires confirmation before student use." },
      { domain: "Weighting", status: "Teacher to confirm", detail: "The controlling sources conflict. Do not use a Party Task weighting until the school reissues the notification." },
      { domain: "2025 syllabus outcomes", status: "Teacher to confirm", detail: "A school-approved assessment mapping has not been supplied." },
      { domain: "Task-specific marking criteria", status: "Teacher to confirm", detail: "The historical source checklist and mark allocation have not been approved as current criteria under the new syllabus." },
      { domain: "Submission method and practical product", status: "Teacher to confirm", detail: "No controlling current source confirms these details." }
    ],
    notification: {
      id: "party-task-draft",
      route: "assessment-notification.html",
      version: "party-task-draft-2026.08.25-v1",
      label: "Draft - teacher approval required",
      formalStatus: "Not authorised as a current formal notification",
      course: "Year 8 Food Technology",
      taskName: "Party Task",
      taskNumber: "Teacher to confirm",
      issue: "Teacher to confirm",
      due: "Teacher to confirm",
      weighting: "Teacher to confirm",
      outcomes: "Teacher to confirm - school-approved 2025 syllabus assessment mapping required",
      practicalProduct: "Teacher to confirm",
      submission: "Teacher to confirm",
      summary: "Plan, produce, present and evaluate a food solution for a party purpose using source-grounded evidence. This draft support page organises confirmed evidence intentions without replacing the official notification.",
      evidence: [
        "party invitation or audience communication",
        "food/menu list with traceable costing",
        "food-safety, hygiene and cross-contamination understanding",
        "sensory evidence using precise descriptors",
        "teacher-confirmed recipe, scaling and equipment plan",
        "workflow and collaboration plan",
        "evaluation against confirmed criteria",
        "bibliography"
      ],
      excluded: [
        "the adapted 2014 case-study text",
        "unknown-rights invitation and card images",
        "obsolete outcome codes presented as current",
        "unconfirmed marks or criteria",
        "answers, assessor-only material and completed student work"
      ],
      acknowledgementKey: "yr8foodtech2026:assessment-read:party-task-draft-2026.08.25-v1",
      acknowledgementLabel: "I have opened and read this draft notification version.",
      acknowledgementBoundary: "This browser-local timestamp is a draft-page read acknowledgement only. It is not the school's notification register, formal evidence, proof of submission, proof of understanding or a replacement for any official process. Resetting browser data or changing devices removes it."
    }
  });
})();
