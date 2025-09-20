# TechFlow Solutions - Smart Home Automation & IoT Services

## Overview

TechFlow Solutions is a modern tech company website built with React, TypeScript, and a custom architecture pattern. The application showcases smart home automation, IoT solutions, domotic systems, and AI chatbot services through an interactive carousel-based interface. The project emphasizes clean design principles inspired by companies like Linear and Notion, featuring a bright, minimalist aesthetic with futuristic elements.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, using Vite for development and building
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Custom component library built on Radix UI primitives with shadcn/ui styling
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **State Management**: Custom SAM (State-Action-Model) pattern implementation with reactive stores

### Design System
- **Component Library**: shadcn/ui components with custom theming
- **Typography**: Inter and Space Grotesk fonts from Google Fonts
- **Color System**: HSL-based color palette with light/dark mode support
- **Spacing**: Tailwind utility classes with standardized spacing units (2, 4, 6, 8, 12, 16)
- **Theme Management**: CSS custom properties with JavaScript-controlled theme switching

### Custom Architecture Patterns
- **Blueprint Pattern**: Hierarchical component organization where each major UI section has a corresponding Blueprint class that manages business logic
- **SAM Stores**: State-Action-Model pattern for predictable state management with reactive subscriptions
- **Store Types**:
  - ThemeStore: Manages light/dark mode with persistence
  - CarouselStore: Handles service carousel state and auto-play functionality
  - ContentStore: Manages dynamic content display and loading states

### Data Layer
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema**: User management with username/password authentication
- **Storage Interface**: Abstracted storage layer with in-memory fallback for development

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Development**: Vite middleware integration for HMR and development server
- **API Structure**: RESTful endpoints with /api prefix
- **Error Handling**: Centralized error middleware with structured error responses

## External Dependencies

### Core Dependencies
- **@tanstack/react-query**: Server state management and caching
- **@neondatabase/serverless**: Serverless PostgreSQL driver for production database
- **drizzle-orm**: Type-safe ORM with PostgreSQL support
- **wouter**: Lightweight routing library

### UI & Design
- **@radix-ui/***: Unstyled, accessible UI primitives (accordion, dialog, dropdown, etc.)
- **@mui/material**: Material-UI components for enhanced UI elements
- **@emotion/react**: CSS-in-JS styling for Material-UI components
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Tools
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **esbuild**: Fast JavaScript bundling for production
- **@replit/vite-plugin-***: Replit-specific development enhancements

### Database & Storage
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **drizzle-kit**: Database migration and schema management tools

### Fonts & Assets
- **Google Fonts**: Inter and Space Grotesk font families
- **Generated Images**: AI-generated service images stored in attached_assets directory