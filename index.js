document.addEventListener("DOMContentLoaded", function () {
    // Function to dynamically load book information from the JSON file
    function loadBooks() {
        const bookDetailsRow = document.getElementById("bookDetailsRow");

        // Fetch book data from the JSON file
        fetch('books.json')
            .then(response => response.json())
            .then(data => {
                data.forEach(book => {
                    // Create a Bootstrap card for each book
                    const card = document.createElement("div");
                    card.classList.add("col-md-4", "book-card");

                    card.innerHTML = `
                        <div class="card">
                            <img src="${book.cover_image}" class="card-img-top" alt="${book.title}">
                            <div class="card-body">
                                <h5 class="card-title book-card-title">${book.title}</h5>
                                <p class="card-text book-card-author">${book.author}</p>
                                <p class="card-text">${book.description}</p>
                                <p class="card-text book-card-price">$${book.price.toFixed(2)}</p>
                                <button class="btn btn-primary add-to-cart" data-book-id="${book.id}">Add to Cart</button>
                            </div>
                        </div>
                    `;

                    // Append the card to the row
                    bookDetailsRow.appendChild(card);
                });

                // Add event listeners for "Add to Cart" buttons
                const addToCartButtons = document.querySelectorAll(".add-to-cart");
                addToCartButtons.forEach(button => {
                    button.addEventListener("click", function () {
                        const bookId = button.getAttribute("data-book-id");
                        addToCart(bookId);
                    });
                });
            })
            .catch(error => console.error('Error fetching book data:', error));
    }

    // Function to add a book to the cart and redirect to the cart page
    function addToCart(bookId) {
        // Implement your logic to add the book to the cart
        // For now, let's assume there's a function addToCart in another script
        // that handles adding books to the cart

        // Redirect to the cart page after adding the book
        window.location.href = 'cart.html';
    }

    // Call the function to load books when the page is loaded
    loadBooks();
});
