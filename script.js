// For big-small effect on option containers
const optGroup = document.querySelectorAll('.option');
optGroup.forEach(opt => {
    opt.addEventListener('mouseenter', () => {
        optGroup.forEach(o => {
            if (o !== opt) o.classList.add('small');
        });
    });
    opt.addEventListener('mouseleave', () => {
        optGroup.forEach(o => o.classList.remove('small'));
    });
});

// For sub-options inside stationery page
const subGroup = document.querySelectorAll('.sub-option');
subGroup.forEach(opt => {
    opt.addEventListener('mouseenter', () => {
        subGroup.forEach(o => {
            if (o !== opt) o.classList.add('small');
        });
    });
    opt.addEventListener('mouseleave', () => {
        subGroup.forEach(o => o.classList.remove('small'));
    });
});

// Navigation function
function goTo(page) {
    window.location.href = page;
}

// For item detail (example)
function goToItem(page) {
    window.location.href = page;
}
function goTo(page) {
  window.location.href = page;
}
