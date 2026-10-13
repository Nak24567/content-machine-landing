/* ===========================================================
   CONTENT MACHINE — config.js
   Pre-configured for the live form. No edits needed.
   =========================================================== */

const CONFIG = {
  // The Google Form's formResponse endpoint.
  // Submissions land in the linked Google Sheet.
  formActionUrl: "https://docs.google.com/forms/d/e/1FAIpQLSf4tST1pgWJDBgZbatHb2hY6VPgIcbYJ-04rP2zJZ12cCeEYw/formResponse",

  // Field IDs for the form. Tested and verified.
  fieldName: "entry.1006519120",
  fieldEmail: "entry.1638489036",

  // The link to your Drive doc that the user gets after submitting.
  driveLink: "https://drive.google.com/file/d/1bQ7Cpy5ECW-TSggNrGJ3a9ZMbySn8xMk/view?usp=drivesdk",

  // The Google Sheet that auto-fills with submissions.
  sheetUrl: "https://docs.google.com/spreadsheets/d/1OHkJxLNIKSsi7xUHxtbxO4LHy2vG2MfBqBzFtickjSs/edit",

  // The form's public URL (for the "fill out on Google" fallback link).
  formPublicUrl: "https://docs.google.com/forms/d/e/1FAIpQLSf4tST1pgWJDBgZbatHb2hY6VPgIcbYJ-04rP2zJZ12cCeEYw/viewform"
};
