# 📦 Godown Management Tree View Application

This project is developed as part of the InterIIT Tech Meet 13.0 Development Team Selection Task. It focuses on building a warehouse management system that displays the hierarchy of godowns (warehouses), sub-locations, and items stored, along with item details.

## 🚀 Deployment

The application is deployed and accessible at the following link:
[Live Deployment](https://godown-manager-1uwx.vercel.app/login)
- Please use VPN or MobileData, mongoDB doesnot connect in campus networks
- Default email and password
  - `biswalswaraj88@gmail.com` and `1234567`
- Feel free to create new users :)

## 🎥 Demo Video

Check out the demonstration of the project in the following video link:
[Project Demo](https://youtu.be/j4heTcFvC_g)

## ✅ Checklist

- [x] **Frontend:**
  - [x] Sign up and login page
  - [x] Tree structure with godowns, sub-locations, and items.
  - [x] User-friendly UI for selecting godown items.
  - [x] Search bar
  - [x] Responsiveness of the whole website
  - [ ] Drag and drop feature
- [x] **Backend:**
  - [x] Signup, login and logout
  - [x] Simple search logic
  - [ ] AI based advanced search
  - [ ] Error Handling (required to find all edge cases)
- [x] **Authentication:**
  - [x] Login page with JWT Auth.
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

# Project Documentation

## 🔧 Setup Instructions

### Prerequisites

Ensure the following are installed on your system:
- **Node.js** (v18.x or higher)
- **npm** or **pnpm** (preferred)
- **Docker** (for containerized setup)

### Local Development

To set up the project locally, follow these steps:

1. **Clone the repository**  
   ```bash
   git clone <your-repo-url>
   ```

2. **Navigate to the project directory**  
   ```bash
   cd <your-repo-name>
   ```

3. **Install dependencies**  
   If using `pnpm` (preferred):
   ```bash
   pnpm install
   ```

4. **Run the development server**  
   Start the development server using:
   ```bash
   pnpm run dev
   ```
   The application should now be running at [http://localhost:3000](http://localhost:3000).

### Local Build

To create a production build and run the application locally:

1. **Install dependencies**  
   ```bash
   pnpm install
   ```

2. **Build the project**  
   ```bash
   pnpm run build
   ```

3. **Start the application**  
   After building, start the server:
   ```bash
   pnpm run start
   ```
   The app will be served at [http://localhost:3000](http://localhost:3000).

### Docker Setup

To run the application using Docker:

1. **Build the Docker image**  
   Use Docker Compose to build the image:
   ```bash
   sudo docker-compose build
   ```

2. **Run the Docker container**  
   Start the container:
   ```bash
   sudo docker-compose up
   ```

The application will be accessible at [http://localhost:3000](http://localhost:3000).

---

## 📊 Database

The project uses both **JSON files** and **MongoDB** for data storage.

- **JSON Files**  
  Static data for dashboard components is stored in JSON files:
  - `./src/components/dashboard/godowns.json`
  - `./src/components/dashboard/items.json`

- **MongoDB**  
  MongoDB is used for user authentication and dynamic data storage.
  
  **Steps to configure:**
  1. Set up a remote MongoDB connection.
  2. Create a `.env.local` file and add the MongoDB URI as follows:
     ```bash
     MONGO_URI=<your-mongo-db-uri>
     ```
  3. Refer to the [official MongoDB documentation](https://www.mongodb.com/) for additional setup instructions.

---

## 📝 Additional Notes

- Ensure your MongoDB URI is properly configured in the `.env.local` file.
- Also add a `JWT_SECRET_TOKEN=` parameter with value in `.env.local`
- The simplified Docker setup (`sudo docker-compose build` and `sudo docker-compose up`) allows you to efficiently run both production and development environments.

## 📅 Deadline

The final submission deadline for this project is 12/10/2024.

## 👨‍💻 Developers

[SWARAJ-42](https://github.com/SWARAJ-42)
