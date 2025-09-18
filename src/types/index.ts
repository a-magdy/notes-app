export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface NoteFormData {
  title: string;
  content: string;
}

export interface AppState {
  notes: Note[];
  searchTerm: string;
  isLoading: boolean;
  error: string | null;
}
