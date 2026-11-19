# ETIC English Lab V2.0

A standalone 20-day ETIC English training platform. This repository is separate from the user's baking/R&D projects.

## Deploy with GitHub Pages

1. Open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select branch **main** and folder **/(root)**.
4. Save and wait for GitHub Pages to publish.
5. The project site URL should be:
   https://taniia333.github.io/etic-english-lab/

## Google Sheets progress reader (OAuth)

The page reads the private `Scores` tab from the learner's Google Sheet. It does not write to Sheets from the browser. The ChatGPT coach uses the connected Google Sheets integration to append verified training records; the page then reads those records using the learner's own Google authorization.

Spreadsheet:
https://docs.google.com/spreadsheets/d/1MWyLfoxUR51YXT9RjfZPvFFpQfSBr9_i4SGHFngtxNg/edit

### One-time Google Cloud setup

1. In Google Cloud Console, create/select a project.
2. Enable **Google Sheets API**.
3. Configure the OAuth consent screen. If the app is in Testing mode, add the learner's Google account as a test user.
4. Create an OAuth Client ID of type **Web application**.
5. Under **Authorized JavaScript origins**, add:
   `https://taniia333.github.io`
   (Do not add the repository path; origins contain scheme + host only.)
6. No redirect URI is needed for the Google Identity Services token-client flow used by this page.
7. Copy the OAuth Client ID (it is a public client identifier, not a client secret).
8. Open the deployed page → **AI Coach / Cloud Sync** section, paste the OAuth Client ID, save it, then choose **Authorize Google read access**.
9. Sign in with the same Google account that has access to the private spreadsheet.

The page requests the read-only scope:
`https://www.googleapis.com/auth/spreadsheets.readonly`

Never place a Google client secret, API key, access token, or private learner data in this public repository. The OAuth Client ID may be stored in the browser's local storage; do not add a client secret to a static site.

## Data flow

1. Learner completes a task in ChatGPT using `ETIC_Coach_Skill_V2.md`.
2. Coach grades only evidence actually received, asks for a retry where appropriate, and creates a structured `ETIC_SCORE_V2` record.
3. With the learner's authorization, ChatGPT writes the REAL record to the private Google Sheet's `Scores` tab and reads it back to verify.
4. The learner opens **AI Coach / Cloud Sync** in the website and refreshes the private score records.
5. If connector writeback is unavailable, the coach provides JSON for manual import. The page labels this as local/manual data, not cloud-synced data.

## Important

- Rows marked `DEMO` are test fixtures and must not count as real learner results.
- Internal 0–100 scores are training feedback, not official ETIC scores and not a prediction of passing.
- Speech fluency/pronunciation can only be assessed from actual audio. A transcript alone is insufficient evidence for phoneme, stress, or rhythm feedback.
- Browser recordings and progress are stored locally unless explicitly exported; Google Sheets contains only the structured coach records.
- This is a single-learner setup. Multi-learner accounts, teacher dashboards, and billing are out of scope.

## Files

- `index.html` — standalone training website.
- `ETIC_Coach_Skill_V2.md` — reusable coach workflow and scoring protocol.
