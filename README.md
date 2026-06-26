# Medical AI Project

## Project Overview

An AI-powered medical guidance web application built with Next.js and Groq AI.

---

###### DEVELOPER INSTRUCTIONS
##### SCROLL TO COMMANDS TO VIEW DEVELOPER ACTIONS

---

# Folder Structure

## /public
Stores images, logos, icons, and other static files.

## /src
Contains all application source code.

---

# /src/app

## page.tsx
The main homepage users see.

## layout.tsx
Defines the global layout shared across every page.

## globals.css
Contains global colors, fonts, and styling.

## /api/chat/route.ts
Receives chat messages and sends them to the AI.

---

# /src/components

Contains reusable UI components.

Example components:
- Navbar.tsx — Top navigation bar.
- Hero.tsx — Landing page hero section.
- ChatWindow.tsx — Main AI chat interface.
- MessageBubble.tsx — Individual chat messages.
- Footer.tsx — Website footer.
- FeatureCard.tsx — Reusable feature cards.

---

# /src/lib

## groq.ts
Initializes the Groq AI client.

---

# /src/hooks

Stores reusable React hooks.

---

# /src/utils

Stores helper functions used throughout the app.

---

# /src/types

Stores shared TypeScript interfaces and types.

---

# Root Files

## .env.local
Stores secret API keys and environment variables.

## package.json
Lists project dependencies and npm commands.

## package-lock.json
Locks dependency versions for consistent installs.

## tsconfig.json
Configures TypeScript.

## next.config.ts
Configures Next.js.

## eslint.config.mjs
Configures code linting.

## README.md
Project documentation.

---

# npm Commands

npm install
Installs project dependencies.

npm run dev
Starts the development server. (AND RUNS THE PROJECT)

npm run build
Creates a production build.

npm start
Runs the production build locally.