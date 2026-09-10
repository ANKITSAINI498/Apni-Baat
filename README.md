# BaatCheet — Modern Real-Time Chat

A premium, responsive React chat application based on the supplied STEP 7 specification. It uses mock JSON data, LocalStorage persistence, Axios service fallback, contextual message actions, smart local replies, emoji/reactions, attachments, archive/mute/favorite/pin/star behavior, dark/light theme, and mobile navigation.

## Requirements
- Node.js 18+ recommended
- npm

## Run
```bash
npm install
npm run dev
```
Then open the Vite URL shown in the terminal.

## Production build
```bash
npm run build
npm run preview
```

## Architecture
- `src/components` — reusable UI and chat modules
- `src/context` — chat, theme, and auth state
- `src/data` — realistic Indian demo data and response categories
- `src/services` — Axios API/service layer with local fallback
- `src/utils` — reply engine, storage, dates, message helpers
- `src/pages` — profile, settings, favorites and archived views

## Data
Chat history, conversation flags, profile, and theme are persisted in browser LocalStorage. Attachments use local browser file selection and image previews; there is no fake server upload.

## API fallback
`chatService.js` attempts the configured `VITE_API_BASE_URL` and falls back to `chatData.json` when the API is unavailable. No API secrets are included.

## Demo behavior
Calls/video calls, notification center, block/report, and some secondary actions are intentionally simulated with toast feedback because this is a frontend demo without a backend.
