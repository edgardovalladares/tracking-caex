# 📦 CAEX Tracking System

A modern, high-performance package tracking application built with **Astro** and **Tailwind CSS**. This system provides a seamless interface for customers to track their shipments via the Loginext API, featuring a polished UI and intelligent data handling.

## ✨ Features

- **🚀 High Performance**: Built on Astro for lightning-fast server-side rendering.
- **🎨 Modern UI**: Clean, responsive interface styled with Tailwind CSS, matching premium logistical dashboards.
- **🔄 Dual-Mode Data Visualization**:
  - **Demo Mode**: Rich, detailed timeline visualization for demonstration purposes (try code: `A412284542-1`).
  - **Live Mode**: Real-time data fetching from the Loginext API for all other tracking numbers.
- **🔒 Secure API Proxy**: Node.js intermediary to handle secure authentication and prevent CORS issues.
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices.

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) (v5.x)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Runtime**: Node.js (via `@astrojs/node` adapter)
- **Icons**: Standard SVG & Google Fonts (Inter)

## 📂 Project Structure

```bash
tracking-caex/
├── public/              # Static assets (favicons, etc.)
├── src/
│   ├── pages/
│   │   ├── api/
│   │   │   └── track.ts   # 📡 API Proxy: Handles requests to Loginext
│   │   └── index.astro    # 🏠 Main Application: UI & Frontend Logic
│   └── styles/
│       └── global.css     # 🎨 Tailwind imports & global styles
├── package.json         # Dependencies & scripts
└── astro.config.mjs     # Astro configuration
```

## 🚀 Getting Started

Follow these steps to set up the project locally:

### 1. Prerequisites
- Node.js (v18 or higher)
- npm (Node Package Manager)

### 2. Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/edgardovalladares/tracking-caex.git
cd tracking-caex
npm install
```

### 3. Development
Start the local development server:

```bash
npm run dev
```
Access the app at `http://localhost:4321`.

### 4. Build for Production
To build the application for deployment:

```bash
npm run build
```
To preview the production build locally:
```bash
npm run preview
```

## 🧠 How It Works

### Frontend Logic (`index.astro`)
The frontend is designed to be fail-safe and user-friendly. It handles the user input and determines how to render the data:

1.  **Input**: User enters a tracking number (e.g., `A412284542-1`).
2.  **Request**: The app sends a POST request to our internal `/api/track` endpoint.
3.  **Visualization Logic**:
    *   **Demo Scenario**: If the specific demo ID is detected, the app renders a complete, rich timeline with mock events (Recibido, En Tránsito, Entregado) to showcase the UI's full potential.
    *   **Real Data**: For any other ID, it displays the raw data returned by the API (current status, branch, driver). If the API returns sparse data (no history), the UI adapts to show only what is verified.

### Backend Proxy (`api/track.ts`)
This server-side endpoint acts as a secure bridge between the client and the Loginext API:
-   **Security**: Hides the upstream API credentials (Basic Auth) from the client browser.
-   **CORS**: Solves Cross-Origin Resource Sharing issues by making the request from the server.
-   **Error Handling**: Catches upstream errors and returns clean JSON responses to the frontend.

## 🤝 Contributing

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---
Built with ❤️ for CAEX Logistics.
