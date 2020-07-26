let card = document.querySelectorAll(".card");
let cartItem = document.querySelectorAll(".fas");
let itemAmount = document.querySelectorAll(".amount");
let cart = document.getElementById("cart");
let cartDetails = document.querySelector(".cartDetails");
let showCart = document.querySelector(".show-cart");
let cartTotal = document.getElementById("totalCart");


let clickedItem = false;
var counter = [];

cartItem.forEach((e) => {
  e.addEventListener("click", function (event) {
    if ((clickedItem = true)) {
      let itemHtml =
        event.target.parentElement.parentElement.nextElementSibling.innerHTML;

      showCart.innerHTML += ` <div class="card-body">
            ${itemHtml}
            <i class="fa fa-trash trash" id="fa-trash" aria-hidden="true"></i>
          </div>`;
          

    }
    
    totalItem(event); 
    deleteItem();
  });
 
});
 
function totalItem(key) {
  let counterItem = parseInt(
    key.target.parentElement.parentElement.nextElementSibling.children[1]
      .children[0].textContent
  );
  counter.push(parseFloat(counterItem));
  var sum = counter.reduce(function (counter, counterItem) {
    counter += counterItem;
    return counter;
  }, 0);
  cartTotal.innerText = sum;
 
}

function deleteItem() {
    let trash = document.querySelectorAll(".trash");
    trash.forEach(element =>{
        element.addEventListener("click", function(e){
        e.currentTarget.parentElement.remove()
     totalItem.counter.splice(e,1)
        })
        })
 
 
}

cart.addEventListener("click", function () {
  cartDetails.classList.toggle("show-cart1");
});
