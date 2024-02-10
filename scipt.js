const billingTable = document.getElementById('billing-table');
const customerName = document.getElementById('customer-name');
const productId = document.getElementById('product-id');
const quantity = document.getElementById('quantity');
const addProduct = document.getElementById('add-product');
const calculateTotal = document.getElementById('calculate-total');
const total = document.getElementById('total');

// Initialize product list
const productList = [
    { id: '001', name: 'Product 1', price: 10 },
    { id: '002', name: 'Product 2', price: 20 },
    { id: '003', name: 'Product 3', price: 30 },
    { id: '004', name: 'Product 4', price: 40 },
    { id: '005', name: 'Product 5', price: 50 },
    { id: '006', name: 'Product 6', price: 60 },
    { id: '007', name: 'Product 7', price: 70 },
    { id: '008', name: 'Product 8', price: 80 },
    { id: '009', name: 'Product 9', price: 90 },
    { id: '010', name: 'Product 10', price: 100 },
    { id: '011', name: 'Product 11', price: 110 },
    { id: '012', name: 'Product 12', price: 120 },
    { id: '013', name: 'Product 13', price: 130 },
    { id: '014', name: 'Product 14', price: 140 },
    { id: '015', name: 'Product 15', price: 150 },
    { id: '016', name: 'Product 16', price: 160 },
    { id: '017', name: 'Product 17', price: 170 },
    { id: '018', name: 'Product 18', price: 180 },
];


addProduct.addEventListener('click', () => {
    const product = productList.find((p) => p.id === productId.value);
    if (product) {
        const tr = document.createElement('tr');
        const tdName = document.createElement('td');
        const tdPrice = document.createElement('td');
        const tdQuantity = document.createElement('td');
        const tdTotal = document.createElement('td');
        tdName.textContent = product.name;
        tdPrice.textContent = `$${product.price}`;
        tdQuantity.textContent = quantity.value;
        tdTotal.textContent = `$${product.price * quantity.value}`;
        tr.appendChild(tdName);
        tr.appendChild(tdPrice);
        tr.appendChild(tdQuantity);
        tr.appendChild(tdTotal);
        billingTable.appendChild(tr);
    }
});


calculateTotal.addEventListener('click', () => {
    // You can add server-side validation here
    window.location.href = 'billing.html?name=' + encodeURIComponent(customerName.value);
});


const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('name')) {
    customerName.value = decodeURIComponent(urlParams.get('name'));
    calculateTotal.click();
}