const buttons = document.querySelectorAll('.filter-buttons button');
const images = document.querySelectorAll('.gallery img');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');

    images.forEach(img => {
      const category = img.getAttribute('data-category');
      if (filter === 'all' || filter === category) {
        img.style.display = 'block';
      } else {
        img.style.display = 'none';
      }
    });
  });
})