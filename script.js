document.getElementById('no-btn').addEventListener('click', function() {
    document.getElementById('no-response').classList.remove('hidden');
});

document.getElementById('yes-btn').addEventListener('click', function() {
    window.location.href = "next_page.html"; // This will lead to the next page
});

