# InvestiFy — Fullstack Starter (Java + Web)

This is a production-grade starter for **InvestiFy**:
- **Backend**: Spring Boot (Java 17), H2 (MVP), Actuator, WebClient (Gemini proxy)
- **Frontend**: React + Vite + Tailwind
- **API**: `/api/ai/ask`, `/api/txns`, `/api/health`

## Run

### Backend
```bash
cd backend
mvn spring-boot:run
```
Set your Gemini key as env var:
```bash
export GEMINI_API_KEY=your_key   # PowerShell: $env:GEMINI_API_KEY="your_key"
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Optionally create `.env` from `.env.sample` to point to your API.

## Notes
- CORS is open to `http://localhost:5173` for local dev.
- Swap H2 -> PostgreSQL later (application.yml).
- `GeminiService` is a thin proxy to Google Gemini (v1beta).

Happy shipping 🚀
