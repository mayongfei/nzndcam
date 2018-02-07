<template>
  <div id="content">
    <div v-if="items.length > 0">
      <div class="row-responsive" v-for="item in items">
        <div class="responsive" v-for="product in item">
          <a v-bind:href="'/product/' + product.id"><img v-bind:src="'./src/public/images/' + product.src" width="220px"></a><br/>
          <a v-bind:href="'/product/' + product.id">{{product.name}}</a><br/>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Currently there is no Product. Please click 'Add Product' button to add product.</p>
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

</style>
