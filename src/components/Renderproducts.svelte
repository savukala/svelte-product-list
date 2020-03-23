<script>
import products from '../../products.js';

//build new array from products.products.product_type
let result = products.products.map(a => a.product_type);
console.log(result);
//Create a new SET out of the new array
let uniqueTypes = Array.from(new Set(result));
console.log(uniqueTypes);
//Bring visibility to all items.
function showAllProducts(){
  document.querySelectorAll(".card").forEach(function(el){
    el.style.display = "block";
  });
}
//
function filterProducts(value){
  //Create a valid CSS selector out of the value sent from a button.
  let selector = CSS.escape(value);
  //Return new set of items.
  return function() {
    //Display all items before applying a filter.
    //This could maybe be improved for performance?
    showAllProducts();
    if (value !== 'undefined') {
    document.querySelectorAll(".card:not(#"+selector+")").forEach(function(el){
      el.style.display = "none";
    });
    }
  }
}
</script>
<style>
.render-products {
  padding: 10px;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  margin-bottom: 1em;
  text-align: center;
}

.price {
  color: grey;
  font-size: 22px;
}
img {
  height: auto;
  width: auto;
}
button {
  background-color: white; /* Dark */
  border: 1px solid black;
  color: black;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  margin-left: 2rem;
  margin-top: 0.5rem;
}
button:hover, button:focus {
	cursor: pointer;
}
/* If we need to add a button uncomment this.
  .card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
}
*/
#filter-container {
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}
</style>
<div class="flex-container" id="filter-container">
<!-- Button group from product.js product.product_type-->
    {#each uniqueTypes as productType}
    <!-- If to render buttons which do not exist? -->

    <button class="button" id={productType} on:click={filterProducts(productType)}>
    {productType}
    </button>
    {/each}
    <button class="button" on:click={showAllProducts}>Näytä kaikki</button>
</div>




<div class="flex-container">



  <!-- We iterate over the products array and print them in cards -->
  {#each products.products as product}
  <!-- {#if } -->
  <div class="card" id={product.product_type}>
    <img src={product.image} alt={product.name} style="width:20%">
    <h1>{product.name}</h1>
    <p class="price">{product.volume} - {product.price} €</p>
    <p class="price">{product.type} </p>
    <p class="price">{product.discount} </p>
    <p  style="margin: 5px;">{product.description}</p>
  </div>
  {/each}

</div>
