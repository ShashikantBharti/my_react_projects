# To do list App With React and TypeScript

This is a simple to-do list app built with React and TypeScript.

## Features

- Add new tasks
- Delete tasks
- Mark tasks as completed

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have the following installed:

- Node.js (version 20.12.2 or higher)
- npm (version 10.5.0 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ShashikantBharti/my_react_projects/tree/main/To-Do-List
   ```
2. Navigate to the project directory:
   ```bash
   cd to-do-list
   ```
3. Install the dependencies:
   ```bash
   npm i
   ```

## Usage

To run the app locally, use the following command:

```bash
npm run dev
```

## Folder Structure

```bash
simple-to-do-list/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ │ ├── AddTodo.tsx
│ │ └── TodoItem.tsx
│ ├── App.css
│ ├── App.tsx
│ ├── index.css
│ └── index.tsx
├── .gitignore
├── package.json
└── README.md
```

## Components

- App.tsx: Main component that holds the state and renders the TodoForm and TodoList components.
- AddTodo.tsx: Contains the form for adding new tasks.
- TodoItem.tsx: Represents a single to-do item with options to mark as completed or delete.
