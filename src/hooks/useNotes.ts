import { useState, useEffect } from 'react';
import type { Note, NoteFormData } from '../types';
import {
  saveNotesToStorage,
  loadNotesFromStorage,
  generateId,
} from '../utils/storage';

export const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load notes from localStorage on component mount
  useEffect(() => {
    try {
      const loadedNotes = loadNotesFromStorage();
      setNotes(loadedNotes);
    } catch {
      setError('Failed to load notes');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save notes to localStorage whenever notes change
  useEffect(() => {
    if (!isLoading) {
      try {
        saveNotesToStorage(notes);
        setError(null);
      } catch {
        setError('Failed to save notes');
      }
    }
  }, [notes, isLoading]);

  const addNote = (noteData: NoteFormData): Note => {
    const newNote: Note = {
      id: generateId(),
      title: noteData.title || 'Untitled',
      content: noteData.content,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    setNotes((prevNotes) => [newNote, ...prevNotes]);
    return newNote;
  };

  const updateNote = (id: string, updates: Partial<NoteFormData>): void => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id
          ? {
              ...note,
              ...updates,
              updatedAt: new Date(),
            }
          : note
      )
    );
  };

  const deleteNote = (id: string): void => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const getNoteById = (id: string): Note | undefined => {
    return notes.find((note) => note.id === id);
  };

  return {
    notes,
    isLoading,
    error,
    addNote,
    updateNote,
    deleteNote,
    getNoteById,
  };
};
