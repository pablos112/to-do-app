# 📝 To-Do App

A clean and responsive single-page application for managing your daily tasks.  
Built with pure HTML, CSS, and JavaScript — no frameworks, just fundamentals.

[🔗 Live Demo](https://pablos112.github.io/to-do-app/)  
[📁 Source Code](https://github.com/pablos112/to-do-app)

---

## 🚀 Features

- ✅ Add and delete tasks
- ✅ Fully responsive layout (mobile & desktop)
- ✅ Saves tasks using `localStorage` (persistent across sessions)
- ✅ **"AI Motivation"** button for task-related encouragement*
- ✅ Input validation (no empty tasks)
- ✅ Clean UI with smooth hover animations

---

## ✨ AI Motivation (Bonus Feature)

The app includes a **Motivate Me** button that sends your task to OpenAI and returns an inspiring message.  
If the API key is missing (which it is by default for security reasons), the app gracefully falls back to a modal with the message:

> **Good luck with _your task_!**

You can enable this feature by adding your own OpenAI API key to `motivation.js`.

---

## 🛠 Tech Stack

- HTML5  
- CSS3 (with custom animations and transitions)  
- JavaScript (ES6+)  
- `localStorage` for data persistence  
- GitHub Pages for deployment
---

## 🧪 Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/pablos112/to-do-app.git

