// Select elements
const noteInput = document.getElementById('noteInput');
const saveButton = document.getElementById('saveButton');
const notesContainer = document.getElementById('notesContainer');

// Function to load notes from localStorage
function loadNotes() {
    const notes = JSON.parse(localStorage.getItem('notes')) || []; // Get notes or set to empty array
    notesContainer.innerHTML = ''; // Clear the container
    notes.forEach((note, index) => {
        const noteDiv = document.createElement('div');
        noteDiv.className = 'note';
        noteDiv.textContent = note;
        notesContainer.appendChild(noteDiv);
    });

    // Debugging: Log loaded notes
    console.log('Loaded Notes:', notes);
}

// Function to save a new note
function saveNote() {
    const note = noteInput.value.trim();
    if (!note) {
        alert('Please write a note before saving!');
        return;
    }
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes)); // Save to localStorage
    noteInput.value = ''; // Clear input field
    loadNotes();

    // Debugging: Log saved note
    console.log('Saved Note:', note);
}

// Add event listener to the save button
saveButton.addEventListener('click', saveNote);

// Load notes on page load
loadNotes();
