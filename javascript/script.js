// Select elements
const noteInput = document.getElementById("note-input");
const saveNoteButton = document.getElementById("save-note");
const notesContainer = document.getElementById("notes-container");

// Load notes from localStorage
const loadNotes = () => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notesContainer.innerHTML = "";
    notes.forEach((note, index) => createNoteElement(note, index));
};

// Save a new note
const saveNote = () => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const newNote = noteInput.value.trim();
    if (newNote) {
        notes.push(newNote);
        localStorage.setItem("notes", JSON.stringify(notes));
        noteInput.value = "";
        loadNotes();
        alert("Note saved!");
    } else {
        alert("Please write something before saving.");
    }
};

// Delete a note
const deleteNote = (index) => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    loadNotes();
    alert("Note deleted!");
};

// Edit a note
const editNote = (index) => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const updatedNote = prompt("Edit your note:", notes[index]);
    if (updatedNote !== null) {
        notes[index] = updatedNote.trim();
        localStorage.setItem("notes", JSON.stringify(notes));
        loadNotes();
        alert("Note updated!");
    }
};

// Create a note element
const createNoteElement = (note, index) => {
    const noteElement = document.createElement("div");
    noteElement.classList.add("note");

    const noteText = document.createElement("p");
    noteText.textContent = note;
    noteElement.appendChild(noteText);

    const noteActions = document.createElement("div");
    noteActions.classList.add("note-actions");

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit");
    editButton.onclick = () => editNote(index);
    noteActions.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deleteNote(index);
    noteActions.appendChild(deleteButton);

    noteElement.appendChild(noteActions);
    notesContainer.appendChild(noteElement);
};

// Event listener for saving a note
saveNoteButton.addEventListener("click", saveNote);

// Load notes on page load
window.onload = loadNotes;
