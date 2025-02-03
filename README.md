# To-Do List App with LocalStorage in Angular 📝

This Angular-based To-Do List app allows users to add, edit, and delete tasks. It utilizes the **localStorage API** to save tasks on the user's device, ensuring persistence across sessions. With local storage, your tasks are safe even after page refreshes or app restarts. 🚀

## Features ✨
- **Add tasks** to your to-do list. ➕
- **Edit tasks** and update their details. ✏️
- **Delete tasks** when completed or no longer needed. ❌
- **Persistent task storage** using the localStorage API for seamless access across sessions. 💾

## LocalStorage Integration in Angular 🔒

This app uses the **localStorage API** to store tasks directly in the browser, ensuring that tasks persist even after a page refresh or when the app is reopened. Here's how it works:

- Tasks are saved in the browser's local storage as key-value pairs, ensuring that the user's to-do list remains available each time they access the app.
- The app checks for existing tasks in localStorage when it loads and updates the task list accordingly.

Example of using localStorage:
```typescript
// Save task to localStorage
localStorage.setItem('tasks', JSON.stringify(this.tasks));

// Retrieve tasks from localStorage
this.tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
```
## Setup and Installation ⚙️

### Prerequisites 📋
Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or higher) 💻
- [Angular CLI](https://angular.io/cli) 📦

### Install the dependencies 📥
Clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/todolist-app.git
cd todolist-app
npm install
```
## Run the application 🚀

To run the application locally, use the following command:

```bash
ng serve
```
