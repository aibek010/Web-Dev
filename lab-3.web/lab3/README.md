# Lab 3

## Structure

- **task1/** – javascript.info tutorial solutions (JavaScript Fundamentals + Data Types section)
- **task2/** – To-Do List application (HTML, CSS, JavaScript)

## Task 1: javascript.info Exercises

Solutions are in `task1/` as one file per chapter (or as needed):

| File        | Topic / Chapter                         |
|------------|------------------------------------------|
| chapter1.js | Hello, world!                           |
| alert.js    | Hello world – external script           |
| chapter4.js | Variables                               |
| chapter5.js | Data types (basic)                      |
| chapter6.js | Interaction: alert, prompt, confirm     |
| chapter8.js | Basic operators, maths                  |
| chapter9.js | Comparisons                             |
| chapter10.js| Conditional branching: if, '?'         |
| chapter11.js| Logical operators                       |
| chapter13.js| Loops: while and for                    |
| chapter14.js| The "switch" statement                  |
| chapter15.js| Functions                               |
| chapter20.js| Numbers (Data Types section)            |
| chapter21.js| Strings (Data Types section)           |
| chapter22.js| Arrays (Data Types section)            |
| chapter23.js| Array methods (Data Types section)     |

Chapters without tasks (e.g. Code structure, Strict mode, Type conversions) are not included as separate files.

## Task 2: To-Do List App

Open `task2/index.html` in a browser.

**Features:**

- Add a task: type in “New Task” and click **Add** (or submit the form).
- Mark done: check the checkbox; the task text gets a strikethrough.
- Delete: click the red trash icon to remove the item.

**Tech:** Semantic HTML (`header`, `main`, `form`, `label`, `ul`/`li`, `button`), CSS with Flexbox, vanilla JavaScript only. Uses DOM APIs (`createElement`, `appendChild`, `removeChild`), `addEventListener` (submit, change, click), and dynamic classes for styling.

## Pushing to GitHub

1. Initialize a git repository in the project root (if not already):
   ```bash
   git init
   ```
2. Add and commit:
   ```bash
   git add .
   git commit -m "Lab 3: javascript.info solutions and To-Do List app"
   ```
3. Create a new repository on GitHub, then add it as remote and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git branch -M main
   git push -u origin main
   ```

Replace `YOUR_USERNAME` and `YOUR_REPO` with your GitHub username and repository name.
