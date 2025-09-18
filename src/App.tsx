import { useNotes } from './hooks/useNotes';
import './App.css';

function App() {
  const { notes, isLoading, error } = useNotes();

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
      </header>

      <main className="app-main">
        {notes.length === 0 ? (
          <div className="empty-state">
            <p>No notes yet. Create your first note!</p>
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
    </div>
  );
}

export default App;
