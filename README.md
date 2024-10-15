# 📦 Godown Management Tree View Application

This project is developed as part of the InterIIT Tech Meet 13.0 Development Team Selection Task. It focuses on building a warehouse management system that displays the hierarchy of godowns (warehouses), sub-locations, and items stored, along with item details.

## 🚀 Deployment

The application is deployed and accessible at the following link:
[Live Deployment](#)

## ✅ Checklist

- [x] **Frontend:**
  - [x] Sign up and login page
  - [x] Tree structure with godowns, sub-locations, and items.
  - [x] User-friendly UI for selecting godown items.
  - [x] Search bar
  - [x] Responsiveness of the whole website
- [x] **Backend:**
  - [x] REST API to expose endpoints for godowns and items.
  - [x] JSON structure for godown locations and items.
  - [x] API documentation included.
- [x] **Authentication:**
  - [x] Basic login page with JWT tokenization.
- [x] **Dockerization:**
  - [x] Full Docker setup to containerize the application.
- [x] **Deployment:**
  - [x] Deployed version of the application in vercel.

## 📂 Project Structure

```
.
├── components.json
├── docker-compose.yml
├── Dockerfile
├── next.config.mjs
├── next-env.d.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── postcss.config.mjs
├── README.md
├── src
│   ├── app
│   │   ├── api
│   │   │   └── user
│   │   │       ├── login
│   │   │       │   └── route.ts
│   │   │       ├── logout
│   │   │       │   └── route.ts
│   │   │       ├── signup
│   │   │       │   └── route.ts
│   │   │       └── userdetails
│   │   │           └── route.ts
│   │   ├── dashboard
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── fonts
│   │   │   ├── GeistMonoVF.woff
│   │   │   └── GeistVF.woff
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── login
│   │   │   └── page.tsx
│   │   ├── page.tsx
│   │   └── signup
│   │       └── page.tsx
│   ├── components
│   │   ├── dashboard
│   │   │   ├── GoDownHierarchy.tsx
│   │   │   ├── godowns.json
│   │   │   ├── ItemDisplay.tsx
│   │   │   └── items.json
│   │   ├── navbar.tsx
│   │   └── ui
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       └── separator.tsx
│   ├── dbConfig
│   │   └── dbConfig.js
│   ├── helpers
│   │   └── getDataFromToken.ts
│   ├── lib
│   │   └── utils.ts
│   ├── middleware.ts
│   └── models
│       └── userModel.ts
├── tailwind.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## 🔧 Setup Instructions

### Prerequisites

Ensure you have the following installed on your system:

- Nodejs
- npm or pnpm
- Docker

### Local Development



## 📊 Database

I used a combination of both json and mongoDB
- JSON
  - `./src/components/dashboard/godowns.json`
  - `./src/components/dashboard/items.json`
- MongoDB
  - remote mongoDB connection for user authentication
  - URI in .env.local 

## 🎥 Demo Video

Check out the demonstration of the project in the following video link:

[Project Demo](#)

## 📅 Deadline

The final submission deadline for this project is 12/10/2024.

## 👨‍💻 Developers

[SWARAJ-42](https://github.com/SWARAJ-42)
