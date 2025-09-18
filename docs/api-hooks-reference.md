# API & Hooks Documentation

## useNotes Hook

The main custom hook that provides all notes management functionality.

### Import

```typescript
import { useNotes } from './hooks/useNotes';
```

### Return Values

| Property | Type | Description |
|----------|------|-------------|
| `notes` | `Note[]` | Array of all notes |
| `isLoading` | `boolean` | Loading state for initial data fetch |
| `error` | `string \| null` | Error message if operations fail |
| `addNote` | `(noteData: NoteFormData) => Note` | Creates a new note |
| `updateNote` | `(id: string, updates: Partial<NoteFormData>) => void` | Updates existing note |
| `deleteNote` | `(id: string) => void` | Deletes a note by ID |
| `getNoteById` | `(id: string) => Note \| undefined` | Retrieves specific note |

### Usage Example

```typescript
function MyComponent() {
  const { notes, addNote, updateNote, deleteNote, isLoading, error } = useNotes();
  
  const handleCreate = () => {
    const newNote = addNote({ title: 'My Note', content: 'Note content' });
    console.log('Created note:', newNote.id);
  };
  
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {notes.map(note => <div key={note.id}>{note.title}</div>)}
    </div>
  );
}
```

## Storage Utilities

### saveNotesToStorage

Persists notes array to localStorage.

```typescript
saveNotesToStorage(notes: Note[]): void
```

### loadNotesFromStorage

Loads notes from localStorage with date object conversion.

```typescript
loadNotesFromStorage(): Note[]
```

### generateId

Generates unique ID for new notes.

```typescript
generateId(): string
```

## TypeScript Interfaces

### Note

```typescript
interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
```

### NoteFormData

```typescript
interface NoteFormData {
  title: string;
  content: string;
}
```

### AppState

```typescript
interface AppState {
  notes: Note[];
  searchTerm: string;
  isLoading: boolean;
  error: string | null;
}
```

## Error Handling

All storage operations include try-catch blocks:

- Failed saves show "Failed to save notes" error
- Failed loads return empty array and log error
- Hook manages error state for UI display

## Data Persistence

- Notes auto-save on every change
- Uses localStorage key: 'notes-app-data'
- Date objects properly serialized/deserialized
- Graceful fallback to empty array if storage fails
