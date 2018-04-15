<template>
  <div id="navigator" class="nav-h-1 nav-h-2">
    <div class="row">
      <div class="col-4 col-all logo-mob">
        <div class="row">
          <div class="col-3 div-menu">
            <a href="" id="menu" v-on:click="showMobileNav">
              <img src="../public/images/icon-menu.png" alt="Menu"/>
            </a>
          </div>
          <div class="col-6">
            <a href="http://localhost:3000/" id="logo"><img src="../public/images/logo.jpg" alt="Logo"/></a>
          </div>
          <div class="col-3 div-shop">
            <a href="http://localhost:3000/" id="shop"><img src="../public/images/cart-mo.png" alt="Menu"/></a>
          </div>
        </div>
      </div>
      <div class="col-8 col-all">
        <div id="nav-title" class="">
          <ul>
            <li id="store">
              <router-link class="nav-link" to="/products">Store</router-link>
            </li>
            <li id="products">
              <router-link  class="nav-link" to="/products">Products</router-link>
            </li>
            <li id="video">
              <router-link class="nav-link" to="/aboutUs">Video</router-link>
            </li>
            <li id="support">
              <router-link class="nav-link" to="/aboutUs">Support</router-link>
            </li>
            <li id="company">
              <router-link class="nav-link" to="/aboutUs">Company</router-link>
              <div class="sub-com">
                <div class="sub-com-title">
                  <router-link class="nav-link" to="/aboutUs">About Us</router-link>
                </div>
                <div class="sub-com-title">
                  <router-link class="nav-link" to="/contactUs">Contact Us</router-link>
                </div>
              </div>
            </li>
            <li id="split">
              <div style="height: 80px;width: 16px;margin-left: 15px;">丨</div>
            </li>
            <li id="search">
              <a class="nav-icon" href=""><img src="../public/images/search.png"/></a>
            </li>
            <li id="user">
              <a class="nav-icon" href=""><img src="../public/images/user.png"/></a>
            </li>
            <li id="cart">
              <a class="nav-icon" href=""><img src="../public/images/cart.png"/></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navigator',
  data () {
    return {

    }
  },
  methods: {
    showMobileNav: function(e) {
      e.preventDefault()
      document.getElementById('mob-nav').style.display = "block"
      document.querySelector("html").style.overflow = 'hidden'
    },
    company: function(e, type) {
      e.preventDefault()
      document.getElementById('content').style.display = "none"
      document.getElementById('slider').style.display = "none"
      document.getElementById('navHot').style.display = "none"
      if(type === 'aboutUs') {
        document.getElementById('aboutUs').style.display = "block"
        document.getElementById('contactUs').style.display = "none"
      }
      if(type === 'contactUs') {
        document.getElementById('aboutUs').style.display = "none"
        document.getElementById('contactUs').style.display = "block"
      }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  li#company .sub-com {
    position: relative;
  }
  .sub-com {
    display: none;
    position: absolute;
    left: -18px;
    top: -3px;
    width: 120px;
    background-color: #fff;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    z-index: 1;
    opacity: 1;
    border-top: 2px solid #0088cc;
  }
  li#company:hover .sub-com{
    display: block;
  }
  .sub-com-title {
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
  .sub-com-title:hover {
    background-color: #eeeeee;
  }
  .sub-com-title:hover a {
    color: #00ade5;
  }

</style>
