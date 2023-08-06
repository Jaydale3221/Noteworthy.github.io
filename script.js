document.addEventListener('DOMContentLoaded', function () {
    const notesList = document.getElementById('notes');
    const noteTitleInput = document.getElementById('note-title');
    const editor = document.getElementById('editor');
    const saveButton = document.getElementById('save-button');

    saveButton.addEventListener('click', function () {
        const title = noteTitleInput.value.trim();
        const content = editor.innerHTML.trim();

        if (title && content) {
            const noteItem = document.createElement('li');
            noteItem.innerHTML = `
                <strong>${title}</strong>
                <p>${content}</p>
                <button class="delete-button">Delete</button>
            `;
            notesList.appendChild(noteItem);

            noteTitleInput.value = '';
            editor.innerHTML = '';

            const deleteButton = noteItem.querySelector('.delete-button');
            deleteButton.addEventListener('click', function () {
                notesList.removeChild(noteItem);
            });
        }
    });
});
