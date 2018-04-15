<template>
  <div id="app">
    <div id="panel" v-on:click="hidePanel">
      <div id="configure" v-on:click="stopHide">

      </div>
    </div>
    <mobile-nav></mobile-nav>
    <div id="header">
      <img src="./public/images/icon-icon_shipping.png" class="icon-icon_shipping" height="30px"/>
      <span class="free-orders">Free Shipping on all Orders!</span>
    </div>
    <navigator></navigator>
    <router-view/>
    <foot></foot>
  </div>
</template>

<script>
import mobileNav from '@/components/mobileNav'
import navigator from '@/components/navigator'
import foot from '@/components/foot'

export default {
  name: 'app',
  components: {
    'mobile-nav': mobileNav,
    'navigator': navigator,
    'foot': foot
  },
  methods: {
    stopHide: function (e) {
      e.stopPropagation();
    },
    hidePanel: function (e) {
      e.currentTarget.style.display = "none";
      document.querySelector("html").style.overflow = 'auto';
    },
    showPanel: function (e) {
      //e.preventDefault();
      document.getElementById('panel').style.display = "block";
      document.querySelector("html").style.overflow = 'hidden';
    }
  }
}
</script>

<style src="./public/styles/main.css"></style>
<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
}
#panel {
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0,0,0,0.9);
  animation: con-bg 0.6s;
}
@keyframes con-bg {
  from {
    background: rgba(0,0,0,0);
  }
  to {
    background: rgba(0,0,0,0.9);
  }
}
#configure {
  position: absolute;
  width: 850px;
  height: 90%;
  left: 50%;
  top: 50%;
  min-height: 500px;
  margin-top: 10px;
  transform: translate(-50%, -52%);
}
</style>
