/* global Product, Cart */

'use strict';
var index = 0;

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i in Product.allProducts) {
    var optionE = document.createElement('option');
    selectElement.appendChild(optionE);
    optionE.innerText = Product.allProducts[i].name;
    optionE.setAttribute('value', Product.allProducts[i].name);
  }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();
  document.getElementById('catalog').reset();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: guss out the item picked from the select list
  var product = event.target.items.value;
  // TODO: get the quantity
  var quantity = event.target.quantity.value;
  // TODO: using those, add one item to the Cart

  new Cart(product);
  Cart.all[index].addItem(product, quantity);
  console.log(Cart.all[index].items.product);
  index++;
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  var spanE = document.getElementById('itemCount');
  spanE.innerText =' '+ (Cart.all.length-1);

}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  var product = event.target.items.value;
  var quantity = event.target.quantity.value;

  // TODO: Add a new element to the cartContents div with that information
  console.log(product);
  if(document.getElementById(product)){
    console.log('good');
    document.getElementById(product).remove();
  }
  var ulE = document.getElementById('cartContents');
  var liE = document.createElement('li');
  ulE.appendChild(liE);
  liE.setAttribute('id',product);
  liE.innerText = quantity+' of '+ product;


}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();




// /* global Product, Cart */
// 'use strict';
// // Set up an empty cart for use on this page.
// var cart = new Cart([]);
// // On screen load, we call this method to put all of the busmall options
// // (the things in the Product.allProducts array) into the drop down list.
// function populateForm() {
//   var proNames = document.getElementById('items');
//   for (var i = 0; i < Product.allProducts.length; i++) {
//     var itemE = document.createElement('option');
//     proNames.appendChild(itemE);
//     itemE.textContent = Product.allProducts[i].name;
//   }
// }
// populateForm();
// // When someone submits the form, we need to add the selected item to the cart
// // object, save the whole thing back to local storage and update the screen
// // so that it shows the # of items in the cart and a quick preview of the cart itself.
// var cartContent=document.getElementById('cartContents');
// var item =document.getElementsByTagName('input')[1];
// item.setAttribute('id','submit');
// console.log(item);
// var myform = document.getElementById('catalog');
// myform.addEventListener ('click',function(event){
//   event.preventDefault();
  
//   // TODO: Prevent the page from reloading
//   if (event.target.id === 'submit'){
//     var name = name.items.value;
//     var quantity = event.target.quantity.value;
//     console.log(quantity)
//     var newItem = new Cart(name,quantity);
//     // new Cart(newItem);
//     console.log(Cart.all);
//     saveTolocalStorage();
    
//   }
//   // Do all the things ...
//   // addSelectedItemToCart();
//   // cart.saveToLocalStorage();
//   // updateCounter();
//   // updateCartPreview();

// // TODO: Add the selected item and quantity to the cart
//   // TODO: suss out the item picked from the select list
//   // TODO: get the quantity
//   // TODO: using those, add one item to the Cart

// });
// // TODO: Update the cart count in the header nav with the number of items in the Cart
// function render(){
//   for (var i=0;i<Cart.all.length;i++){
//     var h1E=document.createElement('h1');
//     h1E.textContent= `product with name ${Cart.all[i].name} has a quantity of ${Cart.all[i].quantity}`;
//   }
// }
// render();
// console.log(Cart.all);
// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that informatio
// handleSubmit();
// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
// var catalogForm = document.getElementById('catalog');
// catalogForm.addEventListener('submit', handleSubmit);
// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
// populateForm();