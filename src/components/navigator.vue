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
            <a href="http://localhost:8080/" id="logo"><img src="../public/images/logo.jpg" alt="Logo"/></a>
          </div>
          <div class="col-3 div-shop">
            <a href="http://localhost:8080/" id="shop"><img src="../public/images/cart-mo.png" alt="Menu"/></a>
          </div>
        </div>
      </div>
      <div class="col-8 col-all">
        <div id="nav-title" class="">
          <ul>
            <li id="store">
              <a class="nav-link" href="">Store</a>
            </li>
            <li id="products">
              <a class="nav-link" href="">Products</a>
            </li>
            <li id="video">
              <a class="nav-link" href="">Video</a>
            </li>
            <li id="support">
              <a class="nav-link" href="">Support</a>
            </li>
            <li id="company">
              <a class="nav-link" href="">Company</a>
              <div class="sub-com">
                <div class="sub-com-title">
                  <a class="nav-link" href="" v-on:click="company($event, 'aboutUs')">About Us</a>
                </div>
                <div class="sub-com-title">
                  <a class="nav-link" href="" v-on:click="company($event, 'contactUs')">Contact us</a>
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

</style>
