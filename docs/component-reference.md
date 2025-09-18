# Component Documentation

## App Component

The main application component that orchestrates the entire notes app.

### Location

`src/App.tsx`

### State Management

- `showForm: boolean` - Controls modal form visibility
- `editingNote: Note | null` - Stores note being edited

### Key Functions

- `handleCreateNote()` - Handles both create and update operations
- `handleEditNote()` - Opens edit form with selected note
- `handleDeleteNote()` - Deletes note with confirmation
- `handleCancelForm()` - Closes form and resets edit state

### Layout Structure

```
App
├── Header (title, count, create button)
├── Main Content
│   ├── Empty State (when no notes)
│   └── Notes Grid (displays all notes)
│       └── Note Cards (individual notes with actions)
└── Modal Form (create/edit overlay)
```

---

## NoteForm Component

Modal form component for creating and editing notes.

### Location

`src/components/NoteForm.tsx`

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `onSubmit` | `(noteData: NoteFormData) => void` | Yes | Callback when form is submitted |
| `onCancel` | `() => void` | Yes | Callback when form is cancelled |
| `editingNote` | `Note` | No | Note data for editing (undefined for create) |

### Features

- Pre-fills form when editing existing note
- Dynamic title: "Create New Note" vs "Edit Note"
- Dynamic button text: "Create Note" vs "Update Note"
- Form validation (content required)
- Auto-resets after submission

### Usage Examples

**Create Mode:**

```tsx
<NoteForm 
  onSubmit={handleCreate} 
  onCancel={handleCancel} 
/>
```

**Edit Mode:**

```tsx
<NoteForm 
  onSubmit={handleUpdate} 
  onCancel={handleCancel}
  editingNote={selectedNote}
/>
```

### Form Fields

- **Title**: Optional text input (defaults to "Untitled")
- **Content**: Required textarea (6 rows)
- **Actions**: Cancel (secondary) and Submit (primary) buttons

---

## Note Card

Individual note display within the notes grid (part of App component).

### Structure

```
Note Card
├── Note Content
│   ├── Title (h3)
│   ├── Content Preview (100 chars max)
│   └── Last Updated Date
└── Note Actions
    ├── Edit Button (✏️)
    └── Delete Button (🗑️)
```

### Interactions

- **Hover Effect**: Card lifts with shadow
- **Edit Button**: Opens note in edit form
- **Delete Button**: Shows confirmation dialog

---

## Styling Architecture

### CSS Organization

- `src/index.css` - Global styles and resets
- `src/App.css` - Component-specific styles

### CSS Classes

**Layout Classes:**

- `.app` - Main container
- `.app-header` - Header section
- `.app-main` - Main content area
- `.notes-grid` - CSS Grid for notes
- `.note-card` - Individual note styling

**Component Classes:**

- `.note-form-overlay` - Modal backdrop
- `.note-form-container` - Modal content
- `.note-content` - Note text content
- `.note-actions` - Button container

**Button Classes:**

- `.btn` - Base button styles
- `.btn-primary` - Primary action button
- `.btn-secondary` - Secondary action button
- `.btn-edit` - Edit button styling
- `.btn-delete` - Delete button styling

### Responsive Design

- Mobile-first approach
- Breakpoint at 768px for tablets/desktop
- Grid adapts from single column to multi-column
- Touch-friendly button sizes on mobile
