AppVerse – A Modern App Store Platform

AppVerse is a sleek, responsive web application that showcases trending, top-rated, and installable apps. It features real-time search, dynamic charts, and manages installations using localStorage.

#Features

Layouts & Design

- A fully responsive design that looks great on any device
- A stylish header complete with a logo,navigation links,and a button for github contributions
- A custom footer that adds a creative touch
- Data-driven app display powered by a JSON array (12–20 app objects)

#Pages Overview

Home Page

- A hero banner featuring a title, description, and buttons for “App Store” and “Play Store”
- A states section with three state cards
- A Top Apps section highlighting 8 trending apps
- A “Show All” button that takes you to the All Apps page

All Apps Page

- Dynamically displays all app data
- Live search functionality that’s case-insensitive
- Shows the total number of apps available
- If no apps are found, it displays a “No App Found” message
- A “Sort by Downloads” dropdown (High–Low / Low–High)

App Details Page

- Provides complete app information: image, rating, downloads, and reviews
- An “Install” button that saves data to localStorage
- Once installed, the button changes to “Installed”
- A success toast message appears after installation
- A review chart created using the Recharts library
- Description section based on JSON dataG

Installation Page

- Displays all apps installed from localStorage
- An “Uninstall” button that removes the app from both the UI and localStorage
- Shows a toast notification after an app is uninstalled

Error & Loading

- A custom error page for invalid routes
- A loading animation during:
- Page navigation
- Search operations

Technologies used: React.js, React Router Dom, Tailwind CSS, Recharts, React Toastify, LocalStorage API.
