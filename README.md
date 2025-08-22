# Updatable Inventorisation List

A full-stack inventory management application built with Flask (backend) and Vue.js (frontend). This application allows you to view and manage an inventory list with various categories, statuses, and custom fields.

## Architecture

- **Backend**: Flask REST API that serves inventory data from JSON files
- **Frontend**: Vue.js 3 application with Vuetify UI components
- **Communication**: The frontend communicates with the backend via HTTP API calls

## Prerequisites

Before running the application, ensure you have the following installed:

- **Python 3.8+** (for backend)
- **Node.js 20.19.0+** (for frontend)
- **npm** (comes with Node.js)

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/SpaceRadish26/updatable-inventorisation-list.git
cd updatable-inventorisation-list
```

### 2. Setup and Run Backend

```bash
# Navigate to backend directory
cd backend

# Install Python dependencies
pip install -r requirements.txt

# Start the Flask development server
python -m flask --app app run --debug
```

The backend will be available at: `http://localhost:5000`

**API Endpoints:**
- `GET /inventory` - Returns the complete inventory list

### 3. Setup and Run Frontend

Open a new terminal window/tab and run:

```bash
# Navigate to frontend directory
cd frontend/inventory-list

# Install Node.js dependencies
npm install

# Start the development server
npm run dev
```

The frontend will be available at: `http://localhost:5173`

## Project Structure

```
├── backend/
│   ├── app.py              # Main Flask application
│   ├── requirements.txt    # Python dependencies
│   ├── data/              # JSON data files
│   └── util/              # Utility modules
│       └── json_reader.py # JSON parsing utilities
├── frontend/
│   └── inventory-list/    # Vue.js application
│       ├── src/          # Source code
│       ├── package.json  # Node.js dependencies
│       └── vite.config.js # Vite configuration
└── README.md             # This file
```

## Configuration

### Backend Configuration

The backend runs on `http://localhost:5000` by default. To change this:

1. Set the `FLASK_RUN_HOST` and `FLASK_RUN_PORT` environment variables
2. Or use command-line flags: `flask run --host=0.0.0.0 --port=8000`

### Frontend Configuration

The frontend is configured to connect to the backend at `http://localhost:5000`. To change this:

1. Set the `VUE_APP_BACKEND_URL` environment variable
2. Or modify the default URL in `frontend/inventory-list/src/main.js`

## Development

### Backend Development

- The Flask app runs in debug mode by default, providing hot reload
- Add new API endpoints in `app.py`
- JSON data is stored in `backend/data/json_formatted.txt`

### Frontend Development

- The Vite development server provides hot module replacement
- Vue.js components are in `frontend/inventory-list/src/components/`
- Routing is configured in `frontend/inventory-list/src/router/`

## Troubleshooting

### Common Issues

1. **Backend fails to start**: 
   - Ensure all Python dependencies are installed: `pip install -r requirements.txt`
   - Check that `backend/data/json_formatted.txt` exists

2. **Frontend can't connect to backend**:
   - Verify the backend is running on `http://localhost:5000`
   - Check the browser's network tab for CORS errors

3. **Port conflicts**:
   - Backend: Change the Flask port with `flask run --port=8000`
   - Frontend: Vite will automatically find an available port if 5173 is taken

### Logs

- Backend logs appear in the terminal where you started the Flask server
- Frontend logs appear in the browser's developer console



## License

This project is open source. Please check the repository for license details.
