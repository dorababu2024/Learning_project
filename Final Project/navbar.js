function setActive(element) {
    // Remove active class from all dropdown items
    const items = document.querySelectorAll('.custom-dropdown-content a');
    items.forEach(item => {
        item.classList.remove('active');
    });

    // Add active class to the clicked item
    element.classList.add('active');
}