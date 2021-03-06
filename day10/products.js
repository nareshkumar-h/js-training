import ProductSearchAPI from './ProductApi.js';
import ProductOrderAPI from './productOrder.js';

//Display the product details  in a table
function displayProducts(products) {

    const tbody = document.querySelector("#products-tbl");
    tbody.innerHTML= "";
    let content = "";
    let i = 1;
    for (let p of products) {

        let temp = ` <tr>
        <td>${i}</td>
        <td>${p.name}</td>
        <td>${p.brandName}</td>
        <td>${p.ram}</td>
        <td>${p.rating}</td>
        <td>${p.price}</td>
        <td><button type="button" id="order-btn1" data-product-id=${p.id}>Order</button>
    </tr>`;

        content += temp;
        i++;
    }
    // console.log(content);
    tbody.innerHTML = content;

     //Assign Listeners
document.querySelectorAll("#order-btn1").forEach(element => {
    let productId = parseInt(element.getAttribute("data-product-id"));
   console.log(productId);
    element.addEventListener('click', e=> {
        placeOrder( productId);
    });
});

}

function placeOrder(productId) {
    console.log("placing order", productId);
    let loggedInUser = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
    let userId = loggedInUser.id;
    let orderObj = { productId: productId, qty: 1, userId: userId };
    console.log(orderObj);
    const productOrderAPI = new ProductOrderAPI();
    productOrderAPI.orderProduct(orderObj).then(response => {
        console.log(response.data);
        window.location.href="orders.html";            

    }).catch(err => {
        console.error(err.message);
    });
}

// Get the products from the REST API
function loadProducts() {
    const productSearchAPI = new ProductSearchAPI();
    productSearchAPI.getAllProducts().then(response => {
        console.table(response.data);
        displayProducts(response.data);
    });
}
function filterProducts(filterObj) {
    const productSearchAPI = new ProductSearchAPI();
    productSearchAPI.searchProducts(filterObj).then(response => {
        console.table(response);
        displayProducts(response);
    }).catch(err => {
        console.error(err);
    });
}

function searchProducts() {
    let brandNames = [];
    document.getElementsByName("brandNames").forEach(e => {
        if (e.checked) {
            brandNames.push(e.value);
        }
    });

    let filterObj = { brandName: brandNames };
    console.log(filterObj);
    filterProducts(filterObj);
}

document.querySelector("#searchBtn").addEventListener('click', event => {
    event.preventDefault();
    searchProducts();
});

loadProducts();
