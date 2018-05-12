<template>
  <div id="mob-nav" v-on:click="hideMobileNav">
    <img id="delete-nav" src="../public/images/delete.png">
    <div id="mob-menu" v-on:click="stopHide">
      <ul>
        <li>
          <a class="nav-link" href="/products">Store</a>
        </li>
        <li>
          <a class="nav-link" href="/products">Products</a>
        </li>
        <li>
          <a class="nav-link" href="/products">Video</a>
        </li>
        <li>
          <a class="nav-link" href="/software">Support</a>
        </li>
        <li>
          <a class="nav-link" href="/aboutUs">Company</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mobileNav',
  data () {
    return {

    }
  },
  methods: {
    hideMobileNav: function(e) {
      e.currentTarget.style.display = "none"
      document.querySelector("html").style.overflow = 'auto'
    },
    stopHide: function (e) {
      e.stopPropagation()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
