const plus = document.querySelector(".add");
const less = document.querySelector(".less");
const itemvalue = document.querySelector(".cart-item-value");
const itemprice = document.querySelector(".price");
let value = parseInt(itemprice.innerHTML);

var itemcount = parseInt(itemvalue.innerHTML);
plus.addEventListener("click", () => {
  itemcount++;
  itemvalue.innerHTML = itemcount;
});

less.addEventListener("click", () => {
  if (itemcount > 0) {
    itemcount--;
    itemvalue.innerHTML = itemcount;
  }
});
