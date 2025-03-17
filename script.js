// Add a search bar dynamically
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.placeholder = 'Search subjects...';
  searchInput.style.margin = '10px';
  searchInput.style.padding = '8px';
  searchInput.style.width = '200px';

  const header = document.querySelector('header');
  header.appendChild(searchInput);

  // Filter subjects based on search input
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const subjectCards = document.querySelectorAll('.subject-card');

    subjectCards.forEach(card => {
      const subjectName = card.querySelector('h3').textContent.toLowerCase();
      if (subjectName.includes(searchTerm)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});