import { useState } from 'react';
import { useNotes } from './hooks/useNotes';
import { NoteForm } from './components/NoteForm';
import type { NoteFormData, Note } from './types';
import './App.css';

function App() {
  const { notes, isLoading, error, addNote, updateNote, deleteNote } =
    useNotes();
  const [showForm, setShowForm] = useState(false);
  const [editingNote, setEditingNote] = useState<Note | null>(null);

  const handleCreateNote = (noteData: NoteFormData) => {
    if (editingNote) {
      updateNote(editingNote.id, noteData);
      setEditingNote(null);
    } else {
      addNote(noteData);
    }
    setShowForm(false);
  };

  const handleEditNote = (note: Note) => {
    setEditingNote(note);
    setShowForm(true);
  };

  const handleDeleteNote = (note: Note) => {
    if (window.confirm(`Are you sure you want to delete "${note.title}"?`)) {
      deleteNote(note.id);
    }
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingNote(null);
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
                <div className="note-content">
                  <h3>{note.title}</h3>
                  <p>{note.content.substring(0, 100)}...</p>
                  <small>Updated: {note.updatedAt.toLocaleDateString()}</small>
                </div>
                <div className="note-actions">
                  <button
                    onClick={() => handleEditNote(note)}
                    className="btn btn-edit"
                    title="Edit note"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => handleDeleteNote(note)}
                    className="btn btn-delete"
                    title="Delete note"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {showForm && (
        <NoteForm
          onSubmit={handleCreateNote}
          onCancel={handleCancelForm}
          editingNote={editingNote || undefined}
        />
      )}
    </div>
  );
}

export default App;
