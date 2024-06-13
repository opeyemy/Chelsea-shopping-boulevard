document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.navbar ul').classList.toggle('show');
});
document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.navbar ul').classList.toggle('show');
});

document.querySelectorAll('.product button').forEach(button => {
  button.addEventListener('click', function() {
      alert('Added to cart!');
  });
});

function showRegisterNow() {
  var message = document.getElementById('Register Now');
  message.style.display = 'block';
}
// product 
// carts
let cart =[];

let cart =JSON.parse(localStorage.getItem("cart"))||[]

function addToCart(imageUrl,productName,price) {
  let item={
    image:imageUrl,
    name:productName,
    price:price
  };
  cart.push(item);
  updateCart();
}
localStorage.setItem("cart",JSON.stringify)

function updateCart() {
  let cartItemElement=document.getElementById('cartItems')
  cartItemElement.innerHTML="0";
  let totalPrice=0;

  cart.forEach(function(item){

  let listItem=document.createElement("li");

  // For image//
  let img=document.createElement('img');
  img.src=item.image;
  img.alt=item.name;
  img.style.width="50px";
  img.style.height="50px";

listItem.appendChild(img);
  
  listItem.textContent= item.name + "-$"+ item.price;
    cartItemElement.appendChild(listItem);
    totalPrice+=item.price;
  
  }
);

let totalPriceElement=document.createElement("li")
totalPriceElement.textContent="Total:$" + totalPrice;
cartItemElement.appendChild(totalPriceElement);

};



function placeOrder() {
  // Show a confirmation dialog
  const confirmOrder = confirm('Are you sure you want to place the order?');
  if (!confirmOrder) {
    return;
  }

  // Validate form data
  const name = document.getElementById('name').value;
  const quantity = document.getElementById('quantity').value;
  if (!name || !quantity) {
    alert('Please fill out all required fields.');
    return;
  }

  // Show loading indicator
  document.getElementById('loadingIndicator').style.display = 'block';

  // Prepare order data
  const orderData = {
    itemName: name,
    itemQuantity: parseInt(quantity, 10)
  };

  // Simulate order processing delay
  setTimeout(() => {
    // Send order data to the server
    fetch('https://example.com/api/place-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert('Order has been placed successfully!');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('There was an error placing your order. Please try again.');
    })
    .finally(() => {
      // Hide loading indicator
      document.getElementById('loadingIndicator').style.display = 'none';
    });
  }, 2000); // Simulate a 2-second delay for order processing
}

