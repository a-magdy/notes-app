import { useState, useEffect } from 'react';
import type { NoteFormData, Note } from '../types';

interface NoteFormProps {
  onSubmit: (noteData: NoteFormData) => void;
  onCancel: () => void;
  editingNote?: Note;
}

export const NoteForm = ({
  onSubmit,
  onCancel,
  editingNote,
}: NoteFormProps) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Set initial values when editing
  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [editingNote]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (content.trim()) {
      onSubmit({
        title: title.trim() || 'Untitled',
        content: content.trim(),
      });

      // Reset form
      setTitle('');
      setContent('');
    }
  };

  return (
    <div className="note-form-overlay">
      <div className="note-form-container">
        <form onSubmit={handleSubmit} className="note-form">
          <h2>{editingNote ? 'Edit Note' : 'Create New Note'}</h2>

          <div className="form-group">
            <label htmlFor="title">Title (optional)</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter note title..."
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">Content *</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your note here..."
              className="form-textarea"
              rows={6}
              required
            />
          </div>

          <div className="form-actions">
            <button
              type="button"
              onClick={onCancel}
              className="btn btn-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!content.trim()}
            >
              {editingNote ? 'Update Note' : 'Create Note'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
