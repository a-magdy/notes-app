# Notes App - Project Overview & Architecture

## Project Summary

A modern, responsive notes application built with React, TypeScript, and Vite. The app provides full CRUD functionality for managing personal notes with persistent storage.

## Technology Stack

- **Frontend Framework**: React 19.1.1 with TypeScript
- **Build Tool**: Vite 7.1.6
- **Storage**: Browser localStorage
- **Styling**: CSS3 with modern responsive design
- **Code Quality**: ESLint + Prettier
- **Development**: Hot Module Replacement (HMR)

## Core Features

- ✅ **Create Notes**: Add new notes with title and content
- ✅ **Read Notes**: View all notes in a responsive grid layout
- ✅ **Update Notes**: Edit existing notes with pre-filled forms
- ✅ **Delete Notes**: Remove notes with confirmation dialog
- ✅ **Persistent Storage**: Auto-save to localStorage
- ✅ **Responsive Design**: Works on desktop, tablet, and mobile

## Project Structure

```
notes-app/
├── src/
│   ├── components/          # Reusable UI components
│   │   └── NoteForm.tsx     # Modal form for create/edit
│   ├── hooks/               # Custom React hooks
│   │   └── useNotes.ts      # Notes CRUD operations
│   ├── types/               # TypeScript type definitions
│   │   └── index.ts         # Note and form interfaces
│   ├── utils/               # Utility functions
│   │   └── storage.ts       # localStorage operations
│   ├── App.tsx              # Main application component
│   ├── App.css              # Application styles
│   ├── main.tsx             # React app entry point
│   └── index.css            # Global styles
├── docs/                    # Project documentation
├── public/                  # Static assets
├── package.json             # Dependencies and scripts
└── vite.config.ts           # Vite configuration
```

## Architecture Patterns

- **Component-Based**: Modular, reusable React components
- **Custom Hooks**: Business logic separated from UI components
- **Type Safety**: Full TypeScript coverage for better DX
- **Local Storage**: Client-side persistence without backend
- **Responsive Design**: Mobile-first CSS approach

## Data Flow

1. **App.tsx** manages global state and coordinates components
2. **useNotes** hook handles all CRUD operations and localStorage
3. **NoteForm** component handles user input with validation
4. **storage.ts** utilities manage localStorage serialization
5. **Types** ensure type safety across the application

## Key Design Decisions

- **localStorage**: Simple persistence without backend complexity
- **Modal Forms**: Better UX for create/edit operations
- **Confirmation Dialogs**: Prevent accidental data loss
- **Responsive Grid**: Optimal viewing on all screen sizes
- **TypeScript**: Better developer experience and code reliability
