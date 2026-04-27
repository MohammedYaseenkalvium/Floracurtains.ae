# 🌿 Flora Curtains — Web App

Full-stack web application for Flora Curtains Abu Dhabi.

## Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Frontend   | React 18 + Vite + Tailwind CSS    |
| Backend    | Node.js + Express                 |
| Database   | PostgreSQL via Prisma ORM         |
| Hosting    | Vercel (client) + Railway (server)|

---

## Project Structure

```
flora-app/
├── client/               ← React + Vite frontend
│   ├── src/
│   │   ├── components/   ← Navbar, Hero, Services, Testimonials, Contact, Footer, WhatsAppButton
│   │   ├── pages/        ← (add more pages here)
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── tailwind.config.js
│   └── vite.config.js
│
└── server/               ← Node.js + Express backend
    ├── routes/
    │   └── enquiries.js  ← POST & GET /api/enquiries
    ├── prisma/
    │   └── schema.prisma ← Database schema
    ├── index.js          ← Express entry point
    └── .env.example      ← Copy to .env and fill in values
```

---

## Getting Started

### 1. Frontend

```bash
cd client
npm install
npm run dev
# → http://localhost:5173
```

### 2. Backend

```bash
cd server
npm install

# Set up environment variables
cp .env.example .env
# Edit .env and add your DATABASE_URL (Supabase or local PostgreSQL)

# Run database migrations
npm run db:generate
npm run db:migrate

# Start the dev server
npm run dev
# → http://localhost:5000
```

### 3. Connect frontend to backend

The Vite dev server is already configured to proxy `/api` requests to `localhost:5000`.
No CORS issues in development.

---

## Customisation Checklist

- [ ] Replace `WHATSAPP_NUMBER` in `Navbar.jsx` and `WhatsAppButton.jsx`
- [ ] Update phone number and showroom address in `Contact.jsx`
- [ ] Replace logo `src` URLs with your hosted logo
- [ ] Update footer copyright year logic if needed
- [ ] Add Google Analytics or Meta Pixel in `index.html`

---

## Deployment

### Frontend → Vercel
```bash
cd client
npm run build        # outputs to dist/
# Push to GitHub, connect repo to Vercel
# Set VITE_API_URL env var in Vercel dashboard if needed
```

### Backend → Railway / Render
- Connect your GitHub repo
- Set `DATABASE_URL`, `CLIENT_URL`, `PORT` env vars
- Railway auto-detects Node.js and runs `npm start`

### Database → Supabase
- Create a free project at supabase.com
- Copy the connection string to `DATABASE_URL`
- Run `npm run db:migrate` to apply schema

---

## API Endpoints

| Method | Path            | Description              |
|--------|-----------------|--------------------------|
| GET    | /api/health     | Health check             |
| POST   | /api/enquiries  | Submit a contact enquiry |
| GET    | /api/enquiries  | List all enquiries       |
