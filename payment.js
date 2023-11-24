// payment.js

document.addEventListener('DOMContentLoaded', function () {
    let pricingDetails; // Variable to store pricing details
    let cartItems; // Variable to store cart items

    // Fetch pricing details from the books.json file
    fetch('books.json')
        .then(response => response.json())
        .then(data => {
            pricingDetails = data;

            // Assume you have a function to fetch cart items from the shopping cart
            // Replace this with your actual method to fetch cart items
            fetchCartItems();
        })
        .catch(error => console.error('Error fetching pricing details:', error));

    function fetchCartItems() {
        // Assume you have a method to fetch cart items
        // Replace the following line with your actual method to fetch cart items
        // This is a placeholder; adjust it based on your actual data retrieval mechanism
        cartItems = [
            {
                "id": 1,
                "title": "To Kill a Mockingbird",
                "quantity": 2
            },
            {
                "id": 2,
                "title": "1984",
                "quantity": 1
            },
            {
                "id": 3,
                "title": "The Great Gatsby",
                "quantity": 3
            },
        ];

        // Once cart items are fetched, generate the receipt
        generateReceipt();
    }

    function generateReceipt() {
        const bookDetailsBody = document.getElementById('bookDetailsBody');
        const totalAmountElement = document.getElementById('totalAmount');

        let totalAmount = 0;

        cartItems.forEach(item => {
            const bookDetails = pricingDetails.find(book => book.id === item.id);

            if (bookDetails) {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.title}</td>
                    <td>$${(item.quantity * bookDetails.price).toFixed(2)}</td>
                `;

                bookDetailsBody.appendChild(row);
                totalAmount += item.quantity * bookDetails.price;
            }
        });

        totalAmountElement.textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
    }
});
