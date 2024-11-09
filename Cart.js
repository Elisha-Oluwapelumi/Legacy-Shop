let allCart = JSON.parse(localStorage.allCart)
console.log(allCart);

let reverseCart=allCart.slice().reverse()
const display = () => {
    displayCart.innerHTML=''
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
        <div className="d">
        <div class='d-flex gap-2 align-items-center'>
            <h6 class='p-1 pt-0 border border-primary text-center' onclick=add() style="height:25px; width:25px">+</h6>
            <h6 id="cartno"><input type="number" min="1" max="100" value="1"></h6>
            <h6 class='p-1 pt-0 border border-primary text-center' onclick=minus() style="height:25px; width:25px">-</h6>
        </div>
        <button class="btn btn-primary pull-right" onclick=del(${i})>Delete Item</button>
        </div>
      </div>
    </div>
        </div>
        
        `
    })
}

const del=(prdId)=>{
    console.log(prdId);
    
    reverseCart.splice(prdId, 1)
    console.log(reverseCart);
    localStorage.setItem('allCart', JSON.stringify(reverseCart))
    
    display()
}



display()
