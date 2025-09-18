import { useState } from 'react';
import { useNotes } from './hooks/useNotes';
import { NoteForm } from './components/NoteForm';
import type { NoteFormData } from './types';
import './App.css';

function App() {
  const { notes, isLoading, error, addNote } = useNotes();
  const [showForm, setShowForm] = useState(false);

  const handleCreateNote = (noteData: NoteFormData) => {
    addNote(noteData);
    setShowForm(false);
  };

  const handleCancelForm = () => {
    setShowForm(false);
  };

  if (isLoading) {
    return (
      <div className="app">
        <div className="loading">Loading notes...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <div className="error">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>My Notes</h1>
        <p>You have {notes.length} notes</p>
        <button
          onClick={() => setShowForm(true)}
          className="btn btn-primary create-note-btn"
        >
          + Create Note
        </button>
      </header>

      <main className="app-main">
        {notes.length === 0 ? (
          <div className="empty-state">
            <p>No notes yet. Create your first note!</p>
            <button
              onClick={() => setShowForm(true)}
              className="btn btn-primary"
            >
              + Create Your First Note
            </button>
          </div>
        ) : (
          <div className="notes-grid">
            {notes.map((note) => (
              <div key={note.id} className="note-card">
                <h3>{note.title}</h3>
                <p>{note.content.substring(0, 100)}...</p>
                <small>Updated: {note.updatedAt.toLocaleDateString()}</small>
              </div>
            ))}
          </div>
        )}
      </main>

      {showForm && (
        <NoteForm onSubmit={handleCreateNote} onCancel={handleCancelForm} />
      )}
    </div>
  );
}

export default App;
