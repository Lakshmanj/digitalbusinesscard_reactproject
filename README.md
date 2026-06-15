# React Solo Project: Digital Business Card

## Objective
Build a fully responsive Digital Business Card from a completely blank React setup. This project tests the ability to break down a UI into reusable, custom React components and compose them cleanly.

## Architecture & Component Requirements

The application must be composed of the following component structure, housed inside a `components` folder:

* **`App.jsx`**: The main container component that imports and renders all the sections below.
* **`Info.jsx`**: The top section. 
    * Must include a professional headshot/photo.
    * Must include full name (e.g., Lakshman Jairam).
    * Must include current job title or agency (e.g., Full-Stack Developer / Founder of Velos Digital).
    * Must include call-to-action buttons (Email and LinkedIn).
* **`About.jsx`**: A professional bio section.
    * A brief paragraph detailing development focus, tech stack preferences (React, Next.js, Spring Boot), and current professional goals.
* **`Interests.jsx`**: A personal hobbies section.
    * A brief paragraph or list highlighting off-screen passions (e.g., Unity game development, fragrance chemistry, R&B/Hip-hop).
* **`Footer.jsx`**: The bottom bar.
    * Must contain functional links/icons to other social platforms (GitHub, Twitter, agency website, etc.).

## Styling Guidelines
* **No pre-built UI libraries:** All styling must be done using custom CSS.
* **Responsive Units:** Utilize `rem` units for padding, margins, and typography to ensure accessibility.
* **Layout:** Utilize CSS Flexbox for aligning items within components and centering the main card on the screen.
* **Colors & Typography:** Match a clean, modern aesthetic (dark mode is recommended, using Inter or similar sans-serif Google Fonts).

## Setup Instructions
1. Initialize a new React project (using Vite is recommended: `npm create vite@latest`).
2. Clear out the boilerplate code in `App.jsx` and `App.css`.
3. Create the `components` directory.
4. Build and export the four required functional components.
5. Import them into `App.jsx` and arrange them in order.