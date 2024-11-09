let allCart = JSON.parse(localStorage.allCart);
console.log(allCart);

let reverseCart = allCart.slice().reverse();

const display = () => {
    displayCart.innerHTML = '';
  reverseCart.map((item, i) => {
  displayCart.innerHTML += `
  <div class='col-md-3 bg-transparent px-2 mt-2'>
      <div class="bg-white rounded p-2 text">
          <h6 class='text-success fw-semibold text-end'>32 in stock</h6>
          <img src='/images/${item.img}' alt="" class='col-12'>
          <div class="card-body">
              <h5 class="card-title" style="font-size: 18px; font-weight: bolder;">${item.name}</h5>
              <hr/>
              <p class="card-text">PRICE: ₦${item.price}</p>
              <div class="text-warning">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
              </div>
              <div class='d-flex gap-2 align-items-center'>
                  <h6 class='p-1 pt-0 border border-primary text-center' onclick="increase(${i})" style="height:25px; width:25px">+</h6>
                  <input type="number" id="quantity-${i}" min="1" max="100" value="${item.quantity || 1}" class="text-center" style="width:50px;"/>
                  <h6 class='p-1 pt-0 border border-primary text-center' onclick="decrease(${i})" style="height:25px; width:25px">-</h6>
              </div>
              <div class="d-flex justify-content-between mt-2">
                  <button class="btn btn-primary" onclick="del(${i})">Delete Item</button>
                  <button class="btn btn-success" onclick="payWithPaystack(${item.price}, ${i}, '${item.name}')">Pay</button>
              </div>
          </div>
      </div>
  </div>`;
});
};

const increase = (index) => {
    let quantityInput = document.getElementById(`quantity-${index}`);
    let quantity = parseInt(quantityInput.value) + 1;
    quantityInput.value = quantity;
    reverseCart[index].quantity = quantity;
    localStorage.setItem('allCart', JSON.stringify(reverseCart));
};

const decrease = (index) => {
    let quantityInput = document.getElementById(`quantity-${index}`);
    let quantity = Math.max(1, parseInt(quantityInput.value) - 1);
    quantityInput.value = quantity;
    reverseCart[index].quantity = quantity;
    localStorage.setItem('allCart', JSON.stringify(reverseCart));
};

const del = (prdId) => {
    reverseCart.splice(prdId, 1);
    localStorage.setItem('allCart', JSON.stringify(reverseCart));
    display();
};

let currentUser = localStorage.currentUser

let allUser  = JSON.parse(localStorage.userdetails)

let firstname =  allUser[currentUser].firstname
let  fullname =  `${allUser[currentUser].firstname}    ${allUser[currentUser].lastname} `
 let email = allUser[currentUser].email

 const payWithPaystack = (price, index, itemName) => {
  let quantityInput = document.getElementById(`quantity-${index}`);
  let quantity = parseInt(quantityInput.value); // Get the current quantity value

  let handler = PaystackPop.setup({
      key: 'pk_test_b23a9288d758b375528aeee5d78116da03f87a95', 
      email: email, 
      amount: price * quantity * 100, // Calculate total amount with quantity
      currency: 'NGN',
      ref: 'PSK_' + Math.floor((Math.random() * 1000000000) + 1), 
      metadata: {
          custom_fields: [
              {
                  display_name: "Item Name",
                  variable_name: "item_name",
                  value: itemName
              },
              {
                  display_name: "Quantity",
                  variable_name: "quantity",
                  value: quantity
              }
          ]
      },
      callback: function(response) {
          alert('Payment successful. Transaction reference: ' + response.reference);
      },
      onClose: function() {
          alert('Transaction was not completed');
      }
  });
  handler.openIframe();
};


display();
