document.addEventListener('DOMContentLoaded', function(){
    var likeButton = document/this.getElementById('likeBtn');
    likeButton.addEventListener('click', function () {
        // Toggle the "active" class on click
        if (likeButton.classList.contains('active')) {
            likeButton.classList.remove('active');
        } else {
            likeButton.classList.add('active');
        }
    });
});

