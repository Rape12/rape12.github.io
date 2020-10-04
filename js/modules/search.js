window.addEventListener('load', () => {
    const search = (btnSelector, searchSelector) => {
        let btn = document.querySelector(btnSelector),
            search = document.querySelector(searchSelector)
        btn.addEventListener('click', () => {
            search.classList.toggle('search-active');
            btn.classList.toggle('search-icon--active');
        });
    };

search('.search-icon', '.search');
});