import type { Note } from '../types';

const STORAGE_KEY = 'notes-app-data';

export const saveNotesToStorage = (notes: Note[]): void => {
  try {
    const serializedNotes = JSON.stringify(notes);
    localStorage.setItem(STORAGE_KEY, serializedNotes);
  } catch (error) {
    console.error('Error saving notes to localStorage:', error);
    throw new Error('Failed to save notes');
  }
};

export const loadNotesFromStorage = (): Note[] => {
  try {
    const serializedNotes = localStorage.getItem(STORAGE_KEY);
    if (serializedNotes === null) {
      return [];
    }
    const parsed = JSON.parse(serializedNotes);
    // Convert date strings back to Date objects
    return parsed.map(
      (
        note: Omit<Note, 'createdAt' | 'updatedAt'> & {
          createdAt: string;
          updatedAt: string;
        }
      ) => ({
        ...note,
        createdAt: new Date(note.createdAt),
        updatedAt: new Date(note.updatedAt),
      })
    );
  } catch (error) {
    console.error('Error loading notes from localStorage:', error);
    return [];
  }
};

export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
