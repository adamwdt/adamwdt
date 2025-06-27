// Mini Video Player functionality
document.addEventListener('DOMContentLoaded', function() {
    const miniPlayer = document.querySelector('.mini-player-container');
    const closeButton = document.querySelector('.mini-player-close');
    const videoIframe = document.querySelector('.mini-player-video');
    
    // YouTube video IDs for different movies
    const trailerVideos = {
        'inception': 'YoHD9XEInc0',
        'shawshank': '6hB3S9bIaco',
        'truman-show': 'dlnmQbPGuls',
        'pacific-rim': '5guMumPFBag',
        'captain-america': '1pHDWnXmK7Y',
        'spiderman': 'cqGjhVJWtEg'
    };
    
    // Get current movie name from URL
    const currentPage = window.location.pathname.split('/').pop().split('.')[0];
    const videoId = trailerVideos[currentPage] || ''; // Default video
    
    // Load the video automatically (player starts visible by default)
    videoIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=0`;
    
    // Close button functionality
    closeButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        miniPlayer.classList.add('hidden');
        videoIframe.src = ''; // Stop the video
    });
    
    // Click anywhere outside the mini-player to reopen it
    document.addEventListener('click', function(e) {
        if (!miniPlayer.contains(e.target) && miniPlayer.classList.contains('hidden')) {
            miniPlayer.classList.remove('hidden');
            videoIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=0`;
        }
    });
});
