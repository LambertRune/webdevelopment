// ... Your existing JavaScript ...

// Function to scroll to the top of the page smoothly
function scrollToTop() {
    // For modern browsers
    document.body.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });

    // For older browsers
    document.documentElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Show the scroll button when the user scrolls down
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var scrollBtn = document.querySelector(".scroll-btn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}
