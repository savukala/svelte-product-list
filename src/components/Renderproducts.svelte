<script>
// Import the products from the products.js JSON object array.
import products from '../../products.js';
// Build new array from products.products.product_type
let result = products.products.map(a => a.product_type);
// Create a new SET out of the new array
let uniqueTypes = Array.from(new Set(result));
// Bring visibility to all items.
function showAllProducts(){
  document.querySelectorAll(".card").forEach(function(el){
    el.style.display = "block";
  });
}
// Function filterProducts gets fired when user clicks a button in the filter-container.
function filterProducts(value){
  // Create a valid CSS selector out of the value sent from a button.
  let selector = CSS.escape(value);
  // Return new set of items.
  return function() {
    // Display all items before applying a filter.
    // This could maybe be improved for performance?
    showAllProducts();
    // Only perform operation if button sent argument.
    if (value !== 'undefined') {
      // Get all card elements which do NOT match the value passed by the button.
    document.querySelectorAll(".card:not(#"+selector+")").forEach(function(el){
      // Hide all cards which do NOT match the value passed by the button.
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
  background-color: grey;
  border: 1px solid grey;
  border-radius: 5px;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
}
button:hover, button:focus {
	cursor: pointer;
  background-color: black;
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
<!-- Button group from uniqueTypes array-->
    {#each uniqueTypes as productType}
    <!-- Call function filterProducts with productType as an argument on user click. -->
    <button class="button" id={productType} on:click={filterProducts(productType)}>
    <!-- Text inside the button -->
    {productType}
    </button>
    {/each}
    <!-- Add button to bring all items back onto the view. -->
    <button class="button" on:click={showAllProducts}>Näytä kaikki</button>
</div>




<div class="flex-container">



  <!-- We iterate over the products array and print them in cards -->
  {#each products.products as product}
  <!-- Create a card div for each product -->
  <div class="card" id={product.product_type}>
  <!-- Find product image from the object array and give it a constant width -->
    <img src={product.image} alt={product.name} style="width:20%">
    <!-- Print out the product name -->
    <h1>{product.name}</h1>
    <!-- Print out the product volume and price -->
    <p class="price">{product.volume} - {product.price} €</p>
    <!-- Print out the product type -->
    <p class="price">{product.type} </p>
    <!-- Print out the product discount -->
    <p class="price">{product.discount} </p>
    <!-- Print out the  product description inline style should be thrown inside styles. -->
    <p  style="margin: 5px;">{product.description}</p>
  </div>
  {/each}

</div>
