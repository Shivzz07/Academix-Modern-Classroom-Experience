# Academix — A Modern Classroom Experience

Academix is a Gen Z–inspired productivity and learning platform that reimagines the classroom dashboard as an engaging, game-like experience. Instead of static to-do lists and outdated ERP-style interfaces, Academix turns tasks into quests, progress into Aura points, and daily usage into something students actually look forward to.

**Live demo:** [academix-modern-classroom-experience.vercel.app](https://academix-modern-classroom-experience.vercel.app/)

---

## Overview

Academix started as a self-directed React project with a simple goal: what if a student dashboard felt fun to open every day? Every part of the UI, from the interactions to the underlying logic, was designed and built independently, without relying on AI-generated code or pre-built templates for core functionality.

The result is a platform that blends task management with gamification, personalization, and a touch of AI-driven fun.

---

## Features

### 🗓️ Quest-Based Task Management
Tasks are represented as quests on a custom-built calendar (not a standard date picker). Each quest has a title, detailed content, and a deadline set by duration. Quests can be accepted, rejected, or completed, and different months carry distinct color themes and layouts to keep the experience visually fresh.

### ⚡ Aura Points System
Every accepted or completed quest earns Aura, a visible, trackable currency of progress that lives in the navbar. It turns simple task completion into a running score of momentum.

### 🎨 Customizable Dashboard
A Mac-inspired desktop interface with:
- Switchable themes and mood-based wallpapers (static and animated)
- A built-in drawing tool — sketch directly on a transparent dashboard or a plain preset background
- A live 24-hour clock, current date, and time-based rotating quotes

### 🤖 AI Gossip Feature
Eight characters, each with a distinct personality, fetch real (non-political) news from the internet and convert it into an in-character conversation. The personality-to-response logic was built from scratch rather than using a pre-packaged AI chat wrapper.

### 🏆 Leaderboards (Preview)
A full S–F tier ranking system based on Aura earned, quests failed, and completion rate. Currently in preview mode, full functionality is planned for a future release once there's an active user base to meaningfully rank.

### 📱 Responsive Experience
Core functionality (quest acceptance, tracking, Aura) is accessible on mobile, with a simplified layout optimized for smaller screens.

---

## Tech Stack

- **Frontend:** React, Vite
- **Styling:** Tailwind CSS
- **Auth & Database:** Firebase Authentication, Firestore
- **Deployment:** Vercel

---

## Project Structure

```
├── api/          # Backend/serverless functions
├── public/       # Static assets
├── src/          # Application source code (components, logic, styles)
├── vite.config.js
├── tailwind.config.js
└── vercel.json
```

---

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
git clone https://github.com/Shivzz07/Academix-Modern-Classroom-Experience.git
cd Academix-Modern-Classroom-Experience
npm install
```

### Environment Setup
Create a `.env` file in the root directory with your Firebase project credentials:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### Run Locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173` by default.

---

## Roadmap

- Custom wallpaper uploads
- Drag-to-rearrange dashboard icons
- Fully functional leaderboard system
- Additional gamification and emote options
- Continued mobile experience improvements

---

## Status

Academix is live and actively evolving. This is a solo-built project, and features are being refined based on real usage and feedback post-launch.

---

## Feedback

If you try Academix and have thoughts on design, usability, performance, or features you'd like to see next, feel free to open an issue or reach out. Every suggestion helps shape where this goes next.

---

## License

This project is currently unlicensed. All rights reserved by the author.
