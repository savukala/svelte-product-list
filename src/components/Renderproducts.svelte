<script>
import products from '../../products.js';

function filterProducts(productType) {
  if (productType == product_type) {
    //add visibility to all card items.
  }
  //GLOBAL???
  //Maybe throw productType in a store?
  let product_type = productType;
  /*.button
  Add class with visibility none to an !productType items.
  Hide all items which do not correspond to the product_type
  let filteredProducts = document.querySelectorAll(.button);
  if card has not the id of the button item
  */
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
</style>
<div class="flex-container">
<!-- Button group from product.js product.product_type
    {#each products.products as productType}
    <div class="button" id={productType.product_type}on:click={filterProducts(productType.product_type)}>
    {productType.product_type}
    </div>
-->

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
