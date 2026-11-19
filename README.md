# ETIC English Lab V2.1

Independent 20-day ETIC English training website. This repository is not connected to the Tang Lab baking projects.

**Live site:** https://taniia333.github.io/etic-english-lab/

## GitHub Pages

Settings → Pages → Deploy from a branch → `main` → `/(root)`.

## Privacy-minimal GitHub score sync (no Google Cloud required)

The website reads the **public**, versioned file `data/public-progress.json` using `fetch()` from the same GitHub Pages origin. It fetches at page load, when the browser tab becomes active, on manual refresh, and every three minutes while the tab is visible.

Only the following are allowed in the public data:

- `schema_version`: `2.1`
- `learner_id`: fixed non-secret label `learner-001`
- `updated_at_utc`: timestamp, not personal content
- `completed_days`: array of verified day numbers (1–20)
- `records`: entries with `record_id`, `day`, `skill` (`L/R/S/W`), `score` (0–100), `attempt`.

No names, emails, private Google Sheets URLs, original recordings, answers, writing drafts, mistake lists, or personalized teacher feedback may be stored in this repository. Public Git history is **not** a private database, and published scores may be linked to the repository owner.

This schema is deliberately separate from the private ETIC_SCORE_V2 training-detail schema, enabling future migration to authenticated learner accounts.

## Coach workflow

1. Learner opens the site, selects a day, and copies the day's AI Coach instruction.
2. ChatGPT follows `ETIC_Coach_Skill_V2.md` (the V2.1 coaching specification). It must wait for an actual answer before assigning an internal training score.
3. If connected to the learner's **private** Google Sheets, ChatGPT may write verified detailed evaluations there. This is optional and does not require browser OAuth.
4. After an actual scored task, ChatGPT reads the current `data/public-progress.json` via its GitHub connection, adds only an approved public score summary, uses the latest blob SHA to update the file, and reads back to verify the write.
5. If GitHub writeback succeeds, the public site refreshes automatically. GitHub Pages cache/deployment updates may take some time.
6. If GitHub writeback is unavailable, the coach reports failure rather than implying background sync. The site's manual import remains available for private backup records.

The site reads from GitHub; it does not itself authenticate with GitHub or write records back.

## Limits and later migration

- This is a **single-learner** training prototype.
- GitHub score summaries and completed days can automatically sync across devices.
- Private lesson notes, full details, recordings, local tasks and checkboxes are **not automatically synchronized** across devices; export backups separately.
- Official ETIC scores and pass/fail decisions are separate from internal 0–100 training scores.
- The current GPT must actually execute the GitHub write; Skills and chats do not continuously sync in the background.
- For future multi-learner deployment, migrate to private per-learner records with authentication, role-based access, teacher reporting, consent and proper retention/deletion workflows. Never put multi-learner data in the public JSON.

## Files

- `index.html`: 20-day curriculum, exercises, recording, dashboard, GitHub read-only sync
- `data/public-progress.json`: anonymized public score/progress summary, initially empty
- `ETIC_Coach_Skill_V2.md`: V2.1 instructions for teaching, scoring and GitHub writeback
