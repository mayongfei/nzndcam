<template>
  <div>
    <div class="banner product">

    </div>
    <div id="content">
      <div v-if="items.length > 0">
        <div class="row-responsive" v-for="item in items">
          <div class="responsive" v-for="product in item">
            <a href="#"><img v-bind:src="'./src/public/images/products/' + product.src" width="250px"></a><br/>
            <a class="p-title" href="#">{{product.name}}</a>
            <p class="p-des">{{product.description}}</p>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Currently there is no Product. Please click 'Add Product' button to add product.</p>
      </div>
    </div>
  </div>
</template>

<script>
import {getProducts} from '../testData'

export default {
  name: 'products',
  data () {
    return {
      items: getProducts()
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .product {
    background-image: url("../public/images/product-banner.jpg");
  }
  a.p-title {
    font-size: 26px;
    color: #333;
    font-weight: 500;
    display: inline-block;
    max-width: 270px;
    margin-top: 10px;
  }
  a.p-title:hover {
    color: #0088cc;
  }

  .p-des {
    font-size: 16px;
    margin-left: 20px;
    margin-right: 20px;
    max-width: 320px;
    font-weight: 500;
    color: #555555;
    margin-top: 8px;
    margin-bottom: 20px;
    line-height: 26px;
  }

</style>
