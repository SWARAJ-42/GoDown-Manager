# 📦 Godown Management Tree View Application

This project is developed as part of the InterIIT Tech Meet 13.0 Development Team Selection Task. It focuses on building a warehouse management system that displays the hierarchy of godowns (warehouses), sub-locations, and items stored, along with item details.

## 🌟 Features

- **Tree Structure:**
  - A hierarchical tree view representing godown locations and sub-locations.
  - Allows users to expand and collapse nodes to explore nested locations and items.
- **Item Details:**
  - Displays the detailed attributes of selected items on the main page, including quantity, price, and more.
- **Basic Authentication:**
  - A login page with simple email domain-based validation for access.
- **API Endpoints:**
  - REST API to handle the backend data for godowns, sub-locations, and items.
- **Dockerized:**
  - Docker setup for the entire system to streamline deployment.

## ✅ Checklist

- [x] **Frontend:**
  - [x] Tree structure with godowns, sub-locations, and items.
  - [x] Expand/collapse functionality for the tree view.
  - [x] Display item details on selection.
  - [x] User-friendly UI for selecting godown items.
- [x] **Backend:**
  - [x] REST API to expose endpoints for godowns and items.
  - [x] JSON structure for godown locations and items.
  - [x] API documentation included.
- [x] **Authentication:**
  - [x] Basic login page with JWT tokenization.
- [x] **Dockerization:**
  - [x] Full Docker setup to containerize the application.
- [ ] **Search Functionality:** (Excluded as per the task requirements)
- [x] **Deployment:**
  - [x] Deployed version of the application. (Link below)

## 📂 Project Structure

```
.
├── backend/
│   ├── app.py                 # Flask app for API
│   ├── models.py              # Data models for godowns and items
│   ├── routes.py              # API routes for CRUD operations
│   ├── Dockerfile             # Docker setup for backend
│   └── requirements.txt       # Python dependencies
├── frontend/
│   ├── src/
│   │   ├── components/        # React components for UI
│   │   ├── App.js             # Main React component
│   │   └── index.js           # Entry point for frontend
│   ├── public/                # Static assets and HTML
│   ├── Dockerfile             # Docker setup for frontend
│   └── package.json           # JavaScript dependencies
├── docker-compose.yml         # Docker Compose for managing multi-container application
└── README.md                  # Project documentation
```

## 🚀 Deployment

The application is deployed and accessible at the following link:

[Live Deployment](#)

## 🔧 Setup Instructions

### Prerequisites

Ensure you have the following installed on your system:

- Docker
- Node.js
- Python 3.x

### Local Development

1. Clone the repository:

```bash
git clone https://github.com/your-username/godown-management.git
cd godown-management
```

2. Backend Setup:

```bash
cd backend
pip install -r requirements.txt
python app.py
```

This will start the Flask backend server on `http://localhost:5000`.

3. Frontend Setup:

```bash
cd frontend
npm install
npm start
```

This will start the React frontend server on `http://localhost:3000`.

### Docker Setup

To run the application using Docker:

1. Build and run the containers:

```bash
docker-compose up --build
```

The application should now be available on the designated port in your Docker setup.

## 🛠 API Endpoints

| HTTP Method | Endpoint | Description |
|-------------|----------|-------------|
| GET | `/api/godowns` | Retrieves all godown locations. |
| GET | `/api/items` | Retrieves all items in godowns. |
| POST | `/api/godowns` | Adds a new godown. |
| POST | `/api/items` | Adds a new item. |
| PUT | `/api/godowns/:id` | Updates a godown by ID. |
| PUT | `/api/items/:id` | Updates an item by ID. |
| DELETE | `/api/godowns/:id` | Deletes a godown by ID. |
| DELETE | `/api/items/:id` | Deletes an item by ID. |

## 📊 Database

The application uses a JSON file structure or any database of your choice like SQLite, PostgreSQL, or MongoDB.

- Locations table/collection:
  - id, name, parent_godown
- Items table/collection:
  - item_id, name, quantity, category, status, price, brand, godown_id

## 🎥 Demo Video

Check out the demonstration of the project in the following video link:

[Project Demo](#)

## 📅 Deadline

The final submission deadline for this project is 12/10/2024.

## 👨‍💻 Developers

[Your Name](https://github.com/your-username)
