const notesContainer = document.getElementById('notes');
const colorModal = document.getElementById('colorModal');
const closeModal = colorModal.querySelector('.close');
let currentNote; // Variable to hold the current note being edited
let noteContent = 'New Note'; // Move this declaration outside the event listener

// Function to create a new note
function createNote(content = 'New Note', color = '#FFFFFF') {
    const note = document.createElement('div');
    note.className = 'note';
    note.draggable = true;
    note.style.backgroundColor = color; // Set the background color of the note
    note.innerHTML = `
        <span class="note-content">${content}</span>
        <span class="icon delete-icon" title="Delete">&#10060;</span>
        <span class="icon color-icon" title="Change Color">&#127912;</span>
    `;
    return note; // Return the note element
}

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Function to handle adding a new note
    document.getElementById('confirm-add-note').addEventListener('click', () => {
        colorModal.style.display = 'block'; // Open the color selection modal
    });

    // Add event listeners to color options
    const colorOptions = colorModal.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Create the note with the selected color
            currentNote = createNote(noteContent, option.style.backgroundColor); // Create a new note with the selected color
            notesContainer.appendChild(currentNote); // Append the note to the container
            colorModal.style.display = 'none'; // Close the modal after selection
        });
    });

    // Create initial notes for demonstration
    createNote('Note 1', '#FFB3BA');
    createNote('Note 2', '#BAE1FF');
    createNote('Note 3', '#B9FBC0');

    // Dark mode toggle functionality
    document.getElementById('toggle-dark-mode').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const notes = document.querySelectorAll('.note');
        notes.forEach(note => note.classList.toggle('dark-mode'));
    });
});
