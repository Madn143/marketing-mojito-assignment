# ⚡ test.dev Code Academy

![Project Status](https://img.shields.io/badge/Status-Completed-success?style=flat-square)
![Tech Stack](https://img.shields.io/badge/React-Vite-blue?style=flat-square&logo=react)
![Theme](https://img.shields.io/badge/Style-Neon%20Glassmorphism-purple?style=flat-square)

> **"Code in Style."** A futuristic, responsive course finder application built as part of the Marketing Mojito Web Developer Internship assignment.

🔗 **[View Live Demo](PUT_YOUR_VERCEL_LINK_HERE)**

---

## 📸 Project Previews

<p align="center">
  <img src="public/screenshot-desktop.png" alt="Desktop View" width="45%">
  <img src="public/screenshot-mobile.png" alt="Mobile View" width="20%">
</p>

---

## 🚀 Overview

This project is a **single-page React application** designed to help users find coding courses. It features a custom "Neon/Cyberpunk" aesthetic with a glassmorphism UI, a real-time market demand chart, and a fully functional course search system.

It was built to demonstrate proficiency in **Frontend Architecture**, **API Integration**, and **Responsive Design**.

### ✨ Key Features

* **🎨 Dynamic Theming:** Toggle between a clean Light Mode and a glowing "Cyberpunk" Dark Mode.
* **🔍 Instant Search:** Filter courses by title or category in real-time.
* **📈 Live Market Data:** A dynamic line graph (using `Recharts`) that fetches **live GitHub Star counts** via the GitHub API to show which technologies are currently trending.
* **💡 Daily Inspiration:** Fetches random programming quotes from an external API for the Hero section.
* **📱 Fully Responsive:** Optimized for large desktops (1600px) down to mobile devices (414px).

---

## 🛠️ Tech Stack

* **Framework:** [React](https://reactjs.org/) (via Vite)
* **Styling:** CSS3 (Variables, Flexbox, Grid, Glassmorphism)
* **Data Visualization:** [Recharts](https://recharts.org/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **APIs Used:**
    * [GitHub API](https://api.github.com/) (For Tech Stats)
    * [Quotable API](https://api.quotable.io/) (For Hero Quotes)

---

## 💻 How to Run Locally

If you want to run this project on your own machine:

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/marketing-mojito-assignment.git](https://github.com/YOUR_USERNAME/marketing-mojito-assignment.git)
    cd marketing-mojito-assignment
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run the Development Server**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    Visit `http://localhost:5173` to see the app.

---

## 📂 Project Structure

src/ 
├── components/ 
│ ├── Hero.jsx # Video background & API Quote fetch 
│ ├── CourseList.jsx # Search logic & Course Grid 
│ ├── TechStats.jsx # Recharts Graph & GitHub API logic 
│ ├── Navbar.jsx # Theme toggle & Mobile Menu 
│ └── About.jsx # Static info section 
├── data/ 
│ └── courses.json # Dummy data for course listings 
├── App.jsx # Main layout & State management 
└── index.css # Global styles & Neon variables

---

## 👨‍💻 Author

**Your Name**
* [LinkedIn](YOUR_LINKEDIN_URL)
* [GitHub](https://github.com/YOUR_USERNAME)

---

*Built for the Marketing Mojito Internship Assessment.*