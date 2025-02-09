document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const searchBtn = document.getElementById("search-btn");
    const books = document.querySelectorAll(".book");

    function searchBooks() {
        const query = searchInput.value.toLowerCase();
        books.forEach(book => {
            const title = book.getAttribute("data-title").toLowerCase();
            if (title.includes(query)) {
                book.style.display = "block";
            } else {
                book.style.display = "none";
            }
        });
    }

    searchBtn.addEventListener("click", searchBooks);
    searchInput.addEventListener("input", searchBooks);
});
