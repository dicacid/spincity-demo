# Changelog

## v1.0.0
- Fixed tsconfig.json paths: "@/*" -> "./*" (flat structure, no src/)
- Fixed TipButton selected styling mismatch: prominent blue gradient bg-indigo ring-4/scale-105 glow/elevation vs subtle default
- Full demo: Lobby (3 live streams), Stream page (video/chat/TipButton interactive mock), DJ Dashboard (earnings/recent tips), /api/boost PUT (admin viewers)
- Supabase integration (mock client build-safe, real env Vercel)
- Tailwind glassmorphism dark theme responsive

npm install && npm run build: ✅
