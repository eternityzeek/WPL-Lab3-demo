document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('wish-form');
    const wishesList = document.getElementById('wishes-list');

    form.addEventListener('submit', addWish);
    wishesList.addEventListener('click', manageWish);

    function addWish(e) {
        e.preventDefault();
        const wishInput = document.getElementById('wish');
        const wishText = wishInput.value.trim();
        if (wishText === '') return;
        const wishItem = document.createElement('div');
        wishItem.classList.add('wish');
        wishItem.innerHTML = `
            <span>${wishText}</span>
            <button class="delete-btn">Delete</button>
            <button class="edit-btn">Edit</button>
        `;
        wishesList.appendChild(wishItem);
        wishInput.value = '';
    }

    function manageWish(e) {
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
        }
        if (e.target.classList.contains('edit-btn')) {
            const span = e.target.parentElement.querySelector('span');
            const newWish = prompt('Edit your wish:', span.textContent);
            if (newWish !== null && newWish.trim() !== '') {
                span.textContent = newWish.trim();
            }
        }
    }
});
