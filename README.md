# ETIC English Lab V2.2

Independent 20-day ETIC English training website. V2.2 introduces **two deep-learning prototypes** while preserving the other 18 days as V2.1 basics. This repository is not connected to the Tang Lab baking projects.

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

## V2.2 depth course pilot (Day 01 and Day 05 only)

New independently maintained file: `assets/studio-v22.js`.

- Day 01 is **real instruction with an initial 30-minute embedded diagnostic**, not an all-day entrance exam. 20 expression items, 8 sentence models, 3 listening passages/12 questions, 2 reading passages/8 questions, 3 oral tasks and 100–150-word email with second draft.
- Day 05 is a listening/speaking intensive: 18 expression items, 8 sentence models, 3 listening passages/12 questions, 2 reading passages/6 questions, 3 oral tasks with revision/transfer, 120–160-word follow-up email and second draft.
- Both show detailed 240-minute study plans. Time blocks describe goals, not actual tracked elapsed time.
- Web answers preserve the first submitted choice plus latest choice and number of attempts in the existing per-day local learning archive; answer results do **not** automatically become full L/R/S/W skill scores.
- ChatGPT oral link is explicit: copy task, open the configured ChatGPT conversation, paste it, and start Voice manually. There is no site-side ChatGPT voice auto-start or chat history API.
- The old Day 01 / Day 05 base lessons, HTML audio recorder and data remain available under the legacy link, and other 18 days were not edited.
- Listening audio: the site **supports future prerecorded MP3** (`audio` field per passage) but these files have **not yet been generated/attached**. Currently, device system English speech with optional voice and speed is provided for practice. Do not describe it as natural recorded audio.
- GitHub Pages score data schema remains `2.1`; do not migrate existing public scores just because the curriculum is at V2.2.

V2.2 acceptance steps: open Day 01 on iPhone; answer a new listening and a new reading question; reload and confirm the first/most recent answers are retained; save a writing draft; copy the specific GPT speaking task and open the expected chat; come back and confirm content is preserved; complete true coaching before writing a non-demo GitHub score.
