const phones = () => {
    window.location.href ="phones.html"
}

const Account = () => {
    window.location.href ="account.html"
}

const homeappliances = () => {
    window.location.href ="homeapp.html"
}

const Shoes = () => {
    window.location.href ="Fashion.html"
}

const Electronics = () => {
    window.location.href ="Electronics.html"
}

const Healthandbeauty = () => {
    window.location.href ="Health.html"
}

const ealthandbeauty = () => {
    window.location.href ="Health.html"
}


let allCart  = []
if(localStorage.allCart){
    let getAllcart = JSON.parse(localStorage.getItem('allCart'))
    
    allCart=getAllcart
    console.log(allCart);
}

const Cart =(id, prdName, prdPrice, img)=>{
    console.log(id);
    console.log(prdName, prdPrice)
  
    
    let eachCart = {
        id:id,
        name:prdName,
        price:prdPrice,
        img:img,
        prdqnt:10,
        newqnt:1,
    }
   
    let addedCart = false
    allCart.map((item, i)=>{
        if(item.id==eachCart.id){
            addedCart=true
            alert("Item Already Added to Cart")
        }
    })
    

    if(!addedCart){
        allCart.push(eachCart)
        console.table(allCart)
        localStorage.setItem('allCart',  JSON.stringify(allCart))
        alert("Item Added To Cart");
    }

    
    
}

