const tab = (tabSelector, contentSelector) => {
    let tab = document.querySelectorAll(tabSelector);
    let content = document.querySelectorAll(contentSelector);

    function showTabContent(i = 0) {
        content[i].style.display = 'block';
        tab[i].classList.add('tab-active');
    }

    function closeTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
    });

        tab.forEach(item => {
            item.classList.remove('tab-active');
    });
    }
    closeTabContent();
    showTabContent();


    tab.forEach((item, index) => {
        item.addEventListener('click', (e) => {
        closeTabContent();
        showTabContent(index);
    });
 });
};

tab(".tab", ".tab-content");
