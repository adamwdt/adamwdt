document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    
    // Function to perform search
    function performSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const movieCards = document.querySelectorAll('.movie-card');
        
        if (searchTerm === '') {
            // Show all movies if search is empty
            movieCards.forEach(card => {
                card.style.display = 'block';
            });
            return;
        }
        
        let found = false;
        
        movieCards.forEach(card => {
            const title = card.querySelector('h2 a').textContent.toLowerCase();
            const synopsis = card.querySelector('.movie-content p').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || synopsis.includes(searchTerm)) {
                card.style.display = 'block';
                found = true;
            } else {
                card.style.display = 'none';
            }
        });
        
        if (!found) {
            
        }
    }
    
    
    searchInput.addEventListener('input', performSearch);
    
    
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            searchInput.value = '';
            performSearch();
        }
    });
});