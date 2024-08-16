To-Do List Application
Overview
This To-Do List application is a simple React-based web app that allows users to manage their tasks. Users can add, mark as completed, and delete tasks. The application is styled with a responsive background image and offers a clean, user-friendly interface.

Features
 * Add Task: Users can input a task title and click "Ekle" to add it to the list.
 * Complete Task: Users can click "Tamamla" to mark a task as completed. Completed tasks will be displayed with a line-through.
 * Delete Task: Users can click "Sil" to remove a task from the list.

Technologies Used
 * React: JavaScript library for building user interfaces.
 * Axios: Promise-based HTTP client for making requests to the backend.
 * CSS: Styling for the layout and design.

Setup and Installation
Prerequisites
 * Node.js (for running the development server and managing dependencies)
 * npm or yarn (for managing packages)

Steps to Run the Application

 1. Clone the Repository:
git clone https://github.com/Salih04/todo-list.git
cd todo-list

 2. Install Dependencies:
npm install
# or
yarn install

 3. Start the Development Server:
npm start
# or
yarn start

 4. Open Your Browser:
Navigate to http://localhost:3000 to view the application.

API Endpoints
The application communicates with a backend API. Here are the relevant endpoints:

 * GET /api/todos: Fetches the list of all to-dos.
 * POST /api/todos: Adds a new to-do with a title.
 * PUT /api/todos/:id: Updates the completion status of a to-do.
 * DELETE /api/todos/:id: Deletes a to-do by its ID.

Usage
 * Add a Task: Enter a title in the input field and click "Ekle".
 * Complete a Task: Click "Tamamla" next to a task to mark it as completed.
 * Delete a Task: Click "Sil" next to a task to remove it from the list.

Styling
The application uses inline CSS for styling and includes a full-size background image. The background image is set to cover the entire viewport and is centered.

Troubleshooting
 * Error Loading Data: Ensure the backend server is running and accessible at http://localhost:3000/api/todos.
 * Styling Issues: Check the browser's developer tools for any CSS conflicts or issues.

Contributing
Feel free to fork the repository and submit pull requests with improvements or bug fixes.


