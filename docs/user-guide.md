# User Guide - Notes App

## Getting Started

Welcome to your personal Notes App! This guide will walk you through all the features and how to use them effectively.

## Features Overview

### ✅ Create Notes

Add new notes with optional titles and required content.

### ✅ Edit Notes  

Modify existing notes with pre-filled forms.

### ✅ Delete Notes

Remove notes with confirmation to prevent accidents.

### ✅ Persistent Storage

Your notes are automatically saved and persist between sessions.

## How to Use

### Creating Your First Note

1. **Open the app** - You'll see the main interface
2. **Click "Create Note"** button (top right) or "Create Your First Note" if empty
3. **Fill out the form:**
   - **Title**: Optional - leave blank for "Untitled"
   - **Content**: Required - write your note content here
4. **Click "Create Note"** to save
5. **Your note appears immediately** in the notes grid

### Editing Existing Notes

1. **Find the note** you want to edit
2. **Click the edit button (✏️)** on the note card
3. **Form opens pre-filled** with current title and content
4. **Make your changes** to title and/or content
5. **Click "Update Note"** to save changes
6. **Note updates immediately** with new content and timestamp

### Deleting Notes

1. **Find the note** you want to delete
2. **Click the delete button (🗑️)** on the note card
3. **Confirmation dialog appears** asking if you're sure
4. **Click "OK"** to permanently delete or "Cancel" to keep
5. **Note disappears immediately** if confirmed

### Managing Your Notes

**Viewing Notes:**

- All notes display in a responsive grid
- See title, content preview (100 characters), and last updated date
- Grid adapts to your screen size (mobile, tablet, desktop)

**Note Information:**

- **Title**: Displayed prominently at the top
- **Content Preview**: First 100 characters with "..." if longer
- **Last Updated**: Shows when the note was last modified
- **Actions**: Edit and delete buttons in the bottom right

## Interface Guide

### Header Section

- **App Title**: "My Notes"
- **Note Count**: Shows how many notes you have
- **Create Button**: "Create Note" button (always visible)

### Main Content Area

- **Empty State**: Helpful message when you have no notes
- **Notes Grid**: Displays all your notes in cards
- **Note Cards**: Individual notes with content and actions

### Modal Form

- **Overlay**: Darkened background when form is open
- **Form Container**: White box with form fields
- **Dynamic Title**: "Create New Note" or "Edit Note"
- **Form Fields**: Title (optional) and Content (required)
- **Action Buttons**: Cancel and Create/Update buttons

## Tips for Best Experience

### Writing Effective Notes

- Use descriptive titles for easy identification
- Keep content focused on one topic per note
- Use the full content area - it auto-expands

### Organization

- Create notes for different topics, projects, or categories
- Use consistent naming conventions for related notes
- Regularly review and update your notes

### Technical Tips

- **Auto-Save**: Notes save automatically - no save button needed
- **Persistence**: Notes survive browser refreshes and restarts
- **Responsive**: Works great on phones, tablets, and computers
- **Fast**: No loading times after initial page load

## Keyboard Shortcuts

When the form is open:

- **Enter**: Submit form (from title field)
- **Escape**: Close form without saving
- **Tab**: Navigate between form fields

## Troubleshooting

### Common Issues

**Notes not saving:**

- Check browser console for errors
- Ensure localStorage is enabled
- Try refreshing the page

**Form not opening:**

- Click directly on the button
- Check if another form is already open

**Notes disappeared:**

- Check if accidentally deleted
- Try refreshing the browser
- Notes are stored locally - clearing browser data will remove them

### Browser Compatibility

Works best with modern browsers:

- Chrome 88+, Firefox 85+, Safari 14+, Edge 88+

## Data Management

### Backup Your Notes

Since notes are stored locally in your browser:

- Consider manually backing up important notes
- Browser data clearing will remove all notes
- Notes don't sync between devices

### Privacy

- All notes stored locally on your device
- No data sent to external servers
- Complete privacy and offline functionality
