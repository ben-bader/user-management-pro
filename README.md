# User Management System

A web application for managing user data with CRUD operations and local storage persistence.

## Project Structure 

### Core Components

- **`src/main.js`**: Entry point that initializes the application, loads initial data from JSON, and sets up the user interface
- **`index.html`**: Main HTML layout with a form for user input and a table for displaying users 
- **`styles.css`**: Responsive styling with modern CSS features

### Models
- **`User.js`**: User class with validation and data conversion methods
- **`UserManage.js`**: Manages user collection with CRUD operations and storage integration

### Services
- **`api.js`**: Handles HTTP requests with error handling
- **`storage.js`**: Local storage wrapper with async capabilities

### UI Components
- **`UIManager.js`**: Manages UI interactions, form handling, and table updates
- **`Toast.js`**: Notification system with success, error, and info messages

### Utils
- **`errors.js`**: Custom error classes for validation, network, and not found errors

## Features

- Create, Read, Update, and Delete users
- Input validation with error handling 
- Persistent storage using localStorage
- Initial data loading from JSON file
- Toast notifications for user feedback


## Screenshots

![Main Interface](/public/screenshots/main.png)
*Main interface with user table*

![Edit Form](/public/screenshots/update.png)
*Edit user form*

![Notifications](/public/screenshots/toast1.png)


![Notifications](/public/screenshots/toast2.png)
*Toast notifications*

## Error Handling

The application handles various error scenarios:
- Validation errors for user data
- Network errors during API calls 
- Not found errors for user operations
- Storage-related errors

## Data Flow

1. Application loads and checks localStorage for existing users
2. If no users exist, loads initial data from `data.json`
3. Users can be added, edited, or deleted through the UI
4. Changes are immediately persisted to localStorage
5. Toast notifications provide feedback for all operations

## Getting Started

1. Clone the repository
2. Open `index.html` in your browser
3. Start managing users!

## Technologies Used

- Vanilla JavaScript (ES6+)
- HTML5
- CSS3
- Local Storage API